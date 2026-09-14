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

> Auto-updated daily — last refreshed 2026-09-14

| Metric | Value |
|---|---|
| Repos tracked | **199** |
| Total stars | **9,693,432** |
| Total forks | **1,418,753** |
| Fastest growing | **VoiceStudio** (+1111.0/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 27,996 | +1111.0 |
| 2 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 137,822 | +1069.1 |
| 3 | [stablyai/orca](https://github.com/stablyai/orca) | 68,263 | +795.4 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 245,314 | +784.4 |
| 5 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 65,903 | +767.9 |

### 🆕 Recently added

- [every-app/open-seo](https://github.com/every-app/open-seo) — added 2026-09-14 — Open source alternative to Semrush and Ahrefs
- [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) — added 2026-09-14 — Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.
- [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) — added 2026-09-14 — Universal SEO skill for Claude Code. 25 sub-skills + 18 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, backlinks, local SEO, maps intelligence, semantic clustering, e-commerce SEO, international SEO, Google APIs, and PDF/Excel reporting. Optional DataForSEO, Firecrawl, and Banana extensions.
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 389,649 | 81,910 | +146.6 |
| [obra/superpowers](https://github.com/obra/superpowers) | 286,439 | 25,623 | +605.5 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 258,019 | 38,588 | +620.7 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 258,019 | 38,588 | +587.4 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 245,314 | 51,060 | +784.4 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,318 | 46,017 | +24.5 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 183,819 | 13,529 | +490.4 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 170,293 | 21,908 | +65.5 |
| [langgenius/dify](https://github.com/langgenius/dify) | 155,673 | 24,587 | +116.5 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 151,956 | 22,230 | +121.5 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 146,287 | 24,444 | +77.8 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 137,822 | 7,396 | +1069.1 |
| [github/spec-kit](https://github.com/github/spec-kit) | 136,610 | 12,259 | +312.5 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 132,770 | 9,154 | +493.5 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 127,493 | 13,611 | +400.0 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 119,692 | 63,031 | +72.1 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 116,573 | 11,388 | +405.6 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 105,474 | 6,110 | +369.4 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 96,068 | 11,132 | +436.1 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 93,825 | 8,252 | +148.8 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 93,608 | 12,413 | +247.5 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 91,708 | 22,168 | +95.4 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,761 | 59,082 | +6.1 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 87,844 | 11,509 | +116.9 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 86,994 | 5,929 | +538.9 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 86,236 | 13,080 | +267.8 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 82,464 | 15,878 | +44.1 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 80,690 | 7,030 | +583.8 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 80,271 | 5,088 | +257.9 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 78,893 | 9,795 | +237.3 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 78,306 | 8,600 | +30.3 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 76,732 | 12,341 | +131.6 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 76,140 | 6,937 | +97.8 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 75,969 | 12,865 | +19.8 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 74,997 | 8,665 | +122.8 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 72,005 | 5,517 | +481.8 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 72,005 | 5,517 | +310.7 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 71,544 | 13,496 | +221.0 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 71,544 | 13,496 | +166.0 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 69,029 | 5,680 | +89.9 |
| [stablyai/orca](https://github.com/stablyai/orca) | 68,263 | 4,461 | +795.4 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 68,205 | 4,689 | +163.2 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,685 | 13,512 | +3.7 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 66,411 | 10,840 | +218.7 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 65,908 | 6,542 | +104.3 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 65,903 | 9,231 | +767.9 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 65,027 | 54,474 | +233.8 |
| [usestrix/strix](https://github.com/usestrix/strix) | 62,331 | 6,825 | +348.8 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 61,997 | 5,407 | +299.2 |
| [tw93/Pake](https://github.com/tw93/Pake) | 61,414 | 12,644 | +106.2 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 59,043 | 7,558 | +55.8 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 58,921 | 7,393 | +403.5 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 58,685 | 11,421 | +94.9 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,457 | 25,010 | +21.5 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 54,517 | 9,538 | +268.1 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 54,003 | 4,707 | +83.3 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 53,654 | 6,146 | +32.2 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 53,168 | 6,640 | +230.0 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 51,894 | 3,644 | +100.9 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 51,713 | 7,836 | +151.5 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 50,121 | 7,599 | +177.9 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 49,827 | 4,549 | +247.6 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 49,784 | 10,232 | +119.7 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 48,949 | 4,947 | +33.5 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 48,296 | 3,440 | +137.3 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 48,141 | 8,505 | +45.9 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 48,056 | 11,513 | +113.4 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 47,978 | 3,736 | +169.1 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,965 | 10,350 | +20.3 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 46,731 | 5,233 | +692.5 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 46,387 | 6,758 | +68.8 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 46,387 | 6,758 | +53.1 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 44,846 | 4,065 | +195.7 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 43,379 | 8,983 | +52.8 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 43,178 | 3,517 | +292.8 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 42,528 | 14,587 | +332.5 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 42,499 | 2,719 | +38.8 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,755 | 4,249 | +14.8 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 41,611 | 7,029 | +73.7 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 40,970 | 3,563 | +56.3 |
| [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) | 40,970 | 3,563 | +7.7 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 40,470 | 2,918 | +65.5 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 39,775 | 3,922 | +40.9 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,729 | 6,241 | +5.2 |
| [wshobson/agents](https://github.com/wshobson/agents) | 39,640 | 4,222 | +33.1 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 39,149 | 3,500 | +38.6 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 38,986 | 4,939 | +46.3 |
| [google/langextract](https://github.com/google/langextract) | 38,579 | 2,704 | +18.1 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 38,355 | 2,857 | +370.8 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 38,355 | 2,857 | +346.8 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 37,142 | 2,855 | +120.6 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 36,920 | 3,321 | +25.9 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 36,885 | 6,856 | +23.9 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 36,497 | 2,307 | +90.4 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 36,251 | 4,072 | +69.0 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,536 | 2,390 | +163.4 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 34,921 | 3,101 | +188.4 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 34,378 | 5,013 | +191.0 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 33,408 | 5,457 | +242.5 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 33,263 | 9,081 | +48.8 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 32,805 | 3,388 | +52.0 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,801 | 4,942 | +10.7 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 32,747 | 3,953 | +174.1 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 31,397 | 2,854 | +141.6 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 31,345 | 3,509 | +75.2 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 31,063 | 3,230 | +203.2 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 30,991 | 1,831 | +40.7 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 30,572 | 3,170 | +273.5 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 30,531 | 2,084 | +316.2 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 29,397 | 4,118 | +53.5 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 29,270 | 2,863 | +55.8 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,066 | 2,597 | +115.5 |
| [voideditor/void](https://github.com/voideditor/void) | 28,800 | 2,651 | — |
| [decolua/9router](https://github.com/decolua/9router) | 28,692 | 5,256 | +122.2 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 28,416 | 2,461 | +67.3 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,078 | 3,004 | +13.0 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 27,996 | 3,441 | +1111.0 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 27,956 | 1,296 | +33.3 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 27,088 | 2,352 | +43.4 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 26,641 | 2,509 | +284.5 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,215 | 4,029 | +7.7 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,369 | 1,120 | +8.9 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 24,191 | 1,780 | +202.9 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 23,894 | 2,962 | +75.5 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 23,046 | 3,286 | +74.2 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 22,745 | 1,644 | +58.0 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,399 | 1,721 | +4.0 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,295 | 775 | +55.4 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 21,958 | 2,530 | +209.8 |
| [jundot/omlx](https://github.com/jundot/omlx) | 21,708 | 1,877 | +55.8 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,585 | 3,113 | +6.5 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,450 | 2,849 | +8.3 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 21,350 | 1,924 | +73.2 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 20,654 | 2,199 | +57.1 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 20,650 | 3,333 | +62.4 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 19,666 | 2,273 | +180.3 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,638 | 1,196 | +15.3 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 19,431 | 1,881 | +155.0 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 19,404 | 1,859 | +27.1 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,013 | 2,465 | +35.1 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 18,656 | 2,379 | +94.2 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 18,332 | 2,574 | +41.6 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,180 | 2,293 | +3.9 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,093 | 1,586 | +8.6 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 17,623 | 1,559 | +61.5 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 17,526 | 1,715 | +26.6 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 17,140 | 1,466 | +96.8 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 16,885 | 2,476 | +77.1 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,876 | 1,767 | +8.9 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 16,702 | 3,448 | +16.2 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 16,431 | 1,617 | +20.6 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,335 | 2,436 | +79.4 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 16,106 | 1,378 | +43.3 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 15,782 | 2,319 | +17.8 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,599 | 1,783 | +5.4 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 15,199 | 1,517 | +75.9 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,969 | 1,523 | +8.8 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,898 | 3,295 | +8.8 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,404 | 1,066 | +6.0 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,378 | 8,535 | +12.0 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 14,342 | 1,322 | +176.3 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 14,175 | 1,267 | +26.2 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,107 | 1,350 | +27.1 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 12,943 | 921 | +41.9 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 12,876 | 566 | +20.7 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 12,409 | 1,499 | +46.1 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 11,862 | 2,439 | +24.1 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 11,619 | 2,408 | +33.4 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 11,619 | 2,408 | +32.4 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 11,314 | 1,037 | +16.7 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,255 | 721 | +103.0 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 11,065 | 1,343 | +31.5 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,042 | 5,663 | +5.6 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,009 | 1,800 | +1.8 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 10,998 | 826 | +36.1 |
| [openai/codex-security](https://github.com/openai/codex-security) | 10,692 | 783 | +57.4 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,303 | 7,743 | +5.7 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,083 | 815 | +15.2 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 9,951 | 854 | +53.4 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,626 | 719 | +4.1 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,256 | 294 | +40.5 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 9,071 | 845 | +3.1 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9,007 | 879 | +5.7 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,390 | 646 | +0.9 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,100 | 194 | +1.1 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,615 | 1,145 | +1.2 |
| [trailhq/Graft](https://github.com/trailhq/Graft) | 7,589 | 688 | +105.3 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 7,577 | 542 | +41.7 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 7,238 | 608 | +48.6 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 7,021 | 564 | +14.5 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,021 | 564 | +7.6 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 6,988 | 943 | +31.2 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,634 | 363 | +13.7 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,618 | 442 | +3.3 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,378 | 244 | +4.2 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 6,214 | 294 | +200.2 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,178 | 604 | +2.8 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,085 | 420 | +0.2 |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 86 | 4 | — |
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
