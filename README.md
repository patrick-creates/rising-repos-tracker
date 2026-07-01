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

> Auto-updated daily — last refreshed 2026-07-01

| Metric | Value |
|---|---|
| Repos tracked | **136** |
| Total stars | **7,089,219** |
| Total forks | **1,097,261** |
| Fastest growing | **ponytail** (+2404.9/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 69,663 | +2404.9 |
| 2 | [chopratejas/headroom](https://github.com/chopratejas/headroom) | 54,902 | +1671.2 |
| 3 | [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 23,230 | +1300.0 |
| 4 | [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 30,329 | +1239.0 |
| 5 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 206,775 | +1198.6 |

### 🆕 Recently added

- [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) — added 2026-06-29 — World's first open-source, agentic video production system. 12 pipelines, 52 tools, 500+ agent skills. Turn your AI coding assistant into a full video production studio.
- [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) — added 2026-06-29 — High-performance code intelligence MCP server. Indexes codebases into a persistent knowledge graph — average repo in milliseconds. 158 languages, sub-ms queries, 99% fewer tokens. Single static binary, zero dependencies.
- [pranshuparmar/witr](https://github.com/pranshuparmar/witr) — added 2026-06-29 — Why is this running?
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 381,246 | 79,871 | +199.5 |
| [obra/superpowers](https://github.com/obra/superpowers) | 242,972 | 21,552 | +821.7 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 224,313 | 34,326 | +883.0 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 224,313 | 34,326 | +867.1 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 206,775 | 37,430 | +1198.6 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,222 | 46,117 | +19.2 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 164,582 | 21,297 | +49.2 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 161,924 | 11,412 | +794.2 |
| [langgenius/dify](https://github.com/langgenius/dify) | 147,209 | 23,195 | +122.1 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 143,652 | 20,727 | +138.0 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 140,625 | 23,357 | +81.4 |
| [github/spec-kit](https://github.com/github/spec-kit) | 116,819 | 10,326 | +386.9 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 112,475 | 60,423 | +35.2 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 111,583 | 7,395 | +853.2 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 98,941 | 10,423 | +429.6 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,340 | 59,508 | +6.9 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 85,294 | 7,366 | +202.3 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 84,972 | 18,746 | +103.8 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 79,300 | 15,523 | +47.0 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 78,926 | 10,040 | +113.5 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 78,466 | 4,435 | +385.3 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 76,111 | 8,336 | +32.0 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 76,029 | 10,178 | +273.9 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 74,489 | 12,606 | +20.0 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 73,577 | 8,358 | +668.3 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 69,663 | 3,593 | +2404.9 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 69,361 | 11,303 | +188.3 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 67,691 | 6,082 | +72.5 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 67,460 | 4,174 | +406.4 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 66,480 | 7,393 | +138.5 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,455 | 13,561 | +4.9 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 64,435 | 5,262 | +138.8 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 63,127 | 7,810 | +283.3 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 61,711 | 6,171 | +186.7 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 61,104 | 9,524 | +153.1 |
| [tw93/Pake](https://github.com/tw93/Pake) | 58,818 | 11,781 | +228.2 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 58,073 | 4,044 | +211.0 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 56,933 | 11,264 | +265.6 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 56,801 | 7,343 | +100.0 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 54,902 | 3,954 | +1671.2 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 54,902 | 3,954 | +999.9 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 54,153 | 24,622 | +28.5 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 54,123 | 3,722 | +790.3 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 52,792 | 45,766 | +377.1 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 52,211 | 9,347 | +109.6 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 51,175 | 5,708 | +30.7 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 48,004 | 3,969 | +666.7 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 47,686 | 4,173 | +81.6 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 47,615 | 3,777 | +1049.5 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 47,502 | 7,756 | +161.8 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 46,892 | 4,676 | +43.9 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,712 | 10,247 | +26.3 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 44,923 | 7,920 | +51.0 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 44,821 | 2,908 | +112.2 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 44,247 | 9,007 | +334.8 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 42,121 | 6,733 | +93.1 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,839 | 4,134 | +19.2 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 40,730 | 9,386 | +145.2 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 40,086 | 8,212 | +70.7 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 39,241 | 3,399 | +123.5 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 39,130 | 2,778 | +174.9 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 38,833 | 6,429 | +110.5 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,641 | 2,658 | +13.1 |
| [wshobson/agents](https://github.com/wshobson/agents) | 37,383 | 4,020 | +39.1 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 37,240 | 3,365 | +65.3 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 37,001 | 6,108 | +354.6 |
| [google/langextract](https://github.com/google/langextract) | 36,980 | 2,550 | +11.5 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 36,451 | 4,370 | +247.6 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 36,196 | 6,058 | +86.2 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 36,009 | 4,454 | +59.5 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 35,659 | 2,460 | +69.0 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 35,651 | 5,814 | +140.4 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 35,406 | 6,701 | +32.3 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 35,328 | 3,155 | +35.5 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 32,448 | 3,015 | +299.4 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,111 | 4,786 | +14.5 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 31,372 | 3,431 | +78.7 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 30,329 | 3,432 | +1239.0 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 29,624 | 8,842 | +49.6 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 29,250 | 1,668 | +84.4 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 29,131 | 2,901 | +59.4 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 28,934 | 1,775 | +64.4 |
| [voideditor/void](https://github.com/voideditor/void) | 28,820 | 2,565 | +0.5 |
| [usestrix/strix](https://github.com/usestrix/strix) | 28,483 | 3,150 | +92.4 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,224 | 2,879 | +17.1 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 26,213 | 2,036 | +38.5 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 26,008 | 1,186 | +57.3 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 25,760 | 2,561 | +85.2 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 25,677 | 2,775 | +74.1 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 25,666 | 3,999 | +8.9 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 25,558 | 1,570 | +262.3 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 25,489 | 3,595 | +58.0 |
| [toon-format/toon](https://github.com/toon-format/toon) | 24,735 | 1,095 | +10.4 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 24,383 | 2,001 | +111.2 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 24,169 | 3,429 | +448.5 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 23,588 | 2,683 | +607.3 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 23,230 | 1,697 | +1300.0 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,129 | 1,711 | +5.4 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,072 | 3,069 | +5.4 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 20,888 | 2,774 | +11.0 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 20,861 | 1,783 | +143.9 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 20,394 | 2,711 | +163.5 |
| [decolua/9router](https://github.com/decolua/9router) | 19,152 | 3,102 | +98.8 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 19,048 | 2,041 | +33.4 |
| [tanweai/pua](https://github.com/tanweai/pua) | 18,541 | 1,114 | +18.4 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 18,407 | 1,293 | +58.7 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 18,109 | 562 | +38.5 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 17,955 | 2,279 | +8.1 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 17,608 | 1,665 | +41.7 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 17,605 | 2,337 | +82.1 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,366 | 1,522 | +3.4 |
| [jundot/omlx](https://github.com/jundot/omlx) | 17,331 | 1,470 | +43.7 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 16,216 | 2,799 | +90.0 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 16,209 | 2,229 | +15.9 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,140 | 1,699 | +4.9 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 16,043 | 2,757 | +652.5 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 15,590 | 1,290 | +43.0 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 15,573 | 1,447 | +47.0 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 15,508 | 2,764 | +18.3 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 15,403 | 1,363 | +156.3 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 15,266 | 1,976 | +47.6 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,521 | 3,268 | +40.7 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 14,453 | 2,153 | +18.4 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,323 | 1,466 | +10.8 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 13,959 | 1,038 | +6.6 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 12,873 | 1,172 | +49.5 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 12,200 | 1,049 | +20.0 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 11,346 | 492 | +33.0 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 11,161 | 1,087 | +68.5 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 10,889 | 1,805 | +8.5 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 10,625 | 5,651 | +6.5 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 10,066 | 2,134 | +28.0 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 10,056 | 914 | +14.5 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 9,916 | 826 | +100.5 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 9,869 | 7,784 | +1.5 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,494 | 726 | +7.8 |
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
