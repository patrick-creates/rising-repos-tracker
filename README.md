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

> Auto-updated daily — last refreshed 2026-11-12

| Metric | Value |
|---|---|
| Repos tracked | **217** |
| Total stars | **11,604,463** |
| Total forks | **1,687,827** |
| Fastest growing | **rea** (+10325.4/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 454,316 | +10325.4 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 70,996 | +1852.0 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 108,826 | +1342.5 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 189,534 | +989.6 |
| 5 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 108,731 | +868.7 |

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
| [morluto/rea](https://github.com/morluto/rea) | 454,316 | 111,624 | +10325.4 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 394,404 | 82,877 | +125.3 |
| [obra/superpowers](https://github.com/obra/superpowers) | 316,578 | 28,168 | +566.4 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 301,722 | 44,512 | +659.4 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 262,882 | 59,142 | +627.5 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 195,050 | 14,717 | +393.7 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 189,534 | 10,555 | +989.6 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 188,005 | 45,869 | +20.3 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 176,975 | 22,570 | +80.9 |
| [langgenius/dify](https://github.com/langgenius/dify) | 161,039 | 25,463 | +108.3 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 158,463 | 23,043 | +117.9 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 153,886 | 10,103 | +448.6 |
| [github/spec-kit](https://github.com/github/spec-kit) | 149,479 | 13,431 | +282.1 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,402 | 25,112 | +69.8 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 148,489 | 15,709 | +385.8 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 146,498 | 14,039 | +461.1 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 123,403 | 66,322 | +69.1 |
| [stablyai/orca](https://github.com/stablyai/orca) | 123,053 | 7,788 | +856.4 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 119,291 | 6,932 | +324.6 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 116,427 | 10,102 | +224.3 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 113,963 | 7,668 | +509.5 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 113,310 | 18,804 | +371.0 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 111,252 | 9,976 | +559.1 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 108,826 | 12,050 | +1342.5 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 108,731 | 6,468 | +868.7 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 107,318 | 12,205 | +354.7 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 104,129 | 13,555 | +223.6 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 96,815 | 24,727 | +92.5 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 95,824 | 6,552 | +473.4 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 93,318 | 12,472 | +108.9 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 90,520 | 14,040 | +203.1 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,946 | 58,538 | +5.1 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 86,840 | 10,830 | +203.3 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 86,762 | 13,249 | +578.4 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 86,329 | 5,526 | +206.5 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 85,145 | 16,247 | +44.5 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 83,225 | 7,680 | +367.3 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 82,120 | 15,075 | +207.2 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 81,540 | 9,605 | +201.3 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 80,327 | 12,839 | +108.1 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 80,006 | 8,783 | +29.8 |
| [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) | 79,899 | 10,724 | +382.7 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 79,441 | 6,214 | +341.9 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 79,375 | 7,395 | +83.6 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 79,328 | 9,676 | +106.4 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 78,554 | 13,987 | +318.2 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 77,059 | 13,056 | +19.4 |
| [usestrix/strix](https://github.com/usestrix/strix) | 75,110 | 8,491 | +301.2 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 74,695 | 5,119 | +145.5 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 71,369 | 23,095 | +408.1 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 71,252 | 11,478 | +173.4 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 71,000 | 57,093 | +188.1 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 70,996 | 1,925 | +1852.0 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,871 | 5,843 | +70.5 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,998 | 6,866 | +87.1 |
| [blader/humanizer](https://github.com/blader/humanizer) | 68,276 | 5,357 | +350.3 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 67,399 | 5,919 | +221.2 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 67,045 | 13,458 | +4.5 |
| [tw93/Pake](https://github.com/tw93/Pake) | 63,425 | 12,986 | +82.3 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 63,161 | 13,220 | +88.6 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,532 | 7,666 | +45.7 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 60,496 | 7,601 | +191.9 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 59,900 | 8,754 | +173.5 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 58,376 | 8,949 | +138.2 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 57,850 | 6,715 | +433.9 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 57,843 | 4,943 | +77.2 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 56,928 | 4,994 | +203.8 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 56,640 | 4,314 | +156.9 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,571 | 25,094 | +15.0 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 55,152 | 4,593 | +85.8 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 55,131 | 6,297 | +29.8 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 52,568 | 10,819 | +91.2 |
| [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills) | 51,830 | 3,672 | +109.4 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 51,821 | 12,631 | +96.3 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 50,519 | 4,079 | +295.5 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 50,087 | 5,156 | +28.8 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 50,039 | 8,732 | +41.3 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 49,970 | 3,695 | +309.9 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 49,592 | 7,182 | +63.8 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 48,556 | 4,019 | +205.3 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,894 | 10,424 | +18.8 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 47,033 | 9,680 | +55.9 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 46,994 | 4,885 | +109.7 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 46,755 | 3,529 | +80.3 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 45,929 | 2,771 | +45.5 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,851 | 7,731 | +66.0 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 44,766 | 1,788 | +393.5 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,664 | 4,217 | +48.1 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,437 | 4,487 | +38.0 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,312 | 4,328 | +13.0 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 42,069 | 3,463 | +106.6 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,176 | 3,571 | +38.0 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 41,073 | 5,342 | +42.5 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,785 | 3,642 | +34.9 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 40,370 | 4,628 | +104.4 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,861 | 6,230 | +3.8 |
| [google/langextract](https://github.com/google/langextract) | 39,304 | 2,753 | +16.1 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 39,063 | 5,807 | +147.1 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,943 | 2,520 | +72.8 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 38,797 | 4,421 | +173.4 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,391 | 3,439 | +25.6 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 38,100 | 6,195 | +171.8 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 37,654 | 3,993 | +160.3 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 37,649 | 3,281 | +132.5 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,414 | 6,893 | +18.7 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 37,295 | 5,158 | +140.0 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 36,153 | 2,521 | +105.9 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,969 | 4,390 | +124.8 |
| [yetone/magpie](https://github.com/yetone/magpie) | 35,286 | 3,134 | +771.4 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,343 | 9,124 | +37.9 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,240 | 3,586 | +42.0 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 33,956 | 2,327 | +109.9 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,338 | 5,007 | +10.1 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 33,229 | 2,272 | +192.5 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,730 | 2,974 | +94.8 |
| [decolua/9router](https://github.com/decolua/9router) | 32,302 | 6,332 | +98.2 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,274 | 1,994 | +33.9 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 31,241 | 4,414 | +45.1 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 31,036 | 3,038 | +46.1 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,815 | 3,007 | +181.1 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,316 | 2,694 | +54.1 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 30,173 | 2,748 | +169.8 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,668 | 2,640 | +74.1 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 29,500 | 3,436 | +275.6 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,178 | 1,338 | +28.6 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,778 | 2,655 | +36.2 |
| [voideditor/void](https://github.com/voideditor/void) | 28,713 | 2,658 | — |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,666 | 3,060 | +11.9 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 28,471 | 3,663 | +196.4 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 27,443 | 3,840 | +148.9 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 27,228 | 3,087 | +121.0 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,581 | 4,072 | +7.1 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,631 | 1,125 | +7.2 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 25,600 | 2,260 | +143.4 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,460 | 3,166 | +44.8 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 24,359 | 2,793 | +112.2 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,560 | 2,123 | +46.2 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 23,130 | 2,225 | +55.4 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,989 | 811 | +36.4 |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | 22,520 | 1,670 | +809.0 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,437 | 1,700 | +2.8 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 22,201 | 2,328 | +41.2 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 22,039 | 3,535 | +46.4 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,886 | 2,895 | +8.0 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,818 | 3,136 | +5.5 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,714 | 2,526 | +109.9 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | 21,065 | 2,840 | +183.0 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,404 | 1,967 | +23.1 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 20,058 | 8,717 | +56.9 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,927 | 1,800 | +47.4 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,842 | 2,519 | +26.4 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,834 | 1,202 | +10.6 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,490 | 2,830 | +32.5 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 19,082 | 1,546 | +46.4 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 19,043 | 1,886 | +26.2 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,948 | 1,722 | +10.9 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 18,928 | 1,393 | +189.4 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 18,399 | 635 | +206.5 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,252 | 2,279 | +2.8 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,558 | 3,969 | +15.5 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,302 | 1,760 | +17.2 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 17,100 | 2,515 | +49.0 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 17,094 | 2,518 | +19.6 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,063 | 1,766 | +6.7 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 16,245 | 1,457 | +30.0 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,992 | 1,801 | +6.1 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,415 | 8,620 | +15.2 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,301 | 1,555 | +7.5 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 15,012 | 1,722 | +45.2 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,920 | 3,264 | +5.3 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,617 | 1,099 | +5.0 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,892 | 975 | +30.7 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,780 | 1,478 | +20.3 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,711 | 2,792 | +34.3 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,584 | 610 | +16.9 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,541 | 2,747 | +26.0 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 12,820 | 1,881 | +16.2 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,371 | 1,118 | +17.2 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 12,222 | 1,703 | +92.9 |
| [openai/codex-security](https://github.com/openai/codex-security) | 12,120 | 958 | +38.0 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,982 | 1,675 | +101.5 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,959 | 3,267 | +65.6 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,779 | 908 | +25.6 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,750 | 1,462 | +22.4 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,439 | 726 | +35.3 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,224 | 1,000 | +61.6 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,154 | 5,631 | +4.0 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,055 | 1,805 | +1.3 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,912 | 983 | +35.5 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,492 | 1,735 | +47.8 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10,345 | 746 | +59.7 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,343 | 7,653 | +3.5 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,334 | 825 | +10.2 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,116 | 1,108 | +6.8 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 9,932 | 1,235 | +94.4 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,824 | 330 | +25.6 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,746 | 718 | +38.6 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,726 | 728 | +3.4 |
| [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) | 9,052 | 1,627 | +156.3 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,926 | 912 | +2.4 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,745 | 1,083 | +30.1 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,742 | 850 | — |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,453 | 648 | +1.0 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,332 | 731 | +21.7 |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | 8,191 | 518 | +52.0 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,125 | 197 | +0.8 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,601 | 1,135 | +0.5 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,217 | 631 | +30.8 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,162 | 570 | +11.4 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,137 | 591 | +8.1 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,833 | 378 | +8.4 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,798 | 454 | +3.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,599 | 249 | +4.0 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,254 | 605 | +2.1 |
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
