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

> Auto-updated daily — last refreshed 2026-10-28

| Metric | Value |
|---|---|
| Repos tracked | **210** |
| Total stars | **10,991,260** |
| Total forks | **1,614,690** |
| Fastest growing | **rea** (+16598.9/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 399,811 | +16598.9 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 48,020 | +2385.8 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 92,199 | +1411.4 |
| 4 | [yetone/magpie](https://github.com/yetone/magpie) | 24,328 | +1078.0 |
| 5 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 178,610 | +1020.2 |

### 🆕 Recently added

- [yetone/magpie](https://github.com/yetone/magpie) — added 2026-10-26 — Every agent's model. One place. Codex on DeepSeek, Claude Code on Kimi, from the menu bar.
- [xerj-org/xerj](https://github.com/xerj-org/xerj) — added 2026-10-26 — Local-first search engine and MCP server for AI agents. One Rust binary indexes code, docs, logs, JSONL/CSV and PDFs for BM25 full-text, vector and hybrid search, code search without grep, agent memory and RAG. Elasticsearch-compatible API; Corpus Hub serves hundreds of reference memory corpora.
- [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) — added 2026-10-26 — Fine-tune LLMs from one YAML. Layer streaming trains an 8B model on a 4 GB laptop GPU.
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
| [morluto/rea](https://github.com/morluto/rea) | 399,811 | 100,297 | +16598.9 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 393,246 | 82,665 | +129.6 |
| [obra/superpowers](https://github.com/obra/superpowers) | 306,897 | 27,316 | +557.2 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 291,304 | 43,126 | +656.3 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 257,915 | 56,570 | +654.0 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 192,646 | 14,402 | +414.5 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,797 | 45,900 | +20.9 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 178,610 | 9,781 | +1020.2 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 174,904 | 22,325 | +75.8 |
| [langgenius/dify](https://github.com/langgenius/dify) | 159,800 | 25,246 | +110.6 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 157,023 | 22,857 | +119.8 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 149,634 | 9,829 | +463.7 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 148,608 | 24,953 | +71.3 |
| [github/spec-kit](https://github.com/github/spec-kit) | 143,471 | 12,847 | +271.5 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 141,823 | 15,020 | +380.5 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 137,330 | 13,101 | +436.9 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 122,318 | 65,067 | +68.8 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 115,657 | 6,675 | +332.2 |
| [stablyai/orca](https://github.com/stablyai/orca) | 108,556 | 6,857 | +841.9 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 108,154 | 17,919 | +416.4 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 105,261 | 9,327 | +575.9 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 104,521 | 11,932 | +370.2 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 103,982 | 7,027 | +493.8 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 103,864 | 9,165 | +169.5 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 100,510 | 13,120 | +221.9 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 95,756 | 24,090 | +94.5 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 92,199 | 10,201 | +1411.4 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 92,076 | 12,239 | +111.3 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 90,766 | 6,160 | +562.3 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 89,702 | 13,797 | +216.8 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,907 | 58,695 | +5.3 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 85,090 | 10,571 | +211.2 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 84,838 | 5,392 | +216.3 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 83,551 | 16,004 | +39.0 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 82,029 | 12,087 | +613.0 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 79,869 | 9,368 | +259.9 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,611 | 8,732 | +30.1 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 79,410 | 12,714 | +112.5 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 78,667 | 7,305 | +86.9 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 78,146 | 9,382 | +108.9 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 78,090 | 6,076 | +369.8 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 78,087 | 14,434 | +201.5 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,843 | 13,007 | +19.8 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 74,892 | 13,150 | +325.7 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 74,334 | 6,750 | +343.5 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 73,229 | 5,010 | +149.9 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 72,590 | 9,473 | +369.7 |
| [usestrix/strix](https://github.com/usestrix/strix) | 72,448 | 8,118 | +313.7 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,427 | 5,809 | +74.2 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 70,347 | 11,384 | +183.8 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,233 | 6,780 | +90.4 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 67,201 | 55,702 | +181.8 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 66,971 | 21,187 | +424.2 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,954 | 13,467 | +4.4 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 65,747 | 5,718 | +232.9 |
| [tw93/Pake](https://github.com/tw93/Pake) | 62,339 | 12,843 | +83.2 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 62,226 | 12,778 | +91.0 |
| [blader/humanizer](https://github.com/blader/humanizer) | 61,726 | 4,885 | +307.1 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 59,767 | 7,585 | +45.2 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 58,839 | 7,395 | +200.1 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 57,004 | 8,412 | +171.6 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 56,738 | 8,678 | +141.0 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 56,717 | 4,883 | +77.4 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 56,352 | 6,472 | +484.0 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,530 | 25,077 | +16.1 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 55,039 | 4,852 | +226.7 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,726 | 6,246 | +30.1 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 54,337 | 5,896 | +88.7 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 54,273 | 4,146 | +156.8 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,557 | 10,531 | +93.8 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 50,868 | 12,325 | +99.4 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 50,287 | 3,552 | +110.1 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,789 | 5,108 | +29.6 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,546 | 8,688 | +42.1 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 48,760 | 3,567 | +340.1 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 48,645 | 7,061 | +63.9 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 48,020 | 1,326 | +2385.8 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 47,695 | 3,922 | +223.7 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,647 | 10,411 | +19.0 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,413 | 9,530 | +57.3 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 46,275 | 3,698 | +297.2 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 45,028 | 4,698 | +107.5 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 44,980 | 2,752 | +43.7 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 44,371 | 3,250 | +72.4 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,039 | 7,568 | +67.3 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,382 | 4,193 | +56.7 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,165 | 4,295 | +13.3 |
| [wshobson/agents](https://github.com/wshobson/agents) | 41,906 | 4,441 | +38.3 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,134 | 3,563 | +41.4 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 41,021 | 3,326 | +110.5 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 40,489 | 5,226 | +42.8 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,339 | 3,599 | +35.4 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,830 | 6,233 | +4.0 |
| [google/langextract](https://github.com/google/langextract) | 39,067 | 2,733 | +16.1 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,438 | 2,480 | +76.8 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 37,990 | 3,406 | +25.5 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 37,661 | 5,525 | +153.1 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,267 | 6,888 | +19.6 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 36,974 | 5,966 | +183.8 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 36,910 | 4,131 | +179.0 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 36,890 | 4,190 | +91.0 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 36,708 | 3,230 | +140.2 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 36,394 | 1,723 | +357.2 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 36,376 | 3,857 | +177.6 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,984 | 2,491 | +115.9 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 35,742 | 4,843 | +144.1 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,158 | 4,284 | +133.1 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,182 | 9,131 | +40.6 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,848 | 3,518 | +43.6 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,055 | 4,984 | +9.3 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 32,683 | 2,219 | +213.0 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 32,625 | 2,253 | +112.3 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,450 | 2,957 | +103.2 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 31,957 | 1,961 | +35.2 |
| [decolua/9router](https://github.com/decolua/9router) | 31,565 | 6,125 | +103.7 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,718 | 3,015 | +48.7 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 30,672 | 4,313 | +45.9 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,046 | 2,916 | +199.3 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 29,967 | 2,646 | +57.3 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,591 | 2,639 | +81.7 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 28,971 | 1,331 | +30.1 |
| [voideditor/void](https://github.com/voideditor/void) | 28,734 | 2,659 | — |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,571 | 2,598 | +39.4 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,484 | 3,045 | +11.9 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 27,999 | 2,534 | +173.8 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,494 | 4,061 | +7.3 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 26,147 | 2,994 | +301.6 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,570 | 1,126 | +7.6 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 25,425 | 3,467 | +153.8 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 25,190 | 2,873 | +117.5 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,163 | 3,130 | +49.5 |
| [yetone/magpie](https://github.com/yetone/magpie) | 24,328 | 1,972 | +1078.0 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,122 | 2,070 | +48.1 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 22,985 | 3,122 | +138.6 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 22,884 | 1,979 | +130.5 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 22,865 | 2,161 | +59.9 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,819 | 805 | +39.6 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,426 | 1,707 | +3.0 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 21,886 | 2,444 | +105.3 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,783 | 2,885 | +8.1 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,769 | 3,132 | +5.8 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 21,712 | 2,286 | +42.5 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,652 | 3,483 | +48.8 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,274 | 2,465 | +121.2 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,227 | 1,954 | +24.3 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,775 | 1,202 | +11.3 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,621 | 2,507 | +27.8 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,446 | 1,740 | +50.3 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,231 | 2,781 | +34.3 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,834 | 1,696 | +11.3 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,670 | 1,849 | +26.4 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,231 | 2,289 | +3.0 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 18,215 | 1,498 | +45.0 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 17,753 | 7,510 | — |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 17,247 | 1,268 | +769.0 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,142 | 3,691 | +14.1 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,092 | 1,718 | +17.8 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,026 | 1,765 | +7.1 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,920 | 2,484 | +53.9 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 16,836 | 581 | +241.4 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,628 | 2,434 | +18.3 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,896 | 1,789 | +6.1 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 15,665 | 1,397 | +29.0 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,245 | 1,545 | +8.0 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,209 | 8,605 | +15.5 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,907 | 3,270 | +5.9 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,572 | 1,092 | +5.3 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,736 | 1,453 | +22.4 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,677 | 955 | +32.7 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,433 | 597 | +17.8 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 13,358 | 1,576 | +36.6 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,219 | 2,689 | +34.5 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,148 | 2,661 | +25.9 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,147 | 1,096 | +17.5 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,597 | 893 | +27.4 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,588 | 1,438 | +23.9 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,436 | 719 | +42.6 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,238 | 1,461 | +150.1 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,236 | 892 | +34.3 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 11,167 | 1,535 | +102.1 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,129 | 5,644 | +4.3 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,033 | 1,803 | +1.3 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 10,833 | 963 | +73.7 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,693 | 948 | +38.4 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,329 | 7,679 | +3.8 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,280 | 828 | +11.1 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,033 | 1,108 | +7.4 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 9,739 | 1,599 | +29.5 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,719 | 729 | +3.6 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 9,718 | 695 | +68.6 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,703 | 325 | +28.0 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 9,508 | 2,059 | +16.7 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,444 | 683 | +42.1 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,940 | 909 | +2.9 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,704 | 844 | — |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,427 | 649 | +0.9 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,120 | 195 | +0.8 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,073 | 700 | +23.0 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,053 | 1,038 | +25.9 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,602 | 1,141 | +0.6 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,106 | 563 | +14.5 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,088 | 585 | +8.8 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,799 | 374 | +9.3 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 6,764 | 589 | +35.0 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,756 | 453 | +3.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,531 | 248 | +3.9 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,229 | 604 | +2.1 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,078 | 420 | +0.1 |
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
