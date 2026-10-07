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

> Auto-updated daily — last refreshed 2026-10-07

| Metric | Value |
|---|---|
| Repos tracked | **215** |
| Total stars | **10,579,519** |
| Total forks | **1,531,211** |
| Fastest growing | **VoiceStudio** (+1141.6/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 54,466 | +1141.6 |
| 2 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 157,205 | +1020.4 |
| 3 | [stablyai/orca](https://github.com/stablyai/orca) | 86,808 | +798.1 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 251,803 | +705.8 |
| 5 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 73,797 | +662.8 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 391,556 | 82,295 | +136.6 |
| [obra/superpowers](https://github.com/obra/superpowers) | 296,193 | 26,443 | +566.5 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 274,548 | 40,968 | +636.1 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 274,548 | 40,968 | +609.8 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 251,803 | 54,177 | +705.8 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 188,941 | 13,992 | +448.5 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,680 | 45,939 | +23.1 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 172,243 | 22,052 | +68.5 |
| [langgenius/dify](https://github.com/langgenius/dify) | 157,997 | 24,933 | +114.1 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 157,205 | 8,452 | +1020.4 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 154,127 | 22,524 | +117.2 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 147,524 | 24,720 | +74.1 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 140,658 | 9,441 | +469.1 |
| [github/spec-kit](https://github.com/github/spec-kit) | 140,473 | 12,568 | +289.9 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 133,729 | 14,171 | +379.8 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 124,531 | 12,007 | +386.6 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 121,110 | 63,750 | +70.5 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 110,326 | 6,386 | +343.8 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 99,794 | 11,525 | +391.7 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 97,407 | 8,581 | +149.8 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 96,776 | 12,727 | +228.8 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 93,345 | 6,330 | +491.7 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 93,324 | 23,079 | +91.4 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 92,939 | 8,144 | +574.1 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 90,158 | 11,926 | +114.3 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,834 | 58,922 | +5.6 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 87,947 | 13,410 | +236.5 |
| [stablyai/orca](https://github.com/stablyai/orca) | 86,808 | 5,575 | +798.1 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 83,031 | 15,961 | +41.0 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 82,603 | 5,251 | +232.6 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 81,864 | 10,158 | +219.7 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 78,957 | 5,299 | +562.0 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 78,869 | 8,660 | +29.4 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 78,099 | 12,523 | +119.9 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 77,295 | 7,122 | +90.1 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 76,642 | 8,978 | +114.5 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,396 | 12,920 | +19.6 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 74,551 | 5,770 | +406.9 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 74,551 | 5,770 | +267.7 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 74,036 | 8,806 | +72.5 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 73,797 | 10,609 | +662.8 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 73,673 | 13,832 | +200.2 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 73,673 | 13,832 | +109.7 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 71,220 | 4,876 | +158.0 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 69,860 | 5,745 | +81.2 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 69,065 | 11,216 | +202.0 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 67,223 | 6,715 | +96.7 |
| [usestrix/strix](https://github.com/usestrix/strix) | 66,992 | 7,353 | +322.5 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,767 | 13,479 | +3.7 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 65,986 | 55,010 | +201.1 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 65,451 | 11,293 | +305.4 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 64,844 | 8,218 | +369.9 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 63,662 | 5,552 | +256.1 |
| [tw93/Pake](https://github.com/tw93/Pake) | 61,931 | 12,754 | +92.6 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 60,274 | 12,091 | +90.7 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 59,442 | 7,563 | +49.6 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 58,228 | 5,182 | +270.0 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 56,547 | 7,045 | +215.0 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,489 | 25,063 | +18.2 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 55,189 | 4,791 | +78.1 |
| [blader/humanizer](https://github.com/blader/humanizer) | 54,522 | 4,324 | +223.2 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 54,466 | 6,109 | +1141.6 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 54,390 | 8,274 | +145.5 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,190 | 6,207 | +30.7 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 53,534 | 7,958 | +172.6 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 53,058 | 5,771 | +92.8 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 52,678 | 5,948 | +566.1 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,011 | 10,456 | +106.3 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 50,739 | 3,909 | +153.4 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,408 | 5,037 | +31.3 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 49,344 | 11,856 | +103.6 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 49,230 | 3,498 | +119.9 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 48,834 | 8,612 | +43.3 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 47,846 | 4,321 | +145.7 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 47,312 | 6,889 | +64.0 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 47,312 | 6,889 | +49.7 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,261 | 10,377 | +19.1 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 45,941 | 3,777 | +253.1 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 45,358 | 9,309 | +58.4 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 45,358 | 9,309 | +37.1 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 45,168 | 15,678 | +274.2 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 44,139 | 3,189 | +367.2 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 43,735 | 2,738 | +41.3 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 42,814 | 7,278 | +69.1 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 42,741 | 3,340 | +326.3 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 42,741 | 3,340 | +291.6 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,959 | 4,268 | +13.8 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 41,536 | 4,091 | +68.2 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 41,501 | 3,023 | +61.8 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 41,073 | 3,569 | +47.4 |
| [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) | 41,073 | 3,569 | +5.2 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,073 | 3,569 | +12.5 |
| [wshobson/agents](https://github.com/wshobson/agents) | 40,267 | 4,287 | +32.1 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,785 | 6,242 | +4.5 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 39,761 | 5,069 | +44.1 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 39,643 | 3,549 | +35.7 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 39,346 | 3,105 | +115.9 |
| [google/langextract](https://github.com/google/langextract) | 38,922 | 2,720 | +17.5 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 37,676 | 2,417 | +83.4 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 37,488 | 4,222 | +66.2 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 37,365 | 3,341 | +24.8 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,079 | 6,870 | +21.3 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 36,114 | 5,285 | +167.7 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,744 | 2,440 | +134.0 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 35,472 | 3,155 | +155.2 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 34,907 | 5,660 | +201.7 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 34,509 | 3,742 | +191.7 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 34,020 | 3,571 | +208.9 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 33,882 | 4,114 | +147.3 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 33,789 | 3,765 | +81.1 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 33,672 | 9,107 | +43.3 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 33,672 | 9,107 | +13.5 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,351 | 3,469 | +46.9 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,936 | 4,954 | +9.8 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 32,377 | 4,313 | +141.1 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 31,947 | 2,924 | +117.8 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 31,645 | 2,156 | +250.0 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 31,268 | 1,857 | +35.5 |
| [decolua/9router](https://github.com/decolua/9router) | 30,400 | 5,778 | +112.5 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 29,987 | 4,209 | +48.2 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 29,894 | 2,917 | +50.4 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,344 | 2,638 | +94.6 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 29,199 | 2,557 | +60.9 |
| [voideditor/void](https://github.com/voideditor/void) | 28,773 | 2,659 | — |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 28,365 | 1,313 | +30.4 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,276 | 3,033 | +12.2 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 27,756 | 2,688 | +221.4 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 27,697 | 2,454 | +38.8 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,349 | 4,047 | +7.3 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 25,585 | 1,839 | +71.2 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,461 | 1,124 | +8.0 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 24,989 | 2,266 | +182.7 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 24,709 | 3,053 | +59.6 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 23,504 | 2,697 | +135.3 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 22,611 | 2,926 | +172.0 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,607 | 789 | +45.8 |
| [jundot/omlx](https://github.com/jundot/omlx) | 22,600 | 1,977 | +52.4 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,419 | 1,711 | +3.4 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 22,261 | 2,069 | +66.0 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 21,955 | 1,413 | +237.6 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,685 | 3,128 | +6.1 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,531 | 2,856 | +7.4 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 21,215 | 2,242 | +47.6 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,092 | 3,390 | +53.1 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 20,330 | 2,360 | +139.8 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 19,924 | 2,202 | +313.9 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,710 | 1,203 | +12.8 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 19,634 | 1,873 | +23.6 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 19,605 | 1,714 | +107.2 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 19,439 | 2,119 | +102.7 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,340 | 2,488 | +30.6 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 18,785 | 2,689 | +36.9 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 18,690 | 1,663 | +55.5 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,572 | 1,656 | +11.1 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 18,460 | 2,702 | +68.5 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,321 | 1,793 | +28.4 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,212 | 2,289 | +3.4 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 17,850 | 7,623 | — |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,195 | 1,737 | +46.4 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,084 | 3,666 | +16.3 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 17,076 | 1,436 | +43.0 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,977 | 1,766 | +8.0 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 16,792 | 1,649 | +18.9 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,643 | 2,473 | +63.1 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,132 | 2,372 | +17.2 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,698 | 1,787 | +5.1 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,111 | 1,540 | +8.3 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 14,957 | 1,329 | +28.0 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,908 | 3,281 | +7.0 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,890 | 8,597 | +15.6 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,512 | 1,084 | +5.7 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,603 | 1,421 | +25.8 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,352 | 926 | +36.4 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,205 | 588 | +19.3 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 12,763 | 1,532 | +38.5 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 12,516 | 2,541 | +34.8 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 12,516 | 2,541 | +34.4 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 12,485 | 2,543 | +24.8 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 12,166 | 454 | +258.8 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 11,742 | 1,068 | +17.1 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,451 | 728 | +60.4 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,349 | 878 | +30.9 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 11,318 | 1,388 | +26.4 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,318 | 1,388 | +10.4 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,088 | 5,651 | +4.8 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,014 | 1,801 | +1.4 |
| [openai/codex-security](https://github.com/openai/codex-security) | 10,995 | 846 | +41.7 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,315 | 7,710 | +4.5 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,204 | 889 | +42.1 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,200 | 827 | +12.7 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 9,901 | 1,096 | +9.9 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,666 | 725 | +3.8 |
| [trailhq/Graft](https://github.com/trailhq/Graft) | 9,655 | 882 | +89.8 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,524 | 311 | +32.8 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 9,469 | 2,067 | +51.2 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 9,133 | 848 | +3.0 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 9,052 | 649 | +50.6 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,052 | 649 | +85.7 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,878 | 890 | +2.9 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 8,826 | 1,126 | +89.8 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,420 | 645 | +1.0 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 8,235 | 590 | +63.9 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,110 | 196 | +0.9 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 7,685 | 646 | +26.2 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,613 | 1,138 | +0.8 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 7,417 | 990 | +23.4 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 7,087 | 578 | +11.1 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,087 | 578 | +4.0 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,038 | 558 | +29.2 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,724 | 372 | +10.8 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,686 | 449 | +3.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,453 | 246 | +3.9 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,213 | 606 | +2.5 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,082 | 422 | +0.1 |
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
