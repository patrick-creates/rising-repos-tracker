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

> Auto-updated daily — last refreshed 2026-10-09

| Metric | Value |
|---|---|
| Repos tracked | **215** |
| Total stars | **10,618,374** |
| Total forks | **1,535,960** |
| Fastest growing | **VoiceStudio** (+1110.1/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 55,741 | +1110.1 |
| 2 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 159,130 | +1019.4 |
| 3 | [stablyai/orca](https://github.com/stablyai/orca) | 88,277 | +796.8 |
| 4 | [tt-a1i/archify](https://github.com/tt-a1i/archify) | 80,835 | +750.5 |
| 5 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 252,176 | +698.9 |

### 🆕 Recently added

- [tt-a1i/archify](https://github.com/tt-a1i/archify) — added 2026-10-05 — Turn any idea, plan, or codebase into a beautiful interactive diagram. An agent skill for Claude Code, Codex, and more.
- [ruvnet/ruflo](https://github.com/ruvnet/ruflo) — added 2026-10-05 — 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated
- [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) — added 2026-10-05 — Open-source coding agent for your terminal, built in Rust and on a journey of continuous community improvement. Issues and PRs welcome.
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 391,525 | 82,306 | +134.6 |
| [obra/superpowers](https://github.com/obra/superpowers) | 296,738 | 26,504 | +561.1 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 275,659 | 41,145 | +635.0 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 275,659 | 41,145 | +609.0 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 252,176 | 54,432 | +698.9 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 189,157 | 14,041 | +444.0 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,496 | 45,929 | +21.6 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 172,225 | 22,070 | +67.5 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 159,130 | 8,551 | +1019.4 |
| [langgenius/dify](https://github.com/langgenius/dify) | 157,986 | 24,945 | +112.5 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 154,106 | 22,553 | +115.5 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 147,443 | 24,744 | +72.5 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 141,788 | 9,474 | +470.4 |
| [github/spec-kit](https://github.com/github/spec-kit) | 140,564 | 12,585 | +286.6 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 134,084 | 14,246 | +377.1 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 124,884 | 12,062 | +380.9 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 121,036 | 63,815 | +69.0 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 110,675 | 6,409 | +341.4 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 100,139 | 11,554 | +388.6 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 98,859 | 8,663 | +157.6 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 97,006 | 12,749 | +227.1 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 94,557 | 8,262 | +577.9 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 93,995 | 6,384 | +489.1 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 93,445 | 23,163 | +91.0 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 90,354 | 11,956 | +114.0 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,840 | 58,894 | +5.6 |
| [stablyai/orca](https://github.com/stablyai/orca) | 88,277 | 5,651 | +796.8 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 88,123 | 13,447 | +234.4 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 83,080 | 15,958 | +40.8 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 82,746 | 5,253 | +230.3 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 82,198 | 10,198 | +219.0 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 80,835 | 5,448 | +750.5 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 78,923 | 8,662 | +29.3 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 78,238 | 12,539 | +119.2 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 77,586 | 7,156 | +90.9 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 76,738 | 9,003 | +113.5 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,492 | 12,928 | +20.0 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 74,802 | 5,800 | +402.1 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 74,802 | 5,800 | +265.1 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 74,484 | 10,733 | +656.1 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 74,171 | 8,815 | +70.0 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 73,875 | 13,865 | +198.8 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 73,875 | 13,865 | +109.2 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 71,446 | 4,880 | +157.3 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 69,919 | 5,744 | +80.5 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 69,236 | 11,249 | +200.4 |
| [usestrix/strix](https://github.com/usestrix/strix) | 67,433 | 7,416 | +320.9 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 67,295 | 6,723 | +95.8 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,777 | 13,476 | +3.7 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 66,077 | 55,044 | +198.8 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 66,045 | 11,463 | +305.2 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 65,691 | 8,343 | +371.0 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 63,809 | 5,561 | +253.2 |
| [tw93/Pake](https://github.com/tw93/Pake) | 61,954 | 12,766 | +91.5 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 60,451 | 12,170 | +90.7 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 59,486 | 5,304 | +275.8 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 59,483 | 7,564 | +49.2 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 56,718 | 7,071 | +213.0 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 55,741 | 6,252 | +1110.1 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,497 | 25,063 | +18.0 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 55,304 | 4,798 | +77.8 |
| [blader/humanizer](https://github.com/blader/humanizer) | 55,092 | 4,352 | +234.5 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 54,594 | 8,318 | +144.9 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,240 | 6,213 | +30.7 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 53,876 | 8,011 | +172.6 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 53,161 | 5,929 | +92.2 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 53,147 | 6,012 | +558.0 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,054 | 10,467 | +104.9 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 51,035 | 3,918 | +153.3 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 49,503 | 11,905 | +103.3 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,431 | 5,039 | +31.0 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 49,318 | 3,500 | +118.7 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 48,896 | 8,620 | +43.2 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 48,127 | 4,333 | +145.3 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 47,382 | 6,910 | +63.5 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 47,382 | 6,910 | +49.3 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,301 | 10,375 | +19.1 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 46,206 | 3,802 | +250.7 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 45,442 | 9,330 | +58.2 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 45,442 | 9,330 | +38.0 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 45,353 | 15,746 | +270.1 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 44,802 | 3,245 | +366.5 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 43,866 | 2,739 | +41.7 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 43,057 | 3,377 | +322.7 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 43,057 | 3,377 | +287.6 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 42,942 | 7,295 | +69.0 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,979 | 4,270 | +13.8 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 41,718 | 4,103 | +69.7 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 41,608 | 3,030 | +61.7 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 41,076 | 3,567 | +46.8 |
| [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) | 41,076 | 3,567 | +5.0 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,076 | 3,567 | +7.0 |
| [wshobson/agents](https://github.com/wshobson/agents) | 40,305 | 4,292 | +31.9 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 39,843 | 5,088 | +44.1 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,790 | 6,243 | +4.4 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 39,725 | 3,557 | +35.8 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 39,494 | 3,117 | +115.2 |
| [google/langextract](https://github.com/google/langextract) | 38,930 | 2,719 | +17.3 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 37,739 | 2,423 | +82.6 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 37,571 | 4,233 | +65.8 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 37,423 | 3,342 | +24.9 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,106 | 6,874 | +21.1 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 36,325 | 5,321 | +166.7 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,751 | 2,438 | +131.9 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 35,530 | 3,160 | +153.0 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 35,054 | 5,686 | +199.2 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 34,744 | 3,775 | +190.3 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 34,270 | 3,607 | +205.2 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 34,201 | 3,814 | +83.2 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 34,010 | 4,130 | +145.8 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 33,696 | 9,106 | +42.8 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 33,696 | 9,106 | +12.8 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,399 | 3,470 | +46.5 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,945 | 4,959 | +9.8 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 32,780 | 4,362 | +142.1 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 31,997 | 2,931 | +116.2 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 31,753 | 2,161 | +245.9 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 31,284 | 1,861 | +35.1 |
| [decolua/9router](https://github.com/decolua/9router) | 30,503 | 5,810 | +111.5 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 30,067 | 4,216 | +48.1 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 29,968 | 2,923 | +50.1 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,365 | 2,639 | +93.2 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 29,257 | 2,559 | +60.4 |
| [voideditor/void](https://github.com/voideditor/void) | 28,768 | 2,656 | — |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 28,420 | 1,313 | +30.3 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,304 | 3,033 | +12.3 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,049 | 2,474 | +42.0 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 27,855 | 2,705 | +217.5 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,367 | 4,050 | +7.4 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 25,863 | 1,870 | +72.4 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,479 | 1,124 | +8.0 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 25,358 | 2,294 | +182.7 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 24,749 | 3,063 | +58.3 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 23,681 | 2,711 | +133.2 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 22,881 | 1,428 | +245.1 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 22,841 | 2,971 | +167.4 |
| [jundot/omlx](https://github.com/jundot/omlx) | 22,654 | 1,990 | +51.9 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,634 | 789 | +45.1 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,421 | 1,710 | +3.4 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 22,339 | 2,082 | +65.5 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,698 | 3,127 | +6.1 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,537 | 2,856 | +7.3 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 21,274 | 2,249 | +47.1 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,139 | 3,396 | +52.6 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 20,529 | 2,254 | +311.8 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 20,362 | 2,370 | +137.0 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 19,753 | 1,731 | +104.5 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,707 | 1,203 | +12.6 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 19,657 | 1,878 | +23.4 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 19,572 | 2,138 | +102.0 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,365 | 2,486 | +30.3 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 18,831 | 2,693 | +36.6 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 18,752 | 1,666 | +54.7 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,621 | 1,665 | +11.3 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 18,587 | 2,724 | +68.1 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,367 | 1,795 | +28.3 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,218 | 2,291 | +3.4 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 17,814 | 7,601 | — |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,319 | 1,750 | +49.3 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 17,173 | 1,442 | +43.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,150 | 3,718 | +16.6 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,978 | 1,765 | +7.9 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 16,818 | 1,657 | +18.7 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,670 | 2,471 | +62.0 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,170 | 2,375 | +17.3 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,723 | 1,785 | +5.3 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,120 | 1,541 | +8.2 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 15,019 | 1,337 | +28.0 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,930 | 8,602 | +15.7 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,914 | 3,281 | +7.0 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,518 | 1,085 | +5.7 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,618 | 1,425 | +25.4 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,378 | 927 | +35.9 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,233 | 590 | +19.1 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 12,782 | 1,534 | +37.9 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 12,578 | 2,548 | +34.7 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 12,578 | 2,548 | +34.3 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 12,561 | 461 | +253.9 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 12,557 | 2,555 | +25.0 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 11,770 | 1,070 | +17.1 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,456 | 728 | +58.2 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,360 | 876 | +30.4 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 11,334 | 1,390 | +26.0 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,334 | 1,390 | +10.0 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,084 | 5,647 | +4.6 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,045 | 859 | +41.2 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,014 | 1,800 | +1.4 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,316 | 7,704 | +4.4 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,224 | 890 | +41.4 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,203 | 827 | +12.5 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 9,920 | 1,096 | +9.8 |
| [trailhq/Graft](https://github.com/trailhq/Graft) | 9,828 | 885 | +89.6 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,673 | 729 | +3.8 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,558 | 310 | +32.4 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 9,509 | 2,066 | +45.5 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 9,140 | 848 | +3.0 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 9,112 | 651 | +49.9 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,112 | 651 | +75.5 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 9,073 | 1,154 | +93.5 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,889 | 893 | +2.9 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 8,504 | 606 | +76.7 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,423 | 644 | +1.0 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,110 | 195 | +0.9 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 7,707 | 650 | +25.3 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,610 | 1,138 | +0.8 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 7,439 | 993 | +22.8 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 7,092 | 579 | +10.9 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,092 | 579 | +3.9 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,044 | 559 | +26.3 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,741 | 373 | +10.8 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,690 | 450 | +3.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,457 | 246 | +3.9 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,217 | 606 | +2.5 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,079 | 422 | +0.1 |
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
