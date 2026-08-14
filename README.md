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

> Auto-updated daily — last refreshed 2026-08-14

| Metric | Value |
|---|---|
| Repos tracked | **183** |
| Total stars | **8,735,086** |
| Total forks | **1,303,129** |
| Fastest growing | **ai-agent-book** (+1167.4/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 37,139 | +1167.4 |
| 2 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 102,336 | +1024.8 |
| 3 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 47,449 | +905.1 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 230,293 | +884.4 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 45,153 | +835.1 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 386,236 | 81,182 | +158.8 |
| [obra/superpowers](https://github.com/obra/superpowers) | 271,883 | 24,313 | +685.0 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 240,033 | 36,432 | +590.2 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 240,032 | 36,432 | +634.2 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 230,293 | 45,582 | +884.4 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 186,614 | 46,087 | +25.1 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 173,657 | 12,680 | +544.6 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 167,108 | 21,569 | +53.1 |
| [langgenius/dify](https://github.com/langgenius/dify) | 152,408 | 24,055 | +120.2 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 148,744 | 21,654 | +127.4 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 144,219 | 24,013 | +81.5 |
| [github/spec-kit](https://github.com/github/spec-kit) | 127,680 | 11,423 | +320.6 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 127,132 | 8,684 | +603.3 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 117,709 | 62,084 | +74.8 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 116,538 | 12,522 | +415.5 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 106,126 | 10,336 | +523.8 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 102,336 | 5,632 | +1024.8 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 98,071 | 5,669 | +415.4 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 90,689 | 7,917 | +164.6 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 89,958 | 11,956 | +297.1 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 89,023 | 20,669 | +98.3 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,620 | 59,280 | +6.6 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 85,657 | 10,043 | +471.4 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 83,981 | 10,878 | +114.2 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 81,677 | 12,200 | +310.3 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 81,674 | 15,806 | +50.3 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 77,464 | 8,508 | +31.4 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 76,359 | 5,233 | +620.9 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 76,084 | 4,789 | +301.2 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 75,235 | 12,720 | +18.5 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 74,179 | 12,019 | +148.9 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 72,869 | 9,072 | +252.4 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 72,453 | 8,256 | +137.1 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 71,529 | 6,077 | +717.2 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 71,187 | 6,418 | +76.0 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 67,853 | 5,547 | +108.2 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,551 | 13,522 | +3.5 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 66,285 | 5,082 | +635.4 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 66,285 | 5,082 | +384.6 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 64,820 | 4,470 | +182.2 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 64,461 | 6,404 | +124.6 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 63,767 | 12,575 | +210.5 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 62,874 | 10,330 | +255.6 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 62,791 | 52,822 | +295.7 |
| [tw93/Pake](https://github.com/tw93/Pake) | 60,689 | 12,422 | +135.3 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 58,358 | 7,497 | +67.7 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 58,149 | 5,052 | +380.3 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 56,298 | 10,558 | +101.3 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,365 | 24,894 | +28.0 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 52,882 | 6,069 | +34.7 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 52,281 | 4,571 | +93.0 |
| [usestrix/strix](https://github.com/usestrix/strix) | 51,921 | 5,577 | +354.2 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 50,341 | 6,243 | +288.1 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 49,131 | 3,425 | +105.1 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 48,185 | 4,840 | +36.6 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 48,015 | 5,990 | +438.3 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 47,449 | 6,410 | +905.1 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 47,241 | 7,313 | +154.3 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 46,961 | 8,304 | +48.6 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 46,883 | 9,527 | +133.2 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 46,696 | 8,145 | +274.8 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,512 | 10,317 | +22.2 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 45,999 | 3,305 | +163.7 |
| [stablyai/orca](https://github.com/stablyai/orca) | 45,153 | 3,153 | +835.1 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 45,126 | 10,672 | +120.6 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 44,921 | 6,569 | +58.7 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 44,920 | 6,569 | +77.1 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 44,191 | 6,948 | +172.3 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 42,410 | 3,376 | +150.9 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 42,005 | 8,688 | +56.0 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,436 | 4,195 | +16.4 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 40,898 | 3,899 | +228.9 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 40,773 | 3,522 | +75.3 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 40,263 | 2,685 | +26.0 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 39,651 | 6,656 | +79.8 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,563 | 6,223 | +5.1 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 39,137 | 2,805 | +75.0 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 38,866 | 3,091 | +396.4 |
| [wshobson/agents](https://github.com/wshobson/agents) | 38,788 | 4,133 | +35.2 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 38,551 | 3,460 | +46.0 |
| [google/langextract](https://github.com/google/langextract) | 38,363 | 2,688 | +22.3 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 37,804 | 4,772 | +49.4 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 37,139 | 4,073 | +1167.4 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 36,378 | 6,800 | +26.8 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 36,160 | 3,229 | +26.5 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 34,538 | 2,280 | +224.1 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 33,746 | 2,987 | +266.1 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 33,515 | 3,791 | +60.9 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,572 | 4,893 | +12.1 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 31,974 | 3,273 | +62.5 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 31,935 | 4,645 | +249.0 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 31,604 | 10,963 | +313.2 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 31,419 | 1,936 | +59.7 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 30,811 | 4,993 | +349.4 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 30,650 | 8,911 | +34.0 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 30,380 | 1,779 | +49.5 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 30,055 | 2,760 | +192.3 |
| [voideditor/void](https://github.com/voideditor/void) | 28,849 | 2,625 | +0.6 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 28,784 | 2,046 | +420.2 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 28,784 | 2,046 | +454.1 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 28,619 | 2,546 | +167.7 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 28,410 | 2,246 | +46.0 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 28,240 | 1,911 | +508.8 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 28,171 | 2,767 | +65.2 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,786 | 2,960 | +14.5 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 27,760 | 3,370 | +181.8 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 27,751 | 3,878 | +53.7 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 27,503 | 2,972 | +52.7 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 27,378 | 1,271 | +40.1 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 26,987 | 2,302 | +77.0 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 26,039 | 2,205 | +52.6 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,002 | 4,016 | +8.1 |
| [decolua/9router](https://github.com/decolua/9router) | 25,396 | 4,520 | +130.4 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,160 | 1,115 | +9.9 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 24,659 | 2,358 | +201.2 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,364 | 1,725 | +5.4 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,449 | 3,118 | +7.5 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 21,416 | 1,954 | +396.8 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 21,400 | 747 | +73.2 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 21,372 | 2,739 | +30.5 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,279 | 2,820 | +9.6 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 20,432 | 1,442 | +267.8 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 20,073 | 1,701 | +91.9 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 19,860 | 2,857 | +59.5 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 19,851 | 1,430 | +39.7 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 19,666 | 2,142 | +88.3 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 19,439 | 3,171 | +76.1 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,416 | 1,181 | +19.5 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 18,919 | 1,808 | +33.0 |
| [jundot/omlx](https://github.com/jundot/omlx) | 18,674 | 1,616 | +34.0 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 18,479 | 2,408 | +45.5 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,112 | 2,286 | +4.8 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 17,485 | 1,965 | +286.9 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,481 | 1,534 | +2.8 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 17,318 | 2,375 | +46.8 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 16,683 | 1,581 | +26.2 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,374 | 1,715 | +5.2 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 15,856 | 3,008 | +9.7 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 15,825 | 1,540 | +23.6 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 15,727 | 1,388 | +63.8 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 15,518 | 2,301 | +121.6 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,455 | 1,771 | +6.8 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 15,249 | 2,248 | +18.2 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,796 | 3,293 | +12.1 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,756 | 1,503 | +10.0 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 14,656 | 1,291 | +40.9 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 14,597 | 1,489 | +153.3 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,301 | 1,057 | +7.6 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,103 | 8,535 | +20.6 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 12,896 | 1,190 | +16.0 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 12,731 | 1,302 | +37.1 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 12,400 | 544 | +24.3 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 12,010 | 890 | +49.9 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 11,284 | 1,225 | +35.9 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 10,996 | 1,818 | +2.7 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 10,989 | 2,298 | +21.3 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 10,906 | 5,667 | +6.4 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 10,712 | 991 | +14.9 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 10,644 | 2,249 | +34.9 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 10,644 | 2,249 | +33.7 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 10,302 | 1,356 | +28.7 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,239 | 7,779 | +8.1 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 10,195 | 1,243 | +34.2 |
| [openai/codex-security](https://github.com/openai/codex-security) | 9,790 | 681 | +137.1 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 9,614 | 764 | +15.3 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,598 | 722 | +5.2 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 9,512 | 817 | +91.5 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 9,332 | 738 | +22.1 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9,196 | 885 | +15.0 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,969 | 836 | +2.9 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 8,542 | 846 | +92.3 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,372 | 643 | +1.2 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 8,316 | 248 | +50.3 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,075 | 193 | +1.4 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,594 | 1,139 | +1.7 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 6,591 | 521 | +15.3 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,551 | 440 | +4.4 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 6,404 | 460 | +71.5 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,286 | 240 | +5.3 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,243 | 333 | +15.0 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,140 | 600 | +4.4 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,076 | 425 | +0.2 |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 83 | 4 | — |
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
