const fs = require("fs");
const path = require("path");

const repos = JSON.parse(fs.readFileSync("repos.json", "utf8"));
const token = process.env.GITHUB_TOKEN;

async function fetchRepo(owner, repo) {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
    },
  });
  if (!res.ok) throw new Error(`Failed: ${owner}/${repo} — ${res.status}`);
  return res.json();
}

const key = (owner, repo) => `${owner}/${repo}`.toLowerCase();

// Exact-case check: on case-insensitive file systems existsSync("Foo") is true for "foo".
function existsExact(p) {
  const dir = path.dirname(p);
  return fs.existsSync(dir) && fs.readdirSync(dir).includes(path.basename(p));
}

function readHistory(dir) {
  const p = path.join(dir, "history.json");
  return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, "utf8")) : [];
}

// Moves data/<old> to data/<new>; if both exist, merges history by date (new wins) and keeps the new summary.
// shortcut: only the repo folder name is compared case-exactly, not the owner folder — enough for GitHub renames.
function mergeData(fromOwner, fromRepo, toOwner, toRepo) {
  const from = path.join("data", fromOwner, fromRepo);
  const to = path.join("data", toOwner, toRepo);
  if (!existsExact(from)) return;
  fs.mkdirSync(path.dirname(to), { recursive: true });
  if (!existsExact(to)) {
    const tmp = `${to}.tmp-rename`; // two steps so a case-only rename also works on Windows/macOS
    fs.renameSync(from, tmp);
    fs.renameSync(tmp, to);
    return;
  }
  const byDate = new Map(readHistory(from).map((e) => [e.date, e]));
  for (const e of readHistory(to)) byDate.set(e.date, e);
  const merged = [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date));
  fs.writeFileSync(path.join(to, "history.json"), JSON.stringify(merged, null, 2));
  const summary = path.join(from, "summary.json");
  if (fs.existsSync(summary) && !fs.existsSync(path.join(to, "summary.json"))) {
    fs.copyFileSync(summary, path.join(to, "summary.json"));
  }
  fs.rmSync(from, { recursive: true, force: true });
}

const STALL_GAIN_30D = 300; // under 10 stars/day over 30 days = no longer rising
const SPIKE_PER_DAY = 1000;  // this fast both lifetime and last week = verify before trusting

// Stars gained since the first snapshot at most `days` before the last one, and over how many days.
function gainSince(history, days) {
  const last = history[history.length - 1];
  const from = new Date(last.date) - days * 86400000;
  const base = history.find((e) => new Date(e.date) >= from);
  return { gain: last.stars - base.stars, days: Math.max(1, (new Date(last.date) - new Date(base.date)) / 86400000) };
}

// "spike", "stalled" or undefined. Recomputed every run, so a stalled repo that picks up again loses the mark.
function classify(history, meta) {
  if (!history?.length) return undefined;
  const last = history[history.length - 1];
  if (meta.created_at) {
    const age = Math.max(1, (new Date(last.date) - new Date(meta.created_at)) / 86400000);
    const week = gainSince(history, 7);
    if (last.stars / age >= SPIKE_PER_DAY && week.gain / week.days >= SPIKE_PER_DAY) return "spike";
  }
  const span = (new Date(last.date) - new Date(history[0].date)) / 86400000;
  if (span >= 30 && gainSince(history, 30).gain < STALL_GAIN_30D) return "stalled";
  return undefined;
}

async function main() {
  const today = new Date().toISOString().split("T")[0];

  const errors = [];
  // Renamed or transferred repos still answer under the old name (API redirect) and get re-added
  // by discover under the new one. Track each repo once, under the name GitHub reports now.
  const tracked = new Map(repos.map((r) => [key(r.owner, r.repo), r]));
  const dropped = new Set();
  let reposChanged = false;

  for (const entry of repos) {
    if (dropped.has(entry)) continue;
    let { owner, repo } = entry;
    try {
      const data = await fetchRepo(owner, repo);

      if (data.full_name !== `${owner}/${repo}`) {
        const [newOwner, newRepo] = data.full_name.split("/");
        const other = tracked.get(key(newOwner, newRepo));
        mergeData(owner, repo, newOwner, newRepo);
        if (other && other !== entry) {
          dropped.add(entry);
          if (entry.added && (!other.added || entry.added < other.added)) other.added = entry.added;
        } else {
          tracked.delete(key(owner, repo));
          entry.owner = newOwner;
          entry.repo = newRepo;
          tracked.set(key(newOwner, newRepo), entry);
        }
        console.log(`↪ ${owner}/${repo} → ${data.full_name}${dropped.has(entry) ? " (duplicate, merged)" : ""}`);
        reposChanged = true;
        owner = newOwner;
        repo = newRepo;
      }

      const snapshot = {
        date: today,
        stars: data.stargazers_count,
        forks: data.forks_count,
        watchers: data.subscribers_count,
        open_issues: data.open_issues_count,
        description: data.description,
        topics: data.topics || [], // shown in the dashboard detail view instead of AI summaries
      };

      const dir = path.join("data", owner, repo);
      fs.mkdirSync(dir, { recursive: true });

      const filePath = path.join(dir, "history.json");
      const history = fs.existsSync(filePath)
        ? JSON.parse(fs.readFileSync(filePath, "utf8"))
        : [];

      const filtered = history.filter((e) => e.date !== today);
      filtered.push(snapshot);

      fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2));
      console.log(`✓ ${owner}/${repo}: ⭐ ${snapshot.stars}`);

      const status = classify(filtered, entry);
      if (entry.status !== status) {
        if (status) entry.status = status;
        else delete entry.status;
        reposChanged = true;
      }

      // Polite delay to respect rate limits
      await new Promise((r) => setTimeout(r, 200));
    } catch (e) {
      console.error(`✗ ${owner}/${repo}: ${e.message}`);
      errors.push({ repo: `${owner}/${repo}`, error: e.message });
    }
  }

  if (reposChanged) {
    const kept = repos.filter((r) => !dropped.has(r));
    fs.writeFileSync("repos.json", JSON.stringify(kept, null, 2));
    console.log(`
↪ repos.json: ${dropped.size} duplicate(s) removed, renamed or status-changed entries updated`);
  }

  if (errors.length > 0) {
    console.log(`\n⚠️  ${errors.length} repo(s) failed:`);
    errors.forEach((e) => console.log(`   - ${e.repo}: ${e.error}`));
  }
  console.log(`\n✓ Successfully updated ${repos.length - errors.length}/${repos.length} repos`);
}

if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });

module.exports = { mergeData, classify, gainSince };
