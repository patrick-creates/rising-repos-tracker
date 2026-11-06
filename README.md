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

> Auto-updated daily — last refreshed 2026-11-06

| Metric | Value |
|---|---|
| Repos tracked | **213** |
| Total stars | **11,392,125** |
| Total forks | **1,661,029** |
| Fastest growing | **rea** (+12086.0/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 436,378 | +12086.0 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 63,411 | +2047.9 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 102,420 | +1370.0 |
| 4 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 104,402 | +1089.5 |
| 5 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 185,572 | +1004.0 |

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
| [morluto/rea](https://github.com/morluto/rea) | 436,378 | 108,237 | +12086.0 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 394,042 | 82,809 | +127.5 |
| [obra/superpowers](https://github.com/obra/superpowers) | 313,332 | 27,873 | +567.6 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 298,231 | 44,096 | +662.1 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 261,045 | 57,705 | +638.4 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 194,137 | 14,598 | +401.9 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,923 | 45,907 | +20.6 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 185,572 | 10,266 | +1004.0 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 175,995 | 22,441 | +78.1 |
| [langgenius/dify](https://github.com/langgenius/dify) | 160,539 | 25,403 | +109.1 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 157,915 | 22,953 | +118.8 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 152,308 | 10,012 | +455.0 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,121 | 25,085 | +70.5 |
| [github/spec-kit](https://github.com/github/spec-kit) | 148,074 | 13,296 | +283.7 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 145,982 | 15,442 | +384.7 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 143,272 | 13,703 | +456.6 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 123,053 | 66,002 | +69.5 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 117,913 | 6,855 | +327.9 |
| [stablyai/orca](https://github.com/stablyai/orca) | 117,312 | 7,434 | +851.5 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 113,790 | 9,871 | +217.0 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 111,612 | 18,475 | +400.3 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 111,022 | 7,456 | +510.2 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 109,522 | 9,790 | +569.8 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 106,236 | 12,096 | +360.8 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 104,402 | 6,197 | +1089.5 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 102,661 | 13,322 | +222.8 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 102,420 | 11,355 | +1370.0 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 96,456 | 24,479 | +93.6 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 94,081 | 6,406 | +507.8 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 92,798 | 12,380 | +109.7 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 90,259 | 13,965 | +208.7 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,949 | 58,602 | +5.3 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 86,246 | 10,743 | +206.9 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 85,714 | 5,488 | +210.1 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 85,011 | 12,798 | +592.3 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 84,197 | 16,097 | +40.7 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 81,042 | 9,536 | +223.5 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 80,603 | 14,833 | +205.6 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 79,972 | 12,794 | +109.9 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,866 | 8,765 | +30.0 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 79,866 | 7,351 | +359.6 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 79,105 | 7,363 | +84.9 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 78,986 | 6,175 | +352.9 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 78,906 | 9,576 | +107.7 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 77,470 | 10,300 | +381.7 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 77,066 | 13,645 | +320.9 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,977 | 13,046 | +19.6 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 74,134 | 5,089 | +147.4 |
| [usestrix/strix](https://github.com/usestrix/strix) | 74,050 | 8,352 | +305.9 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 70,914 | 11,460 | +177.5 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,743 | 5,832 | +72.2 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 69,999 | 22,565 | +417.4 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,664 | 6,840 | +88.2 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 67,630 | 55,936 | +174.5 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 67,012 | 13,463 | +4.5 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 66,798 | 5,857 | +226.0 |
| [blader/humanizer](https://github.com/blader/humanizer) | 65,465 | 5,174 | +332.1 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 63,411 | 1,719 | +2047.9 |
| [tw93/Pake](https://github.com/tw93/Pake) | 62,848 | 12,940 | +81.8 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 62,827 | 13,068 | +89.8 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,432 | 7,655 | +46.7 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 59,513 | 7,459 | +193.0 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 58,826 | 8,608 | +173.3 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 57,776 | 8,857 | +139.6 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 57,375 | 4,919 | +77.2 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 57,317 | 6,618 | +452.9 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 56,284 | 4,955 | +213.5 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 55,594 | 4,227 | +155.9 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,559 | 25,086 | +15.5 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,973 | 6,278 | +29.9 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 54,870 | 5,230 | +87.1 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,792 | 10,557 | +89.6 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 51,496 | 12,519 | +97.8 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 50,870 | 3,595 | +107.5 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,981 | 5,141 | +29.2 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,878 | 8,716 | +41.8 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 49,555 | 3,634 | +321.7 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 49,252 | 7,150 | +64.1 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 48,415 | 3,894 | +292.8 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 48,204 | 3,975 | +212.1 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,817 | 10,419 | +19.0 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,799 | 9,632 | +56.5 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 46,269 | 4,811 | +109.2 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 46,230 | 3,398 | +80.0 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 45,503 | 2,765 | +44.5 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,559 | 7,670 | +66.7 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 43,725 | 1,784 | +404.0 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,567 | 4,211 | +51.3 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,260 | 4,313 | +13.2 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,255 | 4,464 | +38.3 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 41,683 | 3,407 | +108.3 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,159 | 3,566 | +39.3 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 40,870 | 5,305 | +42.8 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,637 | 3,636 | +35.2 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,842 | 6,232 | +3.8 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 39,665 | 4,501 | +103.9 |
| [google/langextract](https://github.com/google/langextract) | 39,273 | 2,751 | +16.5 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 38,732 | 5,749 | +151.0 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,709 | 2,499 | +74.1 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,252 | 3,425 | +25.7 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 38,017 | 4,294 | +175.3 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 37,762 | 6,121 | +177.1 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 37,419 | 3,263 | +136.4 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,347 | 6,886 | +19.0 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 37,119 | 3,928 | +166.1 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 36,669 | 5,022 | +141.5 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 36,106 | 2,502 | +109.8 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,692 | 4,347 | +128.2 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,287 | 9,131 | +38.9 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,068 | 3,557 | +42.5 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 33,583 | 2,305 | +111.9 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,143 | 5,001 | +9.3 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 33,088 | 2,259 | +200.7 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,620 | 2,965 | +98.0 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,142 | 1,986 | +34.3 |
| [decolua/9router](https://github.com/decolua/9router) | 32,026 | 6,248 | +100.4 |
| [yetone/magpie](https://github.com/yetone/magpie) | 31,037 | 2,698 | +805.9 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 31,036 | 4,374 | +45.6 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,931 | 3,031 | +47.2 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,567 | 2,982 | +188.4 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,172 | 2,672 | +55.3 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,647 | 2,641 | +77.0 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 29,352 | 2,676 | +171.7 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,122 | 1,333 | +29.4 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,725 | 2,627 | +37.7 |
| [voideditor/void](https://github.com/voideditor/void) | 28,716 | 2,658 | — |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,610 | 3,052 | +12.0 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 28,256 | 3,277 | +286.1 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 26,996 | 3,502 | +190.8 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 26,580 | 3,671 | +149.5 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,546 | 4,071 | +7.2 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 26,475 | 3,024 | +120.6 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,617 | 1,124 | +7.4 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,358 | 3,151 | +46.7 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 24,610 | 2,136 | +140.9 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 23,420 | 2,693 | +110.0 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,408 | 2,101 | +47.1 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 23,036 | 2,202 | +57.2 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,946 | 812 | +37.8 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,434 | 1,702 | +2.8 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 22,022 | 2,315 | +41.9 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,910 | 3,522 | +47.5 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,838 | 2,891 | +8.0 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,808 | 3,134 | +5.7 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,554 | 2,511 | +114.2 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,368 | 1,965 | +23.8 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 19,974 | 8,694 | +65.0 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,809 | 1,200 | +10.9 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,772 | 1,779 | +48.9 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,723 | 2,514 | +26.7 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,413 | 2,822 | +33.4 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 19,105 | 1,407 | +308.7 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,907 | 1,711 | +11.1 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,896 | 1,865 | +26.3 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 18,775 | 1,523 | +46.2 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,244 | 2,285 | +2.9 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 17,471 | 603 | +212.4 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,439 | 3,881 | +15.3 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,222 | 1,747 | +17.4 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,053 | 1,769 | +6.9 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 17,034 | 2,502 | +50.9 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,960 | 2,491 | +19.5 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 16,015 | 1,432 | +29.7 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,960 | 1,795 | +6.1 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,334 | 8,611 | +15.3 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,285 | 1,554 | +7.7 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,924 | 3,270 | +5.6 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,607 | 1,098 | +5.2 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 14,462 | 1,671 | +42.9 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,838 | 963 | +31.7 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,760 | 1,473 | +21.0 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,569 | 2,767 | +34.8 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,541 | 610 | +17.4 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,392 | 2,718 | +26.0 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 12,732 | 1,869 | +18.5 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,298 | 1,110 | +17.5 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,855 | 3,229 | +73.0 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 11,828 | 1,636 | +96.5 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,731 | 1,597 | +115.8 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,710 | 910 | +26.3 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,705 | 1,458 | +23.1 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,441 | 722 | +37.9 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,312 | 908 | +31.9 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,142 | 5,636 | +4.1 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,114 | 988 | +66.5 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,043 | 1,804 | +1.3 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,856 | 982 | +36.8 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,340 | 7,664 | +3.6 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,312 | 826 | +10.5 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,236 | 1,685 | +50.5 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10,107 | 728 | +62.7 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,083 | 1,107 | +6.9 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,779 | 326 | +26.5 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,719 | 730 | +3.4 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,686 | 710 | +40.5 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 9,378 | 1,158 | +97.5 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,921 | 908 | +2.5 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,722 | 849 | — |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,640 | 1,069 | +31.2 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,440 | 648 | +0.9 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,262 | 726 | +22.7 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,124 | 197 | +0.8 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,601 | 1,139 | +0.5 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,141 | 567 | +12.4 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,106 | 589 | +8.2 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,091 | 611 | +36.1 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,827 | 377 | +8.8 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,785 | 453 | +3.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,588 | 250 | +4.1 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,248 | 603 | +2.1 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,072 | 420 | +0.0 |
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
