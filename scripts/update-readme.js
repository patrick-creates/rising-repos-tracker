const fs = require("fs");
const path = require("path");

const repos = JSON.parse(fs.readFileSync("repos.json", "utf8"));

function loadHistory(owner, repo) {
  const p = path.join("data", owner, repo, "history.json");
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function calcVelocity(history, meta) {
  if (history && history.length >= 2) {
    const first = history[0], last = history[history.length - 1];
    const days = Math.max(1, (new Date(last.date) - new Date(first.date)) / 86400000);
    return (last.stars - first.stars) / days;
  }
  if (meta?.stars_per_day_at_add) return parseFloat(meta.stars_per_day_at_add);
  return 0;
}

function fmt(n) {
  return Number(n).toLocaleString("en-US");
}

function main() {
  const enriched = repos.map((meta) => {
    const history = loadHistory(meta.owner, meta.repo);
    const latest = history?.length ? history[history.length - 1] : null;
    return {
      ...meta,
      stars: latest?.stars || 0,
      forks: latest?.forks || 0,
      issues: latest?.open_issues || 0,
      velocity: calcVelocity(history, meta),
    };
  });

  const totalStars = enriched.reduce((s, r) => s + r.stars, 0);
  const totalForks = enriched.reduce((s, r) => s + r.forks, 0);
  const topByVelocity = [...enriched].sort((a, b) => b.velocity - a.velocity).slice(0, 5);
  const recentlyAdded = [...enriched].sort((a, b) => (b.added || "").localeCompare(a.added || "")).slice(0, 3);
  const today = new Date().toISOString().split("T")[0];

  // ---- Stats block ----
  const statsBlock = `<!-- AUTOGEN-STATS-START -->
## 📊 Current snapshot

> Auto-updated daily — last refreshed ${today}

| Metric | Value |
|---|---|
| Repos tracked | **${enriched.length}** |
| Total stars | **${fmt(totalStars)}** |
| Total forks | **${fmt(totalForks)}** |
| Fastest growing | **${topByVelocity[0]?.repo || "—"}** (+${topByVelocity[0]?.velocity.toFixed(1) || 0}/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
${topByVelocity.map((r, i) =>
  `| ${i+1} | [${r.owner}/${r.repo}](https://github.com/${r.owner}/${r.repo}) | ${fmt(r.stars)} | +${r.velocity.toFixed(1)} |`
).join("\n")}

### 🆕 Recently added

${recentlyAdded.map(r =>
  `- [${r.owner}/${r.repo}](https://github.com/${r.owner}/${r.repo}) — added ${r.added}${r.notes ? ` — ${r.notes}` : ""}`
).join("\n")}
<!-- AUTOGEN-STATS-END -->`;

  // ---- Full repo list ----
  const sortedAll = [...enriched].sort((a, b) => b.stars - a.stars);
  const reposBlock = `<!-- AUTOGEN-REPOS-START -->
## 📋 All tracked repos

| Repo | Stars | Forks | Stars/day |
|---|---:|---:|---:|
${sortedAll.map(r =>
  `| [${r.owner}/${r.repo}](https://github.com/${r.owner}/${r.repo}) | ${fmt(r.stars)} | ${fmt(r.forks)} | ${r.velocity > 0 ? '+' + r.velocity.toFixed(1) : '—'} |`
).join("\n")}
<!-- AUTOGEN-REPOS-END -->`;

  // ---- Inject into README ----
  let readme = fs.readFileSync("README.md", "utf8");
  readme = readme.replace(
    /<!-- AUTOGEN-STATS-START -->[\s\S]*?<!-- AUTOGEN-STATS-END -->/,
    statsBlock
  );
  readme = readme.replace(
    /<!-- AUTOGEN-REPOS-START -->[\s\S]*?<!-- AUTOGEN-REPOS-END -->/,
    reposBlock
  );

  fs.writeFileSync("README.md", readme);
  console.log(`✓ README updated with ${enriched.length} repos, ${fmt(totalStars)} total stars`);
}

main();
