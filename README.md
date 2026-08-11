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

> Auto-updated daily — last refreshed 2026-08-11

| Metric | Value |
|---|---|
| Repos tracked | **183** |
| Total stars | **8,674,368** |
| Total forks | **1,294,796** |
| Fastest growing | **ai-agent-book** (+1268.5/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 35,859 | +1268.5 |
| 2 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 100,314 | +1045.9 |
| 3 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 45,344 | +922.0 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 228,599 | +895.0 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 41,945 | +815.6 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 385,845 | 81,092 | +159.7 |
| [obra/superpowers](https://github.com/obra/superpowers) | 270,369 | 24,164 | +695.8 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 239,302 | 36,343 | +647.3 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 239,302 | 36,343 | +603.5 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 228,599 | 44,987 | +895.0 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 186,506 | 46,082 | +24.7 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 173,007 | 12,617 | +555.5 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 166,981 | 21,559 | +53.4 |
| [langgenius/dify](https://github.com/langgenius/dify) | 152,029 | 23,991 | +120.0 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 148,436 | 21,610 | +128.3 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 143,934 | 23,976 | +81.1 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 126,274 | 8,602 | +614.5 |
| [github/spec-kit](https://github.com/github/spec-kit) | 126,134 | 11,269 | +314.1 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 117,410 | 61,944 | +74.0 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 115,423 | 12,371 | +417.0 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 105,057 | 10,220 | +557.3 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 100,314 | 5,524 | +1045.9 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 97,351 | 5,610 | +421.6 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 90,354 | 7,870 | +166.4 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 89,450 | 11,897 | +302.0 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 88,732 | 20,524 | +98.3 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,606 | 59,297 | +6.7 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 84,971 | 9,945 | +480.0 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 83,662 | 10,825 | +114.5 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 81,482 | 15,788 | +49.8 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 80,565 | 12,035 | +308.2 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 77,408 | 8,507 | +31.8 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 75,535 | 4,754 | +305.4 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 75,197 | 12,708 | +18.7 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 75,140 | 5,152 | +630.0 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 73,796 | 11,961 | +149.6 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 72,245 | 8,202 | +139.5 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 72,134 | 8,984 | +252.6 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 70,392 | 5,954 | +733.0 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 69,882 | 6,310 | +63.3 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 67,654 | 5,520 | +109.7 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,533 | 13,526 | +3.4 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 65,850 | 5,031 | +661.2 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 65,850 | 5,031 | +398.9 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 64,508 | 4,442 | +184.9 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 64,288 | 6,389 | +126.9 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 63,452 | 12,505 | +214.2 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 62,702 | 10,305 | +262.6 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 61,821 | 52,283 | +294.6 |
| [tw93/Pake](https://github.com/tw93/Pake) | 60,564 | 12,366 | +138.6 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 58,291 | 7,497 | +69.3 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 57,858 | 5,028 | +393.5 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 56,078 | 10,480 | +102.2 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,313 | 24,876 | +28.4 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 52,801 | 6,055 | +35.0 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 52,089 | 4,550 | +94.0 |
| [usestrix/strix](https://github.com/usestrix/strix) | 50,897 | 5,434 | +354.7 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 50,022 | 6,191 | +295.8 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 48,885 | 3,407 | +105.9 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 48,110 | 4,835 | +37.0 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 46,876 | 7,255 | +155.5 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 46,856 | 5,847 | +442.0 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 46,846 | 9,527 | +139.6 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 46,832 | 8,289 | +48.8 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 46,487 | 8,088 | +283.4 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,456 | 10,311 | +22.4 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 45,344 | 6,088 | +922.0 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 44,857 | 10,592 | +121.8 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 44,794 | 3,195 | +153.7 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 44,752 | 6,559 | +77.9 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 44,752 | 6,559 | +59.0 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 43,850 | 6,898 | +174.8 |
| [stablyai/orca](https://github.com/stablyai/orca) | 41,945 | 2,932 | +815.6 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 41,900 | 8,658 | +56.8 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 41,812 | 3,337 | +141.2 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,398 | 4,192 | +16.5 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 40,660 | 3,515 | +76.8 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 40,467 | 3,856 | +232.9 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 40,081 | 2,686 | +24.7 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,529 | 6,221 | +4.4 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 39,412 | 6,623 | +79.8 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 38,964 | 2,791 | +75.7 |
| [wshobson/agents](https://github.com/wshobson/agents) | 38,700 | 4,125 | +35.4 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 38,480 | 3,460 | +46.9 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 38,462 | 3,063 | +414.7 |
| [google/langextract](https://github.com/google/langextract) | 38,114 | 2,666 | +20.0 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 37,674 | 4,741 | +49.6 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 36,310 | 6,793 | +26.9 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 36,081 | 3,221 | +26.5 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 35,859 | 3,898 | +1268.5 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 33,798 | 2,202 | +223.0 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 33,764 | 2,974 | +280.5 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 33,383 | 3,766 | +61.6 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,553 | 4,892 | +12.4 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 31,837 | 3,255 | +63.2 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 31,654 | 4,607 | +257.2 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 31,320 | 1,921 | +60.8 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 31,144 | 10,715 | +329.7 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 30,617 | 8,907 | +35.0 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 30,560 | 4,931 | +368.0 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 30,309 | 1,775 | +50.6 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 29,740 | 2,723 | +196.9 |
| [voideditor/void](https://github.com/voideditor/void) | 28,858 | 2,618 | +0.7 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 28,572 | 2,537 | +175.7 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 28,189 | 2,218 | +44.7 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 28,041 | 2,756 | +66.3 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,740 | 2,951 | +14.5 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 27,620 | 3,849 | +54.1 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 27,582 | 3,335 | +189.2 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 27,522 | 1,864 | +531.3 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 27,287 | 1,265 | +40.6 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 27,271 | 2,963 | +51.5 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 27,200 | 1,909 | +411.2 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 27,200 | 1,909 | +426.4 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 26,854 | 2,281 | +78.6 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 25,980 | 4,017 | +8.1 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 25,911 | 2,188 | +53.6 |
| [decolua/9router](https://github.com/decolua/9router) | 25,150 | 4,459 | +133.0 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,128 | 1,114 | +9.9 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 23,698 | 2,245 | +194.0 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,365 | 1,727 | +5.6 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,424 | 3,113 | +7.4 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 21,287 | 2,727 | +37.0 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,267 | 2,816 | +9.9 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 21,233 | 741 | +74.4 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 19,976 | 1,400 | +277.5 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 19,899 | 1,676 | +93.9 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 19,779 | 1,420 | +40.5 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 19,640 | 2,816 | +58.7 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 19,549 | 1,761 | +373.5 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 19,510 | 2,133 | +93.3 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,341 | 1,178 | +19.2 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 19,216 | 3,143 | +76.2 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 18,853 | 1,794 | +33.5 |
| [jundot/omlx](https://github.com/jundot/omlx) | 18,581 | 1,604 | +34.2 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,099 | 2,282 | +4.8 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 18,071 | 2,373 | +40.1 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,467 | 1,532 | +2.7 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 17,193 | 2,357 | +47.1 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 16,965 | 1,908 | +298.6 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 16,640 | 1,575 | +27.0 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,353 | 1,711 | +5.1 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 15,761 | 1,537 | +24.5 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 15,745 | 2,929 | +8.0 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 15,524 | 1,371 | +52.0 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,436 | 1,773 | +6.9 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 15,371 | 2,278 | +127.6 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 15,190 | 2,238 | +18.1 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,799 | 3,294 | +12.9 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,738 | 1,499 | +10.2 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 14,499 | 1,283 | +40.1 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,282 | 1,056 | +7.6 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 14,037 | 1,439 | +146.7 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,028 | 8,530 | +19.0 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 12,858 | 1,179 | +16.2 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 12,699 | 1,301 | +39.0 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 12,330 | 539 | +24.4 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 11,943 | 883 | +51.8 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 11,142 | 1,209 | +34.9 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 10,964 | 1,815 | +2.1 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 10,936 | 2,285 | +21.5 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 10,891 | 5,668 | +6.5 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 10,676 | 986 | +15.1 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 10,467 | 2,199 | +32.9 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 10,467 | 2,199 | +30.2 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 10,227 | 1,348 | +29.1 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,226 | 7,783 | +8.4 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 9,985 | 1,229 | +31.3 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,597 | 723 | +5.4 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 9,591 | 761 | +15.9 |
| [openai/codex-security](https://github.com/openai/codex-security) | 9,534 | 654 | +156.5 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 9,411 | 807 | +97.4 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 9,231 | 724 | +21.1 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9,203 | 880 | +16.5 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,958 | 833 | +2.9 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,367 | 643 | +1.1 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 8,291 | 684 | +118.0 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 8,207 | 242 | +51.8 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,060 | 192 | +1.0 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,585 | 1,137 | +1.5 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 6,541 | 507 | +15.1 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,540 | 440 | +4.5 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,271 | 240 | +5.4 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,205 | 328 | +15.4 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,140 | 599 | +4.9 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 6,126 | 436 | +8.0 |
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
