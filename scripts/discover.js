const fs = require("fs");

const token = process.env.GITHUB_TOKEN;
const MIN_STARS = 500;
const MIN_STARS_LAST_WEEK = 100;
const MAX_AGE_DAYS = 180;
const MAX_NEW_REPOS = 10;

async function searchGitHub(query) {
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=30`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
    },
  });
  if (!res.ok) throw new Error(`Search failed: ${res.status}`);
  return res.json();
}

async function getStarActivity(owner, repo) {
  // Get stargazers from last 7 days via events API
  const url = `https://api.github.com/repos/${owner}/${repo}/stargazers?per_page=100`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.star+json", // includes starred_at
    },
  });
  if (!res.ok) return 0;
  const data = await res.json();
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  return data.filter((s) => new Date(s.starred_at) > oneWeekAgo).length;
}

async function main() {
  const existing = JSON.parse(fs.readFileSync("repos.json", "utf8"));
  const existingKeys = new Set(existing.map((r) => `${r.owner}/${r.repo}`));

  const cutoffDate = new Date(Date.now() - MAX_AGE_DAYS * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const queries = [
    `stars:>${MIN_STARS} created:>${cutoffDate}`,
    `stars:>${MIN_STARS} pushed:>${cutoffDate} topic:ai`,
    `stars:>${MIN_STARS} pushed:>${cutoffDate} topic:llm`,
    `stars:>${MIN_STARS} pushed:>${cutoffDate} topic:cli`,
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
    // Respect rate limits
    await new Promise((r) => setTimeout(r, 1000));
  }

  console.log(`Found ${candidates.size} candidates not yet tracked`);

  const newRepos = [];
  for (const [key, repo] of candidates) {
    if (newRepos.length >= MAX_NEW_REPOS) break;

    const [owner, name] = key.split("/");
    const weeklyStars = await getStarActivity(owner, name);
    console.log(`  ${key}: +${weeklyStars} stars this week`);

    if (weeklyStars >= MIN_STARS_LAST_WEEK) {
      newRepos.push({
        owner,
        repo: name,
        added: new Date().toISOString().split("T")[0],
        notes: repo.description || "",
        stars_at_add: repo.stargazers_count,
        weekly_stars_at_add: weeklyStars,
      });
    }

    await new Promise((r) => setTimeout(r, 500));
  }

  if (newRepos.length === 0) {
    console.log("No new trending repos found today.");
    return;
  }

  const updated = [...existing, ...newRepos];
  fs.writeFileSync("repos.json", JSON.stringify(updated, null, 2));
  console.log(`✓ Added ${newRepos.length} new repos to repos.json`);
  for (const r of newRepos) {
    console.log(`  + ${r.owner}/${r.repo} (⭐ ${r.stars_at_add}, +${r.weekly_stars_at_add}/week)`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
