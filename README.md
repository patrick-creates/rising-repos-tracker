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

> Auto-updated daily — last refreshed 2026-08-18

| Metric | Value |
|---|---|
| Repos tracked | **184** |
| Total stars | **8,812,530** |
| Total forks | **1,312,211** |
| Fastest growing | **holaOS** (+1075.0/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 9,446 | +1075.0 |
| 2 | [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 38,678 | +1059.5 |
| 3 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 104,863 | +997.3 |
| 4 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 49,973 | +879.6 |
| 5 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 232,152 | +867.1 |

### 🆕 Recently added

- [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) — added 2026-08-17 — Open-source All in One AI agent workspace. Run any agent — Claude Code, Codex — across your tools (100+ integrations + MCP), apps, browser, and files, with shared memory. Built-in models or BYOK.
- [pascalorg/editor](https://github.com/pascalorg/editor) — added 2026-08-10 — Create and share 3D architectural projects.
- [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) — added 2026-08-10 —  🚀 通用 AI IDE 账号管理工具：支持 Antigravity / Codex / GitHub Copilot / Windsurf / Kiro / Cursor / Gemini-cli / CodeBuddy，多账号切换、配额监控、自动唤醒与多开实例管理。 🚀 Universal AI IDE account manager for Antigravity / Codex / GitHub Copilot / Windsurf / Kiro / Cursor / Gemini-cli / CodeBuddy, with multi-account switching, quota monitoring, wake-up automation, and multi-insta
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 386,585 | 81,238 | +155.8 |
| [obra/superpowers](https://github.com/obra/superpowers) | 273,321 | 24,449 | +662.2 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 240,766 | 36,522 | +615.6 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 240,766 | 36,522 | +571.0 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 232,152 | 46,255 | +867.1 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 186,660 | 46,063 | +24.5 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 174,321 | 12,748 | +529.0 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 167,355 | 21,594 | +53.4 |
| [langgenius/dify](https://github.com/langgenius/dify) | 152,746 | 24,123 | +118.8 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 149,079 | 21,714 | +125.6 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 144,432 | 24,044 | +80.4 |
| [github/spec-kit](https://github.com/github/spec-kit) | 129,888 | 11,628 | +330.2 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 127,925 | 8,752 | +585.7 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 117,966 | 62,236 | +74.4 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 117,692 | 12,649 | +410.3 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 107,586 | 10,450 | +494.9 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 104,863 | 5,790 | +997.3 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 98,785 | 5,722 | +405.1 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 91,034 | 7,956 | +161.4 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 90,538 | 12,040 | +289.9 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 89,310 | 20,826 | +97.2 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,618 | 59,235 | +6.3 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 88,496 | 10,223 | +481.8 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 84,349 | 10,958 | +113.2 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 82,742 | 12,350 | +308.4 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 81,791 | 15,808 | +49.4 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 77,534 | 8,518 | +30.8 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 77,482 | 5,300 | +603.4 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 76,429 | 4,799 | +291.9 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 75,302 | 12,732 | +18.4 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 74,503 | 12,051 | +145.9 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 73,464 | 9,132 | +247.9 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 73,320 | 6,612 | +95.9 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 72,692 | 8,309 | +133.7 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 72,608 | 6,173 | +692.0 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 68,013 | 5,551 | +105.3 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 66,703 | 5,126 | +602.2 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 66,703 | 5,126 | +364.9 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,553 | 13,521 | +3.4 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 65,253 | 4,496 | +179.0 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 64,940 | 12,665 | +214.1 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 64,635 | 6,423 | +121.1 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 63,213 | 53,126 | +286.8 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 63,094 | 10,357 | +246.8 |
| [tw93/Pake](https://github.com/tw93/Pake) | 60,769 | 12,446 | +130.3 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 58,539 | 5,095 | +364.3 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 58,434 | 7,497 | +65.6 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 56,589 | 10,671 | +100.0 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,378 | 24,920 | +26.9 |
| [usestrix/strix](https://github.com/usestrix/strix) | 54,463 | 5,816 | +368.6 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 52,975 | 6,074 | +34.2 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 52,512 | 4,592 | +91.5 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 50,681 | 6,297 | +277.7 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 49,973 | 6,803 | +879.6 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 49,321 | 3,438 | +102.6 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 48,654 | 6,089 | +416.1 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 48,289 | 4,850 | +36.2 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 47,664 | 7,370 | +152.0 |
| [stablyai/orca](https://github.com/stablyai/orca) | 47,607 | 3,297 | +814.5 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 47,115 | 8,326 | +48.2 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 47,046 | 8,247 | +265.2 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 47,007 | 9,551 | +126.8 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 46,559 | 3,344 | +162.5 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,535 | 10,317 | +21.5 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 45,427 | 10,762 | +118.5 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 45,077 | 6,596 | +75.3 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 45,077 | 6,596 | +56.5 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 44,674 | 7,017 | +169.7 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 42,836 | 3,408 | +142.8 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 42,165 | 8,726 | +55.2 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,457 | 4,201 | +15.9 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 41,424 | 3,959 | +223.4 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 40,830 | 3,531 | +72.5 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 40,559 | 2,689 | +28.3 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 39,897 | 6,708 | +78.5 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,601 | 6,229 | +5.6 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 39,309 | 3,157 | +373.6 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 39,306 | 2,803 | +73.3 |
| [wshobson/agents](https://github.com/wshobson/agents) | 38,879 | 4,141 | +34.6 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 38,678 | 4,266 | +1059.5 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 38,621 | 3,470 | +44.7 |
| [google/langextract](https://github.com/google/langextract) | 38,415 | 2,698 | +21.9 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 37,956 | 4,789 | +48.8 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 36,442 | 6,806 | +26.3 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 36,205 | 3,231 | +25.8 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 34,707 | 2,303 | +213.8 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 33,912 | 3,005 | +252.1 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 33,634 | 3,822 | +59.3 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,610 | 4,897 | +12.0 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 32,436 | 2,005 | +69.7 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 32,342 | 4,708 | +239.8 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 32,141 | 11,246 | +293.3 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 32,074 | 3,284 | +60.6 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 31,144 | 5,050 | +328.1 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 30,740 | 8,920 | +33.4 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 30,475 | 2,781 | +186.9 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 30,417 | 1,780 | +47.4 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 30,114 | 2,140 | +412.0 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 30,114 | 2,140 | +421.7 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 28,946 | 2,282 | +51.0 |
| [voideditor/void](https://github.com/voideditor/void) | 28,835 | 2,630 | +0.4 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 28,712 | 2,562 | +158.7 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 28,656 | 1,949 | +471.1 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 28,597 | 3,455 | +183.8 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 28,287 | 2,781 | +63.2 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 27,872 | 3,894 | +52.4 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,834 | 2,971 | +14.4 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 27,782 | 3,012 | +53.7 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 27,453 | 1,274 | +38.9 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 27,121 | 2,316 | +74.6 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 26,169 | 2,234 | +50.4 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,030 | 4,014 | +8.0 |
| [decolua/9router](https://github.com/decolua/9router) | 25,686 | 4,596 | +126.8 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 25,501 | 2,457 | +201.8 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,194 | 1,116 | +9.8 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 22,721 | 2,073 | +389.0 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,381 | 1,726 | +5.3 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 21,525 | 2,761 | +34.4 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 21,521 | 752 | +69.8 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,460 | 3,120 | +7.2 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,298 | 2,824 | +9.4 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 20,685 | 1,471 | +248.8 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 20,263 | 1,735 | +88.8 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 19,991 | 2,877 | +57.8 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 19,929 | 1,435 | +38.5 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 19,796 | 2,148 | +80.6 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 19,556 | 3,192 | +72.8 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,447 | 1,183 | +18.8 |
| [jundot/omlx](https://github.com/jundot/omlx) | 19,080 | 1,645 | +38.3 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 18,984 | 1,816 | +31.9 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 18,575 | 2,420 | +44.0 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,120 | 2,284 | +4.6 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 17,878 | 2,004 | +265.9 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,494 | 1,540 | +2.9 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 17,427 | 2,399 | +45.4 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 16,752 | 1,597 | +25.5 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,382 | 1,718 | +5.0 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 16,130 | 3,188 | +13.8 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 16,003 | 1,413 | +66.4 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 15,896 | 1,543 | +22.1 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 15,651 | 2,329 | +113.3 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,474 | 1,774 | +6.4 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 15,434 | 1,537 | +163.5 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 15,319 | 2,259 | +18.1 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 14,830 | 1,305 | +41.1 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,795 | 3,292 | +11.2 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,777 | 1,507 | +9.7 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,315 | 1,061 | +7.3 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,148 | 8,532 | +18.1 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 13,004 | 1,199 | +16.9 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 12,773 | 1,308 | +35.0 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 12,447 | 545 | +23.3 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 12,100 | 893 | +47.7 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 11,904 | 1,265 | +47.0 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 11,158 | 2,334 | +23.0 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,000 | 1,812 | +2.6 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 10,923 | 5,670 | +6.2 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 10,796 | 2,279 | +35.2 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 10,796 | 2,279 | +34.3 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 10,756 | 994 | +14.6 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 10,395 | 1,361 | +28.2 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 10,378 | 1,266 | +35.3 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,245 | 7,771 | +7.6 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 10,206 | 967 | +254.1 |
| [openai/codex-security](https://github.com/openai/codex-security) | 9,927 | 701 | +109.7 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 9,767 | 781 | +17.4 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,607 | 722 | +5.1 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 9,577 | 817 | +83.1 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 9,488 | 758 | +23.7 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 9,446 | 696 | +1075.0 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,977 | 835 | +2.8 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,960 | 862 | +8.1 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 8,510 | 256 | +50.1 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,358 | 642 | +0.7 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,083 | 194 | +1.4 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,597 | 1,142 | +1.6 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 6,589 | 524 | +13.1 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,557 | 440 | +4.1 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 6,545 | 469 | +53.4 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,332 | 341 | +16.0 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,300 | 241 | +5.1 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,143 | 601 | +4.0 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,079 | 422 | +0.3 |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 83 | 5 | — |
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
