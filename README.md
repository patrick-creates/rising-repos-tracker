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

> Auto-updated daily — last refreshed 2026-11-15

| Metric | Value |
|---|---|
| Repos tracked | **217** |
| Total stars | **11,674,977** |
| Total forks | **1,696,989** |
| Fastest growing | **rea** (+9609.3/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 460,945 | +9609.3 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 75,284 | +1805.0 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 111,022 | +1316.0 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 191,163 | +980.4 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 125,408 | +854.7 |

### 🆕 Recently added

- [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) — added 2026-11-09 — Open-source gym & body-weight tracker, now in the App Store (iPhone + Apple Watch) and as an Android APK. Plan routines, log workouts, see which muscles are trained, import from Strong/Hevy/FitNotes. Self-host it or use it on the phone alone.
- [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) — added 2026-11-09 — Computer use CLI for AI agents
- [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) — added 2026-11-09 — Eleven free Claude skills that clone any app: reverse-engineer it, rebuild it, test it for bugs, then fix what its users hate. Free, MIT.
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
| [morluto/rea](https://github.com/morluto/rea) | 460,945 | 112,921 | +9609.3 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 394,507 | 82,896 | +123.8 |
| [obra/superpowers](https://github.com/obra/superpowers) | 317,847 | 28,307 | +563.5 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 303,494 | 44,740 | +658.3 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 263,530 | 59,410 | +620.9 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 195,464 | 14,772 | +389.5 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 191,163 | 10,691 | +980.4 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 188,032 | 45,863 | +20.2 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 177,486 | 22,625 | +82.3 |
| [langgenius/dify](https://github.com/langgenius/dify) | 161,187 | 25,505 | +107.3 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 158,699 | 23,079 | +117.2 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 154,556 | 10,129 | +444.8 |
| [github/spec-kit](https://github.com/github/spec-kit) | 149,857 | 13,463 | +279.5 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 149,735 | 15,837 | +386.2 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,546 | 25,136 | +69.4 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 148,085 | 14,207 | +462.9 |
| [stablyai/orca](https://github.com/stablyai/orca) | 125,408 | 7,949 | +854.7 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 123,567 | 66,445 | +68.9 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 120,323 | 7,015 | +324.9 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 117,235 | 10,178 | +225.0 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 115,871 | 7,777 | +511.7 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 114,032 | 18,913 | +356.5 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 111,945 | 10,033 | +552.9 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 111,022 | 12,305 | +1316.0 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 110,474 | 6,603 | +802.3 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 107,712 | 12,246 | +351.0 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 104,337 | 13,574 | +220.9 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 96,955 | 24,847 | +91.8 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 96,552 | 6,602 | +456.6 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 93,501 | 12,520 | +108.1 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 90,673 | 14,073 | +200.6 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,966 | 58,517 | +5.1 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 87,621 | 13,432 | +571.7 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 87,030 | 10,869 | +200.9 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 86,613 | 5,552 | +204.6 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 85,548 | 16,324 | +46.0 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 84,529 | 7,825 | +368.6 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 82,674 | 15,139 | +206.8 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 81,773 | 9,637 | +192.2 |
| [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) | 80,605 | 10,876 | +379.5 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 80,432 | 12,859 | +106.9 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 80,078 | 8,783 | +29.7 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 79,699 | 6,241 | +336.8 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 79,544 | 9,717 | +105.8 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 79,535 | 7,417 | +83.1 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 78,999 | 14,083 | +315.2 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 77,139 | 13,069 | +19.5 |
| [usestrix/strix](https://github.com/usestrix/strix) | 75,658 | 8,553 | +299.1 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 75,284 | 2,105 | +1805.0 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 74,892 | 5,134 | +144.2 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 72,376 | 57,533 | +192.7 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 71,821 | 23,151 | +401.9 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 71,448 | 11,503 | +171.6 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,916 | 5,847 | +69.5 |
| [blader/humanizer](https://github.com/blader/humanizer) | 69,308 | 5,452 | +349.9 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 69,065 | 6,874 | +86.0 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 67,712 | 5,962 | +219.0 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 67,061 | 13,460 | +4.5 |
| [tw93/Pake](https://github.com/tw93/Pake) | 63,615 | 13,012 | +82.0 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 63,287 | 13,293 | +87.8 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 60,675 | 7,630 | +189.5 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,565 | 7,671 | +45.1 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 60,452 | 8,812 | +173.7 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 58,615 | 8,991 | +137.2 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 58,132 | 6,773 | +425.2 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 58,047 | 4,963 | +77.1 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 57,273 | 5,030 | +200.0 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 56,979 | 4,345 | +155.7 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 56,607 | 4,791 | +92.4 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,572 | 25,094 | +14.8 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 55,212 | 6,305 | +29.8 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 53,051 | 11,014 | +92.5 |
| [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills) | 52,724 | 3,753 | +112.8 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 51,943 | 12,673 | +95.3 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 51,714 | 4,026 | +316.1 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 51,075 | 4,136 | +293.0 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 50,122 | 5,170 | +28.5 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 50,097 | 8,749 | +41.0 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 49,736 | 7,194 | +63.6 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 48,661 | 4,032 | +201.7 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,943 | 10,433 | +18.7 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 47,355 | 4,918 | +109.8 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 47,142 | 9,710 | +55.6 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 46,964 | 3,583 | +80.1 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 46,093 | 2,776 | +45.6 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 45,738 | 1,811 | +387.3 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,985 | 7,762 | +65.5 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,705 | 4,221 | +46.6 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,536 | 4,494 | +37.9 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,336 | 4,334 | +12.9 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 42,255 | 3,493 | +105.8 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,175 | 3,570 | +37.4 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 41,168 | 5,362 | +42.3 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,837 | 3,648 | +34.6 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 40,645 | 4,667 | +104.2 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,862 | 6,230 | +3.7 |
| [google/langextract](https://github.com/google/langextract) | 39,313 | 2,752 | +15.9 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 39,163 | 5,825 | +144.9 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 39,075 | 4,468 | +171.8 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,996 | 2,523 | +71.8 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,433 | 3,446 | +25.4 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 38,278 | 6,233 | +169.4 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 37,943 | 4,035 | +158.0 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 37,773 | 3,286 | +130.7 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 37,448 | 5,192 | +138.3 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,433 | 6,888 | +18.5 |
| [yetone/magpie](https://github.com/yetone/magpie) | 36,768 | 3,297 | +729.8 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 36,177 | 4,428 | +123.7 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 36,125 | 2,561 | +103.7 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,376 | 9,120 | +37.4 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,289 | 3,592 | +41.6 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 34,124 | 2,345 | +108.9 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,376 | 5,019 | +10.2 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 33,303 | 2,276 | +188.7 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,777 | 2,981 | +93.2 |
| [decolua/9router](https://github.com/decolua/9router) | 32,458 | 6,356 | +97.3 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,321 | 1,996 | +33.6 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 31,293 | 4,426 | +44.6 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 31,089 | 3,040 | +45.6 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,917 | 3,027 | +177.6 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,374 | 2,701 | +53.4 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 30,367 | 2,760 | +166.9 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 29,931 | 3,503 | +267.3 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,691 | 2,643 | +72.8 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 29,527 | 3,730 | +203.9 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,206 | 1,337 | +28.2 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,790 | 2,670 | +35.5 |
| [voideditor/void](https://github.com/voideditor/void) | 28,711 | 2,661 | — |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,695 | 3,063 | +11.9 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 27,765 | 3,897 | +146.9 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 27,470 | 3,113 | +119.5 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,599 | 4,062 | +7.1 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 26,141 | 2,320 | +145.2 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,634 | 1,125 | +7.1 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,519 | 3,173 | +44.0 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 24,985 | 2,855 | +114.4 |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | 24,004 | 1,789 | +651.8 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,650 | 2,134 | +45.9 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 23,171 | 2,232 | +54.6 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 23,003 | 811 | +35.8 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,450 | 1,703 | +2.8 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 22,264 | 2,339 | +40.7 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 22,097 | 3,545 | +45.8 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,903 | 2,892 | +7.9 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,817 | 3,139 | +5.4 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,786 | 2,542 | +107.8 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | 21,436 | 2,896 | +153.3 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,428 | 1,973 | +22.8 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 20,034 | 8,703 | +52.2 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 20,008 | 1,808 | +46.8 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,894 | 2,524 | +26.2 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,844 | 1,203 | +10.4 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,525 | 2,835 | +32.1 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 19,230 | 1,549 | +46.4 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 19,103 | 652 | +207.9 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 19,103 | 1,424 | +169.7 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 19,088 | 1,889 | +26.0 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,957 | 1,722 | +10.8 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,250 | 2,280 | +2.8 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,585 | 3,988 | +15.4 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,326 | 1,768 | +16.9 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 17,142 | 2,521 | +48.2 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 17,133 | 2,524 | +19.5 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,070 | 1,768 | +6.6 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 16,310 | 1,461 | +29.9 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 16,005 | 1,801 | +6.1 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,446 | 8,617 | +15.1 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,312 | 1,559 | +7.4 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 15,201 | 1,735 | +45.6 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,926 | 3,267 | +5.3 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,622 | 1,100 | +4.9 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,917 | 976 | +30.2 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,787 | 1,478 | +19.9 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,775 | 2,801 | +34.0 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,604 | 2,759 | +25.9 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,601 | 609 | +16.7 |
| [openai/codex-security](https://github.com/openai/codex-security) | 13,584 | 1,060 | +51.0 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 12,833 | 1,883 | +13.5 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,404 | 1,122 | +17.1 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 12,381 | 1,724 | +90.7 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 12,051 | 1,693 | +94.5 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,938 | 3,253 | +61.0 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,808 | 911 | +25.3 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,778 | 1,473 | +22.1 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,440 | 726 | +34.1 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,284 | 1,010 | +59.6 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,160 | 5,630 | +3.9 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,053 | 1,806 | +1.3 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,942 | 987 | +34.9 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,552 | 1,747 | +43.6 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10,417 | 752 | +57.4 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,344 | 7,653 | +3.4 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,344 | 825 | +10.1 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 10,150 | 1,278 | +89.4 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,121 | 1,109 | +6.4 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,835 | 333 | +25.0 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,774 | 718 | +37.7 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,735 | 728 | +3.3 |
| [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) | 9,400 | 1,691 | +136.2 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,930 | 913 | +2.4 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,779 | 1,085 | +29.3 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,745 | 852 | — |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,454 | 647 | +1.0 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,354 | 731 | +21.1 |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | 8,263 | 525 | +38.0 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,124 | 197 | +0.7 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,600 | 1,137 | +0.5 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,236 | 636 | +27.1 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,166 | 570 | +10.8 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,150 | 594 | +8.0 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,838 | 379 | +8.2 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,821 | 456 | +3.3 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,608 | 249 | +3.9 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,255 | 607 | +2.0 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,070 | 419 | — |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 86 | 4 | — |
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
