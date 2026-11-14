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

> Auto-updated daily — last refreshed 2026-11-14

| Metric | Value |
|---|---|
| Repos tracked | **217** |
| Total stars | **11,651,080** |
| Total forks | **1,693,619** |
| Fastest growing | **rea** (+9832.5/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 458,700 | +9832.5 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 73,675 | +1812.6 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 110,315 | +1324.9 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 190,592 | +983.3 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 124,648 | +855.5 |

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
| [morluto/rea](https://github.com/morluto/rea) | 458,700 | 112,479 | +9832.5 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 394,429 | 82,889 | +124.1 |
| [obra/superpowers](https://github.com/obra/superpowers) | 317,421 | 28,268 | +564.4 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 302,647 | 44,644 | +657.3 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 263,286 | 59,328 | +622.9 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 195,320 | 14,748 | +390.9 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 190,592 | 10,649 | +983.3 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 188,024 | 45,863 | +20.2 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 177,194 | 22,587 | +81.2 |
| [langgenius/dify](https://github.com/langgenius/dify) | 161,145 | 25,485 | +107.7 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 158,630 | 23,062 | +117.5 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 154,355 | 10,123 | +446.2 |
| [github/spec-kit](https://github.com/github/spec-kit) | 149,754 | 13,448 | +280.5 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,491 | 25,128 | +69.5 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 149,285 | 15,789 | +385.9 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 147,472 | 14,133 | +461.6 |
| [stablyai/orca](https://github.com/stablyai/orca) | 124,648 | 7,898 | +855.5 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 123,480 | 66,390 | +68.8 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 119,783 | 6,982 | +323.7 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 116,960 | 10,152 | +224.8 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 115,312 | 7,733 | +511.4 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 113,802 | 18,884 | +361.4 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 111,683 | 10,012 | +554.8 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 110,315 | 12,226 | +1324.9 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 109,892 | 6,549 | +820.7 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 107,590 | 12,229 | +352.3 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 104,259 | 13,566 | +221.8 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 96,915 | 24,809 | +92.1 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 96,337 | 6,585 | +462.6 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 93,457 | 12,508 | +108.5 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 90,623 | 14,058 | +201.4 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,960 | 58,530 | +5.1 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 87,298 | 13,383 | +573.6 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 86,973 | 10,856 | +201.7 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 86,545 | 5,546 | +205.4 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 85,508 | 16,313 | +46.0 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 84,142 | 7,783 | +368.4 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 82,468 | 15,124 | +206.8 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 81,670 | 9,623 | +194.5 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 80,401 | 12,853 | +107.4 |
| [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) | 80,388 | 10,835 | +380.7 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 80,049 | 8,778 | +29.7 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 79,629 | 6,230 | +338.6 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 79,476 | 7,410 | +83.2 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 79,471 | 9,695 | +106.0 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 78,760 | 14,028 | +315.6 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 77,102 | 13,063 | +19.4 |
| [usestrix/strix](https://github.com/usestrix/strix) | 75,486 | 8,532 | +299.9 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 74,835 | 5,132 | +144.7 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 73,675 | 2,045 | +1812.6 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 72,070 | 57,414 | +192.1 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 71,663 | 23,125 | +403.9 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 71,388 | 11,492 | +172.2 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,906 | 5,843 | +69.9 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 69,049 | 6,872 | +86.4 |
| [blader/humanizer](https://github.com/blader/humanizer) | 69,002 | 5,415 | +350.8 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 67,611 | 5,944 | +219.7 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 67,056 | 13,461 | +4.5 |
| [tw93/Pake](https://github.com/tw93/Pake) | 63,590 | 13,003 | +82.3 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 63,243 | 13,276 | +88.1 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 60,612 | 7,622 | +190.3 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,554 | 7,669 | +45.3 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 60,239 | 8,795 | +173.5 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 58,532 | 8,980 | +137.5 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 57,984 | 6,740 | +427.6 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 57,973 | 4,958 | +77.1 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 57,142 | 5,014 | +201.0 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 56,863 | 4,335 | +156.1 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 55,894 | 4,630 | +88.9 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,570 | 25,093 | +14.8 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 55,185 | 6,300 | +29.8 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 52,778 | 10,895 | +91.4 |
| [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills) | 52,398 | 3,727 | +111.5 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 51,909 | 12,666 | +95.7 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 51,039 | 3,805 | +313.4 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 50,910 | 4,119 | +294.0 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 50,117 | 5,165 | +28.6 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 50,075 | 8,742 | +41.1 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 49,686 | 7,191 | +63.6 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 48,623 | 4,028 | +202.8 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,926 | 10,429 | +18.7 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 47,253 | 4,905 | +109.9 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 47,118 | 9,702 | +55.8 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 46,897 | 3,567 | +80.2 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 46,043 | 2,771 | +45.6 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 45,456 | 1,794 | +388.4 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,950 | 7,757 | +65.7 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,696 | 4,220 | +47.2 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,501 | 4,490 | +37.9 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,329 | 4,331 | +13.0 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 42,224 | 3,483 | +106.3 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,173 | 3,570 | +37.6 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 41,148 | 5,356 | +42.4 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,817 | 3,646 | +34.6 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 40,577 | 4,650 | +104.4 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,862 | 6,230 | +3.7 |
| [google/langextract](https://github.com/google/langextract) | 39,312 | 2,751 | +15.9 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 39,128 | 5,817 | +145.6 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 38,992 | 4,451 | +172.4 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,983 | 2,524 | +72.2 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,413 | 3,443 | +25.4 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 38,202 | 6,215 | +170.0 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 37,829 | 4,024 | +158.5 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 37,734 | 3,285 | +131.3 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,431 | 6,889 | +18.6 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 37,418 | 5,187 | +139.0 |
| [yetone/magpie](https://github.com/yetone/magpie) | 36,370 | 3,255 | +747.3 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 36,134 | 2,552 | +104.5 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 36,118 | 4,421 | +124.1 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,367 | 9,121 | +37.5 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,268 | 3,593 | +41.7 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 34,069 | 2,340 | +109.2 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,362 | 5,018 | +10.2 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 33,278 | 2,273 | +189.9 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,761 | 2,977 | +93.7 |
| [decolua/9router](https://github.com/decolua/9router) | 32,402 | 6,349 | +97.6 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,310 | 1,995 | +33.7 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 31,279 | 4,419 | +44.8 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 31,077 | 3,040 | +45.8 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,897 | 3,025 | +178.9 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,357 | 2,699 | +53.7 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 30,333 | 2,757 | +168.1 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 29,764 | 3,480 | +269.5 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,685 | 2,642 | +73.2 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,200 | 1,337 | +28.4 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 29,185 | 3,709 | +201.6 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,796 | 2,665 | +35.8 |
| [voideditor/void](https://github.com/voideditor/void) | 28,714 | 2,658 | — |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,687 | 3,062 | +11.9 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 27,670 | 3,873 | +147.8 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 27,401 | 3,106 | +120.1 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,590 | 4,062 | +7.1 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 25,966 | 2,305 | +144.7 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,633 | 1,125 | +7.2 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,506 | 3,172 | +44.3 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 24,703 | 2,822 | +113.1 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,626 | 2,127 | +46.0 |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | 23,564 | 1,751 | +694.2 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 23,156 | 2,229 | +54.8 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,998 | 811 | +36.0 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,450 | 1,701 | +2.8 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 22,247 | 2,337 | +40.9 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 22,075 | 3,543 | +46.0 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,899 | 2,893 | +8.0 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,816 | 3,136 | +5.5 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,760 | 2,536 | +108.5 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | 21,318 | 2,874 | +160.4 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,420 | 1,972 | +22.9 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 20,039 | 8,707 | +53.6 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,972 | 1,805 | +46.9 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,879 | 2,523 | +26.3 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,839 | 1,202 | +10.5 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,515 | 2,834 | +32.3 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 19,184 | 1,548 | +46.4 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 19,076 | 1,886 | +26.1 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 19,056 | 1,410 | +176.2 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,952 | 1,721 | +10.8 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 18,867 | 647 | +207.4 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,253 | 2,281 | +2.8 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,571 | 3,980 | +15.4 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,317 | 1,767 | +17.0 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 17,128 | 2,515 | +48.5 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 17,119 | 2,524 | +19.5 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,069 | 1,769 | +6.6 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 16,298 | 1,457 | +30.0 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,999 | 1,801 | +6.1 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,427 | 8,619 | +15.1 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,307 | 1,557 | +7.5 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 15,118 | 1,731 | +45.3 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,925 | 3,267 | +5.3 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,623 | 1,100 | +5.0 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,913 | 976 | +30.4 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,784 | 1,478 | +20.0 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,754 | 2,801 | +34.1 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,597 | 609 | +16.8 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,583 | 2,753 | +25.9 |
| [openai/codex-security](https://github.com/openai/codex-security) | 13,408 | 1,040 | +49.8 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 12,828 | 1,883 | +14.2 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,399 | 1,121 | +17.2 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 12,337 | 1,716 | +91.6 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 12,037 | 1,689 | +97.0 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,945 | 3,256 | +62.5 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,800 | 910 | +25.4 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,770 | 1,467 | +22.2 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,440 | 726 | +34.5 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,266 | 1,005 | +60.3 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,162 | 5,629 | +4.0 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,053 | 1,807 | +1.3 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,932 | 986 | +35.1 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,534 | 1,744 | +44.9 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10,397 | 748 | +58.2 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,347 | 7,655 | +3.5 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,342 | 826 | +10.1 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,121 | 1,109 | +6.6 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 10,099 | 1,269 | +92.6 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,829 | 332 | +25.2 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,769 | 719 | +38.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,730 | 728 | +3.3 |
| [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) | 9,295 | 1,671 | +142.4 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,930 | 913 | +2.4 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,773 | 1,086 | +29.6 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,742 | 850 | — |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,453 | 647 | +1.0 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,347 | 731 | +21.3 |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | 8,240 | 524 | +41.0 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,126 | 197 | +0.8 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,601 | 1,136 | +0.5 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,228 | 634 | +28.1 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,167 | 571 | +11.0 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,146 | 593 | +8.0 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,835 | 379 | +8.3 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,802 | 454 | +3.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,604 | 249 | +3.9 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,255 | 606 | +2.1 |
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
