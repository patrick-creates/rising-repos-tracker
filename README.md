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

> Auto-updated daily — last refreshed 2026-08-10

| Metric | Value |
|---|---|
| Repos tracked | **183** |
| Total stars | **8,654,823** |
| Total forks | **1,292,302** |
| Fastest growing | **ai-agent-book** (+1307.0/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 35,401 | +1307.0 |
| 2 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 99,611 | +1052.9 |
| 3 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 44,504 | +924.3 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 228,056 | +899.0 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 41,087 | +814.4 |

### 🆕 Recently added

- [pascalorg/editor](https://github.com/pascalorg/editor) — added 2026-08-10 — Create and share 3D architectural projects.
- [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) — added 2026-08-10 —  🚀 通用 AI IDE 账号管理工具：支持 Antigravity / Codex / GitHub Copilot / Windsurf / Kiro / Cursor / Gemini-cli / CodeBuddy，多账号切换、配额监控、自动唤醒与多开实例管理。 🚀 Universal AI IDE account manager for Antigravity / Codex / GitHub Copilot / Windsurf / Kiro / Cursor / Gemini-cli / CodeBuddy, with multi-account switching, quota monitoring, wake-up automation, and multi-insta
- [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) — added 2026-08-10 — Independent Auditing of AI Agents. Run by human or the agent itself, to answer the most crucial question in the AI Agent Economy. Is the agent doing what is supposed to do? With iFixAi you can have this answer in less than 120 seconds.
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 385,728 | 81,073 | +160.2 |
| [obra/superpowers](https://github.com/obra/superpowers) | 269,867 | 24,122 | +699.8 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 239,068 | 36,317 | +651.9 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 239,068 | 36,317 | +608.3 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 228,056 | 44,804 | +899.0 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 186,474 | 46,071 | +24.6 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 172,718 | 12,597 | +558.5 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 166,940 | 21,548 | +53.6 |
| [langgenius/dify](https://github.com/langgenius/dify) | 151,912 | 23,977 | +120.1 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 148,351 | 21,594 | +128.8 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 143,848 | 23,966 | +81.0 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 126,030 | 8,577 | +618.9 |
| [github/spec-kit](https://github.com/github/spec-kit) | 126,013 | 11,257 | +316.3 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 117,215 | 61,901 | +72.6 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 115,109 | 12,334 | +418.2 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 104,712 | 10,182 | +572.4 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 99,611 | 5,479 | +1052.9 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 97,124 | 5,599 | +424.0 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 90,245 | 7,858 | +167.0 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 89,122 | 11,870 | +301.7 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 88,620 | 20,496 | +98.2 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,600 | 59,294 | +6.7 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 84,794 | 9,907 | +483.6 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 83,579 | 10,814 | +114.8 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 81,464 | 15,782 | +50.2 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 80,291 | 12,002 | +308.6 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 77,380 | 8,503 | +31.9 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 75,404 | 4,745 | +307.5 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 75,185 | 12,708 | +18.8 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 74,719 | 5,119 | +632.9 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 73,699 | 11,952 | +150.3 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 72,165 | 8,188 | +140.2 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 71,914 | 8,956 | +253.0 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 69,926 | 5,897 | +737.3 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 69,775 | 6,300 | +62.8 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 67,586 | 5,512 | +110.2 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,531 | 13,527 | +3.5 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 65,690 | 5,014 | +670.1 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 65,690 | 5,014 | +403.8 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 64,402 | 4,435 | +185.9 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 64,232 | 6,388 | +127.8 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 63,332 | 12,492 | +215.3 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 62,646 | 10,298 | +265.0 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 61,449 | 52,083 | +293.6 |
| [tw93/Pake](https://github.com/tw93/Pake) | 60,536 | 12,347 | +140.0 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 58,265 | 7,496 | +69.8 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 57,784 | 5,020 | +398.6 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 55,989 | 10,454 | +102.4 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,286 | 24,871 | +28.4 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 52,769 | 6,046 | +35.0 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 52,020 | 4,542 | +94.3 |
| [usestrix/strix](https://github.com/usestrix/strix) | 50,432 | 5,372 | +353.2 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 49,914 | 6,172 | +298.5 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 48,836 | 3,401 | +106.6 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 48,086 | 4,832 | +37.2 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 46,827 | 9,525 | +141.7 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 46,810 | 8,282 | +49.2 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 46,773 | 7,239 | +156.2 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,437 | 10,306 | +22.4 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 46,414 | 5,770 | +442.0 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 46,403 | 8,054 | +286.3 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 44,785 | 10,579 | +122.4 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 44,707 | 6,554 | +78.3 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 44,707 | 6,554 | +59.5 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 44,583 | 3,186 | +152.8 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 44,504 | 5,972 | +924.3 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 43,716 | 6,880 | +175.4 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 41,867 | 8,654 | +57.1 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 41,542 | 3,304 | +132.0 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,390 | 4,192 | +16.6 |
| [stablyai/orca](https://github.com/stablyai/orca) | 41,087 | 2,876 | +814.4 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 40,620 | 3,510 | +77.3 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 40,291 | 3,838 | +233.8 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 40,029 | 2,684 | +24.3 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,525 | 6,221 | +4.4 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 39,337 | 6,610 | +79.9 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 38,896 | 2,788 | +75.8 |
| [wshobson/agents](https://github.com/wshobson/agents) | 38,667 | 4,123 | +35.5 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 38,461 | 3,463 | +47.2 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 38,330 | 3,052 | +421.4 |
| [google/langextract](https://github.com/google/langextract) | 38,004 | 2,653 | +18.8 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 37,630 | 4,735 | +49.7 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 36,291 | 6,794 | +27.0 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 36,055 | 3,220 | +26.5 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 35,401 | 3,836 | +1307.0 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 34,019 | 2,967 | +290.0 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 33,550 | 2,174 | +222.6 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 33,342 | 3,762 | +61.9 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,546 | 4,888 | +12.4 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 31,791 | 3,241 | +63.5 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 31,516 | 4,578 | +259.3 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 31,288 | 1,919 | +61.2 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 31,010 | 10,626 | +336.7 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 30,597 | 8,907 | +35.2 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 30,486 | 4,911 | +375.0 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 30,285 | 1,773 | +51.0 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 29,613 | 2,711 | +198.2 |
| [voideditor/void](https://github.com/voideditor/void) | 28,860 | 2,617 | +0.8 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 28,560 | 2,530 | +178.6 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 28,140 | 2,219 | +44.6 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 27,996 | 2,754 | +66.6 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,721 | 2,945 | +14.4 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 27,573 | 3,846 | +54.3 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 27,526 | 3,335 | +191.9 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 27,256 | 1,265 | +40.7 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 27,247 | 2,956 | +52.0 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 27,236 | 1,847 | +538.3 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 26,809 | 2,280 | +79.1 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 26,614 | 1,869 | +406.2 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 26,614 | 1,869 | +403.6 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 25,975 | 4,016 | +8.1 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 25,862 | 2,181 | +53.8 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,123 | 1,113 | +10.0 |
| [decolua/9router](https://github.com/decolua/9router) | 25,083 | 4,459 | +134.1 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 23,393 | 2,216 | +191.8 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,362 | 1,728 | +5.7 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,417 | 3,112 | +7.4 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,262 | 2,815 | +10.0 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 21,250 | 2,717 | +71.5 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 20,927 | 734 | +68.9 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 19,865 | 1,671 | +95.1 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 19,857 | 1,390 | +282.0 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 19,750 | 1,414 | +40.8 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 19,578 | 2,807 | +58.7 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 19,448 | 2,131 | +94.8 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,315 | 1,175 | +19.1 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 19,140 | 3,133 | +76.2 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 18,987 | 1,715 | +366.8 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 18,835 | 1,793 | +33.8 |
| [jundot/omlx](https://github.com/jundot/omlx) | 18,560 | 1,601 | +34.4 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,095 | 2,282 | +4.8 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 17,579 | 2,357 | +30.9 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,460 | 1,531 | +2.7 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 17,164 | 2,349 | +47.5 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 16,661 | 1,882 | +298.4 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 16,615 | 1,573 | +27.0 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,345 | 1,711 | +5.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 15,743 | 2,925 | +8.2 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 15,741 | 1,532 | +25.1 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 15,472 | 1,371 | +75.5 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,428 | 1,773 | +6.8 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 15,323 | 2,269 | +129.9 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 15,166 | 2,233 | +17.9 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,795 | 3,295 | +13.1 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,736 | 1,500 | +10.4 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 14,452 | 1,280 | +40.0 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,277 | 1,055 | +7.7 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,016 | 8,531 | +20.0 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 13,876 | 1,425 | +145.6 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 12,836 | 1,177 | +16.1 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 12,698 | 1,300 | +39.9 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 12,314 | 538 | +24.6 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 11,945 | 886 | +53.1 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 11,119 | 1,206 | +35.3 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 10,962 | 1,814 | +2.1 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 10,906 | 2,278 | +21.3 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 10,890 | 5,670 | +6.6 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 10,662 | 987 | +15.1 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 10,435 | 2,193 | +32.9 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 10,435 | 2,193 | +30.1 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,219 | 7,785 | +8.4 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 10,198 | 1,345 | +29.1 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 9,958 | 1,227 | +31.4 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,596 | 723 | +5.4 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 9,586 | 760 | +16.3 |
| [openai/codex-security](https://github.com/openai/codex-security) | 9,436 | 647 | +164.9 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 9,393 | 804 | +100.3 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9,242 | 879 | +18.1 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 9,221 | 724 | +21.4 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,957 | 830 | +2.9 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,369 | 643 | +1.2 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 8,195 | 242 | +53.2 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 8,173 | 680 | +78.5 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,059 | 192 | +1.0 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,580 | 1,134 | +1.4 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 6,603 | 512 | +18.8 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,538 | 440 | +4.6 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,270 | 240 | +5.5 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,193 | 328 | +15.5 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,139 | 599 | +5.0 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 6,118 | 437 | +58.3 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,078 | 425 | +0.3 |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 82 | 4 | — |
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
