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
![Screenshot](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/screenshot.yml?label=screenshot&logo=github-actions&logoColor=white)
![License](https://img.shields.io/github/license/patrick-creates/rising-repos-tracker)

**[→ View Live Dashboard](https://patrick-creates.github.io/rising-repos-tracker/)** · **[→ Weekly reports](./reports/README.md)**

Built and maintained by [Telosignal](https://www.telosignal.com/).

![Dashboard preview](./preview.png)

<!-- AUTOGEN-STATS-START -->
## 📊 Current snapshot

> Auto-updated daily — last refreshed 2026-11-22

| Metric | Value |
|---|---|
| Repos tracked | **219** (47 stalled 💤) |
| Total stars | **11,944,630** |
| Total forks | **1,730,329** |
| Fastest growing | **rea** ⚠️ (+3466.0/day) |

### 🔥 Top 5 by velocity

> ⚠️ unusually fast growth (1,000+ stars/day over its lifetime and the last week): check before trusting. 💤 stalled repos are left out.

| # | Repo | Stars | Stars/day (30d) |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) ⚠️ | 473,493 | +3466.0 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) ⚠️ | 83,651 | +1520.8 |
| 3 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | 70,692 | +1403.3 |
| 4 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 116,266 | +1133.3 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 132,530 | +976.0 |

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
    readme[("README.md")]:::data
    reports[("reports/<br/>YYYY-Www.md")]:::data
    preview[("preview.png")]:::data
    site[("dashboard.json")]:::data
    dashboard["index.html<br/>(GitHub Pages)"]:::output
    collect_yml["Collect Repo Stats<br/><i>Daily 05:17 UTC</i>"]:::workflow
    discover_yml["Discover Trending Repos<br/><i>Monday 04:43 UTC</i>"]:::workflow
    screenshot_yml["Screenshot Dashboard<br/><i>after collect repo stats</i>"]:::workflow
    repos --> collect_yml
    collect_yml --> history
    collect_yml --> readme
    collect_yml --> site
    collect_yml -->|Mondays| reports
    repos --> discover_yml
    discover_yml -.->|appends| repos
    dashboard --> screenshot_yml
    screenshot_yml --> preview
    site --> dashboard
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

> All workflows commit results directly back to the repo. Schedules are best-effort — GitHub Actions cron can drift by a few minutes.
<!-- AUTOGEN-WORKFLOWS-END -->

<!-- AUTOGEN-REPOS-START -->
## 📋 All tracked repos

| Repo | Stars | Forks | Stars/day (30d) |
|---|---:|---:|---:|
| [morluto/rea](https://github.com/morluto/rea) ⚠️ | 473,493 | 115,509 | +3466.0 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 395,027 | 82,949 | +73.5 |
| [obra/superpowers](https://github.com/obra/superpowers) | 323,838 | 28,735 | +663.2 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 308,664 | 45,417 | +727.6 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 265,315 | 59,975 | +298.0 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 197,785 | 14,974 | +201.7 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 196,657 | 11,087 | +746.8 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 188,132 | 45,827 | +13.9 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 178,241 | 22,731 | +137.3 |
| [langgenius/dify](https://github.com/langgenius/dify) | 161,671 | 25,536 | +78.1 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 159,257 | 23,108 | +90.7 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 156,324 | 10,215 | +280.3 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 152,688 | 16,096 | +450.0 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 151,806 | 14,589 | +610.6 |
| [github/spec-kit](https://github.com/github/spec-kit) | 150,992 | 13,560 | +282.6 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,978 | 25,155 | +55.5 |
| [stablyai/orca](https://github.com/stablyai/orca) | 132,530 | 8,463 | +976.0 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 123,994 | 66,807 | +67.8 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 122,083 | 7,121 | +252.7 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 119,926 | 8,037 | +619.0 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 118,951 | 10,340 | +551.5 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 116,266 | 12,934 | +1133.3 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 115,817 | 19,218 | +315.2 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 114,777 | 6,841 | +736.6 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 113,897 | 10,230 | +424.4 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 108,914 | 12,325 | +181.4 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 104,778 | 13,581 | +184.5 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 98,706 | 6,747 | +355.5 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 97,340 | 25,129 | +71.2 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 94,031 | 12,585 | +80.3 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 91,056 | 14,141 | +59.2 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 89,514 | 13,837 | +315.2 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) 💤 | 88,984 | 58,449 | +3.2 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 88,045 | 8,194 | +590.9 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 87,610 | 10,943 | +110.2 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 87,469 | 5,615 | +104.1 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 85,984 | 16,342 | +84.9 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 84,125 | 15,395 | +247.5 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) ⚠️ | 83,651 | 2,344 | +1520.8 |
| [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) | 82,276 | 11,205 | +374.9 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 82,250 | 9,694 | +121.4 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 80,722 | 12,879 | +54.9 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 80,376 | 6,294 | +92.3 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 80,290 | 8,781 | +27.9 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 80,042 | 9,817 | +77.2 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 79,960 | 7,439 | +50.0 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 79,806 | 14,270 | +240.0 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 77,309 | 13,068 | +17.9 |
| [usestrix/strix](https://github.com/usestrix/strix) | 76,985 | 8,770 | +190.5 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 75,446 | 5,155 | +87.5 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 73,682 | 58,047 | +225.1 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 72,992 | 23,373 | +306.7 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 72,397 | 6,405 | +240.8 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 72,368 | 11,644 | +76.0 |
| [blader/humanizer](https://github.com/blader/humanizer) | 72,158 | 5,647 | +411.9 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 71,055 | 5,835 | +25.6 |
| [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | 70,692 | 12,010 | +1403.3 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 69,303 | 6,882 | +45.8 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) 💤 | 67,100 | 13,436 | +5.8 |
| [tw93/Pake](https://github.com/tw93/Pake) | 63,926 | 13,049 | +54.9 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 63,692 | 13,470 | +60.2 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 61,973 | 9,046 | +194.5 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 61,118 | 7,713 | +93.8 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,656 | 7,654 | +31.6 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 59,217 | 9,094 | +105.7 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 59,065 | 6,933 | +116.8 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 58,766 | 4,909 | +158.2 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 58,570 | 5,000 | +75.7 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 58,082 | 5,085 | +134.7 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 58,063 | 4,426 | +150.8 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) 💤 | 55,584 | 25,105 | +2.1 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 55,425 | 6,334 | +28.1 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 55,271 | 4,585 | +238.2 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 53,738 | 11,225 | +76.0 |
| [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills) | 53,418 | 3,800 | +115.4 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 52,336 | 12,791 | +59.4 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 52,278 | 4,232 | +227.0 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 50,266 | 8,760 | +32.2 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 50,222 | 5,182 | +17.1 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 50,138 | 7,265 | +59.1 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 49,020 | 4,075 | +57.6 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 48,042 | 10,443 | +17.5 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 47,948 | 4,983 | +131.5 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 47,405 | 9,775 | +40.8 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 47,333 | 3,651 | +147.6 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 46,804 | 1,829 | +445.4 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 46,524 | 2,781 | +59.9 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 45,259 | 7,821 | +49.7 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,805 | 4,229 | +18.8 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,786 | 4,524 | +39.9 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 42,593 | 3,545 | +64.6 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 42,550 | 5,294 | +209.4 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,477 | 4,354 | +12.1 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 41,439 | 5,405 | +36.6 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) 💤 | 41,197 | 3,572 | +2.8 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 41,004 | 3,655 | +27.0 |
| [yetone/magpie](https://github.com/yetone/magpie) | 39,939 | 3,652 | +658.0 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) 💤 | 39,872 | 6,229 | +2.1 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 39,633 | 4,577 | +110.1 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 39,614 | 5,903 | +80.3 |
| [google/langextract](https://github.com/google/langextract) | 39,348 | 2,757 | +11.2 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 39,230 | 2,539 | +31.6 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 38,709 | 4,126 | +96.8 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 38,678 | 6,313 | +76.8 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,589 | 3,456 | +26.5 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 38,101 | 3,307 | +70.3 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 37,987 | 5,303 | +93.8 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) 💤 | 37,463 | 6,883 | +7.8 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 36,540 | 4,471 | +55.2 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) 💤 | 36,083 | 2,606 | +4.8 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,483 | 9,117 | +12.3 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,430 | 3,599 | +23.6 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 34,386 | 2,363 | +82.8 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,567 | 5,044 | +17.8 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 33,519 | 2,292 | +39.0 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,900 | 2,995 | +18.7 |
| [decolua/9router](https://github.com/decolua/9router) | 32,732 | 6,420 | +48.8 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,440 | 2,005 | +21.2 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 31,519 | 3,887 | +391.5 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 31,516 | 4,460 | +32.9 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 31,224 | 3,055 | +21.8 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 31,123 | 2,835 | +116.7 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 31,095 | 3,046 | +41.6 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 31,046 | 3,679 | +202.4 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,531 | 2,718 | +23.8 |
| [ccch1mneyyy/dsh-Go](https://github.com/ccch1mneyyy/dsh-Go) | 29,994 | 1,435 | +919.8 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) 💤 | 29,734 | 2,656 | +5.9 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,286 | 1,346 | +16.2 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,866 | 2,690 | +16.7 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,781 | 3,069 | +11.4 |
| [voideditor/void](https://github.com/voideditor/void) 💤 | 28,701 | 2,659 | — |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 28,579 | 4,039 | +132.5 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 28,101 | 3,160 | +113.6 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 27,245 | 2,421 | +206.8 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) 💤 | 26,647 | 4,066 | +6.2 |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | 26,072 | 1,953 | +459.9 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 25,839 | 2,970 | +154.9 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,676 | 3,197 | +20.3 |
| [toon-format/toon](https://github.com/toon-format/toon) 💤 | 25,643 | 1,125 | +3.1 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,831 | 2,181 | +27.6 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 23,269 | 2,244 | +17.2 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | 23,221 | 3,110 | +208.1 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) 💤 | 23,058 | 814 | +9.6 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 22,458 | 2,358 | +28.4 |
| [winfunc/opcode](https://github.com/winfunc/opcode) 💤 | 22,456 | 1,704 | +1.2 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 22,250 | 3,563 | +24.2 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,988 | 2,572 | +28.3 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) 💤 | 21,936 | 2,896 | +6.2 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) 💤 | 21,824 | 3,139 | +2.4 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 20,702 | 704 | +142.1 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,494 | 1,975 | +12.2 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 20,274 | 1,839 | +33.4 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 19,997 | 8,669 | +76.2 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,966 | 2,535 | +13.6 |
| [tanweai/pua](https://github.com/tanweai/pua) 💤 | 19,876 | 1,206 | +4.9 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,605 | 2,855 | +16.0 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 19,579 | 1,565 | +54.1 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 19,349 | 1,212 | +134.8 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 19,190 | 1,901 | +20.3 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) 💤 | 18,992 | 1,724 | +6.7 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) 💤 | 18,274 | 2,288 | +1.7 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,599 | 4,003 | +15.1 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,387 | 1,786 | +12.9 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 17,271 | 2,552 | +25.3 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 17,211 | 2,542 | +12.1 |
| [cft0808/edict](https://github.com/cft0808/edict) 💤 | 17,113 | 1,775 | +3.3 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 16,466 | 1,483 | +32.6 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) 💤 | 16,058 | 1,801 | +7.1 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 15,639 | 1,772 | +81.5 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,514 | 8,614 | +12.8 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) 💤 | 15,357 | 1,565 | +5.1 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) 💤 | 14,936 | 3,263 | +0.8 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) 💤 | 14,633 | 1,105 | +2.5 |
| [openai/codex-security](https://github.com/openai/codex-security) | 14,266 | 1,128 | +102.8 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 14,205 | 1,951 | +77.3 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,965 | 981 | +13.1 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,908 | 2,829 | +28.9 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,815 | 2,840 | +26.2 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) 💤 | 13,799 | 1,479 | +3.2 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) 💤 | 13,658 | 613 | +9.4 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 12,763 | 1,779 | +72.0 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,478 | 1,132 | +14.2 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 12,334 | 1,753 | +51.4 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,940 | 3,231 | +82.8 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,882 | 912 | +10.9 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) 💤 | 11,812 | 1,477 | +9.7 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,432 | 1,032 | +24.8 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) 💤 | 11,358 | 724 | — |
| [aden-hive/hive](https://github.com/aden-hive/hive) 💤 | 11,167 | 5,632 | +1.6 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) 💤 | 11,066 | 1,807 | +1.3 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,976 | 989 | +21.1 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,719 | 1,780 | +38.5 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10,648 | 778 | +40.4 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 10,385 | 1,324 | +69.8 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) 💤 | 10,365 | 825 | +3.4 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) 💤 | 10,346 | 7,639 | +0.7 |
| [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) | 10,297 | 1,890 | +131.8 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) 💤 | 10,146 | 1,113 | +4.3 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) 💤 | 9,869 | 341 | +6.7 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,827 | 721 | +15.8 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) 💤 | 9,738 | 727 | +0.9 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) 💤 | 8,923 | 913 | +0.2 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,851 | 1,093 | +31.8 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) 💤 | 8,748 | 853 | +1.7 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) 💤 | 8,454 | 648 | +1.0 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,450 | 740 | +14.4 |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | 8,399 | 533 | +28.0 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) 💤 | 8,125 | 197 | +0.3 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) 💤 | 7,591 | 1,137 | — |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,315 | 639 | +23.0 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) 💤 | 7,191 | 569 | +3.6 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) 💤 | 7,161 | 596 | +2.7 |
| [steipete/summarize](https://github.com/steipete/summarize) 💤 | 6,875 | 463 | +4.7 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) 💤 | 6,849 | 380 | +2.3 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) 💤 | 6,623 | 253 | +3.5 |
| [microsoft/fara](https://github.com/microsoft/fara) 💤 | 6,259 | 610 | +1.3 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) 💤 | 6,066 | 419 | — |
| [re4/LibreCode](https://github.com/re4/LibreCode) 💤 | 86 | 4 | — |
<!-- AUTOGEN-REPOS-END -->

---

## What it does

- Collects daily snapshots of stars, forks, watchers and open issues for every tracked repo
- Discovers new trending repos automatically every Monday using the GitHub Search API
- Shows each repo's GitHub description and topics in the dashboard, refreshed with every daily snapshot
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

### Repo descriptions

Clicking a repo in the dashboard shows its GitHub description and topics, taken from the daily snapshot. Until 2026 the tracker also generated AI summaries with GitHub Models; GitHub retired that service on 2026-07-30. The summaries generated before then stay in `data/<owner>/<repo>/summary.json` and are shown below the description, dated; no new ones are generated.

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
- **Chart.js** — star growth visualization
- **Mermaid** — architecture diagram (rendered by GitHub)
- Collecting, reports and README use Node built-ins only; the screenshot workflow installs Puppeteer. No build step, no database

## License

MIT
