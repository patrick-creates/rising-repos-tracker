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

> Auto-updated daily — last refreshed 2026-10-29

| Metric | Value |
|---|---|
| Repos tracked | **210** |
| Total stars | **11,029,274** |
| Total forks | **1,620,320** |
| Fastest growing | **rea** (+15942.8/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 405,257 | +15942.8 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 50,140 | +2359.2 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 93,631 | +1411.8 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 179,655 | +1020.4 |
| 5 | [yetone/magpie](https://github.com/yetone/magpie) | 25,134 | +987.3 |

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
| [morluto/rea](https://github.com/morluto/rea) | 405,257 | 101,526 | +15942.8 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 393,333 | 82,688 | +129.4 |
| [obra/superpowers](https://github.com/obra/superpowers) | 307,884 | 27,382 | +560.5 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 292,183 | 43,245 | +657.6 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 258,344 | 56,707 | +652.7 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 192,813 | 14,420 | +413.0 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,811 | 45,894 | +20.9 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 179,655 | 9,848 | +1020.4 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 175,016 | 22,336 | +76.0 |
| [langgenius/dify](https://github.com/langgenius/dify) | 159,885 | 25,252 | +110.4 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 157,126 | 22,865 | +119.7 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 149,964 | 9,850 | +462.9 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 148,677 | 24,963 | +71.3 |
| [github/spec-kit](https://github.com/github/spec-kit) | 143,804 | 12,877 | +271.9 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 142,308 | 15,056 | +381.2 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 138,222 | 13,173 | +441.7 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 122,390 | 65,154 | +68.9 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 115,928 | 6,703 | +331.8 |
| [stablyai/orca](https://github.com/stablyai/orca) | 109,645 | 6,926 | +844.0 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 108,450 | 17,963 | +404.4 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 105,960 | 9,397 | +576.8 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 105,033 | 7,105 | +497.5 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 104,780 | 11,959 | +369.5 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 104,186 | 9,190 | +170.4 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 101,453 | 13,184 | +226.5 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 95,836 | 24,126 | +94.4 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 93,631 | 10,353 | +1411.8 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 92,177 | 12,256 | +111.3 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 91,250 | 6,207 | +559.0 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 89,743 | 13,820 | +215.7 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,910 | 58,672 | +5.3 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 85,238 | 10,597 | +210.8 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 84,939 | 5,410 | +215.6 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 83,580 | 16,008 | +38.9 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 82,398 | 12,166 | +610.8 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 80,056 | 9,393 | +256.9 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,644 | 8,739 | +30.1 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 79,491 | 12,720 | +112.3 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 78,743 | 7,310 | +86.8 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 78,527 | 14,493 | +202.9 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 78,236 | 9,411 | +108.8 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 78,209 | 6,091 | +368.0 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76,864 | 13,014 | +19.8 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 75,468 | 13,272 | +327.4 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 75,134 | 6,824 | +346.7 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 73,320 | 5,020 | +149.6 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 72,867 | 9,514 | +369.0 |
| [usestrix/strix](https://github.com/usestrix/strix) | 72,664 | 8,153 | +313.0 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,457 | 5,811 | +74.0 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 70,390 | 11,393 | +183.0 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,297 | 6,785 | +90.2 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 67,342 | 21,350 | +423.7 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 67,246 | 55,731 | +180.9 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,953 | 13,465 | +4.3 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 65,832 | 5,728 | +231.9 |
| [tw93/Pake](https://github.com/tw93/Pake) | 62,541 | 12,873 | +83.9 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 62,296 | 12,813 | +90.9 |
| [blader/humanizer](https://github.com/blader/humanizer) | 62,152 | 4,917 | +310.9 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 59,775 | 7,593 | +45.0 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 58,964 | 7,405 | +199.6 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 57,217 | 8,438 | +171.9 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 56,855 | 8,704 | +140.8 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 56,808 | 4,886 | +77.5 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 56,492 | 6,492 | +480.6 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,533 | 25,086 | +16.1 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 55,214 | 4,861 | +225.7 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54,755 | 6,251 | +30.1 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 54,478 | 4,161 | +157.3 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 54,403 | 5,898 | +88.5 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 51,577 | 10,533 | +93.3 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 50,953 | 12,349 | +99.3 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 50,370 | 3,559 | +109.9 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 50,140 | 1,370 | +2359.2 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49,811 | 5,109 | +29.6 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,615 | 8,696 | +42.3 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 48,919 | 3,576 | +338.5 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 48,705 | 7,073 | +63.9 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 47,764 | 3,929 | +222.4 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,664 | 10,409 | +19.0 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 46,484 | 3,719 | +296.4 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,451 | 9,548 | +57.2 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 45,202 | 4,717 | +107.9 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 45,037 | 2,753 | +43.8 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 44,658 | 3,276 | +73.8 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,086 | 7,580 | +67.2 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,408 | 4,197 | +56.1 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,178 | 4,295 | +13.3 |
| [wshobson/agents](https://github.com/wshobson/agents) | 41,972 | 4,441 | +38.4 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,140 | 3,566 | +41.2 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 41,113 | 3,333 | +110.4 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 40,547 | 5,230 | +42.9 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,388 | 3,609 | +35.4 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,828 | 6,233 | +4.0 |
| [google/langextract](https://github.com/google/langextract) | 39,190 | 2,743 | +16.8 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,464 | 2,481 | +76.4 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,019 | 3,410 | +25.5 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 37,866 | 5,557 | +153.5 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 37,451 | 1,730 | +366.0 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,273 | 6,891 | +19.5 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 37,091 | 5,986 | +183.2 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 37,040 | 4,210 | +91.4 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 37,032 | 4,156 | +178.6 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 36,820 | 3,235 | +140.0 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 36,464 | 3,866 | +176.3 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,988 | 2,492 | +115.1 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 35,868 | 4,870 | +143.9 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,210 | 4,292 | +132.5 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,206 | 9,130 | +40.5 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33,884 | 3,525 | +43.6 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,065 | 4,985 | +9.3 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 32,780 | 2,266 | +112.6 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 32,748 | 2,224 | +211.7 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,468 | 2,959 | +102.6 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 31,983 | 1,963 | +35.1 |
| [decolua/9router](https://github.com/decolua/9router) | 31,622 | 6,144 | +103.3 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,739 | 3,022 | +48.5 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 30,726 | 4,320 | +46.0 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,090 | 2,921 | +197.9 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 29,995 | 2,650 | +57.1 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,595 | 2,640 | +81.2 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 28,995 | 1,331 | +30.1 |
| [voideditor/void](https://github.com/voideditor/void) | 28,728 | 2,658 | — |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,595 | 2,600 | +39.3 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,500 | 3,045 | +11.9 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 28,151 | 2,552 | +173.6 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,500 | 4,062 | +7.3 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 26,393 | 3,029 | +299.8 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,574 | 1,126 | +7.5 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 25,561 | 3,487 | +153.4 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 25,479 | 2,900 | +120.1 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,190 | 3,134 | +49.3 |
| [yetone/magpie](https://github.com/yetone/magpie) | 25,134 | 2,045 | +987.3 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 23,684 | 3,179 | +151.1 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 23,235 | 2,010 | +135.4 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,142 | 2,074 | +47.9 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 22,881 | 2,169 | +59.5 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,834 | 805 | +39.4 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,426 | 1,707 | +2.9 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 22,300 | 2,510 | +108.0 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,790 | 2,884 | +8.1 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,774 | 3,133 | +5.8 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 21,734 | 2,289 | +42.3 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,680 | 3,485 | +48.6 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,295 | 2,471 | +120.3 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,244 | 1,957 | +24.3 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,777 | 1,202 | +11.3 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,635 | 2,506 | +27.7 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,493 | 1,748 | +50.3 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,254 | 2,783 | +34.2 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,839 | 1,699 | +11.2 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,691 | 1,849 | +26.3 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 18,660 | 8,007 | +31.9 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 18,275 | 1,498 | +45.1 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,232 | 2,287 | +3.0 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 17,462 | 1,315 | +584.3 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,182 | 3,713 | +14.3 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,105 | 1,720 | +17.7 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,025 | 1,765 | +7.1 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 16,947 | 584 | +238.5 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,936 | 2,487 | +53.6 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 16,646 | 2,439 | +18.3 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,902 | 1,789 | +6.1 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 15,709 | 1,404 | +29.1 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,247 | 1,545 | +7.9 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,223 | 8,606 | +15.5 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,908 | 3,270 | +5.8 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,573 | 1,093 | +5.2 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,735 | 1,454 | +22.2 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,699 | 958 | +32.7 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,452 | 597 | +17.8 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 13,381 | 1,579 | +36.5 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,275 | 2,695 | +34.7 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,169 | 2,666 | +25.9 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,170 | 1,100 | +17.6 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,608 | 893 | +27.3 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,600 | 1,438 | +23.8 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,437 | 719 | +42.0 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,293 | 1,479 | +144.5 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 11,274 | 1,565 | +102.2 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,252 | 893 | +34.1 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,133 | 5,643 | +4.3 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,036 | 1,804 | +1.3 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 10,888 | 969 | +73.3 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,754 | 957 | +38.6 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 10,432 | 2,534 | +45.9 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,327 | 7,680 | +3.8 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,285 | 827 | +11.0 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,038 | 1,108 | +7.3 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 9,775 | 1,610 | +31.7 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 9,768 | 699 | +68.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,718 | 729 | +3.6 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,712 | 323 | +27.8 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,458 | 686 | +41.8 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,944 | 909 | +2.9 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,707 | 846 | — |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,428 | 648 | +0.9 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,122 | 195 | +0.8 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,078 | 701 | +22.7 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,067 | 1,038 | +25.7 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,601 | 1,139 | +0.6 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,111 | 563 | +14.2 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,092 | 585 | +8.7 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 6,937 | 602 | +81.0 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,803 | 375 | +9.3 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,764 | 453 | +3.3 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,539 | 248 | +3.9 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,236 | 606 | +2.2 |
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
