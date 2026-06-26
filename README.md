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

> Auto-updated daily — last refreshed 2026-06-26

| Metric | Value |
|---|---|
| Repos tracked | **121** |
| Total stars | **6,775,027** |
| Total forks | **1,050,696** |
| Fastest growing | **ponytail** (+2727.5/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 58,929 | +2727.5 |
| 2 | [chopratejas/headroom](https://github.com/chopratejas/headroom) | 51,381 | +2110.7 |
| 3 | [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 51,381 | +1369.5 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 203,341 | +1256.7 |
| 5 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 41,692 | +1011.9 |

### 🆕 Recently added

- [obra/superpowers](https://github.com/obra/superpowers) — added 2026-06-22 — An agentic skills framework & software development methodology that works.
- [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) — added 2026-06-22 — Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) — added 2026-06-22 — Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 60-95% fewer tokens, same answers. Library, proxy, MCP server.
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 380,514 | 79,708 | +205.5 |
| [obra/superpowers](https://github.com/obra/superpowers) | 239,018 | 21,206 | +860.3 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 221,911 | 33,973 | +928.7 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 221,911 | 33,973 | +927.6 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 203,341 | 36,434 | +1256.7 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,157 | 46,128 | +19.9 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 164,368 | 21,285 | +49.9 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 159,315 | 11,142 | +825.2 |
| [langgenius/dify](https://github.com/langgenius/dify) | 146,628 | 23,078 | +122.8 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 143,055 | 20,607 | +140.1 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 140,247 | 23,265 | +82.1 |
| [github/spec-kit](https://github.com/github/spec-kit) | 115,588 | 10,206 | +402.9 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 112,320 | 60,349 | +35.6 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 108,747 | 7,192 | +889.8 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 96,644 | 10,162 | +426.2 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,306 | 59,510 | +6.9 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 84,381 | 18,530 | +102.2 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 84,357 | 7,275 | +204.0 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 79,117 | 15,488 | +48.2 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 78,388 | 9,968 | +114.3 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 77,028 | 4,360 | +397.8 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 75,990 | 8,325 | +33.1 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 75,529 | 10,084 | +301.1 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 74,418 | 12,589 | +20.7 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 71,370 | 8,050 | +697.3 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 68,502 | 11,150 | +190.4 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 67,380 | 6,052 | +73.8 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,455 | 13,570 | +5.5 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 66,216 | 4,087 | +426.6 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 65,969 | 7,327 | +143.1 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 63,660 | 5,204 | +136.7 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 61,897 | 7,635 | +288.1 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 60,930 | 6,090 | +190.6 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 59,950 | 9,356 | +143.1 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 58,929 | 3,004 | +2727.5 |
| [tw93/Pake](https://github.com/tw93/Pake) | 57,718 | 11,523 | +229.2 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 56,710 | 3,958 | +203.1 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 56,409 | 7,299 | +102.8 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 55,809 | 11,013 | +270.8 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 54,020 | 24,594 | +28.7 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 51,617 | 9,193 | +108.4 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 51,381 | 3,645 | +2110.7 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 51,381 | 3,645 | +1369.5 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 51,209 | 3,526 | +831.8 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 51,064 | 5,701 | +31.7 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 49,814 | 43,649 | +343.0 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 47,333 | 4,141 | +83.0 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 46,801 | 3,878 | +785.0 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 46,704 | 4,649 | +44.7 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 46,166 | 7,567 | +148.2 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,615 | 10,231 | +27.2 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 44,760 | 7,889 | +53.3 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 44,465 | 2,877 | +117.5 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 43,922 | 8,922 | +457.4 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 41,738 | 6,690 | +95.6 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 41,692 | 3,312 | +1011.9 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,630 | 4,121 | +16.3 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 40,182 | 9,195 | +150.8 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 39,834 | 8,159 | +73.9 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 39,037 | 3,363 | +136.5 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,579 | 2,652 | +13.2 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 38,424 | 6,357 | +115.0 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 38,273 | 2,718 | +175.6 |
| [wshobson/agents](https://github.com/wshobson/agents) | 37,209 | 4,004 | +39.8 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 37,004 | 3,342 | +68.1 |
| [google/langextract](https://github.com/google/langextract) | 36,960 | 2,552 | +12.7 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 36,410 | 5,980 | +401.9 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 35,798 | 5,991 | +94.5 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 35,755 | 4,414 | +60.9 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 35,373 | 2,446 | +71.4 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 35,262 | 6,675 | +32.9 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 35,203 | 3,145 | +37.2 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 35,046 | 5,724 | +144.3 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 34,321 | 4,131 | +212.0 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,039 | 4,764 | +14.5 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 31,412 | 2,917 | +325.1 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 31,141 | 3,399 | +85.2 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 29,381 | 8,824 | +49.8 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 28,889 | 2,858 | +61.6 |
| [voideditor/void](https://github.com/voideditor/void) | 28,818 | 2,555 | +0.5 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 28,747 | 1,610 | +81.2 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 28,621 | 1,757 | +64.8 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,163 | 2,868 | +18.1 |
| [usestrix/strix](https://github.com/usestrix/strix) | 26,196 | 2,949 | +19.4 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 26,067 | 2,027 | +41.1 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 25,786 | 1,177 | +60.9 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 25,607 | 3,989 | +8.1 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 25,494 | 2,748 | +84.6 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 25,342 | 2,519 | +85.7 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 25,139 | 3,551 | +54.7 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 24,810 | 1,505 | +293.6 |
| [toon-format/toon](https://github.com/toon-format/toon) | 24,677 | 1,094 | +10.1 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 24,080 | 1,976 | +125.3 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,111 | 1,714 | +5.9 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 21,509 | 2,472 | +846.8 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,055 | 3,063 | +5.9 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 20,856 | 3,049 | +351.2 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 20,851 | 2,770 | +12.1 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 20,142 | 2,681 | +214.9 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 20,074 | 1,725 | +137.8 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 18,919 | 2,030 | +36.8 |
| [decolua/9router](https://github.com/decolua/9router) | 18,501 | 2,959 | +84.5 |
| [tanweai/pua](https://github.com/tanweai/pua) | 18,461 | 1,112 | +19.5 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 18,196 | 1,277 | +66.2 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 17,920 | 2,274 | +8.5 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 17,357 | 2,272 | +96.8 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,347 | 1,521 | +3.3 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 17,334 | 1,637 | +35.7 |
| [jundot/omlx](https://github.com/jundot/omlx) | 17,107 | 1,452 | +43.2 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 16,134 | 2,221 | +17.0 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,122 | 1,698 | +5.5 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 15,621 | 2,715 | +53.8 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 15,434 | 2,696 | +22.8 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 15,389 | 1,270 | +46.5 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 15,047 | 1,920 | +52.3 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 14,710 | 1,290 | +178.5 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 14,367 | 2,147 | +20.0 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,272 | 1,462 | +11.5 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,225 | 3,190 | +17.5 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 13,929 | 1,035 | +7.3 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,464 | 724 | +8.0 |
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
