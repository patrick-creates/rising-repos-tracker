# 🚀 Rising Repos Tracker

> Automatically tracks daily GitHub stats (stars, forks, issues, velocity) for rising open source repos.

[![Maintained by Telosignal](https://img.shields.io/badge/Maintained%20by-Telosignal-green)](https://www.telosignal.com/)
![Last updated](https://img.shields.io/github/last-commit/patrick-creates/rising-repos-tracker?label=last+updated&color=238636)
![Repos tracked](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/patrick-creates/rising-repos-tracker/main/repos.json&query=%24.length&label=repos+tracked&color=1f6feb)
![Collect](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/collect.yml?label=collect&logo=github-actions&logoColor=white)
![Discover](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/discover.yml?label=discover&logo=github-actions&logoColor=white)
![Summarize](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/summarize.yml?label=summarize&logo=github-actions&logoColor=white)
![Screenshot](https://img.shields.io/github/actions/workflow/status/patrick-creates/rising-repos-tracker/screenshot.yml?label=screenshot&logo=github-actions&logoColor=white)
![License](https://img.shields.io/github/license/patrick-creates/rising-repos-tracker)

**[→ View Live Dashboard](https://patrick-creates.github.io/rising-repos-tracker/)**

Built and maintained by [Telosignal](https://www.telosignal.com/).

![Dashboard preview](./preview.png)

<!-- AUTOGEN-STATS-START -->
## 📊 Current snapshot

> Auto-updated daily — last refreshed 2026-06-24

| Metric | Value |
|---|---|
| Repos tracked | **121** |
| Total stars | **6,723,765** |
| Total forks | **1,044,209** |
| Fastest growing | **ponytail** (+2694.5/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 53,408 | +2694.5 |
| 2 | [chopratejas/headroom](https://github.com/chopratejas/headroom) | 49,003 | +2315.6 |
| 3 | [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 49,003 | +1550.0 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 201,369 | +1269.6 |
| 5 | [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 20,136 | +1007.0 |

### 🆕 Recently added

- [obra/superpowers](https://github.com/obra/superpowers) — added 2026-06-22 — An agentic skills framework & software development methodology that works.
- [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) — added 2026-06-22 — Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) — added 2026-06-22 — Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 60-95% fewer tokens, same answers. Library, proxy, MCP server.
<!-- AUTOGEN-STATS-END -->

<!-- AUTOGEN-DIAGRAM-START -->
## 🔄 How it works

```mermaid
graph LR
    repos[("repos.json")]:::data
    history[("data/[owner]/[repo]/<br/>history.json")]:::data
    summary[("data/[owner]/[repo]/<br/>summary.json")]:::data
    readme[("README.md")]:::data
    preview[("preview.png")]:::data
    dashboard["index.html<br/>(GitHub Pages)"]:::output
    collect_yml["Collect Repo Stats<br/><i>Daily 05:17 UTC</i>"]:::workflow
    discover_yml["Discover Trending Repos<br/><i>Monday 04:43 UTC</i>"]:::workflow
    screenshot_yml["Screenshot Dashboard<br/><i>after collect repo stats</i>"]:::workflow
    summarize_yml["Summarize Repos<br/><i>after discover trending repos</i>"]:::workflow
    repos --> collect_yml
    collect_yml --> history
    collect_yml --> readme
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 380,206 | 79,627 | +208.0 |
| [obra/superpowers](https://github.com/obra/superpowers) | 237,280 | 21,065 | +851.5 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 220,804 | 33,812 | +946.6 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 220,804 | 33,812 | +952.5 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 201,369 | 35,951 | +1269.6 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,138 | 46,125 | +20.4 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 164,230 | 21,265 | +49.0 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 158,427 | 11,065 | +843.3 |
| [langgenius/dify](https://github.com/langgenius/dify) | 146,392 | 23,023 | +123.0 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 142,815 | 20,552 | +141.0 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 140,062 | 23,222 | +81.6 |
| [github/spec-kit](https://github.com/github/spec-kit) | 115,129 | 10,159 | +411.1 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 112,270 | 60,306 | +36.1 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 107,405 | 7,103 | +901.6 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 95,770 | 10,050 | +425.6 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,298 | 59,524 | +7.1 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 84,015 | 7,251 | +205.6 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 83,692 | 18,387 | +90.7 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 79,015 | 15,486 | +48.0 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 78,192 | 9,939 | +115.1 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 76,342 | 4,323 | +400.8 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 75,936 | 8,317 | +33.4 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 75,307 | 10,067 | +313.8 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 74,357 | 12,583 | +20.2 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 70,315 | 7,930 | +706.5 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 68,177 | 11,094 | +191.9 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 67,239 | 6,033 | +74.0 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,429 | 13,569 | +5.1 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 65,705 | 7,304 | +143.7 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 65,581 | 4,046 | +432.5 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 63,444 | 5,177 | +138.3 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 61,402 | 7,573 | +290.3 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 59,818 | 6,006 | +170.8 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 59,350 | 9,298 | +134.6 |
| [tw93/Pake](https://github.com/tw93/Pake) | 57,167 | 11,373 | +226.7 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 56,328 | 3,935 | +203.8 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 56,257 | 7,282 | +104.2 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 55,464 | 10,956 | +276.2 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 53,966 | 24,592 | +28.8 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 53,408 | 2,672 | +2694.5 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 51,351 | 9,122 | +107.1 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 51,008 | 5,696 | +31.9 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 49,908 | 3,452 | +847.6 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 49,003 | 3,421 | +2315.6 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 49,003 | 3,421 | +1550.0 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 47,724 | 42,670 | +296.2 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 47,168 | 4,123 | +83.1 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 46,643 | 4,643 | +45.5 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 46,211 | 3,834 | +846.3 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,590 | 10,228 | +28.0 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 45,538 | 7,478 | +139.3 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 44,668 | 7,882 | +53.7 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 44,305 | 2,864 | +119.5 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 43,664 | 8,849 | +530.3 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 41,545 | 6,666 | +95.6 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,621 | 4,119 | +16.9 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 39,872 | 9,111 | +150.5 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 39,712 | 8,141 | +74.8 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 39,026 | 3,093 | +971.8 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 38,926 | 3,356 | +141.9 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,545 | 2,652 | +13.0 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 38,253 | 6,320 | +117.0 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 37,662 | 2,673 | +164.3 |
| [wshobson/agents](https://github.com/wshobson/agents) | 37,116 | 4,003 | +39.3 |
| [google/langextract](https://github.com/google/langextract) | 36,949 | 2,551 | +13.1 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 36,878 | 3,337 | +68.5 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 36,101 | 5,903 | +423.4 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 35,630 | 4,400 | +60.8 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 35,605 | 5,960 | +92.5 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 35,246 | 2,437 | +72.0 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 35,196 | 6,669 | +32.9 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 35,142 | 3,141 | +37.6 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 34,788 | 5,694 | +145.7 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 33,499 | 4,042 | +194.7 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,016 | 4,753 | +14.8 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 30,978 | 3,369 | +85.5 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 30,807 | 2,879 | +327.9 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 29,316 | 8,808 | +51.3 |
| [voideditor/void](https://github.com/voideditor/void) | 28,814 | 2,552 | +0.4 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 28,760 | 2,845 | +61.4 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 28,542 | 1,751 | +67.0 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 27,774 | 1,484 | +45.9 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,123 | 2,866 | +18.0 |
| [usestrix/strix](https://github.com/usestrix/strix) | 26,148 | 2,945 | +19.0 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 25,984 | 2,012 | +41.0 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 25,676 | 1,172 | +61.6 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 25,589 | 3,989 | +7.9 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 25,418 | 2,733 | +90.4 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 25,132 | 2,501 | +83.3 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 25,050 | 3,538 | +55.9 |
| [toon-format/toon](https://github.com/toon-format/toon) | 24,657 | 1,094 | +10.1 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 24,261 | 1,473 | +295.9 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 23,845 | 1,962 | +126.3 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,094 | 1,712 | +5.6 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,037 | 3,058 | +5.6 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 20,835 | 2,770 | +12.6 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 20,136 | 2,338 | +1007.0 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 19,985 | 2,670 | +245.2 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 19,420 | 1,681 | +95.8 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 18,841 | 2,017 | +36.3 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 18,808 | 2,827 | +201.7 |
| [tanweai/pua](https://github.com/tanweai/pua) | 18,400 | 1,106 | +17.1 |
| [decolua/9router](https://github.com/decolua/9router) | 18,349 | 2,908 | +86.4 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 18,030 | 1,272 | +62.4 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 17,902 | 2,271 | +8.4 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,334 | 1,517 | +2.6 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 17,273 | 1,633 | +36.9 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 17,124 | 2,234 | +92.4 |
| [jundot/omlx](https://github.com/jundot/omlx) | 17,037 | 1,444 | +45.0 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,113 | 1,698 | +5.7 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | 16,106 | 2,216 | +20.0 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | 15,509 | 2,698 | +51.5 |
| [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori) | 15,364 | 2,634 | +10.5 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | 15,309 | 1,262 | +53.0 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 14,943 | 1,913 | +52.5 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 14,412 | 1,256 | +208.0 |
| [xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | 14,321 | 2,139 | +17.0 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 14,245 | 1,461 | +9.5 |
| [kyegomez/OpenMythos](https://github.com/kyegomez/OpenMythos) | 14,186 | 3,186 | +15.5 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 13,910 | 1,034 | +5.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,451 | 723 | +8.1 |
<!-- AUTOGEN-REPOS-END -->

---

## What it does

- Collects daily snapshots of stars, forks, watchers and open issues for every tracked repo
- Discovers new trending repos automatically every Monday using the GitHub Search API
- Generates AI summaries (use cases, similar tools, tags) for each tracked repo via GitHub Models
- Stores all history as plain JSON — no database, no backend
- Renders a live dashboard via GitHub Pages — updates daily, zero maintenance

## Tracked repos

Data lives in [`data/`](./data) — one folder per repo, one `history.json` per entry.  
The full watch list is in [`repos.json`](./repos.json).

## Fork & use it for yourself

This is my personal tracker — the watch list reflects what I find interesting. If you want to track different repos, the best path is to **fork this repo and run your own**.

### Setup

1. Fork this repo to your account
2. Replace the contents of [`repos.json`](./repos.json) with the repos you want to track (or just leave one entry — `discover.yml` will auto-add more every Monday)
3. Go to **Settings → Pages** and enable GitHub Pages from the `main` branch
4. Go to **Actions** and run **Collect Repo Stats** once manually to seed your first data point
5. Your dashboard will be live at `https://YOUR-USERNAME.github.io/rising-repos-tracker/`

That's it — daily collection and weekly discovery run automatically on schedule. Zero ongoing maintenance.

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
  "notes": "why you're tracking this"
}
```

The next daily collect run picks it up automatically.

## Stack

- **GitHub Actions** — scheduling and automation
- **GitHub Pages** — dashboard hosting
- **GitHub API** — data source
- **GitHub Models** — free AI summaries (gpt-4o-mini)
- **Chart.js** — star growth visualization
- **Mermaid** — architecture diagram (rendered by GitHub)
- No dependencies, no build step, no database

## License

MIT
