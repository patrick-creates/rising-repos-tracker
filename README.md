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
![Screenshot](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/screenshot.yml?label=screenshot&logo=github-actions&logoColor=white)
![License](https://img.shields.io/github/license/patrick-creates/rising-repos-tracker)

**[→ View Live Dashboard](https://patrick-creates.github.io/rising-repos-tracker/)** · **[→ Weekly reports](./reports/README.md)**

Built and maintained by [Telosignal](https://www.telosignal.com/).

![Dashboard preview](./preview.png)

<!-- AUTOGEN-STATS-START -->
## 📊 Current snapshot

> Auto-updated daily — last refreshed 2026-11-25

| Metric | Value |
|---|---|
| Repos tracked | **234** (46 stalled 💤) |
| Total stars | **12,314,464** |
| Total forks | **1,774,118** |
| Fastest growing | **rea** ⚠️ (+3004.2/day) |

### 🔥 Top 5 by velocity

> ⚠️ unusually fast growth (1,000+ stars/day over its lifetime and the last week): check before trusting. 💤 stalled repos are left out.

| # | Repo | Stars | Stars/day (30d) |
|---|---|---:|---:|
| 1 | [morluto/rea](https://github.com/morluto/rea) ⚠️ | 478,061 | +3004.2 |
| 2 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | 79,008 | +1859.6 |
| 3 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) ⚠️ | 86,959 | +1431.2 |
| 4 | [stablyai/orca](https://github.com/stablyai/orca) | 137,534 | +1035.9 |
| 5 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 118,202 | +1012.3 |

### 🆕 Recently added

- [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) — added 2026-11-23 — A toolbox of film styles made in code for Claude Code: 99 ready to use, and your own. Each style is a style prompt plus a demo film made entirely in code by Claude Opus 5.5, with no video model. By Lemomo. · 一套用代码做片的风格工具箱：99 种现成风格，也能做出你自己的
- [haydenschmitty/floorplan](https://github.com/haydenschmitty/floorplan) — added 2026-11-23 — See how your app actually fits together. An interactive, plain-English map of your codebase, drawn by Claude or Codex.
- [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) — added 2026-11-23 — Experience-Driven Black-Box Cost Control for Coding Agents
<!-- AUTOGEN-STATS-END -->

<!-- AUTOGEN-DIAGRAM-START -->
## 🔄 How it works

```mermaid
graph LR
    repos[("repos.json")]:::data
    history[("data/[owner]/[repo]/<br/>history.json")]:::data
    readme[("README.md")]:::data
    reports[("reports/<br/>YYYY-Www.md")]:::data
    preview[("preview.png")]:::data
    site[("dashboard.json")]:::data
    dashboard["index.html<br/>(GitHub Pages)"]:::output
    collect_yml["Collect Repo Stats<br/><i>Daily 05:17 UTC</i>"]:::workflow
    discover_yml["Discover Trending Repos<br/><i>Monday 04:43 UTC</i>"]:::workflow
    screenshot_yml["Screenshot Dashboard<br/><i>after collect repo stats</i>"]:::workflow
    repos --> collect_yml
    collect_yml --> history
    collect_yml --> readme
    collect_yml --> site
    collect_yml -->|Mondays| reports
    repos --> discover_yml
    discover_yml -.->|appends| repos
    dashboard --> screenshot_yml
    screenshot_yml --> preview
    site --> dashboard
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

> All workflows commit results directly back to the repo. Schedules are best-effort — GitHub Actions cron can drift by a few minutes.
<!-- AUTOGEN-WORKFLOWS-END -->

<!-- AUTOGEN-REPOS-START -->
## 📋 All tracked repos

| Repo | Stars | Forks | Stars/day (30d) |
|---|---:|---:|---:|
| [morluto/rea](https://github.com/morluto/rea) ⚠️ | 478,061 | 116,301 | +3004.2 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 395,189 | 82,970 | +69.3 |
| [obra/superpowers](https://github.com/obra/superpowers) | 326,364 | 28,961 | +701.8 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 310,543 | 45,630 | +711.6 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 266,039 | 60,316 | +294.0 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 198,541 | 11,250 | +732.4 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 198,410 | 15,054 | +204.4 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 188,182 | 45,821 | +14.2 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 178,499 | 22,752 | +129.7 |
| [langgenius/dify](https://github.com/langgenius/dify) | 161,889 | 25,555 | +76.9 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 159,530 | 23,147 | +91.2 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 157,114 | 10,253 | +275.7 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 154,061 | 16,226 | +447.7 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 153,232 | 14,733 | +584.8 |
| [github/spec-kit](https://github.com/github/spec-kit) | 151,356 | 13,606 | +280.1 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,979 | 25,164 | +49.8 |
| [stablyai/orca](https://github.com/stablyai/orca) | 137,534 | 8,804 | +1035.9 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 124,176 | 66,953 | +66.0 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 122,776 | 7,167 | +253.9 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 121,416 | 8,152 | +623.2 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 119,698 | 10,403 | +548.2 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 118,202 | 13,187 | +1012.3 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 116,958 | 19,421 | +316.2 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 116,686 | 6,973 | +723.6 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 114,657 | 10,299 | +393.9 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 109,446 | 12,368 | +179.8 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 105,135 | 13,639 | +182.4 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 99,823 | 6,829 | +343.7 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 97,551 | 25,277 | +65.6 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 94,318 | 12,634 | +81.2 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 91,171 | 14,162 | +53.7 |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | 90,259 | 14,035 | +298.8 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 89,976 | 8,381 | +579.5 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) 💤 | 88,982 | 58,428 | +2.9 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 87,940 | 10,981 | +108.8 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 87,799 | 5,635 | +106.9 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) ⚠️ | 86,959 | 2,461 | +1431.2 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 86,136 | 16,365 | +87.9 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 84,768 | 15,500 | +244.7 |
| [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) | 83,267 | 11,350 | +374.4 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 82,405 | 9,709 | +100.6 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 80,888 | 12,905 | +54.6 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 80,841 | 6,342 | +99.0 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 80,364 | 8,788 | +27.5 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 80,281 | 9,873 | +76.9 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 80,228 | 7,470 | +54.9 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 80,112 | 14,317 | +201.8 |
| [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | 79,008 | 13,881 | +1859.6 |
| [usestrix/strix](https://github.com/usestrix/strix) | 77,538 | 8,831 | +184.7 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 77,488 | 13,083 | +22.2 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 75,709 | 5,179 | +89.7 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 74,857 | 6,594 | +311.2 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 74,537 | 58,578 | +248.6 |
| [blader/humanizer](https://github.com/blader/humanizer) | 73,483 | 5,764 | +422.8 |
| [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | 73,443 | 23,477 | +248.1 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 72,631 | 11,698 | +79.7 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 71,108 | 5,839 | +25.5 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 69,401 | 6,885 | +42.3 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) 💤 | 67,105 | 13,432 | +5.7 |
| [tw93/Pake](https://github.com/tw93/Pake) | 64,024 | 13,060 | +57.1 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 63,897 | 13,559 | +61.4 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 62,580 | 9,132 | +199.5 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 61,299 | 7,739 | +90.9 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 60,693 | 7,659 | +31.6 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 59,929 | 7,035 | +133.0 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 59,451 | 9,130 | +105.6 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 59,320 | 4,886 | +171.2 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 58,780 | 5,017 | +73.6 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 58,540 | 4,464 | +152.6 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 58,450 | 5,122 | +125.3 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 56,276 | 4,646 | +265.3 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) 💤 | 55,595 | 25,099 | +2.2 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 55,517 | 6,354 | +27.9 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 53,816 | 11,240 | +76.8 |
| [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills) | 53,733 | 3,829 | +120.3 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 52,814 | 4,264 | +229.7 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 52,520 | 12,843 | +60.1 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 50,319 | 8,766 | +31.9 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 50,310 | 7,299 | +59.8 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 50,255 | 5,191 | +16.6 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 49,161 | 4,090 | +54.9 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 48,178 | 5,040 | +117.3 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 48,069 | 10,447 | +15.5 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 47,517 | 9,800 | +39.2 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 47,494 | 3,672 | +127.8 |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 47,340 | 1,834 | +422.2 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 46,718 | 2,785 | +61.1 |
| [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) | 46,622 | 10,157 | +56.0 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 45,409 | 7,860 | +49.5 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 43,149 | 5,406 | +220.8 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,881 | 4,541 | +38.0 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 42,846 | 4,232 | +16.7 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 42,762 | 3,566 | +63.3 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 42,537 | 4,369 | +13.1 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 41,554 | 5,427 | +37.7 |
| [yetone/magpie](https://github.com/yetone/magpie) | 41,404 | 3,800 | +641.1 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) 💤 | 41,206 | 3,579 | +2.9 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 41,058 | 3,662 | +26.0 |
| [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | 40,879 | 5,369 | +91.0 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) 💤 | 39,890 | 6,229 | +2.2 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 39,866 | 4,616 | +106.9 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 39,771 | 5,912 | +79.0 |
| [google/langextract](https://github.com/google/langextract) | 39,362 | 2,758 | +10.6 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 39,305 | 2,545 | +30.5 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 39,018 | 4,158 | +95.9 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 38,888 | 6,333 | +72.4 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 38,647 | 3,461 | +25.5 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 38,208 | 5,360 | +90.4 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 38,195 | 3,312 | +62.9 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) 💤 | 37,479 | 6,885 | +7.6 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 36,744 | 4,492 | +56.8 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) 💤 | 36,071 | 2,617 | +3.4 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 34,530 | 9,119 | +12.4 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 34,502 | 3,613 | +24.1 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 34,472 | 2,376 | +70.7 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 33,613 | 5,049 | +19.1 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 33,573 | 2,302 | +36.1 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 32,946 | 2,997 | +18.5 |
| [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | 32,902 | 2,514 | +45.0 |
| [decolua/9router](https://github.com/decolua/9router) | 32,839 | 6,427 | +46.9 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 32,474 | 2,017 | +19.3 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 32,335 | 3,949 | +354.7 |
| [ccch1mneyyy/dsh-Go](https://github.com/ccch1mneyyy/dsh-Go) | 31,824 | 1,542 | +816.6 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 31,580 | 4,468 | +32.6 |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | 31,482 | 3,725 | +190.5 |
| [t8y2/dbx](https://github.com/t8y2/dbx) | 31,421 | 2,855 | +120.7 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 31,280 | 3,064 | +20.7 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 31,174 | 3,061 | +40.3 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 30,585 | 2,724 | +22.9 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) 💤 | 29,755 | 2,656 | +6.3 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 29,299 | 1,350 | +13.7 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 28,962 | 2,707 | +15.2 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | 28,877 | 4,098 | +128.6 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28,814 | 3,072 | +11.8 |
| [voideditor/void](https://github.com/voideditor/void) 💤 | 28,699 | 2,659 | — |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 28,601 | 3,200 | +122.2 |
| [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | 28,230 | 2,333 | +12.0 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 27,627 | 2,471 | +198.2 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) 💤 | 26,664 | 4,064 | +5.9 |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | 26,612 | 2,003 | +407.4 |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 26,095 | 3,014 | +148.9 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,746 | 3,208 | +20.9 |
| [toon-format/toon](https://github.com/toon-format/toon) 💤 | 25,657 | 1,125 | +3.1 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | 24,041 | 3,235 | +220.3 |
| [jundot/omlx](https://github.com/jundot/omlx) | 23,944 | 2,214 | +29.2 |
| [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | 23,431 | 831 | +21.1 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 23,335 | 2,255 | +17.3 |
| [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills) | 22,538 | 2,364 | +29.2 |
| [winfunc/opcode](https://github.com/winfunc/opcode) 💤 | 22,464 | 1,706 | +1.5 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 22,322 | 3,570 | +23.8 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 22,039 | 2,583 | +27.5 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) 💤 | 21,952 | 2,898 | +5.9 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) 💤 | 21,823 | 3,141 | +2.0 |
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 21,467 | 1,332 | +191.9 |
| [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 21,385 | 715 | +146.6 |
| [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) | 20,977 | 2,701 | +396.0 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 20,516 | 1,980 | +11.2 |
| [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | 20,461 | 1,859 | +36.5 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 19,995 | 2,542 | +13.6 |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 19,984 | 8,656 | +75.1 |
| [tanweai/pua](https://github.com/tanweai/pua) 💤 | 19,893 | 1,208 | +4.7 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 19,877 | 1,592 | +59.4 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 19,626 | 2,863 | +14.5 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 19,240 | 1,902 | +20.5 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) 💤 | 19,000 | 1,729 | +6.2 |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | 18,746 | 1,541 | +11.0 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) 💤 | 18,278 | 2,288 | +1.7 |
| [opensandbox-group/OpenSandbox](https://github.com/opensandbox-group/OpenSandbox) | 17,917 | 1,731 | +44.0 |
| [tradecatlabs/vibe-coding-cn](https://github.com/tradecatlabs/vibe-coding-cn) | 17,751 | 1,791 | +36.1 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 17,608 | 4,004 | +15.6 |
| [Evolink-AI/awesome-gpt-image-2-API-Prompts](https://github.com/Evolink-AI/awesome-gpt-image-2-API-Prompts) | 17,432 | 1,758 | +0.5 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | 17,428 | 1,800 | +12.2 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 17,328 | 2,553 | +25.0 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 17,252 | 2,545 | +12.0 |
| [cft0808/edict](https://github.com/cft0808/edict) 💤 | 17,130 | 1,775 | +3.7 |
| [ParadevAI/Paradev](https://github.com/ParadevAI/Paradev) | 16,646 | 1,501 | +36.0 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) 💤 | 16,084 | 1,800 | +6.9 |
| [miuuyy/codex-chatgpt-web](https://github.com/miuuyy/codex-chatgpt-web) | 15,910 | 1,240 | +21.0 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 15,803 | 1,785 | +83.7 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 15,555 | 8,610 | +12.8 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 15,409 | 2,024 | +119.6 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) 💤 | 15,363 | 1,570 | +4.6 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) 💤 | 14,932 | 3,263 | +0.8 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) 💤 | 14,639 | 1,105 | +2.5 |
| [openai/codex-security](https://github.com/openai/codex-security) | 14,354 | 1,140 | +104.9 |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 14,002 | 984 | +12.4 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13,984 | 2,836 | +28.4 |
| [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 13,900 | 2,859 | +26.7 |
| [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) 💤 | 13,797 | 1,479 | +2.4 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) 💤 | 13,693 | 614 | +9.4 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 12,934 | 1,795 | +67.9 |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 12,507 | 1,133 | +13.4 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | 12,488 | 1,789 | +46.0 |
| [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko) | 11,932 | 3,218 | +81.6 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11,909 | 911 | +11.0 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) 💤 | 11,816 | 1,477 | +8.4 |
| [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) | 11,485 | 1,032 | +24.1 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) 💤 | 11,356 | 724 | — |
| [aden-hive/hive](https://github.com/aden-hive/hive) 💤 | 11,176 | 5,633 | +1.8 |
| [ValueCell-ai/valuecell](https://github.com/ValueCell-ai/valuecell) 💤 | 11,068 | 1,807 | +1.2 |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | 10,978 | 986 | +20.8 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | 10,774 | 1,793 | +36.5 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10,717 | 785 | +37.2 |
| [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) | 10,631 | 1,953 | +128.0 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | 10,622 | 1,359 | +71.0 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) 💤 | 10,382 | 828 | +3.8 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) 💤 | 10,345 | 7,636 | +0.5 |
| [YouMind-OpenLab/awesome-gpt-image-2](https://github.com/YouMind-OpenLab/awesome-gpt-image-2) | 10,335 | 903 | +3.5 |
| [Companion-Inc/feynman](https://github.com/Companion-Inc/feynman) 💤 | 10,155 | 1,115 | +4.2 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | 9,916 | 725 | +16.5 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) 💤 | 9,903 | 339 | +7.1 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) 💤 | 9,739 | 726 | +0.8 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) 💤 | 8,928 | 912 | — |
| [WenyuChiou/awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) | 8,882 | 1,094 | +29.3 |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) 💤 | 8,750 | 850 | +1.6 |
| [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI) | 8,519 | 742 | +15.7 |
| [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) 💤 | 8,455 | 648 | +0.9 |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | 8,442 | 541 | +25.4 |
| [OpenCoworkAI/open-codesign](https://github.com/OpenCoworkAI/open-codesign) | 8,256 | 880 | +3.0 |
| [mmulet/term.everything](https://github.com/mmulet/term.everything) 💤 | 8,127 | 198 | +0.4 |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | 8,107 | 575 | +51.0 |
| [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) 💤 | 7,587 | 1,136 | — |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | 7,364 | 637 | +22.3 |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) 💤 | 7,211 | 569 | +4.1 |
| [TokenRhythm/opensquilla](https://github.com/TokenRhythm/opensquilla) 💤 | 7,164 | 597 | +2.7 |
| [steipete/summarize](https://github.com/steipete/summarize) 💤 | 6,877 | 461 | +4.3 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) 💤 | 6,860 | 380 | +2.3 |
| [haydenschmitty/floorplan](https://github.com/haydenschmitty/floorplan) | 6,811 | 619 | +209.5 |
| [Arthur-Ficial/apfel](https://github.com/Arthur-Ficial/apfel) 💤 | 6,624 | 253 | +3.3 |
| [EverMind-AI/Raven](https://github.com/EverMind-AI/Raven) | 6,321 | 280 | +8.5 |
| [microsoft/fara](https://github.com/microsoft/fara) 💤 | 6,261 | 611 | +1.3 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) 💤 | 6,065 | 419 | — |
| [sandbox-quantum/switch](https://github.com/sandbox-quantum/switch) | 4,783 | 375 | +43.0 |
| [re4/LibreCode](https://github.com/re4/LibreCode) 💤 | 86 | 4 | — |
<!-- AUTOGEN-REPOS-END -->

---

## What it does

- Collects daily snapshots of stars, forks, watchers and open issues for every tracked repo
- Discovers new trending repos automatically every Monday using the GitHub Search API
- Shows each repo's GitHub description and topics in the dashboard, refreshed with every daily snapshot
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

### Repo descriptions

Clicking a repo in the dashboard shows its GitHub description and topics, taken from the daily snapshot. Until 2026 the tracker also generated AI summaries with GitHub Models; GitHub retired that service on 2026-07-30. The summaries generated before then stay in `data/<owner>/<repo>/summary.json` and are shown below the description, dated; no new ones are generated.

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
- **Chart.js** — star growth visualization
- **Mermaid** — architecture diagram (rendered by GitHub)
- Collecting, reports and README use Node built-ins only; the screenshot workflow installs Puppeteer. No build step, no database

## License

MIT
