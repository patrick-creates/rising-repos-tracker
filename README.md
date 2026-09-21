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

> Auto-updated daily — last refreshed 2026-09-21

| Metric | Value |
|---|---|
| Repos tracked | **201** |
| Total stars | **9,860,158** |
| Total forks | **1,438,982** |
| Fastest growing | **ponytail** (+1048.3/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 143,412 | +1048.3 |
| 2 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 33,721 | +964.4 |
| 3 | [stablyai/orca](https://github.com/stablyai/orca) | 74,151 | +799.6 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 247,619 | +760.1 |
| 5 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 68,741 | +734.9 |

### 🆕 Recently added

- [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) — added 2026-09-21 — Free, open-source AI Office suite: Docs, Sheets, Slides, PDF, Markdown and HTML editors with a built-in AI agent, plus a `genoffice` CLI and agent skill so Claude Code, Codex and Cursor can create and edit real .docx/.xlsx/.pptx files locally. Bring your own key. macOS, Windows & Linux.
- [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) — added 2026-09-21 — The secure, validated skill registry for professional AI coding agents. Extend Antigravity, Claude Code, Cursor, Copilot and more with absolute confidence.
- [every-app/open-seo](https://github.com/every-app/open-seo) — added 2026-09-14 — Open source alternative to Semrush and Ahrefs
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 390,180 | 82,064 | +142.8 |
| [obra/superpowers](https://github.com/obra/superpowers) | 289,501 | 25,904 | +592.6 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 264,274 | 39,506 | +635.3 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 264,274 | 39,506 | +605.4 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 247,619 | 52,097 | +760.1 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,470 | 46,007 | +24.3 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 186,071 | 13,705 | +481.4 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 170,870 | 21,958 | +66.4 |
| [langgenius/dify](https://github.com/langgenius/dify) | 156,707 | 24,709 | +118.2 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 152,683 | 22,342 | +120.5 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 146,781 | 24,544 | +77.5 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 143,412 | 7,683 | +1048.3 |
| [github/spec-kit](https://github.com/github/spec-kit) | 138,135 | 12,380 | +307.4 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 133,920 | 9,244 | +475.2 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 129,460 | 13,792 | +393.6 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 120,170 | 63,264 | +71.9 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 120,037 | 11,600 | +416.8 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 107,075 | 6,199 | +361.6 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 97,390 | 11,307 | +422.3 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 94,618 | 12,526 | +241.4 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 94,375 | 8,335 | +145.0 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 92,313 | 22,470 | +94.9 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 88,908 | 6,053 | +522.3 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,798 | 59,015 | +6.0 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 88,692 | 11,669 | +117.1 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 87,123 | 13,245 | +260.0 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 84,128 | 7,378 | +577.6 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 82,718 | 15,908 | +43.7 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 81,227 | 5,147 | +251.2 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 80,223 | 9,984 | +234.6 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 78,520 | 8,631 | +30.3 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 77,331 | 12,440 | +129.0 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 76,525 | 6,995 | +95.4 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,102 | 12,884 | +19.8 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 75,422 | 8,738 | +119.3 |
| [stablyai/orca](https://github.com/stablyai/orca) | 74,151 | 4,856 | +799.6 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 73,339 | 5,643 | +461.0 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 73,339 | 5,643 | +301.5 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 72,302 | 13,608 | +214.7 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 72,302 | 13,608 | +137.1 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 69,730 | 4,776 | +166.2 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 69,244 | 5,705 | +86.6 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 68,741 | 9,726 | +734.9 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 67,933 | 11,040 | +218.6 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,709 | 13,506 | +3.7 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 66,153 | 6,564 | +100.4 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 65,410 | 54,702 | +223.3 |
| [usestrix/strix](https://github.com/usestrix/strix) | 63,940 | 6,991 | +341.3 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 62,508 | 5,445 | +284.2 |
| [tw93/Pake](https://github.com/tw93/Pake) | 61,564 | 12,689 | +101.5 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 60,609 | 7,691 | +390.0 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 59,307 | 11,631 | +94.6 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 59,192 | 7,562 | +53.9 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,470 | 25,034 | +20.4 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 55,332 | 6,905 | +234.9 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 55,124 | 9,700 | +256.8 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 54,379 | 4,741 | +81.6 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 53,824 | 6,185 | +31.7 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 52,701 | 7,955 | +150.9 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 52,414 | 4,385 | +99.4 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 52,077 | 4,745 | +252.5 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 51,044 | 7,730 | +175.1 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 50,092 | 10,280 | +114.3 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 49,530 | 5,551 | +660.0 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,091 | 4,985 | +32.8 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 48,955 | 3,798 | +165.4 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 48,681 | 3,470 | +132.1 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 48,596 | 11,652 | +111.3 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 48,446 | 8,561 | +45.8 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,061 | 10,368 | +19.9 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 46,684 | 6,805 | +67.3 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 46,684 | 6,805 | +52.0 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 45,869 | 4,160 | +170.9 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 44,538 | 9,144 | +59.4 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 43,946 | 3,583 | +277.6 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 43,516 | 14,936 | +313.3 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 42,961 | 2,725 | +40.4 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 42,062 | 7,102 | +73.0 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,820 | 4,256 | +14.5 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 41,018 | 3,562 | +53.3 |
| [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) | 41,018 | 3,562 | +7.3 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 40,773 | 2,947 | +64.1 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 39,983 | 3,950 | +35.3 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 39,965 | 3,023 | +358.0 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 39,965 | 3,023 | +330.1 |
| [wshobson/agents](https://github.com/wshobson/agents) | 39,847 | 4,248 | +32.9 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,759 | 6,243 | +5.1 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 39,285 | 3,511 | +37.5 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 39,223 | 4,985 | +45.5 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 38,850 | 2,774 | +374.8 |
| [google/langextract](https://github.com/google/langextract) | 38,636 | 2,704 | +17.5 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 38,284 | 2,977 | +123.4 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 37,119 | 3,332 | +26.1 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 36,972 | 6,869 | +23.2 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 36,916 | 2,346 | +88.5 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 36,568 | 4,110 | +67.5 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,658 | 2,414 | +153.6 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 35,180 | 3,119 | +177.6 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 34,726 | 5,058 | +180.9 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 33,764 | 5,507 | +226.5 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 33,721 | 3,978 | +964.4 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 33,464 | 9,097 | +47.6 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 33,056 | 4,004 | +164.1 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,007 | 3,421 | +50.5 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,848 | 4,953 | +10.5 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 32,240 | 3,420 | +200.5 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 32,008 | 3,597 | +76.5 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 31,745 | 3,296 | +247.0 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 31,672 | 2,890 | +134.3 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 31,082 | 1,846 | +39.0 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 30,911 | 2,111 | +292.4 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 29,620 | 4,163 | +52.0 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 29,518 | 2,887 | +54.5 |
| [decolua/9router](https://github.com/decolua/9router) | 29,505 | 5,510 | +121.8 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,148 | 2,617 | +108.1 |
| [voideditor/void](https://github.com/voideditor/void) | 28,797 | 2,650 | — |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 28,665 | 2,485 | +65.1 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 28,326 | 3,810 | +122.8 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,150 | 3,015 | +12.9 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 28,083 | 1,302 | +32.3 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 27,302 | 2,386 | +42.1 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 27,084 | 2,588 | +262.4 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,272 | 4,034 | +7.7 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,401 | 1,123 | +8.6 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 24,177 | 3,009 | +69.7 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 23,830 | 1,720 | +64.9 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 22,482 | 2,597 | +176.1 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,433 | 786 | +52.4 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,407 | 1,720 | +3.8 |
| [jundot/omlx](https://github.com/jundot/omlx) | 21,983 | 1,902 | +54.6 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 21,692 | 1,976 | +71.3 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,628 | 3,119 | +6.5 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,482 | 2,850 | +8.1 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 20,857 | 2,211 | +54.0 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 20,840 | 3,368 | +59.7 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 20,303 | 1,967 | +151.2 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 19,962 | 2,322 | +166.5 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 19,778 | 2,545 | +160.3 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,666 | 1,199 | +14.5 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 19,485 | 1,868 | +26.0 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,070 | 2,471 | +33.0 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 18,484 | 2,612 | +40.1 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,419 | 1,627 | +11.3 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,209 | 2,290 | +3.9 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 18,073 | 1,599 | +61.9 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 17,952 | 1,544 | +116.0 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 17,918 | 1,750 | +29.0 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 17,336 | 2,537 | +64.4 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,903 | 1,770 | +8.6 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 16,875 | 3,536 | +16.8 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 16,575 | 1,629 | +20.6 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,472 | 2,458 | +74.0 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 16,448 | 1,397 | +43.7 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 15,905 | 2,344 | +17.8 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 15,645 | 1,337 | +177.9 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,638 | 1,786 | +5.4 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 15,604 | 1,567 | +74.3 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,016 | 1,533 | +8.7 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,905 | 3,295 | +8.2 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,667 | 8,577 | +16.1 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 14,430 | 1,291 | +27.0 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,420 | 1,071 | +5.7 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,236 | 1,371 | +26.3 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,104 | 925 | +40.3 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 12,967 | 574 | +20.1 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 12,555 | 1,512 | +43.8 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 12,020 | 2,462 | +23.9 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 11,885 | 2,449 | +33.8 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 11,885 | 2,449 | +33.1 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 11,503 | 1,052 | +17.6 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,332 | 723 | +84.6 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 11,157 | 1,368 | +29.8 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,136 | 847 | +34.6 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,061 | 5,661 | +5.3 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,010 | 1,802 | +1.6 |
| [openai/codex-security](https://github.com/openai/codex-security) | 10,814 | 808 | +51.7 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,302 | 7,736 | +5.2 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,118 | 815 | +14.3 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,042 | 863 | +49.4 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,640 | 720 | +4.0 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,351 | 305 | +37.8 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 9,108 | 846 | +3.3 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9,019 | 889 | +5.3 |
| [trailhq/Graft](https://github.com/trailhq/Graft) | 8,888 | 811 | +185.6 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,414 | 647 | +1.1 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 8,187 | 345 | +281.9 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,097 | 195 | +0.9 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 7,625 | 548 | +35.9 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,616 | 1,142 | +1.1 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 7,390 | 964 | +142.1 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 7,319 | 617 | +30.1 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 7,121 | 968 | +27.1 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 7,036 | 569 | +13.1 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,036 | 569 | +4.9 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,667 | 371 | +12.7 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,635 | 445 | +3.2 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 6,571 | 538 | +26.9 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,426 | 245 | +4.4 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,187 | 602 | +2.7 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,084 | 421 | +0.2 |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 89 | 5 | — |
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
