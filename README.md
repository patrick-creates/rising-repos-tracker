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
![Summarize](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/summarize.yml?label=summarize&logo=github-actions&logoColor=white)
![Screenshot](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/screenshot.yml?label=screenshot&logo=github-actions&logoColor=white)
![License](https://img.shields.io/github/license/patrick-creates/rising-repos-tracker)

**[→ View Live Dashboard](https://patrick-creates.github.io/rising-repos-tracker/)** · **[→ Weekly reports](./reports/README.md)**

Built and maintained by [Telosignal](https://www.telosignal.com/).

![Dashboard preview](./preview.png)

<!-- AUTOGEN-STATS-START -->
## 📊 Current snapshot

> Auto-updated daily — last refreshed 2026-11-07

| Metric | Value |
|---|---|
| Repos tracked | **213** |
| Total stars | **11,413,170** |
| Total forks | **1,663,919** |
| Fastest growing | **rea** (+11737.0/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 439,391 | +11737.0 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 64,826 | +2014.6 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 103,316 | +1362.2 |
| 4 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 105,104 | +1012.0 |
| 5 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 186,094 | +1000.5 |

### 🆕 Recently added

- [pbakaus/impeccable](https://github.com/pbakaus/impeccable) — added 2026-11-02 — The design vocabulary for your coding agent. Steer with polish and bolder, review with critique and audit, catch AI slop before it ships.
- [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) — added 2026-11-02 — The open-source agent for CI/CD reliability.
- [makecindy/cindy](https://github.com/makecindy/cindy) — added 2026-11-02 — Consider it done. The open-source AI agent that works out of the box · 想到，就能做到。开源、开箱即用的 AI Agent。
<!-- AUTOGEN-STATS-END -->

<!-- AUTOGEN-DIAGRAM-START -->
## 🔄 How it works

```mermaid
graph LR
    repos[("repos.json")]:::data
    history[("data/[owner]/[repo]/<br/>history.json")]:::data
    summary[("data/[owner]/[repo]/<br/>summary.json")]:::data
    readme[("README.md")]:::data
    reports[("reports/<br/>YYYY-Www.md")]:::data
    preview[("preview.png")]:::data
    dashboard["index.html<br/>(GitHub Pages)"]:::output
    collect_yml["Collect Repo Stats<br/><i>Daily 05:17 UTC</i>"]:::workflow
    discover_yml["Discover Trending Repos<br/><i>Monday 04:43 UTC</i>"]:::workflow
    screenshot_yml["Screenshot Dashboard<br/><i>after collect repo stats</i>"]:::workflow
    summarize_yml["Summarize Repos<br/><i>after discover trending repos</i>"]:::workflow
    repos --> collect_yml
    collect_yml --> history
    collect_yml --> readme
    collect_yml -->|Mondays| reports
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
| [morluto/rea](https://github.com/morluto/rea) | 439,391 | 108,831 | +11737.0 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 394,100 | 82,822 | +127.1 |
| [obra/superpowers](https://github.com/obra/superpowers) | 313,832 | 27,919 | +567.1 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 298,840 | 44,157 | +661.8 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 261,341 | 57,886 | +636.5 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 194,250 | 14,616 | +400.2 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,933 | 45,902 | +20.5 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 186,094 | 10,296 | +1000.5 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 176,124 | 22,457 | +78.4 |
| [langgenius/dify](https://github.com/langgenius/dify) | 160,604 | 25,411 | +108.9 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 157,988 | 22,966 | +118.5 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 152,513 | 10,024 | +453.6 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,148 | 25,092 | +70.3 |
| [github/spec-kit](https://github.com/github/spec-kit) | 148,295 | 13,323 | +283.3 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 146,339 | 15,489 | +384.5 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 143,746 | 13,750 | +456.8 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 123,091 | 66,035 | +69.3 |
| [stablyai/orca](https://github.com/stablyai/orca) | 118,167 | 7,495 | +851.5 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 118,085 | 6,869 | +327.0 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 114,217 | 9,911 | +218.2 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 111,871 | 18,525 | +392.9 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 111,400 | 7,489 | +509.4 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 109,834 | 9,823 | +568.1 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 106,399 | 12,110 | +359.7 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 105,104 | 6,244 | +1012.0 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 103,316 | 11,472 | +1362.2 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 102,786 | 13,340 | +222.2 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 96,503 | 24,513 | +93.4 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 94,321 | 6,423 | +499.6 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 92,862 | 12,396 | +109.4 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 90,295 | 13,975 | +207.7 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,944 | 58,596 | +5.2 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 86,323 | 10,751 | +206.1 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 85,792 | 5,494 | +209.3 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 85,292 | 12,878 | +589.8 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 84,291 | 16,122 | +41.0 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 81,119 | 9,543 | +219.0 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 80,820 | 14,877 | +205.6 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 80,297 | 7,407 | +360.1 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 80,005 | 12,796 | +109.4 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,881 | 8,769 | +29.9 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 79,145 | 7,367 | +84.7 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 79,055 | 6,175 | +351.0 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 78,968 | 9,594 | +107.4 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 77,957 | 10,383 | +382.5 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 77,262 | 13,694 | +320.1 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,991 | 13,048 | +19.5 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 74,208 | 5,092 | +146.9 |
| [usestrix/strix](https://github.com/usestrix/strix) | 74,187 | 8,380 | +304.9 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 70,968 | 11,465 | +176.8 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,763 | 5,841 | +71.9 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 70,172 | 22,629 | +415.3 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,755 | 6,848 | +88.2 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 67,672 | 55,958 | +173.7 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 67,020 | 13,462 | +4.5 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 66,891 | 5,861 | +225.1 |
| [blader/humanizer](https://github.com/blader/humanizer) | 65,805 | 5,203 | +332.3 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 64,826 | 1,745 | +2014.6 |
| [tw93/Pake](https://github.com/tw93/Pake) | 62,874 | 12,943 | +81.5 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 62,861 | 13,083 | +89.4 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,452 | 7,654 | +46.5 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 59,829 | 7,504 | +193.8 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 58,991 | 8,620 | +173.3 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 57,848 | 8,872 | +139.2 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 57,439 | 4,922 | +77.1 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 57,375 | 6,627 | +449.3 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 56,370 | 4,957 | +211.4 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 55,696 | 4,237 | +155.4 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,562 | 25,092 | +15.4 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,989 | 6,283 | +29.8 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 54,914 | 5,234 | +86.9 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,813 | 10,560 | +89.1 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 51,524 | 12,539 | +97.4 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 50,945 | 3,599 | +107.3 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 50,002 | 5,144 | +29.1 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,899 | 8,716 | +41.7 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 49,597 | 3,640 | +319.4 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 49,304 | 7,154 | +64.0 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 48,892 | 3,932 | +294.3 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 48,274 | 3,986 | +211.0 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,827 | 10,420 | +18.9 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,834 | 9,644 | +56.4 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 46,331 | 4,819 | +108.9 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 46,327 | 3,409 | +80.1 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 45,549 | 2,765 | +44.5 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,610 | 7,683 | +66.6 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 43,835 | 1,783 | +400.7 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,579 | 4,213 | +50.7 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,273 | 4,467 | +38.2 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,267 | 4,316 | +13.1 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 41,737 | 3,410 | +108.0 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,159 | 3,565 | +39.1 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 40,895 | 5,306 | +42.7 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,657 | 3,639 | +35.1 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,847 | 6,231 | +3.8 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 39,829 | 4,534 | +104.3 |
| [google/langextract](https://github.com/google/langextract) | 39,274 | 2,749 | +16.4 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 38,778 | 5,760 | +150.2 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,734 | 2,497 | +73.8 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,271 | 3,426 | +25.6 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 38,096 | 4,301 | +174.6 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 37,808 | 6,128 | +176.1 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 37,448 | 3,263 | +135.7 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,349 | 6,886 | +18.9 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 37,188 | 3,933 | +164.8 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 36,724 | 5,033 | +140.9 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 36,130 | 2,503 | +109.2 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,732 | 4,354 | +127.6 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,299 | 9,130 | +38.8 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,084 | 3,565 | +42.4 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 33,634 | 2,306 | +111.5 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,151 | 4,998 | +9.3 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 33,116 | 2,261 | +199.3 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,630 | 2,967 | +97.4 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,156 | 1,987 | +34.2 |
| [decolua/9router](https://github.com/decolua/9router) | 32,063 | 6,266 | +99.9 |
| [yetone/magpie](https://github.com/yetone/magpie) | 31,569 | 2,765 | +783.1 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 31,055 | 4,378 | +45.4 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,948 | 3,035 | +47.0 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,603 | 2,984 | +187.1 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,182 | 2,672 | +55.0 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,648 | 2,641 | +76.5 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 29,434 | 2,680 | +170.8 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,130 | 1,334 | +29.2 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,734 | 2,631 | +37.4 |
| [voideditor/void](https://github.com/voideditor/void) | 28,714 | 2,659 | — |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,612 | 3,054 | +12.0 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 28,379 | 3,288 | +282.0 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 27,146 | 3,524 | +190.0 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 26,693 | 3,683 | +148.8 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 26,558 | 3,028 | +120.1 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,550 | 4,070 | +7.2 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,620 | 1,124 | +7.4 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,375 | 3,153 | +46.3 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 24,744 | 2,147 | +140.8 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 23,518 | 2,704 | +109.9 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,432 | 2,104 | +46.9 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 23,051 | 2,206 | +56.9 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,951 | 811 | +37.5 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,431 | 1,701 | +2.8 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 22,049 | 2,318 | +41.7 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,928 | 3,523 | +47.3 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,846 | 2,890 | +8.0 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,808 | 3,134 | +5.7 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,575 | 2,510 | +113.4 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,373 | 1,964 | +23.7 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 20,012 | 8,720 | +64.2 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,814 | 1,199 | +10.8 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,798 | 1,780 | +48.6 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,749 | 2,513 | +26.7 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,427 | 2,820 | +33.3 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,918 | 1,868 | +26.3 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,909 | 1,711 | +11.0 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 18,822 | 1,529 | +46.2 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 18,524 | 1,358 | +234.6 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,242 | 2,283 | +2.9 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 17,521 | 608 | +209.4 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,453 | 3,896 | +15.3 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,238 | 1,750 | +17.4 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,053 | 1,768 | +6.8 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 17,045 | 2,504 | +50.5 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,981 | 2,494 | +19.5 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 16,062 | 1,436 | +29.8 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,962 | 1,795 | +6.1 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,343 | 8,613 | +15.3 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,292 | 1,554 | +7.7 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,922 | 3,268 | +5.6 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,605 | 1,097 | +5.1 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 14,571 | 1,681 | +43.5 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,845 | 965 | +31.5 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,763 | 1,472 | +20.9 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,590 | 2,773 | +34.7 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,544 | 610 | +17.3 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,410 | 2,722 | +26.0 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 12,745 | 1,870 | +17.4 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,307 | 1,112 | +17.4 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,896 | 3,254 | +72.2 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 11,878 | 1,647 | +95.5 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,751 | 1,609 | +112.1 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,721 | 909 | +26.2 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,714 | 1,461 | +23.0 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,433 | 721 | +37.3 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,322 | 911 | +31.7 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,144 | 5,633 | +4.1 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,129 | 990 | +65.6 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,048 | 1,802 | +1.3 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,863 | 981 | +36.6 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,341 | 7,661 | +3.6 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,316 | 826 | +10.5 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,276 | 1,690 | +49.7 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10,145 | 732 | +62.1 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,086 | 1,107 | +6.8 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,787 | 327 | +26.3 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,721 | 730 | +3.4 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,690 | 712 | +40.1 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 9,440 | 1,172 | +90.4 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,919 | 910 | +2.5 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,721 | 848 | — |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,671 | 1,071 | +31.2 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,445 | 648 | +1.0 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,268 | 726 | +22.5 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,125 | 197 | +0.8 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,602 | 1,137 | +0.5 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,145 | 567 | +12.2 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,109 | 590 | +8.2 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,109 | 613 | +34.6 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,826 | 378 | +8.7 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,787 | 453 | +3.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,592 | 250 | +4.1 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,248 | 603 | +2.1 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,071 | 420 | +0.0 |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 88 | 4 | — |
<!-- AUTOGEN-REPOS-END -->

---

## What it does

- Collects daily snapshots of stars, forks, watchers and open issues for every tracked repo
- Discovers new trending repos automatically every Monday using the GitHub Search API
- Generates AI summaries (use cases, similar tools, tags) for each tracked repo via GitHub Models
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

### AI summaries (optional)

After each discovery run, `summarize.yml` writes a short summary per repo with [GitHub Models](https://docs.github.com/en/github-models) (`gpt-4o-mini`), using the workflow's own `GITHUB_TOKEN` — no API key needed. GitHub Models has a free tier with rate limits; if a call fails, the job logs the error for that repo and moves on, and the dashboard shows "No AI summary available" for it. Everything else keeps working.

To switch it off, add a repository variable `SUMMARIES` with the value `off` under **Settings → Secrets and variables → Actions → Variables**.

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
- **GitHub Models** — free AI summaries (gpt-4o-mini)
- **Chart.js** — star growth visualization
- **Mermaid** — architecture diagram (rendered by GitHub)
- Collecting, reports and README use Node built-ins only; the screenshot workflow installs Puppeteer. No build step, no database

## License

MIT
