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

  for (const { owner, repo } of repos) {
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
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
