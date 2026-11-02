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
| Repos tracked | **210** |
| Total stars | **11,150,965** |
| Total forks | **1,636,720** |
| Fastest growing | **rea** (+13647.0/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 420,816 | +13647.0 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 56,646 | +2149.9 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 98,489 | +1397.7 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 182,497 | +1011.1 |
| 5 | [yetone/magpie](https://github.com/yetone/magpie) | 28,203 | +861.6 |

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
| [morluto/rea](https://github.com/morluto/rea) | 420,816 | 105,048 | +13647.0 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 393,696 | 82,739 | +128.5 |
| [obra/superpowers](https://github.com/obra/superpowers) | 310,931 | 27,672 | +566.6 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 295,126 | 43,687 | +659.4 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 259,657 | 57,161 | +645.2 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 193,497 | 14,510 | +407.5 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,868 | 45,903 | +20.7 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 182,497 | 10,070 | +1011.1 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 175,589 | 22,408 | +77.6 |
| [langgenius/dify](https://github.com/langgenius/dify) | 160,224 | 25,329 | +109.8 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 157,527 | 22,908 | +119.3 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 151,130 | 9,936 | +458.8 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 148,877 | 25,027 | +70.8 |
| [github/spec-kit](https://github.com/github/spec-kit) | 145,186 | 13,014 | +273.6 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 144,038 | 15,248 | +382.3 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 140,829 | 13,461 | +450.3 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 122,823 | 65,699 | +69.8 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 116,835 | 6,783 | +329.3 |
| [stablyai/orca](https://github.com/stablyai/orca) | 113,130 | 7,157 | +844.9 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 110,186 | 9,611 | +201.2 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 110,088 | 18,244 | +405.9 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 108,265 | 7,300 | +505.5 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 107,838 | 9,623 | +573.9 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 105,448 | 12,025 | +364.7 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 102,057 | 13,258 | +224.6 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 98,489 | 10,930 | +1397.7 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 96,124 | 24,303 | +93.9 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 92,587 | 6,322 | +526.9 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 92,490 | 12,324 | +110.5 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 89,998 | 13,899 | +212.1 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,936 | 58,643 | +5.4 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 85,746 | 10,673 | +208.8 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 85,283 | 5,456 | +212.5 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 83,776 | 12,528 | +601.9 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 83,702 | 16,032 | +38.8 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 80,589 | 9,459 | +239.2 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,750 | 8,759 | +30.1 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 79,746 | 12,757 | +111.1 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 79,423 | 14,648 | +203.4 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 78,950 | 7,352 | +86.0 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 78,618 | 6,138 | +360.4 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 78,558 | 9,493 | +108.2 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 77,412 | 7,095 | +352.7 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,913 | 13,034 | +19.7 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 76,331 | 13,515 | +324.5 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 74,754 | 9,834 | +372.2 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 73,670 | 5,042 | +148.1 |
| [usestrix/strix](https://github.com/usestrix/strix) | 73,305 | 8,258 | +309.1 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 70,631 | 11,445 | +180.0 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,603 | 5,829 | +73.1 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 68,902 | 22,003 | +422.5 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,452 | 6,814 | +89.0 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 67,437 | 55,837 | +177.6 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,992 | 13,471 | +4.5 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 66,312 | 5,793 | +228.9 |
| [blader/humanizer](https://github.com/blader/humanizer) | 63,778 | 5,044 | +321.9 |
| [tw93/Pake](https://github.com/tw93/Pake) | 62,750 | 12,916 | +83.2 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 62,544 | 12,921 | +90.2 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,239 | 7,636 | +46.7 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 59,239 | 7,425 | +196.2 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 57,951 | 8,525 | +172.2 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 57,255 | 8,769 | +139.8 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 57,085 | 4,903 | +77.3 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 56,927 | 6,569 | +466.4 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 56,646 | 1,546 | +2149.9 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 55,780 | 4,909 | +219.7 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,542 | 25,089 | +15.7 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 54,981 | 4,191 | +156.0 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,861 | 6,265 | +30.0 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 54,646 | 5,248 | +87.9 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,697 | 10,556 | +91.5 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 51,194 | 12,421 | +98.4 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 50,607 | 3,577 | +108.6 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,898 | 5,126 | +29.4 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,755 | 8,711 | +42.1 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 49,277 | 3,615 | +330.2 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 49,023 | 7,115 | +64.3 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 47,986 | 3,951 | +217.1 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,751 | 10,412 | +19.0 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 47,467 | 3,798 | +294.7 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,635 | 9,589 | +56.9 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 45,770 | 4,765 | +108.8 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 45,603 | 3,345 | +78.0 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 45,265 | 2,759 | +44.2 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,328 | 7,623 | +67.0 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 42,962 | 1,778 | +414.2 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,496 | 4,208 | +53.7 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,232 | 4,302 | +13.3 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,095 | 4,454 | +38.3 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 41,357 | 3,356 | +109.0 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,168 | 3,569 | +40.4 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 40,703 | 5,267 | +42.8 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,512 | 3,624 | +35.3 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,835 | 6,234 | +3.9 |
| [google/langextract](https://github.com/google/langextract) | 39,241 | 2,751 | +16.7 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,561 | 2,490 | +75.1 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 38,423 | 5,699 | +153.1 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,116 | 3,421 | +25.5 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 37,758 | 4,304 | +93.8 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 37,500 | 4,217 | +176.7 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 37,434 | 6,049 | +180.1 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,316 | 6,885 | +19.3 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 37,197 | 3,251 | +138.7 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 36,747 | 3,890 | +170.3 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 36,248 | 4,935 | +142.5 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 36,039 | 2,500 | +112.3 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,430 | 4,317 | +130.1 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,251 | 9,133 | +39.7 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,991 | 3,545 | +43.1 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 33,219 | 2,292 | +112.5 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,098 | 4,994 | +9.2 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 32,939 | 2,239 | +206.2 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,559 | 2,963 | +100.3 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,059 | 1,977 | +34.7 |
| [decolua/9router](https://github.com/decolua/9router) | 31,835 | 6,200 | +101.9 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 30,895 | 4,343 | +45.9 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,833 | 3,027 | +47.8 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,349 | 2,944 | +193.1 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,083 | 2,657 | +56.2 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,619 | 2,642 | +79.0 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,083 | 1,330 | +29.9 |
| [voideditor/void](https://github.com/voideditor/void) | 28,722 | 2,656 | — |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,646 | 2,612 | +38.3 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 28,594 | 2,610 | +171.0 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,560 | 3,050 | +12.0 |
| [yetone/magpie](https://github.com/yetone/magpie) | 28,203 | 2,384 | +861.6 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 27,467 | 3,170 | +296.2 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,524 | 4,064 | +7.2 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 26,047 | 3,567 | +150.8 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 25,950 | 2,960 | +120.0 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 25,797 | 3,378 | +181.9 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,597 | 1,126 | +7.5 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,273 | 3,141 | +47.9 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 23,933 | 2,064 | +138.6 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,287 | 2,087 | +47.5 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 22,949 | 2,184 | +58.2 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 22,919 | 2,607 | +109.5 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,902 | 808 | +38.7 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,430 | 1,706 | +2.9 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 21,822 | 2,301 | +41.6 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,809 | 2,886 | +8.0 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,793 | 3,501 | +48.0 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,792 | 3,136 | +5.7 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,413 | 2,498 | +117.0 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,288 | 1,961 | +23.9 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,788 | 1,203 | +11.0 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,682 | 2,514 | +27.2 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,639 | 1,761 | +49.6 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 19,627 | 8,509 | +61.9 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,353 | 2,805 | +33.9 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,870 | 1,701 | +11.1 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,815 | 1,857 | +26.5 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 18,747 | 1,429 | +434.0 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 18,482 | 1,512 | +45.3 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,243 | 2,289 | +3.0 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,293 | 3,781 | +14.7 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,171 | 1,735 | +17.6 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 17,094 | 591 | +222.0 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,046 | 1,768 | +7.0 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,982 | 2,492 | +52.1 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,741 | 2,458 | +18.5 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,934 | 1,791 | +6.1 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 15,835 | 1,412 | +29.2 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,271 | 8,604 | +15.3 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,264 | 1,546 | +7.8 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,919 | 3,267 | +5.7 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,593 | 1,096 | +5.2 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,773 | 961 | +32.2 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,743 | 1,463 | +21.6 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,492 | 604 | +17.6 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 13,484 | 1,587 | +36.2 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,425 | 2,730 | +34.8 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,295 | 2,680 | +26.1 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,226 | 1,102 | +17.5 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,652 | 901 | +26.7 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,645 | 1,446 | +23.4 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 11,537 | 1,590 | +98.7 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,475 | 1,527 | +125.6 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,472 | 3,033 | +70.4 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,452 | 719 | +40.0 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,287 | 901 | +33.0 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,132 | 5,641 | +4.1 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,041 | 1,805 | +1.3 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,021 | 981 | +70.0 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,826 | 979 | +37.9 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,333 | 7,670 | +3.7 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,298 | 826 | +10.8 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,060 | 1,108 | +7.1 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 9,931 | 1,642 | +35.9 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 9,914 | 706 | +64.4 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,739 | 325 | +27.1 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,721 | 729 | +3.5 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,614 | 705 | +41.6 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,955 | 910 | +2.9 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,716 | 847 | — |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,432 | 648 | +0.9 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,405 | 1,054 | +29.4 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,203 | 715 | +23.3 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,121 | 195 | +0.8 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,598 | 1,140 | +0.5 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,122 | 565 | +13.1 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,106 | 588 | +8.5 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,021 | 607 | +46.7 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,812 | 376 | +9.0 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,776 | 454 | +3.3 |
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
