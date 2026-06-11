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

> Auto-updated daily — last refreshed 2026-06-11

| Metric | Value |
|---|---|
| Repos tracked | **91** |
| Total stars | **5,654,064** |
| Total forks | **924,735** |
| Fastest growing | **last30days-skill** (+2253.7/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 39,432 | +2253.7 |
| 2 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 190,423 | +1461.3 |
| 3 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | 213,048 | +1224.6 |
| 4 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 213,048 | +1103.4 |
| 5 | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 41,073 | +1066.0 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 378,096 | 79,062 | +228.4 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 213,048 | 32,731 | +1103.4 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 213,048 | 32,731 | +1224.6 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 190,423 | 33,023 | +1461.3 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,891 | 46,158 | +21.0 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 163,558 | 21,227 | +47.8 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 150,663 | 10,371 | +953.6 |
| [langgenius/dify](https://github.com/langgenius/dify) | 144,835 | 22,793 | +124.5 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 141,056 | 20,250 | +143.6 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 139,022 | 23,035 | +82.3 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 111,863 | 60,063 | +38.3 |
| [github/spec-kit](https://github.com/github/spec-kit) | 111,269 | 9,814 | +462.3 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 98,083 | 6,446 | +1001.6 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 90,155 | 9,376 | +422.8 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,235 | 59,595 | +8.3 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 82,503 | 17,923 | +90.3 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 81,725 | 7,045 | +218.8 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 78,496 | 15,402 | +51.7 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 76,447 | 9,717 | +104.8 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 75,521 | 8,205 | +34.2 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 74,125 | 12,545 | +21.5 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 73,067 | 9,749 | +422.0 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 71,245 | 4,008 | +405.5 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,317 | 13,573 | +3.2 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 66,224 | 5,932 | +71.8 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 66,013 | 10,760 | +205.7 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 64,106 | 7,065 | +154.9 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 63,186 | 7,045 | +792.2 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 61,890 | 5,014 | +148.4 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 61,225 | 3,756 | +485.3 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 58,428 | 7,141 | +323.7 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 57,382 | 5,761 | +161.8 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 56,278 | 8,999 | +79.6 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 55,342 | 7,187 | +122.6 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 54,201 | 3,794 | +225.5 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 53,471 | 24,499 | +23.8 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 52,584 | 10,551 | +305.8 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 50,635 | 5,652 | +33.7 |
| [tw93/Pake](https://github.com/tw93/Pake) | 50,328 | 10,274 | +64.5 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 50,020 | 8,785 | +109.7 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 46,174 | 4,024 | +86.6 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 45,989 | 4,566 | +42.8 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,219 | 10,194 | +27.7 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 44,036 | 7,798 | +56.5 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 43,341 | 2,776 | +144.0 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 42,036 | 39,873 | +188.1 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 41,611 | 6,886 | +51.1 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 41,073 | 2,886 | +1066.0 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,423 | 4,098 | +17.8 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 40,342 | 6,518 | +97.9 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 39,432 | 3,173 | +2253.7 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 38,877 | 7,986 | +82.8 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,404 | 2,638 | +14.6 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 38,297 | 8,687 | +172.9 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 37,983 | 3,268 | +194.9 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 37,171 | 6,134 | +142.8 |
| [google/langextract](https://github.com/google/langextract) | 36,864 | 2,543 | +18.2 |
| [wshobson/agents](https://github.com/wshobson/agents) | 36,623 | 3,968 | +40.4 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 36,187 | 3,293 | +80.2 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 35,266 | 2,491 | +138.2 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 34,839 | 6,616 | +37.0 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 34,808 | 4,277 | +58.9 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 34,745 | 3,102 | +43.0 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 34,419 | 2,364 | +83.0 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 32,847 | 5,395 | +140.9 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 31,874 | 4,719 | +19.8 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 31,180 | 5,093 | +481.7 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 29,871 | 3,235 | +86.0 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 29,740 | 3,656 | +71.8 |
| [voideditor/void](https://github.com/voideditor/void) | 28,812 | 2,536 | +0.7 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 28,581 | 8,724 | +44.6 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 28,042 | 2,730 | +69.4 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 27,749 | 1,695 | +74.8 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 26,984 | 1,421 | +26.6 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 26,923 | 2,845 | +21.3 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 26,656 | 2,496 | +365.0 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 26,212 | 2,159 | +911.7 |
| [usestrix/strix](https://github.com/usestrix/strix) | 25,936 | 2,915 | +22.6 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 25,492 | 1,973 | +54.7 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 25,490 | 3,972 | +9.3 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 24,972 | 1,129 | +94.0 |
| [toon-format/toon](https://github.com/toon-format/toon) | 24,530 | 1,089 | +11.3 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 24,437 | 3,461 | +94.0 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 24,145 | 2,579 | +57.7 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 24,047 | 2,403 | +82.3 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 22,315 | 1,837 | +163.3 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,041 | 1,703 | +12.0 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 21,069 | 1,261 | +514.3 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 20,969 | 3,043 | +7.0 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 20,688 | 2,745 | +18.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,299 | 705 | +6.4 |
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
