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

> Auto-updated daily — last refreshed 2026-11-13

| Metric | Value |
|---|---|
| Repos tracked | **217** |
| Total stars | **11,628,345** |
| Total forks | **1,690,929** |
| Fastest growing | **rea** (+10073.7/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 456,588 | +10073.7 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 72,298 | +1830.0 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 109,605 | +1334.1 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 190,089 | +986.6 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 124,034 | +857.3 |

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
| [morluto/rea](https://github.com/morluto/rea) | 456,588 | 112,096 | +10073.7 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 394,428 | 82,882 | +124.8 |
| [obra/superpowers](https://github.com/obra/superpowers) | 317,037 | 28,223 | +565.7 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 302,246 | 44,584 | +658.7 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 263,110 | 59,240 | +625.4 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 195,184 | 14,731 | +392.3 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 190,089 | 10,615 | +986.6 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 188,011 | 45,870 | +20.3 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 177,054 | 22,575 | +80.9 |
| [langgenius/dify](https://github.com/langgenius/dify) | 161,087 | 25,474 | +107.9 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 158,544 | 23,050 | +117.7 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 154,162 | 10,115 | +447.6 |
| [github/spec-kit](https://github.com/github/spec-kit) | 149,627 | 13,444 | +281.3 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,446 | 25,120 | +69.6 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 148,925 | 15,754 | +386.0 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 147,026 | 14,096 | +461.7 |
| [stablyai/orca](https://github.com/stablyai/orca) | 124,034 | 7,847 | +857.3 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 123,442 | 66,362 | +69.0 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 119,592 | 6,960 | +324.5 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 116,719 | 10,126 | +224.7 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 114,702 | 7,707 | +510.8 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 113,542 | 18,841 | +365.4 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 111,473 | 9,993 | +556.9 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 109,605 | 12,152 | +1334.1 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 109,295 | 6,513 | +841.0 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 107,471 | 12,219 | +353.6 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 104,207 | 13,560 | +222.8 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 96,870 | 24,763 | +92.3 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 96,112 | 6,573 | +468.7 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 93,395 | 12,493 | +108.7 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 90,574 | 14,053 | +202.3 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,951 | 58,529 | +5.1 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 87,021 | 13,311 | +575.9 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 86,922 | 10,848 | +202.6 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 86,434 | 5,541 | +205.9 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 85,265 | 16,275 | +44.9 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 83,692 | 7,726 | +367.9 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 82,312 | 15,109 | +207.1 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 81,609 | 9,613 | +197.9 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 80,373 | 12,850 | +107.8 |
| [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) | 80,168 | 10,789 | +381.9 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 80,034 | 8,782 | +29.8 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 79,535 | 6,226 | +340.2 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 79,428 | 7,406 | +83.4 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 79,392 | 9,683 | +106.2 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 78,641 | 14,000 | +316.8 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 77,081 | 13,063 | +19.4 |
| [usestrix/strix](https://github.com/usestrix/strix) | 75,261 | 8,508 | +300.3 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 74,772 | 5,124 | +145.2 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 72,298 | 1,980 | +1830.0 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 71,537 | 23,112 | +406.1 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 71,322 | 11,489 | +172.8 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 71,269 | 57,216 | +188.5 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,888 | 5,844 | +70.2 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 69,022 | 6,873 | +86.7 |
| [blader/humanizer](https://github.com/blader/humanizer) | 68,644 | 5,383 | +350.7 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 67,499 | 5,933 | +220.4 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 67,050 | 13,459 | +4.5 |
| [tw93/Pake](https://github.com/tw93/Pake) | 63,518 | 12,995 | +82.3 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 63,220 | 13,257 | +88.4 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 60,553 | 7,606 | +191.1 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,542 | 7,668 | +45.5 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 60,071 | 8,777 | +173.5 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 58,474 | 8,967 | +138.0 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 57,912 | 6,727 | +430.7 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 57,911 | 4,951 | +77.2 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 57,034 | 5,005 | +202.4 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 56,766 | 4,324 | +156.6 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,570 | 25,093 | +14.9 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 55,241 | 4,607 | +85.8 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 55,159 | 6,305 | +29.8 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 52,705 | 10,871 | +91.5 |
| [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills) | 52,198 | 3,707 | +111.0 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 51,878 | 12,653 | +96.1 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 50,752 | 4,096 | +295.0 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 50,200 | 3,727 | +309.3 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 50,101 | 5,163 | +28.7 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 50,063 | 8,734 | +41.2 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 49,636 | 7,187 | +63.7 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 48,598 | 4,027 | +204.1 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,912 | 10,426 | +18.8 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 47,108 | 4,889 | +109.7 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 47,086 | 9,688 | +55.9 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 46,837 | 3,549 | +80.3 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 45,998 | 2,771 | +45.6 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 45,171 | 1,792 | +389.5 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,897 | 7,743 | +65.8 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,678 | 4,217 | +47.6 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,467 | 4,488 | +38.0 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,321 | 4,332 | +13.0 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 42,171 | 3,477 | +106.6 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,175 | 3,571 | +37.8 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 41,116 | 5,350 | +42.5 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,805 | 3,645 | +34.8 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 40,479 | 4,637 | +104.5 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,864 | 6,231 | +3.8 |
| [google/langextract](https://github.com/google/langextract) | 39,310 | 2,752 | +16.0 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 39,094 | 5,813 | +146.4 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,968 | 2,522 | +72.5 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 38,921 | 4,444 | +173.1 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,406 | 3,441 | +25.5 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 38,143 | 6,205 | +170.8 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 37,749 | 4,009 | +159.5 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 37,694 | 3,282 | +131.9 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,420 | 6,892 | +18.7 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 37,373 | 5,183 | +139.6 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 36,145 | 2,545 | +105.2 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 36,054 | 4,411 | +124.5 |
| [yetone/magpie](https://github.com/yetone/magpie) | 35,939 | 3,208 | +764.8 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,350 | 9,121 | +37.7 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,261 | 3,591 | +41.9 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 34,018 | 2,336 | +109.6 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,351 | 5,013 | +10.2 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 33,256 | 2,272 | +191.2 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,745 | 2,975 | +94.2 |
| [decolua/9router](https://github.com/decolua/9router) | 32,359 | 6,345 | +97.9 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,290 | 1,995 | +33.8 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 31,262 | 4,418 | +45.0 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 31,060 | 3,039 | +45.9 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,866 | 3,017 | +180.1 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,336 | 2,698 | +53.9 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 30,287 | 2,759 | +169.3 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,676 | 2,639 | +73.6 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 29,629 | 3,455 | +272.4 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,188 | 1,338 | +28.5 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 28,886 | 3,686 | +200.0 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,777 | 2,662 | +35.9 |
| [voideditor/void](https://github.com/voideditor/void) | 28,712 | 2,658 | — |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,674 | 3,060 | +11.9 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 27,563 | 3,859 | +148.4 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 27,319 | 3,101 | +120.6 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,590 | 4,065 | +7.1 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 25,785 | 2,283 | +144.1 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,633 | 1,125 | +7.2 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,491 | 3,170 | +44.6 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 24,441 | 2,794 | +112.0 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,599 | 2,124 | +46.1 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 23,146 | 2,228 | +55.2 |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | 23,052 | 1,710 | +739.8 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,993 | 811 | +36.2 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,444 | 1,701 | +2.8 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 22,224 | 2,333 | +41.1 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 22,059 | 3,539 | +46.2 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,893 | 2,894 | +8.0 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,816 | 3,136 | +5.5 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,747 | 2,534 | +109.3 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | 21,182 | 2,862 | +166.5 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,412 | 1,970 | +23.0 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 20,047 | 8,712 | +55.2 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,956 | 1,803 | +47.2 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,864 | 2,523 | +26.4 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,836 | 1,202 | +10.5 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,507 | 2,833 | +32.4 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 19,132 | 1,547 | +46.4 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 19,056 | 1,885 | +26.1 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 19,011 | 1,405 | +183.4 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,949 | 1,722 | +10.8 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 18,638 | 643 | +207.1 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,254 | 2,280 | +2.8 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,566 | 3,974 | +15.4 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,307 | 1,762 | +17.1 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 17,110 | 2,516 | +48.7 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 17,105 | 2,520 | +19.6 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,066 | 1,767 | +6.6 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 16,269 | 1,456 | +30.0 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,998 | 1,800 | +6.1 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,423 | 8,623 | +15.2 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,304 | 1,557 | +7.5 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 15,069 | 1,726 | +45.3 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,922 | 3,266 | +5.3 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,622 | 1,099 | +5.0 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,899 | 974 | +30.5 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,779 | 1,478 | +20.1 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,734 | 2,797 | +34.2 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,591 | 609 | +16.9 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,562 | 2,749 | +25.9 |
| [openai/codex-security](https://github.com/openai/codex-security) | 12,832 | 1,007 | +44.6 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 12,828 | 1,884 | +15.5 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,384 | 1,120 | +17.2 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 12,288 | 1,709 | +92.4 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 12,020 | 1,686 | +99.5 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,954 | 3,262 | +64.0 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,792 | 909 | +25.5 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,762 | 1,464 | +22.3 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,439 | 726 | +34.9 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,243 | 1,003 | +60.9 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,159 | 5,631 | +4.0 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,052 | 1,807 | +1.3 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,918 | 985 | +35.2 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,519 | 1,738 | +46.6 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10,373 | 749 | +59.0 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,344 | 7,653 | +3.5 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,334 | 826 | +10.1 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,119 | 1,109 | +6.7 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 10,021 | 1,241 | +93.9 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,829 | 331 | +25.4 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,754 | 719 | +38.3 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,729 | 728 | +3.4 |
| [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) | 9,183 | 1,655 | +150.0 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,926 | 912 | +2.4 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,764 | 1,086 | +29.9 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,742 | 850 | — |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,452 | 648 | +1.0 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,343 | 731 | +21.6 |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | 8,224 | 521 | +47.3 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,126 | 197 | +0.8 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,600 | 1,136 | +0.5 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,220 | 632 | +29.2 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,164 | 571 | +11.2 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,145 | 593 | +8.1 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,832 | 379 | +8.3 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,800 | 454 | +3.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,602 | 249 | +4.0 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,255 | 606 | +2.1 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,069 | 420 | — |
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
