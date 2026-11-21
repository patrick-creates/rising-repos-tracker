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

> Auto-updated daily — last refreshed 2026-11-21

| Metric | Value |
|---|---|
| Repos tracked | **219** (46 stalled 💤) |
| Total stars | **11,923,659** |
| Total forks | **1,727,832** |
| Fastest growing | **rea** ⚠️ (+3686.9/day) |

### 🔥 Top 5 by velocity

> ⚠️ unusually fast growth (1,000+ stars/day over its lifetime and the last week): check before trusting. 💤 stalled repos are left out.

| # | Repo | Stars | Stars/day (30d) |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) ⚠️ | 472,198 | +3686.9 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) ⚠️ | 82,793 | +1575.1 |
| 3 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | 68,802 | +1306.0 |
| 4 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 115,755 | +1158.3 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 131,555 | +984.2 |

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
| [morluto/rea](https://github.com/morluto/rea) ⚠️ | 472,198 | 115,271 | +3686.9 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 394,953 | 82,937 | +74.2 |
| [obra/superpowers](https://github.com/obra/superpowers) | 323,355 | 28,689 | +666.1 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 308,114 | 45,343 | +736.3 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 265,110 | 59,902 | +300.5 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 197,345 | 14,931 | +192.7 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 196,030 | 11,037 | +786.1 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 188,124 | 45,833 | +14.1 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 178,129 | 22,716 | +141.6 |
| [langgenius/dify](https://github.com/langgenius/dify) | 161,607 | 25,539 | +79.1 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 159,200 | 23,105 | +92.5 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 156,146 | 10,202 | +287.8 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 152,350 | 16,065 | +454.4 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 151,430 | 14,546 | +641.5 |
| [github/spec-kit](https://github.com/github/spec-kit) | 150,889 | 13,549 | +283.8 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,995 | 25,149 | +58.0 |
| [stablyai/orca](https://github.com/stablyai/orca) | 131,555 | 8,366 | +984.2 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 123,942 | 66,767 | +68.8 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 121,884 | 7,108 | +254.3 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 119,559 | 8,003 | +625.0 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 118,762 | 10,322 | +551.2 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 115,755 | 12,866 | +1158.3 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 115,590 | 19,179 | +323.1 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 114,304 | 6,797 | +750.5 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 113,683 | 10,198 | +429.1 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 108,780 | 12,310 | +185.5 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 104,724 | 13,577 | +186.9 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 98,484 | 6,729 | +371.4 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 97,303 | 25,098 | +73.8 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 93,948 | 12,572 | +80.1 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 91,009 | 14,122 | +61.5 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 89,316 | 13,793 | +323.6 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) 💤 | 88,984 | 58,454 | +3.4 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 87,677 | 8,155 | +603.5 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 87,561 | 10,934 | +113.5 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 87,360 | 5,612 | +103.8 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 85,943 | 16,337 | +84.4 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 84,013 | 15,381 | +251.0 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) ⚠️ | 82,793 | 2,330 | +1575.1 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 82,196 | 9,689 | +129.5 |
| [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) | 82,044 | 11,166 | +377.0 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 80,697 | 12,874 | +56.7 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 80,266 | 8,780 | +27.8 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 80,240 | 6,279 | +92.1 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 79,980 | 9,801 | +77.6 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 79,885 | 7,437 | +49.4 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 79,725 | 14,243 | +249.7 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 77,261 | 13,065 | +17.0 |
| [usestrix/strix](https://github.com/usestrix/strix) | 76,873 | 8,748 | +197.0 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 75,400 | 5,149 | +89.6 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 73,607 | 58,004 | +224.8 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 72,893 | 23,360 | +323.4 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 72,286 | 11,635 | +75.5 |
| [blader/humanizer](https://github.com/blader/humanizer) | 71,842 | 5,621 | +412.4 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 71,715 | 6,353 | +221.7 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 71,040 | 5,835 | +26.0 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 69,282 | 6,885 | +46.3 |
| [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | 68,802 | 11,806 | +1306.0 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) 💤 | 67,094 | 13,438 | +5.9 |
| [tw93/Pake](https://github.com/tw93/Pake) | 63,895 | 13,031 | +54.8 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 63,648 | 13,441 | +61.8 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 61,807 | 9,019 | +196.5 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 61,044 | 7,694 | +94.4 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,645 | 7,653 | +31.7 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 59,158 | 9,085 | +106.7 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 58,976 | 6,924 | +118.6 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 58,620 | 4,895 | +155.0 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 58,508 | 4,993 | +76.1 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 57,993 | 5,086 | +141.6 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 57,950 | 4,419 | +150.8 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) 💤 | 55,584 | 25,105 | +2.3 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 55,392 | 6,336 | +28.0 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 54,964 | 4,542 | +232.0 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 53,728 | 11,221 | +76.2 |
| [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills) | 53,347 | 3,797 | +114.6 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 52,303 | 12,772 | +61.2 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 52,138 | 4,217 | +228.2 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 50,249 | 8,759 | +32.7 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 50,206 | 5,175 | +17.1 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 50,077 | 7,260 | +59.3 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 48,973 | 4,073 | +59.7 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 48,024 | 10,440 | +17.1 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 47,880 | 4,970 | +137.9 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 47,384 | 9,769 | +41.2 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 47,300 | 3,642 | +152.2 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 46,593 | 1,828 | +467.6 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 46,464 | 2,781 | +60.1 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 45,224 | 7,807 | +50.5 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,785 | 4,229 | +18.9 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,764 | 4,519 | +41.2 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 42,557 | 3,539 | +66.3 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,458 | 4,349 | +12.0 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 42,438 | 5,273 | +209.1 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 41,415 | 5,400 | +37.2 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) 💤 | 41,193 | 3,573 | +2.9 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,988 | 3,656 | +27.3 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) 💤 | 39,867 | 6,229 | +2.1 |
| [yetone/magpie](https://github.com/yetone/magpie) | 39,689 | 3,625 | +673.7 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 39,582 | 5,897 | +80.9 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 39,569 | 4,566 | +111.9 |
| [google/langextract](https://github.com/google/langextract) | 39,348 | 2,757 | +11.7 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 39,174 | 2,534 | +31.9 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 38,639 | 6,305 | +79.3 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 38,625 | 4,112 | +98.2 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,577 | 3,455 | +27.2 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 38,070 | 3,304 | +71.2 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 37,939 | 5,296 | +96.4 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) 💤 | 37,453 | 6,884 | +7.9 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 36,489 | 4,464 | +55.3 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) 💤 | 36,091 | 2,602 | +6.2 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,468 | 9,115 | +12.6 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,419 | 3,599 | +24.2 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 34,352 | 2,361 | +87.2 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,551 | 5,042 | +17.6 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 33,499 | 2,290 | +39.6 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,895 | 2,992 | +19.3 |
| [decolua/9router](https://github.com/decolua/9router) | 32,693 | 6,408 | +49.7 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,425 | 2,003 | +21.5 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 31,495 | 4,449 | +33.0 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 31,298 | 3,869 | +388.7 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 31,210 | 3,049 | +22.7 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 31,090 | 2,831 | +118.4 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 31,088 | 3,044 | +43.3 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 30,928 | 3,660 | +207.3 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,512 | 2,717 | +24.6 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) 💤 | 29,731 | 2,654 | +6.3 |
| [ccch1mneyyy/dsh-Go](https://github.com/ccch1mneyyy/dsh-Go) | 29,369 | 1,401 | +978.8 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,279 | 1,346 | +17.4 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,841 | 2,686 | +16.6 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,767 | 3,071 | +11.3 |
| [voideditor/void](https://github.com/voideditor/void) 💤 | 28,705 | 2,658 | — |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 28,507 | 4,029 | +133.8 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 27,989 | 3,154 | +111.9 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 27,129 | 2,413 | +208.3 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) 💤 | 26,639 | 4,065 | +6.3 |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | 25,885 | 1,936 | +482.7 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 25,746 | 2,957 | +153.4 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,661 | 3,193 | +20.5 |
| [toon-format/toon](https://github.com/toon-format/toon) 💤 | 25,642 | 1,125 | +3.2 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,793 | 2,164 | +26.8 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 23,257 | 2,242 | +17.2 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | 23,100 | 3,082 | +215.3 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) 💤 | 23,052 | 813 | +9.9 |
| [winfunc/opcode](https://github.com/winfunc/opcode) 💤 | 22,453 | 1,703 | +1.1 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 22,437 | 2,355 | +28.5 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 22,232 | 3,562 | +24.5 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,965 | 2,568 | +28.4 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) 💤 | 21,936 | 2,895 | +6.5 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) 💤 | 21,823 | 3,139 | +2.6 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 20,486 | 698 | +145.7 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,484 | 1,975 | +12.7 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 20,246 | 1,837 | +34.0 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 20,002 | 8,674 | +76.1 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,955 | 2,533 | +13.5 |
| [tanweai/pua](https://github.com/tanweai/pua) 💤 | 19,873 | 1,207 | +5.0 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,604 | 2,853 | +16.8 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 19,552 | 1,563 | +55.5 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 19,185 | 1,208 | +133.7 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 19,182 | 1,900 | +20.8 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) 💤 | 18,991 | 1,726 | +6.9 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) 💤 | 18,272 | 2,287 | +1.9 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,601 | 4,006 | +15.1 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,381 | 1,784 | +13.1 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 17,241 | 2,544 | +26.7 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 17,207 | 2,540 | +12.4 |
| [cft0808/edict](https://github.com/cft0808/edict) 💤 | 17,108 | 1,774 | +3.3 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 16,445 | 1,478 | +33.0 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) 💤 | 16,053 | 1,800 | +7.7 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 15,593 | 1,765 | +81.9 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,503 | 8,612 | +13.1 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) 💤 | 15,351 | 1,565 | +5.1 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) 💤 | 14,932 | 3,263 | +0.6 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) 💤 | 14,632 | 1,105 | +2.5 |
| [openai/codex-security](https://github.com/openai/codex-security) | 14,242 | 1,125 | +102.4 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,959 | 981 | +13.4 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,895 | 2,828 | +29.4 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 13,812 | 1,936 | +60.7 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,799 | 2,836 | +26.4 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) 💤 | 13,797 | 1,478 | +3.4 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) 💤 | 13,654 | 612 | +9.6 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 12,728 | 1,774 | +76.5 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,470 | 1,132 | +14.9 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 12,319 | 1,747 | +55.4 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,948 | 3,236 | +83.1 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,879 | 912 | +11.1 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,810 | 1,477 | +10.1 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,395 | 1,031 | +25.6 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) 💤 | 11,360 | 724 | — |
| [aden-hive/hive](https://github.com/aden-hive/hive) 💤 | 11,166 | 5,632 | +1.8 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) 💤 | 11,065 | 1,807 | +1.3 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,976 | 988 | +21.5 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,703 | 1,778 | +39.3 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10,632 | 776 | +41.7 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) 💤 | 10,363 | 825 | +3.5 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) 💤 | 10,349 | 7,641 | +0.8 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 10,349 | 1,318 | +71.6 |
| [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) | 10,198 | 1,874 | +134.6 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) 💤 | 10,144 | 1,112 | +4.3 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) 💤 | 9,864 | 341 | +6.9 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,825 | 721 | +16.2 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) 💤 | 9,738 | 727 | +0.9 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) 💤 | 8,921 | 913 | — |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,842 | 1,092 | +33.3 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) 💤 | 8,748 | 853 | +1.9 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) 💤 | 8,455 | 648 | +1.0 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,431 | 740 | +14.0 |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | 8,383 | 533 | +29.0 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) 💤 | 8,125 | 197 | +0.3 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) 💤 | 7,593 | 1,136 | — |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,311 | 639 | +23.7 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) 💤 | 7,190 | 568 | +3.7 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) 💤 | 7,158 | 596 | +2.6 |
| [steipete/summarize](https://github.com/steipete/summarize) 💤 | 6,873 | 463 | +4.7 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) 💤 | 6,850 | 379 | +2.3 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) 💤 | 6,622 | 252 | +3.7 |
| [microsoft/fara](https://github.com/microsoft/fara) 💤 | 6,259 | 609 | +1.3 |
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
