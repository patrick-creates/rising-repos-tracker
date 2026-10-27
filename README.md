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

> Auto-updated daily — last refreshed 2026-10-27

| Metric | Value |
|---|---|
| Repos tracked | **210** |
| Total stars | **10,954,815** |
| Total forks | **1,609,911** |
| Fastest growing | **rea** (+17339.5/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 394,321 | +17339.5 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 45,899 | +2418.9 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 90,352 | +1402.7 |
| 4 | [xerj-org/xerj](https://github.com/xerj-org/xerj) | 16,969 | +1260.0 |
| 5 | [yetone/magpie](https://github.com/yetone/magpie) | 23,242 | +1070.0 |

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
| [morluto/rea](https://github.com/morluto/rea) | 394,321 | 98,845 | +17339.5 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 393,184 | 82,665 | +130.0 |
| [obra/superpowers](https://github.com/obra/superpowers) | 305,848 | 27,242 | +553.3 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 290,267 | 43,012 | +654.0 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 257,560 | 56,441 | +655.8 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 192,462 | 14,384 | +415.9 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,785 | 45,902 | +21.0 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 177,605 | 9,713 | +1020.4 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 174,708 | 22,315 | +75.1 |
| [langgenius/dify](https://github.com/langgenius/dify) | 159,676 | 25,236 | +110.5 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 156,906 | 22,848 | +119.8 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 149,244 | 9,816 | +464.2 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 148,545 | 24,936 | +71.3 |
| [github/spec-kit](https://github.com/github/spec-kit) | 143,097 | 12,821 | +270.9 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 141,232 | 14,960 | +379.3 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 136,520 | 13,025 | +432.8 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 122,251 | 64,989 | +68.9 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 115,410 | 6,658 | +332.7 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 107,813 | 17,881 | +425.9 |
| [stablyai/orca](https://github.com/stablyai/orca) | 107,537 | 6,786 | +840.3 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 104,397 | 9,253 | +573.9 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 104,274 | 11,916 | +371.0 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 103,552 | 9,138 | +168.7 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 103,282 | 6,982 | +492.4 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 99,953 | 13,067 | +219.7 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 95,672 | 24,044 | +94.5 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 91,982 | 12,220 | +111.4 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 90,352 | 9,955 | +1402.7 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 90,132 | 6,112 | +559.0 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 89,630 | 13,781 | +217.7 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,900 | 58,708 | +5.3 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 84,903 | 10,547 | +211.4 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 84,717 | 5,386 | +216.9 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 83,520 | 16,009 | +39.1 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 81,640 | 11,996 | +614.9 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 79,651 | 9,351 | +261.8 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,575 | 8,725 | +30.1 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 79,334 | 12,695 | +112.7 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 78,616 | 7,295 | +87.1 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 78,046 | 9,357 | +109.0 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 77,976 | 6,065 | +371.7 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 77,749 | 14,376 | +200.6 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,831 | 12,999 | +19.9 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 74,561 | 13,065 | +325.7 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 73,495 | 6,655 | +340.0 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 73,105 | 4,997 | +150.1 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 72,313 | 9,409 | +370.5 |
| [usestrix/strix](https://github.com/usestrix/strix) | 72,229 | 8,087 | +314.3 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,385 | 5,802 | +74.4 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 70,296 | 11,381 | +184.6 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,190 | 6,781 | +90.7 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 67,144 | 55,674 | +182.6 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,943 | 13,467 | +4.3 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 66,528 | 20,969 | +424.0 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 65,632 | 5,704 | +233.8 |
| [tw93/Pake](https://github.com/tw93/Pake) | 62,320 | 12,843 | +83.6 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 62,141 | 12,726 | +91.1 |
| [blader/humanizer](https://github.com/blader/humanizer) | 61,254 | 4,859 | +301.4 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 59,751 | 7,587 | +45.4 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 58,686 | 7,376 | +200.4 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 56,785 | 8,396 | +171.3 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 56,642 | 4,881 | +77.5 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 56,562 | 8,651 | +140.8 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 56,136 | 6,443 | +486.7 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,530 | 25,081 | +16.2 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 54,871 | 4,836 | +227.9 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,698 | 6,242 | +30.1 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 54,243 | 5,886 | +88.6 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 54,118 | 4,138 | +156.8 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,530 | 10,532 | +94.3 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 50,784 | 12,296 | +99.5 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 50,201 | 3,545 | +110.3 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,770 | 5,107 | +29.7 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,465 | 8,686 | +41.9 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 48,578 | 7,062 | +63.9 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 48,429 | 3,548 | +340.2 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,618 | 10,408 | +18.9 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 47,604 | 3,911 | +224.8 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,369 | 9,523 | +57.4 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 46,102 | 3,685 | +298.3 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 45,899 | 1,281 | +2418.9 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 44,930 | 2,752 | +43.7 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 44,832 | 4,678 | +106.9 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 44,038 | 3,229 | +70.6 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 43,981 | 7,556 | +67.4 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,366 | 4,192 | +57.5 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,158 | 4,292 | +13.3 |
| [wshobson/agents](https://github.com/wshobson/agents) | 41,855 | 4,435 | +38.2 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,129 | 3,565 | +41.7 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 40,936 | 3,317 | +110.7 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 40,465 | 5,223 | +43.0 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,311 | 3,599 | +35.4 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,829 | 6,235 | +4.0 |
| [google/langextract](https://github.com/google/langextract) | 39,052 | 2,731 | +16.1 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,415 | 2,477 | +77.1 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 37,929 | 3,400 | +25.3 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 37,469 | 5,498 | +152.8 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,258 | 6,889 | +19.7 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 36,820 | 5,955 | +184.0 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 36,770 | 4,111 | +179.3 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 36,610 | 4,157 | +89.6 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 36,514 | 3,223 | +139.8 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 36,246 | 3,846 | +178.4 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,978 | 2,487 | +116.7 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 35,624 | 4,816 | +144.3 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 35,328 | 1,720 | +348.1 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,088 | 4,278 | +133.6 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,169 | 9,130 | +40.8 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,817 | 3,511 | +43.7 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,049 | 4,987 | +9.3 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 32,531 | 2,214 | +213.6 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 32,489 | 2,249 | +112.1 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,421 | 2,956 | +103.8 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 31,936 | 1,960 | +35.3 |
| [decolua/9router](https://github.com/decolua/9router) | 31,497 | 6,112 | +103.9 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,698 | 3,009 | +48.9 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 30,639 | 4,313 | +46.0 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,013 | 2,914 | +200.9 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 29,930 | 2,641 | +57.5 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,575 | 2,639 | +82.2 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 28,930 | 1,333 | +30.1 |
| [voideditor/void](https://github.com/voideditor/void) | 28,734 | 2,658 | — |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,540 | 2,589 | +39.5 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,474 | 3,043 | +11.9 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 27,907 | 2,509 | +174.7 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,488 | 4,059 | +7.3 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 25,995 | 2,968 | +306.8 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,568 | 1,126 | +7.6 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 25,212 | 3,440 | +152.5 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,137 | 3,128 | +49.8 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 25,018 | 2,865 | +116.7 |
| [yetone/magpie](https://github.com/yetone/magpie) | 23,242 | 1,865 | +1070.0 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,091 | 2,069 | +48.2 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 22,845 | 2,158 | +60.2 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,812 | 805 | +39.8 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 22,605 | 1,963 | +127.1 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 22,425 | 3,077 | +128.8 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,421 | 1,707 | +3.0 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,777 | 2,885 | +8.1 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,765 | 3,131 | +5.8 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 21,721 | 2,432 | +104.7 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 21,684 | 2,287 | +42.7 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,630 | 3,480 | +49.0 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,243 | 2,465 | +122.1 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,205 | 1,954 | +24.4 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,758 | 1,201 | +11.3 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,602 | 2,506 | +27.8 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,401 | 1,734 | +50.4 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,210 | 2,778 | +34.4 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,825 | 1,694 | +11.3 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,650 | 1,846 | +26.4 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,228 | 2,288 | +3.0 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 18,142 | 1,494 | +44.7 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 17,757 | 7,510 | — |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,138 | 3,693 | +14.1 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 17,100 | 576 | +253.2 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,075 | 1,716 | +17.8 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,018 | 1,767 | +7.1 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 16,969 | 1,198 | +1260.0 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,901 | 2,482 | +54.2 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,601 | 2,432 | +18.2 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,889 | 1,790 | +6.0 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 15,616 | 1,384 | +28.8 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,232 | 1,544 | +7.9 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,190 | 8,606 | +15.5 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,906 | 3,273 | +5.9 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,564 | 1,093 | +5.2 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,737 | 1,451 | +22.6 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,658 | 954 | +32.9 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,423 | 597 | +17.9 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 13,324 | 1,575 | +36.7 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,150 | 2,677 | +34.2 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,120 | 2,662 | +25.9 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,123 | 1,094 | +17.5 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,589 | 893 | +27.6 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,570 | 1,435 | +24.0 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,431 | 720 | +43.1 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,222 | 890 | +34.6 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,167 | 1,439 | +155.3 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,122 | 5,647 | +4.3 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 11,035 | 1,516 | +101.3 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,034 | 1,804 | +1.4 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 10,809 | 960 | +74.9 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,466 | 930 | +36.6 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,329 | 7,680 | +3.9 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,275 | 827 | +11.1 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,030 | 1,108 | +7.5 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,716 | 730 | +3.6 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 9,709 | 1,595 | +29.0 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,694 | 324 | +28.2 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 9,661 | 694 | +69.0 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 9,509 | 2,059 | +17.3 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,432 | 683 | +42.5 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,932 | 909 | +2.8 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,702 | 843 | — |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,427 | 649 | +0.9 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,116 | 195 | +0.8 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,061 | 698 | +23.3 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,027 | 1,035 | +25.9 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,601 | 1,140 | +0.6 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,096 | 563 | +14.6 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,086 | 586 | +8.9 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,795 | 372 | +9.4 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,752 | 454 | +3.2 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 6,716 | 588 | +22.0 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,529 | 248 | +3.9 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,225 | 603 | +2.1 |
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
