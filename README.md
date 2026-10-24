# 🚀 Rising Repos Tracker

> Automatically tracks daily GitHub stats (stars, forks, issues, velocity) for rising open source repos.

[![Maintained by Telosignal](https://img.shields.io/badge/Maintained%20by-Telosignal-green)](https://www.telosignal.com/)
![Last updated](https://img.shields.io/github/last-commit/patrick-creates/rising-repos-tracker?label=last+updated&color=238636)
![Repos tracked](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/patrick-creates/rising-repos-tracker/main/repos.json&query=%24.length&label=repos+tracked&color=1f6feb)
![Collect](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/collect.yml?label=collect&logo=github-actions&logoColor=white)
![Discover](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/discover.yml?label=discover&logo=github-actions&logoColor=white)
![Summarize](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/summarize.yml?label=summarize&logo=github-actions&logoColor=white)
![Screenshot](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/screenshot.yml?label=screenshot&logo=github-actions&logoColor=white)
![License](https://img.shields.io/github/license/patrick-creates/rising-repos-tracker)

**[→ View Live Dashboard](https://patrick-creates.github.io/rising-repos-tracker/)**

Built and maintained by [Telosignal](https://www.telosignal.com/).

![Dashboard preview](./preview.png)

<!-- AUTOGEN-STATS-START -->
## 📊 Current snapshot

> Auto-updated daily — last refreshed 2026-10-24

| Metric | Value |
|---|---|
| Repos tracked | **220** |
| Total stars | **11,548,144** |
| Total forks | **1,695,942** |
| Fastest growing | **rea** (+20071.3/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 375,084 | +20071.3 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 40,130 | +2716.4 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 83,917 | +1355.3 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 175,065 | +1024.6 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 104,285 | +833.7 |

### 🆕 Recently added

- [paperclipai/paperclip](https://github.com/paperclipai/paperclip) — added 2026-10-19 — The open-source app everyone uses to manage agents at work
- [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) — added 2026-10-19 — 在 dsh 里装上这个插件即可，无需登录、注册或填 API Key，就能使用包括 DeepSeek V4.1 Flash、Kimi K3 在内的前沿模型——完全免费，不限量。 All you do is install this plugin in dsh: no login, no sign-up, no API key — the frontier models are just there, DeepSeek V4.1 Flash and Kimi K3 among them. Completely free, with no usage cap.
- [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) — added 2026-10-19 — Turbocharge Claude Code, Cursor, Codex, Gemini & every coding agent: faster, cheaper, with contextual understanding specific to your codebase.
<!-- AUTOGEN-STATS-END -->

<!-- AUTOGEN-DIAGRAM-START -->
## 🔄 How it works

```mermaid
graph LR
    repos[("repos.json")]:::data
    history[("data/[owner]/[repo]/<br/>history.json")]:::data
    summary[("data/[owner]/[repo]/<br/>summary.json")]:::data
    readme[("README.md")]:::data
    preview[("preview.png")]:::data
    dashboard["index.html<br/>(GitHub Pages)"]:::output
    collect_yml["Collect Repo Stats<br/><i>Daily 05:17 UTC</i>"]:::workflow
    discover_yml["Discover Trending Repos<br/><i>Monday 04:43 UTC</i>"]:::workflow
    screenshot_yml["Screenshot Dashboard<br/><i>after collect repo stats</i>"]:::workflow
    summarize_yml["Summarize Repos<br/><i>after discover trending repos</i>"]:::workflow
    repos --> collect_yml
    collect_yml --> history
    collect_yml --> readme
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 392,910 | 82,580 | +130.7 |
| [morluto/rea](https://github.com/morluto/rea) | 375,084 | 93,797 | +20071.3 |
| [obra/superpowers](https://github.com/obra/superpowers) | 304,396 | 27,110 | +555.0 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 287,563 | 42,635 | +649.5 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 287,563 | 42,635 | +627.2 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 256,632 | 56,117 | +662.1 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 191,875 | 14,313 | +419.9 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,722 | 45,896 | +21.0 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 175,065 | 9,541 | +1024.6 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 174,318 | 22,274 | +74.1 |
| [langgenius/dify](https://github.com/langgenius/dify) | 159,400 | 25,187 | +110.8 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 156,615 | 22,791 | +120.3 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 148,351 | 24,897 | +71.4 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 148,191 | 9,753 | +466.3 |
| [github/spec-kit](https://github.com/github/spec-kit) | 142,646 | 12,773 | +273.1 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 139,614 | 14,788 | +376.3 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 134,069 | 12,804 | +419.9 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 122,048 | 64,675 | +68.9 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 114,692 | 6,612 | +334.5 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 106,710 | 17,728 | +460.8 |
| [stablyai/orca](https://github.com/stablyai/orca) | 104,285 | 6,584 | +833.7 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 103,658 | 11,863 | +374.1 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 102,653 | 9,069 | +166.3 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 101,761 | 6,871 | +492.1 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 101,463 | 8,951 | +565.1 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 99,354 | 12,991 | +220.1 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 95,274 | 23,876 | +93.8 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 91,700 | 12,166 | +111.7 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 89,384 | 13,723 | +220.2 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,885 | 58,733 | +5.3 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 88,465 | 5,973 | +559.6 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 84,418 | 5,359 | +219.1 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 84,386 | 10,469 | +212.1 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 83,917 | 9,265 | +1355.3 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 83,458 | 16,018 | +39.4 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 80,538 | 11,762 | +621.7 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,480 | 8,719 | +30.1 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 79,130 | 12,645 | +113.5 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 78,870 | 9,260 | +262.1 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 78,492 | 7,271 | +88.0 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 77,793 | 9,305 | +109.5 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 77,680 | 6,034 | +378.0 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 77,680 | 6,034 | +256.3 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 76,897 | 14,225 | +199.1 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 76,897 | 14,225 | +138.6 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,788 | 12,967 | +20.0 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 72,926 | 12,808 | +321.1 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 72,877 | 4,979 | +151.5 |
| [usestrix/strix](https://github.com/usestrix/strix) | 71,524 | 7,971 | +316.0 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 71,284 | 9,226 | +371.2 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 71,043 | 6,417 | +329.6 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,303 | 5,781 | +75.3 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 70,120 | 11,354 | +187.0 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 67,955 | 6,759 | +90.9 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 66,963 | 55,587 | +185.0 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,917 | 13,462 | +4.3 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 65,244 | 5,660 | +236.0 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 64,234 | 19,933 | +414.1 |
| [tw93/Pake](https://github.com/tw93/Pake) | 62,285 | 12,822 | +84.9 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 61,941 | 12,629 | +91.5 |
| [blader/humanizer](https://github.com/blader/humanizer) | 60,101 | 4,759 | +291.8 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 59,723 | 7,576 | +46.1 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 58,421 | 7,328 | +202.8 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 56,387 | 4,861 | +77.3 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 56,281 | 8,318 | +171.3 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 56,118 | 8,578 | +140.6 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 55,648 | 6,378 | +496.8 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,522 | 25,079 | +16.5 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,610 | 6,237 | +30.1 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 54,328 | 4,786 | +230.9 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 54,066 | 6,497 | +89.2 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 53,663 | 4,116 | +157.0 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,473 | 10,520 | +96.0 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 50,604 | 12,244 | +100.3 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 49,997 | 3,536 | +111.1 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,731 | 5,102 | +30.0 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,317 | 8,672 | +41.7 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 48,424 | 7,038 | +64.1 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 48,424 | 7,038 | +52.3 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 48,176 | 3,526 | +347.2 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,535 | 10,408 | +18.7 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 47,374 | 3,887 | +228.6 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 46,241 | 9,509 | +57.7 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,241 | 9,509 | +46.8 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 45,605 | 3,629 | +301.9 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 45,605 | 3,629 | +266.0 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 44,770 | 2,751 | +43.5 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 44,218 | 4,647 | +104.9 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 43,806 | 7,521 | +67.6 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 43,106 | 3,158 | +65.6 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,284 | 4,176 | +59.5 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,128 | 4,287 | +13.4 |
| [wshobson/agents](https://github.com/wshobson/agents) | 41,621 | 4,414 | +37.4 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 41,111 | 3,566 | +42.4 |
| [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) | 41,111 | 3,566 | +4.1 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,111 | 3,566 | +3.3 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 40,712 | 3,292 | +111.5 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 40,365 | 5,207 | +43.2 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,222 | 3,598 | +35.5 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 40,130 | 1,151 | +2716.4 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,810 | 6,240 | +4.0 |
| [google/langextract](https://github.com/google/langextract) | 39,021 | 2,726 | +16.2 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,319 | 2,470 | +78.1 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 37,819 | 3,386 | +25.0 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 37,254 | 5,453 | +154.7 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,235 | 6,889 | +19.9 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 36,472 | 5,896 | +185.8 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 36,417 | 4,065 | +180.8 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 36,345 | 4,119 | +89.7 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 36,030 | 3,204 | +139.3 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,951 | 2,476 | +119.0 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 35,924 | 3,800 | +181.9 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 35,260 | 4,740 | +144.8 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 34,925 | 4,251 | +135.5 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 34,127 | 9,130 | +41.3 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,127 | 9,130 | +25.4 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 33,801 | 1,714 | +341.7 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,742 | 3,500 | +44.1 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,034 | 4,985 | +9.4 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 32,382 | 2,205 | +218.0 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,356 | 2,958 | +105.7 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 32,041 | 2,210 | +111.2 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 31,829 | 1,952 | +35.2 |
| [decolua/9router](https://github.com/decolua/9router) | 31,324 | 6,049 | +105.0 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,602 | 2,997 | +49.3 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 30,543 | 4,300 | +46.3 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 29,883 | 2,899 | +205.5 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 29,845 | 2,637 | +58.1 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,559 | 2,641 | +84.0 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 28,838 | 1,324 | +30.1 |
| [voideditor/void](https://github.com/voideditor/void) | 28,733 | 2,659 | — |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,442 | 3,033 | +11.9 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,380 | 2,575 | +39.1 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 27,660 | 2,474 | +177.8 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,468 | 4,055 | +7.3 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,552 | 1,125 | +7.7 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 25,223 | 2,873 | +312.5 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,080 | 3,121 | +51.1 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 24,768 | 2,841 | +118.3 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 24,726 | 3,370 | +151.8 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,028 | 2,054 | +48.8 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,777 | 802 | +40.6 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 22,775 | 2,149 | +61.1 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,422 | 1,710 | +3.0 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,759 | 2,879 | +8.2 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,754 | 3,134 | +5.8 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 21,619 | 2,280 | +43.3 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,546 | 3,466 | +49.5 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 21,238 | 2,378 | +103.2 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,170 | 2,455 | +124.9 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 21,151 | 1,860 | +100.3 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,138 | 1,949 | +24.4 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 19,955 | 2,876 | +76.8 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,737 | 1,202 | +11.4 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,566 | 2,501 | +28.2 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,295 | 1,720 | +51.0 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,151 | 2,772 | +34.8 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,798 | 1,692 | +11.4 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,586 | 1,834 | +26.6 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,220 | 2,285 | +3.0 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 17,988 | 1,488 | +44.6 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,741 | 1,790 | +37.1 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 17,707 | 7,492 | — |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,146 | 3,699 | +14.5 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,012 | 1,767 | +7.3 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,012 | 1,708 | +17.6 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,857 | 2,473 | +55.3 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 16,731 | 554 | +262.9 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,542 | 2,424 | +18.2 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,855 | 1,787 | +5.9 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 15,507 | 1,373 | +28.6 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,209 | 1,542 | +7.9 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,141 | 8,602 | +15.4 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,911 | 3,270 | +6.1 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,561 | 1,089 | +5.3 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,715 | 1,444 | +23.0 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,582 | 947 | +33.1 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,383 | 594 | +18.0 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 13,221 | 1,564 | +36.7 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 13,067 | 2,659 | +34.4 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,067 | 2,659 | +34.0 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,053 | 2,649 | +26.0 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,065 | 1,091 | +17.4 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,564 | 892 | +28.1 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 11,526 | 1,430 | +24.2 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,526 | 1,430 | +11.6 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,426 | 725 | +44.9 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,190 | 881 | +35.5 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,118 | 5,643 | +4.3 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,028 | 1,801 | +1.3 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 10,901 | 1,398 | +172.0 |
| [trailhq/Graft](https://github.com/trailhq/Graft) | 10,705 | 956 | +77.9 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 10,705 | 956 | +55.8 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 10,688 | 1,433 | +99.9 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,347 | 917 | +36.5 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,325 | 7,683 | +3.9 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,264 | 828 | +11.3 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,016 | 1,107 | +7.8 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,711 | 730 | +3.7 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,670 | 323 | +28.8 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 9,477 | 683 | +69.9 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 9,455 | 2,035 | +17.2 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 9,385 | 681 | +43.6 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,385 | 681 | +42.5 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,915 | 907 | +2.8 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,699 | 841 | — |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,424 | 650 | +0.9 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,117 | 195 | +0.8 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,027 | 691 | +24.0 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 7,974 | 1,030 | +26.4 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,600 | 1,140 | +0.6 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,088 | 563 | +15.7 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 7,080 | 583 | +9.1 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,080 | 583 | +2.4 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,781 | 372 | +9.5 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,737 | 453 | +3.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,521 | 247 | +3.9 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,222 | 603 | +2.2 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,078 | 420 | +0.1 |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 88 | 4 | — |
<!-- AUTOGEN-REPOS-END -->

---

## What it does

- Collects daily snapshots of stars, forks, watchers and open issues for every tracked repo
- Discovers new trending repos automatically every Monday using the GitHub Search API
- Generates AI summaries (use cases, similar tools, tags) for each tracked repo via GitHub Models
- Stores all history as plain JSON — no database, no backend
- Renders a live dashboard via GitHub Pages — updates daily, zero maintenance

## Tracked repos

Data lives in [`data/`](./data) — one folder per repo, one `history.json` per entry.  
The full watch list is in [`repos.json`](./repos.json).

## Fork & use it for yourself

This is my personal tracker — the watch list reflects what I find interesting. If you want to track different repos, the best path is to **fork this repo and run your own**.

### Setup

1. Fork this repo to your account
2. Replace the contents of [`repos.json`](./repos.json) with the repos you want to track (or just leave one entry — `discover.yml` will auto-add more every Monday)
3. Go to **Settings → Pages** and enable GitHub Pages from the `main` branch
4. Go to **Actions** and run **Collect Repo Stats** once manually to seed your first data point
5. Your dashboard will be live at `https://YOUR-USERNAME.github.io/rising-repos-tracker/`

That's it — daily collection and weekly discovery run automatically on schedule. Zero ongoing maintenance.

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
  "notes": "why you're tracking this"
}
```

The next daily collect run picks it up automatically.

## Stack

- **GitHub Actions** — scheduling and automation
- **GitHub Pages** — dashboard hosting
- **GitHub API** — data source
- **GitHub Models** — free AI summaries (gpt-4o-mini)
- **Chart.js** — star growth visualization
- **Mermaid** — architecture diagram (rendered by GitHub)
- No dependencies, no build step, no database

## License

MIT
