# 🚀 Rising Repos Tracker

> Automatically tracks daily GitHub stats (stars, forks, issues, velocity) for rising open source repos.

**GitHub shows a repo's star count, not how fast it is growing — this keeps a daily history so you can see which repos are actually taking off.** Runs entirely on GitHub Actions + Pages: no server, no database.

**Quick start:** 1. Fork this repo · 2. Put the repos you care about in [`repos.json`](./repos.json) · 3. Enable GitHub Pages and run **Collect Repo Stats** once. Details in [Fork & use it for yourself](#fork--use-it-for-yourself).

⭐ If the dashboard is useful to you, a star helps others find it.

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

> Auto-updated daily — last refreshed 2026-10-25

| Metric | Value |
|---|---|
| Repos tracked | **206** |
| Total stars | **10,840,531** |
| Total forks | **1,596,444** |
| Fastest growing | **rea** (+19199.8/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 383,826 | +19199.8 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 42,853 | +2717.5 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 86,468 | +1380.2 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 176,087 | +1024.5 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 105,655 | +838.5 |

### 🆕 Recently added

- [paperclipai/paperclip](https://github.com/paperclipai/paperclip) — added 2026-10-19 — The open-source app everyone uses to manage agents at work
- [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) — added 2026-10-19 — 在 dsh 里装上这个插件即可，无需登录、注册或填 API Key，就能使用包括 DeepSeek V4.1 Flash、Kimi K3 在内的前沿模型——完全免费，不限量。 All you do is install this plugin in dsh: no login, no sign-up, no API key — the frontier models are just there, DeepSeek V4.1 Flash and Kimi K3 among them. Completely free, with no usage cap.
- [morluto/rea](https://github.com/morluto/rea) — added 2026-10-12 — Reverse engineer anything with agents, from app behavior down to native binaries.
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 393,041 | 82,610 | +130.7 |
| [morluto/rea](https://github.com/morluto/rea) | 383,826 | 96,057 | +19199.8 |
| [obra/superpowers](https://github.com/obra/superpowers) | 304,985 | 27,166 | +555.3 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 288,737 | 42,813 | +652.7 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 257,015 | 56,286 | +660.4 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 192,149 | 14,350 | +419.0 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,747 | 45,894 | +21.0 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 176,087 | 9,616 | +1024.5 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 174,531 | 22,292 | +74.9 |
| [langgenius/dify](https://github.com/langgenius/dify) | 159,516 | 25,212 | +110.9 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 156,733 | 22,824 | +120.2 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 148,572 | 9,771 | +465.8 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 148,429 | 24,915 | +71.5 |
| [github/spec-kit](https://github.com/github/spec-kit) | 142,846 | 12,786 | +272.6 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 140,321 | 14,865 | +378.4 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 135,063 | 12,893 | +426.3 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 122,153 | 64,842 | +69.1 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 115,011 | 6,634 | +334.4 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 107,251 | 17,817 | +474.2 |
| [stablyai/orca](https://github.com/stablyai/orca) | 105,655 | 6,683 | +838.5 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 103,934 | 11,881 | +373.5 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 103,068 | 9,107 | +167.8 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 102,421 | 9,068 | +567.9 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 102,414 | 6,920 | +493.2 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 99,540 | 13,019 | +219.9 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 95,473 | 23,941 | +94.5 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 91,817 | 12,194 | +111.8 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 89,506 | 13,749 | +219.6 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 89,120 | 6,025 | +564.4 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,892 | 58,718 | +5.3 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 86,468 | 9,581 | +1380.2 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 84,539 | 10,491 | +211.7 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 84,533 | 5,373 | +218.5 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 83,486 | 16,013 | +39.3 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 81,089 | 11,874 | +621.1 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,520 | 8,721 | +30.1 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 79,245 | 9,301 | +267.7 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 79,212 | 12,665 | +113.3 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 78,552 | 7,290 | +87.8 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 77,925 | 9,327 | +109.6 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 77,807 | 6,045 | +376.1 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 77,249 | 14,288 | +200.0 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,812 | 12,979 | +20.0 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 73,734 | 12,928 | +324.5 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 72,952 | 4,985 | +151.0 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 72,052 | 6,513 | +334.5 |
| [usestrix/strix](https://github.com/usestrix/strix) | 71,852 | 8,024 | +316.0 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 71,851 | 9,326 | +372.9 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,329 | 5,790 | +75.0 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 70,191 | 11,375 | +186.3 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,056 | 6,771 | +91.0 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 67,055 | 55,631 | +184.4 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,930 | 13,463 | +4.3 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 65,645 | 20,554 | +423.7 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 65,435 | 5,683 | +235.7 |
| [tw93/Pake](https://github.com/tw93/Pake) | 62,309 | 12,832 | +84.6 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 62,024 | 12,666 | +91.5 |
| [blader/humanizer](https://github.com/blader/humanizer) | 60,547 | 4,810 | +297.6 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 59,736 | 7,579 | +45.9 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 58,527 | 7,349 | +202.1 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 56,520 | 4,871 | +77.7 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 56,496 | 8,359 | +171.6 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 56,196 | 8,585 | +140.2 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 55,830 | 6,401 | +493.6 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,528 | 25,084 | +16.4 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,662 | 6,239 | +30.2 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 54,566 | 4,808 | +231.0 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 54,126 | 5,880 | +89.0 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 53,851 | 4,129 | +157.3 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,497 | 10,526 | +95.5 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 50,674 | 12,251 | +100.1 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 50,062 | 3,540 | +110.8 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,748 | 5,107 | +29.9 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,344 | 8,676 | +41.6 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 48,499 | 7,051 | +64.2 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 48,261 | 3,531 | +344.8 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,579 | 10,407 | +18.9 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 47,464 | 3,904 | +227.4 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,309 | 9,517 | +57.8 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 45,833 | 3,647 | +301.2 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 44,845 | 2,751 | +43.7 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 44,525 | 4,661 | +106.3 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 43,882 | 7,539 | +67.7 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 43,418 | 3,189 | +67.3 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 42,853 | 1,214 | +2717.5 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,336 | 4,183 | +59.3 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,143 | 4,289 | +13.4 |
| [wshobson/agents](https://github.com/wshobson/agents) | 41,699 | 4,422 | +37.7 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,118 | 3,565 | +42.1 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 40,792 | 3,302 | +111.3 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 40,396 | 5,217 | +43.1 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,261 | 3,597 | +35.5 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,815 | 6,241 | +4.0 |
| [google/langextract](https://github.com/google/langextract) | 39,041 | 2,728 | +16.2 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,371 | 2,474 | +77.9 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 37,869 | 3,394 | +25.2 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 37,368 | 5,477 | +154.4 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,245 | 6,889 | +19.8 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 36,674 | 5,926 | +185.9 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 36,577 | 4,084 | +180.6 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 36,477 | 4,141 | +90.0 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 36,176 | 3,209 | +139.4 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 36,063 | 3,815 | +181.2 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,960 | 2,479 | +118.2 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 35,384 | 4,766 | +144.6 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,002 | 4,261 | +135.0 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 34,369 | 1,707 | +344.7 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,150 | 9,131 | +41.2 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,761 | 3,501 | +43.9 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,043 | 4,988 | +9.4 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 32,454 | 2,205 | +216.7 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,381 | 2,957 | +105.1 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 32,224 | 2,231 | +111.8 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 31,875 | 1,955 | +35.3 |
| [decolua/9router](https://github.com/decolua/9router) | 31,403 | 6,081 | +104.8 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,631 | 3,002 | +49.1 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 30,576 | 4,309 | +46.2 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 29,917 | 2,905 | +203.8 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 29,883 | 2,639 | +58.0 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,561 | 2,641 | +83.4 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 28,870 | 1,328 | +30.1 |
| [voideditor/void](https://github.com/voideditor/void) | 28,733 | 2,657 | — |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,455 | 2,582 | +39.4 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,453 | 3,032 | +11.9 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 27,736 | 2,484 | +176.7 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,482 | 4,059 | +7.3 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 25,600 | 2,916 | +314.9 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,557 | 1,126 | +7.6 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,102 | 3,126 | +50.7 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 24,938 | 3,402 | +153.2 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 24,873 | 2,860 | +118.1 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,044 | 2,060 | +48.6 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 22,796 | 2,152 | +60.7 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,788 | 803 | +40.3 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,419 | 1,708 | +3.0 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,770 | 2,882 | +8.2 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,758 | 3,133 | +5.8 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 21,654 | 2,282 | +43.3 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 21,587 | 1,902 | +108.5 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,585 | 3,474 | +49.4 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 21,431 | 2,399 | +104.0 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,201 | 2,459 | +124.0 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 20,649 | 2,936 | +91.8 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,167 | 1,952 | +24.4 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,748 | 1,202 | +11.4 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,579 | 2,502 | +28.1 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,337 | 1,725 | +50.9 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,181 | 2,775 | +34.7 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,810 | 1,692 | +11.4 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,611 | 1,841 | +26.5 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,226 | 2,286 | +3.0 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 18,058 | 1,490 | +44.8 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 17,704 | 7,482 | — |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,143 | 3,696 | +14.4 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,051 | 1,710 | +17.9 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,013 | 1,768 | +7.2 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 16,900 | 561 | +260.6 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,879 | 2,477 | +55.0 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,559 | 2,426 | +18.2 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,870 | 1,788 | +6.0 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 15,548 | 1,377 | +28.7 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,219 | 1,543 | +7.9 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,163 | 8,604 | +15.5 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,908 | 3,271 | +6.0 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,562 | 1,091 | +5.3 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,722 | 1,444 | +22.9 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,600 | 947 | +32.9 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,405 | 597 | +18.0 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 13,274 | 1,571 | +36.9 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,121 | 2,667 | +34.6 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,092 | 2,653 | +26.1 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,092 | 1,092 | +17.5 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,576 | 893 | +28.0 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,544 | 1,432 | +24.2 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,426 | 720 | +44.3 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,203 | 886 | +35.2 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,122 | 5,645 | +4.3 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,030 | 1,801 | +1.3 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,012 | 1,416 | +167.3 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 10,819 | 1,468 | +100.9 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 10,749 | 954 | +77.1 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,349 | 917 | +36.2 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,327 | 7,684 | +3.9 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,269 | 828 | +11.3 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,021 | 1,106 | +7.7 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,716 | 730 | +3.7 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,683 | 323 | +28.6 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 9,547 | 687 | +69.9 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 9,454 | 2,032 | +16.5 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,410 | 682 | +43.3 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,926 | 908 | +2.8 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,702 | 841 | — |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,427 | 650 | +0.9 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,117 | 195 | +0.8 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,035 | 691 | +23.7 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 7,993 | 1,033 | +26.2 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,602 | 1,140 | +0.6 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,090 | 563 | +15.3 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,083 | 583 | +9.0 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,787 | 372 | +9.5 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,747 | 454 | +3.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,524 | 247 | +3.9 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,221 | 603 | +2.1 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,080 | 420 | +0.1 |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 88 | 4 | — |
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
4. Go to **Actions**, enable workflows (GitHub disables them on forks by default) and run **Collect Repo Stats** once manually to seed your first data point
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
