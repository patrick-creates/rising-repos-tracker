# 🚀 Rising Repos Tracker

> Automatically tracks daily GitHub stats (stars, forks, issues, velocity) for rising open source repos.

[![Maintained by Telosignal](https://img.shields.io/badge/Maintained%20by-Telosignal-green)](https://www.telosignal.com/)
![Last updated](https://img.shields.io/github/last-commit/patrick-creates/rising-repos-tracker?label=last+updated&color=238636)
![Repos tracked](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/patrick-creates/rising-repos-tracker/main/repos.json&query=%24.length&label=repos+tracked&color=1f6feb)
![Collect](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/collect.yml?label=collect&logo=github-actions&logoColor=white)
![Discover](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/discover.yml?label=discover&logo=github-actions&logoColor=white)
![Summarize](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/summarize.yml?label=summarize&logo=github-actions&logoColor=white)
![Screenshot](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/screenshot.yml?label=screenshot&logo=github-actions&logoColor=white)
![License](https://img.shields.io/github/license/patrick-creates/rising-repos-tracker)

**[→ View Live Dashboard](https://patrick-creates.github.io/rising-repos-tracker/)**

Built and maintained by [Telosignal](https://www.telosignal.com/).

![Dashboard preview](./preview.png)

<!-- AUTOGEN-STATS-START -->
## 📊 Current snapshot

> Auto-updated daily — last refreshed 2026-05-21

| Metric | Value |
|---|---|
| Repos tracked | **46** |
| Total stars | **3,822,291** |
| Total forks | **665,813** |
| Fastest growing | **hermes-agent** (+1546.4/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 160,416 | +1546.4 |
| 2 | [nexu-io/open-design](https://github.com/nexu-io/open-design) | 48,397 | +1407.7 |
| 3 | [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 76,867 | +941.0 |
| 4 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 187,903 | +856.9 |
| 5 | [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 52,091 | +837.7 |

### 🆕 Recently added

- [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) — added 2026-05-18 — ✨ Light and Fast AI Assistant. Support: Web | iOS | MacOS | Android |  Linux | Windows
- [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) — added 2026-05-18 — 🐙 Guides, papers, lessons, notebooks and resources for prompt engineering, context engineering, RAG, and AI Agents.
- [farion1231/cc-switch](https://github.com/farion1231/cc-switch) — added 2026-05-18 — A cross-platform desktop All-in-One assistant for Claude Code, Codex, OpenCode, OpenClaw, Gemini CLI & Hermes Agent. Only official website: ccswitch.io
<!-- AUTOGEN-STATS-END -->

<!-- AUTOGEN-DIAGRAM-START -->
## 🔄 How it works

```mermaid
graph LR
    repos[("repos.json")]:::data
    history[("data/[owner]/[repo]/<br/>history.json")]:::data
    summary[("data/[owner]/[repo]/<br/>summary.json")]:::data
    readme[("README.md")]:::data
    preview[("preview.png")]:::data
    dashboard["index.html<br/>(GitHub Pages)"]:::output
    collect_yml["Collect Repo Stats<br/><i>Daily 05:17 UTC</i>"]:::workflow
    discover_yml["Discover Trending Repos<br/><i>Monday 04:43 UTC</i>"]:::workflow
    screenshot_yml["Screenshot Dashboard<br/><i>after collect repo stats</i>"]:::workflow
    summarize_yml["Summarize Repos<br/><i>after discover trending repos</i>"]:::workflow
    repos --> collect_yml
    collect_yml --> history
    collect_yml --> readme
    repos --> discover_yml
    discover_yml -.->|appends| repos
    dashboard --> screenshot_yml
    screenshot_yml --> preview
    repos --> summarize_yml
    summarize_yml --> summary
    history --> dashboard
    summary --> dashboard
    preview --> readme
    classDef workflow fill:#1f6feb,stroke:#58a6ff,color:#fff
    classDef data fill:#21262d,stroke:#7d8590,color:#e6edf3
    classDef output fill:#238636,stroke:#3fb950,color:#fff
```
<!-- AUTOGEN-DIAGRAM-END -->

<!-- AUTOGEN-WORKFLOWS-START -->
## ⚙️ Workflows

| File | Schedule | Name |
|---|---|---|
| `collect.yml` | Daily 05:17 UTC | Collect Repo Stats |
| `discover.yml` | Monday 04:43 UTC | Discover Trending Repos |
| `screenshot.yml` | After Collect Repo Stats | Screenshot Dashboard |
| `summarize.yml` | After Discover Trending Repos | Summarize Repos |

> All workflows commit results directly back to the repo. Schedules are best-effort — GitHub Actions cron can drift by a few minutes.
<!-- AUTOGEN-WORKFLOWS-END -->

<!-- AUTOGEN-REPOS-START -->
## 📋 All tracked repos

| Repo | Stars | Forks | Stars/day |
|---|---:|---:|---:|
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 373,637 | 77,597 | +270.8 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 187,903 | 29,080 | +856.9 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,441 | 46,226 | +20.0 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 162,611 | 21,157 | +54.9 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 160,416 | 26,051 | +1546.4 |
| [langgenius/dify](https://github.com/langgenius/dify) | 142,125 | 22,335 | +112.5 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 138,032 | 19,737 | +142.5 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 137,262 | 22,703 | +78.4 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 124,247 | 8,444 | +154.9 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 111,179 | 59,638 | +53.4 |
| [github/spec-kit](https://github.com/github/spec-kit) | 104,268 | 9,184 | +800.9 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,057 | 59,701 | +6.7 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 81,102 | 8,356 | +401.1 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 80,625 | 17,035 | +92.6 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 77,465 | 15,240 | +58.4 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 77,159 | 6,654 | +222.4 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 76,867 | 4,993 | +941.0 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 74,816 | 8,103 | +38.3 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 74,332 | 9,424 | +133.3 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 73,671 | 12,457 | +20.7 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,257 | 13,588 | +5.3 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 64,887 | 5,745 | +129.0 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 62,948 | 3,531 | +478.7 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 61,692 | 10,081 | +205.0 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 60,986 | 6,646 | +199.3 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 58,822 | 4,781 | +164.7 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 54,575 | 8,789 | +69.0 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 54,096 | 5,419 | +199.3 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 52,971 | 24,362 | +23.7 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 52,602 | 6,936 | +67.3 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 52,091 | 3,162 | +837.7 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 52,003 | 6,316 | +447.7 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 49,950 | 5,559 | +41.3 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 49,685 | 3,485 | +299.0 |
| [tw93/Pake](https://github.com/tw93/Pake) | 48,860 | 9,870 | +27.0 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 48,397 | 5,496 | +1407.7 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 47,774 | 8,222 | +128.7 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 46,442 | 9,708 | +398.7 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 45,087 | 4,451 | +42.0 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 44,672 | 10,120 | +39.0 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 44,417 | 3,819 | +107.3 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 42,890 | 7,555 | +70.0 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 40,518 | 6,734 | +44.3 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 40,238 | 2,563 | +118.0 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,040 | 4,061 | +14.7 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,176 | 699 | +8.0 |
<!-- AUTOGEN-REPOS-END -->

---

## What it does

- Collects daily snapshots of stars, forks, watchers and open issues for every tracked repo
- Discovers new trending repos automatically every Monday using the GitHub Search API
- Generates AI summaries (use cases, similar tools, tags) for each tracked repo via GitHub Models
- Stores all history as plain JSON — no database, no backend
- Renders a live dashboard via GitHub Pages — updates daily, zero maintenance

## Tracked repos

Data lives in [`data/`](./data) — one folder per repo, one `history.json` per entry.  
The full watch list is in [`repos.json`](./repos.json).

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
- **GitHub Models** — free AI summaries (gpt-4o-mini)
- **Chart.js** — star growth visualization
- **Mermaid** — architecture diagram (rendered by GitHub)
- No dependencies, no build step, no database

## License

MIT
