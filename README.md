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

> Auto-updated daily — last refreshed 2026-11-09

| Metric | Value |
|---|---|
| Repos tracked | **217** |
| Total stars | **11,521,745** |
| Total forks | **1,677,132** |
| Fastest growing | **rea** (+11123.1/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 445,676 | +11123.1 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 67,077 | +1930.0 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 105,658 | +1356.2 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 187,315 | +995.0 |
| 5 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 106,587 | +934.7 |

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
| [morluto/rea](https://github.com/morluto/rea) | 445,676 | 110,008 | +11123.1 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 394,229 | 82,851 | +126.4 |
| [obra/superpowers](https://github.com/obra/superpowers) | 314,876 | 28,010 | +566.4 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 299,971 | 44,307 | +660.7 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 261,955 | 58,314 | +632.8 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 194,545 | 14,660 | +397.4 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,965 | 45,891 | +20.5 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 187,315 | 10,389 | +995.0 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 176,676 | 22,534 | +80.6 |
| [langgenius/dify](https://github.com/langgenius/dify) | 160,751 | 25,423 | +108.5 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 158,192 | 22,994 | +118.3 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 153,003 | 10,053 | +451.2 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,260 | 25,096 | +70.1 |
| [github/spec-kit](https://github.com/github/spec-kit) | 148,905 | 13,371 | +283.6 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 147,193 | 15,576 | +385.0 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 144,830 | 13,853 | +458.4 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 123,218 | 66,190 | +69.3 |
| [stablyai/orca](https://github.com/stablyai/orca) | 119,991 | 7,608 | +852.4 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 118,523 | 6,899 | +325.8 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 115,212 | 10,008 | +221.3 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 112,506 | 18,661 | +385.7 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 112,329 | 7,556 | +508.8 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 110,498 | 9,893 | +565.1 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 106,757 | 12,154 | +357.6 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 106,587 | 6,334 | +934.7 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 105,658 | 11,742 | +1356.2 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 103,193 | 13,389 | +222.0 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 96,598 | 24,592 | +92.9 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 94,950 | 6,471 | +489.1 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 93,030 | 12,430 | +109.1 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 90,408 | 14,015 | +205.9 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,940 | 58,578 | +5.2 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 86,505 | 10,788 | +204.8 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 85,978 | 5,510 | +208.0 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 85,857 | 13,013 | +585.0 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 84,546 | 16,163 | +41.9 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 81,428 | 7,518 | +362.8 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 81,361 | 14,974 | +206.4 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 81,324 | 9,567 | +212.4 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 80,126 | 12,820 | +108.9 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,945 | 8,772 | +30.0 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 79,233 | 7,381 | +84.2 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 79,210 | 6,195 | +347.3 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 79,108 | 9,622 | +107.0 |
| [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) | 78,930 | 10,540 | +384.1 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 78,002 | 13,856 | +320.7 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 77,018 | 13,053 | +19.5 |
| [usestrix/strix](https://github.com/usestrix/strix) | 74,592 | 8,438 | +303.6 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 74,392 | 5,102 | +146.3 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 71,071 | 11,466 | +175.3 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,797 | 5,843 | +71.3 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 70,767 | 22,852 | +413.3 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,873 | 6,858 | +87.9 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 68,521 | 56,326 | +176.7 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 67,089 | 5,883 | +223.5 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 67,077 | 1,805 | +1930.0 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 67,015 | 13,457 | +4.4 |
| [blader/humanizer](https://github.com/blader/humanizer) | 66,937 | 5,263 | +343.4 |
| [tw93/Pake](https://github.com/tw93/Pake) | 63,030 | 12,951 | +81.4 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 62,965 | 13,129 | +89.0 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,484 | 7,662 | +46.2 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 60,233 | 7,571 | +193.9 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 59,338 | 8,666 | +173.3 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 58,039 | 8,903 | +138.7 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 57,589 | 4,930 | +77.1 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 57,557 | 6,662 | +442.9 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 56,582 | 4,971 | +208.0 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 56,102 | 4,274 | +156.3 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,565 | 25,099 | +15.2 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 55,039 | 6,289 | +29.8 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 55,011 | 4,999 | +86.4 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,847 | 10,560 | +88.1 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 51,618 | 12,572 | +96.8 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 51,234 | 3,619 | +107.8 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 50,032 | 5,145 | +29.0 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,964 | 8,724 | +41.6 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 49,705 | 3,656 | +315.2 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 49,655 | 4,007 | +295.7 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 49,397 | 7,167 | +63.8 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 48,399 | 4,007 | +208.8 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,851 | 10,422 | +18.8 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,893 | 9,660 | +56.1 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 46,553 | 4,853 | +109.0 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 46,513 | 3,426 | +80.3 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 45,673 | 2,768 | +44.7 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,690 | 7,699 | +66.2 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 44,246 | 1,786 | +396.4 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,607 | 4,213 | +49.5 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,350 | 4,474 | +38.2 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,284 | 4,318 | +13.1 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 41,854 | 3,423 | +107.3 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,165 | 3,568 | +38.7 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 40,959 | 5,322 | +42.6 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,710 | 3,638 | +35.0 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 40,089 | 4,586 | +104.7 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,850 | 6,230 | +3.8 |
| [google/langextract](https://github.com/google/langextract) | 39,292 | 2,750 | +16.3 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 38,899 | 5,788 | +149.0 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,831 | 2,508 | +73.5 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 38,369 | 4,358 | +174.1 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,314 | 3,430 | +25.6 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 37,947 | 6,157 | +174.5 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 37,533 | 3,268 | +134.4 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 37,451 | 3,963 | +163.9 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,369 | 6,881 | +18.8 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 36,974 | 5,086 | +140.7 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 36,138 | 2,507 | +107.9 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,826 | 4,366 | +126.5 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,306 | 9,129 | +38.3 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,151 | 3,575 | +42.3 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 33,738 | 2,309 | +110.7 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,293 | 5,005 | +10.0 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 33,163 | 2,269 | +196.6 |
| [yetone/magpie](https://github.com/yetone/magpie) | 32,948 | 2,908 | +769.7 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,659 | 2,972 | +96.2 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,203 | 1,988 | +34.1 |
| [decolua/9router](https://github.com/decolua/9router) | 32,164 | 6,285 | +99.3 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 31,137 | 4,396 | +45.3 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,976 | 3,038 | +46.6 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,684 | 2,996 | +184.6 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,230 | 2,678 | +54.6 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 29,705 | 2,704 | +170.2 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,654 | 2,641 | +75.5 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,139 | 1,336 | +28.9 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,739 | 2,641 | +36.8 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 28,727 | 3,330 | +276.9 |
| [voideditor/void](https://github.com/voideditor/void) | 28,708 | 2,660 | — |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,628 | 3,059 | +11.9 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 27,600 | 3,577 | +191.3 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 27,001 | 3,734 | +149.0 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 26,809 | 3,052 | +120.2 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,559 | 4,072 | +7.1 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,622 | 1,124 | +7.3 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,410 | 3,155 | +45.7 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 25,011 | 2,189 | +140.6 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 23,960 | 2,755 | +111.7 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,478 | 2,111 | +46.6 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 23,079 | 2,212 | +56.3 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,966 | 810 | +37.1 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,433 | 1,698 | +2.8 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 22,102 | 2,321 | +41.5 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,979 | 3,530 | +47.0 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,858 | 2,892 | +7.9 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,808 | 3,134 | +5.6 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,638 | 2,516 | +112.0 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | 20,516 | 2,753 | +181.5 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,389 | 1,966 | +23.5 |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | 20,093 | 1,490 | +76.6 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 20,054 | 8,729 | +61.7 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,844 | 1,788 | +48.0 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,820 | 1,199 | +10.7 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,778 | 2,516 | +26.5 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,457 | 2,825 | +33.0 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,968 | 1,875 | +26.2 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,929 | 1,716 | +11.0 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 18,922 | 1,534 | +46.2 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 18,651 | 1,360 | +210.1 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,242 | 2,283 | +2.8 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 17,643 | 613 | +204.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,492 | 3,920 | +15.3 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,261 | 1,750 | +17.3 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 17,068 | 2,507 | +49.9 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,047 | 1,765 | +6.7 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 17,042 | 2,502 | +19.7 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 16,127 | 1,444 | +29.8 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,972 | 1,799 | +6.1 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,366 | 8,616 | +15.2 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,294 | 1,554 | +7.6 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,923 | 3,267 | +5.5 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 14,784 | 1,707 | +44.5 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,608 | 1,098 | +5.1 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,859 | 969 | +31.2 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,772 | 1,477 | +20.7 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,651 | 2,783 | +34.7 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,557 | 610 | +17.1 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,466 | 2,731 | +26.0 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 12,789 | 1,875 | +18.7 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,333 | 1,116 | +17.3 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 12,012 | 1,673 | +94.3 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,954 | 3,272 | +70.1 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,807 | 1,632 | +106.1 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,737 | 907 | +25.9 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,731 | 1,458 | +22.8 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,435 | 721 | +36.5 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,339 | 911 | +31.2 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,160 | 994 | +63.8 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,147 | 5,631 | +4.0 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,054 | 1,805 | +1.4 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,875 | 981 | +36.1 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,353 | 1,705 | +48.1 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,338 | 7,657 | +3.5 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,324 | 825 | +10.4 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10,226 | 739 | +61.1 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,099 | 1,108 | +6.8 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,800 | 328 | +26.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,721 | 730 | +3.4 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,716 | 711 | +39.5 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 9,613 | 1,199 | +89.3 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,921 | 911 | +2.5 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,735 | 850 | — |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,705 | 1,079 | +30.8 |
| [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) | 8,583 | 1,543 | +231.7 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,449 | 648 | +1.0 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,293 | 731 | +22.1 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,124 | 197 | +0.8 |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | 8,035 | 502 | +64.8 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,604 | 1,137 | +0.5 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,169 | 623 | +33.9 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,149 | 569 | +11.8 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,121 | 591 | +8.1 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,832 | 378 | +8.6 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,791 | 454 | +3.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,593 | 249 | +4.0 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,252 | 604 | +2.1 |
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
