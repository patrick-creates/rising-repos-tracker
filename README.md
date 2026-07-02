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

> Auto-updated daily — last refreshed 2026-07-02

| Metric | Value |
|---|---|
| Repos tracked | **136** |
| Total stars | **7,112,921** |
| Total forks | **1,100,241** |
| Fastest growing | **ponytail** (+2293.3/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 70,952 | +2293.3 |
| 2 | [chopratejas/headroom](https://github.com/chopratejas/headroom) | 55,433 | +1604.1 |
| 3 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 207,553 | +1190.2 |
| 4 | [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 24,156 | +1175.3 |
| 5 | [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 31,225 | +1124.7 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 381,391 | 79,925 | +198.4 |
| [obra/superpowers](https://github.com/obra/superpowers) | 243,793 | 21,634 | +821.6 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 224,808 | 34,402 | +875.2 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 224,808 | 34,402 | +857.3 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 207,553 | 37,670 | +1190.2 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,249 | 46,117 | +19.4 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 164,616 | 21,301 | +48.9 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 162,231 | 11,449 | +784.5 |
| [langgenius/dify](https://github.com/langgenius/dify) | 147,341 | 23,201 | +122.3 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 143,769 | 20,751 | +137.5 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 140,712 | 23,366 | +81.5 |
| [github/spec-kit](https://github.com/github/spec-kit) | 117,273 | 10,361 | +388.2 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 112,525 | 60,444 | +35.5 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 112,123 | 7,433 | +846.2 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 99,419 | 10,482 | +430.5 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,345 | 59,506 | +6.8 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 85,434 | 7,386 | +201.1 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 85,115 | 18,811 | +104.6 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 79,346 | 15,536 | +47.0 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 79,250 | 4,468 | +394.2 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 79,088 | 10,067 | +114.6 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 76,142 | 8,339 | +32.0 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 76,127 | 10,183 | +269.3 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 74,508 | 12,609 | +20.0 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 73,953 | 8,418 | +661.8 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 70,952 | 3,660 | +2293.3 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 69,545 | 11,331 | +188.2 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 67,784 | 4,194 | +404.6 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 67,732 | 6,088 | +71.8 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 66,572 | 7,409 | +137.4 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,456 | 13,560 | +4.8 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 64,538 | 5,272 | +138.0 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 63,412 | 7,851 | +283.4 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 61,796 | 6,181 | +184.4 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 61,172 | 9,524 | +151.2 |
| [tw93/Pake](https://github.com/tw93/Pake) | 58,956 | 11,815 | +226.2 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 58,279 | 4,051 | +210.9 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 57,243 | 11,320 | +266.6 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 56,860 | 7,347 | +99.1 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 55,433 | 4,008 | +1604.1 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 55,433 | 4,008 | +953.0 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 54,652 | 3,753 | +781.9 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 54,189 | 24,623 | +28.6 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 53,287 | 46,156 | +380.2 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 52,349 | 9,375 | +110.2 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 51,213 | 5,708 | +30.8 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 48,648 | 3,873 | +1048.8 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 48,355 | 4,000 | +653.5 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 47,759 | 4,181 | +81.4 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 47,742 | 7,786 | +163.5 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 46,937 | 4,679 | +43.9 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,738 | 10,249 | +26.3 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 44,948 | 7,924 | +50.4 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 44,899 | 2,917 | +111.4 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 44,322 | 9,022 | +319.5 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 42,195 | 6,746 | +92.6 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,847 | 4,132 | +18.9 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 40,845 | 9,418 | +144.4 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 40,136 | 8,225 | +70.2 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 39,347 | 2,792 | +176.2 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 39,284 | 3,395 | +121.4 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 38,929 | 6,442 | +110.1 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,648 | 2,658 | +12.9 |
| [wshobson/agents](https://github.com/wshobson/agents) | 37,423 | 4,020 | +39.1 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 37,299 | 3,366 | +65.1 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 37,095 | 6,136 | +346.2 |
| [google/langextract](https://github.com/google/langextract) | 36,986 | 2,549 | +11.3 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 36,836 | 4,428 | +252.1 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 36,283 | 6,071 | +86.3 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 36,053 | 4,464 | +59.1 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 35,782 | 5,834 | +140.1 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 35,707 | 2,467 | +68.3 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 35,434 | 6,704 | +32.2 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 35,350 | 3,157 | +35.2 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 32,635 | 3,036 | +294.8 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,115 | 4,787 | +14.2 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 31,419 | 3,439 | +77.7 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 31,225 | 3,546 | +1124.7 |
| [usestrix/strix](https://github.com/usestrix/strix) | 30,397 | 3,260 | +151.2 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 29,670 | 8,845 | +49.5 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 29,291 | 1,669 | +83.0 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 29,182 | 2,908 | +59.2 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 28,960 | 1,776 | +63.2 |
| [voideditor/void](https://github.com/voideditor/void) | 28,824 | 2,565 | +0.6 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,241 | 2,877 | +17.1 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 26,247 | 2,038 | +38.3 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 26,064 | 1,187 | +57.3 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 25,842 | 2,566 | +85.1 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 25,723 | 2,785 | +73.0 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 25,672 | 3,998 | +8.8 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 25,670 | 1,579 | +256.0 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 25,552 | 3,596 | +58.2 |
| [toon-format/toon](https://github.com/toon-format/toon) | 24,745 | 1,095 | +10.4 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 24,630 | 3,487 | +449.2 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 24,455 | 2,006 | +109.6 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 24,156 | 1,773 | +1175.3 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 23,872 | 2,710 | +575.0 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,135 | 1,710 | +5.4 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,086 | 3,069 | +5.8 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 20,970 | 1,785 | +141.9 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 20,894 | 2,776 | +10.8 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 20,440 | 2,717 | +156.6 |
| [decolua/9router](https://github.com/decolua/9router) | 19,396 | 3,137 | +107.4 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 19,086 | 2,041 | +33.6 |
| [tanweai/pua](https://github.com/tanweai/pua) | 18,577 | 1,115 | +19.5 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 18,457 | 1,294 | +58.2 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 18,129 | 564 | +32.3 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 17,961 | 2,279 | +7.9 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 17,664 | 1,672 | +42.5 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 17,660 | 2,362 | +80.5 |
| [jundot/omlx](https://github.com/jundot/omlx) | 17,378 | 1,473 | +43.9 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,367 | 1,521 | +3.3 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 16,949 | 2,841 | +737.0 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 16,366 | 2,809 | +96.0 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 16,231 | 2,233 | +16.5 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,143 | 1,699 | +4.8 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 15,653 | 1,303 | +45.0 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 15,608 | 1,450 | +43.0 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 15,582 | 1,379 | +158.6 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 15,518 | 2,766 | +17.5 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 15,309 | 1,984 | +47.1 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,566 | 3,286 | +41.1 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 14,476 | 2,154 | +18.9 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,333 | 1,466 | +10.7 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 13,965 | 1,038 | +6.5 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 12,912 | 1,175 | +46.0 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 12,212 | 1,051 | +17.3 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 11,379 | 493 | +33.0 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 11,249 | 1,100 | +75.0 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 10,894 | 1,805 | +7.3 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 10,629 | 5,650 | +5.7 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 10,092 | 2,136 | +27.3 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 10,070 | 915 | +14.3 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 10,006 | 827 | +97.0 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 9,896 | 7,783 | +10.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,497 | 725 | +7.7 |
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
