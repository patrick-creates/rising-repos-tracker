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

> Auto-updated daily — last refreshed 2026-11-05

| Metric | Value |
|---|---|
| Repos tracked | **213** |
| Total stars | **11,365,413** |
| Total forks | **1,657,526** |
| Fastest growing | **rea** (+12446.1/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 432,935 | +12446.1 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 61,859 | +2077.1 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 101,524 | +1378.1 |
| 4 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 103,440 | +1132.0 |
| 5 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 184,916 | +1006.6 |

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
| [morluto/rea](https://github.com/morluto/rea) | 432,935 | 107,524 | +12446.1 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 393,950 | 82,784 | +127.7 |
| [obra/superpowers](https://github.com/obra/superpowers) | 312,756 | 27,822 | +567.5 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 297,571 | 43,999 | +662.1 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 260,753 | 57,551 | +640.4 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 193,980 | 14,575 | +403.3 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,913 | 45,904 | +20.6 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 184,916 | 10,226 | +1006.6 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 175,864 | 22,432 | +77.8 |
| [langgenius/dify](https://github.com/langgenius/dify) | 160,457 | 25,386 | +109.3 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 157,837 | 22,946 | +119.0 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 152,047 | 9,990 | +456.2 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,077 | 25,074 | +70.7 |
| [github/spec-kit](https://github.com/github/spec-kit) | 147,661 | 13,250 | +283.0 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 145,492 | 15,388 | +384.1 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 142,730 | 13,648 | +455.8 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 123,014 | 65,939 | +69.7 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 117,656 | 6,830 | +328.3 |
| [stablyai/orca](https://github.com/stablyai/orca) | 116,166 | 7,338 | +849.0 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 113,295 | 9,828 | +215.4 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 111,275 | 18,426 | +404.1 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 110,373 | 7,419 | +509.3 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 109,028 | 9,743 | +570.3 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 106,053 | 12,073 | +361.9 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 103,440 | 6,126 | +1132.0 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 102,506 | 13,302 | +223.3 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 101,524 | 11,253 | +1378.1 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 96,389 | 24,442 | +93.8 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 93,721 | 6,387 | +512.5 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 92,707 | 12,364 | +109.8 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 90,185 | 13,952 | +209.5 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,947 | 58,619 | +5.3 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 86,127 | 10,731 | +207.4 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 85,617 | 5,479 | +210.8 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 84,704 | 12,742 | +594.7 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 84,011 | 16,065 | +39.8 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 80,952 | 9,519 | +227.8 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 80,345 | 14,775 | +205.3 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 79,929 | 12,790 | +110.2 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,839 | 8,762 | +30.0 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 79,285 | 7,298 | +358.2 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 79,071 | 7,355 | +85.2 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 78,898 | 6,168 | +354.8 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 78,812 | 9,558 | +107.7 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,962 | 13,041 | +19.6 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 76,948 | 13,623 | +322.2 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 76,900 | 10,204 | +380.2 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 74,012 | 5,078 | +147.5 |
| [usestrix/strix](https://github.com/usestrix/strix) | 73,872 | 8,332 | +306.8 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 70,818 | 11,457 | +178.0 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,733 | 5,833 | +72.5 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 69,734 | 22,452 | +418.7 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,574 | 6,825 | +88.2 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 67,594 | 55,919 | +175.3 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 67,014 | 13,463 | +4.5 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 66,691 | 5,839 | +226.8 |
| [blader/humanizer](https://github.com/blader/humanizer) | 65,096 | 5,144 | +331.1 |
| [tw93/Pake](https://github.com/tw93/Pake) | 62,831 | 12,935 | +82.2 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 62,766 | 13,033 | +89.9 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 61,859 | 1,667 | +2077.1 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,381 | 7,647 | +46.7 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 59,446 | 7,452 | +193.8 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 58,638 | 8,590 | +173.2 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 57,638 | 8,834 | +139.6 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 57,298 | 4,911 | +77.2 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 57,240 | 6,609 | +456.4 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 56,183 | 4,945 | +215.4 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,555 | 25,081 | +15.5 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 55,455 | 4,220 | +156.0 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,949 | 6,275 | +30.0 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 54,828 | 5,237 | +87.4 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,770 | 10,553 | +90.1 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 51,426 | 12,486 | +98.0 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 50,790 | 3,591 | +107.7 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,961 | 5,138 | +29.2 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,845 | 8,714 | +41.9 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 49,481 | 3,630 | +323.7 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 49,194 | 7,143 | +64.1 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 48,219 | 3,872 | +293.6 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 48,153 | 3,965 | +213.4 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,802 | 10,416 | +19.0 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,768 | 9,621 | +56.7 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 46,193 | 4,800 | +109.4 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 46,103 | 3,385 | +79.7 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 45,453 | 2,765 | +44.5 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,510 | 7,658 | +66.8 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 43,611 | 1,784 | +407.3 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,559 | 4,210 | +52.0 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,256 | 4,309 | +13.2 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,229 | 4,460 | +38.4 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 41,605 | 3,397 | +108.5 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,158 | 3,569 | +39.6 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 40,823 | 5,295 | +42.8 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,605 | 3,634 | +35.3 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,839 | 6,232 | +3.8 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 39,476 | 4,462 | +103.4 |
| [google/langextract](https://github.com/google/langextract) | 39,272 | 2,752 | +16.6 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 38,669 | 5,741 | +151.6 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,663 | 2,499 | +74.3 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,223 | 3,425 | +25.7 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 37,896 | 4,275 | +175.7 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 37,694 | 6,103 | +178.0 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 37,386 | 3,259 | +137.1 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,341 | 6,887 | +19.1 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 37,030 | 3,923 | +167.1 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 36,570 | 5,004 | +141.8 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 36,085 | 2,502 | +110.4 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,626 | 4,343 | +128.7 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,279 | 9,129 | +39.1 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,051 | 3,558 | +42.7 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 33,535 | 2,305 | +112.4 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,133 | 5,003 | +9.3 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 33,067 | 2,254 | +202.2 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,604 | 2,965 | +98.5 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,123 | 1,987 | +34.4 |
| [decolua/9router](https://github.com/decolua/9router) | 31,971 | 6,236 | +100.7 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 31,004 | 4,363 | +45.7 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,892 | 3,033 | +47.3 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,515 | 2,972 | +189.5 |
| [yetone/magpie](https://github.com/yetone/magpie) | 30,265 | 2,611 | +809.3 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,152 | 2,667 | +55.5 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,635 | 2,641 | +77.5 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 29,187 | 2,663 | +171.8 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,115 | 1,329 | +29.5 |
| [voideditor/void](https://github.com/voideditor/void) | 28,716 | 2,658 | — |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,706 | 2,626 | +37.8 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,603 | 3,052 | +12.1 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 28,112 | 3,253 | +289.8 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 26,862 | 3,486 | +191.9 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,541 | 4,070 | +7.2 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 26,466 | 3,639 | +150.2 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 26,358 | 3,011 | +120.6 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,614 | 1,124 | +7.5 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,337 | 3,150 | +47.0 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 24,436 | 2,118 | +140.3 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,383 | 2,096 | +47.2 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 23,207 | 2,655 | +109.2 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 23,010 | 2,200 | +57.4 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,934 | 811 | +38.0 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,435 | 1,703 | +2.9 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 21,991 | 2,314 | +42.0 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,887 | 3,518 | +47.7 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,823 | 2,890 | +7.9 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,809 | 3,136 | +5.7 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,505 | 2,509 | +114.8 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,351 | 1,966 | +23.8 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 19,923 | 8,678 | +65.5 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,799 | 1,202 | +10.9 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,740 | 1,772 | +49.1 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,709 | 2,512 | +26.8 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,404 | 2,819 | +33.6 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 19,161 | 1,482 | +345.2 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,905 | 1,711 | +11.1 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,879 | 1,863 | +26.4 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 18,704 | 1,519 | +46.0 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,244 | 2,286 | +2.9 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,418 | 3,864 | +15.3 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 17,418 | 601 | +215.5 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,203 | 1,744 | +17.4 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,046 | 1,768 | +6.9 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 17,019 | 2,501 | +51.2 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,922 | 2,484 | +19.4 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 15,960 | 1,428 | +29.5 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,956 | 1,795 | +6.2 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,314 | 8,609 | +15.3 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,283 | 1,553 | +7.8 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,924 | 3,269 | +5.7 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,602 | 1,097 | +5.2 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 13,962 | 1,633 | +39.2 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,815 | 962 | +31.8 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,754 | 1,471 | +21.2 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,541 | 2,761 | +34.9 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,533 | 609 | +17.5 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,374 | 2,707 | +26.1 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 12,723 | 1,868 | +21.7 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,263 | 1,106 | +17.3 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,797 | 3,208 | +73.4 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 11,764 | 1,624 | +97.2 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,698 | 908 | +26.5 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,697 | 1,583 | +119.2 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,690 | 1,455 | +23.2 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,446 | 720 | +38.4 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,306 | 905 | +32.2 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,142 | 5,637 | +4.1 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,096 | 986 | +67.4 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,042 | 1,805 | +1.3 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,853 | 980 | +37.1 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,340 | 7,667 | +3.7 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,305 | 827 | +10.6 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,188 | 1,682 | +50.8 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,079 | 1,107 | +7.0 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10,054 | 726 | +63.0 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,773 | 327 | +26.7 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,720 | 730 | +3.5 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,644 | 707 | +40.5 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 9,318 | 1,144 | +110.0 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,940 | 908 | +2.7 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,722 | 849 | — |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,530 | 1,063 | +30.0 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,438 | 648 | +0.9 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,249 | 724 | +22.9 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,124 | 196 | +0.8 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,602 | 1,140 | +0.5 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,135 | 567 | +12.5 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,103 | 588 | +8.3 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,076 | 610 | +38.2 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,821 | 377 | +8.8 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,787 | 454 | +3.3 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,557 | 250 | +3.8 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,246 | 604 | +2.1 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,073 | 420 | +0.0 |
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
