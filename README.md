# 🚀 Rising Repos Tracker

> Automatically tracks daily GitHub stats (stars, forks, issues, velocity) for rising open source repos.

![Last updated](https://img.shields.io/github/last-commit/patrick-creates/rising-repos-tracker?label=last+updated&color=238636)
![Repos tracked](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/patrick-creates/rising-repos-tracker/main/repos.json&query=%24.length&label=repos+tracked&color=1f6feb)
![GitHub Actions](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/collect.yml?label=collect&logo=github-actions&logoColor=white)
![GitHub Actions](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/discover.yml?label=discover&logo=github-actions&logoColor=white)
![License](https://img.shields.io/github/license/patrick-creates/rising-repos-tracker)

**[→ View Live Dashboard](https://patrick-creates.github.io/rising-repos-tracker/)**

![Dashboard preview](./preview.png)

<!-- AUTOGEN-STATS-START -->
## 📊 Current snapshot

> Auto-updated daily — last refreshed 2026-05-14

| Metric | Value |
|---|---|
| Repos tracked | **16** |
| Total stars | **2,117,021** |
| Total forks | **383,714** |
| Fastest growing | **hermes-agent** (+1306.0/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 149,351 | +1306.0 |
| 2 | [github/spec-kit](https://github.com/github/spec-kit) | 98,801 | +940.0 |
| 3 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 181,740 | +692.0 |
| 4 | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 78,256 | +363.0 |
| 5 | [openclaw/openclaw](https://github.com/openclaw/openclaw) | 371,725 | +254.0 |

### 🆕 Recently added

- [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) — added 2026-05-13 — Autonomous AI dev loop for Claude Code with intelligent exit detection
- [openclaw/openclaw](https://github.com/openclaw/openclaw) — added 2026-05-13 — Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞 
- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) — added 2026-05-13 — AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so that you can focus on what matters.
<!-- AUTOGEN-STATS-END -->

<!-- AUTOGEN-REPOS-START -->
## 📋 All tracked repos

| Repo | Stars | Forks | Stars/day |
|---|---:|---:|---:|
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 371,725 | 76,949 | +254.0 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,293 | 46,238 | +12.0 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 181,740 | 28,008 | +692.0 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 162,209 | 21,116 | +37.0 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 149,351 | 23,564 | +1306.0 |
| [langgenius/dify](https://github.com/langgenius/dify) | 141,323 | 22,201 | +98.0 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 136,994 | 19,525 | +102.0 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 136,696 | 22,605 | +61.0 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 123,109 | 8,320 | +101.0 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 110,784 | 59,409 | +32.0 |
| [github/spec-kit](https://github.com/github/spec-kit) | 98,801 | 8,604 | +940.0 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 79,970 | 16,785 | +86.0 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 78,256 | 8,035 | +363.0 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 77,046 | 15,167 | +48.0 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 75,602 | 6,494 | +222.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,122 | 694 | +10.0 |
<!-- AUTOGEN-REPOS-END -->

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

## Fork & use it for yourself

This is my personal tracker — the watch list reflects what I find interesting. If you want to track different repos, the best path is to **fork this repo and run your own**.

### Setup

1. Fork this repo to your account
2. Replace the contents of [`repos.json`](./repos.json) with the repos you want to track (or just leave one entry — `discover.yml` will auto-add more every Monday)
3. Go to **Settings → Pages** and enable GitHub Pages from the `main` branch
4. Go to **Actions** and run **Collect Repo Stats** once manually to seed your first data point
5. Your dashboard will be live at `https://YOUR-USERNAME.github.io/rising-repos-tracker/`

That's it — daily collection and weekly discovery run automatically on schedule. Zero ongoing maintenance.

### Customizing what gets discovered

Edit [`scripts/discover.js`](./scripts/discover.js) to change:

- `MIN_STARS` — minimum star threshold for candidates
- `MAX_AGE_DAYS` — how recent a repo must be
- `MAX_NEW_REPOS` — how many to add per discovery run
- The `queries` array — GitHub Search API queries that define what "trending" means to you

### Adding a repo manually

Just edit `repos.json` directly:

```json
{
  "owner": "OWNER",
  "repo": "REPO",
  "added": "YYYY-MM-DD",
  "notes": "why you're tracking this"
}
```

The next daily collect run picks it up automatically.
## Stack

- **GitHub Actions** — scheduling and automation
- **GitHub Pages** — dashboard hosting
- **GitHub API** — data source
- **Chart.js** — star growth visualization
- No dependencies, no build step, no database

## License

MIT
