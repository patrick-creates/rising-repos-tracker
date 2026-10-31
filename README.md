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

> Auto-updated daily — last refreshed 2026-10-31

| Metric | Value |
|---|---|
| Repos tracked | **210** |
| Total stars | **11,091,409** |
| Total forks | **1,628,995** |
| Fastest growing | **rea** (+14710.1/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 413,720 | +14710.1 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 53,564 | +2251.3 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 96,208 | +1407.2 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 181,213 | +1016.7 |
| 5 | [yetone/magpie](https://github.com/yetone/magpie) | 26,632 | +892.0 |

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
| [morluto/rea](https://github.com/morluto/rea) | 413,720 | 103,492 | +14710.1 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 393,517 | 82,710 | +128.9 |
| [obra/superpowers](https://github.com/obra/superpowers) | 309,680 | 27,550 | +565.7 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 293,658 | 43,457 | +658.5 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 259,013 | 56,944 | +648.9 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 193,152 | 14,463 | +410.2 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,840 | 45,908 | +20.8 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 181,213 | 9,958 | +1016.7 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 175,365 | 22,379 | +77.2 |
| [langgenius/dify](https://github.com/langgenius/dify) | 160,068 | 25,293 | +110.2 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 157,344 | 22,885 | +119.6 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 150,544 | 9,890 | +460.8 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 148,761 | 25,000 | +70.9 |
| [github/spec-kit](https://github.com/github/spec-kit) | 144,170 | 12,919 | +270.8 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 143,200 | 15,163 | +381.9 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 139,729 | 13,336 | +448.2 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 122,567 | 65,365 | +69.1 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 116,420 | 6,742 | +330.8 |
| [stablyai/orca](https://github.com/stablyai/orca) | 111,395 | 7,046 | +844.5 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 109,127 | 18,061 | +393.4 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 107,035 | 9,517 | +576.3 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 106,936 | 9,401 | +184.5 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 106,606 | 7,214 | +501.3 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 105,119 | 11,986 | +367.1 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 101,814 | 13,225 | +225.9 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 96,208 | 10,667 | +1407.2 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 95,962 | 24,216 | +94.0 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 92,322 | 12,290 | +110.8 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 91,967 | 6,269 | +543.6 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 89,830 | 13,850 | +213.6 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,931 | 58,675 | +5.4 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 85,476 | 10,633 | +209.7 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 85,113 | 5,436 | +214.1 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 83,631 | 16,022 | +38.8 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 83,017 | 12,347 | +605.7 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 80,354 | 9,419 | +248.6 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,691 | 8,745 | +30.1 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 79,613 | 12,742 | +111.7 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 78,972 | 14,571 | +203.2 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 78,842 | 7,332 | +86.4 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 78,429 | 6,115 | +364.2 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 78,390 | 9,452 | +108.4 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,886 | 13,025 | +19.7 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 76,258 | 6,960 | +349.6 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 75,883 | 13,375 | +325.8 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 73,694 | 9,656 | +369.7 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 73,501 | 5,030 | +148.9 |
| [usestrix/strix](https://github.com/usestrix/strix) | 73,002 | 8,207 | +311.1 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,520 | 5,823 | +73.4 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 70,510 | 11,412 | +181.5 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,360 | 6,796 | +89.5 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 68,216 | 21,666 | +423.9 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 67,318 | 55,770 | +179.1 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,959 | 13,472 | +4.3 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 66,065 | 5,755 | +230.3 |
| [blader/humanizer](https://github.com/blader/humanizer) | 62,837 | 4,977 | +312.8 |
| [tw93/Pake](https://github.com/tw93/Pake) | 62,689 | 12,899 | +83.8 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 62,427 | 12,869 | +90.6 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,175 | 7,625 | +46.8 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 59,096 | 7,418 | +197.9 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 57,594 | 8,484 | +172.1 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 57,086 | 8,738 | +140.5 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 56,959 | 4,895 | +77.5 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 56,733 | 6,544 | +473.6 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,536 | 25,092 | +15.9 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 55,468 | 4,880 | +222.1 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,814 | 6,261 | +30.0 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 54,715 | 4,172 | +156.5 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 54,532 | 5,886 | +88.2 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 53,564 | 1,469 | +2251.3 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,645 | 10,541 | +92.4 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 51,087 | 12,379 | +98.9 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 50,488 | 3,570 | +109.2 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,844 | 5,110 | +29.4 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,696 | 8,701 | +42.3 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 49,154 | 3,597 | +334.8 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 48,876 | 7,095 | +64.1 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 47,886 | 3,937 | +219.8 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,709 | 10,417 | +19.0 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 47,015 | 3,756 | +295.9 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,540 | 9,572 | +57.1 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 45,492 | 4,743 | +108.4 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 45,179 | 3,310 | +76.3 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 45,148 | 2,756 | +44.0 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,208 | 7,607 | +67.1 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,447 | 4,201 | +54.8 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,209 | 4,300 | +13.3 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,035 | 4,450 | +38.4 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 41,233 | 3,344 | +109.7 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,158 | 3,565 | +40.8 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 40,617 | 5,250 | +42.8 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,440 | 3,618 | +35.3 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 40,351 | 1,754 | +392.4 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,835 | 6,234 | +3.9 |
| [google/langextract](https://github.com/google/langextract) | 39,220 | 2,747 | +16.8 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,505 | 2,485 | +75.7 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 38,217 | 5,646 | +153.8 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,067 | 3,417 | +25.5 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,297 | 6,892 | +19.4 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 37,283 | 4,189 | +177.8 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 37,267 | 6,017 | +181.7 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 37,256 | 4,249 | +91.6 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 37,056 | 3,242 | +139.7 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 36,619 | 3,877 | +173.4 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 36,099 | 4,906 | +143.5 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 36,014 | 2,499 | +113.7 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,328 | 4,304 | +131.3 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,218 | 9,126 | +40.0 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,941 | 3,536 | +43.4 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,078 | 4,990 | +9.2 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 32,978 | 2,278 | +112.4 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 32,852 | 2,234 | +209.0 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,516 | 2,958 | +101.5 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,019 | 1,970 | +34.9 |
| [decolua/9router](https://github.com/decolua/9router) | 31,732 | 6,181 | +102.6 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 30,825 | 4,333 | +46.0 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,790 | 3,025 | +48.2 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,291 | 2,938 | +196.1 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,043 | 2,651 | +56.7 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,612 | 2,641 | +80.1 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,049 | 1,331 | +30.1 |
| [voideditor/void](https://github.com/voideditor/void) | 28,726 | 2,656 | — |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,625 | 2,604 | +38.8 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,529 | 3,049 | +12.0 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 28,287 | 2,582 | +171.4 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 27,002 | 3,085 | +300.1 |
| [yetone/magpie](https://github.com/yetone/magpie) | 26,632 | 2,235 | +892.0 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,515 | 4,063 | +7.3 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 25,842 | 3,527 | +152.9 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 25,705 | 2,926 | +119.9 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,581 | 1,126 | +7.5 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,239 | 3,139 | +48.6 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 24,739 | 3,290 | +167.1 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 23,609 | 2,041 | +137.6 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,220 | 2,080 | +47.7 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 22,910 | 2,179 | +58.8 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,868 | 806 | +39.0 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 22,628 | 2,563 | +108.9 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,428 | 1,708 | +2.9 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,800 | 2,885 | +8.0 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,787 | 3,135 | +5.8 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 21,765 | 2,292 | +41.8 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,736 | 3,489 | +48.3 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,359 | 2,490 | +118.7 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,270 | 1,960 | +24.1 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,786 | 1,203 | +11.2 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,657 | 2,509 | +27.4 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,580 | 1,759 | +50.1 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,307 | 2,796 | +34.1 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 19,045 | 8,187 | +44.3 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,850 | 1,701 | +11.2 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,774 | 1,851 | +26.6 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 18,359 | 1,504 | +45.0 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,241 | 2,289 | +3.0 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 17,830 | 1,385 | +424.2 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,245 | 3,760 | +14.5 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,149 | 1,730 | +17.8 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,035 | 1,767 | +7.1 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 16,988 | 586 | +229.2 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,956 | 2,488 | +52.8 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,684 | 2,449 | +18.3 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,925 | 1,792 | +6.2 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 15,775 | 1,409 | +29.2 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,259 | 1,547 | +7.9 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,244 | 8,607 | +15.4 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,911 | 3,270 | +5.8 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,584 | 1,096 | +5.2 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,737 | 1,457 | +21.9 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,733 | 958 | +32.4 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,475 | 600 | +17.7 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 13,434 | 1,583 | +36.4 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,335 | 2,713 | +34.6 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,233 | 2,673 | +26.0 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,204 | 1,100 | +17.6 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,633 | 899 | +27.0 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,622 | 1,444 | +23.6 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,444 | 719 | +41.0 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 11,415 | 1,581 | +100.6 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,385 | 1,512 | +134.1 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,268 | 900 | +33.6 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,131 | 5,640 | +4.2 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,037 | 1,804 | +1.3 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 10,974 | 973 | +72.0 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 10,837 | 2,719 | +55.4 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,803 | 972 | +38.3 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,333 | 7,675 | +3.8 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,295 | 826 | +10.9 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,048 | 1,108 | +7.2 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 9,843 | 1,625 | +32.6 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 9,839 | 703 | +66.0 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,731 | 324 | +27.5 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,720 | 729 | +3.6 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,544 | 698 | +41.8 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,949 | 910 | +2.9 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,714 | 847 | — |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,430 | 648 | +0.9 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,315 | 1,050 | +28.9 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,148 | 710 | +23.1 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,122 | 195 | +0.8 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,602 | 1,139 | +0.6 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,119 | 564 | +13.7 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,098 | 586 | +8.6 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 6,991 | 606 | +59.4 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,811 | 376 | +9.2 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,770 | 454 | +3.3 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,544 | 250 | +3.9 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,237 | 606 | +2.2 |
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
