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

> Auto-updated daily — last refreshed 2026-07-23

| Metric | Value |
|---|---|
| Repos tracked | **171** |
| Total stars | **7,984,729** |
| Total forks | **1,208,592** |
| Fastest growing | **ai-agent-book** (+3244.0/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 17,685 | +3244.0 |
| 2 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 88,052 | +1291.4 |
| 3 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 219,130 | +1001.2 |
| 4 | [chopratejas/headroom](https://github.com/chopratejas/headroom) | 61,313 | +872.4 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 26,645 | +827.2 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 383,863 | 80,652 | +174.5 |
| [obra/superpowers](https://github.com/obra/superpowers) | 259,653 | 23,156 | +776.6 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 232,333 | 35,419 | +722.3 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 232,333 | 35,419 | +679.7 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 219,130 | 41,529 | +1001.2 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,647 | 46,073 | +19.2 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 168,378 | 12,146 | +639.0 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 166,233 | 21,482 | +57.2 |
| [langgenius/dify](https://github.com/langgenius/dify) | 149,883 | 23,620 | +121.9 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 146,409 | 21,244 | +134.0 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 142,384 | 23,693 | +81.0 |
| [github/spec-kit](https://github.com/github/spec-kit) | 123,357 | 10,999 | +359.1 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 120,328 | 8,079 | +701.3 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 113,416 | 60,878 | +37.5 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 109,131 | 11,619 | +440.0 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 92,181 | 5,228 | +464.7 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,533 | 59,379 | +7.5 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 88,298 | 7,666 | +181.9 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 88,052 | 4,815 | +1291.4 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 86,933 | 19,743 | +99.3 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 84,296 | 11,279 | +311.9 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 81,780 | 10,456 | +118.9 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 80,833 | 9,335 | +555.4 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 80,712 | 15,675 | +52.3 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 76,845 | 8,442 | +32.5 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 74,822 | 12,657 | +18.4 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 72,700 | 4,529 | +350.3 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 71,999 | 11,678 | +165.5 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 69,954 | 10,635 | +236.2 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 69,007 | 7,822 | +130.6 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 68,766 | 6,183 | +64.6 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 68,073 | 8,464 | +263.8 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 66,564 | 4,588 | +695.2 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,480 | 13,531 | +3.6 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 66,422 | 5,411 | +122.6 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 63,335 | 6,321 | +149.0 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 62,212 | 4,308 | +203.4 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 61,313 | 4,607 | +872.4 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 61,313 | 4,607 | +497.1 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 61,150 | 12,043 | +241.0 |
| [tw93/Pake](https://github.com/tw93/Pake) | 60,140 | 12,180 | +172.1 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 59,879 | 4,804 | +808.9 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 59,831 | 9,749 | +294.6 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 58,367 | 50,171 | +331.0 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 57,635 | 7,425 | +79.3 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 54,850 | 24,750 | +29.5 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 54,440 | 10,002 | +106.8 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 53,191 | 4,605 | +456.0 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 52,205 | 5,871 | +36.0 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 50,699 | 4,417 | +100.1 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 47,627 | 4,751 | +40.4 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 47,438 | 3,174 | +114.5 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 46,112 | 8,146 | +52.0 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,092 | 10,270 | +23.3 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 46,018 | 5,616 | +326.8 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 45,895 | 9,336 | +184.3 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 44,388 | 6,959 | +163.5 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 43,747 | 6,461 | +85.9 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 43,747 | 6,461 | +70.5 |
| [usestrix/strix](https://github.com/usestrix/strix) | 43,521 | 4,495 | +342.5 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 43,163 | 10,067 | +132.3 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 43,039 | 3,070 | +176.1 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 42,552 | 7,084 | +311.3 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 41,410 | 4,911 | +565.0 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 41,291 | 6,518 | +189.5 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 41,161 | 8,462 | +62.6 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,104 | 4,159 | +16.8 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 40,028 | 3,446 | +90.8 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,473 | 6,223 | +7.2 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,871 | 2,673 | +12.1 |
| [wshobson/agents](https://github.com/wshobson/agents) | 38,162 | 4,092 | +37.7 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 37,992 | 3,424 | +53.7 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 37,908 | 6,367 | +80.3 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 37,860 | 2,664 | +82.1 |
| [google/langextract](https://github.com/google/langextract) | 37,751 | 2,610 | +20.3 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 37,003 | 3,488 | +254.3 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 36,949 | 4,624 | +53.3 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 35,895 | 6,753 | +28.6 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 35,734 | 3,181 | +29.2 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 34,339 | 2,636 | +571.2 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 32,519 | 3,642 | +67.5 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,360 | 4,834 | +13.2 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 30,694 | 3,078 | +64.3 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 30,495 | 1,855 | +67.2 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 30,278 | 8,886 | +41.2 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 29,920 | 1,747 | +61.6 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 29,767 | 4,266 | +336.2 |
| [voideditor/void](https://github.com/voideditor/void) | 28,879 | 2,599 | +1.4 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 27,612 | 1,768 | +179.7 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 27,536 | 2,413 | +236.3 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,492 | 2,913 | +15.0 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 27,126 | 2,134 | +40.0 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 27,105 | 2,672 | +73.4 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 26,728 | 1,239 | +45.3 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 26,697 | 3,737 | +56.5 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 26,677 | 4,347 | +497.5 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 26,646 | 2,909 | +59.4 |
| [stablyai/orca](https://github.com/stablyai/orca) | 26,645 | 1,909 | +827.2 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 26,389 | 3,175 | +266.7 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 25,899 | 3,406 | +808.6 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 25,842 | 4,010 | +8.4 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 25,620 | 2,130 | +84.3 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 25,552 | 2,404 | +185.2 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 25,467 | 8,325 | +388.4 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 24,990 | 2,058 | +63.4 |
| [toon-format/toon](https://github.com/toon-format/toon) | 24,959 | 1,107 | +10.3 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 24,019 | 2,839 | +164.2 |
| [decolua/9router](https://github.com/decolua/9router) | 23,179 | 3,879 | +147.6 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,204 | 1,711 | +4.4 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 21,297 | 1,420 | +758.8 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,224 | 3,088 | +6.1 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,153 | 2,816 | +11.5 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 19,675 | 1,289 | +428.1 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 19,278 | 1,794 | +170.4 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 19,205 | 1,351 | +45.7 |
| [tanweai/pua](https://github.com/tanweai/pua) | 18,995 | 1,147 | +19.7 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 18,887 | 1,565 | +118.8 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 18,777 | 2,621 | +65.4 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 18,442 | 1,759 | +39.5 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 18,292 | 573 | +10.8 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 18,182 | 3,032 | +89.5 |
| [jundot/omlx](https://github.com/jundot/omlx) | 18,091 | 1,540 | +38.4 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,043 | 2,280 | +5.7 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 17,773 | 2,009 | +105.0 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 17,685 | 1,719 | +3244.0 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,412 | 1,525 | +2.7 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 16,880 | 2,290 | +26.3 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 16,433 | 2,199 | +51.5 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,262 | 1,707 | +5.3 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 16,184 | 1,529 | +29.4 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 15,644 | 2,874 | +9.7 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 14,815 | 2,185 | +17.0 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,741 | 3,302 | +18.9 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,531 | 1,473 | +9.8 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,053 | 1,043 | +4.9 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 13,743 | 1,230 | +40.4 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 13,715 | 1,921 | +172.8 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 12,559 | 1,111 | +16.6 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 12,352 | 1,251 | +55.3 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 11,940 | 523 | +27.5 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 11,449 | 867 | +72.3 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 11,007 | 763 | +60.0 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 10,945 | 1,813 | +3.0 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 10,837 | 1,184 | +253.2 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 10,755 | 5,667 | +6.0 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 10,628 | 1,157 | +43.7 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 10,443 | 2,175 | +18.0 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 10,340 | 944 | +13.0 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,122 | 7,782 | +10.7 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 9,919 | 2,084 | +37.4 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 9,919 | 2,084 | +39.0 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 9,741 | 1,285 | +32.9 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,558 | 731 | +6.3 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9,455 | 873 | +49.7 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 9,417 | 1,153 | +32.8 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 9,402 | 745 | +22.6 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 9,231 | 868 | +51.3 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,870 | 823 | +0.9 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 8,859 | 691 | +22.8 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,344 | 643 | +1.1 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,049 | 192 | +1.8 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 7,634 | 216 | +92.9 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,549 | 1,127 | +0.8 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 7,077 | 589 | +49.2 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,471 | 439 | +6.1 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 6,265 | 469 | +18.7 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,190 | 235 | +7.5 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,078 | 424 | +0.8 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,022 | 586 | +2.3 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 5,959 | 316 | +30.7 |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 77 | 4 | — |
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
