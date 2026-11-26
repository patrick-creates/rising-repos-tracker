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

> Auto-updated daily — last refreshed 2026-11-26

| Metric | Value |
|---|---|
| Repos tracked | **234** (46 stalled 💤) |
| Total stars | **12,340,001** |
| Total forks | **1,777,662** |
| Fastest growing | **rea** ⚠️ (+2834.6/day) |

### 🔥 Top 5 by velocity

> ⚠️ unusually fast growth (1,000+ stars/day over its lifetime and the last week): check before trusting. 💤 stalled repos are left out.

| # | Repo | Stars | Stars/day (30d) |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) ⚠️ | 479,358 | +2834.6 |
| 2 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | 80,498 | +1822.6 |
| 3 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) ⚠️ | 87,922 | +1400.8 |
| 4 | [stablyai/orca](https://github.com/stablyai/orca) | 139,833 | +1076.5 |
| 5 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 118,756 | +946.8 |

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
| [morluto/rea](https://github.com/morluto/rea) ⚠️ | 479,358 | 116,550 | +2834.6 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 395,274 | 82,987 | +69.7 |
| [obra/superpowers](https://github.com/obra/superpowers) | 327,164 | 29,013 | +710.5 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 311,092 | 45,700 | +694.2 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 266,291 | 60,415 | +291.0 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 199,174 | 11,305 | +719.0 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 198,567 | 15,077 | +203.5 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 188,200 | 45,834 | +13.8 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 178,565 | 22,762 | +128.6 |
| [langgenius/dify](https://github.com/langgenius/dify) | 161,943 | 25,558 | +75.6 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 159,624 | 23,162 | +90.6 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 157,397 | 10,277 | +271.8 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 154,515 | 16,275 | +442.8 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 153,686 | 14,782 | +572.2 |
| [github/spec-kit](https://github.com/github/spec-kit) | 151,466 | 13,620 | +279.0 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 150,021 | 25,177 | +49.2 |
| [stablyai/orca](https://github.com/stablyai/orca) | 139,833 | 8,938 | +1076.5 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 124,303 | 67,051 | +68.4 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 123,012 | 7,197 | +253.4 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 121,861 | 8,194 | +619.3 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 119,903 | 10,425 | +545.0 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 118,756 | 13,248 | +946.8 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 117,297 | 7,022 | +718.9 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 117,274 | 19,497 | +315.4 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 114,951 | 10,330 | +351.8 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 109,632 | 12,373 | +178.6 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 105,269 | 13,662 | +177.2 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 100,380 | 6,870 | +341.6 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 97,626 | 25,333 | +65.1 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 94,398 | 12,656 | +80.5 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 91,214 | 14,168 | +52.8 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 90,600 | 8,442 | +570.2 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 90,479 | 14,083 | +294.6 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) 💤 | 88,983 | 58,416 | +2.8 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 88,016 | 10,995 | +103.8 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) ⚠️ | 87,922 | 2,491 | +1400.8 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 87,903 | 5,644 | +106.2 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 86,179 | 16,369 | +88.6 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 84,985 | 15,551 | +241.2 |
| [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) | 83,556 | 11,399 | +374.8 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 82,465 | 9,714 | +93.8 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 80,936 | 12,910 | +53.4 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 80,917 | 6,353 | +98.0 |
| [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | 80,498 | 14,211 | +1822.6 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 80,393 | 14,392 | +194.4 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 80,392 | 8,795 | +27.2 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 80,365 | 9,901 | +77.3 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 80,291 | 7,481 | +55.8 |
| [usestrix/strix](https://github.com/usestrix/strix) | 77,713 | 8,863 | +182.8 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 77,521 | 13,086 | +23.0 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 75,788 | 5,190 | +89.4 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 75,525 | 6,658 | +329.8 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 74,747 | 58,705 | +253.4 |
| [blader/humanizer](https://github.com/blader/humanizer) | 73,874 | 5,804 | +420.7 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 73,580 | 23,522 | +235.1 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 72,686 | 11,703 | +79.7 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 71,135 | 5,844 | +25.0 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 69,436 | 6,891 | +41.5 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) 💤 | 67,112 | 13,427 | +5.6 |
| [tw93/Pake](https://github.com/tw93/Pake) | 64,054 | 13,066 | +57.8 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 63,958 | 13,597 | +60.6 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 62,777 | 9,167 | +199.7 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 61,341 | 7,745 | +88.5 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,723 | 7,663 | +32.4 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 60,010 | 7,051 | +129.1 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 59,530 | 9,146 | +98.9 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 59,461 | 4,893 | +173.9 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 58,846 | 5,024 | +73.5 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 58,658 | 4,473 | +151.3 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 58,553 | 5,125 | +122.7 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 56,568 | 4,675 | +271.3 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) 💤 | 55,603 | 25,100 | +2.4 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 55,548 | 6,357 | +28.3 |
| [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills) | 53,883 | 3,836 | +122.7 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 53,845 | 11,240 | +77.2 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 53,007 | 4,280 | +230.2 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 52,594 | 12,868 | +60.3 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 50,380 | 7,310 | +60.1 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 50,358 | 8,772 | +29.8 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 50,267 | 5,192 | +16.6 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 49,199 | 4,096 | +53.2 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 48,286 | 5,053 | +115.1 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 48,091 | 10,452 | +15.8 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 47,569 | 3,677 | +117.7 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 47,559 | 9,808 | +39.7 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 47,458 | 1,838 | +404.3 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 46,776 | 2,784 | +61.5 |
| [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) | 46,668 | 10,168 | +52.7 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 45,460 | 7,872 | +49.3 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 43,279 | 5,444 | +222.3 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,916 | 4,547 | +35.4 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 42,862 | 3,578 | +64.2 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,861 | 4,233 | +16.5 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,547 | 4,371 | +13.0 |
| [yetone/magpie](https://github.com/yetone/magpie) | 41,936 | 3,850 | +623.1 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 41,593 | 5,442 | +37.6 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) 💤 | 41,215 | 3,579 | +2.9 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 41,080 | 3,663 | +25.6 |
| [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | 40,982 | 5,385 | +95.0 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 39,939 | 4,639 | +105.6 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) 💤 | 39,894 | 6,231 | +2.2 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 39,814 | 5,917 | +78.2 |
| [google/langextract](https://github.com/google/langextract) | 39,370 | 2,760 | +10.6 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 39,338 | 2,554 | +30.8 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 39,090 | 4,169 | +94.8 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 38,967 | 6,342 | +71.6 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,686 | 3,465 | +25.2 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 38,279 | 5,381 | +88.5 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 38,227 | 3,316 | +57.1 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) 💤 | 37,484 | 6,889 | +7.5 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 36,805 | 4,500 | +57.2 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) 💤 | 36,071 | 2,625 | +3.1 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,551 | 9,121 | +12.7 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,519 | 3,614 | +23.4 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 34,512 | 2,377 | +67.4 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,634 | 5,053 | +19.5 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 33,596 | 2,301 | +35.5 |
| [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | 32,963 | 2,522 | +50.3 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,955 | 2,997 | +17.8 |
| [decolua/9router](https://github.com/decolua/9router) | 32,870 | 6,438 | +45.8 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 32,549 | 3,963 | +337.5 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,517 | 2,021 | +19.4 |
| [ccch1mneyyy/dsh-Go](https://github.com/ccch1mneyyy/dsh-Go) | 32,507 | 1,569 | +803.2 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 31,617 | 4,473 | +32.6 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 31,582 | 3,733 | +186.2 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 31,531 | 2,872 | +120.8 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 31,306 | 3,064 | +20.3 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 31,209 | 3,062 | +39.9 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,601 | 2,727 | +22.4 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) 💤 | 29,768 | 2,660 | +6.4 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,306 | 1,350 | +12.5 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,980 | 2,712 | +14.7 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 28,962 | 4,113 | +125.0 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,830 | 3,072 | +11.9 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 28,810 | 3,211 | +126.4 |
| [voideditor/void](https://github.com/voideditor/void) 💤 | 28,704 | 2,659 | — |
| [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | 28,246 | 2,335 | +13.3 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 27,756 | 2,487 | +171.7 |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | 26,822 | 2,017 | +395.8 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) 💤 | 26,681 | 4,064 | +6.4 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 26,157 | 3,023 | +147.9 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,779 | 3,214 | +21.4 |
| [toon-format/toon](https://github.com/toon-format/toon) 💤 | 25,663 | 1,126 | +3.2 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | 24,171 | 3,262 | +215.0 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,984 | 2,219 | +29.8 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 23,452 | 833 | +21.3 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 23,353 | 2,261 | +16.9 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 22,568 | 2,368 | +29.5 |
| [winfunc/opcode](https://github.com/winfunc/opcode) 💤 | 22,468 | 1,707 | +1.6 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 22,338 | 3,571 | +23.6 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 22,067 | 2,591 | +27.5 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) 💤 | 21,957 | 2,900 | +6.0 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) 💤 | 21,826 | 3,142 | +2.0 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 21,587 | 1,341 | +153.9 |
| [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) | 21,458 | 2,763 | +424.3 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 20,541 | 1,869 | +38.0 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,524 | 1,981 | +10.6 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 20,254 | 702 | +105.1 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 20,013 | 2,549 | +13.7 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 19,977 | 8,651 | +74.0 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 19,938 | 1,599 | +59.9 |
| [tanweai/pua](https://github.com/tanweai/pua) 💤 | 19,900 | 1,209 | +4.7 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,638 | 2,868 | +14.3 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 19,253 | 1,904 | +20.1 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) 💤 | 19,008 | 1,731 | +6.1 |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | 18,762 | 1,544 | +12.7 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) 💤 | 18,285 | 2,289 | +1.9 |
| [opensandbox-group/OpenSandbox](https://github.com/opensandbox-group/OpenSandbox) | 17,946 | 1,737 | +39.0 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,618 | 4,007 | +16.0 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,438 | 1,800 | +12.1 |
| [Evolink-AI/awesome-gpt-image-2-API-Prompts](https://github.com/Evolink-AI/awesome-gpt-image-2-API-Prompts) | 17,431 | 1,758 | — |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 17,339 | 2,554 | +24.6 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 17,265 | 2,545 | +12.1 |
| [cft0808/edict](https://github.com/cft0808/edict) 💤 | 17,133 | 1,775 | +3.8 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 16,727 | 1,509 | +37.0 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) 💤 | 16,092 | 1,801 | +6.8 |
| [miuuyy/codex-chatgpt-web](https://github.com/miuuyy/codex-chatgpt-web) | 15,937 | 1,242 | +23.0 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 15,851 | 1,786 | +84.2 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 15,701 | 2,039 | +126.8 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,571 | 8,613 | +12.7 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) 💤 | 15,371 | 1,571 | +4.6 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) 💤 | 14,934 | 3,262 | +0.9 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) 💤 | 14,647 | 1,107 | +2.8 |
| [openai/codex-security](https://github.com/openai/codex-security) | 14,395 | 1,144 | +105.8 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 14,011 | 984 | +11.8 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 14,006 | 2,840 | +28.5 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,931 | 2,861 | +27.0 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) 💤 | 13,796 | 1,479 | +2.0 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) 💤 | 13,697 | 616 | +9.1 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 12,985 | 1,798 | +65.0 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 12,523 | 1,800 | +45.2 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,518 | 1,133 | +13.2 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,927 | 3,215 | +80.6 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,920 | 911 | +11.0 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) 💤 | 11,826 | 1,478 | +8.5 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,499 | 1,032 | +23.0 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) 💤 | 11,354 | 725 | — |
| [aden-hive/hive](https://github.com/aden-hive/hive) 💤 | 11,181 | 5,636 | +2.0 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) 💤 | 11,069 | 1,808 | +1.2 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,982 | 986 | +17.2 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,791 | 1,794 | +36.1 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10,751 | 788 | +36.3 |
| [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) | 10,714 | 1,971 | +125.4 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 10,689 | 1,366 | +70.9 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) 💤 | 10,395 | 833 | +4.0 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) 💤 | 10,345 | 7,636 | +0.5 |
| [YouMind-OpenLab/awesome-gpt-image-2](https://github.com/YouMind-OpenLab/awesome-gpt-image-2) | 10,339 | 903 | +3.7 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) 💤 | 10,157 | 1,113 | +4.2 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,927 | 725 | +16.5 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) 💤 | 9,912 | 340 | +7.3 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) 💤 | 9,741 | 727 | +0.8 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) 💤 | 8,930 | 912 | — |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,901 | 1,095 | +29.1 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) 💤 | 8,752 | 850 | +1.7 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,535 | 743 | +15.8 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) 💤 | 8,460 | 648 | +1.1 |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | 8,459 | 543 | +24.9 |
| [OpenCoworkAI/open-codesign](https://github.com/OpenCoworkAI/open-codesign) | 8,259 | 881 | +3.0 |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | 8,132 | 578 | +42.3 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) 💤 | 8,127 | 198 | +0.4 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) 💤 | 7,587 | 1,136 | — |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,377 | 637 | +22.0 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) 💤 | 7,216 | 568 | +4.0 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) 💤 | 7,167 | 598 | +2.7 |
| [haydenschmitty/floorplan](https://github.com/haydenschmitty/floorplan) | 6,918 | 636 | +175.3 |
| [steipete/summarize](https://github.com/steipete/summarize) 💤 | 6,880 | 462 | +4.3 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) 💤 | 6,874 | 380 | +2.6 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) 💤 | 6,627 | 254 | +3.3 |
| [EverMind-AI/Raven](https://github.com/EverMind-AI/Raven) | 6,326 | 282 | +7.3 |
| [microsoft/fara](https://github.com/microsoft/fara) 💤 | 6,260 | 611 | +1.2 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) 💤 | 6,066 | 419 | — |
| [sandbox-quantum/switch](https://github.com/sandbox-quantum/switch) | 4,816 | 378 | +39.7 |
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
