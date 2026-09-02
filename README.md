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

> Auto-updated daily — last refreshed 2026-09-02

| Metric | Value |
|---|---|
| Repos tracked | **187** |
| Total stars | **9,153,908** |
| Total forks | **1,354,247** |
| Fastest growing | **ponytail** (+1006.8/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 120,509 | +1006.8 |
| 2 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 60,053 | +825.9 |
| 3 | [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 44,235 | +824.6 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 239,707 | +818.4 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 59,583 | +810.3 |

### 🆕 Recently added

- [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) — added 2026-08-31 — A trilingual (繁中 / English / 简中) learning roadmap for agentic AI: from LLM basics to multi-agent systems, with 240+ curated resources and hands-on examples. 中文 AI agent 學習地圖。
- [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) — added 2026-08-24 — Turn any technical book PDF into a Claude Code skill — ready to study, reference, and use while you work.
- [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) — added 2026-08-24 — Strip multi-vendor AI provenance marks: Unicode text hygiene, statistical rewrite hooks, and C2PA/metadata from PNG/JPEG/SVG/PDF/DOCX/HTML/MD
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 388,584 | 81,594 | +152.8 |
| [obra/superpowers](https://github.com/obra/superpowers) | 280,629 | 25,141 | +625.7 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 245,950 | 37,106 | +579.5 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 245,950 | 37,106 | +537.2 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 239,707 | 49,001 | +818.4 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,075 | 46,043 | +24.9 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 177,675 | 13,069 | +488.1 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 168,521 | 21,718 | +56.7 |
| [langgenius/dify](https://github.com/langgenius/dify) | 154,200 | 24,369 | +115.8 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 150,676 | 22,009 | +123.1 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 145,490 | 24,277 | +79.1 |
| [github/spec-kit](https://github.com/github/spec-kit) | 132,984 | 11,959 | +313.6 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 130,665 | 8,978 | +529.2 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 124,038 | 13,273 | +412.0 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 120,509 | 6,518 | +1006.8 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 118,990 | 62,700 | +73.6 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 113,725 | 11,072 | +460.2 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 102,347 | 5,957 | +381.6 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 93,483 | 10,775 | +460.8 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 92,970 | 8,177 | +157.1 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 92,325 | 12,256 | +264.3 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 90,753 | 21,579 | +97.0 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,687 | 59,159 | +6.1 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 85,932 | 11,268 | +112.1 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 85,361 | 12,862 | +289.7 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 83,493 | 5,713 | +570.8 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 82,159 | 15,843 | +46.1 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 78,274 | 4,934 | +268.2 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 77,964 | 8,561 | +30.5 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 77,483 | 6,637 | +628.0 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 76,361 | 9,488 | +240.2 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 75,882 | 12,227 | +138.4 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 75,702 | 12,793 | +19.6 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 75,464 | 6,849 | +102.5 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 74,262 | 8,515 | +129.7 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 69,833 | 13,203 | +229.8 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 68,604 | 5,632 | +96.0 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 68,392 | 5,298 | +509.2 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 68,392 | 5,298 | +312.3 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 67,002 | 4,618 | +170.2 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,622 | 13,511 | +3.6 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 65,533 | 6,524 | +112.5 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 64,489 | 54,057 | +256.5 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 64,005 | 10,502 | +220.7 |
| [tw93/Pake](https://github.com/tw93/Pake) | 61,218 | 12,588 | +116.3 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 60,942 | 5,325 | +328.7 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 60,053 | 8,347 | +825.9 |
| [usestrix/strix](https://github.com/usestrix/strix) | 60,032 | 6,567 | +369.1 |
| [stablyai/orca](https://github.com/stablyai/orca) | 59,583 | 4,019 | +810.3 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 58,792 | 7,545 | +59.7 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 57,807 | 11,097 | +97.4 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 55,486 | 6,935 | +425.2 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,400 | 24,977 | +23.4 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 53,372 | 6,117 | +33.1 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 53,367 | 4,647 | +86.7 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 52,104 | 6,486 | +248.2 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 51,944 | 8,997 | +275.1 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 50,484 | 3,551 | +99.1 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 49,873 | 7,618 | +151.3 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 48,665 | 4,915 | +34.6 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 48,183 | 9,883 | +117.6 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 47,713 | 3,421 | +148.7 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 47,643 | 8,409 | +46.4 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 47,071 | 11,225 | +117.1 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,759 | 10,332 | +20.6 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 46,549 | 7,260 | +162.5 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 45,854 | 6,701 | +71.8 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 45,854 | 6,701 | +55.1 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 45,282 | 3,567 | +151.0 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 44,235 | 4,874 | +824.6 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 43,652 | 4,194 | +210.4 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 42,713 | 8,841 | +52.4 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 41,809 | 3,401 | +325.8 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 41,655 | 2,712 | +35.0 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41,635 | 4,222 | +15.3 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 40,908 | 6,901 | +76.2 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 40,888 | 3,538 | +62.2 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 40,027 | 13,570 | +361.6 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 39,922 | 2,861 | +68.1 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,679 | 6,241 | +5.5 |
| [wshobson/agents](https://github.com/wshobson/agents) | 39,345 | 4,194 | +34.1 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 38,945 | 3,493 | +41.2 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 38,538 | 4,870 | +47.3 |
| [google/langextract](https://github.com/google/langextract) | 38,520 | 2,705 | +19.6 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 36,689 | 6,846 | +24.8 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 36,611 | 3,282 | +26.0 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 35,808 | 3,996 | +73.1 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,336 | 2,362 | +183.8 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 35,063 | 2,683 | +113.2 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 34,783 | 3,054 | +215.3 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 34,722 | 2,179 | +83.0 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 34,571 | 2,533 | +382.3 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 34,571 | 2,533 | +359.4 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 33,615 | 4,912 | +210.4 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,711 | 4,927 | +11.1 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 32,503 | 3,343 | +55.4 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 32,289 | 5,278 | +270.0 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 31,970 | 3,858 | +192.3 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 31,679 | 8,978 | +38.1 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 31,098 | 2,835 | +159.3 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 30,698 | 1,800 | +42.8 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 30,082 | 3,308 | +71.0 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 29,709 | 2,023 | +367.4 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 28,996 | 2,904 | +208.3 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 28,946 | 2,595 | +131.5 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 28,879 | 2,830 | +59.1 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 28,835 | 4,049 | +54.4 |
| [voideditor/void](https://github.com/voideditor/void) | 28,815 | 2,646 | +0.1 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,989 | 2,998 | +13.8 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 27,926 | 2,414 | +70.9 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 27,884 | 2,879 | +339.4 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 27,781 | 1,286 | +35.9 |
| [decolua/9router](https://github.com/decolua/9router) | 26,896 | 4,915 | +118.0 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 26,684 | 2,298 | +45.6 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,141 | 4,023 | +7.9 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 25,658 | 2,400 | +332.2 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,308 | 1,123 | +9.4 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,394 | 1,726 | +4.5 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,021 | 767 | +61.4 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 21,829 | 2,808 | +25.2 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 21,807 | 1,623 | +203.8 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,532 | 3,117 | +6.8 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,384 | 2,842 | +8.7 |
| [jundot/omlx](https://github.com/jundot/omlx) | 21,292 | 1,807 | +59.0 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 21,176 | 3,053 | +61.8 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 20,827 | 1,821 | +78.1 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 20,354 | 2,183 | +65.8 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 20,309 | 1,473 | +36.0 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 20,206 | 3,273 | +66.7 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 19,957 | 2,305 | +267.2 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,566 | 1,196 | +16.7 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 19,229 | 1,839 | +29.0 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 18,983 | 2,176 | +209.4 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 18,834 | 2,444 | +38.4 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,159 | 2,289 | +4.2 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 17,987 | 2,500 | +43.7 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,953 | 1,576 | +8.1 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 17,764 | 1,740 | +160.2 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 17,321 | 1,679 | +28.3 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 16,909 | 1,481 | +62.5 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,809 | 1,758 | +9.5 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 16,314 | 3,283 | +13.5 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 16,175 | 1,584 | +20.3 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,115 | 2,419 | +92.0 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 15,614 | 1,361 | +43.7 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 15,608 | 2,292 | +18.3 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,540 | 1,778 | +5.6 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,882 | 1,515 | +9.1 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,863 | 3,288 | +9.8 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 14,671 | 1,461 | +82.5 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,371 | 1,064 | +6.5 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,262 | 8,540 | +12.9 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 13,636 | 1,242 | +22.7 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 12,929 | 1,334 | +29.3 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 12,715 | 557 | +22.1 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 12,640 | 911 | +45.0 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 12,517 | 1,255 | +188.9 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 12,052 | 1,472 | +49.5 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 11,499 | 2,390 | +22.9 |
| [brokermr810/QuantDinger](https://github.com/brokermr810/QuantDinger) | 11,293 | 2,357 | +34.7 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 11,293 | 2,357 | +33.9 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 11,150 | 1,018 | +17.3 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,117 | 719 | +171.6 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,006 | 5,670 | +6.1 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,005 | 1,804 | +2.0 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 10,788 | 1,304 | +33.2 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 10,644 | 801 | +37.5 |
| [openai/codex-security](https://github.com/openai/codex-security) | 10,336 | 750 | +68.5 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,288 | 7,754 | +6.5 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,013 | 809 | +17.2 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 9,845 | 845 | +63.9 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,615 | 721 | +4.5 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 9,043 | 841 | +3.2 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,006 | 284 | +45.1 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,888 | 868 | +4.8 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,363 | 643 | +0.6 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,088 | 194 | +1.1 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,602 | 1,144 | +1.2 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 7,352 | 523 | +53.7 |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | 6,861 | 547 | +14.8 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 6,598 | 890 | +23.5 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,589 | 444 | +3.5 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,553 | 358 | +15.6 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,341 | 244 | +4.4 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,169 | 604 | +3.3 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,081 | 421 | +0.2 |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 87 | 5 | — |
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
