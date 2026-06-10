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

> Auto-updated daily — last refreshed 2026-06-10

| Metric | Value |
|---|---|
| Repos tracked | **91** |
| Total stars | **5,636,034** |
| Total forks | **922,310** |
| Fastest growing | **last30days-skill** (+2846.0/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 38,363 | +2846.0 |
| 2 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 189,287 | +1472.9 |
| 3 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | 212,206 | +1248.6 |
| 4 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 25,805 | +1164.0 |
| 5 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 212,206 | +1112.8 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 377,882 | 79,022 | +229.0 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 212,206 | 32,575 | +1112.8 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 212,206 | 32,575 | +1248.6 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 189,287 | 32,687 | +1472.9 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,867 | 46,163 | +20.9 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 163,497 | 21,225 | +47.3 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 149,729 | 10,307 | +954.3 |
| [langgenius/dify](https://github.com/langgenius/dify) | 144,671 | 22,760 | +123.1 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 140,918 | 20,219 | +143.8 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 138,938 | 23,011 | +82.3 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 111,819 | 60,036 | +38.1 |
| [github/spec-kit](https://github.com/github/spec-kit) | 110,940 | 9,789 | +467.1 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 96,951 | 6,368 | +996.0 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 89,614 | 9,301 | +418.6 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,219 | 59,599 | +7.9 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 82,390 | 17,876 | +89.5 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 81,528 | 7,023 | +219.6 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 78,445 | 15,397 | +51.7 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 76,365 | 9,711 | +105.8 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 75,481 | 8,203 | +33.9 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 74,106 | 12,543 | +21.6 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 72,580 | 9,700 | +417.9 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 70,775 | 3,981 | +402.7 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,310 | 13,572 | +3.0 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 66,163 | 5,925 | +72.3 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 65,794 | 10,728 | +205.1 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 63,973 | 7,047 | +155.9 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 62,634 | 6,994 | +802.6 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 61,749 | 4,995 | +148.7 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 60,767 | 3,730 | +486.5 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 58,133 | 7,107 | +324.9 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 57,207 | 5,744 | +161.3 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 56,182 | 8,994 | +78.9 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 55,225 | 7,179 | +122.8 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 53,962 | 3,772 | +225.0 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 53,445 | 24,499 | +23.7 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 52,166 | 10,472 | +300.9 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 50,610 | 5,652 | +34.1 |
| [tw93/Pake](https://github.com/tw93/Pake) | 50,259 | 10,252 | +64.3 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 49,882 | 8,747 | +108.4 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 46,106 | 4,014 | +87.4 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 45,957 | 4,561 | +43.3 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,193 | 10,186 | +27.7 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 43,985 | 7,792 | +56.7 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 43,246 | 2,770 | +146.2 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 41,606 | 39,654 | +172.9 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 41,518 | 6,870 | +49.3 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,405 | 4,097 | +17.8 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 40,215 | 6,504 | +96.1 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 39,979 | 2,831 | +1062.9 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 38,792 | 7,957 | +82.7 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,392 | 2,639 | +14.8 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 38,363 | 3,090 | +2846.0 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 38,085 | 8,649 | +170.5 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 37,790 | 3,250 | +195.0 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 37,045 | 6,122 | +143.8 |
| [google/langextract](https://github.com/google/langextract) | 36,853 | 2,545 | +18.6 |
| [wshobson/agents](https://github.com/wshobson/agents) | 36,588 | 3,958 | +40.8 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 36,102 | 3,288 | +79.9 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 35,143 | 2,482 | +139.9 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 34,802 | 6,609 | +37.0 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 34,750 | 4,267 | +59.0 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 34,709 | 3,099 | +43.4 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 34,340 | 2,358 | +83.4 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 32,727 | 5,370 | +143.2 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 31,852 | 4,712 | +19.6 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 30,876 | 5,038 | +501.4 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 29,787 | 3,216 | +86.2 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 29,660 | 3,639 | +70.9 |
| [voideditor/void](https://github.com/voideditor/void) | 28,811 | 2,529 | +0.7 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 28,540 | 8,721 | +45.0 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 27,976 | 2,721 | +69.8 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 27,715 | 1,693 | +79.3 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 26,956 | 1,421 | +26.4 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 26,896 | 2,842 | +20.7 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 26,266 | 2,461 | +352.5 |
| [usestrix/strix](https://github.com/usestrix/strix) | 25,917 | 2,919 | +23.0 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 25,805 | 2,138 | +1164.0 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 25,480 | 3,972 | +9.0 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 25,438 | 1,965 | +55.0 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 24,878 | 1,126 | +94.0 |
| [toon-format/toon](https://github.com/toon-format/toon) | 24,518 | 1,089 | +11.0 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 24,363 | 3,445 | +104.0 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 24,077 | 2,576 | +52.5 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 23,963 | 2,399 | +81.5 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 22,183 | 1,822 | +179.0 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,023 | 1,704 | +9.0 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 20,965 | 3,043 | +8.5 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 20,655 | 2,743 | +10.5 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 20,579 | 1,229 | +526.5 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,289 | 705 | +6.3 |
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
