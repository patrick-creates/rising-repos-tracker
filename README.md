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

> Auto-updated daily — last refreshed 2026-07-20

| Metric | Value |
|---|---|
| Repos tracked | **171** |
| Total stars | **7,891,988** |
| Total forks | **1,197,612** |
| Fastest growing | **ponytail** (+1366.6/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 86,285 | +1366.6 |
| 2 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 217,444 | +1020.6 |
| 3 | [chopratejas/headroom](https://github.com/chopratejas/headroom) | 60,492 | +923.7 |
| 4 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 58,428 | +832.2 |
| 5 | [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 19,857 | +818.6 |

### 🆕 Recently added

- [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) — added 2026-07-20 — 数字生命卡兹克开源的 AI Skills 合集 | Agent Skills: neat-freak 洁癖 (docs/memory closeout), hv-analysis, khazix-writer & more — Claude Code, Codex & 40+ agents
- [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) — added 2026-07-20 — AI quantitative trading platform for crypto, stocks, and forex with backtesting, live trading, market data, and multi-agent research.vibe-trading ,trading-agents,ai-trader,ai-trading
- [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) — added 2026-07-20 — 《深入理解 AI Agent：设计原理与工程实践》（李博杰 著）开源主仓库：全书正文、编译版 PDF 与按章配套代码
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 383,533 | 80,561 | +177.4 |
| [obra/superpowers](https://github.com/obra/superpowers) | 257,812 | 22,977 | +794.1 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 231,351 | 35,303 | +739.8 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 231,351 | 35,303 | +698.6 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 217,444 | 40,972 | +1020.6 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,619 | 46,075 | +19.7 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 167,480 | 12,045 | +654.0 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 166,041 | 21,469 | +56.9 |
| [langgenius/dify](https://github.com/langgenius/dify) | 149,430 | 23,552 | +120.7 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 146,021 | 21,169 | +134.3 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 142,141 | 23,644 | +81.0 |
| [github/spec-kit](https://github.com/github/spec-kit) | 122,504 | 10,917 | +362.4 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 119,096 | 7,991 | +715.1 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 113,260 | 60,788 | +36.9 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 107,946 | 11,473 | +442.0 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 90,950 | 5,156 | +467.3 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,524 | 59,401 | +7.7 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 87,912 | 7,635 | +184.3 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 86,681 | 19,614 | +100.0 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 86,285 | 4,709 | +1366.6 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 81,362 | 10,407 | +117.9 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 81,306 | 10,964 | +275.2 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 80,556 | 15,648 | +52.3 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 79,834 | 9,208 | +566.0 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 76,757 | 8,433 | +32.6 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 74,762 | 12,655 | +18.3 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 71,938 | 4,478 | +354.9 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 71,606 | 11,635 | +167.1 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 68,445 | 6,158 | +62.6 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 68,136 | 7,727 | +123.0 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 67,331 | 8,361 | +264.6 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,470 | 13,533 | +3.6 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 66,217 | 5,399 | +125.2 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 65,378 | 4,520 | +713.6 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 63,134 | 6,309 | +153.0 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 62,063 | 9,658 | +122.1 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 61,666 | 4,274 | +204.4 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 60,647 | 11,945 | +244.5 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 60,492 | 4,532 | +923.7 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 60,492 | 4,532 | +521.0 |
| [tw93/Pake](https://github.com/tw93/Pake) | 60,042 | 12,156 | +178.8 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 59,131 | 9,648 | +297.6 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 58,428 | 4,686 | +832.2 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 57,961 | 49,801 | +341.5 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 57,493 | 7,415 | +80.8 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 54,756 | 24,738 | +29.5 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 54,074 | 9,896 | +106.1 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 52,835 | 4,564 | +480.1 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 51,885 | 5,829 | +32.7 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 50,460 | 4,394 | +101.0 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 47,529 | 4,745 | +40.8 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 47,221 | 3,156 | +116.5 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,049 | 10,267 | +23.7 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 45,916 | 8,120 | +51.4 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 45,783 | 9,330 | +196.9 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 43,751 | 6,880 | +160.8 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 43,677 | 5,324 | +299.1 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 43,611 | 6,465 | +88.1 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 43,611 | 6,465 | +81.3 |
| [usestrix/strix](https://github.com/usestrix/strix) | 42,756 | 4,411 | +347.9 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 42,752 | 9,971 | +132.1 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 42,696 | 3,046 | +179.8 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,067 | 4,151 | +17.0 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 40,966 | 8,419 | +62.4 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 40,806 | 6,441 | +191.2 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 40,284 | 4,769 | +592.0 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 40,006 | 6,660 | +278.4 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 39,949 | 3,445 | +94.3 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,468 | 6,227 | +9.6 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,833 | 2,667 | +12.1 |
| [wshobson/agents](https://github.com/wshobson/agents) | 38,069 | 4,091 | +38.1 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 37,902 | 3,420 | +55.0 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 37,654 | 6,312 | +79.8 |
| [google/langextract](https://github.com/google/langextract) | 37,590 | 2,595 | +18.5 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 36,826 | 2,553 | +66.1 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 36,788 | 4,607 | +53.3 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 36,334 | 3,419 | +256.5 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 35,826 | 6,742 | +28.9 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 35,676 | 3,180 | +29.7 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 33,059 | 2,524 | +591.9 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 32,365 | 3,616 | +68.4 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,331 | 4,814 | +13.4 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 30,488 | 3,054 | +64.1 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 30,174 | 8,880 | +41.6 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 29,843 | 1,739 | +63.8 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 29,811 | 1,819 | +57.3 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 28,920 | 4,159 | +340.8 |
| [voideditor/void](https://github.com/voideditor/void) | 28,860 | 2,598 | +1.1 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,453 | 2,913 | +15.2 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 27,363 | 1,745 | +186.6 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 27,224 | 2,385 | +247.6 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 26,990 | 2,118 | +39.6 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 26,969 | 2,657 | +75.5 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 26,611 | 1,235 | +45.7 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 26,551 | 3,721 | +57.0 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 26,516 | 2,895 | +60.6 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 26,134 | 3,132 | +286.1 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 25,826 | 4,015 | +8.7 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 25,434 | 4,186 | +509.3 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 25,403 | 2,110 | +85.2 |
| [toon-format/toon](https://github.com/toon-format/toon) | 24,929 | 1,108 | +10.3 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 24,822 | 2,030 | +66.6 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 24,151 | 7,800 | +366.9 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 23,540 | 2,823 | +164.6 |
| [stablyai/orca](https://github.com/stablyai/orca) | 22,786 | 1,632 | +728.8 |
| [decolua/9router](https://github.com/decolua/9router) | 22,743 | 3,773 | +147.8 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,189 | 1,709 | +4.4 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 21,970 | 2,216 | +98.7 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,198 | 3,083 | +6.0 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,124 | 2,812 | +11.7 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 20,522 | 2,831 | +597.9 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 19,857 | 1,336 | +818.6 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 19,110 | 1,343 | +46.9 |
| [tanweai/pua](https://github.com/tanweai/pua) | 18,911 | 1,139 | +19.0 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 18,705 | 1,555 | +125.1 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 18,586 | 2,584 | +65.5 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 18,543 | 1,730 | +162.4 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 18,519 | 1,191 | +437.3 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 18,350 | 1,752 | +40.3 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 18,265 | 570 | +11.1 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,035 | 2,279 | +6.0 |
| [jundot/omlx](https://github.com/jundot/omlx) | 17,967 | 1,530 | +38.1 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 17,875 | 3,000 | +88.2 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 17,458 | 1,986 | +166.2 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,400 | 1,527 | +2.5 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 16,815 | 2,281 | +26.8 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 16,287 | 2,180 | +51.8 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,250 | 1,704 | +5.4 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 16,125 | 1,515 | +30.8 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 15,634 | 2,863 | +10.4 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 14,754 | 2,180 | +16.7 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,726 | 3,303 | +20.4 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,503 | 1,474 | +9.9 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,049 | 1,043 | +5.3 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 13,609 | 1,223 | +39.8 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 13,417 | 1,867 | +188.6 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 12,513 | 1,091 | +16.8 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 12,239 | 1,242 | +57.9 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 11,855 | 520 | +27.4 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 11,348 | 865 | +77.8 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 10,939 | 1,814 | +3.2 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 10,736 | 5,665 | +5.9 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 10,715 | 732 | +52.0 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 10,532 | 1,142 | +46.2 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 10,394 | 2,166 | +18.3 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 10,284 | 939 | +12.2 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,109 | 7,786 | +11.6 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 9,802 | 2,061 | +37.1 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 9,802 | 2,061 | +48.3 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 9,637 | 1,277 | +32.6 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,555 | 729 | +6.5 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9,410 | 867 | +57.1 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 9,361 | 741 | +24.6 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 9,316 | 1,146 | +32.6 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 9,149 | 849 | +61.6 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 9,120 | 1,052 | +116.4 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,870 | 821 | +1.1 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 8,766 | 687 | +21.1 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,343 | 643 | +1.2 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,042 | 192 | +1.6 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 7,953 | 727 | +24.6 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,551 | 1,129 | +1.4 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 7,388 | 207 | +97.6 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 6,912 | 580 | +46.7 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,451 | 438 | +5.9 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 6,209 | 459 | +83.9 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,166 | 233 | +7.3 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,080 | 425 | +1.4 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,015 | 585 | +2.3 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 5,867 | 315 | +42.8 |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 76 | 4 | — |
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
