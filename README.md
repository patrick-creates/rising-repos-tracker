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

> Auto-updated daily — last refreshed 2026-08-13

| Metric | Value |
|---|---|
| Repos tracked | **183** |
| Total stars | **8,715,409** |
| Total forks | **1,300,415** |
| Fastest growing | **ai-agent-book** (+1199.8/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 36,749 | +1199.8 |
| 2 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 101,714 | +1032.6 |
| 3 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 46,790 | +911.5 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 229,740 | +888.0 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 44,253 | +833.4 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 386,118 | 81,156 | +159.2 |
| [obra/superpowers](https://github.com/obra/superpowers) | 271,390 | 24,263 | +688.7 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 239,812 | 36,401 | +638.7 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 239,812 | 36,401 | +594.8 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 229,740 | 45,366 | +888.0 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 186,575 | 46,088 | +24.9 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 173,445 | 12,671 | +548.2 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 167,078 | 21,562 | +53.3 |
| [langgenius/dify](https://github.com/langgenius/dify) | 152,284 | 24,039 | +120.2 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 148,643 | 21,636 | +127.7 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 144,136 | 24,001 | +81.5 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 126,840 | 8,659 | +606.9 |
| [github/spec-kit](https://github.com/github/spec-kit) | 126,626 | 11,325 | +312.7 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 117,640 | 62,038 | +74.9 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 116,214 | 12,481 | +416.5 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 105,777 | 10,308 | +534.1 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 101,714 | 5,589 | +1032.6 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 97,850 | 5,641 | +417.7 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 90,580 | 7,901 | +165.2 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 89,835 | 11,943 | +299.3 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 88,930 | 20,622 | +98.3 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,617 | 59,279 | +6.7 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 85,422 | 10,014 | +474.1 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 83,869 | 10,857 | +114.2 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 81,629 | 15,801 | +50.3 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 81,362 | 12,153 | +310.3 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 77,451 | 8,508 | +31.6 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 76,006 | 5,207 | +624.6 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 75,946 | 4,776 | +303.1 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 75,221 | 12,716 | +18.5 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 74,051 | 11,997 | +149.1 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 72,668 | 9,048 | +253.0 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 72,397 | 8,250 | +138.0 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 71,234 | 6,043 | +723.6 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 70,709 | 6,388 | +71.4 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 67,785 | 5,541 | +108.7 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,541 | 13,523 | +3.4 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 66,114 | 5,061 | +643.2 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 66,114 | 5,061 | +388.7 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 64,719 | 4,461 | +183.1 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 64,412 | 6,396 | +125.4 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 63,669 | 12,555 | +211.8 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 62,803 | 10,317 | +257.7 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 62,628 | 52,694 | +297.4 |
| [tw93/Pake](https://github.com/tw93/Pake) | 60,629 | 12,405 | +136.2 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 58,331 | 7,497 | +68.2 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 58,043 | 5,043 | +384.4 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 56,222 | 10,530 | +101.5 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,363 | 24,886 | +28.3 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 52,858 | 6,062 | +34.9 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 52,225 | 4,561 | +93.4 |
| [usestrix/strix](https://github.com/usestrix/strix) | 51,633 | 5,544 | +355.1 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 50,220 | 6,227 | +290.4 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 49,061 | 3,419 | +105.5 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 48,161 | 4,835 | +36.8 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 47,842 | 5,963 | +444.2 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 47,105 | 7,285 | +154.5 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 46,913 | 8,296 | +48.7 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 46,873 | 9,525 | +135.3 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 46,790 | 6,310 | +911.5 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 46,628 | 8,121 | +277.6 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,475 | 10,313 | +22.1 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 45,229 | 3,272 | +155.4 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 45,044 | 10,642 | +121.1 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 44,863 | 6,567 | +77.3 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 44,863 | 6,567 | +58.7 |
| [stablyai/orca](https://github.com/stablyai/orca) | 44,253 | 3,083 | +833.4 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 44,083 | 6,929 | +173.2 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 42,254 | 3,369 | +150.6 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 41,974 | 8,680 | +56.3 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,429 | 4,192 | +16.5 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 40,773 | 3,885 | +230.5 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 40,718 | 3,523 | +75.6 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 40,206 | 2,686 | +25.6 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 39,579 | 6,642 | +80.0 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,543 | 6,224 | +4.6 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 39,070 | 2,798 | +75.1 |
| [wshobson/agents](https://github.com/wshobson/agents) | 38,760 | 4,132 | +35.3 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 38,740 | 3,083 | +402.4 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 38,536 | 3,462 | +46.4 |
| [google/langextract](https://github.com/google/langextract) | 38,321 | 2,685 | +22.1 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 37,765 | 4,763 | +49.5 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 36,749 | 4,003 | +1199.8 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 36,354 | 6,800 | +26.8 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 36,134 | 3,226 | +26.5 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 34,301 | 2,262 | +223.9 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 33,743 | 2,976 | +270.6 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 33,472 | 3,780 | +61.1 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,565 | 4,891 | +12.2 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 31,936 | 3,267 | +62.8 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 31,837 | 4,634 | +251.6 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 31,422 | 10,878 | +317.4 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 31,374 | 1,927 | +59.9 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 30,729 | 4,973 | +355.4 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 30,637 | 8,912 | +34.3 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 30,355 | 1,779 | +49.8 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 29,954 | 2,747 | +193.9 |
| [voideditor/void](https://github.com/voideditor/void) | 28,851 | 2,627 | +0.6 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 28,610 | 2,545 | +170.4 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 28,379 | 2,015 | +420.6 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 28,379 | 2,015 | +459.0 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 28,336 | 2,233 | +45.6 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 28,137 | 2,763 | +65.7 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 28,023 | 1,895 | +516.5 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,765 | 2,953 | +14.5 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 27,715 | 3,864 | +53.9 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 27,705 | 3,357 | +184.3 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 27,363 | 2,968 | +51.4 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 27,345 | 1,268 | +40.2 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 26,946 | 2,295 | +77.6 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 25,995 | 2,200 | +52.9 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 25,994 | 4,016 | +8.1 |
| [decolua/9router](https://github.com/decolua/9router) | 25,330 | 4,494 | +131.5 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,148 | 1,115 | +9.9 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 24,319 | 2,317 | +198.5 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,364 | 1,726 | +5.4 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,445 | 3,116 | +7.5 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 21,353 | 747 | +73.8 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 21,345 | 2,736 | +31.7 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,277 | 2,818 | +9.7 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 20,808 | 1,885 | +390.0 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 20,330 | 1,435 | +272.2 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 20,018 | 1,698 | +92.6 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 19,836 | 1,429 | +40.1 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 19,797 | 2,845 | +59.4 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 19,608 | 2,138 | +89.6 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,391 | 1,181 | +19.4 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 19,372 | 3,160 | +76.3 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 18,895 | 1,807 | +33.1 |
| [jundot/omlx](https://github.com/jundot/omlx) | 18,644 | 1,611 | +34.1 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 18,418 | 2,400 | +45.2 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,111 | 2,284 | +4.8 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,480 | 1,532 | +2.9 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 17,377 | 1,949 | +292.6 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 17,281 | 2,368 | +47.0 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 16,671 | 1,580 | +26.5 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,371 | 1,714 | +5.2 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 15,807 | 1,538 | +24.2 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 15,750 | 2,931 | +7.8 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 15,641 | 1,380 | +56.3 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 15,482 | 2,294 | +123.8 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,445 | 1,772 | +6.6 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 15,236 | 2,243 | +18.3 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,795 | 3,294 | +12.3 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,753 | 1,500 | +10.1 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 14,620 | 1,289 | +41.0 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 14,371 | 1,474 | +149.1 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,296 | 1,057 | +7.6 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,060 | 8,525 | +18.4 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 12,879 | 1,187 | +16.0 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 12,722 | 1,305 | +37.7 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 12,380 | 542 | +24.4 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 11,987 | 888 | +50.5 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 11,223 | 1,212 | +35.2 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 10,983 | 1,817 | +2.5 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 10,970 | 2,293 | +21.3 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 10,900 | 5,669 | +6.4 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 10,700 | 990 | +15.0 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 10,600 | 2,235 | +34.7 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 10,600 | 2,235 | +33.3 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 10,282 | 1,353 | +29.0 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,235 | 7,781 | +8.2 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 10,165 | 1,242 | +34.3 |
| [openai/codex-security](https://github.com/openai/codex-security) | 9,721 | 673 | +143.9 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 9,609 | 762 | +15.6 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,597 | 722 | +5.3 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 9,490 | 815 | +93.7 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 9,287 | 732 | +21.5 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9,198 | 884 | +15.5 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,963 | 836 | +2.8 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 8,402 | 832 | +76.3 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,371 | 644 | +1.2 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 8,283 | 248 | +50.9 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,072 | 193 | +1.3 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,591 | 1,140 | +1.6 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 6,569 | 515 | +15.0 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,549 | 440 | +4.5 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,282 | 240 | +5.4 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,231 | 331 | +15.2 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,140 | 598 | +4.5 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 6,138 | 438 | +6.7 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,077 | 425 | +0.2 |
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
