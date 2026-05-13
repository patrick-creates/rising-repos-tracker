const fs = require("fs");

const token = process.env.GITHUB_TOKEN;
const MIN_STARS = 100;
const MAX_AGE_DAYS = 365;
const MAX_NEW_REPOS = 15;
const MIN_GROWTH_PERCENT = 5; // at least 5% growth vs stars_at_add

async function ghFetch(url) {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
    },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

async function searchGitHub(query) {
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=30`;
  return ghFetch(url);
}

async function getRepoDetails(owner, repo) {
  return ghFetch(`https://api.github.com/repos/${owner}/${repo}`);
}

async function main() {
  const existing = JSON.parse(fs.readFileSync("repos.json", "utf8"));
  const existingKeys = new Set(existing.map((r) => `${r.owner}/${r.repo}`));

  const cutoffDate = new Date(Date.now() - MAX_AGE_DAYS * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const queries = [
    `stars:>${MIN_STARS} created:>${cutoffDate} topic:ai`,
    `stars:>${MIN_STARS} created:>${cutoffDate} topic:llm`,
    `stars:>${MIN_STARS} created:>${cutoffDate} topic:cli`,
    `stars:>${MIN_STARS} created:>${cutoffDate} topic:agent`,
    `stars:>${MIN_STARS} created:>${cutoffDate} topic:mcp`,
    `stars:>${MIN_STARS} pushed:>2026-01-01 topic:claude`,
    `stars:>${MIN_STARS} pushed:>2026-01-01 topic:openai`,
  ];

  const candidates = new Map();

  for (const query of queries) {
    const result = await searchGitHub(query);
    for (const repo of result.items || []) {
      const key = `${repo.owner.login}/${repo.name}`;
      if (!existingKeys.has(key)) {
        candidates.set(key, repo);
      }
    }
    await new Promise((r) => setTimeout(r, 1500));
  }

  console.log(`Found ${candidates.size} candidates not yet tracked`);

  // Sort by stars descending — highest momentum first
  const sorted = [...candidates.values()].sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  );

  const newRepos = [];
  for (const repo of sorted) {
    if (newRepos.length >= MAX_NEW_REPOS) break;

    const key = `${repo.owner.login}/${repo.name}`;
    const createdDaysAgo = Math.floor(
      (Date.now() - new Date(repo.created_at)) / (1000 * 60 * 60 * 24)
    );
    const starsPerDay = (repo.stargazers_count / createdDaysAgo).toFixed(1);

    console.log(`  + ${key}: ⭐ ${repo.stargazers_count} (${starsPerDay}/day, ${createdDaysAgo} days old)`);

    newRepos.push({
      owner: repo.owner.login,
      repo: repo.name,
      added: new Date().toISOString().split("T")[0],
      notes: repo.description || "",
      stars_at_add: repo.stargazers_count,
      stars_per_day_at_add: parseFloat(starsPerDay),
      created_at: repo.created_at.split("T")[0],
    });
  }

  if (newRepos.length === 0) {
    console.log("No new repos found.");
    return;
  }

  const updated = [...existing, ...newRepos];
  fs.writeFileSync("repos.json", JSON.stringify(updated, null, 2));
  console.log(`\n✓ Added ${newRepos.length} repos to repos.json`);
}

main().catch((e) => { console.error(e); process.exit(1); });
