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

> Auto-updated daily — last refreshed 2026-09-11

| Metric | Value |
|---|---|
| Repos tracked | **194** |
| Total stars | **9,568,706** |
| Total forks | **1,404,239** |
| Fastest growing | **ponytail** (+1077.2/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 135,275 | +1077.2 |
| 2 | [stablyai/orca](https://github.com/stablyai/orca) | 66,355 | +802.6 |
| 3 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 244,375 | +796.1 |
| 4 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 64,558 | +782.2 |
| 5 | [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 45,832 | +714.7 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 389,424 | 81,855 | +148.4 |
| [obra/superpowers](https://github.com/obra/superpowers) | 285,002 | 25,490 | +610.2 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 256,127 | 38,335 | +620.5 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 256,127 | 38,335 | +586.2 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 244,375 | 50,587 | +796.1 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,256 | 46,023 | +24.6 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 182,550 | 13,420 | +492.1 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 169,941 | 21,857 | +64.2 |
| [langgenius/dify](https://github.com/langgenius/dify) | 155,404 | 24,546 | +117.2 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 151,609 | 22,176 | +121.6 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 146,113 | 24,409 | +78.3 |
| [github/spec-kit](https://github.com/github/spec-kit) | 135,433 | 12,178 | +310.5 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 135,275 | 7,255 | +1077.2 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 132,295 | 9,121 | +502.2 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 126,787 | 13,538 | +404.1 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 119,535 | 62,942 | +72.6 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 116,853 | 11,316 | +438.2 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 104,820 | 6,079 | +373.3 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 95,514 | 11,067 | +442.6 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 93,658 | 8,238 | +151.1 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 93,022 | 12,333 | +248.9 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 91,488 | 22,049 | +95.9 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,740 | 59,095 | +6.1 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 87,345 | 11,455 | +115.6 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 86,149 | 5,886 | +546.4 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 86,031 | 13,035 | +273.0 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 82,391 | 15,875 | +44.6 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 79,902 | 5,056 | +261.4 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 79,380 | 6,840 | +588.5 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 78,390 | 9,738 | +239.1 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 78,200 | 8,586 | +30.2 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 76,538 | 12,314 | +133.3 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 76,011 | 6,925 | +99.2 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 75,914 | 12,845 | +19.9 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 74,851 | 8,637 | +124.7 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 71,472 | 5,477 | +492.1 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 71,472 | 5,477 | +315.7 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 71,215 | 13,428 | +223.9 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 71,215 | 13,428 | +208.3 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 68,934 | 5,668 | +91.4 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 67,958 | 4,671 | +165.3 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,680 | 13,511 | +3.8 |
| [stablyai/orca](https://github.com/stablyai/orca) | 66,355 | 4,369 | +802.6 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 65,842 | 6,540 | +106.4 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 64,922 | 54,382 | +239.3 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 64,780 | 10,635 | +210.3 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 64,558 | 9,027 | +782.2 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 61,834 | 5,391 | +307.0 |
| [usestrix/strix](https://github.com/usestrix/strix) | 61,801 | 6,766 | +353.8 |
| [tw93/Pake](https://github.com/tw93/Pake) | 61,382 | 12,633 | +108.6 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 58,990 | 7,565 | +56.8 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 58,501 | 11,350 | +95.8 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 57,124 | 7,192 | +395.6 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,458 | 24,998 | +22.1 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 54,205 | 9,451 | +273.0 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 53,865 | 4,686 | +84.2 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 53,599 | 6,139 | +32.5 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 52,966 | 6,614 | +234.7 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 51,624 | 3,629 | +101.2 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 51,380 | 7,792 | +152.6 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 49,546 | 10,193 | +121.1 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 49,518 | 7,535 | +177.3 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 48,895 | 4,474 | +245.6 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 48,892 | 4,945 | +33.9 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 48,154 | 3,435 | +139.9 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 48,013 | 8,486 | +46.0 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 47,888 | 11,445 | +115.0 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 47,604 | 3,719 | +172.0 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,896 | 10,345 | +20.2 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 46,266 | 6,744 | +69.6 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 46,266 | 6,744 | +53.7 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 45,832 | 5,116 | +714.7 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 44,386 | 4,028 | +227.5 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 43,023 | 8,928 | +51.0 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 42,923 | 3,496 | +301.3 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 42,297 | 2,719 | +38.0 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 41,760 | 14,376 | +336.3 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,716 | 4,247 | +14.8 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 41,450 | 7,002 | +74.4 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 40,945 | 3,557 | +57.6 |
| [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) | 40,945 | 3,557 | +7.3 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 40,361 | 2,904 | +66.4 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,722 | 6,243 | +5.3 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 39,638 | 3,911 | +37.3 |
| [wshobson/agents](https://github.com/wshobson/agents) | 39,565 | 4,218 | +33.3 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 39,095 | 3,499 | +39.2 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 38,890 | 4,924 | +46.6 |
| [google/langextract](https://github.com/google/langextract) | 38,566 | 2,704 | +18.4 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 37,609 | 2,777 | +376.3 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 37,609 | 2,777 | +354.4 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 36,854 | 3,312 | +26.1 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 36,847 | 6,858 | +24.2 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 36,614 | 2,807 | +118.8 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 36,130 | 4,054 | +69.8 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 35,947 | 2,273 | +87.7 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,501 | 2,388 | +168.2 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 34,786 | 3,086 | +193.3 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 34,226 | 4,982 | +195.8 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 33,230 | 5,412 | +249.9 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 33,137 | 9,080 | +49.0 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,766 | 4,936 | +10.7 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 32,750 | 3,372 | +53.0 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 32,599 | 3,927 | +178.7 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 31,328 | 2,851 | +145.6 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 31,142 | 3,480 | +75.5 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 30,927 | 1,824 | +41.3 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 30,611 | 3,155 | +205.1 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 30,434 | 2,077 | +328.9 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 29,865 | 3,100 | +279.8 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 29,313 | 4,104 | +54.3 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 29,195 | 2,860 | +56.8 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,048 | 2,592 | +119.2 |
| [voideditor/void](https://github.com/voideditor/void) | 28,802 | 2,649 | — |
| [decolua/9router](https://github.com/decolua/9router) | 28,391 | 5,140 | +123.0 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 28,315 | 2,454 | +68.3 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,053 | 3,007 | +13.2 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 27,915 | 1,296 | +33.9 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 27,001 | 2,341 | +44.1 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 26,341 | 2,478 | +293.7 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,202 | 4,031 | +7.8 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,355 | 1,118 | +9.0 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 23,283 | 2,917 | +63.5 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,401 | 1,723 | +4.2 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 22,396 | 2,758 | +544.3 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 22,250 | 1,662 | +183.0 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 22,225 | 3,206 | +67.4 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,174 | 771 | +56.0 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 22,075 | 1,591 | +52.4 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 21,689 | 2,497 | +229.8 |
| [jundot/omlx](https://github.com/jundot/omlx) | 21,615 | 1,852 | +56.6 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,578 | 3,116 | +6.6 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,443 | 2,848 | +8.5 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 21,240 | 1,881 | +74.5 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 20,588 | 2,197 | +59.1 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 20,573 | 3,321 | +63.8 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,629 | 1,197 | +15.7 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 19,471 | 2,241 | +186.1 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 19,373 | 1,856 | +27.6 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 19,071 | 1,850 | +157.3 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 18,980 | 2,460 | +36.0 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 18,245 | 2,568 | +42.1 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,176 | 2,294 | +4.0 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,063 | 1,582 | +8.5 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 17,489 | 1,552 | +63.0 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 17,487 | 1,712 | +27.1 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,868 | 1,765 | +9.2 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 16,594 | 3,411 | +15.4 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 16,377 | 1,607 | +20.8 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,285 | 2,426 | +82.2 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 16,012 | 1,375 | +43.8 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 15,740 | 2,315 | +17.9 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,584 | 1,784 | +5.5 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 15,084 | 1,503 | +77.6 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,953 | 1,521 | +9.0 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,896 | 3,292 | +9.1 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,403 | 1,066 | +6.2 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,331 | 8,538 | +11.7 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 14,074 | 1,259 | +25.9 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 13,724 | 1,304 | +173.5 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,059 | 1,349 | +27.5 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 12,877 | 920 | +42.7 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 12,833 | 564 | +21.0 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 12,342 | 1,493 | +47.2 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 11,806 | 2,432 | +24.3 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 11,497 | 2,391 | +33.0 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 11,497 | 2,391 | +32.0 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 11,283 | 1,033 | +17.0 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,203 | 722 | +113.3 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,036 | 5,665 | +5.7 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 11,014 | 1,325 | +32.1 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,006 | 1,800 | +1.8 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 10,959 | 824 | +37.1 |
| [openai/codex-security](https://github.com/openai/codex-security) | 10,643 | 779 | +60.5 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,300 | 7,747 | +5.9 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,071 | 812 | +15.7 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 9,932 | 855 | +55.8 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,626 | 719 | +4.2 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,223 | 292 | +42.0 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 9,054 | 843 | +3.0 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,986 | 876 | +5.6 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,370 | 642 | +0.7 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,096 | 193 | +1.1 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,616 | 1,145 | +1.3 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 7,547 | 539 | +44.7 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 7,188 | 599 | +72.5 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 7,011 | 563 | +15.1 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,011 | 563 | +10.8 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 6,767 | 924 | +19.6 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,614 | 360 | +14.1 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,613 | 444 | +3.4 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,364 | 243 | +4.2 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,176 | 602 | +3.0 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,083 | 421 | +0.2 |
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
