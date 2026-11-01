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

> Auto-updated daily — last refreshed 2026-11-01

| Metric | Value |
|---|---|
| Repos tracked | **210** |
| Total stars | **11,119,533** |
| Total forks | **1,632,254** |
| Fastest growing | **rea** (+14137.5/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 416,979 | +14137.5 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 55,211 | +2204.8 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 97,316 | +1401.8 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 181,793 | +1013.4 |
| 5 | [yetone/magpie](https://github.com/yetone/magpie) | 27,332 | +860.0 |

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
| [morluto/rea](https://github.com/morluto/rea) | 416,979 | 104,234 | +14137.5 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 393,609 | 82,731 | +128.7 |
| [obra/superpowers](https://github.com/obra/superpowers) | 310,335 | 27,616 | +566.3 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 294,384 | 43,590 | +658.9 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 259,338 | 57,043 | +647.1 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 193,323 | 14,486 | +408.8 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,854 | 45,901 | +20.8 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 181,793 | 10,006 | +1013.4 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 175,475 | 22,401 | +77.3 |
| [langgenius/dify](https://github.com/langgenius/dify) | 160,149 | 25,318 | +110.0 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 157,443 | 22,891 | +119.5 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 150,771 | 9,911 | +459.4 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 148,808 | 25,012 | +70.8 |
| [github/spec-kit](https://github.com/github/spec-kit) | 144,664 | 12,963 | +272.1 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 143,606 | 15,206 | +382.1 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 140,263 | 13,391 | +449.1 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 122,707 | 65,549 | +69.5 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 116,601 | 6,764 | +329.9 |
| [stablyai/orca](https://github.com/stablyai/orca) | 112,055 | 7,088 | +843.0 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 109,690 | 18,168 | +406.5 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 108,456 | 9,512 | +192.3 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 107,403 | 9,571 | +574.8 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 107,384 | 7,257 | +503.1 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 105,259 | 11,998 | +365.8 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 101,927 | 13,244 | +225.2 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 97,316 | 10,795 | +1401.8 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 96,031 | 24,245 | +93.9 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 92,407 | 12,311 | +110.6 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 92,256 | 6,294 | +534.2 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 89,906 | 13,874 | +212.8 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,932 | 58,658 | +5.4 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 85,583 | 10,648 | +209.1 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 85,177 | 5,445 | +213.2 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 83,656 | 16,025 | +38.7 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 83,393 | 12,438 | +603.7 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 80,469 | 9,438 | +243.6 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,727 | 8,758 | +30.1 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 79,661 | 12,750 | +111.3 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 79,145 | 14,608 | +203.0 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 78,904 | 7,346 | +86.3 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 78,506 | 6,126 | +362.2 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 78,482 | 9,471 | +108.3 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,900 | 13,029 | +19.7 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 76,799 | 7,033 | +350.9 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 76,158 | 13,457 | +325.5 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 74,165 | 9,736 | +370.5 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 73,570 | 5,038 | +148.4 |
| [usestrix/strix](https://github.com/usestrix/strix) | 73,157 | 8,237 | +310.1 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,567 | 5,823 | +73.3 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 70,560 | 11,429 | +180.7 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 68,574 | 21,842 | +423.3 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,397 | 6,803 | +89.2 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 67,369 | 55,799 | +178.3 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,970 | 13,471 | +4.4 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 66,186 | 5,773 | +229.6 |
| [blader/humanizer](https://github.com/blader/humanizer) | 63,103 | 5,002 | +311.5 |
| [tw93/Pake](https://github.com/tw93/Pake) | 62,715 | 12,906 | +83.4 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 62,483 | 12,891 | +90.4 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,211 | 7,628 | +46.8 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 59,172 | 7,420 | +197.1 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 57,749 | 8,498 | +172.0 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 57,162 | 8,755 | +140.1 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 57,011 | 4,896 | +77.3 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 56,812 | 6,553 | +469.8 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 55,603 | 4,896 | +220.5 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,540 | 25,092 | +15.8 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 55,211 | 1,514 | +2204.8 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,832 | 6,264 | +30.0 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 54,825 | 4,179 | +156.0 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 54,598 | 5,243 | +88.1 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,671 | 10,546 | +91.9 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 51,117 | 12,395 | +98.5 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 50,556 | 3,575 | +109.0 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,873 | 5,123 | +29.4 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,720 | 8,704 | +42.2 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 49,214 | 3,604 | +332.4 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 48,950 | 7,105 | +64.2 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 47,930 | 3,945 | +218.4 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,727 | 10,414 | +19.0 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 47,227 | 3,777 | +295.2 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,601 | 9,584 | +57.1 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 45,634 | 4,749 | +108.6 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 45,447 | 3,330 | +77.5 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 45,199 | 2,757 | +44.0 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,258 | 7,616 | +67.0 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,459 | 4,205 | +54.0 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,219 | 4,300 | +13.3 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,068 | 4,452 | +38.3 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 42,000 | 1,772 | +407.6 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 41,268 | 3,350 | +109.2 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,164 | 3,568 | +40.6 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 40,648 | 5,258 | +42.8 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,477 | 3,620 | +35.3 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,835 | 6,234 | +3.9 |
| [google/langextract](https://github.com/google/langextract) | 39,226 | 2,747 | +16.7 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,532 | 2,487 | +75.4 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 38,337 | 5,681 | +153.6 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,086 | 3,419 | +25.4 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 37,387 | 4,202 | +177.2 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 37,339 | 4,262 | +91.6 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 37,336 | 6,036 | +180.8 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,305 | 6,890 | +19.3 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 37,112 | 3,242 | +139.1 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 36,679 | 3,883 | +171.7 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 36,152 | 4,918 | +142.9 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 36,023 | 2,500 | +113.0 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,375 | 4,310 | +130.7 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,237 | 9,128 | +39.9 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,964 | 3,540 | +43.2 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,085 | 4,992 | +9.2 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 33,083 | 2,281 | +112.3 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 32,900 | 2,238 | +207.7 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,529 | 2,959 | +100.8 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,031 | 1,974 | +34.7 |
| [decolua/9router](https://github.com/decolua/9router) | 31,786 | 6,189 | +102.3 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 30,847 | 4,338 | +45.8 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,809 | 3,026 | +48.0 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,312 | 2,941 | +194.5 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,058 | 2,653 | +56.4 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,614 | 2,641 | +79.5 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,065 | 1,331 | +30.0 |
| [voideditor/void](https://github.com/voideditor/void) | 28,725 | 2,656 | — |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,631 | 2,608 | +38.5 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,551 | 3,050 | +12.0 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 28,426 | 2,592 | +171.0 |
| [yetone/magpie](https://github.com/yetone/magpie) | 27,332 | 2,310 | +860.0 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 27,249 | 3,134 | +298.5 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,517 | 4,064 | +7.2 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 25,949 | 3,547 | +151.9 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 25,835 | 2,942 | +120.0 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,591 | 1,127 | +7.5 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 25,264 | 3,337 | +174.6 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,259 | 3,139 | +48.3 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 23,771 | 2,054 | +138.1 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,249 | 2,085 | +47.6 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 22,924 | 2,181 | +58.5 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,891 | 809 | +38.9 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 22,742 | 2,581 | +109.0 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,431 | 1,707 | +2.9 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,803 | 2,884 | +8.0 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,790 | 3,135 | +5.8 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 21,775 | 2,292 | +41.5 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,759 | 3,492 | +48.1 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,383 | 2,497 | +117.8 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,279 | 1,961 | +24.0 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,789 | 1,204 | +11.1 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,661 | 2,512 | +27.2 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,603 | 1,759 | +49.8 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,328 | 2,799 | +34.0 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 19,138 | 8,234 | +46.1 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,861 | 1,700 | +11.2 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,794 | 1,853 | +26.5 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 18,550 | 1,408 | +473.5 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 18,404 | 1,507 | +45.0 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,243 | 2,288 | +3.0 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,279 | 3,775 | +14.7 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,153 | 1,732 | +17.6 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,039 | 1,767 | +7.0 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 17,033 | 591 | +225.4 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,970 | 2,492 | +52.5 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,706 | 2,456 | +18.3 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,930 | 1,791 | +6.2 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 15,809 | 1,411 | +29.2 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,262 | 1,546 | +7.8 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,256 | 8,607 | +15.3 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,914 | 3,270 | +5.8 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,586 | 1,097 | +5.2 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,747 | 960 | +32.3 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,737 | 1,462 | +21.7 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,484 | 602 | +17.6 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 13,453 | 1,585 | +36.2 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,369 | 2,718 | +34.6 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,263 | 2,676 | +26.0 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,215 | 1,101 | +17.5 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,635 | 901 | +26.8 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,630 | 1,446 | +23.5 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 11,475 | 1,586 | +99.6 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,450 | 719 | +40.5 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,409 | 1,518 | +128.6 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,271 | 900 | +33.2 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,130 | 5,640 | +4.1 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,039 | 1,805 | +1.3 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 10,998 | 975 | +71.0 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 10,950 | 2,765 | +57.1 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,812 | 973 | +38.1 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,334 | 7,671 | +3.7 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,298 | 826 | +10.9 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,052 | 1,108 | +7.1 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 9,869 | 703 | +65.0 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 9,868 | 1,629 | +31.3 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,733 | 326 | +27.3 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,721 | 729 | +3.5 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,600 | 703 | +42.0 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,954 | 910 | +2.9 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,715 | 847 | — |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,431 | 648 | +0.9 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,347 | 1,052 | +29.0 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,173 | 714 | +23.2 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,122 | 195 | +0.8 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,601 | 1,139 | +0.5 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,121 | 565 | +13.4 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,102 | 587 | +8.6 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,006 | 607 | +52.0 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,812 | 376 | +9.1 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,775 | 454 | +3.3 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,545 | 251 | +3.9 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,238 | 606 | +2.2 |
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
