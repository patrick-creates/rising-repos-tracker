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

> Auto-updated daily — last refreshed 2026-11-19

| Metric | Value |
|---|---|
| Repos tracked | **219** (45 stalled 💤) |
| Total stars | **11,877,564** |
| Total forks | **1,723,480** |
| Fastest growing | **rea** ⚠️ (+4248.2/day) |

### 🔥 Top 5 by velocity

> ⚠️ unusually fast growth (1,000+ stars/day over its lifetime and the last week): check before trusting. 💤 stalled repos are left out.

| # | Repo | Stars | Stars/day (30d) |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) ⚠️ | 469,376 | +4248.2 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) ⚠️ | 80,714 | +1708.9 |
| 3 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | 66,000 | +1242.7 |
| 4 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 113,880 | +1192.4 |
| 5 | [ccch1mneyyy/dsh-Go](https://github.com/ccch1mneyyy/dsh-Go) ⚠️ | 27,929 | +1151.3 |

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
| [morluto/rea](https://github.com/morluto/rea) ⚠️ | 469,376 | 114,688 | +4248.2 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 394,802 | 82,928 | +62.3 |
| [obra/superpowers](https://github.com/obra/superpowers) | 321,761 | 28,601 | +647.1 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 306,983 | 45,195 | +752.7 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 264,664 | 59,756 | +308.8 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 196,915 | 14,912 | +190.2 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 194,614 | 10,967 | +869.2 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 188,101 | 45,856 | +14.5 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 177,878 | 22,677 | +141.7 |
| [langgenius/dify](https://github.com/langgenius/dify) | 161,499 | 25,530 | +83.3 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 159,083 | 23,109 | +94.8 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 155,753 | 10,191 | +303.5 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 151,613 | 16,013 | +461.3 |
| [github/spec-kit](https://github.com/github/spec-kit) | 150,628 | 13,527 | +286.5 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 150,435 | 14,467 | +699.6 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,891 | 25,157 | +59.0 |
| [stablyai/orca](https://github.com/stablyai/orca) | 129,502 | 8,233 | +1019.7 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 123,854 | 66,705 | +72.3 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 121,458 | 7,101 | +256.9 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 118,749 | 7,943 | +638.1 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 118,347 | 10,292 | +549.2 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 115,002 | 19,097 | +334.1 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 113,880 | 12,670 | +1192.4 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 113,259 | 6,747 | +777.4 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 113,224 | 10,169 | +440.5 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 108,455 | 12,300 | +192.9 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 104,614 | 13,593 | +191.5 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 97,955 | 6,691 | +395.9 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 97,207 | 25,025 | +100.1 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 93,828 | 12,560 | +82.6 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 90,935 | 14,119 | +68.0 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) 💤 | 88,982 | 58,476 | +3.6 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 88,826 | 13,710 | +337.5 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 87,414 | 10,931 | +118.3 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 87,163 | 5,598 | +104.6 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 86,829 | 8,073 | +627.5 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 85,852 | 16,350 | +83.2 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 83,706 | 15,343 | +265.5 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 82,081 | 9,686 | +153.6 |
| [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) | 81,686 | 11,114 | +385.7 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) ⚠️ | 80,714 | 2,277 | +1708.9 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 80,645 | 12,891 | +58.8 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 80,206 | 8,789 | +28.1 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 80,137 | 6,284 | +122.0 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 79,861 | 9,795 | +79.5 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 79,774 | 7,446 | +49.1 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 79,568 | 14,215 | +265.5 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 77,247 | 13,077 | +17.9 |
| [usestrix/strix](https://github.com/usestrix/strix) | 76,631 | 8,728 | +213.4 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 75,256 | 5,156 | +91.8 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 73,463 | 57,944 | +222.9 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 72,526 | 23,289 | +457.9 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 71,735 | 11,534 | +59.9 |
| [blader/humanizer](https://github.com/blader/humanizer) | 71,107 | 5,569 | +414.2 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,998 | 5,845 | +26.1 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 70,560 | 6,283 | +191.0 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 69,224 | 6,885 | +47.0 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) 💤 | 67,081 | 13,452 | +5.9 |
| [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | 66,000 | 11,527 | +1242.7 |
| [tw93/Pake](https://github.com/tw93/Pake) | 63,853 | 13,048 | +54.7 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 63,542 | 13,418 | +63.4 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 61,409 | 8,949 | +193.6 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 60,933 | 7,672 | +95.8 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,619 | 7,673 | +32.2 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 59,007 | 9,059 | +108.0 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 58,809 | 6,892 | +124.3 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 58,350 | 4,978 | +76.2 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 58,309 | 4,881 | +147.2 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 57,820 | 5,077 | +157.0 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 57,722 | 4,400 | +154.7 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) 💤 | 55,571 | 25,098 | +2.0 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 55,326 | 6,328 | +27.5 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 54,320 | 4,495 | +220.7 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 53,685 | 11,219 | +76.5 |
| [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills) | 53,222 | 3,787 | +114.1 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 52,225 | 12,746 | +63.4 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 51,849 | 4,193 | +231.8 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 50,203 | 8,763 | +33.1 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 50,182 | 5,178 | +17.6 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 49,984 | 7,244 | +66.8 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 48,868 | 4,062 | +62.5 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 48,008 | 10,436 | +17.9 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 47,698 | 4,944 | +147.2 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 47,344 | 9,749 | +43.2 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 47,195 | 3,622 | +161.2 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 46,477 | 1,829 | +539.0 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 46,364 | 2,780 | +60.5 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 45,156 | 7,795 | +52.9 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,759 | 4,222 | +19.5 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,690 | 4,513 | +49.3 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 42,467 | 3,514 | +68.4 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,433 | 4,343 | +11.8 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 42,134 | 5,203 | +206.0 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 41,352 | 5,390 | +37.9 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) 💤 | 41,181 | 3,570 | +2.6 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,951 | 3,653 | +28.4 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) 💤 | 39,868 | 6,228 | +2.2 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 39,494 | 5,886 | +82.1 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 39,465 | 4,530 | +114.9 |
| [google/langextract](https://github.com/google/langextract) | 39,343 | 2,757 | +12.2 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 39,103 | 2,534 | +31.6 |
| [yetone/magpie](https://github.com/yetone/magpie) | 38,999 | 3,545 | +701.1 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,536 | 3,455 | +28.0 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 38,522 | 6,271 | +84.3 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 38,456 | 4,097 | +101.2 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 37,972 | 3,294 | +70.0 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 37,800 | 5,268 | +99.6 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) 💤 | 37,446 | 6,886 | +7.8 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 36,397 | 4,450 | +55.0 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) 💤 | 36,104 | 2,597 | +7.5 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,426 | 9,118 | +13.0 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,378 | 3,598 | +24.0 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 34,296 | 2,356 | +102.1 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,494 | 5,031 | +16.1 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 33,457 | 2,287 | +41.4 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,861 | 2,987 | +19.5 |
| [decolua/9router](https://github.com/decolua/9router) | 32,632 | 6,400 | +50.6 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,397 | 1,997 | +22.9 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 31,443 | 4,438 | +33.4 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 31,186 | 3,048 | +24.1 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 31,034 | 3,036 | +45.2 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 30,901 | 2,816 | +118.7 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 30,830 | 3,836 | +381.1 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 30,710 | 3,618 | +217.2 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,463 | 2,711 | +25.4 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) 💤 | 29,718 | 2,649 | +6.6 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,257 | 1,340 | +19.5 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,832 | 2,684 | +17.9 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,746 | 3,067 | +11.2 |
| [voideditor/void](https://github.com/voideditor/void) 💤 | 28,706 | 2,660 | — |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 28,323 | 4,008 | +136.6 |
| [ccch1mneyyy/dsh-Go](https://github.com/ccch1mneyyy/dsh-Go) ⚠️ | 27,929 | 1,340 | +1151.3 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 27,819 | 3,138 | +110.3 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 26,908 | 2,392 | +208.4 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) 💤 | 26,627 | 4,066 | +6.3 |
| [toon-format/toon](https://github.com/toon-format/toon) 💤 | 25,642 | 1,126 | +3.8 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,619 | 3,187 | +20.5 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 25,538 | 2,931 | +151.6 |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | 25,474 | 1,909 | +538.1 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,756 | 2,154 | +26.8 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 23,225 | 2,240 | +18.3 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 23,039 | 813 | +10.4 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | 22,868 | 3,042 | +235.2 |
| [winfunc/opcode](https://github.com/winfunc/opcode) 💤 | 22,452 | 1,703 | +1.1 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 22,410 | 2,351 | +29.5 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 22,188 | 3,557 | +25.7 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) 💤 | 21,930 | 2,894 | +6.6 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,903 | 2,558 | +28.3 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) 💤 | 21,816 | 3,141 | +2.8 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,476 | 1,976 | +14.4 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 20,155 | 1,830 | +33.9 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 20,038 | 683 | +141.1 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 20,013 | 8,682 | +76.0 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,940 | 2,530 | +13.8 |
| [tanweai/pua](https://github.com/tanweai/pua) 💤 | 19,869 | 1,204 | +4.9 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,574 | 2,846 | +17.4 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 19,465 | 1,562 | +56.5 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 19,155 | 1,897 | +21.5 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) 💤 | 18,982 | 1,724 | +7.2 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) 💤 | 18,271 | 2,284 | +2.0 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 18,189 | 1,210 | +103.3 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,598 | 4,007 | +14.9 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,364 | 1,783 | +13.2 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 17,212 | 2,536 | +27.4 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 17,193 | 2,538 | +12.7 |
| [cft0808/edict](https://github.com/cft0808/edict) 💤 | 17,086 | 1,769 | +2.7 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 16,405 | 1,473 | +33.9 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) 💤 | 16,042 | 1,799 | +8.3 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,498 | 8,617 | +13.9 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 15,485 | 1,755 | +82.0 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) 💤 | 15,343 | 1,562 | +5.3 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) 💤 | 14,931 | 3,265 | +0.7 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) 💤 | 14,627 | 1,103 | +2.4 |
| [openai/codex-security](https://github.com/openai/codex-security) | 14,175 | 1,108 | +101.1 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,940 | 978 | +13.9 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,868 | 2,829 | +30.6 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) 💤 | 13,794 | 1,478 | +3.4 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,749 | 2,819 | +26.2 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) 💤 | 13,644 | 612 | +9.8 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 12,939 | 1,891 | +16.5 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 12,642 | 1,762 | +84.5 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,451 | 1,131 | +16.4 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 12,252 | 1,739 | +62.0 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,960 | 3,239 | +83.2 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,866 | 913 | +11.3 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,795 | 1,478 | +10.5 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) 💤 | 11,423 | 726 | — |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,343 | 1,023 | +29.0 |
| [aden-hive/hive](https://github.com/aden-hive/hive) 💤 | 11,169 | 5,632 | +1.9 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) 💤 | 11,062 | 1,808 | +1.1 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,968 | 988 | +21.7 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,655 | 1,775 | +40.6 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10,585 | 770 | +44.3 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) 💤 | 10,360 | 825 | +3.6 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) 💤 | 10,348 | 7,642 | +0.8 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 10,303 | 1,305 | +77.4 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) 💤 | 10,134 | 1,112 | +4.5 |
| [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) | 9,952 | 1,820 | +136.9 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) 💤 | 9,852 | 336 | +7.1 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,811 | 719 | +16.5 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) 💤 | 9,737 | 727 | +0.9 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) 💤 | 8,936 | 912 | +0.6 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,829 | 1,093 | +36.1 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) 💤 | 8,747 | 854 | +2.0 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) 💤 | 8,455 | 648 | +1.1 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,415 | 740 | +14.2 |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | 8,357 | 532 | +32.2 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) 💤 | 8,125 | 197 | +0.3 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) 💤 | 7,592 | 1,135 | — |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,295 | 639 | +25.0 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) 💤 | 7,179 | 567 | +3.5 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) 💤 | 7,160 | 594 | +1.5 |
| [steipete/summarize](https://github.com/steipete/summarize) 💤 | 6,867 | 462 | +4.7 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) 💤 | 6,844 | 379 | +2.4 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) 💤 | 6,616 | 252 | +3.7 |
| [microsoft/fara](https://github.com/microsoft/fara) 💤 | 6,258 | 609 | +1.2 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) 💤 | 6,072 | 418 | — |
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
