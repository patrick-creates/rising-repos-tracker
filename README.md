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

> Auto-updated daily — last refreshed 2026-10-30

| Metric | Value |
|---|---|
| Repos tracked | **210** |
| Total stars | **11,062,839** |
| Total forks | **1,624,931** |
| Fastest growing | **rea** (+15326.9/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 410,114 | +15326.9 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 52,025 | +2316.1 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 94,937 | +1409.8 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 180,615 | +1020.0 |
| 5 | [yetone/magpie](https://github.com/yetone/magpie) | 25,926 | +938.5 |

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
| [morluto/rea](https://github.com/morluto/rea) | 410,114 | 102,660 | +15326.9 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 393,425 | 82,695 | +129.1 |
| [obra/superpowers](https://github.com/obra/superpowers) | 309,068 | 27,485 | +565.3 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 293,025 | 43,353 | +658.7 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 258,690 | 56,832 | +650.9 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 192,983 | 14,442 | +411.6 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,825 | 45,900 | +20.8 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 180,615 | 9,922 | +1020.0 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 175,171 | 22,356 | +76.5 |
| [langgenius/dify](https://github.com/langgenius/dify) | 159,985 | 25,277 | +110.4 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 157,242 | 22,878 | +119.7 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 150,299 | 9,878 | +462.2 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 148,706 | 24,982 | +71.0 |
| [github/spec-kit](https://github.com/github/spec-kit) | 144,019 | 12,901 | +271.5 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 142,798 | 15,116 | +381.8 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 139,084 | 13,265 | +446.2 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 122,460 | 65,224 | +68.9 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 116,220 | 6,722 | +331.6 |
| [stablyai/orca](https://github.com/stablyai/orca) | 110,638 | 6,992 | +845.3 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 108,827 | 18,016 | +401.9 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 106,575 | 9,462 | +577.1 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 105,939 | 7,159 | +500.2 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 105,290 | 9,280 | +175.9 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 104,976 | 11,976 | +368.5 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 101,671 | 13,208 | +226.4 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 95,903 | 24,185 | +94.2 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 94,937 | 10,495 | +1409.8 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 92,253 | 12,270 | +111.0 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 91,689 | 6,241 | +554.2 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 89,780 | 13,839 | +214.6 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,921 | 58,669 | +5.4 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 85,392 | 10,618 | +210.5 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 85,043 | 5,426 | +214.9 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 83,603 | 16,011 | +38.9 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 82,711 | 12,254 | +608.3 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 80,224 | 9,408 | +253.3 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,675 | 8,742 | +30.1 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 79,564 | 12,731 | +112.0 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 78,791 | 7,320 | +86.6 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 78,789 | 14,542 | +203.3 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 78,321 | 9,432 | +108.7 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 78,321 | 6,107 | +366.1 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,869 | 13,027 | +19.8 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 75,750 | 6,899 | +348.5 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 75,657 | 13,318 | +326.5 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 73,421 | 5,028 | +149.3 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 73,163 | 9,573 | +368.4 |
| [usestrix/strix](https://github.com/usestrix/strix) | 72,835 | 8,183 | +312.1 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,497 | 5,819 | +73.8 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 70,461 | 11,408 | +182.3 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,326 | 6,789 | +89.9 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 67,637 | 21,473 | +422.5 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 67,284 | 55,749 | +180.0 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,956 | 13,467 | +4.3 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 65,952 | 5,742 | +231.1 |
| [tw93/Pake](https://github.com/tw93/Pake) | 62,645 | 12,885 | +84.0 |
| [blader/humanizer](https://github.com/blader/humanizer) | 62,553 | 4,957 | +313.8 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 62,366 | 12,845 | +90.8 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,124 | 7,614 | +46.8 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 59,038 | 7,413 | +198.8 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 57,423 | 8,469 | +172.1 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 56,989 | 8,717 | +140.8 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 56,897 | 4,887 | +77.6 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 56,646 | 6,525 | +477.4 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,537 | 25,089 | +16.0 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 55,346 | 4,874 | +224.0 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,793 | 6,256 | +30.1 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 54,626 | 4,169 | +157.2 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 54,480 | 5,882 | +88.5 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 52,025 | 1,425 | +2316.1 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,610 | 10,542 | +92.8 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 51,040 | 12,365 | +99.3 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 50,423 | 3,564 | +109.5 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,826 | 5,111 | +29.5 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,672 | 8,699 | +42.4 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 49,063 | 3,595 | +336.9 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 48,796 | 7,083 | +64.0 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 47,827 | 3,933 | +221.1 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,691 | 10,411 | +19.0 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 46,775 | 3,735 | +296.4 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,481 | 9,554 | +57.0 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 45,370 | 4,729 | +108.3 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 45,085 | 2,754 | +43.9 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 44,966 | 3,300 | +75.3 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,152 | 7,597 | +67.2 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,427 | 4,197 | +55.4 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,195 | 4,296 | +13.3 |
| [wshobson/agents](https://github.com/wshobson/agents) | 41,996 | 4,446 | +38.4 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 41,190 | 3,340 | +110.2 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,152 | 3,565 | +41.0 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 40,585 | 5,241 | +42.9 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,419 | 3,614 | +35.4 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,831 | 6,234 | +3.9 |
| [google/langextract](https://github.com/google/langextract) | 39,210 | 2,748 | +16.8 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,481 | 2,484 | +76.0 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 38,329 | 1,743 | +372.3 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,051 | 3,413 | +25.6 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 38,013 | 5,583 | +153.4 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,289 | 6,890 | +19.5 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 37,193 | 6,008 | +182.6 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 37,167 | 4,231 | +91.6 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 37,161 | 4,177 | +178.2 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 36,991 | 3,239 | +140.2 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 36,545 | 3,877 | +174.9 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 36,021 | 4,897 | +144.0 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 36,004 | 2,495 | +114.4 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,272 | 4,301 | +131.9 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,212 | 9,129 | +40.2 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,916 | 3,531 | +43.5 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,073 | 4,988 | +9.3 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 32,895 | 2,273 | +112.6 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 32,809 | 2,228 | +210.4 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,496 | 2,957 | +102.1 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,003 | 1,967 | +35.0 |
| [decolua/9router](https://github.com/decolua/9router) | 31,682 | 6,169 | +103.0 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 30,781 | 4,329 | +46.0 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,778 | 3,023 | +48.5 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,232 | 2,931 | +197.4 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,023 | 2,652 | +56.9 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,606 | 2,642 | +80.6 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,023 | 1,331 | +30.1 |
| [voideditor/void](https://github.com/voideditor/void) | 28,727 | 2,657 | — |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,611 | 2,602 | +39.0 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,520 | 3,045 | +12.0 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 28,246 | 2,572 | +172.7 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 26,739 | 3,062 | +301.3 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,511 | 4,064 | +7.3 |
| [yetone/magpie](https://github.com/yetone/magpie) | 25,926 | 2,143 | +938.5 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 25,695 | 3,511 | +153.0 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 25,628 | 2,918 | +120.5 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,575 | 1,125 | +7.5 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,229 | 3,139 | +49.1 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 24,214 | 3,239 | +159.3 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 23,454 | 2,030 | +137.3 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,195 | 2,079 | +47.9 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 22,897 | 2,174 | +59.2 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,849 | 806 | +39.2 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 22,509 | 2,541 | +108.8 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,427 | 1,707 | +2.9 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,796 | 2,884 | +8.1 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,779 | 3,133 | +5.8 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 21,760 | 2,292 | +42.2 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,712 | 3,487 | +48.5 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,316 | 2,478 | +119.4 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,262 | 1,960 | +24.2 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,785 | 1,203 | +11.2 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,642 | 2,508 | +27.5 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,546 | 1,754 | +50.3 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,286 | 2,789 | +34.2 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 18,856 | 8,077 | +38.5 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,848 | 1,699 | +11.2 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,723 | 1,848 | +26.4 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 18,330 | 1,503 | +45.2 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,236 | 2,288 | +3.0 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 17,627 | 1,357 | +479.5 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,230 | 3,745 | +14.5 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,130 | 1,727 | +17.8 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,031 | 1,763 | +7.1 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 17,018 | 585 | +234.9 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,941 | 2,486 | +53.1 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,667 | 2,442 | +18.3 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,915 | 1,790 | +6.1 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 15,743 | 1,407 | +29.1 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,253 | 1,546 | +7.9 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,236 | 8,609 | +15.5 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,911 | 3,270 | +5.8 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,581 | 1,095 | +5.2 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,737 | 1,455 | +22.1 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,711 | 958 | +32.5 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,471 | 598 | +17.8 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 13,407 | 1,582 | +36.4 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,305 | 2,705 | +34.7 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,198 | 2,667 | +25.9 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,195 | 1,098 | +17.6 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,620 | 898 | +27.1 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,608 | 1,440 | +23.7 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,438 | 719 | +41.4 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,353 | 1,499 | +139.8 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 11,351 | 1,572 | +101.6 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,262 | 897 | +33.9 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,132 | 5,640 | +4.2 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,037 | 1,804 | +1.3 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 10,937 | 970 | +72.8 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,788 | 966 | +38.6 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 10,636 | 2,617 | +50.9 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,330 | 7,676 | +3.8 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,287 | 826 | +10.9 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,045 | 1,109 | +7.3 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 9,811 | 1,617 | +32.8 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 9,807 | 701 | +67.1 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,722 | 729 | +3.6 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,722 | 324 | +27.7 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,473 | 689 | +41.4 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,946 | 910 | +2.9 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,712 | 846 | — |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,431 | 648 | +0.9 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,272 | 1,047 | +28.7 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,122 | 195 | +0.8 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,118 | 705 | +23.0 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,603 | 1,138 | +0.6 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,116 | 564 | +14.0 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,094 | 585 | +8.7 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 6,969 | 605 | +68.8 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,809 | 376 | +9.2 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,768 | 453 | +3.3 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,544 | 250 | +3.9 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,236 | 606 | +2.2 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,079 | 419 | +0.1 |
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
