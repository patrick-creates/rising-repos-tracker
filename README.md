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

> Auto-updated daily — last refreshed 2026-11-10

| Metric | Value |
|---|---|
| Repos tracked | **217** |
| Total stars | **11,550,301** |
| Total forks | **1,680,426** |
| Fastest growing | **rea** (+10846.4/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 448,775 | +10846.4 |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 68,334 | +1899.4 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 106,828 | +1353.3 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 188,125 | +993.7 |
| 5 | [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | 21,074 | +981.0 |

### 🆕 Recently added

- [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) — added 2026-11-09 — Open-source gym & body-weight tracker, now in the App Store (iPhone + Apple Watch) and as an Android APK. Plan routines, log workouts, see which muscles are trained, import from Strong/Hevy/FitNotes. Self-host it or use it on the phone alone.
- [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) — added 2026-11-09 — Computer use CLI for AI agents
- [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) — added 2026-11-09 — Eleven free Claude skills that clone any app: reverse-engineer it, rebuild it, test it for bugs, then fix what its users hate. Free, MIT.
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
| [morluto/rea](https://github.com/morluto/rea) | 448,775 | 110,590 | +10846.4 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 394,288 | 82,859 | +126.1 |
| [obra/superpowers](https://github.com/obra/superpowers) | 315,448 | 28,058 | +566.5 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 300,516 | 44,366 | +660.0 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 262,271 | 58,514 | +631.1 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 194,726 | 14,680 | +396.2 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 188,125 | 10,444 | +993.7 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,976 | 45,878 | +20.4 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 176,815 | 22,553 | +80.9 |
| [langgenius/dify](https://github.com/langgenius/dify) | 160,836 | 25,436 | +108.3 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 158,293 | 23,009 | +118.2 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 153,272 | 10,071 | +450.2 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,301 | 25,105 | +70.0 |
| [github/spec-kit](https://github.com/github/spec-kit) | 149,131 | 13,391 | +283.3 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 147,622 | 15,619 | +385.2 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 145,370 | 13,916 | +459.2 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 123,288 | 66,232 | +69.3 |
| [stablyai/orca](https://github.com/stablyai/orca) | 121,049 | 7,667 | +854.1 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 118,795 | 6,910 | +325.5 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 115,644 | 10,040 | +222.5 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 112,799 | 7,590 | +508.6 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 112,799 | 18,718 | +381.5 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 110,815 | 9,918 | +563.5 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 107,259 | 6,371 | +901.9 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 106,970 | 12,168 | +356.8 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 106,828 | 11,841 | +1353.3 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 103,794 | 13,487 | +224.3 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 96,673 | 24,636 | +92.8 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 95,281 | 6,499 | +484.7 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 93,114 | 12,440 | +109.0 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 90,440 | 14,023 | +205.0 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,942 | 58,565 | +5.1 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 86,603 | 10,806 | +204.2 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 86,149 | 13,082 | +582.7 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 86,068 | 5,514 | +207.3 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 84,769 | 16,196 | +42.9 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 82,046 | 7,583 | +364.4 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 81,618 | 15,007 | +206.7 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 81,403 | 9,583 | +208.7 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 80,204 | 12,830 | +108.7 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,962 | 8,775 | +29.9 |
| [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) | 79,319 | 10,600 | +384.1 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 79,288 | 6,200 | +345.4 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 79,278 | 7,382 | +84.0 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 79,186 | 9,636 | +106.8 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 78,222 | 13,908 | +320.1 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 77,030 | 13,054 | +19.4 |
| [usestrix/strix](https://github.com/usestrix/strix) | 74,793 | 8,462 | +303.0 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 74,513 | 5,106 | +146.2 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 71,120 | 11,472 | +174.6 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 70,995 | 22,935 | +411.8 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70,817 | 5,849 | +71.0 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 69,473 | 56,608 | +181.3 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 68,921 | 6,862 | +87.6 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 68,334 | 1,842 | +1899.4 |
| [blader/humanizer](https://github.com/blader/humanizer) | 67,377 | 5,295 | +345.7 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 67,193 | 5,885 | +222.7 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 67,022 | 13,457 | +4.4 |
| [tw93/Pake](https://github.com/tw93/Pake) | 63,075 | 12,955 | +81.2 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 63,041 | 13,154 | +88.9 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,500 | 7,661 | +46.0 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 60,360 | 7,581 | +193.4 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 59,533 | 8,693 | +173.4 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 58,154 | 8,923 | +138.5 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 57,669 | 4,939 | +77.1 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 57,646 | 6,675 | +439.8 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 56,691 | 4,973 | +206.5 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 56,315 | 4,284 | +156.8 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,564 | 25,101 | +15.1 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 55,063 | 6,296 | +29.8 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 55,056 | 4,579 | +86.2 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 52,005 | 10,606 | +88.6 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 51,690 | 12,599 | +96.6 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 51,490 | 3,641 | +108.7 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 50,047 | 5,152 | +28.9 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,990 | 8,724 | +41.5 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 49,898 | 4,035 | +295.3 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 49,770 | 3,669 | +313.3 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 49,466 | 7,175 | +63.8 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 48,449 | 4,013 | +207.6 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,862 | 10,421 | +18.8 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,932 | 9,671 | +56.0 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 46,710 | 4,863 | +109.3 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 46,600 | 3,475 | +80.3 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 45,749 | 2,766 | +44.9 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 44,749 | 7,711 | +66.2 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 44,500 | 1,788 | +394.9 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,623 | 4,213 | +49.0 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,383 | 4,476 | +38.1 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,291 | 4,323 | +13.0 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 41,934 | 3,433 | +107.1 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,171 | 3,569 | +38.5 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 41,000 | 5,327 | +42.6 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 40,732 | 3,637 | +35.0 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 40,195 | 4,600 | +104.7 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39,853 | 6,229 | +3.8 |
| [google/langextract](https://github.com/google/langextract) | 39,297 | 2,751 | +16.2 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 38,947 | 5,797 | +148.3 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 38,873 | 2,513 | +73.3 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 38,512 | 4,381 | +173.9 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,345 | 3,433 | +25.6 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 37,993 | 6,167 | +173.5 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 37,581 | 3,271 | +133.8 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 37,529 | 3,973 | +162.8 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37,393 | 6,887 | +18.8 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 37,094 | 5,121 | +140.6 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 36,146 | 2,507 | +107.2 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35,870 | 4,375 | +125.9 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,314 | 9,126 | +38.1 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,186 | 3,576 | +42.2 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 33,781 | 2,312 | +110.2 |
| [yetone/magpie](https://github.com/yetone/magpie) | 33,708 | 2,993 | +769.1 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,308 | 5,003 | +10.1 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 33,191 | 2,270 | +195.2 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,684 | 2,973 | +95.7 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,223 | 1,990 | +34.0 |
| [decolua/9router](https://github.com/decolua/9router) | 32,198 | 6,292 | +98.8 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 31,175 | 4,401 | +45.3 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 30,998 | 3,038 | +46.4 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 30,737 | 2,999 | +183.5 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,254 | 2,681 | +54.4 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 29,892 | 2,725 | +170.3 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29,654 | 2,641 | +75.0 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,154 | 1,335 | +28.8 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 28,973 | 3,358 | +276.1 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,748 | 2,643 | +36.6 |
| [voideditor/void](https://github.com/voideditor/void) | 28,711 | 2,659 | — |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,642 | 3,056 | +11.9 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 27,836 | 3,605 | +192.1 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 27,131 | 3,761 | +148.7 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 26,955 | 3,063 | +120.6 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26,568 | 4,075 | +7.1 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25,625 | 1,124 | +7.3 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,427 | 3,158 | +45.4 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 25,162 | 2,204 | +140.7 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 24,145 | 2,776 | +112.3 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,503 | 2,117 | +46.4 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 23,103 | 2,217 | +56.0 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 22,973 | 810 | +36.9 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,432 | 1,699 | +2.8 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 22,147 | 2,324 | +41.5 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 21,998 | 3,531 | +46.8 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 21,865 | 2,896 | +7.9 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,813 | 3,135 | +5.6 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21,671 | 2,519 | +111.4 |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | 21,074 | 1,564 | +981.0 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | 20,755 | 2,792 | +239.0 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,393 | 1,966 | +23.3 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 20,065 | 8,729 | +60.3 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 19,870 | 1,792 | +47.8 |
| [tanweai/pua](https://github.com/tanweai/pua) | 19,825 | 1,199 | +10.7 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,788 | 2,517 | +26.4 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,471 | 2,825 | +32.9 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 18,998 | 1,880 | +26.3 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 18,970 | 1,537 | +46.2 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 18,935 | 1,720 | +11.0 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 18,736 | 1,375 | +201.8 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 18,244 | 2,282 | +2.8 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 17,892 | 621 | +204.9 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,530 | 3,952 | +15.5 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,275 | 1,751 | +17.3 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 17,077 | 2,510 | +49.6 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 17,057 | 2,508 | +19.6 |
| [cft0808/edict](https://github.com/cft0808/edict) | 17,052 | 1,765 | +6.7 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 16,172 | 1,448 | +29.9 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 15,979 | 1,799 | +6.1 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,373 | 8,617 | +15.1 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 15,294 | 1,554 | +7.6 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,923 | 3,265 | +5.4 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 14,863 | 1,711 | +44.7 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 14,611 | 1,099 | +5.0 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 13,867 | 972 | +31.0 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) | 13,779 | 1,479 | +20.6 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,673 | 2,786 | +34.6 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | 13,569 | 609 | +17.1 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,489 | 2,737 | +26.0 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 12,801 | 1,876 | +17.9 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,342 | 1,117 | +17.3 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 12,089 | 1,679 | +94.0 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,967 | 3,274 | +68.8 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 11,845 | 1,641 | +103.7 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,754 | 907 | +25.9 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | 11,739 | 1,458 | +22.7 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,438 | 723 | +36.1 |
| [openai/codex-security](https://github.com/openai/codex-security) | 11,353 | 913 | +31.0 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,179 | 996 | +63.0 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 11,149 | 5,633 | +4.0 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) | 11,053 | 1,805 | +1.4 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,879 | 980 | +35.8 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,417 | 1,718 | +49.1 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 10,341 | 7,654 | +3.5 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 10,327 | 825 | +10.3 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10,282 | 744 | +61.0 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) | 10,105 | 1,107 | +6.8 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 9,807 | 329 | +25.9 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,729 | 716 | +39.3 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,721 | 730 | +3.4 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 9,710 | 1,209 | +90.3 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8,923 | 911 | +2.5 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | 8,737 | 849 | — |
| [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) | 8,717 | 1,571 | +134.0 |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,715 | 1,081 | +30.5 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | 8,450 | 648 | +1.0 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,312 | 731 | +22.1 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) | 8,123 | 197 | +0.8 |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | 8,069 | 505 | +34.0 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) | 7,604 | 1,137 | +0.5 |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,190 | 627 | +33.1 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 7,152 | 569 | +11.6 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) | 7,125 | 591 | +8.1 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 6,832 | 378 | +8.5 |
| [steipete/summarize](https://github.com/steipete/summarize) | 6,793 | 453 | +3.2 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) | 6,594 | 249 | +4.0 |
| [microsoft/fara](https://github.com/microsoft/fara) | 6,253 | 605 | +2.1 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | 6,070 | 420 | — |
| [re4/LibreCode](https://github.com/re4/LibreCode) | 86 | 4 | — |
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
