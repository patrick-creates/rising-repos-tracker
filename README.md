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

> Auto-updated daily — last refreshed 2026-06-19

| Metric | Value |
|---|---|
| Repos tracked | **106** |
| Total stars | **6,079,284** |
| Total forks | **975,707** |
| Fastest growing | **headroom** (+1996.0/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [chopratejas/headroom](https://github.com/chopratejas/headroom) | 36,147 | +1996.0 |
| 2 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 197,258 | +1330.1 |
| 3 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 44,542 | +1079.2 |
| 4 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | 217,933 | +1028.2 |
| 5 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 34,698 | +1020.1 |

### 🆕 Recently added

- [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) — added 2026-06-15 — LEAKED SYSTEM PROMPTS FOR CHATGPT, CLAUDE, GEMINI, GROK, PERPLEXITY, CURSOR, LOVABLE, REPLIT, AND MORE! - AI SYSTEMS TRANSPARENCY FOR ALL! 👐
- [chopratejas/headroom](https://github.com/chopratejas/headroom) — added 2026-06-15 — Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 60-95% fewer tokens, same answers. Library, proxy, MCP server.
- [alibaba/page-agent](https://github.com/alibaba/page-agent) — added 2026-06-15 — JavaScript in-page GUI agent. Control web interfaces with natural language.
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 379,456 | 79,431 | +215.8 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 217,933 | 33,433 | +996.9 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 217,933 | 33,433 | +1028.2 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 197,258 | 34,873 | +1330.1 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,021 | 46,126 | +20.0 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 163,911 | 21,254 | +47.0 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 155,793 | 10,825 | +886.1 |
| [langgenius/dify](https://github.com/langgenius/dify) | 145,800 | 22,921 | +123.6 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 142,216 | 20,436 | +143.9 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 139,688 | 23,159 | +82.5 |
| [github/spec-kit](https://github.com/github/spec-kit) | 114,005 | 10,058 | +436.3 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 112,136 | 60,235 | +37.4 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 104,431 | 6,899 | +949.6 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 93,731 | 9,809 | +428.1 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,268 | 59,556 | +7.2 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 83,314 | 18,216 | +92.7 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 83,185 | 7,196 | +210.9 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 78,847 | 15,451 | +50.0 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 77,714 | 9,877 | +118.2 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 75,738 | 8,237 | +32.4 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 74,681 | 4,201 | +411.5 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 74,630 | 9,946 | +349.5 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 74,249 | 12,576 | +20.0 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 67,636 | 7,581 | +733.2 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 67,467 | 10,963 | +199.7 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 66,815 | 6,004 | +72.3 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,341 | 13,569 | +3.1 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 65,159 | 7,236 | +149.1 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 63,790 | 3,931 | +444.1 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 62,773 | 5,077 | +138.9 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 60,284 | 7,416 | +300.8 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 58,321 | 5,862 | +150.7 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 56,828 | 9,107 | +76.9 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 55,986 | 7,250 | +112.1 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 55,600 | 3,887 | +212.9 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 54,659 | 10,839 | +294.2 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 53,718 | 24,536 | +25.6 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 50,860 | 8,996 | +108.5 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 50,856 | 5,676 | +32.2 |
| [tw93/Pake](https://github.com/tw93/Pake) | 50,594 | 10,395 | +56.7 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 46,818 | 4,087 | +85.1 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 46,800 | 3,249 | +910.4 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 46,460 | 4,624 | +46.8 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,439 | 10,212 | +27.6 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 44,542 | 3,663 | +1079.2 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 44,447 | 7,851 | +55.2 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 43,980 | 2,832 | +128.0 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 43,402 | 7,190 | +94.3 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 43,164 | 40,828 | +173.0 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 42,432 | 8,489 | +885.3 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 41,093 | 6,627 | +96.6 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,547 | 4,113 | +17.2 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 39,441 | 8,085 | +78.9 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 39,348 | 8,956 | +159.6 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 38,682 | 3,327 | +160.5 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,500 | 2,651 | +13.8 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 37,887 | 6,265 | +125.7 |
| [wshobson/agents](https://github.com/wshobson/agents) | 36,953 | 3,992 | +40.7 |
| [google/langextract](https://github.com/google/langextract) | 36,915 | 2,548 | +14.4 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 36,629 | 3,324 | +72.2 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 36,147 | 2,449 | +1996.0 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 36,098 | 2,565 | +123.0 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 35,286 | 4,354 | +59.2 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 35,088 | 6,646 | +35.1 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 34,942 | 3,119 | +37.1 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 34,930 | 2,407 | +74.5 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 34,698 | 2,763 | +1020.1 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 34,525 | 5,624 | +453.4 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 34,004 | 5,568 | +142.6 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 31,949 | 4,736 | +15.2 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 30,597 | 3,783 | +87.5 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 30,420 | 3,305 | +78.3 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 29,175 | 8,783 | +57.8 |
| [voideditor/void](https://github.com/voideditor/void) | 28,810 | 2,543 | +0.3 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 28,780 | 2,716 | +292.6 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 28,514 | 2,806 | +64.8 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 28,278 | 1,726 | +70.9 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 27,150 | 1,427 | +24.0 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,062 | 2,866 | +19.6 |
| [usestrix/strix](https://github.com/usestrix/strix) | 26,049 | 2,929 | +18.8 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 25,808 | 1,996 | +43.6 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 25,566 | 3,984 | +9.5 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 25,437 | 1,156 | +67.9 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 25,176 | 2,709 | +109.5 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 24,831 | 3,504 | +61.5 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 24,764 | 2,469 | +87.6 |
| [toon-format/toon](https://github.com/toon-format/toon) | 24,606 | 1,091 | +10.0 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 23,403 | 1,921 | +143.5 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 23,180 | 1,394 | +332.2 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,059 | 1,706 | +4.9 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21,002 | 3,055 | +4.9 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 20,777 | 2,761 | +13.0 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 19,394 | 2,640 | +404.0 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 18,688 | 2,001 | +43.5 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 18,661 | 1,607 | +25.8 |
| [tanweai/pua](https://github.com/tanweai/pua) | 18,336 | 1,103 | +22.5 |
| [decolua/9router](https://github.com/decolua/9router) | 17,955 | 2,802 | +96.0 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 17,863 | 2,270 | +9.3 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 17,755 | 1,257 | +71.8 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,312 | 1,517 | +0.3 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 17,207 | 2,677 | +53.5 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 17,105 | 1,616 | +41.0 |
| [jundot/omlx](https://github.com/jundot/omlx) | 16,832 | 1,424 | +50.0 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 16,472 | 2,127 | +45.0 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,092 | 1,697 | +7.5 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,397 | 722 | +7.7 |
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
