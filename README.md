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

> Auto-updated daily — last refreshed 2026-11-11

| Metric | Value |
|---|---|
| Repos tracked | **217** |
| Total stars | **11,575,621** |
| Total forks | **1,683,837** |
| Fastest growing | **rea** (+10576.4/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 451,522 | +10576.4 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 69,583 | +1871.1 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 107,829 | +1347.8 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 188,786 | +991.3 |
| 5 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 107,954 | +878.9 |

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
| [morluto/rea](https://github.com/morluto/rea) | 451,522 | 111,094 | +10576.4 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 394,330 | 82,859 | +125.6 |
| [obra/superpowers](https://github.com/obra/superpowers) | 316,023 | 28,109 | +566.5 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 301,049 | 44,419 | +659.3 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 262,609 | 58,792 | +629.5 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 194,899 | 14,695 | +395.0 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 188,786 | 10,493 | +991.3 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,992 | 45,878 | +20.4 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 176,892 | 22,563 | +80.9 |
| [langgenius/dify](https://github.com/langgenius/dify) | 160,965 | 25,456 | +108.5 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 158,371 | 23,030 | +118.0 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 153,581 | 10,087 | +449.4 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,350 | 25,105 | +69.9 |
| [github/spec-kit](https://github.com/github/spec-kit) | 149,287 | 13,406 | +282.6 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 148,034 | 15,657 | +385.4 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 145,915 | 13,969 | +460.0 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 123,349 | 66,281 | +69.2 |
| [stablyai/orca](https://github.com/stablyai/orca) | 121,976 | 7,736 | +854.6 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 119,013 | 6,922 | +324.9 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 116,043 | 10,065 | +223.4 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 113,255 | 7,623 | +508.2 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 113,074 | 18,756 | +376.9 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 111,029 | 9,940 | +561.2 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 107,954 | 6,419 | +878.9 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 107,829 | 11,943 | +1347.8 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 107,140 | 12,183 | +355.7 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 103,990 | 13,533 | +224.1 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 96,735 | 24,684 | +92.6 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 95,532 | 6,526 | +478.4 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 93,207 | 12,451 | +108.9 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 90,477 | 14,025 | +204.0 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,946 | 58,552 | +5.1 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 86,718 | 10,822 | +203.7 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 86,429 | 13,159 | +580.3 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 86,201 | 5,520 | +206.9 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 84,976 | 16,230 | +43.8 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 82,562 | 7,630 | +365.4 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 81,863 | 15,030 | +206.9 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 81,472 | 9,595 | +204.9 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 80,264 | 12,838 | +108.4 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,986 | 8,778 | +29.9 |
| [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) | 79,577 | 10,650 | +383.2 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 79,346 | 6,205 | +343.5 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 79,320 | 7,385 | +83.7 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 79,244 | 9,652 | +106.5 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 78,433 | 13,966 | +319.4 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 77,044 | 13,055 | +19.4 |
| [usestrix/strix](https://github.com/usestrix/strix) | 74,948 | 8,476 | +302.1 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 74,604 | 5,108 | +145.9 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 71,182 | 23,010 | +409.9 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 71,177 | 11,468 | +174.0 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,838 | 5,843 | +70.7 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 69,775 | 56,755 | +182.0 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 69,583 | 1,879 | +1871.1 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,963 | 6,866 | +87.4 |
| [blader/humanizer](https://github.com/blader/humanizer) | 67,775 | 5,324 | +346.9 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 67,287 | 5,894 | +221.9 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 67,031 | 13,459 | +4.5 |
| [tw93/Pake](https://github.com/tw93/Pake) | 63,223 | 12,964 | +81.6 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 63,099 | 13,191 | +88.8 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,515 | 7,661 | +45.8 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 60,430 | 7,586 | +192.7 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 59,678 | 8,712 | +173.3 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 58,266 | 8,946 | +138.4 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 57,753 | 4,937 | +77.2 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 57,747 | 6,695 | +436.8 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 56,811 | 4,986 | +205.2 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 56,459 | 4,297 | +156.7 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,566 | 25,095 | +15.1 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 55,093 | 4,583 | +85.9 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 55,092 | 6,295 | +29.8 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 52,331 | 10,726 | +90.2 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 51,752 | 12,620 | +96.4 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 51,632 | 3,656 | +108.9 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 50,153 | 4,054 | +295.0 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 50,062 | 5,155 | +28.8 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 50,010 | 8,729 | +41.4 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 49,825 | 3,670 | +311.2 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 49,527 | 7,177 | +63.8 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 48,486 | 4,013 | +206.3 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,877 | 10,424 | +18.8 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,971 | 9,672 | +55.9 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 46,846 | 4,867 | +109.4 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 46,681 | 3,505 | +80.3 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 45,840 | 2,768 | +45.2 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,789 | 7,714 | +66.0 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 44,766 | 1,788 | +393.5 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,647 | 4,215 | +48.6 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,412 | 4,484 | +38.1 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,300 | 4,327 | +13.0 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 42,002 | 3,446 | +106.9 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,178 | 3,571 | +38.3 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 41,037 | 5,339 | +42.5 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,760 | 3,638 | +34.9 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 40,270 | 4,610 | +104.5 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,855 | 6,228 | +3.8 |
| [google/langextract](https://github.com/google/langextract) | 39,303 | 2,751 | +16.2 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 38,999 | 5,797 | +147.7 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,910 | 2,516 | +73.1 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 38,661 | 4,402 | +173.7 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,365 | 3,435 | +25.6 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 38,033 | 6,179 | +172.6 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 37,611 | 3,275 | +133.1 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 37,585 | 3,980 | +161.5 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,402 | 6,892 | +18.8 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 37,184 | 5,144 | +140.2 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 36,157 | 2,502 | +106.6 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,907 | 4,381 | +125.2 |
| [yetone/magpie](https://github.com/yetone/magpie) | 34,474 | 3,070 | +768.9 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,330 | 9,127 | +38.0 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,213 | 3,580 | +42.1 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 33,860 | 2,323 | +110.0 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,320 | 5,007 | +10.1 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 33,208 | 2,270 | +193.8 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,712 | 2,975 | +95.3 |
| [decolua/9router](https://github.com/decolua/9router) | 32,263 | 6,310 | +98.6 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,253 | 1,992 | +34.0 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 31,201 | 4,408 | +45.2 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 31,021 | 3,038 | +46.3 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,781 | 3,002 | +182.3 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,289 | 2,689 | +54.3 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 30,025 | 2,741 | +170.0 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,664 | 2,639 | +74.5 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 29,288 | 3,413 | +277.0 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,163 | 1,337 | +28.7 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,758 | 2,650 | +36.4 |
| [voideditor/void](https://github.com/voideditor/void) | 28,713 | 2,657 | — |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,651 | 3,058 | +11.9 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 28,027 | 3,634 | +192.1 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 27,285 | 3,801 | +148.8 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 27,072 | 3,072 | +120.5 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,575 | 4,074 | +7.1 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,627 | 1,124 | +7.3 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,442 | 3,164 | +45.1 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 25,292 | 2,215 | +140.6 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 24,256 | 2,780 | +112.3 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,530 | 2,122 | +46.3 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 23,119 | 2,218 | +55.7 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,981 | 811 | +36.7 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,437 | 1,699 | +2.8 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 22,177 | 2,326 | +41.4 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 22,021 | 3,534 | +46.6 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,876 | 2,896 | +8.0 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,818 | 3,135 | +5.6 |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | 21,774 | 1,617 | +840.5 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,694 | 2,523 | +110.7 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | 20,898 | 2,808 | +191.0 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,401 | 1,966 | +23.2 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 20,066 | 8,728 | +58.7 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,901 | 1,798 | +47.6 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,832 | 1,200 | +10.6 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,826 | 2,522 | +26.5 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,481 | 2,829 | +32.7 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 19,020 | 1,542 | +46.3 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 19,017 | 1,883 | +26.2 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,943 | 1,720 | +11.0 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 18,826 | 1,386 | +194.8 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,247 | 2,280 | +2.8 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 18,149 | 627 | +205.8 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,552 | 3,965 | +15.6 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,287 | 1,755 | +17.2 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 17,090 | 2,512 | +49.3 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 17,080 | 2,513 | +19.7 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,059 | 1,767 | +6.7 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 16,211 | 1,453 | +30.0 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,986 | 1,800 | +6.1 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,401 | 8,622 | +15.3 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,298 | 1,554 | +7.5 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 14,936 | 1,719 | +45.0 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,922 | 3,264 | +5.4 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,615 | 1,098 | +5.0 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,882 | 973 | +30.9 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,782 | 1,480 | +20.4 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,696 | 2,791 | +34.5 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,578 | 610 | +17.0 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,520 | 2,744 | +26.0 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 12,812 | 1,878 | +17.1 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,358 | 1,118 | +17.3 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 12,149 | 1,690 | +93.3 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,966 | 3,274 | +67.2 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,912 | 1,654 | +102.5 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,764 | 907 | +25.7 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,744 | 1,458 | +22.5 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,443 | 725 | +35.7 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,414 | 915 | +31.3 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,200 | 999 | +62.3 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,152 | 5,631 | +4.0 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,054 | 1,804 | +1.3 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,908 | 983 | +35.7 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,460 | 1,724 | +48.8 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,342 | 7,654 | +3.5 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,332 | 825 | +10.3 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10,315 | 743 | +60.3 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,111 | 1,108 | +6.8 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,814 | 330 | +25.7 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 9,808 | 1,219 | +91.1 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,737 | 718 | +38.9 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,724 | 729 | +3.4 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,927 | 912 | +2.5 |
| [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) | 8,870 | 1,599 | +143.5 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,740 | 850 | — |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,731 | 1,083 | +30.3 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,451 | 648 | +1.0 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,327 | 732 | +22.0 |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | 8,152 | 517 | +58.5 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,124 | 197 | +0.8 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,604 | 1,137 | +0.5 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,207 | 629 | +32.1 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,153 | 569 | +11.4 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,131 | 591 | +8.1 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,831 | 378 | +8.5 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,795 | 454 | +3.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,596 | 249 | +4.0 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,253 | 605 | +2.1 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,071 | 420 | +0.0 |
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
