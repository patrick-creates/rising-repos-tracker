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

> Auto-updated daily — last refreshed 2026-05-28

| Metric | Value |
|---|---|
| Repos tracked | **61** |
| Total stars | **4,627,074** |
| Total forks | **810,012** |
| Fastest growing | **hermes-agent** (+1517.5/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 170,807 | +1517.5 |
| 2 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | 196,516 | +1429.0 |
| 3 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 196,516 | +1031.2 |
| 4 | [nexu-io/open-design](https://github.com/nexu-io/open-design) | 54,365 | +1019.1 |
| 5 | [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 83,265 | +922.1 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 375,193 | 78,259 | +248.1 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 196,516 | 30,237 | +1031.2 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 196,516 | 30,237 | +1429.0 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,596 | 46,208 | +21.0 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 170,807 | 28,589 | +1517.5 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 162,946 | 21,188 | +51.6 |
| [langgenius/dify](https://github.com/langgenius/dify) | 142,961 | 22,483 | +115.7 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 138,971 | 19,902 | +138.6 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 137,852 | 22,810 | +81.1 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 126,451 | 8,640 | +229.5 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 111,457 | 59,822 | +47.0 |
| [github/spec-kit](https://github.com/github/spec-kit) | 106,619 | 9,430 | +583.9 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,100 | 59,685 | +6.3 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 83,935 | 8,656 | +402.8 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 83,265 | 5,413 | +922.1 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 81,228 | 17,340 | +89.6 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 79,272 | 6,808 | +259.5 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 77,850 | 15,315 | +56.8 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 75,119 | 9,526 | +118.7 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 75,022 | 8,124 | +32.1 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 73,824 | 12,489 | +21.5 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 66,869 | 8,870 | +325.3 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,263 | 13,584 | +2.2 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 65,756 | 3,709 | +424.4 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 65,234 | 5,799 | +73.4 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 63,180 | 10,326 | +210.3 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 62,211 | 6,816 | +182.3 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 59,891 | 4,877 | +156.3 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 55,484 | 3,396 | +590.6 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 55,243 | 5,555 | +174.5 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 55,015 | 8,849 | +64.7 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 54,365 | 6,160 | +1019.1 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 54,244 | 6,637 | +358.4 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 53,147 | 24,420 | +24.7 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 52,969 | 6,988 | +56.9 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 51,285 | 3,595 | +249.7 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 50,201 | 5,579 | +37.5 |
| [tw93/Pake](https://github.com/tw93/Pake) | 49,445 | 9,991 | +66.6 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 48,518 | 8,424 | +113.0 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 47,542 | 9,897 | +229.6 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 45,451 | 4,502 | +49.0 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 45,022 | 3,888 | +92.7 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 44,914 | 10,149 | +35.9 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 43,295 | 7,641 | +61.5 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 42,074 | 2,687 | +219.0 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 40,854 | 6,778 | +46.9 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,164 | 4,079 | +16.8 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 39,218 | 37,873 | +126.3 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 38,970 | 6,337 | +97.3 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,196 | 2,652 | +13.3 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 37,597 | 7,736 | +42.7 |
| [google/langextract](https://github.com/google/langextract) | 36,580 | 2,520 | +8.3 |
| [wshobson/agents](https://github.com/wshobson/agents) | 36,066 | 3,912 | +43.3 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 35,850 | 8,075 | +164.3 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 35,479 | 3,041 | +269.7 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 35,167 | 5,823 | +141.0 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 35,132 | 3,221 | +102.7 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 34,338 | 6,545 | +42.7 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 34,144 | 3,062 | +43.3 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 33,980 | 4,156 | +58.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,221 | 702 | +7.3 |
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
