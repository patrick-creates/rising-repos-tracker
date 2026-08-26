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

> Auto-updated daily — last refreshed 2026-08-26

| Metric | Value |
|---|---|
| Repos tracked | **186** |
| Total stars | **9,007,900** |
| Total forks | **1,335,688** |
| Fastest growing | **ponytail** (+974.6/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 111,365 | +974.6 |
| 2 | [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 42,286 | +927.9 |
| 3 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 55,423 | +848.5 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 236,525 | +842.7 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 53,766 | +807.5 |

### 🆕 Recently added

- [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) — added 2026-08-24 — Turn any technical book PDF into a Claude Code skill — ready to study, reference, and use while you work.
- [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) — added 2026-08-24 — Strip multi-vendor AI provenance marks: Unicode text hygiene, statistical rewrite hooks, and C2PA/metadata from PNG/JPEG/SVG/PDF/DOCX/HTML/MD
- [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) — added 2026-08-17 — Open-source All in One AI agent workspace. Run any agent — Claude Code, Codex — across your tools (100+ integrations + MCP), apps, browser, and files, with shared memory. Built-in models or BYOK.
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 387,644 | 81,381 | +154.0 |
| [obra/superpowers](https://github.com/obra/superpowers) | 277,657 | 24,835 | +647.4 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 243,253 | 36,798 | +592.4 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 243,253 | 36,798 | +548.6 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 236,525 | 47,770 | +842.7 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 186,874 | 46,052 | +24.7 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 176,298 | 12,931 | +507.5 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 167,908 | 21,667 | +54.6 |
| [langgenius/dify](https://github.com/langgenius/dify) | 153,529 | 24,264 | +117.2 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 149,935 | 21,873 | +124.2 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 145,008 | 24,174 | +79.7 |
| [github/spec-kit](https://github.com/github/spec-kit) | 131,497 | 11,806 | +320.3 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 129,425 | 8,876 | +553.8 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 121,006 | 12,980 | +410.6 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 118,565 | 62,511 | +74.4 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 111,365 | 6,122 | +974.6 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 110,590 | 10,761 | +463.1 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 100,987 | 5,861 | +394.8 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 91,852 | 8,071 | +156.9 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 91,657 | 12,169 | +277.0 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 91,544 | 10,537 | +473.7 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 90,067 | 21,208 | +97.0 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,653 | 59,199 | +6.2 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 85,118 | 11,130 | +111.9 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 84,158 | 12,611 | +297.9 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 81,996 | 15,831 | +47.6 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 80,651 | 5,526 | +584.2 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 77,788 | 8,545 | +30.9 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 77,440 | 4,868 | +278.6 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 75,549 | 12,770 | +19.4 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 75,350 | 6,429 | +656.6 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 75,317 | 12,154 | +142.4 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 74,865 | 9,297 | +242.1 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 74,775 | 6,767 | +102.8 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 73,255 | 8,407 | +128.7 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 68,476 | 12,979 | +232.3 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 68,378 | 5,597 | +100.5 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 67,611 | 5,216 | +547.9 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 67,611 | 5,216 | +334.0 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,607 | 13,515 | +3.7 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 66,263 | 4,561 | +174.8 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 65,098 | 6,478 | +116.0 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 63,871 | 53,658 | +269.2 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 63,579 | 10,415 | +231.9 |
| [tw93/Pake](https://github.com/tw93/Pake) | 61,081 | 12,538 | +123.0 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 59,274 | 5,184 | +336.7 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 58,643 | 7,520 | +62.4 |
| [usestrix/strix](https://github.com/usestrix/strix) | 58,273 | 6,337 | +378.6 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 57,282 | 10,902 | +98.9 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 55,423 | 7,611 | +848.5 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,391 | 24,947 | +24.9 |
| [stablyai/orca](https://github.com/stablyai/orca) | 53,766 | 3,706 | +807.5 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 53,186 | 6,094 | +33.6 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 52,993 | 4,626 | +89.0 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 51,480 | 6,421 | +261.1 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 50,330 | 6,353 | +387.6 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 49,722 | 3,483 | +98.4 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 49,203 | 8,585 | +265.6 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 48,791 | 7,504 | +151.0 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 48,493 | 4,888 | +35.3 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 47,402 | 8,367 | +47.2 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 47,277 | 3,396 | +155.7 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 47,147 | 9,553 | +114.7 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,677 | 10,328 | +21.2 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 46,316 | 11,000 | +117.8 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 45,648 | 7,145 | +165.2 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 45,397 | 6,653 | +72.2 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 45,397 | 6,653 | +53.5 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 43,719 | 3,474 | +134.2 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 42,621 | 4,098 | +215.9 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 42,458 | 8,809 | +53.6 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 42,286 | 4,678 | +927.9 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,562 | 4,208 | +15.7 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 41,136 | 2,702 | +32.0 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 40,859 | 3,534 | +66.5 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 40,658 | 3,295 | +345.3 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 40,466 | 6,828 | +77.6 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,644 | 6,237 | +5.5 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 39,612 | 2,838 | +70.0 |
| [wshobson/agents](https://github.com/wshobson/agents) | 39,132 | 4,176 | +34.4 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 38,799 | 3,482 | +42.7 |
| [google/langextract](https://github.com/google/langextract) | 38,490 | 2,706 | +20.8 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 38,256 | 4,842 | +47.8 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 36,581 | 6,830 | +25.5 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 36,357 | 3,244 | +25.2 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 35,571 | 12,195 | +317.9 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,170 | 2,342 | +198.0 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 34,476 | 3,036 | +231.9 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 34,153 | 3,873 | +59.8 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 34,068 | 2,133 | +82.2 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 33,363 | 2,540 | +101.7 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 33,127 | 4,825 | +224.1 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,661 | 4,914 | +11.5 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 32,396 | 2,329 | +392.1 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 32,396 | 2,329 | +374.2 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 32,291 | 3,321 | +57.5 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 31,723 | 5,159 | +292.8 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 31,146 | 3,706 | +200.4 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 30,841 | 2,808 | +171.2 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 30,833 | 8,919 | +31.4 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 30,565 | 1,792 | +44.7 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 29,271 | 1,998 | +409.3 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 28,838 | 2,580 | +142.8 |
| [voideditor/void](https://github.com/voideditor/void) | 28,827 | 2,636 | +0.3 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 28,594 | 2,807 | +60.7 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 28,493 | 3,991 | +54.9 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 28,126 | 3,048 | +52.6 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,921 | 2,993 | +14.1 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 27,637 | 1,277 | +37.3 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 27,500 | 2,701 | +207.8 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 27,433 | 2,346 | +71.0 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 26,477 | 2,258 | +48.2 |
| [decolua/9router](https://github.com/decolua/9router) | 26,350 | 4,762 | +121.9 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,087 | 4,019 | +7.9 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 25,598 | 2,647 | +384.5 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,251 | 1,121 | +9.6 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 24,495 | 2,254 | +358.6 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,385 | 1,728 | +4.8 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 21,706 | 2,787 | +28.5 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 21,689 | 756 | +63.1 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,503 | 3,121 | +7.0 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 21,422 | 1,573 | +224.2 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,331 | 2,834 | +8.8 |
| [jundot/omlx](https://github.com/jundot/omlx) | 20,681 | 1,742 | +56.2 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 20,643 | 2,967 | +60.4 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 20,584 | 1,777 | +82.8 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 20,145 | 1,458 | +37.2 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 20,071 | 2,162 | +70.6 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 19,930 | 3,234 | +69.6 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,511 | 1,189 | +17.6 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 19,113 | 1,829 | +30.2 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 18,737 | 2,438 | +41.1 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 18,583 | 2,095 | +233.6 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 18,330 | 2,122 | +389.0 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,136 | 2,287 | +4.3 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,831 | 1,565 | +7.2 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 17,732 | 2,455 | +44.5 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 17,144 | 1,647 | +28.7 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 16,616 | 1,633 | +159.3 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 16,529 | 1,454 | +66.1 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,476 | 1,724 | +5.8 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 16,222 | 3,246 | +13.5 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 16,042 | 1,566 | +20.7 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 15,884 | 2,370 | +100.1 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,498 | 1,775 | +5.5 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 15,484 | 2,280 | +18.4 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 15,249 | 1,337 | +42.7 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,831 | 1,513 | +9.3 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,804 | 3,295 | +10.0 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,347 | 1,062 | +6.9 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,222 | 8,545 | +15.0 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 14,164 | 1,407 | +83.9 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 13,362 | 1,222 | +20.7 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 12,872 | 1,325 | +31.9 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 12,589 | 549 | +22.6 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 12,430 | 903 | +46.8 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 11,368 | 2,371 | +23.4 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 11,178 | 1,136 | +187.8 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 11,094 | 2,330 | +35.5 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 11,094 | 2,330 | +34.9 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,005 | 1,808 | +2.3 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 10,989 | 1,005 | +16.6 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 10,968 | 5,671 | +6.1 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 10,871 | 712 | +277.8 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 10,726 | 1,379 | +30.3 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 10,605 | 1,285 | +34.2 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,267 | 7,762 | +6.9 |
| [openai/codex-security](https://github.com/openai/codex-security) | 10,180 | 727 | +82.5 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 9,933 | 800 | +18.0 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 9,727 | 828 | +71.4 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 9,658 | 768 | +23.3 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,607 | 721 | +4.7 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 9,005 | 840 | +2.9 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,911 | 860 | +5.9 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 8,739 | 272 | +46.2 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,362 | 642 | +0.7 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,081 | 195 | +1.1 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,595 | 1,144 | +1.2 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 6,996 | 498 | +54.9 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 6,670 | 523 | +12.5 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,573 | 441 | +3.7 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,481 | 353 | +16.6 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,318 | 242 | +4.6 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,153 | 600 | +3.5 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,079 | 420 | +0.2 |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 85 | 5 | — |
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
