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

> Auto-updated daily — last refreshed 2026-06-09

| Metric | Value |
|---|---|
| Repos tracked | **91** |
| Total stars | **5,614,869** |
| Total forks | **919,761** |
| Fastest growing | **last30days-skill** (+3014.0/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 35,685 | +3014.0 |
| 2 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 188,007 | +1480.1 |
| 3 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 24,865 | +1388.0 |
| 4 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | 211,260 | +1268.7 |
| 5 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 211,260 | +1119.0 |

### 🆕 Recently added

- [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) — added 2026-06-08 — AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary
- [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) — added 2026-06-08 — Write HTML. Render video. Built for agents.
- [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) — added 2026-06-08 — An Open Phone Agent Model & Framework. Unlocking the AI Phone for Everyone
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 377,739 | 78,982 | +232.1 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 211,260 | 32,403 | +1119.0 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 211,260 | 32,403 | +1268.7 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 188,007 | 32,379 | +1480.1 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,855 | 46,169 | +21.3 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 163,454 | 21,217 | +47.5 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 148,798 | 10,217 | +955.2 |
| [langgenius/dify](https://github.com/langgenius/dify) | 144,514 | 22,741 | +121.8 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 140,750 | 20,196 | +142.9 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 138,858 | 22,992 | +82.3 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 111,792 | 60,014 | +38.5 |
| [github/spec-kit](https://github.com/github/spec-kit) | 110,655 | 9,765 | +473.9 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 95,748 | 6,281 | +986.5 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 89,137 | 9,227 | +416.4 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,202 | 59,614 | +7.5 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 82,300 | 17,826 | +89.5 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 81,383 | 7,011 | +222.3 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 78,385 | 15,389 | +51.4 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 76,288 | 9,685 | +107.1 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 75,444 | 8,198 | +33.8 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 74,082 | 12,540 | +21.5 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 72,190 | 9,645 | +419.8 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 70,322 | 3,956 | +400.5 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,316 | 13,575 | +3.4 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 66,097 | 5,916 | +72.6 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 65,579 | 10,688 | +204.6 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 63,823 | 7,019 | +156.1 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 61,996 | 6,941 | +810.1 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 61,608 | 4,982 | +149.1 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 60,327 | 3,712 | +488.6 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 57,739 | 7,063 | +321.8 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 57,012 | 5,726 | +159.7 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 56,128 | 8,987 | +80.0 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 55,110 | 7,162 | +123.2 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 53,681 | 3,755 | +222.4 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 53,426 | 24,495 | +23.9 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 50,919 | 10,361 | +257.9 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 50,583 | 5,640 | +34.4 |
| [tw93/Pake](https://github.com/tw93/Pake) | 50,207 | 10,235 | +64.9 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 49,744 | 8,717 | +107.1 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 46,025 | 4,012 | +87.7 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 45,914 | 4,558 | +43.3 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,169 | 10,176 | +27.9 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 43,924 | 7,778 | +56.5 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 43,162 | 2,758 | +149.0 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 41,452 | 39,559 | +174.2 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 41,451 | 6,865 | +48.5 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,387 | 4,097 | +17.8 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 40,135 | 6,495 | +97.1 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 38,930 | 2,763 | +1064.6 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 38,722 | 7,935 | +83.5 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,369 | 2,638 | +14.2 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 37,844 | 8,594 | +165.8 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 37,645 | 3,244 | +198.3 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 36,846 | 6,097 | +140.1 |
| [google/langextract](https://github.com/google/langextract) | 36,842 | 2,543 | +19.1 |
| [wshobson/agents](https://github.com/wshobson/agents) | 36,537 | 3,953 | +40.1 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 36,035 | 3,284 | +80.7 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 35,685 | 2,908 | +3014.0 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 35,009 | 2,474 | +140.6 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 34,755 | 6,602 | +36.3 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 34,676 | 4,256 | +58.0 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 34,667 | 3,097 | +43.5 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 34,238 | 2,348 | +81.1 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 32,570 | 5,345 | +141.5 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 31,836 | 4,708 | +20.0 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 30,513 | 4,968 | +518.8 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 29,696 | 3,201 | +85.6 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 29,602 | 3,633 | +72.5 |
| [voideditor/void](https://github.com/voideditor/void) | 28,819 | 2,528 | +1.8 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 28,495 | 8,719 | +45.0 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 27,877 | 2,705 | +66.1 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 27,623 | 1,687 | +77.8 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 26,935 | 1,417 | +27.1 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 26,865 | 2,840 | +19.4 |
| [usestrix/strix](https://github.com/usestrix/strix) | 25,906 | 2,913 | +24.5 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 25,875 | 2,429 | +314.0 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 25,472 | 3,971 | +10.0 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 25,382 | 1,960 | +54.0 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 24,865 | 2,069 | +1388.0 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 24,750 | 1,118 | +60.0 |
| [toon-format/toon](https://github.com/toon-format/toon) | 24,508 | 1,089 | +12.0 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 24,249 | 3,434 | +94.0 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 24,031 | 2,573 | +59.0 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 23,884 | 2,390 | +84.0 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,012 | 1,704 | +7.0 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 22,011 | 1,806 | +186.0 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 20,954 | 3,039 | +6.0 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 20,649 | 2,741 | +15.0 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 20,073 | 1,211 | +547.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,280 | 705 | +6.2 |
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
