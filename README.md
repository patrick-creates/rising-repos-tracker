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

> Auto-updated daily — last refreshed 2026-11-16

| Metric | Value |
|---|---|
| Repos tracked | **219** |
| Total stars | **11,789,495** |
| Total forks | **1,712,855** |
| Fastest growing | **rea** (+9400.5/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 463,245 | +9400.5 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 76,937 | +1799.6 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 111,701 | +1306.9 |
| 4 | [ccch1mneyyy/dsh-Go](https://github.com/ccch1mneyyy/dsh-Go) | 24,475 | +1111.1 |
| 5 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 191,855 | +978.5 |

### 🆕 Recently added

- [pingdotgg/t3code](https://github.com/pingdotgg/t3code) — added 2026-11-16 — The best way to control Claude Code, Codex and more from any computer or phone
- [ccch1mneyyy/dsh-Go](https://github.com/ccch1mneyyy/dsh-Go) — added 2026-11-16 — dsh-go — DeepSeek Harness 装进口袋：手机本机运行，也能遥控你的电脑。
- [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) — added 2026-11-09 — Open-source gym & body-weight tracker, now in the App Store (iPhone + Apple Watch) and as an Android APK. Plan routines, log workouts, see which muscles are trained, import from Strong/Hevy/FitNotes. Self-host it or use it on the phone alone.
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
| [morluto/rea](https://github.com/morluto/rea) | 463,245 | 113,399 | +9400.5 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 394,567 | 82,907 | +123.5 |
| [obra/superpowers](https://github.com/obra/superpowers) | 318,352 | 28,375 | +563.1 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 304,205 | 44,819 | +658.6 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 263,797 | 59,481 | +619.0 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 195,674 | 14,795 | +388.6 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 191,855 | 10,756 | +978.5 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 188,058 | 45,854 | +20.2 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 177,629 | 22,654 | +82.7 |
| [langgenius/dify](https://github.com/langgenius/dify) | 161,269 | 25,513 | +107.2 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 158,813 | 23,083 | +117.2 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 154,882 | 10,147 | +444.2 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 150,233 | 15,883 | +386.8 |
| [github/spec-kit](https://github.com/github/spec-kit) | 150,033 | 13,481 | +279.0 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,642 | 25,148 | +69.6 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 148,771 | 14,276 | +464.9 |
| [stablyai/orca](https://github.com/stablyai/orca) | 126,381 | 8,012 | +855.6 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 123,663 | 66,509 | +69.0 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 120,640 | 7,044 | +324.9 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 117,542 | 10,212 | +225.5 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 116,584 | 7,806 | +512.9 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 114,262 | 18,943 | +352.0 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 112,214 | 10,059 | +551.2 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 111,701 | 12,389 | +1306.9 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 111,127 | 6,640 | +791.6 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 107,869 | 12,255 | +350.0 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 104,430 | 13,582 | +220.2 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 97,046 | 6,630 | +457.5 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 97,025 | 24,895 | +91.7 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 93,581 | 12,530 | +108.0 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 90,744 | 14,086 | +199.9 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,969 | 58,509 | +5.1 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 87,962 | 13,492 | +570.0 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 87,138 | 10,887 | +200.4 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 86,727 | 5,562 | +204.1 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 85,627 | 16,338 | +46.1 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 85,019 | 7,875 | +369.3 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 82,962 | 15,219 | +207.2 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 81,850 | 9,646 | +189.5 |
| [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) | 80,877 | 10,944 | +378.8 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 80,473 | 12,872 | +106.6 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 80,122 | 8,789 | +29.8 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 79,802 | 6,252 | +335.3 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 79,630 | 9,738 | +105.7 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 79,601 | 7,429 | +83.0 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 79,115 | 14,107 | +314.0 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 77,190 | 13,072 | +19.7 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 76,937 | 2,167 | +1799.6 |
| [usestrix/strix](https://github.com/usestrix/strix) | 75,897 | 8,580 | +298.7 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 74,968 | 5,143 | +143.8 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 72,704 | 57,641 | +193.5 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 72,009 | 23,179 | +400.2 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 71,544 | 11,521 | +171.2 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,941 | 5,849 | +69.3 |
| [blader/humanizer](https://github.com/blader/humanizer) | 69,737 | 5,484 | +351.5 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 69,102 | 6,876 | +85.7 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 67,853 | 5,978 | +218.5 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 67,071 | 13,454 | +4.6 |
| [tw93/Pake](https://github.com/tw93/Pake) | 63,669 | 13,021 | +81.8 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 63,342 | 13,320 | +87.7 |
| [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | 62,272 | 11,106 | +222.3 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 60,747 | 7,648 | +188.8 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 60,707 | 8,852 | +174.2 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,575 | 7,673 | +44.9 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 58,709 | 9,007 | +136.9 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 58,294 | 6,805 | +423.0 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 58,127 | 4,969 | +77.1 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 57,443 | 4,839 | +96.5 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 57,414 | 5,047 | +199.1 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 57,109 | 4,351 | +155.5 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,568 | 25,094 | +14.7 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 55,241 | 6,312 | +29.8 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 53,485 | 11,164 | +94.8 |
| [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills) | 52,905 | 3,771 | +113.2 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 52,689 | 4,230 | +321.1 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 52,009 | 12,695 | +95.2 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 51,321 | 4,149 | +292.7 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 50,141 | 5,174 | +28.5 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 50,123 | 8,750 | +40.9 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 49,787 | 7,212 | +63.5 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 48,720 | 4,040 | +200.6 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,949 | 10,433 | +18.6 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 47,427 | 4,927 | +109.6 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 47,187 | 9,718 | +55.5 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 47,036 | 3,598 | +80.0 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 46,161 | 2,777 | +45.7 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 46,008 | 1,814 | +386.1 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 45,025 | 7,774 | +65.3 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,714 | 4,222 | +46.1 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,573 | 4,501 | +37.9 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,348 | 4,337 | +12.9 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 42,303 | 3,501 | +105.4 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 41,214 | 5,367 | +42.3 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,184 | 3,573 | +37.2 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,858 | 3,648 | +34.5 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 40,738 | 4,683 | +104.1 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,860 | 6,231 | +3.6 |
| [google/langextract](https://github.com/google/langextract) | 39,321 | 2,755 | +15.8 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 39,259 | 5,843 | +144.6 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 39,169 | 4,485 | +171.2 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 39,014 | 2,524 | +71.5 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,455 | 3,451 | +25.4 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 38,367 | 6,243 | +168.8 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 38,075 | 4,050 | +157.7 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 37,814 | 3,289 | +130.1 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 37,538 | 5,213 | +138.0 |
| [yetone/magpie](https://github.com/yetone/magpie) | 37,457 | 3,374 | +727.9 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,437 | 6,887 | +18.4 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 36,228 | 4,432 | +123.2 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 36,111 | 2,571 | +103.0 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,398 | 9,120 | +37.3 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,319 | 3,593 | +41.5 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 34,167 | 2,350 | +108.4 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,377 | 5,022 | +10.1 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 33,351 | 2,278 | +187.6 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,792 | 2,985 | +92.7 |
| [decolua/9router](https://github.com/decolua/9router) | 32,507 | 6,367 | +97.0 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,338 | 1,996 | +33.5 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 31,325 | 4,425 | +44.5 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 31,111 | 3,044 | +45.4 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,938 | 3,030 | +176.3 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 30,501 | 2,775 | +166.6 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,402 | 2,705 | +53.3 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 30,102 | 3,530 | +265.4 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 29,896 | 3,767 | +206.5 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,695 | 2,645 | +72.3 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,216 | 1,338 | +28.1 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,794 | 2,675 | +35.2 |
| [voideditor/void](https://github.com/voideditor/void) | 28,709 | 2,659 | — |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,707 | 3,062 | +11.9 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 27,896 | 3,926 | +146.7 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 27,573 | 3,122 | +119.3 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,609 | 4,063 | +7.1 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 26,358 | 2,338 | +146.3 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,634 | 1,126 | +7.1 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,545 | 3,175 | +43.8 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 25,113 | 2,880 | +114.5 |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | 24,491 | 1,821 | +628.3 |
| [ccch1mneyyy/dsh-Go](https://github.com/ccch1mneyyy/dsh-Go) | 24,475 | 1,159 | +1111.1 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,663 | 2,139 | +45.7 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 23,181 | 2,234 | +54.3 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 23,019 | 810 | +35.6 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,453 | 1,703 | +2.8 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 22,304 | 2,345 | +40.7 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 22,123 | 3,551 | +45.7 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,912 | 2,892 | +7.9 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | 21,850 | 2,922 | +190.6 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,814 | 3,140 | +5.4 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,811 | 2,542 | +107.2 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,437 | 1,973 | +22.7 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 20,043 | 1,815 | +46.6 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 20,029 | 8,697 | +50.8 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,906 | 2,527 | +26.1 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,852 | 1,204 | +10.4 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,542 | 2,837 | +32.0 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 19,339 | 659 | +208.3 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 19,294 | 1,552 | +46.6 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 19,143 | 1,433 | +163.5 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 19,099 | 1,895 | +25.9 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,961 | 1,724 | +10.7 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,252 | 2,279 | +2.8 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,591 | 3,995 | +15.3 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,337 | 1,775 | +16.9 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 17,152 | 2,526 | +47.9 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 17,149 | 2,527 | +19.5 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,076 | 1,770 | +6.6 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 16,328 | 1,463 | +29.8 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 16,013 | 1,801 | +6.1 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,465 | 8,619 | +15.1 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,324 | 1,564 | +7.5 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 15,284 | 1,740 | +45.9 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,930 | 3,268 | +5.3 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,624 | 1,102 | +4.9 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,925 | 978 | +30.1 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,800 | 2,814 | +34.0 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,785 | 1,479 | +19.7 |
| [openai/codex-security](https://github.com/openai/codex-security) | 13,673 | 1,069 | +51.3 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,646 | 2,774 | +26.0 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,609 | 610 | +16.6 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 12,832 | 1,884 | +12.4 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 12,437 | 1,734 | +90.1 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,415 | 1,125 | +17.1 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 12,113 | 1,710 | +93.6 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,933 | 3,247 | +59.7 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,834 | 911 | +25.3 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,781 | 1,475 | +22.0 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,444 | 726 | +33.8 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,306 | 1,012 | +59.0 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,162 | 5,630 | +3.9 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,056 | 1,807 | +1.3 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,950 | 987 | +34.6 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,576 | 1,747 | +42.7 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10,468 | 756 | +57.3 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,346 | 825 | +10.0 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,344 | 7,651 | +3.4 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 10,215 | 1,284 | +87.6 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,123 | 1,110 | +6.3 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,836 | 336 | +24.8 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,787 | 718 | +37.4 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,733 | 728 | +3.3 |
| [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) | 9,504 | 1,707 | +131.6 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,935 | 913 | +2.4 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,789 | 1,086 | +29.1 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,745 | 853 | — |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,454 | 647 | +1.0 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,363 | 733 | +20.9 |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | 8,302 | 530 | +38.1 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,124 | 197 | +0.7 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,599 | 1,136 | +0.5 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,253 | 637 | +26.6 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,169 | 569 | +10.7 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,155 | 595 | +7.9 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,839 | 459 | +3.4 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,839 | 379 | +8.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,608 | 251 | +3.9 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,255 | 607 | +2.0 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,069 | 419 | — |
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
