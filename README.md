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

> Auto-updated daily — last refreshed 2026-06-01

| Metric | Value |
|---|---|
| Repos tracked | **76** |
| Total stars | **5,118,788** |
| Total forks | **868,057** |
| Fastest growing | **hermes-agent** (+1436.7/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 175,343 | +1436.7 |
| 2 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | 201,305 | +1296.6 |
| 3 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 201,305 | +1066.2 |
| 4 | [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 87,417 | +955.2 |
| 5 | [nexu-io/open-design](https://github.com/nexu-io/open-design) | 56,753 | +898.5 |

### 🆕 Recently added

- [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) — added 2026-06-01 — Agent skills for Obsidian. Teach your agent to use Markdown, Bases, JSON Canvas, and use the CLI.
- [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) — added 2026-06-01 — AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨
- [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) — added 2026-06-01 — Fast, small, and fully autonomous AI personal assistant infrastructure, any OS, any platform — deploy anywhere, swap anything 🦀
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 375,971 | 78,510 | +236.8 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 201,305 | 30,881 | +1066.2 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 201,305 | 30,881 | +1296.6 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,686 | 46,202 | +21.3 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 175,343 | 29,854 | +1436.7 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 163,149 | 21,208 | +51.4 |
| [langgenius/dify](https://github.com/langgenius/dify) | 143,387 | 22,563 | +113.8 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 139,490 | 20,009 | +136.7 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 138,188 | 22,901 | +81.7 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 136,487 | 9,315 | +709.4 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 111,558 | 59,877 | +42.4 |
| [github/spec-kit](https://github.com/github/spec-kit) | 107,468 | 9,508 | +505.6 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,152 | 59,670 | +8.2 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 87,417 | 5,695 | +955.2 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 85,823 | 8,860 | +417.4 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 81,554 | 17,501 | +87.9 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 80,008 | 6,883 | +243.6 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 78,050 | 15,356 | +55.4 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 75,556 | 9,582 | +116.0 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 75,135 | 8,133 | +31.0 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 73,907 | 12,507 | +21.3 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 69,688 | 9,308 | +542.1 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 67,137 | 3,783 | +401.8 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,287 | 13,584 | +3.3 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 65,491 | 5,853 | +70.8 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 64,008 | 10,461 | +209.4 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 62,749 | 6,885 | +168.6 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 60,543 | 4,921 | +158.2 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 57,096 | 3,513 | +537.0 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 56,753 | 6,415 | +898.5 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 55,812 | 5,606 | +165.3 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 55,266 | 8,883 | +64.1 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 55,142 | 6,750 | +320.1 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 53,245 | 24,456 | +24.6 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 53,209 | 7,017 | +57.8 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 52,090 | 3,647 | +235.9 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 50,327 | 5,601 | +35.8 |
| [tw93/Pake](https://github.com/tw93/Pake) | 49,627 | 10,057 | +60.6 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 48,917 | 8,520 | +109.2 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 48,120 | 10,003 | +205.3 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 45,624 | 4,523 | +47.4 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 45,371 | 3,938 | +91.1 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,003 | 10,160 | +32.0 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 43,463 | 7,684 | +55.9 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 42,484 | 2,723 | +185.7 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 41,072 | 6,811 | +49.1 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,241 | 4,086 | +17.5 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 39,718 | 38,336 | +125.6 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 39,339 | 6,386 | +94.4 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,279 | 2,656 | +17.6 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 37,782 | 7,788 | +44.7 |
| [google/langextract](https://github.com/google/langextract) | 36,779 | 2,532 | +32.0 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 36,443 | 8,244 | +155.1 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 36,350 | 3,130 | +240.0 |
| [wshobson/agents](https://github.com/wshobson/agents) | 36,220 | 3,928 | +40.6 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 35,617 | 5,911 | +124.7 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 35,478 | 3,242 | +93.4 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 34,479 | 6,573 | +38.4 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 34,308 | 3,074 | +42.0 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 34,231 | 4,188 | +60.7 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 33,884 | 2,392 | +227.4 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 33,589 | 2,300 | +26.4 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 31,676 | 4,670 | +293.3 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 31,438 | 5,196 | +231.2 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 30,413 | 2,256 | +301.0 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 29,022 | 3,560 | +230.3 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 29,011 | 3,090 | +151.1 |
| [voideditor/void](https://github.com/voideditor/void) | 28,805 | 2,511 | +45.9 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 28,135 | 8,659 | +461.2 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 27,348 | 2,633 | +92.1 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 27,001 | 1,644 | +257.1 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 26,718 | 1,406 | +296.9 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 26,710 | 2,808 | +76.1 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 26,363 | 4,278 | +355.9 |
| [usestrix/strix](https://github.com/usestrix/strix) | 25,710 | 2,879 | +86.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,238 | 703 | +6.6 |
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
