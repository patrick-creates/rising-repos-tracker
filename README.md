# 🚀 Rising Repos Tracker

> Automatically tracks daily GitHub stats (stars, forks, issues, velocity) for rising open source repos.

![Last updated](https://img.shields.io/github/last-commit/patrick-creates/rising-repos-tracker?label=last+updated&color=238636)
![Repos tracked](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/patrick-creates/rising-repos-tracker/main/repos.json&query=%24.length&label=repos+tracked&color=1f6feb)
![Collect](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/collect.yml?label=collect&logo=github-actions&logoColor=white)
![Discover](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/discover.yml?label=discover&logo=github-actions&logoColor=white)
![Summarize](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/summarize.yml?label=summarize&logo=github-actions&logoColor=white)
![Screenshot](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/screenshot.yml?label=screenshot&logo=github-actions&logoColor=white)
![License](https://img.shields.io/github/license/patrick-creates/rising-repos-tracker)

**[→ View Live Dashboard](https://patrick-creates.github.io/rising-repos-tracker/)**

![Dashboard preview](./preview.png)

<!-- AUTOGEN-STATS-START -->
## 📊 Current snapshot

> Auto-updated daily — last refreshed 2026-05-18

| Metric | Value |
|---|---|
| Repos tracked | **46** |
| Total stars | **3,787,385** |
| Total forks | **660,997** |
| Fastest growing | **open-design** (+2207.8/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [nexu-io/open-design](https://github.com/nexu-io/open-design) | 44,174 | +2207.8 |
| 2 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 155,504 | +1491.8 |
| 3 | [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 61,512 | +1430.0 |
| 4 | [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 52,400 | +1218.5 |
| 5 | [santifer/career-ops](https://github.com/santifer/career-ops) | 45,246 | +1052.2 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 372,819 | 77,301 | +269.6 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 186,046 | 28,790 | +999.6 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,389 | 46,230 | +21.6 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 162,444 | 21,147 | +54.4 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 155,504 | 24,960 | +1491.8 |
| [langgenius/dify](https://github.com/langgenius/dify) | 141,747 | 22,271 | +104.4 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 137,561 | 19,639 | +133.8 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 136,995 | 22,657 | +72.0 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 123,618 | 8,369 | +122.0 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 110,989 | 59,527 | +47.4 |
| [github/spec-kit](https://github.com/github/spec-kit) | 101,709 | 8,932 | +769.6 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,037 | 59,715 | +75.6 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 80,325 | 16,902 | +88.2 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 79,867 | 8,218 | +394.8 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 77,225 | 15,201 | +45.4 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 76,463 | 6,562 | +216.6 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 74,701 | 8,084 | +59.9 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 74,044 | 4,803 | +258.8 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 73,932 | 9,363 | +92.9 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 73,609 | 12,434 | +48.1 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,241 | 13,588 | +57.9 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 64,500 | 5,693 | +71.7 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 61,512 | 3,431 | +1430.0 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 61,077 | 9,991 | +189.6 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 60,388 | 6,568 | +283.5 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 58,328 | 4,730 | +351.3 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 54,368 | 8,745 | +421.4 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 53,498 | 5,360 | +270.2 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 52,900 | 24,358 | +46.3 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 52,400 | 6,920 | +1218.5 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 50,660 | 6,128 | +201.0 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 49,826 | 5,546 | +37.5 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 49,578 | 3,020 | +431.0 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 48,788 | 3,425 | +171.2 |
| [tw93/Pake](https://github.com/tw93/Pake) | 48,779 | 9,849 | +37.2 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 47,388 | 8,139 | +46.2 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 45,246 | 9,505 | +1052.2 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 44,961 | 4,430 | +40.7 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 44,555 | 10,113 | +32.3 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 44,174 | 5,045 | +2207.8 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 44,095 | 3,778 | +112.2 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 42,680 | 7,514 | +402.6 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 40,385 | 6,719 | +106.3 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 39,996 | 4,060 | +34.2 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 39,884 | 2,540 | +160.8 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,154 | 697 | +8.4 |
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
