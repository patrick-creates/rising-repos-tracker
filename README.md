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

> Auto-updated daily — last refreshed 2026-09-10

| Metric | Value |
|---|---|
| Repos tracked | **194** |
| Total stars | **9,547,954** |
| Total forks | **1,401,686** |
| Fastest growing | **ponytail** (+1075.2/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 134,037 | +1075.2 |
| 2 | [stablyai/orca](https://github.com/stablyai/orca) | 65,484 | +801.5 |
| 3 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 244,018 | +799.8 |
| 4 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 63,728 | +781.5 |
| 5 | [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 45,520 | +722.4 |

### 🆕 Recently added

- [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) — added 2026-09-07 — Open-source AI job search: scan job portals, evaluate listings into a structured A-H report with a global 1-5 score, tailor your CV, track applications — runs locally in your AI coding CLI (Claude Code, Codex, OpenCode, Antigravity…)
- [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) — added 2026-09-07 — Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.
- [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) — added 2026-09-07 — Open-source coding agent for your terminal, built in Rust and on a journey of continuous community improvement. Issues and PRs welcome.
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 389,330 | 81,823 | +148.8 |
| [obra/superpowers](https://github.com/obra/superpowers) | 284,322 | 25,429 | +609.3 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 255,465 | 38,250 | +620.1 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 255,465 | 38,250 | +585.5 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 244,018 | 50,406 | +799.8 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,241 | 46,028 | +24.7 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 182,286 | 13,398 | +494.0 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 169,844 | 21,843 | +63.9 |
| [langgenius/dify](https://github.com/langgenius/dify) | 155,313 | 24,523 | +117.4 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 151,519 | 22,161 | +121.9 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 146,052 | 24,397 | +78.5 |
| [github/spec-kit](https://github.com/github/spec-kit) | 134,490 | 12,116 | +305.2 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 134,037 | 7,170 | +1075.2 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 132,094 | 9,094 | +504.8 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 126,527 | 13,511 | +405.3 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 119,464 | 62,918 | +72.6 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 116,516 | 11,301 | +440.4 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 104,628 | 6,068 | +374.9 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 95,284 | 11,032 | +444.4 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 93,601 | 8,230 | +151.8 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 92,952 | 12,328 | +250.5 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 91,402 | 22,011 | +96.0 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,720 | 59,101 | +5.9 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 87,183 | 11,436 | +115.2 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 85,945 | 13,004 | +274.6 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 85,880 | 5,869 | +549.2 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 82,367 | 15,865 | +44.7 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 79,760 | 5,048 | +262.5 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 79,138 | 6,810 | +592.1 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 78,181 | 9,719 | +239.3 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 78,164 | 8,580 | +30.1 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 76,462 | 12,301 | +133.8 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 75,969 | 6,916 | +99.7 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 75,882 | 12,839 | +19.8 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 74,787 | 8,628 | +125.2 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 71,189 | 5,456 | +494.6 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 71,189 | 5,456 | +316.1 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 70,870 | 13,376 | +222.8 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 70,870 | 13,376 | +162.7 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 68,875 | 5,657 | +91.7 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 67,850 | 4,663 | +165.8 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,673 | 13,507 | +3.8 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 65,812 | 6,536 | +107.1 |
| [stablyai/orca](https://github.com/stablyai/orca) | 65,484 | 4,316 | +801.5 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 64,874 | 54,361 | +241.1 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 64,609 | 10,586 | +210.6 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 63,728 | 8,926 | +781.5 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 61,728 | 5,381 | +309.1 |
| [usestrix/strix](https://github.com/usestrix/strix) | 61,611 | 6,749 | +355.5 |
| [tw93/Pake](https://github.com/tw93/Pake) | 61,370 | 12,635 | +109.5 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 58,972 | 7,561 | +57.1 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 58,428 | 11,321 | +96.0 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 56,937 | 7,166 | +398.4 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,454 | 24,993 | +22.2 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 54,001 | 9,399 | +273.6 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 53,804 | 4,687 | +84.4 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 53,576 | 6,132 | +32.6 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 52,871 | 6,604 | +236.1 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 51,525 | 3,617 | +101.2 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 51,231 | 7,774 | +152.7 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 49,343 | 7,528 | +177.3 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 49,336 | 10,148 | +120.1 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 48,868 | 4,942 | +34.0 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 48,560 | 4,447 | +244.7 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 48,105 | 3,436 | +140.8 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 47,970 | 8,474 | +46.0 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 47,791 | 11,423 | +115.1 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 47,414 | 3,710 | +171.6 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,870 | 10,346 | +20.1 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 46,229 | 6,741 | +69.9 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 46,229 | 6,741 | +54.0 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 45,520 | 5,068 | +722.4 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 44,202 | 4,016 | +242.0 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 42,983 | 8,919 | +51.1 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 42,826 | 3,487 | +304.1 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 42,213 | 2,719 | +37.6 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,709 | 4,245 | +14.9 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 41,643 | 14,317 | +340.0 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 41,374 | 6,989 | +74.4 |
| [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) | 40,931 | 3,554 | +5.0 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 40,930 | 3,554 | +58.0 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 40,314 | 2,901 | +66.6 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,720 | 6,240 | +5.4 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 39,602 | 3,907 | +37.7 |
| [wshobson/agents](https://github.com/wshobson/agents) | 39,544 | 4,213 | +33.4 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 39,081 | 3,499 | +39.4 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 38,839 | 4,918 | +46.6 |
| [google/langextract](https://github.com/google/langextract) | 38,559 | 2,704 | +18.6 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 37,280 | 2,735 | +377.0 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 37,280 | 2,735 | +355.0 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 36,830 | 6,855 | +24.3 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 36,824 | 3,311 | +26.0 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 36,408 | 2,785 | +117.9 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 36,097 | 4,048 | +70.2 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,475 | 2,381 | +169.7 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 35,466 | 2,254 | +83.8 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 34,733 | 3,079 | +194.9 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 34,147 | 4,977 | +197.2 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 33,167 | 5,403 | +252.5 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 33,083 | 9,072 | +49.0 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,755 | 4,934 | +10.7 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 32,726 | 3,371 | +53.2 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 32,540 | 3,917 | +180.2 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 31,304 | 2,848 | +147.0 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 31,068 | 3,468 | +75.5 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 30,819 | 1,807 | +40.6 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 30,450 | 3,125 | +205.7 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 30,396 | 2,073 | +333.3 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 29,577 | 3,079 | +279.3 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 29,261 | 4,099 | +54.3 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 29,170 | 2,859 | +57.1 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,036 | 2,590 | +120.4 |
| [voideditor/void](https://github.com/voideditor/void) | 28,801 | 2,648 | — |
| [decolua/9router](https://github.com/decolua/9router) | 28,251 | 5,120 | +122.8 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 28,247 | 2,451 | +68.3 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,046 | 3,004 | +13.2 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 27,895 | 1,296 | +34.1 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 26,975 | 2,340 | +44.4 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 26,282 | 2,468 | +297.7 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,201 | 4,030 | +7.9 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,348 | 1,118 | +9.1 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 23,192 | 2,911 | +62.6 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,399 | 1,724 | +4.2 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 22,182 | 1,655 | +184.8 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,147 | 771 | +56.4 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 22,031 | 2,711 | +604.0 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 22,010 | 3,181 | +65.7 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 21,850 | 1,573 | +50.4 |
| [jundot/omlx](https://github.com/jundot/omlx) | 21,578 | 1,845 | +56.9 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 21,574 | 2,484 | +236.6 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,572 | 3,115 | +6.6 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,441 | 2,846 | +8.6 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 21,193 | 1,870 | +74.9 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 20,569 | 2,196 | +59.8 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 20,534 | 3,315 | +64.1 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,619 | 1,196 | +15.8 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 19,421 | 2,232 | +188.4 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 19,347 | 1,853 | +27.7 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 18,970 | 2,458 | +36.3 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 18,809 | 1,824 | +154.9 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 18,226 | 2,563 | +42.4 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,171 | 2,294 | +4.0 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,045 | 1,582 | +8.4 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 17,466 | 1,709 | +27.2 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 17,421 | 1,540 | +62.9 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,861 | 1,765 | +9.2 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 16,541 | 3,382 | +15.0 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 16,358 | 1,605 | +20.9 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,272 | 2,425 | +83.3 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 15,961 | 1,373 | +43.7 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 15,726 | 2,312 | +18.0 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,583 | 1,784 | +5.6 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 15,041 | 1,500 | +78.1 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,945 | 1,520 | +9.0 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,894 | 3,293 | +9.2 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,403 | 1,066 | +6.3 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,321 | 8,541 | +11.7 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 14,025 | 1,257 | +25.5 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 13,490 | 1,298 | +171.5 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,024 | 1,345 | +27.4 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 12,848 | 917 | +42.9 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 12,822 | 563 | +21.1 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 12,322 | 1,489 | +47.6 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 11,770 | 2,429 | +24.1 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 11,458 | 2,387 | +33.0 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 11,458 | 2,387 | +31.8 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 11,260 | 1,030 | +16.9 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,188 | 722 | +117.4 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,029 | 5,665 | +5.7 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,004 | 1,801 | +1.8 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 11,003 | 1,324 | +32.5 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 10,940 | 817 | +37.4 |
| [openai/codex-security](https://github.com/openai/codex-security) | 10,619 | 771 | +61.5 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,298 | 7,749 | +5.9 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,066 | 812 | +15.9 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 9,916 | 854 | +56.5 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,624 | 719 | +4.3 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,205 | 290 | +42.4 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 9,052 | 843 | +3.0 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,977 | 874 | +5.6 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,371 | 642 | +0.7 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,095 | 193 | +1.1 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,617 | 1,147 | +1.3 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 7,497 | 532 | +44.5 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 7,164 | 594 | +88.7 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 7,002 | 562 | +15.3 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,002 | 562 | +11.3 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 6,752 | 918 | +20.1 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,610 | 444 | +3.4 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,605 | 360 | +14.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,362 | 243 | +4.2 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,175 | 602 | +3.0 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,082 | 422 | +0.2 |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 87 | 4 | — |
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
