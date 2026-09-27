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

> Auto-updated daily — last refreshed 2026-09-27

| Metric | Value |
|---|---|
| Repos tracked | **201** |
| Total stars | **9,960,696** |
| Total forks | **1,451,891** |
| Fastest growing | **ponytail** (+1017.3/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 146,700 | +1017.3 |
| 2 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 38,234 | +900.8 |
| 3 | [stablyai/orca](https://github.com/stablyai/orca) | 79,188 | +802.5 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 249,331 | +739.3 |
| 5 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 70,608 | +704.3 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 390,622 | 82,165 | +139.8 |
| [obra/superpowers](https://github.com/obra/superpowers) | 292,041 | 26,136 | +582.1 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 268,083 | 40,051 | +635.3 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 268,083 | 40,051 | +606.8 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 249,331 | 52,977 | +739.3 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,586 | 45,989 | +24.1 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 187,231 | 13,829 | +468.8 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 171,374 | 21,998 | +67.2 |
| [langgenius/dify](https://github.com/langgenius/dify) | 157,310 | 24,795 | +117.4 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 153,308 | 22,433 | +119.8 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 147,142 | 24,629 | +76.7 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 146,700 | 7,881 | +1017.3 |
| [github/spec-kit](https://github.com/github/spec-kit) | 139,054 | 12,457 | +300.7 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 137,371 | 9,338 | +479.8 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 130,928 | 13,913 | +387.1 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 121,750 | 11,721 | +404.1 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 120,645 | 63,458 | +72.2 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 107,997 | 6,263 | +352.2 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 98,250 | 11,393 | +409.7 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 95,152 | 12,571 | +234.1 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 94,767 | 8,381 | +141.5 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 92,763 | 22,705 | +94.0 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 90,484 | 6,158 | +509.1 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 89,264 | 11,765 | +116.2 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,816 | 58,970 | +5.9 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 87,456 | 13,326 | +250.7 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 85,676 | 7,532 | +560.4 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 82,848 | 15,925 | +42.7 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 81,794 | 5,187 | +244.1 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 80,955 | 10,068 | +229.5 |
| [stablyai/orca](https://github.com/stablyai/orca) | 79,188 | 5,185 | +802.5 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 78,658 | 8,646 | +30.0 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 77,661 | 12,480 | +125.6 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 76,852 | 7,055 | +93.6 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,225 | 12,894 | +19.8 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 75,704 | 8,803 | +116.0 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 73,919 | 5,708 | +440.0 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 73,919 | 5,708 | +288.8 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 72,896 | 13,699 | +209.5 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 72,895 | 13,699 | +125.7 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 70,608 | 10,035 | +704.3 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 70,464 | 4,831 | +164.2 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 69,550 | 5,726 | +85.0 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 68,422 | 11,115 | +212.4 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,735 | 13,498 | +3.7 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 66,417 | 6,608 | +97.9 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 65,702 | 54,859 | +214.9 |
| [usestrix/strix](https://github.com/usestrix/strix) | 65,103 | 7,148 | +333.8 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 62,979 | 5,481 | +273.0 |
| [tw93/Pake](https://github.com/tw93/Pake) | 61,747 | 12,716 | +98.2 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 61,468 | 7,823 | +373.5 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 59,699 | 11,814 | +93.3 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 59,302 | 7,564 | +52.3 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 58,678 | 10,167 | +273.9 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 55,813 | 6,953 | +227.0 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,486 | 25,050 | +19.6 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 54,667 | 4,765 | +80.1 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 53,952 | 6,195 | +31.3 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 53,462 | 4,877 | +251.4 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 53,300 | 8,039 | +148.4 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 52,651 | 4,993 | +96.7 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 51,640 | 7,797 | +171.2 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 51,261 | 5,759 | +627.7 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 50,720 | 10,394 | +113.7 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 49,601 | 3,838 | +159.8 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,214 | 5,000 | +32.2 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 48,954 | 11,753 | +108.8 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 48,925 | 3,486 | +127.5 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 48,605 | 8,588 | +44.9 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,134 | 10,372 | +19.5 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 46,976 | 6,840 | +66.4 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 46,976 | 6,840 | +51.8 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 46,787 | 4,228 | +165.6 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 45,007 | 3,686 | +270.9 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 44,985 | 9,215 | +60.1 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 44,079 | 15,184 | +296.0 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 43,254 | 2,733 | +40.8 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 42,348 | 7,172 | +71.4 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,865 | 4,263 | +14.2 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 41,751 | 3,004 | +382.7 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 41,085 | 2,983 | +63.5 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 41,034 | 3,564 | +50.9 |
| [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) | 41,034 | 3,564 | +5.9 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 40,942 | 3,137 | +343.9 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 40,942 | 3,137 | +311.9 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 40,140 | 3,959 | +32.5 |
| [wshobson/agents](https://github.com/wshobson/agents) | 40,017 | 4,270 | +32.6 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,775 | 6,247 | +4.9 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 39,435 | 5,009 | +45.0 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 39,369 | 3,519 | +36.4 |
| [google/langextract](https://github.com/google/langextract) | 38,896 | 2,720 | +18.7 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 38,765 | 3,025 | +121.1 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 38,234 | 4,535 | +900.8 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 37,209 | 3,340 | +25.6 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 37,204 | 2,376 | +86.5 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 37,069 | 4,163 | +68.3 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,022 | 6,869 | +22.5 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,713 | 2,420 | +145.8 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 35,333 | 5,164 | +176.3 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 35,295 | 3,133 | +168.4 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 34,103 | 5,552 | +215.2 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 33,547 | 9,108 | +45.9 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 33,440 | 4,061 | +157.9 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 33,437 | 3,568 | +200.4 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,157 | 3,444 | +49.2 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,901 | 4,954 | +10.4 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 32,649 | 3,403 | +230.0 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 32,421 | 3,642 | +76.1 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 31,808 | 2,910 | +127.8 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 31,281 | 2,135 | +275.7 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 31,163 | 1,852 | +37.7 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 30,453 | 4,074 | +136.2 |
| [decolua/9router](https://github.com/decolua/9router) | 29,873 | 5,630 | +118.3 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 29,797 | 4,185 | +50.8 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 29,638 | 2,893 | +52.6 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,226 | 2,630 | +102.6 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 28,910 | 2,512 | +63.8 |
| [voideditor/void](https://github.com/voideditor/void) | 28,789 | 2,655 | — |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,200 | 3,025 | +12.6 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 28,186 | 1,309 | +31.5 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 27,427 | 2,414 | +40.4 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 27,306 | 2,628 | +244.6 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,313 | 4,042 | +7.7 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,431 | 1,124 | +8.4 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 24,331 | 3,013 | +64.2 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 24,109 | 1,738 | +63.9 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 22,922 | 2,635 | +157.9 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,511 | 788 | +49.8 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,409 | 1,719 | +3.6 |
| [jundot/omlx](https://github.com/jundot/omlx) | 22,290 | 1,934 | +54.4 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 21,966 | 2,014 | +69.7 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,648 | 3,121 | +6.3 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,495 | 2,852 | +7.8 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 21,301 | 2,729 | +203.5 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 20,960 | 3,383 | +57.3 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 20,953 | 2,216 | +50.7 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 20,811 | 2,015 | +144.7 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 20,157 | 2,337 | +155.9 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,699 | 1,204 | +14.0 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 19,555 | 1,871 | +25.1 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,156 | 2,480 | +31.9 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 18,619 | 2,645 | +39.0 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,491 | 1,639 | +11.3 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 18,411 | 1,634 | +61.2 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 18,405 | 1,602 | +97.3 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,209 | 2,290 | +3.7 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,141 | 1,767 | +29.6 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 17,767 | 2,606 | +67.8 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 16,953 | 3,581 | +16.6 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,922 | 1,766 | +8.3 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 16,695 | 1,417 | +43.6 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 16,674 | 1,638 | +20.2 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,556 | 2,476 | +69.6 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 16,316 | 1,672 | +77.5 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,003 | 2,355 | +17.7 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 15,704 | 1,334 | +156.9 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,665 | 1,788 | +5.4 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,036 | 1,535 | +8.4 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,904 | 3,294 | +7.7 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,730 | 8,585 | +15.5 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 14,670 | 1,306 | +27.9 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,433 | 1,070 | +5.5 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,510 | 1,401 | +27.6 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,222 | 924 | +39.0 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,041 | 579 | +19.6 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 12,641 | 1,519 | +41.7 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 12,218 | 2,500 | +35.4 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 12,218 | 2,500 | +35.0 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 12,140 | 2,473 | +23.7 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 11,603 | 1,061 | +17.5 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,415 | 726 | +74.2 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,257 | 864 | +33.6 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 11,210 | 1,379 | +28.3 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,075 | 5,658 | +5.1 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,024 | 1,804 | +1.7 |
| [openai/codex-security](https://github.com/openai/codex-security) | 10,859 | 818 | +46.9 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,308 | 7,729 | +4.9 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,148 | 817 | +13.6 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,102 | 864 | +46.3 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 9,871 | 390 | +281.3 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,640 | 722 | +3.9 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,406 | 310 | +35.5 |
| [trailhq/Graft](https://github.com/trailhq/Graft) | 9,279 | 844 | +130.0 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 9,118 | 849 | +3.2 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9,070 | 900 | +5.5 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,426 | 646 | +1.2 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,102 | 195 | +0.9 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 7,983 | 566 | +38.9 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 7,932 | 1,030 | +90.3 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,607 | 1,142 | +0.9 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 7,381 | 625 | +24.1 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 7,196 | 975 | +23.9 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 7,059 | 574 | +12.3 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,059 | 574 | +4.5 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 6,873 | 554 | +50.3 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,695 | 372 | +12.0 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,661 | 446 | +3.3 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,448 | 245 | +4.4 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,198 | 604 | +2.6 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,081 | 423 | +0.1 |
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
