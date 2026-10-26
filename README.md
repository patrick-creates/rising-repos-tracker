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

> Auto-updated daily — last refreshed 2026-10-26

| Metric | Value |
|---|---|
| Repos tracked | **210** |
| Total stars | **10,916,532** |
| Total forks | **1,604,570** |
| Fastest growing | **rea** (+18121.9/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 387,935 | +18121.9 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 44,023 | +2496.4 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 87,833 | +1379.9 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 176,569 | +1020.2 |
| 5 | [stablyai/orca](https://github.com/stablyai/orca) | 106,457 | +838.2 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 393,111 | 82,644 | +130.4 |
| [morluto/rea](https://github.com/morluto/rea) | 387,935 | 97,174 | +18121.9 |
| [obra/superpowers](https://github.com/obra/superpowers) | 305,311 | 27,201 | +553.4 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 289,195 | 42,859 | +651.5 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 257,220 | 56,346 | +657.7 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 192,278 | 14,364 | +417.3 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,756 | 45,900 | +20.9 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 176,569 | 9,643 | +1020.2 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 174,609 | 22,305 | +74.9 |
| [langgenius/dify](https://github.com/langgenius/dify) | 159,582 | 25,219 | +110.6 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 156,794 | 22,834 | +119.9 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 148,842 | 9,788 | +464.6 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 148,485 | 24,923 | +71.4 |
| [github/spec-kit](https://github.com/github/spec-kit) | 142,953 | 12,808 | +271.6 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 140,631 | 14,903 | +377.9 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 135,688 | 12,939 | +428.5 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 122,195 | 64,911 | +68.9 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 115,158 | 6,642 | +333.2 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 107,472 | 17,845 | +438.0 |
| [stablyai/orca](https://github.com/stablyai/orca) | 106,457 | 6,722 | +838.2 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 104,052 | 11,896 | +371.9 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 103,251 | 9,115 | +167.9 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 102,839 | 9,126 | +566.9 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 102,721 | 6,941 | +491.9 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 99,663 | 13,031 | +219.3 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 95,582 | 23,980 | +94.6 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 91,882 | 12,204 | +111.5 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 89,560 | 13,762 | +218.6 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 89,511 | 6,058 | +556.1 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,896 | 58,715 | +5.3 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 87,833 | 9,685 | +1379.9 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 84,677 | 10,506 | +211.3 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 84,593 | 5,376 | +217.5 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 83,499 | 16,007 | +39.2 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 81,295 | 11,924 | +617.3 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,539 | 8,723 | +30.0 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 79,388 | 9,320 | +261.8 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 79,250 | 12,675 | +112.9 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 78,581 | 7,291 | +87.5 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 77,974 | 9,339 | +109.2 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 77,870 | 6,052 | +373.7 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 77,426 | 14,322 | +199.9 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,821 | 12,986 | +20.0 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 74,058 | 12,973 | +324.5 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 73,018 | 4,990 | +150.5 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 72,590 | 6,556 | +335.9 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 72,035 | 9,350 | +371.3 |
| [usestrix/strix](https://github.com/usestrix/strix) | 71,997 | 8,052 | +314.9 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,343 | 5,793 | +74.6 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 70,240 | 11,379 | +185.4 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,133 | 6,776 | +90.9 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 67,079 | 55,643 | +183.4 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,934 | 13,464 | +4.3 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 66,001 | 20,721 | +423.0 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 65,522 | 5,689 | +234.7 |
| [tw93/Pake](https://github.com/tw93/Pake) | 62,312 | 12,834 | +84.1 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 62,056 | 12,691 | +91.1 |
| [blader/humanizer](https://github.com/blader/humanizer) | 60,799 | 4,826 | +295.9 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 59,744 | 7,581 | +45.6 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 58,572 | 7,357 | +201.0 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 56,596 | 8,368 | +171.1 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 56,573 | 4,877 | +77.5 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 56,282 | 8,596 | +139.9 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 55,938 | 6,416 | +489.6 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,528 | 25,086 | +16.3 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 54,691 | 4,817 | +228.9 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,681 | 6,241 | +30.2 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 54,183 | 5,889 | +88.8 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 53,962 | 4,132 | +156.8 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,511 | 10,527 | +94.9 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 50,717 | 12,262 | +99.7 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 50,124 | 3,545 | +110.5 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,757 | 5,108 | +29.8 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,362 | 8,679 | +41.5 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 48,517 | 7,050 | +63.9 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 48,318 | 3,535 | +342.2 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,605 | 10,406 | +18.9 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 47,515 | 3,908 | +225.9 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,340 | 9,519 | +57.6 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 45,924 | 3,661 | +299.3 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 44,885 | 2,752 | +43.7 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 44,659 | 4,672 | +106.4 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 44,023 | 1,238 | +2496.4 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 43,924 | 7,547 | +67.5 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 43,660 | 3,201 | +68.5 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,346 | 4,189 | +58.3 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,144 | 4,290 | +13.3 |
| [wshobson/agents](https://github.com/wshobson/agents) | 41,740 | 4,427 | +37.7 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,120 | 3,565 | +41.9 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 40,863 | 3,308 | +111.0 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 40,424 | 5,222 | +43.0 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,279 | 3,598 | +35.4 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,823 | 6,240 | +4.0 |
| [google/langextract](https://github.com/google/langextract) | 39,045 | 2,730 | +16.2 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,390 | 2,475 | +77.5 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 37,883 | 3,393 | +25.1 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 37,402 | 5,486 | +153.5 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,251 | 6,890 | +19.7 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 36,716 | 5,933 | +184.7 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 36,660 | 4,090 | +179.9 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 36,524 | 4,145 | +89.7 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 36,309 | 3,214 | +139.3 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 36,141 | 3,824 | +179.6 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,968 | 2,482 | +117.4 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 35,497 | 4,788 | +144.4 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,041 | 4,272 | +134.3 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 34,674 | 1,711 | +344.2 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,159 | 9,131 | +41.0 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,779 | 3,504 | +43.7 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,041 | 4,988 | +9.3 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 32,489 | 2,208 | +215.1 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,391 | 2,957 | +104.3 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 32,352 | 2,234 | +111.9 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 31,896 | 1,956 | +35.2 |
| [decolua/9router](https://github.com/decolua/9router) | 31,432 | 6,081 | +104.2 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,658 | 3,004 | +49.0 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 30,602 | 4,308 | +46.0 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 29,965 | 2,911 | +202.4 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 29,898 | 2,639 | +57.7 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,567 | 2,641 | +82.8 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 28,888 | 1,331 | +30.0 |
| [voideditor/void](https://github.com/voideditor/void) | 28,734 | 2,655 | — |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,506 | 2,583 | +39.5 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,461 | 3,038 | +11.9 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 27,799 | 2,493 | +175.4 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,486 | 4,058 | +7.3 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 25,767 | 2,944 | +309.6 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,563 | 1,126 | +7.6 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,120 | 3,126 | +50.3 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 25,018 | 3,413 | +151.5 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 24,936 | 2,864 | +117.2 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,068 | 2,064 | +48.4 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 22,815 | 2,154 | +60.4 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,797 | 804 | +40.0 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,420 | 1,709 | +3.0 |
| [yetone/magpie](https://github.com/yetone/magpie) | 22,172 | 1,733 | +692.2 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,775 | 2,884 | +8.2 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,762 | 3,131 | +5.8 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 21,693 | 2,997 | +114.5 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 21,680 | 1,911 | +108.1 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 21,662 | 2,284 | +42.9 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 21,629 | 2,422 | +104.9 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,608 | 3,476 | +49.2 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,214 | 2,463 | +122.9 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,181 | 1,953 | +24.4 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,752 | 1,202 | +11.3 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,586 | 2,502 | +27.9 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,366 | 1,730 | +50.6 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,192 | 2,776 | +34.6 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,815 | 1,694 | +11.3 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,624 | 1,844 | +26.4 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,228 | 2,285 | +3.0 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 18,096 | 1,491 | +44.7 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 17,732 | 7,499 | — |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,141 | 3,696 | +14.3 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,062 | 1,713 | +17.8 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,018 | 1,767 | +7.2 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 16,987 | 569 | +256.5 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,891 | 2,479 | +54.6 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,577 | 2,427 | +18.2 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,878 | 1,789 | +6.0 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 15,709 | 1,158 | +133.1 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 15,566 | 1,379 | +28.6 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,224 | 1,544 | +7.9 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,171 | 8,608 | +15.4 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,908 | 3,272 | +6.0 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,563 | 1,092 | +5.3 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,725 | 1,447 | +22.7 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,631 | 947 | +32.9 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,412 | 598 | +17.9 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 13,292 | 1,572 | +36.7 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,133 | 2,666 | +34.4 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,099 | 2,657 | +26.0 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,104 | 1,090 | +17.5 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,580 | 892 | +27.8 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,563 | 1,432 | +24.1 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,431 | 720 | +43.7 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,207 | 886 | +34.8 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,123 | 5,645 | +4.3 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,109 | 1,424 | +162.3 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,031 | 1,801 | +1.3 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 10,897 | 1,488 | +100.2 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 10,762 | 956 | +75.5 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,353 | 918 | +35.9 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,329 | 7,681 | +3.9 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,269 | 828 | +11.2 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,028 | 1,106 | +7.7 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,716 | 730 | +3.6 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,690 | 323 | +28.4 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 9,680 | 1,580 | +39.2 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 9,602 | 692 | +69.4 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 9,483 | 2,047 | +17.0 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,421 | 682 | +42.9 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,929 | 909 | +2.8 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,701 | 841 | — |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,427 | 650 | +0.9 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,116 | 195 | +0.8 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,048 | 693 | +23.5 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,003 | 1,034 | +25.9 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,603 | 1,140 | +0.6 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,089 | 563 | +14.8 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,084 | 584 | +8.9 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,790 | 372 | +9.4 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,749 | 454 | +3.2 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 6,694 | 584 | +26.8 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,526 | 248 | +3.9 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,223 | 603 | +2.1 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,080 | 420 | +0.1 |
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
