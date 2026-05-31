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

> Auto-updated daily — last refreshed 2026-05-31

| Metric | Value |
|---|---|
| Repos tracked | **61** |
| Total stars | **4,665,925** |
| Total forks | **815,444** |
| Fastest growing | **hermes-agent** (+1445.3/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 174,060 | +1445.3 |
| 2 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | 199,601 | +1228.7 |
| 3 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 199,601 | +1030.7 |
| 4 | [nexu-io/open-design](https://github.com/nexu-io/open-design) | 56,103 | +917.6 |
| 5 | [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 85,946 | +915.5 |

### 🆕 Recently added

- [affaan-m/ECC](https://github.com/affaan-m/ECC) — added 2026-05-25 — The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.
- [ruvnet/RuView](https://github.com/ruvnet/RuView) — added 2026-05-25 — π RuView turns commodity WiFi signals into real-time spatial intelligence, vital sign monitoring, and presence detection — all without a single pixel of video.
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — added 2026-05-25 — LLM驱动的 A/H/美股智能分析：多数据源行情 + 实时新闻 + LLM决策仪表盘 + 多渠道推送，零成本定时运行，纯白嫖. LLM-powered stock analysis system for A/H/US markets.
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 375,750 | 78,436 | +237.7 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 199,601 | 30,643 | +1030.7 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 199,601 | 30,643 | +1228.7 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,664 | 46,204 | +21.3 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 174,060 | 29,507 | +1445.3 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 163,096 | 21,206 | +51.3 |
| [langgenius/dify](https://github.com/langgenius/dify) | 143,239 | 22,531 | +111.9 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 139,329 | 19,976 | +135.4 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 138,087 | 22,877 | +80.7 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 133,249 | 9,119 | +568.9 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 111,536 | 59,866 | +43.6 |
| [github/spec-kit](https://github.com/github/spec-kit) | 107,244 | 9,489 | +521.3 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,136 | 59,681 | +7.6 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 85,946 | 5,582 | +915.5 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 85,293 | 8,807 | +411.1 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 81,463 | 17,456 | +87.7 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 79,805 | 6,874 | +245.8 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 78,001 | 15,340 | +55.7 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 75,452 | 9,572 | +116.9 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 75,103 | 8,129 | +30.9 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 73,877 | 12,501 | +20.6 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 69,124 | 9,221 | +538.5 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 66,743 | 3,764 | +402.4 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,280 | 13,584 | +3.0 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 65,432 | 5,839 | +71.7 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 63,763 | 10,432 | +206.6 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 62,583 | 6,862 | +168.8 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 60,366 | 4,901 | +156.8 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 56,632 | 3,468 | +542.6 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 56,103 | 6,346 | +917.6 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 55,621 | 5,583 | +163.3 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 55,124 | 8,867 | +58.2 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 54,861 | 6,718 | +323.2 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 53,230 | 24,451 | +25.4 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 53,109 | 7,016 | +54.5 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 51,866 | 3,631 | +236.8 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 50,288 | 5,592 | +35.5 |
| [tw93/Pake](https://github.com/tw93/Pake) | 49,545 | 10,023 | +58.9 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 48,808 | 8,497 | +109.2 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 47,977 | 9,974 | +210.1 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 45,577 | 4,519 | +47.4 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 45,270 | 3,924 | +90.4 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 44,972 | 10,157 | +32.1 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 43,414 | 7,669 | +56.5 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 42,377 | 2,713 | +191.8 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 40,988 | 6,794 | +46.4 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,225 | 4,084 | +17.6 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 39,552 | 38,186 | +118.8 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 39,240 | 6,375 | +93.7 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,258 | 2,654 | +17.0 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 37,710 | 7,774 | +40.2 |
| [google/langextract](https://github.com/google/langextract) | 36,754 | 2,530 | +33.2 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 36,262 | 8,190 | +150.8 |
| [wshobson/agents](https://github.com/wshobson/agents) | 36,172 | 3,922 | +39.3 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 36,155 | 3,099 | +247.5 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 35,513 | 5,891 | +128.2 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 35,390 | 3,238 | +94.3 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 34,442 | 6,564 | +38.7 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 34,266 | 3,070 | +42.0 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 34,164 | 4,180 | +59.7 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,237 | 703 | +6.9 |
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
