const fs = require("fs");
const path = require("path");

const repos = JSON.parse(fs.readFileSync("repos.json", "utf8"));

// ---- Workflow scanner ----
function scanWorkflows() {
  const dir = ".github/workflows";
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith(".yml") || f.endsWith(".yaml"))
    .map((file) => {
      const content = fs.readFileSync(path.join(dir, file), "utf8");
      const nameMatch = content.match(/^name:\s*(.+)$/m);
      const cronMatch = content.match(/cron:\s*["']([^"']+)["']/);
      const runAfterMatch = content.match(/workflows:\s*\[\s*["']([^"']+)["']/);
      return {
        file,
        name: nameMatch ? nameMatch[1].trim() : file,
        cron: cronMatch ? cronMatch[1] : null,
        runsAfter: runAfterMatch ? runAfterMatch[1] : null,
      };
    });
}

function cronToHuman(cron) {
  if (!cron) return "—";
  const parts = cron.split(/\s+/);
  if (parts.length !== 5) return cron;
  const [min, hour, , , dow] = parts;
  const time = `${hour.padStart(2, "0")}:${min.padStart(2, "0")} UTC`;
  const days = { "1": "Monday", "2": "Tuesday", "3": "Wednesday", "4": "Thursday", "5": "Friday", "6": "Saturday", "0": "Sunday" };
  if (dow === "*") return `Daily ${time}`;
  if (days[dow]) return `${days[dow]} ${time}`;
  return `${time} (cron: ${cron})`;
}

function generateMermaid(workflows) {
  const nodes = [
    `    repos[("repos.json")]:::data`,
    `    history[("data/[owner]/[repo]/<br/>history.json")]:::data`,
    `    summary[("data/[owner]/[repo]/<br/>summary.json")]:::data`,
    `    readme[("README.md")]:::data`,
    `    preview[("preview.png")]:::data`,
    `    dashboard["index.html<br/>(GitHub Pages)"]:::output`,
  ];

  const edges = [];

  for (const wf of workflows) {
    const schedule = wf.cron
      ? cronToHuman(wf.cron)
      : (wf.runsAfter ? `after ${wf.runsAfter.toLowerCase()}` : "manual");
    const safeId = wf.file.replace(/[^a-z0-9]/gi, "_");
    nodes.push(`    ${safeId}["${wf.name}<br/><i>${schedule}</i>"]:::workflow`);

    const name = wf.file.toLowerCase();
    if (name.includes("discover")) {
      edges.push(`    repos --> ${safeId}`);
      edges.push(`    ${safeId} -.->|appends| repos`);
    } else if (name.includes("collect")) {
      edges.push(`    repos --> ${safeId}`);
      edges.push(`    ${safeId} --> history`);
      edges.push(`    ${safeId} --> readme`);
    } else if (name.includes("summarize")) {
      edges.push(`    repos --> ${safeId}`);
      edges.push(`    ${safeId} --> summary`);
    } else if (name.includes("screenshot")) {
      edges.push(`    dashboard --> ${safeId}`);
      edges.push(`    ${safeId} --> preview`);
    }
  }

  edges.push(`    history --> dashboard`);
  edges.push(`    summary --> dashboard`);
  edges.push(`    preview --> readme`);

  return "```mermaid\ngraph LR\n" +
    nodes.join("\n") + "\n" +
    edges.join("\n") + "\n" +
    "    classDef workflow fill:#1f6feb,stroke:#58a6ff,color:#fff\n" +
    "    classDef data fill:#21262d,stroke:#7d8590,color:#e6edf3\n" +
    "    classDef output fill:#238636,stroke:#3fb950,color:#fff\n" +
    "```";
}

// ---- Helpers ----
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
  const recentlyAdded = [...enriched]
    .sort((a, b) => (b.added || "").localeCompare(a.added || ""))
    .slice(0, 3);
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

  // ---- Workflows + Diagram ----
  const workflows = scanWorkflows();

  const diagramBlock = `<!-- AUTOGEN-DIAGRAM-START -->
## 🔄 How it works

${generateMermaid(workflows)}
<!-- AUTOGEN-DIAGRAM-END -->`;

  const workflowRows = workflows.map((w) => {
    const schedule = w.cron
      ? cronToHuman(w.cron)
      : (w.runsAfter ? `After ${w.runsAfter}` : "Manual");
    return `| \`${w.file}\` | ${schedule} | ${w.name} |`;
  }).join("\n");

  const workflowsBlock = `<!-- AUTOGEN-WORKFLOWS-START -->
## ⚙️ Workflows

| File | Schedule | Name |
|---|---|---|
${workflowRows}

> All workflows commit results directly back to the repo. Schedules are best-effort — GitHub Actions cron can drift by a few minutes.
<!-- AUTOGEN-WORKFLOWS-END -->`;

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
    /<!-- AUTOGEN-DIAGRAM-START -->[\s\S]*?<!-- AUTOGEN-DIAGRAM-END -->/,
    diagramBlock
  );
  readme = readme.replace(
    /<!-- AUTOGEN-WORKFLOWS-START -->[\s\S]*?<!-- AUTOGEN-WORKFLOWS-END -->/,
    workflowsBlock
  );
  readme = readme.replace(
    /<!-- AUTOGEN-REPOS-START -->[\s\S]*?<!-- AUTOGEN-REPOS-END -->/,
    reposBlock
  );

  fs.writeFileSync("README.md", readme);
  console.log(`✓ README updated: ${enriched.length} repos, ${fmt(totalStars)} stars, ${workflows.length} workflows`);
}

main();
