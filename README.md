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

> Auto-updated daily — last refreshed 2026-08-19

| Metric | Value |
|---|---|
| Repos tracked | **184** |
| Total stars | **8,834,205** |
| Total forks | **1,314,822** |
| Fastest growing | **ai-agent-book** (+1042.8/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 39,236 | +1042.8 |
| 2 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 105,546 | +991.8 |
| 3 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 50,609 | +874.0 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 232,673 | +863.6 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 48,503 | +816.4 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 386,696 | 81,264 | +155.4 |
| [obra/superpowers](https://github.com/obra/superpowers) | 273,789 | 24,504 | +658.8 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 241,017 | 36,557 | +611.9 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 241,017 | 36,557 | +567.3 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 232,673 | 46,461 | +863.6 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 186,682 | 46,053 | +24.5 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 174,554 | 12,764 | +526.0 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 167,479 | 21,625 | +54.2 |
| [langgenius/dify](https://github.com/langgenius/dify) | 152,864 | 24,143 | +118.8 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 149,188 | 21,736 | +125.5 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 144,513 | 24,064 | +80.4 |
| [github/spec-kit](https://github.com/github/spec-kit) | 130,187 | 11,682 | +329.9 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 128,146 | 8,769 | +581.7 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 118,051 | 62,271 | +74.5 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 118,006 | 12,688 | +409.3 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 108,009 | 10,491 | +491.8 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 105,546 | 5,830 | +991.8 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 99,055 | 5,744 | +403.7 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 91,187 | 7,976 | +161.3 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 90,836 | 12,077 | +290.0 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 89,395 | 20,887 | +97.1 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 89,020 | 10,280 | +482.2 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,622 | 59,229 | +6.3 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 84,444 | 10,990 | +113.0 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 83,034 | 12,385 | +308.2 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 81,819 | 15,808 | +49.2 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 77,854 | 5,320 | +600.5 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 77,566 | 8,520 | +30.8 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 76,565 | 4,815 | +290.2 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 75,340 | 12,739 | +18.6 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 74,605 | 12,065 | +145.5 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 73,668 | 9,154 | +247.4 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 73,650 | 6,654 | +98.4 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 72,873 | 6,193 | +686.1 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 72,770 | 8,325 | +133.1 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 68,055 | 5,558 | +104.6 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 66,818 | 5,140 | +594.7 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 66,818 | 5,140 | +360.6 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,559 | 13,517 | +3.4 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 65,409 | 4,505 | +178.7 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 65,378 | 12,703 | +216.5 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 64,682 | 6,432 | +120.3 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 63,319 | 53,207 | +284.7 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 63,145 | 10,372 | +244.7 |
| [tw93/Pake](https://github.com/tw93/Pake) | 60,829 | 12,464 | +129.6 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 58,656 | 5,113 | +360.9 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 58,449 | 7,496 | +65.0 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 56,705 | 10,706 | +100.2 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,380 | 24,926 | +26.7 |
| [usestrix/strix](https://github.com/usestrix/strix) | 55,216 | 5,904 | +373.5 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 53,021 | 6,079 | +34.4 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 52,593 | 4,599 | +91.4 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 50,803 | 6,319 | +275.7 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 50,609 | 6,891 | +874.0 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 49,378 | 3,444 | +102.1 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 48,816 | 6,110 | +411.1 |
| [stablyai/orca](https://github.com/stablyai/orca) | 48,503 | 3,356 | +816.4 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 48,320 | 4,857 | +36.1 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 47,813 | 7,387 | +152.0 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 47,160 | 8,327 | +48.2 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 47,124 | 8,271 | +262.8 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 47,029 | 9,548 | +125.2 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 46,719 | 3,352 | +162.5 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,558 | 10,320 | +21.5 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 45,546 | 10,783 | +118.5 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 45,110 | 6,606 | +74.8 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 45,110 | 6,606 | +55.9 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 44,822 | 7,034 | +169.4 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 42,967 | 3,415 | +142.3 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 42,209 | 8,741 | +55.1 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 41,608 | 3,985 | +222.9 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,465 | 4,203 | +15.8 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 40,828 | 3,533 | +71.6 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 40,651 | 2,692 | +29.0 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 39,984 | 6,732 | +78.7 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,605 | 6,228 | +5.5 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 39,457 | 3,171 | +369.2 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 39,358 | 2,809 | +73.0 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 39,236 | 4,333 | +1042.8 |
| [wshobson/agents](https://github.com/wshobson/agents) | 38,909 | 4,143 | +34.6 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 38,646 | 3,474 | +44.4 |
| [google/langextract](https://github.com/google/langextract) | 38,430 | 2,698 | +21.8 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 37,993 | 4,796 | +48.7 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 36,474 | 6,815 | +26.3 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 36,217 | 3,232 | +25.6 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 34,807 | 2,315 | +212.2 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 34,014 | 3,007 | +249.8 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 33,683 | 3,826 | +59.1 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 32,783 | 2,025 | +73.2 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,613 | 4,898 | +11.9 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 32,418 | 4,719 | +237.3 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 32,292 | 11,332 | +289.4 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 32,102 | 3,289 | +60.2 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 31,245 | 5,071 | +323.7 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 30,763 | 8,918 | +33.3 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 30,545 | 2,785 | +185.1 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 30,445 | 1,782 | +47.2 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 30,416 | 2,170 | +409.5 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 30,416 | 2,170 | +414.2 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 29,595 | 2,316 | +59.3 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 29,351 | 3,501 | +193.6 |
| [voideditor/void](https://github.com/voideditor/void) | 28,834 | 2,633 | +0.4 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 28,775 | 1,953 | +463.1 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 28,746 | 2,564 | +156.7 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 28,330 | 2,784 | +62.9 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 27,911 | 3,901 | +52.2 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,845 | 2,975 | +14.4 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 27,829 | 3,015 | +53.6 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 27,479 | 1,276 | +38.7 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 27,166 | 2,323 | +74.2 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 26,215 | 2,240 | +50.2 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,041 | 4,017 | +8.0 |
| [decolua/9router](https://github.com/decolua/9router) | 25,778 | 4,619 | +126.3 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 25,732 | 2,476 | +202.3 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,199 | 1,117 | +9.8 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 23,052 | 2,104 | +387.4 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,381 | 1,728 | +5.2 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 21,551 | 753 | +69.0 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 21,549 | 2,765 | +33.2 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,465 | 3,121 | +7.2 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,298 | 2,823 | +9.2 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 20,760 | 1,478 | +244.8 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 20,313 | 1,743 | +88.1 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 20,037 | 2,887 | +57.6 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 19,969 | 1,436 | +38.5 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 19,829 | 2,150 | +79.0 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 19,587 | 3,195 | +72.1 |
| [jundot/omlx](https://github.com/jundot/omlx) | 19,509 | 1,675 | +44.3 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,454 | 1,185 | +18.6 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 18,994 | 1,819 | +31.6 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 18,601 | 2,421 | +43.7 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,121 | 2,284 | +4.5 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 17,957 | 2,017 | +260.9 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,500 | 1,541 | +2.9 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 17,456 | 2,409 | +45.1 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 16,782 | 1,599 | +25.5 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,381 | 1,717 | +4.9 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 16,127 | 3,186 | +13.5 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 16,099 | 1,420 | +69.7 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 15,919 | 1,546 | +22.1 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 15,757 | 1,557 | +170.4 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 15,682 | 2,337 | +111.5 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,476 | 1,773 | +6.2 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 15,358 | 2,265 | +18.5 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 14,882 | 1,313 | +41.3 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,795 | 3,292 | +11.0 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,781 | 1,508 | +9.6 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,320 | 1,061 | +7.2 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,155 | 8,537 | +17.4 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 13,058 | 1,203 | +17.6 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 12,793 | 1,311 | +34.7 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 12,468 | 545 | +23.3 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 12,182 | 1,282 | +52.2 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 12,165 | 893 | +48.0 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 11,191 | 2,342 | +23.2 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,000 | 1,812 | +2.5 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 10,923 | 5,668 | +6.1 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 10,829 | 2,287 | +35.1 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 10,829 | 2,287 | +34.2 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 10,778 | 994 | +14.7 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 10,749 | 972 | +286.2 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 10,416 | 1,361 | +28.1 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 10,414 | 1,272 | +35.3 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,250 | 7,771 | +7.5 |
| [openai/codex-security](https://github.com/openai/codex-security) | 9,963 | 703 | +105.1 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 9,946 | 707 | +787.5 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 9,799 | 784 | +17.8 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,604 | 722 | +5.0 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 9,595 | 818 | +81.4 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 9,519 | 762 | +23.8 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,979 | 836 | +2.8 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,961 | 858 | +8.0 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 8,589 | 258 | +50.9 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,357 | 642 | +0.7 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,082 | 194 | +1.4 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,599 | 1,142 | +1.6 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 6,610 | 519 | +13.4 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 6,569 | 470 | +50.1 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,561 | 440 | +4.1 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,348 | 342 | +16.0 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,301 | 242 | +5.0 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,143 | 601 | +3.9 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,078 | 423 | +0.2 |
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
