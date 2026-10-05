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

> Auto-updated daily — last refreshed 2026-10-05

| Metric | Value |
|---|---|
| Repos tracked | **215** |
| Total stars | **10,542,291** |
| Total forks | **1,527,183** |
| Fastest growing | **VoiceStudio** (+1186.2/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 53,433 | +1186.2 |
| 2 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 155,529 | +1023.9 |
| 3 | [stablyai/orca](https://github.com/stablyai/orca) | 85,419 | +800.4 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 251,307 | +712.2 |
| 5 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 73,159 | +670.4 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 391,411 | 82,276 | +137.5 |
| [obra/superpowers](https://github.com/obra/superpowers) | 295,445 | 26,394 | +570.2 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 273,285 | 40,786 | +636.1 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 273,285 | 40,786 | +609.4 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 251,307 | 53,959 | +712.2 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 188,547 | 13,960 | +452.0 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,652 | 45,954 | +23.2 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 172,063 | 22,030 | +68.2 |
| [langgenius/dify](https://github.com/langgenius/dify) | 157,869 | 24,909 | +114.8 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 155,529 | 8,361 | +1023.9 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 153,981 | 22,506 | +117.9 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 147,461 | 24,708 | +74.7 |
| [github/spec-kit](https://github.com/github/spec-kit) | 140,182 | 12,547 | +291.9 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 140,181 | 9,424 | +472.4 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 133,145 | 14,107 | +381.0 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 123,920 | 11,956 | +388.9 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 121,020 | 63,682 | +70.8 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 109,910 | 6,358 | +345.7 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 99,493 | 11,503 | +395.1 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 96,467 | 12,704 | +229.9 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 96,368 | 8,506 | +144.7 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 93,205 | 23,010 | +91.9 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 92,712 | 6,292 | +494.4 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 91,414 | 8,029 | +570.9 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 90,018 | 11,900 | +114.9 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,829 | 58,924 | +5.7 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 87,795 | 13,394 | +238.8 |
| [stablyai/orca](https://github.com/stablyai/orca) | 85,419 | 5,497 | +800.4 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 82,983 | 15,957 | +41.3 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 82,407 | 5,246 | +234.5 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 81,712 | 10,151 | +221.8 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 78,835 | 8,659 | +29.5 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 78,022 | 12,510 | +121.0 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 77,833 | 5,231 | +449.8 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 77,210 | 7,114 | +90.8 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 76,524 | 8,955 | +115.3 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,349 | 12,913 | +19.6 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 74,439 | 5,762 | +413.2 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 74,439 | 5,762 | +271.8 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 73,891 | 8,782 | +151.1 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 73,510 | 13,810 | +201.9 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 73,510 | 13,810 | +111.7 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 73,159 | 10,492 | +670.4 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 71,061 | 4,871 | +159.1 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 69,807 | 5,746 | +82.0 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 68,932 | 11,198 | +203.9 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 67,106 | 6,705 | +97.2 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,752 | 13,486 | +3.6 |
| [usestrix/strix](https://github.com/usestrix/strix) | 66,571 | 7,306 | +324.3 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 65,906 | 54,975 | +203.5 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 64,298 | 11,032 | +301.1 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 63,550 | 8,089 | +364.3 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 63,543 | 5,534 | +259.4 |
| [tw93/Pake](https://github.com/tw93/Pake) | 61,912 | 12,740 | +93.8 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 60,146 | 12,032 | +91.1 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 59,413 | 7,560 | +50.1 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 57,017 | 5,109 | +264.3 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 56,404 | 7,029 | +217.3 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,483 | 25,065 | +18.4 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 55,087 | 4,786 | +78.5 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 54,191 | 8,238 | +146.2 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,143 | 6,209 | +30.8 |
| [blader/humanizer](https://github.com/blader/humanizer) | 54,075 | 4,296 | +223.1 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 53,433 | 5,957 | +1186.2 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 53,302 | 7,936 | +173.5 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 52,976 | 5,664 | +93.5 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 52,445 | 5,920 | +577.8 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 50,948 | 10,448 | +107.7 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 50,461 | 3,898 | +153.8 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,374 | 5,032 | +31.5 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 49,269 | 11,847 | +104.6 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 49,159 | 3,489 | +121.2 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 48,793 | 8,609 | +43.7 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 47,648 | 4,303 | +149.0 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 47,261 | 6,886 | +64.5 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 47,261 | 6,886 | +50.2 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,224 | 10,375 | +19.1 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 45,803 | 3,767 | +256.9 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 45,293 | 9,284 | +58.8 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 45,293 | 9,284 | +38.4 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 45,003 | 15,600 | +278.8 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 43,802 | 3,156 | +371.6 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 43,638 | 2,737 | +41.2 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 42,730 | 7,263 | +69.6 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 42,398 | 3,301 | +329.7 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 42,398 | 3,301 | +295.4 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,937 | 4,269 | +13.9 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 41,418 | 3,020 | +62.1 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 41,048 | 3,567 | +48.0 |
| [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) | 41,048 | 3,567 | +4.7 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,048 | 3,567 | +159.1 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 40,641 | 4,027 | +41.1 |
| [wshobson/agents](https://github.com/wshobson/agents) | 40,206 | 4,287 | +32.1 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,776 | 6,243 | +4.5 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 39,716 | 5,060 | +44.4 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 39,584 | 3,540 | +35.8 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 39,222 | 3,089 | +116.8 |
| [google/langextract](https://github.com/google/langextract) | 38,919 | 2,720 | +17.8 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 37,613 | 2,415 | +84.2 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 37,408 | 4,214 | +66.6 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 37,340 | 3,343 | +25.0 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,073 | 6,871 | +21.5 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 35,784 | 5,231 | +167.8 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,729 | 2,441 | +136.2 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 35,445 | 3,153 | +157.7 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 34,751 | 5,639 | +204.2 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 34,330 | 3,717 | +193.7 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 33,793 | 3,535 | +213.4 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 33,791 | 4,099 | +149.2 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 33,645 | 9,105 | +43.7 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 33,645 | 9,105 | +179.9 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,319 | 3,465 | +47.4 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 33,277 | 3,730 | +78.2 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,930 | 4,955 | +10.0 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 32,107 | 4,278 | +141.2 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 31,925 | 2,922 | +119.7 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 31,577 | 2,149 | +254.7 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 31,248 | 1,858 | +36.0 |
| [decolua/9router](https://github.com/decolua/9router) | 30,304 | 5,768 | +113.7 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 29,947 | 4,208 | +48.7 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 29,846 | 2,914 | +50.8 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,332 | 2,639 | +96.2 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 29,133 | 2,552 | +61.4 |
| [voideditor/void](https://github.com/voideditor/void) | 28,773 | 2,658 | — |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 28,303 | 1,312 | +30.4 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,261 | 3,034 | +12.3 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 27,692 | 2,675 | +225.9 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 27,619 | 2,444 | +38.8 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,344 | 4,046 | +7.4 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,453 | 1,124 | +8.0 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 25,440 | 1,822 | +71.2 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 24,668 | 2,245 | +183.3 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 24,629 | 3,045 | +60.3 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 23,363 | 2,687 | +138.4 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,580 | 790 | +46.4 |
| [jundot/omlx](https://github.com/jundot/omlx) | 22,525 | 1,968 | +52.6 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,419 | 1,712 | +3.5 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 22,384 | 2,891 | +177.5 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 22,198 | 2,046 | +66.6 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,671 | 3,128 | +6.1 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,528 | 2,857 | +7.5 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 21,172 | 2,242 | +48.2 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,059 | 3,389 | +53.8 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 20,831 | 1,401 | +226.0 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 20,302 | 2,357 | +142.8 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,712 | 1,203 | +13.1 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 19,623 | 1,874 | +23.9 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 19,421 | 1,702 | +108.6 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 19,387 | 2,174 | +326.9 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,308 | 2,486 | +30.9 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 19,219 | 2,086 | +102.6 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 18,766 | 2,681 | +37.4 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 18,643 | 1,660 | +56.6 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,560 | 1,655 | +11.2 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 18,302 | 2,686 | +67.5 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,291 | 1,791 | +28.7 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,206 | 2,288 | +3.4 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 17,894 | 7,650 | +76.1 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,120 | 1,731 | +49.0 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,068 | 3,652 | +16.4 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 16,985 | 1,429 | +43.0 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,964 | 1,764 | +8.1 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 16,769 | 1,648 | +19.1 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,615 | 2,478 | +64.2 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,111 | 2,367 | +17.4 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,686 | 1,787 | +5.0 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,099 | 1,541 | +8.3 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,902 | 3,282 | +7.1 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 14,881 | 1,328 | +27.8 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,867 | 8,593 | +15.7 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,490 | 1,084 | +5.6 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,598 | 1,417 | +26.3 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,341 | 926 | +37.0 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,185 | 588 | +19.4 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 12,741 | 1,530 | +39.1 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 12,452 | 2,537 | +34.8 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 12,452 | 2,537 | +34.4 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 12,392 | 2,524 | +24.3 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 11,941 | 440 | +272.7 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 11,694 | 1,068 | +17.0 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,443 | 730 | +62.7 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,341 | 872 | +31.5 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 11,295 | 1,388 | +26.8 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,295 | 1,388 | +10.1 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,089 | 5,654 | +4.9 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,015 | 1,802 | +1.5 |
| [openai/codex-security](https://github.com/openai/codex-security) | 10,966 | 839 | +42.6 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,309 | 7,713 | +4.5 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,189 | 825 | +12.9 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,187 | 884 | +42.9 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 9,889 | 1,097 | +11.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,653 | 724 | +3.7 |
| [trailhq/Graft](https://github.com/trailhq/Graft) | 9,581 | 882 | +94.9 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,508 | 310 | +33.4 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 9,409 | 2,073 | +57.3 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 9,128 | 848 | +3.0 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 8,942 | 632 | +50.4 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 8,942 | 632 | +94.4 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,872 | 889 | +2.9 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 8,664 | 1,106 | +91.0 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,418 | 645 | +1.0 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 8,151 | 584 | +70.1 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,111 | 197 | +1.0 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 7,663 | 642 | +27.3 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,612 | 1,140 | +0.8 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 7,396 | 986 | +24.1 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 7,084 | 579 | +11.4 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,084 | 579 | +4.1 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,029 | 558 | +32.7 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,719 | 372 | +11.1 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,678 | 449 | +3.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,453 | 246 | +4.0 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,207 | 604 | +2.5 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,081 | 422 | +0.1 |
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
