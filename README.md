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

> Auto-updated daily — last refreshed 2026-10-15

| Metric | Value |
|---|---|
| Repos tracked | **217** |
| Total stars | **11,025,402** |
| Total forks | **1,618,587** |
| Fastest growing | **rea** (+40496.0/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 255,717 | +40496.0 |
| 2 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 67,629 | +1247.6 |
| 3 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 163,945 | +1008.1 |
| 4 | [stablyai/orca](https://github.com/stablyai/orca) | 92,904 | +795.3 |
| 5 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 253,926 | +683.1 |

### 🆕 Recently added

- [morluto/rea](https://github.com/morluto/rea) — added 2026-10-12 — Reverse engineer anything with agents, from app behavior down to native binaries.
- [TencentCloud/Octop](https://github.com/TencentCloud/Octop) — added 2026-10-12 — A smarter, self-hosted AI assistant — multi-user, multi-agent.
- [tt-a1i/archify](https://github.com/tt-a1i/archify) — added 2026-10-05 — Turn any idea, plan, or codebase into a beautiful interactive diagram. An agent skill for Claude Code, Codex, and more.
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 392,059 | 82,449 | +132.8 |
| [obra/superpowers](https://github.com/obra/superpowers) | 299,383 | 26,743 | +554.8 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 279,786 | 41,626 | +612.3 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 279,785 | 41,626 | +637.0 |
| [morluto/rea](https://github.com/morluto/rea) | 255,717 | 64,249 | +40496.0 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 253,926 | 55,114 | +683.1 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 190,329 | 14,138 | +434.3 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,583 | 45,921 | +21.3 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 173,049 | 22,140 | +70.2 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 163,945 | 8,832 | +1008.1 |
| [langgenius/dify](https://github.com/langgenius/dify) | 158,530 | 25,044 | +111.6 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 155,753 | 22,670 | +121.7 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 147,855 | 24,808 | +72.4 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 144,568 | 9,578 | +470.2 |
| [github/spec-kit](https://github.com/github/spec-kit) | 141,344 | 12,655 | +280.5 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 136,017 | 14,461 | +375.0 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 126,672 | 12,231 | +374.7 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 121,382 | 63,977 | +68.6 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 112,019 | 6,499 | +336.7 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 101,257 | 11,654 | +380.6 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 100,875 | 8,835 | +164.5 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 98,053 | 12,856 | +224.9 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 97,534 | 8,544 | +574.1 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 96,865 | 6,569 | +488.6 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 93,836 | 23,408 | +90.0 |
| [stablyai/orca](https://github.com/stablyai/orca) | 92,904 | 5,932 | +795.3 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 90,945 | 12,054 | +113.4 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,848 | 58,821 | +5.4 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 88,489 | 13,540 | +227.5 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 83,830 | 5,671 | +599.7 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 83,426 | 5,301 | +225.7 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 83,242 | 15,983 | +40.3 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 83,227 | 10,316 | +217.1 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,183 | 8,698 | +29.9 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 78,616 | 12,586 | +116.9 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 78,034 | 7,208 | +90.2 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 77,148 | 9,111 | +111.7 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 76,758 | 11,098 | +639.7 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,610 | 12,930 | +20.0 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 75,394 | 5,851 | +387.1 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 75,394 | 5,851 | +256.4 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 74,771 | 13,991 | +115.5 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 74,770 | 13,991 | +196.8 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 74,732 | 8,893 | +84.1 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 72,002 | 4,924 | +154.8 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,056 | 5,763 | +78.2 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 69,674 | 11,325 | +195.3 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 69,383 | 12,158 | +316.3 |
| [usestrix/strix](https://github.com/usestrix/strix) | 68,689 | 7,614 | +316.0 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 68,405 | 8,771 | +375.5 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 67,629 | 7,415 | +1247.6 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 67,570 | 6,741 | +93.8 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,860 | 13,480 | +4.1 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 66,383 | 55,255 | +192.6 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 64,354 | 5,615 | +245.6 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 64,031 | 5,749 | +298.2 |
| [tw93/Pake](https://github.com/tw93/Pake) | 62,102 | 12,786 | +88.8 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 61,295 | 12,366 | +92.7 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 59,572 | 7,563 | +47.8 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 57,531 | 7,203 | +209.6 |
| [blader/humanizer](https://github.com/blader/humanizer) | 57,097 | 4,524 | +269.6 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 55,732 | 4,823 | +77.6 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,505 | 25,069 | +17.4 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 55,300 | 8,449 | +143.7 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 54,814 | 8,121 | +171.9 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,404 | 6,251 | +30.5 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 54,340 | 6,192 | +533.2 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 53,570 | 6,628 | +91.2 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 52,100 | 3,984 | +155.1 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,262 | 10,506 | +101.4 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 50,004 | 12,032 | +102.4 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 49,847 | 4,449 | +167.7 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 49,573 | 3,518 | +115.4 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,561 | 5,061 | +30.7 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,046 | 8,631 | +42.4 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 47,634 | 6,946 | +62.6 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 47,634 | 6,946 | +48.9 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,409 | 10,397 | +19.0 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 47,280 | 3,443 | +369.2 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 46,856 | 16,211 | +268.9 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 46,623 | 3,840 | +240.7 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 45,715 | 9,397 | +57.7 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 45,715 | 9,397 | +40.6 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 44,240 | 2,745 | +42.5 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 44,119 | 3,487 | +314.1 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 44,119 | 3,487 | +278.5 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 43,302 | 7,365 | +68.5 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,025 | 4,278 | +13.5 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,001 | 4,132 | +66.1 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 41,923 | 3,066 | +61.3 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 41,091 | 3,569 | +44.9 |
| [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) | 41,091 | 3,569 | +4.6 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,091 | 3,569 | +4.3 |
| [wshobson/agents](https://github.com/wshobson/agents) | 40,821 | 4,334 | +34.2 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 40,036 | 5,125 | +43.6 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 39,968 | 3,179 | +113.5 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 39,921 | 3,582 | +35.6 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,796 | 6,240 | +4.2 |
| [google/langextract](https://github.com/google/langextract) | 38,955 | 2,718 | +16.8 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 38,186 | 4,283 | +67.5 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 37,934 | 2,437 | +80.4 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 37,564 | 3,364 | +24.8 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,167 | 6,888 | +20.7 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 36,809 | 5,413 | +162.4 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,802 | 2,454 | +126.2 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 35,711 | 3,182 | +147.0 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 35,538 | 5,765 | +192.6 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 35,499 | 3,879 | +187.0 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 35,337 | 3,997 | +88.1 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 34,920 | 3,671 | +194.1 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 34,481 | 4,197 | +142.3 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 34,121 | 4,546 | +146.1 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 33,896 | 9,134 | +42.4 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 33,896 | 9,134 | +25.1 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,548 | 3,483 | +45.6 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,980 | 4,976 | +9.6 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,160 | 2,948 | +111.9 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 32,037 | 2,184 | +234.1 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 31,512 | 1,905 | +35.3 |
| [decolua/9router](https://github.com/decolua/9router) | 30,837 | 5,953 | +108.7 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,294 | 2,968 | +50.3 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 30,290 | 4,254 | +47.6 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 29,516 | 2,062 | +98.8 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 29,486 | 2,602 | +59.4 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,451 | 2,676 | +89.3 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 29,226 | 2,838 | +218.2 |
| [voideditor/void](https://github.com/voideditor/void) | 28,754 | 2,654 | — |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 28,540 | 1,329 | +29.8 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,372 | 3,035 | +12.2 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,177 | 2,506 | +40.6 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 28,044 | 1,523 | +301.1 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 26,790 | 2,425 | +186.9 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,398 | 4,054 | +7.3 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,500 | 1,129 | +7.8 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 24,881 | 3,090 | +55.0 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 24,138 | 2,774 | +126.7 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 23,673 | 3,146 | +161.8 |
| [jundot/omlx](https://github.com/jundot/omlx) | 22,826 | 2,023 | +50.8 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,700 | 798 | +43.2 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 22,519 | 2,118 | +63.6 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,418 | 1,727 | +3.2 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 22,351 | 2,490 | +308.9 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,715 | 3,130 | +5.9 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,706 | 2,881 | +8.3 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 21,419 | 2,272 | +45.5 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,270 | 3,423 | +51.0 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 20,830 | 2,418 | +133.2 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 20,240 | 1,776 | +100.0 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 19,883 | 2,187 | +99.0 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 19,731 | 1,885 | +22.9 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,713 | 1,201 | +12.0 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,454 | 2,495 | +29.5 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,005 | 1,681 | +53.5 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 18,965 | 2,767 | +67.1 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 18,939 | 2,740 | +35.7 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,708 | 1,685 | +11.5 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,437 | 1,820 | +27.4 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,220 | 2,297 | +3.2 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 17,774 | 7,538 | — |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,566 | 1,776 | +46.4 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 17,515 | 1,472 | +43.9 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,147 | 3,716 | +15.7 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,993 | 1,775 | +7.6 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 16,913 | 1,677 | +18.5 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,754 | 2,512 | +59.2 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,292 | 2,404 | +17.4 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,757 | 1,793 | +5.3 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 15,208 | 1,354 | +28.2 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,152 | 1,559 | +8.1 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,020 | 8,608 | +15.7 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,911 | 3,276 | +6.6 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,545 | 1,091 | +5.6 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 14,192 | 504 | +257.4 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,659 | 1,442 | +24.4 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,438 | 935 | +34.5 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,292 | 599 | +18.6 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 12,909 | 1,548 | +36.9 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 12,802 | 2,621 | +34.8 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 12,802 | 2,621 | +34.5 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 12,796 | 2,618 | +25.8 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 11,868 | 1,087 | +17.0 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,452 | 894 | +29.5 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,447 | 742 | +52.1 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 11,419 | 1,409 | +25.3 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,419 | 1,409 | +11.5 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,109 | 5,653 | +4.6 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,107 | 868 | +38.7 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,023 | 1,801 | +1.4 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,315 | 7,702 | +4.2 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,279 | 906 | +39.3 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,227 | 838 | +12.0 |
| [trailhq/Graft](https://github.com/trailhq/Graft) | 10,046 | 889 | +79.3 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 9,973 | 1,102 | +9.5 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 9,720 | 1,245 | +97.1 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,691 | 736 | +3.7 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,612 | 316 | +30.9 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 9,487 | 2,053 | +28.2 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 9,452 | 1,176 | +205.0 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 9,250 | 664 | +47.5 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,250 | 664 | +57.0 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 8,942 | 647 | +75.4 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,900 | 901 | +2.9 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,686 | 842 | — |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,421 | 647 | +0.9 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,111 | 195 | +0.9 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 7,890 | 668 | +26.1 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 7,663 | 1,011 | +24.7 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,605 | 1,143 | +0.7 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 7,098 | 581 | +10.2 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,098 | 581 | +3.4 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,057 | 561 | +20.3 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,761 | 374 | +10.3 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,714 | 450 | +3.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,476 | 248 | +3.8 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,218 | 604 | +2.3 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,078 | 424 | +0.1 |
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
