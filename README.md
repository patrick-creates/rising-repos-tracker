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

> Auto-updated daily — last refreshed 2026-07-18

| Metric | Value |
|---|---|
| Repos tracked | **166** |
| Total stars | **7,804,529** |
| Total forks | **1,187,012** |
| Fastest growing | **ponytail** (+1434.3/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 85,310 | +1434.3 |
| 2 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 216,568 | +1038.2 |
| 3 | [chopratejas/headroom](https://github.com/chopratejas/headroom) | 59,733 | +956.7 |
| 4 | [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 18,962 | +880.4 |
| 5 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 57,572 | +852.4 |

### 🆕 Recently added

- [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) — added 2026-07-13 — Installable GitHub library of 1,900+ agentic skills for Claude Code, Cursor, Codex CLI, Autohand Code, Gemini CLI, Antigravity, and more. Includes specialized plugins, installer CLI, bundles, workflows, and official/community skill collections.
- [mindsdb/mindshub](https://github.com/mindsdb/mindshub) — added 2026-07-13 — Make AI do actual work. Swap the model anytime — keep everything you've built.
- [re4/LibreCode](https://github.com/re4/LibreCode) — added 2026-07-13 — LibreCode - A Ollama cursor like coding / Reversing Interface
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 383,325 | 80,528 | +179.6 |
| [obra/superpowers](https://github.com/obra/superpowers) | 256,775 | 22,866 | +815.3 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 230,732 | 35,207 | +752.8 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 230,732 | 35,207 | +713.0 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 216,568 | 40,599 | +1038.2 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,589 | 46,075 | +19.8 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 166,927 | 11,987 | +665.4 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 165,931 | 21,461 | +57.0 |
| [langgenius/dify](https://github.com/langgenius/dify) | 149,192 | 23,506 | +120.7 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 145,809 | 21,135 | +135.1 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 142,020 | 23,614 | +81.6 |
| [github/spec-kit](https://github.com/github/spec-kit) | 122,034 | 10,871 | +366.3 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 118,436 | 7,934 | +727.7 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 113,183 | 60,764 | +36.8 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 107,110 | 11,375 | +442.7 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 90,401 | 5,113 | +473.6 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,503 | 59,404 | +7.6 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 87,666 | 7,602 | +186.2 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 86,539 | 19,549 | +100.8 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 85,310 | 4,639 | +1434.3 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 81,150 | 10,373 | +118.3 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 81,061 | 10,918 | +280.9 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 80,449 | 15,628 | +52.3 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 79,368 | 9,149 | +577.0 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 76,693 | 8,425 | +32.7 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 74,739 | 12,651 | +18.5 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 71,629 | 4,454 | +361.5 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 71,364 | 11,612 | +168.6 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 68,357 | 6,151 | +63.2 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 68,008 | 7,704 | +124.9 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 66,951 | 8,318 | +267.1 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,469 | 13,531 | +3.7 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 66,048 | 5,389 | +126.6 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 64,684 | 4,453 | +729.2 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 63,005 | 6,305 | +155.9 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 61,982 | 9,644 | +124.8 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 61,409 | 4,254 | +206.9 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 60,433 | 11,891 | +249.0 |
| [tw93/Pake](https://github.com/tw93/Pake) | 60,016 | 12,137 | +184.2 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 59,733 | 4,440 | +956.7 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 59,733 | 4,440 | +531.9 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 58,710 | 9,589 | +300.4 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 57,695 | 49,610 | +349.2 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 57,572 | 4,612 | +852.4 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 57,433 | 7,407 | +82.5 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 54,704 | 24,725 | +29.6 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 53,901 | 9,861 | +106.8 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 52,571 | 4,525 | +497.5 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 51,824 | 5,821 | +32.8 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 50,284 | 4,376 | +101.5 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 47,477 | 4,740 | +41.2 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 47,113 | 3,137 | +118.5 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,030 | 10,266 | +24.2 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 45,832 | 8,094 | +51.7 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 45,707 | 9,325 | +206.5 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 43,512 | 6,473 | +89.5 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 43,512 | 6,473 | +94.0 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 43,121 | 6,806 | +155.1 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 42,601 | 9,925 | +134.1 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 42,456 | 3,025 | +182.4 |
| [usestrix/strix](https://github.com/usestrix/strix) | 42,317 | 4,365 | +353.3 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 42,225 | 5,123 | +280.9 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,042 | 4,149 | +17.1 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 40,882 | 8,389 | +63.2 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 40,457 | 6,386 | +191.9 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 39,909 | 3,442 | +97.0 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 39,603 | 4,691 | +618.5 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,446 | 6,225 | +9.0 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 38,819 | 6,510 | +265.0 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,814 | 2,667 | +12.2 |
| [wshobson/agents](https://github.com/wshobson/agents) | 37,999 | 4,085 | +38.2 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 37,858 | 3,415 | +56.2 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 37,535 | 6,289 | +81.3 |
| [google/langextract](https://github.com/google/langextract) | 37,166 | 2,562 | +11.3 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 36,721 | 4,594 | +54.0 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 36,504 | 2,532 | +62.0 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 36,001 | 3,376 | +261.0 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 35,794 | 6,746 | +29.3 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 35,642 | 3,179 | +30.1 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 32,506 | 2,484 | +625.1 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,291 | 4,809 | +13.1 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 32,270 | 3,597 | +69.3 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 30,352 | 3,037 | +63.9 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 30,104 | 8,868 | +41.9 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 29,799 | 1,734 | +65.6 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 29,565 | 1,799 | +54.6 |
| [voideditor/void](https://github.com/voideditor/void) | 28,843 | 2,592 | +0.8 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 28,588 | 4,110 | +351.4 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,429 | 2,911 | +15.3 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 27,163 | 1,730 | +190.9 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 26,956 | 2,358 | +254.5 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 26,894 | 2,110 | +39.1 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 26,861 | 2,643 | +76.5 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 26,544 | 1,225 | +46.4 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 26,438 | 2,890 | +61.6 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 26,391 | 3,700 | +55.9 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 25,813 | 4,014 | +8.8 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 25,721 | 3,040 | +292.3 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 25,305 | 2,098 | +87.0 |
| [toon-format/toon](https://github.com/toon-format/toon) | 24,894 | 1,105 | +9.9 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 24,733 | 4,094 | +526.1 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 24,708 | 2,014 | +70.4 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 23,575 | 7,542 | +398.4 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 23,236 | 2,818 | +165.4 |
| [decolua/9router](https://github.com/decolua/9router) | 22,508 | 3,728 | +149.6 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,180 | 1,707 | +4.4 |
| [stablyai/orca](https://github.com/stablyai/orca) | 21,312 | 1,537 | +727.4 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,184 | 3,083 | +5.9 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,095 | 2,813 | +11.5 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 19,869 | 2,112 | +41.1 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 19,053 | 1,338 | +48.0 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 18,962 | 1,271 | +880.4 |
| [tanweai/pua](https://github.com/tanweai/pua) | 18,838 | 1,135 | +17.9 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 18,575 | 1,536 | +129.7 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 18,479 | 2,560 | +66.3 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 18,469 | 2,641 | +526.4 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 18,294 | 1,744 | +41.0 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 18,261 | 1,689 | +164.0 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 18,255 | 570 | +11.7 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,027 | 2,279 | +6.1 |
| [jundot/omlx](https://github.com/jundot/omlx) | 17,916 | 1,525 | +38.9 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 17,755 | 1,120 | +446.5 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 17,524 | 2,962 | +81.5 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,395 | 1,526 | +2.5 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 16,781 | 2,278 | +27.5 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,238 | 1,704 | +5.3 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 16,205 | 2,164 | +52.6 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 16,063 | 1,511 | +30.7 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 15,603 | 2,849 | +10.0 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 14,724 | 2,177 | +16.8 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,706 | 3,303 | +21.2 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,492 | 1,475 | +10.2 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,037 | 1,043 | +5.3 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 13,537 | 1,220 | +40.2 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 13,302 | 1,849 | +210.4 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 12,477 | 1,089 | +16.7 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 12,188 | 1,230 | +61.3 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 11,826 | 516 | +28.7 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 11,220 | 859 | +79.2 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 10,936 | 1,814 | +3.4 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 10,719 | 5,663 | +5.6 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 10,668 | 721 | +56.8 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 10,477 | 1,137 | +49.3 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 10,368 | 2,165 | +18.8 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 10,257 | 935 | +12.1 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,099 | 7,786 | +12.3 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 9,729 | 2,048 | +37.2 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 9,597 | 1,273 | +34.7 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,544 | 728 | +6.5 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 9,339 | 737 | +26.8 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 9,258 | 1,145 | +33.2 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 9,079 | 841 | +72.2 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,904 | 818 | +4.1 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 8,725 | 684 | +21.2 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,623 | 864 | +1.1 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 8,417 | 957 | +22.4 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,341 | 642 | +1.3 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,040 | 192 | +1.8 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,546 | 1,126 | +1.0 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 7,194 | 203 | +97.8 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 6,731 | 567 | +29.2 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,430 | 438 | +4.0 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,159 | 233 | +8.8 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,078 | 425 | +1.6 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,015 | 583 | +3.2 |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 75 | 4 | — |
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
