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

> Auto-updated daily — last refreshed 2026-07-29

| Metric | Value |
|---|---|
| Repos tracked | **175** |
| Total stars | **8,290,414** |
| Total forks | **1,242,183** |
| Fastest growing | **ai-agent-book** (+1944.4/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 25,453 | +1944.4 |
| 2 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 91,219 | +1167.6 |
| 3 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 222,053 | +961.1 |
| 4 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 33,496 | +928.0 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 32,145 | +850.5 |

### 🆕 Recently added

- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — added 2026-07-27 — Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex, and Gemini CLI: local deterministic AST parsing, every edge explained, no vector store.
- [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) — added 2026-07-27 — Academic Research Skills for Claude Code: research → write → review → revise → finalize
- [Anionex/banana-slides](https://github.com/Anionex/banana-slides) — added 2026-07-27 — 一个基于nano banana pro🍌的原生AI PPT生成应用，迈向＂Vibe PPT＂; 支持上传任意模板图片，上传任意素材&智能解析，一句话/大纲/页面描述自动生成PPT，口头修改指定区域、一键导出可编辑ppt - An AI-native slides generator based on nano banana pro🍌
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 384,456 | 80,785 | +168.6 |
| [obra/superpowers](https://github.com/obra/superpowers) | 262,925 | 23,483 | +739.1 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 235,113 | 35,816 | +702.1 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 235,113 | 35,817 | +659.8 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 222,053 | 42,526 | +961.1 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,744 | 46,068 | +19.0 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 169,881 | 12,284 | +608.7 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 166,494 | 21,507 | +56.1 |
| [langgenius/dify](https://github.com/langgenius/dify) | 150,650 | 23,738 | +122.4 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 147,170 | 21,386 | +133.5 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 142,846 | 23,778 | +80.7 |
| [github/spec-kit](https://github.com/github/spec-kit) | 124,384 | 11,104 | +344.5 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 122,129 | 8,237 | +667.8 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 113,661 | 61,003 | +37.8 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 111,280 | 11,871 | +433.6 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 97,974 | 9,515 | +638.0 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 94,079 | 5,377 | +452.3 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 91,219 | 5,023 | +1167.6 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 88,909 | 7,731 | +175.7 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,563 | 59,362 | +7.3 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 87,535 | 20,005 | +99.4 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 87,374 | 11,610 | +330.5 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 82,459 | 10,579 | +118.4 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 82,374 | 9,522 | +530.6 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 80,949 | 15,729 | +51.3 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 77,106 | 8,474 | +33.4 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 76,145 | 11,383 | +302.5 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 74,971 | 12,680 | +18.9 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 73,736 | 4,615 | +335.5 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 72,551 | 11,775 | +159.4 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 71,225 | 7,999 | +150.5 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 69,299 | 8,634 | +258.9 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 69,044 | 6,215 | +63.1 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 68,759 | 4,753 | +661.1 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 66,744 | 5,445 | +116.9 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,502 | 13,532 | +3.6 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 63,673 | 6,341 | +141.3 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 63,024 | 4,777 | +792.3 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 63,024 | 4,777 | +462.7 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 62,997 | 4,357 | +197.3 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 62,079 | 12,208 | +233.8 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 62,018 | 5,032 | +755.7 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 61,226 | 10,006 | +289.5 |
| [tw93/Pake](https://github.com/tw93/Pake) | 60,299 | 12,257 | +160.0 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 59,461 | 50,912 | +317.3 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 57,847 | 7,443 | +75.7 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,009 | 24,777 | +29.3 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 54,982 | 10,176 | +105.5 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 54,790 | 4,740 | +433.7 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 52,398 | 5,919 | +35.7 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 51,192 | 4,457 | +98.6 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 47,787 | 3,237 | +109.8 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 47,771 | 4,781 | +39.0 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 47,308 | 5,806 | +315.3 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 46,511 | 9,491 | +173.2 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 46,358 | 8,207 | +51.1 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,181 | 10,286 | +22.6 |
| [usestrix/strix](https://github.com/usestrix/strix) | 45,457 | 4,750 | +340.5 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 45,433 | 7,061 | +164.4 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 44,710 | 7,582 | +316.3 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 44,109 | 6,502 | +83.6 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 44,109 | 6,502 | +66.7 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 43,733 | 10,220 | +128.9 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 43,588 | 3,107 | +167.3 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 43,566 | 5,246 | +523.8 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 42,201 | 6,649 | +185.6 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 41,403 | 8,529 | +60.5 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,180 | 4,166 | +16.4 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 40,212 | 3,471 | +85.3 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 39,988 | 3,202 | +147.0 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,506 | 6,227 | +6.6 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 39,297 | 2,675 | +17.6 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 38,483 | 3,626 | +253.4 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 38,395 | 6,466 | +80.4 |
| [wshobson/agents](https://github.com/wshobson/agents) | 38,344 | 4,103 | +37.0 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 38,284 | 2,721 | +80.9 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 38,156 | 3,438 | +51.3 |
| [google/langextract](https://github.com/google/langextract) | 37,919 | 2,633 | +21.0 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 37,171 | 4,661 | +51.8 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 36,330 | 2,837 | +523.3 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 36,028 | 6,760 | +28.0 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 35,845 | 3,197 | +28.2 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 33,496 | 4,335 | +928.0 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 32,812 | 3,696 | +65.5 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,429 | 4,850 | +13.0 |
| [stablyai/orca](https://github.com/stablyai/orca) | 32,145 | 2,267 | +850.5 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 31,026 | 3,120 | +63.4 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 30,886 | 1,882 | +67.0 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 30,508 | 4,382 | +307.2 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 30,421 | 8,905 | +39.4 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 30,051 | 1,753 | +57.5 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 29,914 | 2,890 | +275.8 |
| [voideditor/void](https://github.com/voideditor/void) | 28,873 | 2,600 | +1.2 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 28,430 | 4,602 | +456.4 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 28,316 | 9,296 | +420.8 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 28,085 | 2,467 | +216.5 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 27,984 | 1,801 | +165.8 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 27,596 | 2,164 | +44.5 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,576 | 2,927 | +14.9 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 27,453 | 2,542 | +203.2 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 27,362 | 2,690 | +69.8 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 26,929 | 3,772 | +54.4 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 26,920 | 1,246 | +43.7 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 26,894 | 2,914 | +57.3 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 26,839 | 3,255 | +235.6 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 25,944 | 2,167 | +80.8 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 25,904 | 4,019 | +8.7 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 25,453 | 2,635 | +1944.4 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 25,290 | 2,098 | +58.4 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,015 | 1,110 | +10.2 |
| [decolua/9router](https://github.com/decolua/9router) | 23,981 | 4,104 | +145.7 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 23,000 | 1,551 | +634.9 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,301 | 1,719 | +5.8 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 22,109 | 1,491 | +422.3 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,276 | 3,090 | +6.4 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,203 | 2,815 | +11.2 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 20,507 | 1,921 | +176.0 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 19,419 | 1,378 | +44.3 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 19,282 | 1,606 | +110.2 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,104 | 1,157 | +19.5 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 19,071 | 2,687 | +63.2 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 18,655 | 2,075 | +133.0 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 18,590 | 1,766 | +37.5 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 18,490 | 3,074 | +83.4 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 18,340 | 579 | +10.3 |
| [jundot/omlx](https://github.com/jundot/omlx) | 18,269 | 1,562 | +37.2 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,066 | 2,284 | +5.5 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,427 | 1,525 | +2.6 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 17,056 | 2,308 | +26.8 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 16,669 | 2,267 | +49.5 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 16,330 | 1,548 | +28.4 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,287 | 1,710 | +5.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 15,670 | 2,885 | +8.8 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 15,620 | 1,063 | +244.9 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,345 | 1,769 | +6.0 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 14,941 | 2,202 | +17.7 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,769 | 3,299 | +16.6 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 14,662 | 2,068 | +168.9 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,591 | 1,485 | +9.9 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,126 | 1,050 | +6.1 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 13,981 | 1,250 | +40.2 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 12,990 | 1,438 | +292.8 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 12,646 | 1,134 | +16.2 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 12,534 | 1,279 | +50.3 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 12,312 | 1,186 | +237.5 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 12,072 | 531 | +26.4 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 11,626 | 870 | +63.7 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 10,953 | 1,815 | +2.7 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 10,804 | 1,176 | +40.0 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 10,790 | 5,668 | +5.9 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 10,564 | 2,198 | +18.5 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 10,430 | 957 | +13.4 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,147 | 7,777 | +9.4 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 10,088 | 2,112 | +35.0 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 10,088 | 2,112 | +31.8 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 9,889 | 1,305 | +30.8 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 9,569 | 1,170 | +30.8 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,567 | 728 | +5.9 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 9,470 | 747 | +19.7 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9,388 | 874 | +33.8 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 9,346 | 895 | +39.3 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 9,008 | 709 | +23.3 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,883 | 823 | +1.2 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,358 | 644 | +1.4 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,052 | 192 | +1.3 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 7,881 | 228 | +73.5 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,558 | 1,129 | +1.1 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 7,531 | 630 | +59.1 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,495 | 439 | +5.3 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 6,392 | 484 | +20.3 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,213 | 238 | +6.1 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,088 | 593 | +5.6 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,078 | 425 | +0.5 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,040 | 321 | +19.2 |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 78 | 4 | — |
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
