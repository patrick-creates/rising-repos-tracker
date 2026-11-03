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

> Auto-updated daily — last refreshed 2026-11-03

| Metric | Value |
|---|---|
| Repos tracked | **213** |
| Total stars | **11,306,227** |
| Total forks | **1,650,157** |
| Fastest growing | **rea** (+13227.9/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 425,243 | +13227.9 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 58,474 | +2128.4 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 99,656 | +1393.6 |
| 4 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 101,090 | +1046.0 |
| 5 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 183,341 | +1009.9 |

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
| [morluto/rea](https://github.com/morluto/rea) | 425,243 | 105,912 | +13227.9 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 393,811 | 82,777 | +128.4 |
| [obra/superpowers](https://github.com/obra/superpowers) | 311,568 | 27,722 | +567.1 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 296,133 | 43,815 | +661.4 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 260,079 | 57,293 | +643.9 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 193,675 | 14,533 | +406.1 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,886 | 45,902 | +20.7 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 183,341 | 10,127 | +1009.9 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 175,683 | 22,418 | +77.6 |
| [langgenius/dify](https://github.com/langgenius/dify) | 160,317 | 25,352 | +109.7 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 157,637 | 22,934 | +119.2 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 151,456 | 9,959 | +458.1 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 148,940 | 25,045 | +70.7 |
| [github/spec-kit](https://github.com/github/spec-kit) | 146,188 | 13,112 | +277.7 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 144,577 | 15,297 | +383.2 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 141,550 | 13,539 | +453.1 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 122,899 | 65,816 | +69.8 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 117,088 | 6,806 | +328.9 |
| [stablyai/orca](https://github.com/stablyai/orca) | 114,104 | 7,212 | +846.0 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 111,346 | 9,702 | +206.7 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 110,707 | 18,321 | +420.1 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 109,214 | 7,358 | +508.4 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 108,274 | 9,658 | +573.0 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 105,652 | 12,047 | +363.8 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 102,166 | 13,276 | +223.9 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 101,090 | 5,977 | +1046.0 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 99,656 | 11,049 | +1393.6 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 96,212 | 24,350 | +93.8 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 92,992 | 6,347 | +522.7 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 92,563 | 12,344 | +110.2 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 90,057 | 13,921 | +211.2 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,939 | 58,640 | +5.3 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 85,898 | 10,698 | +208.5 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 85,414 | 5,469 | +212.0 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 84,124 | 12,620 | +599.8 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 83,766 | 16,038 | +38.9 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 80,739 | 9,481 | +236.1 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 79,810 | 12,772 | +110.8 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,771 | 8,767 | +30.0 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 79,715 | 14,691 | +204.0 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 79,002 | 7,359 | +85.8 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 78,703 | 6,150 | +358.4 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 78,639 | 9,526 | +108.0 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 78,073 | 7,192 | +354.8 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,935 | 13,045 | +19.7 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 76,476 | 13,563 | +323.3 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 75,659 | 10,002 | +376.4 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 73,789 | 5,053 | +147.9 |
| [usestrix/strix](https://github.com/usestrix/strix) | 73,515 | 8,282 | +308.4 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 70,693 | 11,453 | +179.3 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,656 | 5,832 | +72.9 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 69,257 | 22,198 | +421.9 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,490 | 6,822 | +88.7 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 67,491 | 55,874 | +176.9 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,996 | 13,468 | +4.5 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 66,431 | 5,811 | +228.1 |
| [blader/humanizer](https://github.com/blader/humanizer) | 64,218 | 5,078 | +325.1 |
| [tw93/Pake](https://github.com/tw93/Pake) | 62,779 | 12,927 | +82.8 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 62,624 | 12,971 | +90.2 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,306 | 7,649 | +46.8 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 59,332 | 7,439 | +195.5 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 58,474 | 1,588 | +2128.4 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 58,215 | 8,547 | +172.8 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 57,384 | 8,792 | +139.8 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 57,161 | 4,906 | +77.3 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 57,034 | 6,578 | +463.0 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 55,933 | 4,920 | +218.5 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,547 | 25,084 | +15.7 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 55,154 | 4,204 | +156.2 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,881 | 6,269 | +29.9 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 54,718 | 5,248 | +87.8 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,722 | 10,554 | +91.0 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 51,277 | 12,450 | +98.3 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 50,681 | 3,581 | +108.4 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,919 | 5,128 | +29.3 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,784 | 8,712 | +42.0 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 49,348 | 3,619 | +328.0 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 49,082 | 7,128 | +64.2 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 48,045 | 3,956 | +215.9 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,767 | 10,411 | +19.0 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 47,755 | 3,829 | +294.6 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,669 | 9,605 | +56.8 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 45,924 | 4,782 | +109.1 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 45,796 | 3,364 | +78.8 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 45,335 | 2,761 | +44.3 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,389 | 7,629 | +66.9 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 43,054 | 1,781 | +410.4 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,519 | 4,208 | +53.2 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,244 | 4,305 | +13.3 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,139 | 4,454 | +38.3 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 41,434 | 3,375 | +108.8 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,162 | 3,568 | +40.1 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 40,748 | 5,278 | +42.9 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,530 | 3,627 | +35.2 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,834 | 6,235 | +3.8 |
| [google/langextract](https://github.com/google/langextract) | 39,258 | 2,754 | +16.7 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,603 | 2,496 | +74.9 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 38,499 | 5,711 | +152.5 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 38,479 | 4,350 | +98.0 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,159 | 3,423 | +25.6 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 37,628 | 4,236 | +176.4 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 37,533 | 6,073 | +179.5 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,333 | 6,886 | +19.3 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 37,274 | 3,257 | +138.3 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 36,834 | 3,902 | +169.1 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 36,363 | 4,960 | +142.3 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 36,053 | 2,501 | +111.7 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,496 | 4,324 | +129.7 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,265 | 9,131 | +39.5 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,016 | 3,553 | +43.0 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 33,332 | 2,296 | +112.5 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,110 | 4,997 | +9.3 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 32,966 | 2,244 | +204.7 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,580 | 2,965 | +99.8 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,079 | 1,980 | +34.6 |
| [decolua/9router](https://github.com/decolua/9router) | 31,878 | 6,209 | +101.5 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 30,943 | 4,349 | +45.9 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,846 | 3,030 | +47.6 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,382 | 2,948 | +191.7 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,110 | 2,665 | +56.0 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,626 | 2,643 | +78.5 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,086 | 1,331 | +29.7 |
| [yetone/magpie](https://github.com/yetone/magpie) | 28,914 | 2,465 | +842.8 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 28,899 | 2,637 | +172.3 |
| [voideditor/void](https://github.com/voideditor/void) | 28,721 | 2,657 | — |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,665 | 2,619 | +38.1 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,577 | 3,051 | +12.0 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 27,683 | 3,195 | +294.0 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,529 | 4,064 | +7.2 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 26,173 | 3,418 | +185.8 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 26,171 | 3,595 | +150.3 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 26,082 | 2,971 | +120.1 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,602 | 1,126 | +7.5 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,294 | 3,146 | +47.6 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 24,120 | 2,081 | +139.6 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,313 | 2,089 | +47.4 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 23,036 | 2,631 | +109.6 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 22,966 | 2,191 | +57.9 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,912 | 810 | +38.4 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,433 | 1,706 | +2.9 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 21,869 | 2,302 | +41.6 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,819 | 2,889 | +8.0 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,816 | 3,508 | +47.8 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,802 | 3,137 | +5.8 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,435 | 2,503 | +116.2 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,315 | 1,962 | +23.9 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,791 | 1,202 | +11.0 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 19,712 | 8,557 | +62.7 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,691 | 2,514 | +27.1 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,674 | 1,766 | +49.4 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,368 | 2,809 | +33.8 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,886 | 1,705 | +11.2 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 18,880 | 1,444 | +396.4 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,836 | 1,859 | +26.4 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 18,563 | 1,516 | +45.6 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,241 | 2,289 | +2.9 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,358 | 3,828 | +15.0 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,178 | 1,737 | +17.5 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 17,171 | 594 | +219.1 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,046 | 1,768 | +7.0 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,998 | 2,494 | +51.8 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,846 | 2,468 | +19.1 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,941 | 1,792 | +6.1 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 15,869 | 1,411 | +29.2 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,279 | 8,605 | +15.3 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,269 | 1,549 | +7.8 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,922 | 3,268 | +5.7 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,599 | 1,096 | +5.2 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,799 | 962 | +32.2 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,744 | 1,463 | +21.4 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 13,602 | 1,596 | +36.8 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,504 | 605 | +17.5 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,474 | 2,747 | +34.9 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,321 | 2,688 | +26.1 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 12,684 | 1,859 | +26.0 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,240 | 1,102 | +17.4 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,669 | 905 | +26.6 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,658 | 1,451 | +23.3 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 11,625 | 1,600 | +98.5 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,575 | 3,087 | +71.3 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,521 | 1,539 | +122.0 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,453 | 720 | +39.5 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,292 | 903 | +32.7 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,141 | 5,638 | +4.2 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,057 | 984 | +69.4 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,042 | 1,804 | +1.3 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,842 | 979 | +37.7 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,335 | 7,671 | +3.7 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,303 | 826 | +10.7 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,064 | 1,107 | +7.0 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,064 | 1,660 | +48.0 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 9,962 | 711 | +63.9 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,746 | 325 | +26.9 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,721 | 730 | +3.5 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,619 | 706 | +41.2 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 9,106 | 1,104 | +118.0 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,957 | 910 | +2.9 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,715 | 848 | — |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,446 | 1,058 | +29.6 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,435 | 648 | +0.9 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,225 | 719 | +23.3 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,121 | 195 | +0.8 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,596 | 1,140 | +0.5 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,124 | 565 | +12.9 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,107 | 589 | +8.5 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,035 | 607 | +42.6 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,818 | 376 | +9.0 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,782 | 455 | +3.3 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,550 | 252 | +3.8 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,243 | 604 | +2.2 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,074 | 419 | +0.0 |
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
