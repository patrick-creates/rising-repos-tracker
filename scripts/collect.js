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

async function main() {
  const today = new Date().toISOString().split("T")[0];

  const errors = [];

  for (const { owner, repo } of repos) {
    try {
      const data = await fetchRepo(owner, repo);

      const snapshot = {
        date: today,
        stars: data.stargazers_count,
        forks: data.forks_count,
        watchers: data.subscribers_count,
        open_issues: data.open_issues_count,
        description: data.description,
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

      // Polite delay to respect rate limits
      await new Promise((r) => setTimeout(r, 200));
    } catch (e) {
      console.error(`✗ ${owner}/${repo}: ${e.message}`);
      errors.push({ repo: `${owner}/${repo}`, error: e.message });
    }
  }

  if (errors.length > 0) {
    console.log(`\n⚠️  ${errors.length} repo(s) failed:`);
    errors.forEach((e) => console.log(`   - ${e.repo}: ${e.error}`));
  }
  console.log(`\n✓ Successfully updated ${repos.length - errors.length}/${repos.length} repos`);
}

main().catch((e) => { console.error(e); process.exit(1); });
