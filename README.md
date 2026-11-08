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

> Auto-updated daily — last refreshed 2026-11-08

| Metric | Value |
|---|---|
| Repos tracked | **213** |
| Total stars | **11,435,449** |
| Total forks | **1,667,167** |
| Fastest growing | **rea** (+11409.0/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 442,272 | +11409.0 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 65,923 | +1968.8 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 104,346 | +1356.9 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 186,622 | +997.1 |
| 5 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 105,869 | +970.8 |

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
| [morluto/rea](https://github.com/morluto/rea) | 442,272 | 109,360 | +11409.0 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 394,175 | 82,833 | +126.8 |
| [obra/superpowers](https://github.com/obra/superpowers) | 314,359 | 27,970 | +566.8 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 299,416 | 44,233 | +661.3 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 261,614 | 58,094 | +634.5 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 194,388 | 14,637 | +398.8 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,938 | 45,894 | +20.4 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 186,622 | 10,335 | +997.1 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 176,380 | 22,494 | +79.4 |
| [langgenius/dify](https://github.com/langgenius/dify) | 160,653 | 25,415 | +108.5 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 158,080 | 22,983 | +118.4 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 152,687 | 10,031 | +452.0 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,192 | 25,092 | +70.2 |
| [github/spec-kit](https://github.com/github/spec-kit) | 148,557 | 13,353 | +283.2 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 146,714 | 15,526 | +384.5 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 144,212 | 13,804 | +456.9 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 123,119 | 66,082 | +69.1 |
| [stablyai/orca](https://github.com/stablyai/orca) | 118,912 | 7,545 | +850.6 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 118,252 | 6,877 | +326.1 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 114,677 | 9,953 | +219.5 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 112,164 | 18,599 | +387.9 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 111,838 | 7,520 | +508.9 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 110,139 | 9,854 | +566.4 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 106,570 | 12,132 | +358.6 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 105,869 | 6,295 | +970.8 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 104,346 | 11,614 | +1356.9 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 102,970 | 13,368 | +222.0 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 96,542 | 24,548 | +93.1 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 94,605 | 6,448 | +493.3 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 92,931 | 12,417 | +109.2 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 90,341 | 13,999 | +206.7 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,939 | 58,587 | +5.2 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 86,389 | 10,770 | +205.3 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 85,870 | 5,502 | +208.6 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 85,566 | 12,946 | +587.3 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 84,374 | 16,141 | +41.2 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 81,213 | 9,552 | +215.4 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 81,031 | 14,923 | +205.7 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 80,800 | 7,459 | +361.0 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 80,041 | 12,808 | +109.0 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,903 | 8,768 | +29.9 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 79,188 | 7,370 | +84.4 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 79,120 | 6,187 | +349.0 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 79,025 | 9,604 | +107.1 |
| [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) | 78,454 | 10,454 | +383.4 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 77,694 | 13,778 | +320.8 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,999 | 13,054 | +19.5 |
| [usestrix/strix](https://github.com/usestrix/strix) | 74,340 | 8,401 | +303.9 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 74,257 | 5,096 | +146.4 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 71,020 | 11,464 | +176.1 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,778 | 5,843 | +71.6 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 70,380 | 22,702 | +413.5 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,803 | 6,852 | +88.0 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 67,947 | 56,090 | +174.3 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 67,023 | 13,457 | +4.5 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 66,979 | 5,875 | +224.2 |
| [blader/humanizer](https://github.com/blader/humanizer) | 66,146 | 5,224 | +332.5 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 65,923 | 1,771 | +1968.8 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 62,898 | 13,107 | +89.1 |
| [tw93/Pake](https://github.com/tw93/Pake) | 62,883 | 12,944 | +81.1 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,467 | 7,660 | +46.4 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 60,067 | 7,539 | +194.0 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 59,140 | 8,640 | +173.1 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 57,944 | 8,888 | +138.9 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 57,515 | 4,925 | +77.1 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 57,442 | 6,639 | +445.8 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 56,454 | 4,968 | +209.3 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 55,800 | 4,242 | +154.9 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,561 | 25,094 | +15.3 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 55,011 | 6,286 | +29.8 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 54,956 | 5,237 | +86.6 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,834 | 10,559 | +88.7 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 51,559 | 12,558 | +97.0 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 50,991 | 3,599 | +106.9 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 50,019 | 5,148 | +29.1 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,920 | 8,719 | +41.6 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 49,640 | 3,644 | +317.2 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 49,347 | 7,157 | +63.9 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 49,261 | 3,974 | +294.9 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 48,326 | 3,995 | +209.8 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,835 | 10,419 | +18.9 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,850 | 9,645 | +56.2 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 46,418 | 3,418 | +80.2 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 46,416 | 4,835 | +108.8 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 45,611 | 2,766 | +44.6 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,641 | 7,692 | +66.3 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 44,036 | 1,787 | +398.5 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,588 | 4,212 | +50.0 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,301 | 4,472 | +38.1 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,276 | 4,316 | +13.1 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 41,778 | 3,413 | +107.5 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,158 | 3,565 | +38.9 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 40,918 | 5,313 | +42.6 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,684 | 3,638 | +35.1 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 39,971 | 4,560 | +104.6 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,847 | 6,230 | +3.8 |
| [google/langextract](https://github.com/google/langextract) | 39,281 | 2,750 | +16.3 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 38,841 | 5,774 | +149.6 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,760 | 2,503 | +73.5 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,283 | 3,425 | +25.6 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 38,199 | 4,329 | +174.1 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 37,872 | 6,146 | +175.3 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 37,479 | 3,264 | +134.9 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,357 | 6,882 | +18.8 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 37,253 | 3,943 | +163.5 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 36,792 | 5,052 | +140.4 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 36,133 | 2,506 | +108.5 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,773 | 4,359 | +127.0 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,305 | 9,133 | +38.6 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,107 | 3,567 | +42.2 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 33,669 | 2,307 | +111.0 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,252 | 5,000 | +9.8 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 33,132 | 2,261 | +197.9 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,639 | 2,969 | +96.7 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,175 | 1,985 | +34.1 |
| [decolua/9router](https://github.com/decolua/9router) | 32,098 | 6,276 | +99.5 |
| [yetone/magpie](https://github.com/yetone/magpie) | 32,065 | 2,826 | +761.0 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 31,089 | 4,383 | +45.3 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,962 | 3,039 | +46.8 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,636 | 2,989 | +185.7 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,198 | 2,674 | +54.7 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,648 | 2,641 | +76.0 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 29,538 | 2,687 | +170.2 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,134 | 1,334 | +29.0 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,743 | 2,637 | +37.2 |
| [voideditor/void](https://github.com/voideditor/void) | 28,712 | 2,659 | — |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,615 | 3,056 | +11.9 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 28,544 | 3,314 | +279.1 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 27,367 | 3,546 | +190.6 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 26,826 | 3,706 | +148.5 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 26,669 | 3,043 | +120.0 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,552 | 4,070 | +7.1 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,618 | 1,124 | +7.3 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,392 | 3,153 | +46.0 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 24,857 | 2,166 | +140.3 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 23,612 | 2,716 | +109.8 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,453 | 2,105 | +46.7 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 23,056 | 2,209 | +56.5 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,961 | 810 | +37.3 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,431 | 1,699 | +2.8 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 22,059 | 2,318 | +41.5 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,950 | 3,526 | +47.1 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,849 | 2,891 | +7.9 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,806 | 3,135 | +5.6 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,607 | 2,514 | +112.7 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,379 | 1,964 | +23.5 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 20,050 | 8,730 | +63.4 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,816 | 1,199 | +10.8 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,816 | 1,785 | +48.3 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,765 | 2,515 | +26.6 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,441 | 2,825 | +33.1 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,952 | 1,872 | +26.3 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,922 | 1,715 | +11.0 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 18,862 | 1,532 | +46.1 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 18,603 | 1,374 | +222.6 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,243 | 2,284 | +2.9 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 17,573 | 611 | +206.5 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,462 | 3,902 | +15.2 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,251 | 1,750 | +17.4 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 17,054 | 2,504 | +50.2 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,049 | 1,767 | +6.8 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 17,016 | 2,500 | +19.6 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 16,093 | 1,439 | +29.8 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,963 | 1,796 | +6.1 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,353 | 8,614 | +15.2 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,291 | 1,553 | +7.7 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,922 | 3,267 | +5.5 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 14,663 | 1,696 | +43.9 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,606 | 1,098 | +5.1 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,852 | 966 | +31.3 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,765 | 1,474 | +20.8 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,627 | 2,777 | +34.8 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,551 | 610 | +17.2 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,436 | 2,726 | +26.0 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 12,761 | 1,873 | +17.2 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,319 | 1,115 | +17.4 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,943 | 3,270 | +71.6 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 11,937 | 1,659 | +94.7 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,776 | 1,616 | +108.9 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,728 | 908 | +26.1 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,721 | 1,461 | +22.9 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,434 | 721 | +36.9 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,328 | 911 | +31.4 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,144 | 5,633 | +4.0 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,139 | 991 | +64.5 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,049 | 1,802 | +1.3 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,867 | 981 | +36.3 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,338 | 7,658 | +3.6 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,321 | 826 | +10.4 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,304 | 1,696 | +48.0 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10,173 | 735 | +61.3 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,087 | 1,107 | +6.7 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,793 | 328 | +26.2 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,721 | 730 | +3.4 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,704 | 712 | +39.8 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 9,494 | 1,180 | +84.3 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,921 | 910 | +2.5 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,725 | 848 | — |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,689 | 1,075 | +31.0 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,448 | 648 | +1.0 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,270 | 728 | +22.1 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,125 | 197 | +0.8 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,603 | 1,137 | +0.5 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,147 | 569 | +12.0 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,136 | 622 | +34.0 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,110 | 590 | +8.1 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,830 | 378 | +8.7 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,789 | 453 | +3.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,592 | 249 | +4.0 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,250 | 603 | +2.1 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,070 | 420 | — |
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
