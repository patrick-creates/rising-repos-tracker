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

> Auto-updated daily — last refreshed 2026-09-26

| Metric | Value |
|---|---|
| Repos tracked | **201** |
| Total stars | **9,944,967** |
| Total forks | **1,449,737** |
| Fastest growing | **ponytail** (+1022.5/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 146,183 | +1022.5 |
| 2 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 35,615 | +810.3 |
| 3 | [stablyai/orca](https://github.com/stablyai/orca) | 78,577 | +804.8 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 249,071 | +742.8 |
| 5 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 70,316 | +709.3 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 390,547 | 82,152 | +140.3 |
| [obra/superpowers](https://github.com/obra/superpowers) | 291,808 | 26,117 | +585.7 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 267,676 | 39,983 | +637.0 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 267,676 | 39,983 | +608.4 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 249,071 | 52,843 | +742.8 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,567 | 45,993 | +24.2 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 187,095 | 13,813 | +471.2 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 171,294 | 21,995 | +67.1 |
| [langgenius/dify](https://github.com/langgenius/dify) | 157,242 | 24,785 | +117.8 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 153,212 | 22,409 | +120.0 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 147,082 | 24,612 | +76.8 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 146,183 | 7,843 | +1022.5 |
| [github/spec-kit](https://github.com/github/spec-kit) | 138,947 | 12,442 | +302.1 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 137,015 | 9,333 | +480.7 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 130,722 | 13,893 | +388.4 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 121,527 | 11,710 | +407.0 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 120,582 | 63,434 | +72.3 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 107,892 | 6,252 | +354.0 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 98,133 | 11,387 | +411.9 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 95,064 | 12,565 | +235.3 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 94,717 | 8,374 | +142.2 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 92,705 | 22,679 | +94.3 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 90,229 | 6,147 | +511.2 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 89,187 | 11,747 | +116.5 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,813 | 58,977 | +5.9 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 87,400 | 13,323 | +252.2 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 85,511 | 7,513 | +563.9 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 82,836 | 15,922 | +42.9 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 81,739 | 5,179 | +245.5 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 80,868 | 10,059 | +230.6 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 78,640 | 8,646 | +30.1 |
| [stablyai/orca](https://github.com/stablyai/orca) | 78,577 | 5,140 | +804.8 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 77,622 | 12,479 | +126.3 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 76,806 | 7,047 | +93.9 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,205 | 12,895 | +19.8 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 75,654 | 8,790 | +116.5 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 73,838 | 5,698 | +443.4 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 73,838 | 5,698 | +291.0 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 72,844 | 13,692 | +129.6 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 72,843 | 13,691 | +210.7 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 70,412 | 4,821 | +165.1 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 70,316 | 9,982 | +709.3 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 69,431 | 5,717 | +84.8 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 68,373 | 11,111 | +213.6 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,738 | 13,497 | +3.8 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 66,372 | 6,602 | +98.3 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 65,668 | 54,844 | +216.4 |
| [usestrix/strix](https://github.com/usestrix/strix) | 64,896 | 7,109 | +334.9 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 62,866 | 5,472 | +274.5 |
| [tw93/Pake](https://github.com/tw93/Pake) | 61,736 | 12,714 | +98.9 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 61,339 | 7,806 | +376.3 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 59,648 | 11,792 | +93.6 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 59,283 | 7,564 | +52.5 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 57,825 | 10,055 | +268.9 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 55,735 | 6,943 | +228.3 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,485 | 25,051 | +19.7 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 54,631 | 4,761 | +80.4 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 53,937 | 6,195 | +31.4 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 53,231 | 8,028 | +149.1 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 53,159 | 4,848 | +250.9 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 52,618 | 4,846 | +97.2 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 51,552 | 7,788 | +171.9 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 51,093 | 5,731 | +634.4 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 50,702 | 10,394 | +114.7 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 49,507 | 3,830 | +160.9 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,199 | 4,995 | +32.4 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 48,912 | 11,742 | +109.3 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 48,889 | 3,485 | +128.2 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 48,584 | 8,583 | +45.1 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,123 | 10,372 | +19.6 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 46,933 | 6,838 | +66.6 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 46,933 | 6,838 | +51.9 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 46,692 | 4,220 | +169.3 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 44,964 | 9,214 | +60.4 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 44,946 | 3,677 | +273.2 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 44,011 | 15,152 | +299.0 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 43,215 | 2,732 | +40.8 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 42,304 | 7,160 | +71.7 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,863 | 4,262 | +14.3 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 41,474 | 2,980 | +384.0 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 41,032 | 3,564 | +51.3 |
| [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) | 41,032 | 3,564 | +6.1 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 41,031 | 2,978 | +63.6 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 40,817 | 3,117 | +346.6 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 40,817 | 3,117 | +315.3 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 40,116 | 3,956 | +33.0 |
| [wshobson/agents](https://github.com/wshobson/agents) | 39,985 | 4,263 | +32.7 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,775 | 6,247 | +5.0 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 39,408 | 5,009 | +45.2 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 39,359 | 3,515 | +36.6 |
| [google/langextract](https://github.com/google/langextract) | 38,879 | 2,719 | +18.7 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 38,703 | 3,019 | +121.6 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 37,197 | 3,340 | +25.7 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 37,176 | 2,370 | +87.0 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 37,026 | 4,160 | +68.5 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,022 | 6,867 | +22.7 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,712 | 2,418 | +147.1 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 35,615 | 4,180 | +810.3 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 35,267 | 3,132 | +169.8 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 35,267 | 5,153 | +177.4 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 34,058 | 5,542 | +217.1 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 33,533 | 9,104 | +46.1 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 33,397 | 4,054 | +159.1 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 33,349 | 3,548 | +201.6 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,134 | 3,440 | +49.5 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,886 | 4,953 | +10.3 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 32,487 | 3,390 | +232.1 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 32,371 | 3,637 | +76.4 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 31,798 | 2,906 | +129.0 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 31,255 | 2,131 | +278.8 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 31,154 | 1,852 | +37.9 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 30,198 | 4,054 | +135.0 |
| [decolua/9router](https://github.com/decolua/9router) | 29,827 | 5,618 | +119.0 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 29,775 | 4,182 | +51.1 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 29,627 | 2,892 | +53.0 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,212 | 2,623 | +103.4 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 28,867 | 2,512 | +64.0 |
| [voideditor/void](https://github.com/voideditor/void) | 28,791 | 2,656 | — |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,193 | 3,025 | +12.7 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 28,174 | 1,308 | +31.7 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 27,416 | 2,409 | +40.8 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 27,285 | 2,624 | +247.6 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,309 | 4,043 | +7.7 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,427 | 1,123 | +8.5 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 24,315 | 3,013 | +65.2 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 24,076 | 1,737 | +64.2 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 22,850 | 2,627 | +160.5 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,505 | 786 | +50.3 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,406 | 1,719 | +3.6 |
| [jundot/omlx](https://github.com/jundot/omlx) | 22,256 | 1,932 | +54.6 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 21,931 | 2,007 | +70.1 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,645 | 3,121 | +6.3 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,494 | 2,852 | +7.8 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 21,146 | 2,706 | +207.5 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 20,947 | 3,383 | +57.7 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 20,941 | 2,215 | +51.2 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 20,731 | 2,009 | +145.8 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 20,137 | 2,336 | +157.8 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,699 | 1,202 | +14.1 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 19,548 | 1,871 | +25.3 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,136 | 2,478 | +32.0 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 18,597 | 2,642 | +39.2 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,474 | 1,636 | +11.3 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 18,380 | 1,627 | +61.9 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 18,324 | 1,589 | +98.7 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,206 | 2,290 | +3.7 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,119 | 1,765 | +29.7 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 17,710 | 2,596 | +68.8 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 16,946 | 3,568 | +16.7 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,913 | 1,766 | +8.3 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 16,665 | 1,419 | +43.7 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 16,665 | 1,636 | +20.4 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,541 | 2,474 | +70.3 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 16,084 | 1,636 | +75.6 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 15,990 | 2,356 | +17.7 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 15,703 | 1,334 | +160.2 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,662 | 1,789 | +5.4 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,035 | 1,534 | +8.4 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,906 | 3,294 | +7.8 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,720 | 8,585 | +15.6 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 14,654 | 1,306 | +28.0 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,427 | 1,070 | +5.5 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,490 | 1,399 | +27.7 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,207 | 922 | +39.2 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,030 | 579 | +19.7 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 12,625 | 1,518 | +42.0 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 12,190 | 2,495 | +35.5 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 12,190 | 2,495 | +35.1 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 12,107 | 2,468 | +23.6 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 11,596 | 1,060 | +17.6 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,404 | 727 | +75.8 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,249 | 862 | +33.9 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 11,193 | 1,376 | +28.5 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,071 | 5,657 | +5.2 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,024 | 1,804 | +1.7 |
| [openai/codex-security](https://github.com/openai/codex-security) | 10,851 | 816 | +47.6 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,311 | 7,732 | +5.0 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,146 | 816 | +13.8 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,096 | 864 | +46.8 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,641 | 722 | +3.9 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 9,497 | 381 | +273.6 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,400 | 309 | +35.9 |
| [trailhq/Graft](https://github.com/trailhq/Graft) | 9,237 | 843 | +137.3 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 9,116 | 848 | +3.2 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9,050 | 895 | +5.4 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,426 | 646 | +1.2 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,101 | 195 | +0.9 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 7,766 | 1,008 | +75.2 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 7,653 | 551 | +32.7 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,608 | 1,143 | +0.9 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 7,369 | 623 | +24.8 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 7,182 | 975 | +24.3 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 7,055 | 575 | +12.4 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,055 | 575 | +4.6 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 6,832 | 551 | +52.2 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,689 | 373 | +12.1 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,656 | 446 | +3.3 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,444 | 245 | +4.4 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,196 | 604 | +2.6 |
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
