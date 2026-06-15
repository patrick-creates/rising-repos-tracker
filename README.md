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

> Auto-updated daily — last refreshed 2026-06-15

| Metric | Value |
|---|---|
| Repos tracked | **106** |
| Total stars | **6,005,676** |
| Total forks | **966,522** |
| Fastest growing | **last30days-skill** (+1404.9/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 42,505 | +1404.9 |
| 2 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 194,012 | +1392.9 |
| 3 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | 215,801 | +1122.5 |
| 4 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 215,801 | +1053.1 |
| 5 | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 44,162 | +982.1 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 378,793 | 79,245 | +221.9 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 215,801 | 33,165 | +1053.1 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 215,801 | 33,165 | +1122.5 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 194,012 | 33,968 | +1392.9 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,951 | 46,137 | +20.3 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 163,756 | 21,239 | +48.0 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 153,746 | 10,629 | +931.5 |
| [langgenius/dify](https://github.com/langgenius/dify) | 145,297 | 22,855 | +123.4 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 141,597 | 20,353 | +142.6 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 139,349 | 23,094 | +82.2 |
| [github/spec-kit](https://github.com/github/spec-kit) | 112,271 | 9,902 | +436.7 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 111,995 | 60,138 | +37.7 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 101,343 | 6,701 | +975.0 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 91,870 | 9,589 | +423.5 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,252 | 59,570 | +7.7 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 82,910 | 18,079 | +91.7 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 82,402 | 7,123 | +212.8 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 78,682 | 15,430 | +51.0 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 77,147 | 9,801 | +114.8 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 75,636 | 8,216 | +33.4 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 74,166 | 12,554 | +19.9 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 73,926 | 9,871 | +382.5 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 72,742 | 4,100 | +401.1 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 66,626 | 10,846 | +198.2 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 66,551 | 5,963 | +73.3 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,326 | 13,574 | +3.0 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 65,159 | 7,296 | +749.5 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 64,657 | 7,153 | +152.5 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 62,451 | 3,866 | +459.8 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 62,292 | 5,047 | +141.6 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 59,352 | 7,295 | +310.4 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 57,774 | 5,806 | +152.7 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 56,475 | 9,026 | +75.3 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 55,648 | 7,210 | +116.0 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 54,885 | 3,846 | +217.8 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 53,830 | 10,710 | +306.6 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 53,595 | 24,515 | +24.8 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 50,731 | 5,664 | +32.3 |
| [tw93/Pake](https://github.com/tw93/Pake) | 50,493 | 10,343 | +61.2 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 50,442 | 8,889 | +109.1 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 46,512 | 4,052 | +86.3 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 46,232 | 4,584 | +45.4 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,316 | 10,201 | +27.2 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 44,218 | 7,825 | +54.9 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 44,162 | 3,082 | +982.1 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 43,652 | 2,804 | +134.6 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 42,600 | 40,373 | +179.1 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 42,505 | 3,455 | +1404.9 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 42,304 | 7,034 | +68.5 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 40,767 | 6,575 | +99.5 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,481 | 4,108 | +17.3 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 39,198 | 8,047 | +82.3 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 38,891 | 7,514 | +83.2 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 38,886 | 8,834 | +168.0 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,448 | 2,650 | +13.9 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 38,368 | 3,298 | +176.1 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 37,548 | 6,192 | +133.5 |
| [google/langextract](https://github.com/google/langextract) | 36,891 | 2,544 | +16.0 |
| [wshobson/agents](https://github.com/wshobson/agents) | 36,771 | 3,979 | +39.8 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 36,419 | 3,310 | +76.0 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 35,676 | 2,527 | +128.0 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 35,042 | 4,314 | +58.9 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 34,958 | 6,629 | +35.6 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 34,860 | 3,111 | +40.3 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 34,696 | 2,391 | +79.1 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 33,379 | 5,487 | +138.6 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 32,684 | 5,367 | +451.5 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 31,910 | 4,717 | +16.7 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 30,162 | 3,264 | +82.2 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 29,993 | 3,704 | +69.4 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 29,301 | 2,396 | +832.0 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 28,888 | 8,750 | +53.8 |
| [voideditor/void](https://github.com/voideditor/void) | 28,811 | 2,538 | +0.4 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 28,284 | 2,777 | +66.9 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 28,163 | 1,906 | +178.1 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 27,954 | 1,708 | +68.1 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 27,783 | 2,613 | +317.4 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 27,068 | 1,424 | +25.0 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 27,009 | 2,854 | +21.4 |
| [usestrix/strix](https://github.com/usestrix/strix) | 26,006 | 2,926 | +21.1 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 25,656 | 1,982 | +46.9 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 25,530 | 3,973 | +9.7 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 25,205 | 1,144 | +73.6 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 24,733 | 2,647 | +108.7 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 24,652 | 3,492 | +71.0 |
| [toon-format/toon](https://github.com/toon-format/toon) | 24,565 | 1,091 | +9.9 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 24,410 | 2,441 | +87.1 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 22,890 | 1,886 | +152.1 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 22,205 | 1,334 | +382.7 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22,053 | 1,703 | +6.9 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 20,988 | 3,050 | +5.7 |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 20,733 | 2,755 | +14.1 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 18,558 | 1,598 | +70.0 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 18,514 | 1,983 | +171.4 |
| [tanweai/pua](https://github.com/tanweai/pua) | 18,246 | 1,102 | +186.2 |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 17,826 | 2,268 | +162.1 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 17,778 | 2,616 | +160.1 |
| [decolua/9router](https://github.com/decolua/9router) | 17,571 | 2,707 | +109.1 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 17,468 | 1,245 | +155.9 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 17,311 | 1,515 | +47.8 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 16,993 | 2,635 | +182.7 |
| [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 16,941 | 1,594 | +100.8 |
| [jundot/omlx](https://github.com/jundot/omlx) | 16,632 | 1,411 | +137.4 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 16,292 | 2,107 | +49.7 |
| [cft0808/edict](https://github.com/cft0808/edict) | 16,062 | 1,693 | +144.7 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,336 | 713 | +6.8 |
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
