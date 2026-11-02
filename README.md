# 🚀 Rising Repos Tracker

> Automatically tracks daily GitHub stats (stars, forks, issues, velocity) for rising open source repos.

**GitHub shows a repo's star count, not how fast it is growing — this keeps a daily history so you can see which repos are actually taking off.** Runs entirely on GitHub Actions + Pages: no server, no database.

**Quick start:** 1. Fork this repo · 2. Delete my `data/` and `reports/`, put the repos you care about in [`repos.json`](./repos.json) · 3. Enable GitHub Pages and run **Collect Repo Stats** once. Details in [Fork & use it for yourself](#fork--use-it-for-yourself).

⭐ If the dashboard is useful to you, a star helps others find it.

[![Maintained by Telosignal](https://img.shields.io/badge/Maintained%20by-Telosignal-green)](https://www.telosignal.com/)
![Last updated](https://img.shields.io/github/last-commit/patrick-creates/rising-repos-tracker?label=last+updated&color=238636)
![Repos tracked](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/patrick-creates/rising-repos-tracker/main/repos.json&query=%24.length&label=repos+tracked&color=1f6feb)
![Collect](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/collect.yml?label=collect&logo=github-actions&logoColor=white)
![Discover](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/discover.yml?label=discover&logo=github-actions&logoColor=white)
![Summarize](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/summarize.yml?label=summarize&logo=github-actions&logoColor=white)
![Screenshot](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/screenshot.yml?label=screenshot&logo=github-actions&logoColor=white)
![License](https://img.shields.io/github/license/patrick-creates/rising-repos-tracker)

**[→ View Live Dashboard](https://patrick-creates.github.io/rising-repos-tracker/)** · **[→ Weekly reports](./reports/README.md)**

Built and maintained by [Telosignal](https://www.telosignal.com/).

![Dashboard preview](./preview.png)

<!-- AUTOGEN-STATS-START -->
## 📊 Current snapshot

> Auto-updated daily — last refreshed 2026-11-02

| Metric | Value |
|---|---|
| Repos tracked | **213** |
| Total stars | **11,275,329** |
| Total forks | **1,645,932** |
| Fastest growing | **rea** (+13663.2/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 421,157 | +13663.2 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 56,824 | +2162.6 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 98,581 | +1399.3 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 182,559 | +1011.6 |
| 5 | [yetone/magpie](https://github.com/yetone/magpie) | 28,265 | +870.4 |

### 🆕 Recently added

- [pbakaus/impeccable](https://github.com/pbakaus/impeccable) — added 2026-11-02 — The design vocabulary for your coding agent. Steer with polish and bolder, review with critique and audit, catch AI slop before it ships.
- [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) — added 2026-11-02 — The open-source agent for CI/CD reliability.
- [makecindy/cindy](https://github.com/makecindy/cindy) — added 2026-11-02 — Consider it done. The open-source AI agent that works out of the box · 想到，就能做到。开源、开箱即用的 AI Agent。
<!-- AUTOGEN-STATS-END -->

<!-- AUTOGEN-DIAGRAM-START -->
## 🔄 How it works

```mermaid
graph LR
    repos[("repos.json")]:::data
    history[("data/[owner]/[repo]/<br/>history.json")]:::data
    summary[("data/[owner]/[repo]/<br/>summary.json")]:::data
    readme[("README.md")]:::data
    reports[("reports/<br/>YYYY-Www.md")]:::data
    preview[("preview.png")]:::data
    dashboard["index.html<br/>(GitHub Pages)"]:::output
    collect_yml["Collect Repo Stats<br/><i>Daily 05:17 UTC</i>"]:::workflow
    discover_yml["Discover Trending Repos<br/><i>Monday 04:43 UTC</i>"]:::workflow
    screenshot_yml["Screenshot Dashboard<br/><i>after collect repo stats</i>"]:::workflow
    summarize_yml["Summarize Repos<br/><i>after discover trending repos</i>"]:::workflow
    repos --> collect_yml
    collect_yml --> history
    collect_yml --> readme
    collect_yml -->|Mondays| reports
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
| [morluto/rea](https://github.com/morluto/rea) | 421,157 | 105,113 | +13663.2 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 393,706 | 82,744 | +128.5 |
| [obra/superpowers](https://github.com/obra/superpowers) | 310,977 | 27,676 | +566.9 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 295,207 | 43,700 | +659.9 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 259,680 | 57,166 | +645.3 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 193,510 | 14,512 | +407.5 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,869 | 45,903 | +20.7 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 182,559 | 10,077 | +1011.6 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 175,598 | 22,407 | +77.6 |
| [langgenius/dify](https://github.com/langgenius/dify) | 160,232 | 25,329 | +109.9 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 157,537 | 22,911 | +119.3 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 151,165 | 9,936 | +459.1 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 148,880 | 25,029 | +70.8 |
| [github/spec-kit](https://github.com/github/spec-kit) | 145,225 | 13,022 | +273.8 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 144,097 | 15,252 | +382.7 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 140,888 | 13,462 | +450.9 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 122,831 | 65,714 | +69.8 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 116,852 | 6,784 | +329.4 |
| [stablyai/orca](https://github.com/stablyai/orca) | 113,203 | 7,160 | +845.5 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 110,280 | 9,619 | +201.7 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 110,135 | 18,248 | +409.2 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 108,347 | 7,303 | +506.1 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 107,883 | 9,626 | +574.2 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 105,467 | 12,028 | +364.8 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 102,067 | 13,261 | +224.7 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 100,044 | 5,920 | +284.9 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 98,581 | 10,937 | +1399.3 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 96,129 | 24,308 | +93.9 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 92,607 | 6,324 | +527.6 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 92,493 | 12,325 | +110.5 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 90,000 | 13,901 | +212.1 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,937 | 58,641 | +5.4 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 85,761 | 10,675 | +208.9 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 85,296 | 5,458 | +212.6 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 83,816 | 12,535 | +602.2 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 83,705 | 16,032 | +38.8 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 80,598 | 9,459 | +239.5 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 79,753 | 12,757 | +111.2 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,752 | 8,759 | +30.1 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 79,447 | 14,654 | +203.6 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 78,952 | 7,352 | +86.0 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 78,628 | 6,138 | +360.5 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 78,566 | 9,496 | +108.2 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 77,460 | 7,100 | +353.1 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,915 | 13,034 | +19.7 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 76,342 | 13,515 | +324.5 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 74,852 | 9,857 | +373.0 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 73,686 | 5,044 | +148.2 |
| [usestrix/strix](https://github.com/usestrix/strix) | 73,324 | 8,259 | +309.2 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 70,636 | 11,446 | +180.1 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,611 | 5,828 | +73.1 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 68,937 | 22,018 | +422.8 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,457 | 6,815 | +89.0 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 67,443 | 55,848 | +177.7 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,992 | 13,470 | +4.5 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 66,322 | 5,797 | +228.9 |
| [blader/humanizer](https://github.com/blader/humanizer) | 63,831 | 5,047 | +323.4 |
| [tw93/Pake](https://github.com/tw93/Pake) | 62,751 | 12,917 | +83.2 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 62,550 | 12,921 | +90.3 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,239 | 7,637 | +46.7 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 59,253 | 7,425 | +196.3 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 57,972 | 8,527 | +172.3 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 57,271 | 8,768 | +139.9 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 57,091 | 4,904 | +77.4 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 56,944 | 6,568 | +466.6 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 56,824 | 1,549 | +2162.6 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 55,791 | 4,909 | +219.9 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,543 | 25,089 | +15.7 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 54,990 | 4,191 | +156.1 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,863 | 6,266 | +30.0 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 54,651 | 5,248 | +87.9 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,700 | 10,555 | +91.5 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 51,204 | 12,423 | +98.4 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 50,613 | 3,578 | +108.6 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,900 | 5,126 | +29.4 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,760 | 8,710 | +42.1 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 49,284 | 3,614 | +330.2 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 49,026 | 7,117 | +64.3 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 47,991 | 3,951 | +217.2 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,752 | 10,412 | +19.0 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 47,487 | 3,801 | +294.9 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,638 | 9,590 | +57.0 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 45,780 | 4,768 | +108.9 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 45,622 | 3,345 | +78.1 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 45,272 | 2,759 | +44.2 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,334 | 7,624 | +67.0 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 42,979 | 1,779 | +414.4 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,496 | 4,209 | +53.7 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,232 | 4,302 | +13.3 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,097 | 4,453 | +38.3 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 41,369 | 3,360 | +109.1 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,169 | 3,570 | +40.4 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 40,708 | 5,268 | +42.9 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,512 | 3,624 | +35.3 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,835 | 6,234 | +3.9 |
| [google/langextract](https://github.com/google/langextract) | 39,243 | 2,752 | +16.7 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,563 | 2,491 | +75.1 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 38,431 | 5,699 | +153.1 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,119 | 3,421 | +25.5 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 37,821 | 4,307 | +94.2 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 37,516 | 4,218 | +176.8 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 37,440 | 6,051 | +180.2 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,317 | 6,886 | +19.3 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 37,201 | 3,252 | +138.7 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 36,751 | 3,891 | +170.3 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 36,254 | 4,936 | +142.6 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 36,040 | 2,500 | +112.3 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,432 | 4,319 | +130.2 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,250 | 9,133 | +39.7 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,990 | 3,546 | +43.1 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 33,226 | 2,293 | +112.6 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,098 | 4,995 | +9.2 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 32,942 | 2,240 | +206.3 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,560 | 2,963 | +100.3 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,061 | 1,978 | +34.7 |
| [decolua/9router](https://github.com/decolua/9router) | 31,841 | 6,204 | +101.9 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 30,901 | 4,344 | +45.9 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,833 | 3,027 | +47.8 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,350 | 2,945 | +193.1 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,085 | 2,657 | +56.2 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,618 | 2,643 | +79.0 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,080 | 1,330 | +29.9 |
| [voideditor/void](https://github.com/voideditor/void) | 28,721 | 2,656 | — |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,648 | 2,612 | +38.3 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 28,611 | 2,611 | +171.2 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,561 | 3,050 | +12.0 |
| [yetone/magpie](https://github.com/yetone/magpie) | 28,265 | 2,392 | +870.4 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 27,484 | 3,172 | +296.7 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,525 | 4,064 | +7.2 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 26,054 | 3,568 | +151.0 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 25,962 | 2,961 | +120.1 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 25,832 | 3,380 | +182.6 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,597 | 1,126 | +7.5 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,277 | 3,141 | +47.9 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 23,944 | 2,065 | +138.9 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,287 | 2,087 | +47.5 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 22,949 | 2,185 | +58.2 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 22,930 | 2,608 | +109.6 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,905 | 808 | +38.7 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,430 | 1,705 | +2.9 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 21,827 | 2,301 | +41.6 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,809 | 2,886 | +8.0 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,795 | 3,502 | +48.0 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,793 | 3,137 | +5.7 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,414 | 2,499 | +117.0 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,289 | 1,961 | +23.9 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,789 | 1,203 | +11.0 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,681 | 2,514 | +27.2 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 19,640 | 8,516 | +62.4 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,639 | 1,760 | +49.6 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,353 | 2,805 | +33.9 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,872 | 1,701 | +11.2 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,817 | 1,858 | +26.5 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 18,764 | 1,429 | +436.4 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 18,485 | 1,512 | +45.3 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,242 | 2,289 | +3.0 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,291 | 3,782 | +14.6 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,173 | 1,735 | +17.7 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 17,099 | 590 | +222.1 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,046 | 1,768 | +7.0 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,981 | 2,492 | +52.1 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,743 | 2,459 | +18.5 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,935 | 1,792 | +6.1 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 15,839 | 1,412 | +29.2 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,271 | 8,604 | +15.3 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,264 | 1,547 | +7.8 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,919 | 3,267 | +5.7 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,593 | 1,096 | +5.2 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,774 | 961 | +32.2 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,743 | 1,463 | +21.6 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 13,495 | 1,587 | +36.3 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,494 | 604 | +17.6 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,431 | 2,730 | +34.9 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,297 | 2,681 | +26.1 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 12,658 | 1,856 | +43.2 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,228 | 1,102 | +17.5 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,658 | 901 | +26.8 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,647 | 1,446 | +23.4 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 11,543 | 1,591 | +98.9 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,486 | 3,040 | +70.8 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,480 | 1,528 | +125.9 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,453 | 719 | +40.0 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,287 | 901 | +33.0 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,133 | 5,641 | +4.1 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,041 | 1,805 | +1.3 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,023 | 981 | +70.1 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,827 | 979 | +37.9 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,334 | 7,670 | +3.7 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,298 | 826 | +10.8 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,061 | 1,108 | +7.1 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 9,953 | 1,646 | +39.0 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 9,918 | 707 | +64.5 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,739 | 325 | +27.1 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,721 | 729 | +3.5 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,614 | 705 | +41.6 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 8,988 | 1,080 | +88.1 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,956 | 910 | +2.9 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,716 | 847 | — |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,432 | 648 | +0.9 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,409 | 1,054 | +29.5 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,204 | 716 | +23.3 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,121 | 195 | +0.8 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,597 | 1,140 | +0.5 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,122 | 565 | +13.1 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,106 | 588 | +8.5 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,023 | 607 | +47.0 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,812 | 376 | +9.0 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,777 | 454 | +3.3 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,547 | 251 | +3.9 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,244 | 604 | +2.2 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,074 | 419 | +0.0 |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 88 | 4 | — |
<!-- AUTOGEN-REPOS-END -->

---

## What it does

- Collects daily snapshots of stars, forks, watchers and open issues for every tracked repo
- Discovers new trending repos automatically every Monday using the GitHub Search API
- Generates AI summaries (use cases, similar tools, tags) for each tracked repo via GitHub Models
- Writes a weekly report every Monday to [`reports/`](./reports/README.md): top 10 by stars gained, top 10 by growth rate, newly tracked repos; unusual jumps (over 50% in a week or 25% in a day) are marked ⚠️
- Stores all history as plain JSON — no database, no backend
- Renders a live dashboard via GitHub Pages — updates daily, zero maintenance

Star counts come from the GitHub API as they are. A viral launch, bulk starring or a repo rename can all show up as a jump; check the repo before quoting a number.

## Tracked repos

Data lives in [`data/`](./data) — one folder per repo, one `history.json` per entry.  
The full watch list is in [`repos.json`](./repos.json).

## Fork & use it for yourself

This is my personal tracker — the watch list reflects what I find interesting. If you want to track different repos, the best path is to **fork this repo and run your own**.

### Setup

1. Fork this repo to your account
2. Clear my data and set your own watch list. The fork brings my full history (one folder per repo in `data/`, plus `reports/`), which would mix into your charts:
   ```bash
   git rm -r -q data reports
   ```
   Then replace the contents of [`repos.json`](./repos.json) with the repos you want to track (or leave one entry — `discover.yml` auto-adds more every Monday) and commit.
3. Go to **Settings → Pages** and enable GitHub Pages from the `main` branch
4. Go to **Actions**, enable workflows (GitHub disables them on forks by default) and run **Collect Repo Stats** once manually to seed your first data point
5. Your dashboard will be live at `https://YOUR-USERNAME.github.io/rising-repos-tracker/`

That's it — daily collection, weekly discovery and the Monday report run automatically on schedule. Zero ongoing maintenance.

### AI summaries (optional)

After each discovery run, `summarize.yml` writes a short summary per repo with [GitHub Models](https://docs.github.com/en/github-models) (`gpt-4o-mini`), using the workflow's own `GITHUB_TOKEN` — no API key needed. GitHub Models has a free tier with rate limits; if a call fails, the job logs the error for that repo and moves on, and the dashboard shows "No AI summary available" for it. Everything else keeps working.

To switch it off, add a repository variable `SUMMARIES` with the value `off` under **Settings → Secrets and variables → Actions → Variables**.

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
  "notes": "why you're tracking this",
  "created_at": "YYYY-MM-DD"
}
```

`created_at` (the repo's creation date) is optional; without it the repo only shows under "all ages" in the dashboard's age filter. The next daily collect run picks it up automatically.

## Stack

- **GitHub Actions** — scheduling and automation
- **GitHub Pages** — dashboard hosting
- **GitHub API** — data source
- **GitHub Models** — free AI summaries (gpt-4o-mini)
- **Chart.js** — star growth visualization
- **Mermaid** — architecture diagram (rendered by GitHub)
- Collecting, reports and README use Node built-ins only; the screenshot workflow installs Puppeteer. No build step, no database

## License

MIT
