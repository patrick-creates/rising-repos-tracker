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

> Auto-updated daily — last refreshed 2026-05-27

| Metric | Value |
|---|---|
| Repos tracked | **61** |
| Total stars | **4,612,318** |
| Total forks | **807,743** |
| Fastest growing | **hermes-agent** (+1524.4/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 169,387 | +1524.4 |
| 2 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | 195,172 | +1471.5 |
| 3 | [nexu-io/open-design](https://github.com/nexu-io/open-design) | 53,282 | +1012.0 |
| 4 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 195,172 | +1008.9 |
| 5 | [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 82,267 | +913.7 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 374,964 | 78,143 | +249.5 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 195,172 | 30,047 | +1008.9 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 195,172 | 30,047 | +1471.5 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,577 | 46,222 | +21.1 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 169,387 | 28,188 | +1524.4 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 162,900 | 21,179 | +52.0 |
| [langgenius/dify](https://github.com/langgenius/dify) | 142,826 | 22,467 | +114.4 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 138,838 | 19,873 | +139.0 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 137,749 | 22,821 | +79.6 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 125,365 | 8,547 | +168.4 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 111,423 | 59,795 | +47.9 |
| [github/spec-kit](https://github.com/github/spec-kit) | 106,286 | 9,395 | +601.8 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,098 | 59,680 | +6.8 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 83,363 | 8,583 | +390.7 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 82,267 | 5,345 | +913.7 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 81,120 | 17,294 | +88.3 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 78,947 | 6,786 | +254.8 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 77,785 | 15,294 | +56.2 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 75,013 | 9,511 | +120.1 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 75,001 | 8,119 | +33.3 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 73,805 | 12,485 | +21.8 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 66,450 | 8,811 | +278.5 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,266 | 13,583 | +2.8 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 65,332 | 3,691 | +424.4 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 65,193 | 5,791 | +77.0 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 62,946 | 10,282 | +207.7 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 62,046 | 6,790 | +184.2 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 59,735 | 4,866 | +156.3 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 55,097 | 5,538 | +177.7 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 54,968 | 8,840 | +66.7 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 54,817 | 3,365 | +582.1 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 53,877 | 6,577 | +357.4 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 53,282 | 6,047 | +1012.0 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 53,109 | 24,409 | +23.2 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 52,899 | 6,979 | +55.4 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 51,060 | 3,580 | +252.4 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 50,162 | 5,572 | +37.3 |
| [tw93/Pake](https://github.com/tw93/Pake) | 49,319 | 9,967 | +60.0 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 48,395 | 8,382 | +111.9 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 47,406 | 9,873 | +240.0 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 45,398 | 4,492 | +48.6 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 44,917 | 3,878 | +91.3 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 44,882 | 10,144 | +36.3 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 43,234 | 7,625 | +61.6 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 41,916 | 2,669 | +225.8 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 40,808 | 6,774 | +47.0 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,140 | 4,075 | +16.0 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 39,055 | 37,715 | +108.0 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 38,851 | 6,314 | +86.5 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,173 | 2,649 | +8.5 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 37,553 | 7,728 | +42.0 |
| [google/langextract](https://github.com/google/langextract) | 36,571 | 2,520 | +8.0 |
| [wshobson/agents](https://github.com/wshobson/agents) | 36,012 | 3,911 | +38.0 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 35,679 | 8,007 | +161.0 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 35,199 | 3,008 | +264.5 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 35,013 | 5,812 | +134.5 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 34,992 | 3,206 | +84.0 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 34,291 | 6,541 | +40.5 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 34,101 | 3,059 | +43.5 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 33,906 | 4,150 | +50.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,210 | 702 | +7.0 |
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
