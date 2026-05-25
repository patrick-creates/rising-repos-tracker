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

> Auto-updated daily — last refreshed 2026-05-25

| Metric | Value |
|---|---|
| Repos tracked | **61** |
| Total stars | **4,589,662** |
| Total forks | **804,614** |
| Fastest growing | **hermes-agent** (+1591.8/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 167,147 | +1591.8 |
| 2 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | 192,229 | +1507.3 |
| 3 | [nexu-io/open-design](https://github.com/nexu-io/open-design) | 52,029 | +1122.1 |
| 4 | [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 80,682 | +948.3 |
| 5 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 192,229 | +931.8 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 374,616 | 77,997 | +262.1 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 192,229 | 29,757 | +931.8 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 192,229 | 29,757 | +1507.3 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,549 | 46,224 | +22.3 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 167,147 | 27,634 | +1591.8 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 162,809 | 21,175 | +53.1 |
| [langgenius/dify](https://github.com/langgenius/dify) | 142,606 | 22,429 | +115.1 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 138,617 | 19,827 | +143.8 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 137,634 | 22,785 | +83.3 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 125,152 | 8,519 | +178.7 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 111,367 | 59,739 | +51.3 |
| [github/spec-kit](https://github.com/github/spec-kit) | 105,846 | 9,361 | +665.4 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,085 | 59,686 | +6.9 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 82,651 | 8,517 | +396.5 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 80,991 | 17,213 | +92.3 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 80,682 | 5,265 | +948.3 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 78,099 | 6,732 | +226.6 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 77,688 | 15,289 | +57.5 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 74,949 | 8,118 | +35.4 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 74,838 | 9,486 | +129.4 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 73,777 | 12,479 | +24.0 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,267 | 13,590 | +3.7 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 65,893 | 8,711 | +186.4 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 65,125 | 5,777 | +89.3 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 64,677 | 3,655 | +452.1 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 62,580 | 10,222 | +214.7 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 61,765 | 6,760 | +196.7 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 59,432 | 4,840 | +157.7 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 54,907 | 8,837 | +77.0 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 54,822 | 5,498 | +189.1 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 53,989 | 3,309 | +630.1 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 53,377 | 6,500 | +388.1 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 53,067 | 24,395 | +23.9 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 52,821 | 6,969 | +60.1 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 52,029 | 5,939 | +1122.1 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 50,688 | 3,553 | +271.4 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 50,108 | 5,566 | +40.3 |
| [tw93/Pake](https://github.com/tw93/Pake) | 49,037 | 9,914 | +36.9 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 48,216 | 8,332 | +118.3 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 47,211 | 9,844 | +280.7 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 45,306 | 4,479 | +49.3 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 44,825 | 10,136 | +38.6 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 44,792 | 3,861 | +99.6 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 43,125 | 7,604 | +63.6 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 41,714 | 2,650 | +261.4 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 40,759 | 6,766 | +53.4 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,117 | 4,072 | +17.3 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 38,839 | 37,516 | +287.3 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 38,678 | 6,292 | +297.0 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,156 | 2,650 | +33.8 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 37,469 | 7,710 | +31.3 |
| [google/langextract](https://github.com/google/langextract) | 36,555 | 2,519 | +114.2 |
| [wshobson/agents](https://github.com/wshobson/agents) | 35,936 | 3,908 | +118.1 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 35,357 | 7,905 | +38.1 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 34,824 | 3,186 | +255.8 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 34,744 | 5,781 | +106.0 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 34,670 | 2,962 | +275.7 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 34,210 | 6,526 | +30.3 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 34,014 | 3,054 | +54.3 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 33,806 | 4,135 | +97.3 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,194 | 702 | +6.8 |
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
