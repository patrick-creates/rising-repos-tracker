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

> Auto-updated daily — last refreshed 2026-08-15

| Metric | Value |
|---|---|
| Repos tracked | **183** |
| Total stars | **8,750,409** |
| Total forks | **1,305,061** |
| Fastest growing | **ai-agent-book** (+1132.8/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 37,405 | +1132.8 |
| 2 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 102,834 | +1015.1 |
| 3 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 48,126 | +899.4 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 230,735 | +879.7 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 45,764 | +829.5 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 386,332 | 81,198 | +158.1 |
| [obra/superpowers](https://github.com/obra/superpowers) | 272,237 | 24,340 | +678.9 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 240,179 | 36,443 | +629.1 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 240,179 | 36,443 | +584.8 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 230,735 | 45,744 | +879.7 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 186,607 | 46,071 | +24.7 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 173,813 | 12,695 | +540.5 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 167,139 | 21,574 | +52.8 |
| [langgenius/dify](https://github.com/langgenius/dify) | 152,456 | 24,069 | +119.5 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 148,808 | 21,663 | +126.8 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 144,243 | 24,013 | +80.9 |
| [github/spec-kit](https://github.com/github/spec-kit) | 128,617 | 11,497 | +327.2 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 127,305 | 8,689 | +598.4 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 117,763 | 62,127 | +74.6 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 116,800 | 12,553 | +413.9 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 106,431 | 10,360 | +512.3 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 102,834 | 5,666 | +1015.1 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 98,253 | 5,680 | +412.8 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 90,785 | 7,925 | +163.9 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 90,135 | 11,977 | +295.6 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 89,071 | 20,704 | +97.7 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,613 | 59,269 | +6.5 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 86,472 | 10,084 | +475.3 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 84,075 | 10,899 | +114.0 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 81,947 | 12,241 | +309.9 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 81,699 | 15,810 | +50.0 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 77,481 | 8,514 | +31.2 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 76,633 | 5,245 | +616.3 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 76,174 | 4,789 | +298.8 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 75,239 | 12,723 | +18.3 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 74,260 | 12,027 | +148.1 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 73,003 | 9,096 | +251.0 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 72,505 | 8,266 | +136.1 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 71,798 | 6,097 | +710.6 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 71,580 | 6,463 | +79.6 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 67,882 | 5,551 | +107.3 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,551 | 13,524 | +3.5 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 66,388 | 5,088 | +626.6 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 66,388 | 5,088 | +379.4 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 64,932 | 4,474 | +181.4 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 64,486 | 6,405 | +123.5 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 63,868 | 12,589 | +209.2 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 62,938 | 10,335 | +253.4 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 62,901 | 52,906 | +293.4 |
| [tw93/Pake](https://github.com/tw93/Pake) | 60,719 | 12,434 | +134.2 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 58,380 | 7,498 | +67.2 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 58,218 | 5,059 | +375.7 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 56,371 | 10,593 | +100.9 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,366 | 24,900 | +27.7 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 52,900 | 6,072 | +34.5 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 52,325 | 4,577 | +92.5 |
| [usestrix/strix](https://github.com/usestrix/strix) | 52,194 | 5,608 | +353.1 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 50,439 | 6,255 | +285.6 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 49,187 | 3,426 | +104.5 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 48,225 | 4,842 | +36.7 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 48,134 | 6,015 | +431.6 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 48,126 | 6,533 | +899.4 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 47,324 | 7,324 | +153.4 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 47,006 | 8,311 | +48.6 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 46,905 | 9,530 | +131.4 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 46,755 | 8,172 | +271.9 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,511 | 10,316 | +22.0 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 46,255 | 3,315 | +164.9 |
| [stablyai/orca](https://github.com/stablyai/orca) | 45,764 | 3,195 | +829.5 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 45,181 | 10,686 | +119.8 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 44,961 | 6,576 | +76.6 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 44,961 | 6,576 | +58.2 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 44,335 | 6,960 | +172.0 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 42,519 | 3,385 | +148.7 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 42,050 | 8,696 | +55.9 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,438 | 4,195 | +16.2 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 41,004 | 3,914 | +227.1 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 40,787 | 3,522 | +74.6 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 40,323 | 2,688 | +26.4 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 39,701 | 6,664 | +79.3 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,574 | 6,227 | +5.2 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 39,178 | 2,803 | +74.5 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 38,969 | 3,105 | +390.2 |
| [wshobson/agents](https://github.com/wshobson/agents) | 38,820 | 4,135 | +35.2 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 38,565 | 3,463 | +45.6 |
| [google/langextract](https://github.com/google/langextract) | 38,382 | 2,690 | +22.3 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 37,855 | 4,775 | +49.4 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 37,405 | 4,103 | +1132.8 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 36,383 | 6,801 | +26.5 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 36,167 | 3,229 | +26.3 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 34,592 | 2,291 | +221.6 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 33,759 | 2,995 | +262.0 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 33,533 | 3,799 | +60.3 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,584 | 4,893 | +12.1 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 31,995 | 3,277 | +62.0 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 31,991 | 4,655 | +245.9 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 31,723 | 11,033 | +307.3 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 31,470 | 1,943 | +59.6 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 30,870 | 5,010 | +343.2 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 30,653 | 8,909 | +33.6 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 30,387 | 1,782 | +48.9 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 30,169 | 2,765 | +191.1 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 29,216 | 2,071 | +420.5 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 29,216 | 2,071 | +452.3 |
| [voideditor/void](https://github.com/voideditor/void) | 28,844 | 2,625 | +0.5 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 28,631 | 2,548 | +165.1 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 28,460 | 2,251 | +46.1 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 28,347 | 1,919 | +498.8 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 28,198 | 2,766 | +64.7 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,802 | 2,963 | +14.6 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 27,789 | 3,373 | +179.0 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 27,781 | 3,878 | +53.3 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 27,579 | 2,980 | +53.0 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 27,403 | 1,271 | +39.9 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 27,024 | 2,307 | +76.5 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 26,072 | 2,212 | +52.0 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,006 | 4,015 | +8.0 |
| [decolua/9router](https://github.com/decolua/9router) | 25,460 | 4,537 | +129.3 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,160 | 1,114 | +9.8 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 24,864 | 2,381 | +201.3 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,364 | 1,726 | +5.3 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 21,762 | 1,995 | +395.3 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,450 | 3,117 | +7.4 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 21,430 | 748 | +72.3 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 21,391 | 2,738 | +28.2 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,286 | 2,821 | +9.6 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 20,510 | 1,453 | +263.1 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 20,110 | 1,715 | +90.9 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 19,894 | 2,859 | +59.0 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 19,869 | 1,429 | +39.4 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 19,689 | 2,145 | +85.8 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 19,457 | 3,176 | +75.0 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,428 | 1,181 | +19.4 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 18,939 | 1,810 | +32.8 |
| [jundot/omlx](https://github.com/jundot/omlx) | 18,704 | 1,621 | +34.0 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 18,508 | 2,413 | +45.2 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,116 | 2,284 | +4.8 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 17,578 | 1,979 | +281.0 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,482 | 1,535 | +2.8 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 17,351 | 2,381 | +46.5 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 16,696 | 1,585 | +25.9 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,374 | 1,715 | +5.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 15,969 | 3,089 | +11.6 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 15,842 | 1,542 | +23.1 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 15,770 | 1,394 | +59.6 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 15,548 | 2,306 | +119.3 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,471 | 1,773 | +7.3 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 15,260 | 2,251 | +18.0 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,800 | 3,292 | +11.9 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 14,796 | 1,500 | +155.7 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,760 | 1,505 | +9.9 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 14,705 | 1,296 | +41.1 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,309 | 1,058 | +7.6 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,124 | 8,537 | +20.7 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 12,924 | 1,192 | +16.3 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 12,744 | 1,303 | +36.6 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 12,417 | 544 | +24.2 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 12,031 | 892 | +49.3 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 11,342 | 1,228 | +36.4 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 11,009 | 2,300 | +21.3 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 10,997 | 1,816 | +2.7 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 10,907 | 5,668 | +6.3 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 10,726 | 993 | +14.9 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 10,684 | 2,250 | +35.0 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 10,684 | 2,250 | +33.9 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 10,316 | 1,357 | +28.4 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 10,244 | 1,246 | +34.6 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,242 | 7,776 | +8.0 |
| [openai/codex-security](https://github.com/openai/codex-security) | 9,834 | 687 | +129.3 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 9,620 | 764 | +15.1 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,604 | 722 | +5.2 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 9,528 | 815 | +89.2 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 9,379 | 745 | +22.7 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9,201 | 886 | +14.8 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,973 | 835 | +3.0 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 8,587 | 847 | +82.8 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 8,385 | 249 | +50.9 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,368 | 642 | +1.1 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,079 | 194 | +1.5 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,597 | 1,140 | +1.7 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 6,603 | 522 | +15.2 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,550 | 440 | +4.2 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 6,470 | 465 | +70.4 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,292 | 241 | +5.4 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,254 | 337 | +14.9 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,141 | 601 | +4.3 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,076 | 424 | +0.2 |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 84 | 5 | — |
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
