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

> Auto-updated daily — last refreshed 2026-09-04

| Metric | Value |
|---|---|
| Repos tracked | **187** |
| Total stars | **9,194,757** |
| Total forks | **1,359,307** |
| Fastest growing | **ponytail** (+1028.5/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 124,129 | +1028.5 |
| 2 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 241,142 | +816.6 |
| 3 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 61,012 | +814.3 |
| 4 | [stablyai/orca](https://github.com/stablyai/orca) | 61,336 | +812.5 |
| 5 | [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 44,644 | +797.6 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 388,806 | 81,656 | +152.1 |
| [obra/superpowers](https://github.com/obra/superpowers) | 281,580 | 25,219 | +621.7 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 247,637 | 37,326 | +584.1 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 247,637 | 37,326 | +543.2 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 241,142 | 49,425 | +816.6 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,113 | 46,039 | +24.8 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 178,065 | 13,118 | +483.0 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 169,238 | 21,774 | +62.0 |
| [langgenius/dify](https://github.com/langgenius/dify) | 154,415 | 24,407 | +115.7 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 150,889 | 22,047 | +122.8 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 145,623 | 24,311 | +78.8 |
| [github/spec-kit](https://github.com/github/spec-kit) | 133,400 | 12,006 | +311.7 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 131,019 | 9,006 | +522.7 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 124,832 | 13,374 | +411.7 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 124,129 | 6,696 | +1028.5 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 119,131 | 62,751 | +73.5 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 114,571 | 11,127 | +458.3 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 103,305 | 5,998 | +383.4 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 93,964 | 10,835 | +456.8 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 93,134 | 8,186 | +155.7 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 92,472 | 12,268 | +260.6 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 90,948 | 21,688 | +97.1 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,705 | 59,136 | +6.1 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 86,147 | 11,294 | +112.1 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 85,517 | 12,903 | +285.8 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 84,176 | 5,756 | +565.9 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 82,224 | 15,854 | +45.8 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 78,507 | 4,961 | +265.4 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 78,009 | 8,569 | +30.3 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 77,892 | 6,695 | +618.4 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 76,923 | 9,573 | +240.9 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 76,023 | 12,242 | +137.1 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 75,736 | 12,803 | +19.5 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 75,593 | 6,866 | +101.8 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 74,436 | 8,556 | +128.9 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 70,099 | 13,268 | +228.0 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 68,870 | 5,335 | +502.6 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 68,870 | 5,335 | +310.4 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 68,674 | 5,640 | +94.9 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 67,261 | 4,625 | +169.5 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,637 | 13,509 | +3.6 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 65,602 | 6,530 | +111.0 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 64,601 | 54,158 | +252.6 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 64,139 | 10,524 | +217.9 |
| [stablyai/orca](https://github.com/stablyai/orca) | 61,336 | 4,111 | +812.5 |
| [tw93/Pake](https://github.com/tw93/Pake) | 61,274 | 12,605 | +114.6 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 61,200 | 5,346 | +324.2 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 61,012 | 8,486 | +814.3 |
| [usestrix/strix](https://github.com/usestrix/strix) | 60,462 | 6,604 | +365.8 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 58,835 | 7,547 | +59.0 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 58,010 | 11,158 | +97.4 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 56,059 | 7,008 | +421.0 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,412 | 24,977 | +23.0 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 53,480 | 4,667 | +86.1 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 53,431 | 6,126 | +33.1 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 52,366 | 9,087 | +273.7 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 52,276 | 6,511 | +244.8 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 50,872 | 3,568 | +100.8 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 50,328 | 7,664 | +152.8 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 48,907 | 10,069 | +123.7 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 48,731 | 4,920 | +34.6 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 47,831 | 3,425 | +146.8 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 47,704 | 8,417 | +46.1 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 47,274 | 11,280 | +116.8 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 46,824 | 7,298 | +162.0 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,778 | 10,336 | +20.4 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 46,170 | 3,615 | +166.1 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 45,956 | 6,716 | +71.4 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 45,956 | 6,716 | +55.0 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 44,644 | 4,939 | +797.6 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 43,902 | 4,209 | +208.4 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 42,796 | 8,859 | +52.2 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 42,159 | 3,427 | +321.3 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 41,788 | 2,714 | +35.6 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,636 | 4,225 | +15.0 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 41,033 | 6,928 | +75.9 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 40,912 | 3,545 | +61.2 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 40,660 | 13,835 | +359.9 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 40,000 | 2,868 | +67.5 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,693 | 6,237 | +5.5 |
| [wshobson/agents](https://github.com/wshobson/agents) | 39,401 | 4,201 | +34.0 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 38,993 | 3,496 | +40.9 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 38,627 | 4,883 | +47.3 |
| [google/langextract](https://github.com/google/langextract) | 38,533 | 2,707 | +19.4 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 36,725 | 6,850 | +24.7 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 36,683 | 3,295 | +26.2 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 35,879 | 4,013 | +72.3 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 35,424 | 2,708 | +114.7 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,394 | 2,364 | +180.3 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 35,215 | 2,580 | +380.3 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 35,215 | 2,580 | +357.1 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 34,873 | 3,061 | +211.0 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 34,856 | 2,188 | +82.7 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 33,795 | 4,939 | +207.4 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,722 | 4,931 | +11.0 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 32,556 | 3,350 | +54.8 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 32,472 | 9,029 | +45.7 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 32,417 | 5,296 | +263.9 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 32,139 | 3,878 | +189.4 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 31,168 | 2,839 | +156.2 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 30,731 | 1,804 | +42.2 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 30,366 | 3,359 | +72.7 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 29,819 | 2,032 | +357.0 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 29,388 | 2,975 | +208.0 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 28,978 | 2,600 | +128.6 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 28,959 | 2,840 | +58.6 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 28,945 | 4,067 | +54.4 |
| [voideditor/void](https://github.com/voideditor/void) | 28,812 | 2,645 | +0.1 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 28,419 | 2,941 | +326.4 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,012 | 2,996 | +13.7 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 27,998 | 2,422 | +70.1 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 27,824 | 1,289 | +35.6 |
| [decolua/9router](https://github.com/decolua/9router) | 27,043 | 4,959 | +116.9 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 26,773 | 2,313 | +45.6 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,162 | 4,023 | +8.0 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 25,900 | 2,413 | +324.2 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,324 | 1,122 | +9.4 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,394 | 1,724 | +4.4 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,073 | 772 | +60.3 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 21,914 | 1,626 | +198.8 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 21,867 | 2,813 | +24.7 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,542 | 3,115 | +6.8 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,398 | 2,842 | +8.7 |
| [jundot/omlx](https://github.com/jundot/omlx) | 21,393 | 1,823 | +58.8 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 21,318 | 3,080 | +62.0 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 20,911 | 1,842 | +77.1 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 20,423 | 2,372 | +261.0 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 20,410 | 2,190 | +64.2 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 20,342 | 1,477 | +35.5 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 20,278 | 3,282 | +65.8 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,587 | 1,196 | +16.6 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 19,261 | 1,845 | +28.6 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 19,085 | 2,186 | +203.4 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 18,881 | 2,452 | +38.0 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,164 | 2,291 | +4.2 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 18,057 | 2,525 | +43.5 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 18,011 | 1,763 | +158.3 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,985 | 1,578 | +8.3 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 17,371 | 1,688 | +28.2 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 17,033 | 1,492 | +62.4 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,828 | 1,764 | +9.5 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 16,400 | 3,322 | +14.3 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 16,236 | 1,585 | +21.0 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,154 | 2,422 | +89.6 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 15,715 | 1,367 | +43.9 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 15,631 | 2,295 | +18.2 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,546 | 1,782 | +5.5 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,904 | 1,516 | +9.2 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,877 | 3,290 | +9.8 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 14,778 | 1,474 | +81.5 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,378 | 1,065 | +6.5 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,280 | 8,543 | +12.6 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 13,728 | 1,244 | +23.4 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 12,945 | 1,338 | +28.7 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 12,874 | 1,278 | +188.0 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 12,762 | 556 | +22.1 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 12,692 | 913 | +44.4 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 12,146 | 1,475 | +49.4 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 11,530 | 2,396 | +22.7 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 11,323 | 2,360 | +34.0 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 11,323 | 2,360 | +33.1 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 11,182 | 1,021 | +17.2 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,137 | 721 | +153.7 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,016 | 5,666 | +6.0 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,004 | 1,804 | +2.0 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 10,837 | 1,313 | +33.0 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 10,817 | 807 | +39.1 |
| [openai/codex-security](https://github.com/openai/codex-security) | 10,362 | 751 | +65.0 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,289 | 7,752 | +6.3 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,030 | 810 | +16.9 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 9,871 | 846 | +62.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,621 | 720 | +4.5 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,079 | 283 | +44.8 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 9,074 | 843 | +3.6 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,900 | 868 | +4.8 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,364 | 643 | +0.6 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,091 | 194 | +1.1 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,607 | 1,144 | +1.2 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 7,386 | 528 | +50.7 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 6,905 | 554 | +15.1 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 6,645 | 897 | +23.5 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,596 | 445 | +3.5 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,568 | 358 | +15.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,347 | 244 | +4.4 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,172 | 603 | +3.3 |
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
