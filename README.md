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

> Auto-updated daily — last refreshed 2026-09-24

| Metric | Value |
|---|---|
| Repos tracked | **201** |
| Total stars | **9,915,028** |
| Total forks | **1,445,840** |
| Fastest growing | **ponytail** (+1034.5/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 145,260 | +1034.5 |
| 2 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 35,053 | +872.6 |
| 3 | [stablyai/orca](https://github.com/stablyai/orca) | 77,000 | +805.2 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 248,555 | +750.1 |
| 5 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 69,722 | +719.6 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 390,371 | 82,125 | +141.0 |
| [obra/superpowers](https://github.com/obra/superpowers) | 290,939 | 26,033 | +589.0 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 266,410 | 39,817 | +637.0 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 266,410 | 39,817 | +608.0 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 248,555 | 52,562 | +750.1 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,516 | 45,993 | +24.1 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 186,717 | 13,771 | +475.4 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 171,141 | 21,988 | +66.9 |
| [langgenius/dify](https://github.com/langgenius/dify) | 157,049 | 24,753 | +118.1 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 152,978 | 22,380 | +120.0 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 146,971 | 24,591 | +77.1 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 145,260 | 7,787 | +1034.5 |
| [github/spec-kit](https://github.com/github/spec-kit) | 138,666 | 12,423 | +304.5 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 136,213 | 9,308 | +481.9 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 130,257 | 13,855 | +390.8 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 121,046 | 11,669 | +412.7 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 120,413 | 63,385 | +72.1 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 107,624 | 6,233 | +357.5 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 97,890 | 11,359 | +416.4 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 94,885 | 12,554 | +237.6 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 94,581 | 8,363 | +143.3 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 92,596 | 22,610 | +94.9 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 89,731 | 6,100 | +515.8 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 89,041 | 11,719 | +117.1 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,811 | 58,991 | +6.0 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 87,307 | 13,295 | +255.3 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 85,188 | 7,479 | +571.4 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 82,801 | 15,920 | +43.3 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 81,620 | 5,165 | +248.4 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 80,733 | 10,044 | +233.1 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 78,587 | 8,640 | +30.1 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 77,548 | 12,469 | +127.7 |
| [stablyai/orca](https://github.com/stablyai/orca) | 77,000 | 5,047 | +805.2 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 76,685 | 7,022 | +94.5 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,155 | 12,887 | +19.7 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 75,579 | 8,772 | +117.8 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 73,674 | 5,684 | +450.6 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 73,674 | 5,684 | +295.4 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 72,576 | 13,652 | +211.9 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 72,576 | 13,652 | +129.1 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 70,134 | 4,796 | +165.5 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 69,722 | 9,894 | +719.6 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 69,360 | 5,716 | +85.5 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 68,194 | 11,073 | +215.6 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,726 | 13,499 | +3.8 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 66,287 | 6,591 | +99.1 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 65,566 | 54,788 | +219.1 |
| [usestrix/strix](https://github.com/usestrix/strix) | 64,463 | 7,056 | +337.0 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 62,746 | 5,459 | +278.5 |
| [tw93/Pake](https://github.com/tw93/Pake) | 61,695 | 12,708 | +100.1 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 61,114 | 7,772 | +382.3 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 59,534 | 11,730 | +94.2 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 59,261 | 7,568 | +53.2 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 55,846 | 9,861 | +256.4 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 55,561 | 6,928 | +230.8 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,475 | 25,051 | +20.0 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 54,532 | 4,755 | +80.9 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 53,900 | 6,193 | +31.6 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 53,095 | 8,016 | +150.4 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 52,772 | 4,821 | +252.0 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 52,551 | 4,497 | +98.2 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 51,371 | 7,760 | +173.3 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 50,680 | 5,690 | +647.4 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 50,582 | 10,388 | +115.8 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 49,348 | 3,821 | +163.6 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,143 | 4,987 | +32.4 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 48,838 | 11,721 | +110.5 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 48,833 | 3,479 | +130.0 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 48,538 | 8,577 | +45.4 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,099 | 10,375 | +19.7 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 46,857 | 6,825 | +67.0 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 46,857 | 6,825 | +52.3 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 46,436 | 4,198 | +174.1 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 44,835 | 9,189 | +60.4 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 44,763 | 3,648 | +277.4 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 43,781 | 15,074 | +304.1 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 43,147 | 2,732 | +40.9 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 42,212 | 7,143 | +72.3 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,851 | 4,260 | +14.4 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 41,033 | 3,563 | +52.2 |
| [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) | 41,033 | 3,563 | +6.9 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 40,948 | 2,970 | +64.0 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 40,516 | 3,091 | +351.5 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 40,516 | 3,091 | +321.7 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 40,453 | 2,908 | +380.8 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 40,084 | 3,952 | +35.0 |
| [wshobson/agents](https://github.com/wshobson/agents) | 39,917 | 4,250 | +32.6 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,764 | 6,245 | +5.0 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 39,349 | 5,004 | +45.4 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 39,331 | 3,513 | +36.9 |
| [google/langextract](https://github.com/google/langextract) | 38,664 | 2,709 | +17.3 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 38,593 | 3,009 | +122.8 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 37,180 | 3,335 | +26.0 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 37,101 | 2,366 | +87.8 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,016 | 6,868 | +23.0 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 36,678 | 4,136 | +66.7 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,700 | 2,420 | +149.8 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 35,261 | 3,127 | +173.1 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 35,053 | 4,135 | +872.6 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 34,940 | 5,091 | +177.7 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 33,949 | 5,531 | +220.8 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 33,513 | 9,100 | +46.8 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 33,304 | 4,045 | +161.5 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 33,105 | 3,514 | +203.3 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,088 | 3,432 | +49.9 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,876 | 4,950 | +10.4 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 32,284 | 3,629 | +77.0 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 32,227 | 3,352 | +238.6 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 31,759 | 2,904 | +131.1 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 31,169 | 2,130 | +284.6 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 31,133 | 1,849 | +38.4 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 29,734 | 4,175 | +51.7 |
| [decolua/9router](https://github.com/decolua/9router) | 29,725 | 5,591 | +120.3 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 29,594 | 2,890 | +53.6 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 29,557 | 3,979 | +131.3 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,192 | 2,621 | +105.3 |
| [voideditor/void](https://github.com/voideditor/void) | 28,794 | 2,651 | — |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 28,780 | 2,498 | +64.4 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,180 | 3,023 | +12.8 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 28,146 | 1,305 | +32.0 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 27,383 | 2,398 | +41.5 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 27,228 | 2,614 | +253.6 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,293 | 4,039 | +7.7 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,419 | 1,123 | +8.5 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 24,280 | 3,013 | +67.3 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 24,010 | 1,732 | +64.8 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 22,717 | 2,616 | +166.6 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,482 | 786 | +51.1 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,401 | 1,723 | +3.7 |
| [jundot/omlx](https://github.com/jundot/omlx) | 22,169 | 1,921 | +54.8 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 21,861 | 1,999 | +70.8 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,648 | 3,121 | +6.5 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,489 | 2,851 | +7.9 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 20,922 | 2,219 | +52.5 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 20,916 | 3,381 | +58.6 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 20,714 | 2,653 | +205.8 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 20,614 | 2,003 | +148.8 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 20,085 | 2,329 | +161.4 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,694 | 1,201 | +14.3 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 19,534 | 1,870 | +25.7 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,118 | 2,477 | +32.5 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 18,557 | 2,628 | +39.6 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,462 | 1,634 | +11.4 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 18,323 | 1,622 | +63.4 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,211 | 2,289 | +3.8 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 18,195 | 1,573 | +105.5 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,080 | 1,763 | +29.9 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 17,576 | 2,575 | +69.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 16,919 | 3,553 | +16.8 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,908 | 1,765 | +8.4 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 16,633 | 1,636 | +20.5 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 16,594 | 1,413 | +43.9 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,517 | 2,468 | +71.8 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 15,969 | 2,353 | +17.9 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 15,895 | 1,603 | +75.1 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 15,714 | 1,334 | +167.6 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,656 | 1,789 | +5.5 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,024 | 1,533 | +8.5 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,905 | 3,296 | +8.0 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,697 | 8,584 | +15.8 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 14,564 | 1,306 | +27.6 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,428 | 1,070 | +5.6 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,459 | 1,392 | +28.0 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,171 | 923 | +39.7 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,007 | 577 | +19.9 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 12,598 | 1,515 | +42.7 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 12,090 | 2,473 | +35.1 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 12,090 | 2,473 | +34.7 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 12,072 | 2,462 | +23.7 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 11,563 | 1,056 | +17.7 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,375 | 725 | +79.1 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,208 | 857 | +34.2 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 11,189 | 1,374 | +29.1 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,072 | 5,659 | +5.3 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,022 | 1,804 | +1.7 |
| [openai/codex-security](https://github.com/openai/codex-security) | 10,838 | 814 | +49.2 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,308 | 7,733 | +5.1 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,135 | 817 | +14.0 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,092 | 866 | +48.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,640 | 722 | +3.9 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,376 | 308 | +36.6 |
| [trailhq/Graft](https://github.com/trailhq/Graft) | 9,144 | 833 | +155.5 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 9,116 | 848 | +3.3 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9,044 | 897 | +5.4 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 8,997 | 367 | +278.3 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,424 | 646 | +1.2 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,100 | 195 | +0.9 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 7,648 | 551 | +34.0 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 7,636 | 994 | +82.0 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,609 | 1,143 | +0.9 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 7,337 | 622 | +25.8 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 7,166 | 973 | +25.6 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 7,055 | 573 | +12.8 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,055 | 573 | +5.1 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 6,736 | 550 | +55.0 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,681 | 372 | +12.3 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,652 | 445 | +3.3 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,440 | 244 | +4.5 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,192 | 603 | +2.6 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,080 | 423 | +0.1 |
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
