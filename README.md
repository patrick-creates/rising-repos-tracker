# 🚀 Rising Repos Tracker

> Automatically tracks daily GitHub stats (stars, forks, issues, velocity) for rising open source repos.

**[→ View Live Dashboard](https://patrick-creates.github.io/rising-repos-tracker/)**

---

## What it does

- Collects daily snapshots of stars, forks, watchers and open issues for every tracked repo
- Discovers new trending repos automatically every Monday using the GitHub Search API
- Stores all history as plain JSON — no database, no backend
- Renders a live dashboard via GitHub Pages — updates daily, zero maintenance

## How it works

```
repos.json  ←  discover.yml adds new repos every Monday
    ↓
collect.yml runs daily at 06:00 UTC
    ↓
data/{owner}/{repo}/history.json  ←  one entry per day
    ↓
index.html reads data at runtime via raw.githubusercontent.com
```

## Tracked repos

Data lives in [`data/`](./data) — one folder per repo, one `history.json` per entry.  
The full watch list is in [`repos.json`](./repos.json).

## Workflows

| Workflow | Schedule | What it does |
|---|---|---|
| `collect.yml` | Daily 06:00 UTC | Fetches latest stats for all repos in `repos.json` |
| `discover.yml` | Monday 05:00 UTC | Finds trending repos and appends them to `repos.json` |

## Adding a repo manually

Edit [`repos.json`](./repos.json) and add an entry:

```json
{
  "owner": "OWNER",
  "repo": "REPO",
  "added": "YYYY-MM-DD",
  "notes": "why you're tracking this"
}
```

The next daily collect run will pick it up automatically.

## Stack

- **GitHub Actions** — scheduling and automation
- **GitHub Pages** — dashboard hosting
- **GitHub API** — data source
- **Chart.js** — star growth visualization
- No dependencies, no build step, no database

## License

MIT

Commit message: `docs: rewrite README with full project description`

Done? That gives you a clean, informative README that works well as both a project page and a reference for anyone who forks it.
