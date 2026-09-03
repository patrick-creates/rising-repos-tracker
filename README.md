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

> Auto-updated daily — last refreshed 2026-09-03

| Metric | Value |
|---|---|
| Repos tracked | **187** |
| Total stars | **9,175,336** |
| Total forks | **1,356,839** |
| Fastest growing | **ponytail** (+1021.3/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 122,575 | +1021.3 |
| 2 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 60,595 | +821.1 |
| 3 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 240,433 | +817.6 |
| 4 | [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 44,474 | +811.6 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 60,434 | +811.0 |

### 🆕 Recently added

- [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) — added 2026-08-31 — A trilingual (繁中 / English / 简中) learning roadmap for agentic AI: from LLM basics to multi-agent systems, with 240+ curated resources and hands-on examples. 中文 AI agent 學習地圖。
- [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) — added 2026-08-24 — Turn any technical book PDF into a Claude Code skill — ready to study, reference, and use while you work.
- [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) — added 2026-08-24 — Strip multi-vendor AI provenance marks: Unicode text hygiene, statistical rewrite hooks, and C2PA/metadata from PNG/JPEG/SVG/PDF/DOCX/HTML/MD
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 388,695 | 81,621 | +152.4 |
| [obra/superpowers](https://github.com/obra/superpowers) | 281,037 | 25,180 | +622.7 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 246,650 | 37,174 | +580.5 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 246,650 | 37,174 | +538.8 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 240,433 | 49,226 | +817.6 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,093 | 46,039 | +24.9 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 177,896 | 13,100 | +485.7 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 168,673 | 21,746 | +57.5 |
| [langgenius/dify](https://github.com/langgenius/dify) | 154,306 | 24,393 | +115.8 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 150,781 | 22,032 | +122.9 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 145,566 | 24,291 | +79.0 |
| [github/spec-kit](https://github.com/github/spec-kit) | 133,203 | 11,985 | +312.8 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 130,843 | 8,994 | +525.9 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 124,486 | 13,325 | +412.3 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 122,575 | 6,625 | +1021.3 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 119,054 | 62,727 | +73.5 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 114,147 | 11,093 | +459.2 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 102,843 | 5,978 | +382.7 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 93,748 | 10,814 | +459.0 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 93,064 | 8,181 | +156.5 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 92,408 | 12,262 | +262.5 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 90,864 | 21,634 | +97.2 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,691 | 59,145 | +6.1 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 86,046 | 11,285 | +112.2 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 85,444 | 12,880 | +287.7 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 83,862 | 5,735 | +568.6 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 82,186 | 15,852 | +45.9 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 78,381 | 4,951 | +266.7 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 77,980 | 8,566 | +30.4 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 77,697 | 6,664 | +623.2 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 76,702 | 9,534 | +241.1 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 75,966 | 12,236 | +137.9 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 75,713 | 12,796 | +19.5 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 75,534 | 6,860 | +102.2 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 74,358 | 8,538 | +129.4 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 69,977 | 13,242 | +229.0 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 68,702 | 5,321 | +506.7 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 68,702 | 5,321 | +312.3 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 68,637 | 5,638 | +95.5 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 67,120 | 4,621 | +169.7 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,630 | 13,509 | +3.6 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 65,572 | 6,524 | +111.8 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 64,554 | 54,111 | +254.6 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 64,066 | 10,511 | +219.3 |
| [tw93/Pake](https://github.com/tw93/Pake) | 61,252 | 12,594 | +115.5 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 61,089 | 5,335 | +326.6 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 60,595 | 8,418 | +821.1 |
| [stablyai/orca](https://github.com/stablyai/orca) | 60,434 | 4,066 | +811.0 |
| [usestrix/strix](https://github.com/usestrix/strix) | 60,266 | 6,587 | +367.6 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 58,819 | 7,546 | +59.4 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 57,916 | 11,127 | +97.5 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 55,857 | 6,975 | +424.3 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,402 | 24,970 | +23.2 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 53,427 | 4,658 | +86.4 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 53,399 | 6,123 | +33.1 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 52,198 | 6,495 | +246.6 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 52,163 | 9,040 | +274.5 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 50,784 | 3,560 | +100.9 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 50,094 | 7,645 | +152.0 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 48,715 | 10,026 | +122.8 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 48,693 | 4,919 | +34.6 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 47,777 | 3,423 | +147.8 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 47,676 | 8,413 | +46.3 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 47,174 | 11,252 | +117.0 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,769 | 10,335 | +20.5 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 46,697 | 7,271 | +162.3 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 45,894 | 6,707 | +71.4 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 45,894 | 6,707 | +54.8 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 45,798 | 3,591 | +160.6 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 44,474 | 4,914 | +811.6 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 43,774 | 4,202 | +209.3 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 42,756 | 8,846 | +52.3 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 41,990 | 3,414 | +323.6 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 41,724 | 2,713 | +35.3 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,631 | 4,223 | +15.1 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 40,979 | 6,914 | +76.2 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 40,907 | 3,540 | +61.8 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 40,445 | 13,724 | +362.7 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 39,963 | 2,867 | +67.8 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,687 | 6,238 | +5.5 |
| [wshobson/agents](https://github.com/wshobson/agents) | 39,378 | 4,198 | +34.1 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 38,968 | 3,497 | +41.0 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 38,588 | 4,880 | +47.3 |
| [google/langextract](https://github.com/google/langextract) | 38,525 | 2,706 | +19.5 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 36,713 | 6,852 | +24.8 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 36,653 | 3,290 | +26.1 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 35,853 | 4,001 | +72.8 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,367 | 2,362 | +182.1 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 35,270 | 2,701 | +114.3 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 34,939 | 2,555 | +382.1 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 34,939 | 2,555 | +359.7 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 34,835 | 3,055 | +213.2 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 34,771 | 2,184 | +82.7 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 33,717 | 4,924 | +209.1 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,715 | 4,930 | +11.1 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 32,530 | 3,348 | +55.1 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 32,355 | 5,288 | +266.9 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 32,156 | 9,008 | +42.8 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 32,070 | 3,868 | +191.1 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 31,138 | 2,837 | +157.8 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 30,711 | 1,802 | +42.5 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 30,235 | 3,338 | +72.0 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 29,778 | 2,029 | +362.4 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 29,183 | 2,936 | +208.0 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 28,958 | 2,598 | +130.0 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 28,923 | 2,834 | +58.9 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 28,873 | 4,060 | +54.2 |
| [voideditor/void](https://github.com/voideditor/void) | 28,812 | 2,644 | +0.1 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 28,029 | 2,895 | +320.0 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,995 | 2,996 | +13.7 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 27,959 | 2,416 | +70.5 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 27,805 | 1,288 | +35.8 |
| [decolua/9router](https://github.com/decolua/9router) | 26,976 | 4,940 | +117.6 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 26,731 | 2,304 | +45.7 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,151 | 4,025 | +7.9 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 25,779 | 2,405 | +328.1 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,311 | 1,123 | +9.4 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,395 | 1,724 | +4.5 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,052 | 769 | +60.9 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 21,860 | 1,626 | +201.2 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 21,843 | 2,808 | +24.7 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,541 | 3,116 | +6.8 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,390 | 2,842 | +8.7 |
| [jundot/omlx](https://github.com/jundot/omlx) | 21,349 | 1,814 | +59.0 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 21,246 | 3,067 | +61.9 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 20,875 | 1,831 | +77.7 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 20,376 | 2,188 | +64.8 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 20,326 | 1,475 | +35.7 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 20,248 | 3,276 | +66.3 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 20,175 | 2,331 | +262.3 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,575 | 1,196 | +16.6 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 19,247 | 1,842 | +28.8 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 19,029 | 2,182 | +206.2 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 18,863 | 2,449 | +38.3 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,164 | 2,290 | +4.2 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 18,017 | 2,511 | +43.5 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,966 | 1,580 | +8.2 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 17,876 | 1,751 | +158.9 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 17,343 | 1,683 | +28.2 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 16,966 | 1,488 | +62.3 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,816 | 1,760 | +9.4 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 16,360 | 3,308 | +13.9 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 16,208 | 1,585 | +20.7 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,141 | 2,419 | +90.9 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 15,682 | 1,364 | +44.1 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 15,621 | 2,294 | +18.3 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,544 | 1,779 | +5.6 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,893 | 1,514 | +9.1 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,870 | 3,289 | +9.8 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 14,721 | 1,468 | +82.0 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,375 | 1,066 | +6.5 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,273 | 8,543 | +12.8 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 13,693 | 1,243 | +23.2 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 12,937 | 1,335 | +29.0 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 12,744 | 558 | +22.2 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 12,718 | 1,270 | +189.4 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 12,671 | 913 | +44.8 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 12,104 | 1,475 | +49.5 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 11,513 | 2,393 | +22.8 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 11,307 | 2,359 | +34.3 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 11,307 | 2,359 | +33.4 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 11,165 | 1,020 | +17.2 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,131 | 719 | +162.4 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,011 | 5,668 | +6.0 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,004 | 1,803 | +2.0 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 10,803 | 1,307 | +32.9 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 10,778 | 805 | +39.1 |
| [openai/codex-security](https://github.com/openai/codex-security) | 10,347 | 750 | +66.6 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,291 | 7,755 | +6.4 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,024 | 810 | +17.1 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 9,857 | 845 | +62.9 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,617 | 720 | +4.5 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 9,059 | 841 | +3.5 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,034 | 284 | +44.8 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,891 | 869 | +4.8 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,363 | 643 | +0.6 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,088 | 194 | +1.1 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,602 | 1,143 | +1.2 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 7,367 | 526 | +52.0 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 6,880 | 549 | +14.9 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 6,628 | 894 | +25.7 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,592 | 445 | +3.5 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,562 | 358 | +15.4 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,344 | 244 | +4.4 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,171 | 603 | +3.3 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,084 | 422 | +0.3 |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 87 | 5 | — |
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
