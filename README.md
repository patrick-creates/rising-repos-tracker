# 🚀 Rising Repos Tracker

> Automatically tracks daily GitHub stats (stars, forks, issues, velocity) for rising open source repos.

**GitHub shows a repo's star count, not how fast it is growing — this keeps a daily history so you can see which repos are actually taking off.** Runs entirely on GitHub Actions + Pages: no server, no database.

**Quick start:** 1. Fork this repo · 2. Delete my `data/` and `reports/`, put the repos you care about in [`repos.json`](./repos.json) · 3. Enable GitHub Pages and run **Collect Repo Stats** once. Details in [Fork & use it for yourself](#fork--use-it-for-yourself).

⭐ If the dashboard is useful to you, a star helps others find it.

[![Maintained by Telosignal](https://img.shields.io/badge/Maintained%20by-Telosignal-green)](https://www.telosignal.com/)
![Last updated](https://img.shields.io/github/last-commit/patrick-creates/rising-repos-tracker?label=last+updated&color=238636)
![Repos tracked](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/patrick-creates/rising-repos-tracker/main/repos.json&query=%24.length&label=repos+tracked&color=1f6feb)
![Collect](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/collect.yml?label=collect&logo=github-actions&logoColor=white)
![Discover](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/discover.yml?label=discover&logo=github-actions&logoColor=white)
![Screenshot](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/screenshot.yml?label=screenshot&logo=github-actions&logoColor=white)
![License](https://img.shields.io/github/license/patrick-creates/rising-repos-tracker)

**[→ View Live Dashboard](https://patrick-creates.github.io/rising-repos-tracker/)** · **[→ Weekly reports](./reports/README.md)**

Built and maintained by [Telosignal](https://www.telosignal.com/).

![Dashboard preview](./preview.png)

<!-- AUTOGEN-STATS-START -->
## 📊 Current snapshot

> Auto-updated daily — last refreshed 2026-11-23

| Metric | Value |
|---|---|
| Repos tracked | **234** (46 stalled 💤) |
| Total stars | **12,258,799** |
| Total forks | **1,766,607** |
| Fastest growing | **rea** ⚠️ (+3336.5/day) |

### 🔥 Top 5 by velocity

> ⚠️ unusually fast growth (1,000+ stars/day over its lifetime and the last week): check before trusting. 💤 stalled repos are left out.

| # | Repo | Stars | Stars/day (30d) |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) ⚠️ | 475,179 | +3336.5 |
| 2 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | 74,088 | +1688.0 |
| 3 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) ⚠️ | 84,875 | +1491.5 |
| 4 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 117,004 | +1102.9 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 134,119 | +994.5 |

### 🆕 Recently added

- [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) — added 2026-11-23 — A toolbox of film styles made in code for Claude Code: 99 ready to use, and your own. Each style is a style prompt plus a demo film made entirely in code by Claude Opus 5.5, with no video model. By Lemomo. · 一套用代码做片的风格工具箱：99 种现成风格，也能做出你自己的
- [haydenschmitty/floorplan](https://github.com/haydenschmitty/floorplan) — added 2026-11-23 — See how your app actually fits together. An interactive, plain-English map of your codebase, drawn by Claude or Codex.
- [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) — added 2026-11-23 — Experience-Driven Black-Box Cost Control for Coding Agents
<!-- AUTOGEN-STATS-END -->

<!-- AUTOGEN-DIAGRAM-START -->
## 🔄 How it works

```mermaid
graph LR
    repos[("repos.json")]:::data
    history[("data/[owner]/[repo]/<br/>history.json")]:::data
    readme[("README.md")]:::data
    reports[("reports/<br/>YYYY-Www.md")]:::data
    preview[("preview.png")]:::data
    site[("dashboard.json")]:::data
    dashboard["index.html<br/>(GitHub Pages)"]:::output
    collect_yml["Collect Repo Stats<br/><i>Daily 05:17 UTC</i>"]:::workflow
    discover_yml["Discover Trending Repos<br/><i>Monday 04:43 UTC</i>"]:::workflow
    screenshot_yml["Screenshot Dashboard<br/><i>after collect repo stats</i>"]:::workflow
    repos --> collect_yml
    collect_yml --> history
    collect_yml --> readme
    collect_yml --> site
    collect_yml -->|Mondays| reports
    repos --> discover_yml
    discover_yml -.->|appends| repos
    dashboard --> screenshot_yml
    screenshot_yml --> preview
    site --> dashboard
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

> All workflows commit results directly back to the repo. Schedules are best-effort — GitHub Actions cron can drift by a few minutes.
<!-- AUTOGEN-WORKFLOWS-END -->

<!-- AUTOGEN-REPOS-START -->
## 📋 All tracked repos

| Repo | Stars | Forks | Stars/day (30d) |
|---|---:|---:|---:|
| [morluto/rea](https://github.com/morluto/rea) ⚠️ | 475,179 | 115,811 | +3336.5 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 395,084 | 82,959 | +72.5 |
| [obra/superpowers](https://github.com/obra/superpowers) | 324,782 | 28,814 | +679.5 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 309,372 | 45,512 | +727.0 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 265,601 | 60,101 | +299.0 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 198,037 | 15,000 | +205.4 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 197,358 | 11,145 | +743.1 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 188,156 | 45,823 | +14.5 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 178,318 | 22,728 | +133.3 |
| [langgenius/dify](https://github.com/langgenius/dify) | 161,743 | 25,541 | +78.1 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 159,343 | 23,125 | +90.9 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 156,624 | 10,227 | +281.1 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 153,165 | 16,145 | +451.7 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 152,374 | 14,649 | +610.2 |
| [github/spec-kit](https://github.com/github/spec-kit) | 151,124 | 13,576 | +282.6 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,956 | 25,162 | +53.5 |
| [stablyai/orca](https://github.com/stablyai/orca) | 134,119 | 8,572 | +994.5 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 124,072 | 66,860 | +67.5 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 122,347 | 7,140 | +255.2 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 120,511 | 8,078 | +625.0 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 119,247 | 10,358 | +553.1 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 117,004 | 13,039 | +1102.9 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 116,213 | 19,300 | +316.8 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 115,441 | 6,884 | +733.2 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 114,203 | 10,255 | +424.7 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 109,127 | 12,341 | +182.3 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 104,932 | 13,599 | +185.9 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 99,024 | 6,777 | +352.0 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 97,405 | 25,183 | +71.0 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 94,147 | 12,600 | +81.6 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 91,102 | 14,144 | +57.3 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 89,789 | 13,917 | +308.4 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) 💤 | 88,989 | 58,445 | +3.5 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 88,732 | 8,274 | +589.6 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 87,741 | 10,957 | +111.8 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 87,574 | 5,628 | +105.2 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 86,045 | 16,351 | +86.2 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) ⚠️ | 84,875 | 2,385 | +1491.5 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 84,367 | 15,437 | +249.0 |
| [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) | 82,628 | 11,262 | +378.1 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 82,316 | 9,702 | +114.9 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 80,796 | 12,889 | +55.5 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 80,634 | 6,319 | +98.5 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 80,310 | 8,781 | +27.7 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 80,138 | 9,839 | +78.2 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 80,062 | 7,454 | +52.3 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 79,917 | 14,292 | +233.0 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 77,434 | 13,074 | +21.5 |
| [usestrix/strix](https://github.com/usestrix/strix) | 77,216 | 8,790 | +189.7 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 75,547 | 5,163 | +89.0 |
| [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | 74,088 | 12,340 | +1688.0 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 73,931 | 58,180 | +232.3 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 73,240 | 6,468 | +266.5 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 73,107 | 23,398 | +295.8 |
| [blader/humanizer](https://github.com/blader/humanizer) | 72,643 | 5,689 | +418.1 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 72,502 | 11,682 | +79.4 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 71,080 | 5,836 | +25.9 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 69,348 | 6,884 | +46.4 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) 💤 | 67,099 | 13,435 | +6.1 |
| [tw93/Pake](https://github.com/tw93/Pake) | 63,966 | 13,055 | +56.0 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 63,770 | 13,495 | +61.0 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 62,190 | 9,084 | +197.0 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 61,197 | 7,721 | +92.5 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,672 | 7,654 | +31.6 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 59,575 | 6,993 | +130.9 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 59,307 | 9,104 | +106.3 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 58,981 | 4,922 | +163.8 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 58,657 | 5,004 | +75.7 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 58,234 | 4,441 | +152.4 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 58,204 | 5,099 | +129.2 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 55,621 | 4,619 | +248.2 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) 💤 | 55,592 | 25,100 | +2.3 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 55,445 | 6,343 | +27.8 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 53,775 | 11,235 | +76.7 |
| [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills) | 53,538 | 3,812 | +118.0 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 52,463 | 4,239 | +228.6 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 52,399 | 12,805 | +59.8 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 50,287 | 8,761 | +32.3 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 50,228 | 5,185 | +16.6 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 50,196 | 7,281 | +59.1 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 49,072 | 4,079 | +56.6 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 48,050 | 10,447 | +17.2 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 48,039 | 5,006 | +127.4 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 47,451 | 9,786 | +40.3 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 47,393 | 3,662 | +142.9 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 46,953 | 1,831 | +438.4 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 46,599 | 2,783 | +61.0 |
| [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) | 46,510 | 10,117 | +136.8 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 45,309 | 7,832 | +50.1 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,834 | 4,531 | +40.4 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,824 | 4,232 | +18.0 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 42,752 | 5,328 | +213.6 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 42,657 | 3,551 | +64.8 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,497 | 4,363 | +12.3 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 41,475 | 5,417 | +37.0 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) 💤 | 41,195 | 3,576 | +2.8 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 41,031 | 3,655 | +27.0 |
| [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | 40,697 | 5,339 | +143.3 |
| [yetone/magpie](https://github.com/yetone/magpie) | 40,405 | 3,707 | +651.2 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) 💤 | 39,881 | 6,227 | +2.4 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 39,725 | 4,586 | +110.3 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 39,665 | 5,902 | +80.4 |
| [google/langextract](https://github.com/google/langextract) | 39,350 | 2,756 | +11.0 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 39,260 | 2,541 | +31.4 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 38,838 | 4,136 | +97.1 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 38,734 | 6,312 | +75.4 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,614 | 3,458 | +26.5 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 38,131 | 3,305 | +70.0 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 38,079 | 5,325 | +94.0 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) 💤 | 37,466 | 6,885 | +7.7 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 36,624 | 4,480 | +56.6 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) 💤 | 36,077 | 2,611 | +4.2 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,494 | 9,113 | +12.2 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,454 | 3,603 | +23.7 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 34,416 | 2,371 | +79.2 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,588 | 5,047 | +18.5 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 33,538 | 2,297 | +38.5 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,914 | 2,996 | +18.6 |
| [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | 32,812 | 2,503 | +109.7 |
| [decolua/9router](https://github.com/decolua/9router) | 32,782 | 6,425 | +48.6 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,453 | 2,009 | +20.8 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 31,825 | 3,910 | +395.7 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 31,537 | 4,463 | +33.1 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 31,239 | 3,057 | +21.2 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 31,218 | 2,840 | +118.6 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 31,201 | 3,692 | +199.3 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 31,117 | 3,051 | +41.1 |
| [ccch1mneyyy/dsh-Go](https://github.com/ccch1mneyyy/dsh-Go) | 30,665 | 1,476 | +884.3 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,547 | 2,718 | +23.4 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) 💤 | 29,742 | 2,658 | +6.1 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,291 | 1,348 | +15.1 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,913 | 2,695 | +17.8 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,793 | 3,071 | +11.7 |
| [voideditor/void](https://github.com/voideditor/void) 💤 | 28,699 | 2,658 | — |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 28,686 | 4,061 | +132.0 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 28,227 | 3,176 | +115.3 |
| [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | 28,206 | 2,330 | +87.1 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 27,393 | 2,438 | +208.1 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) 💤 | 26,655 | 4,065 | +6.2 |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | 26,305 | 1,975 | +443.7 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 25,935 | 2,981 | +156.6 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,694 | 3,204 | +20.5 |
| [toon-format/toon](https://github.com/toon-format/toon) 💤 | 25,652 | 1,125 | +3.3 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,867 | 2,192 | +28.0 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | 23,555 | 3,149 | +217.1 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 23,340 | 827 | +18.8 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 23,301 | 2,247 | +17.5 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 22,480 | 2,359 | +28.7 |
| [winfunc/opcode](https://github.com/winfunc/opcode) 💤 | 22,462 | 1,704 | +1.3 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 22,277 | 3,566 | +24.4 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 22,006 | 2,577 | +27.9 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) 💤 | 21,940 | 2,899 | +6.0 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) 💤 | 21,825 | 3,140 | +2.4 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 20,932 | 712 | +140.0 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,503 | 1,975 | +12.2 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 20,331 | 1,848 | +34.5 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 20,194 | 1,226 | +160.2 |
| [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) | 20,185 | 2,578 | +347.8 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 19,993 | 8,668 | +76.2 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,978 | 2,537 | +13.7 |
| [tanweai/pua](https://github.com/tanweai/pua) 💤 | 19,878 | 1,207 | +4.7 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 19,652 | 1,574 | +55.5 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,618 | 2,859 | +15.6 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 19,212 | 1,901 | +20.9 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) 💤 | 18,996 | 1,726 | +6.6 |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | 18,724 | 1,543 | +119.3 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) 💤 | 18,275 | 2,288 | +1.8 |
| [opensandbox-group/OpenSandbox](https://github.com/opensandbox-group/OpenSandbox) | 17,829 | 1,720 | +52.3 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,598 | 4,001 | +15.1 |
| [Evolink-AI/awesome-gpt-image-2-API-Prompts](https://github.com/Evolink-AI/awesome-gpt-image-2-API-Prompts) | 17,431 | 1,758 | +79.6 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,403 | 1,790 | +13.0 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 17,297 | 2,553 | +25.2 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 17,227 | 2,544 | +12.3 |
| [cft0808/edict](https://github.com/cft0808/edict) 💤 | 17,119 | 1,775 | +3.6 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 16,511 | 1,487 | +33.5 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) 💤 | 16,067 | 1,798 | +7.1 |
| [miuuyy/codex-chatgpt-web](https://github.com/miuuyy/codex-chatgpt-web) | 15,868 | 1,239 | +132.2 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 15,693 | 1,775 | +82.4 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,534 | 8,614 | +13.1 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) 💤 | 15,361 | 1,568 | +5.1 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) 💤 | 14,932 | 3,261 | +0.7 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 14,690 | 1,982 | +96.8 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) 💤 | 14,633 | 1,103 | +2.4 |
| [openai/codex-security](https://github.com/openai/codex-security) | 14,305 | 1,136 | +103.8 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,979 | 981 | +13.2 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,937 | 2,831 | +29.0 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,846 | 2,845 | +26.4 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) 💤 | 13,797 | 1,478 | +2.7 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) 💤 | 13,673 | 613 | +9.7 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 12,812 | 1,787 | +70.8 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,487 | 1,132 | +14.1 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 12,420 | 1,769 | +50.6 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,939 | 3,228 | +82.8 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,892 | 911 | +10.9 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) 💤 | 11,813 | 1,477 | +9.6 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,457 | 1,032 | +25.1 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) 💤 | 11,356 | 724 | — |
| [aden-hive/hive](https://github.com/aden-hive/hive) 💤 | 11,166 | 5,631 | +1.6 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) 💤 | 11,066 | 1,807 | +1.3 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,976 | 985 | +21.0 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,741 | 1,789 | +37.9 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10,682 | 778 | +40.2 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 10,481 | 1,335 | +71.1 |
| [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) | 10,408 | 1,914 | +130.4 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) 💤 | 10,367 | 827 | +3.4 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) 💤 | 10,346 | 7,636 | +0.7 |
| [YouMind-OpenLab/awesome-gpt-image-2](https://github.com/YouMind-OpenLab/awesome-gpt-image-2) | 10,328 | 900 | +46.7 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) 💤 | 10,150 | 1,114 | +4.5 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) 💤 | 9,880 | 341 | +7.0 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,854 | 721 | +15.6 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) 💤 | 9,739 | 727 | +0.9 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) 💤 | 8,924 | 913 | +0.3 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,855 | 1,094 | +29.4 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) 💤 | 8,749 | 850 | +1.7 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,484 | 742 | +15.2 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) 💤 | 8,454 | 648 | +1.0 |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | 8,416 | 534 | +27.2 |
| [OpenCoworkAI/open-codesign](https://github.com/OpenCoworkAI/open-codesign) | 8,250 | 878 | +37.7 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) 💤 | 8,126 | 197 | +0.3 |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | 8,005 | 565 | +195.2 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) 💤 | 7,588 | 1,136 | — |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,335 | 637 | +22.9 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) 💤 | 7,198 | 569 | +3.7 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) 💤 | 7,162 | 596 | +2.7 |
| [steipete/summarize](https://github.com/steipete/summarize) 💤 | 6,875 | 462 | +4.6 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) 💤 | 6,852 | 379 | +2.4 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) 💤 | 6,623 | 253 | +3.4 |
| [haydenschmitty/floorplan](https://github.com/haydenschmitty/floorplan) | 6,392 | 574 | +236.4 |
| [EverMind-AI/Raven](https://github.com/EverMind-AI/Raven) | 6,304 | 275 | +33.9 |
| [microsoft/fara](https://github.com/microsoft/fara) 💤 | 6,261 | 610 | +1.3 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) 💤 | 6,065 | 419 | — |
| [sandbox-quantum/switch](https://github.com/sandbox-quantum/switch) | 4,697 | 369 | +36.1 |
| [re4/LibreCode](https://github.com/re4/LibreCode) 💤 | 86 | 4 | — |
<!-- AUTOGEN-REPOS-END -->

---

## What it does

- Collects daily snapshots of stars, forks, watchers and open issues for every tracked repo
- Discovers new trending repos automatically every Monday using the GitHub Search API
- Shows each repo's GitHub description and topics in the dashboard, refreshed with every daily snapshot
- Writes a weekly report every Monday to [`reports/`](./reports/README.md): top 10 by stars gained, top 10 by growth rate, newly tracked repos; unusual jumps (over 50% in a week or 25% in a day) are marked ⚠️
- Stores all history as plain JSON — no database, no backend
- Renders a live dashboard via GitHub Pages — updates daily, zero maintenance

Star counts come from the GitHub API as they are. A viral launch, bulk starring or a repo rename can all show up as a jump; check the repo before quoting a number.

## Tracked repos

Data lives in [`data/`](./data) — one folder per repo, one `history.json` per entry.  
The full watch list is in [`repos.json`](./repos.json).

## Fork & use it for yourself

This is my personal tracker — the watch list reflects what I find interesting. If you want to track different repos, the best path is to **fork this repo and run your own**.

### Setup

1. Fork this repo to your account
2. Clear my data and set your own watch list. The fork brings my full history (one folder per repo in `data/`, plus `reports/`), which would mix into your charts:
   ```bash
   git rm -r -q data reports
   ```
   Then replace the contents of [`repos.json`](./repos.json) with the repos you want to track (or leave one entry — `discover.yml` auto-adds more every Monday) and commit.
3. Go to **Settings → Pages** and enable GitHub Pages from the `main` branch
4. Go to **Actions**, enable workflows (GitHub disables them on forks by default) and run **Collect Repo Stats** once manually to seed your first data point
5. Your dashboard will be live at `https://YOUR-USERNAME.github.io/rising-repos-tracker/`

That's it — daily collection, weekly discovery and the Monday report run automatically on schedule. Zero ongoing maintenance.

### Repo descriptions

Clicking a repo in the dashboard shows its GitHub description and topics, taken from the daily snapshot. Until 2026 the tracker also generated AI summaries with GitHub Models; GitHub retired that service on 2026-07-30. The summaries generated before then stay in `data/<owner>/<repo>/summary.json` and are shown below the description, dated; no new ones are generated.

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
  "notes": "why you're tracking this",
  "created_at": "YYYY-MM-DD"
}
```

`created_at` (the repo's creation date) is optional; without it the repo only shows under "all ages" in the dashboard's age filter. The next daily collect run picks it up automatically.

## Stack

- **GitHub Actions** — scheduling and automation
- **GitHub Pages** — dashboard hosting
- **GitHub API** — data source
- **Chart.js** — star growth visualization
- **Mermaid** — architecture diagram (rendered by GitHub)
- Collecting, reports and README use Node built-ins only; the screenshot workflow installs Puppeteer. No build step, no database

## License

MIT
