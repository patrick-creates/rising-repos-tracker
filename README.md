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

> Auto-updated daily — last refreshed 2026-06-03

| Metric | Value |
|---|---|
| Repos tracked | **76** |
| Total stars | **5,156,248** |
| Total forks | **872,962** |
| Fastest growing | **hermes-agent** (+1432.8/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 178,133 | +1432.8 |
| 2 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | 204,778 | +1394.3 |
| 3 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 204,778 | +1130.0 |
| 4 | [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 90,089 | +1002.8 |
| 5 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | 142,073 | +907.9 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 376,428 | 78,647 | +236.0 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 204,778 | 31,411 | +1130.0 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 204,778 | 31,411 | +1394.3 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,723 | 46,190 | +21.0 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 178,133 | 30,507 | +1432.8 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 163,233 | 21,215 | +50.5 |
| [langgenius/dify](https://github.com/langgenius/dify) | 143,671 | 22,602 | +116.5 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 142,073 | 9,686 | +907.9 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 139,794 | 20,073 | +138.2 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 138,391 | 22,930 | +83.6 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 111,620 | 59,925 | +41.3 |
| [github/spec-kit](https://github.com/github/spec-kit) | 107,932 | 9,544 | +479.6 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 90,089 | 5,870 | +1002.8 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,168 | 59,667 | +8.2 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 86,703 | 8,951 | +419.5 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 81,803 | 17,596 | +91.4 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 80,372 | 6,920 | +237.7 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 78,127 | 15,369 | +53.8 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 75,719 | 9,603 | +111.7 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 75,232 | 8,168 | +33.2 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 73,942 | 12,509 | +20.8 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 70,354 | 9,412 | +495.7 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 68,144 | 3,834 | +414.5 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,282 | 13,583 | +2.6 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 65,625 | 5,868 | +70.3 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 64,429 | 10,523 | +209.5 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 63,030 | 6,920 | +165.1 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 60,810 | 4,929 | +155.1 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 58,193 | 3,582 | +538.4 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 57,878 | 6,533 | +856.5 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 56,164 | 5,642 | +166.6 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 55,859 | 6,826 | +324.9 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 55,564 | 8,922 | +74.8 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 53,342 | 7,043 | +58.9 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 53,302 | 24,471 | +25.1 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 52,547 | 3,676 | +234.9 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 50,397 | 5,611 | +35.7 |
| [tw93/Pake](https://github.com/tw93/Pake) | 49,773 | 10,089 | +62.1 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 49,141 | 8,559 | +109.6 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 48,452 | 10,056 | +200.4 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 45,722 | 4,535 | +47.6 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 45,551 | 3,955 | +91.0 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,034 | 10,166 | +29.9 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 43,568 | 7,710 | +55.5 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 42,687 | 2,736 | +175.2 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 41,184 | 6,826 | +49.9 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,276 | 4,086 | +17.5 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 40,049 | 38,598 | +134.4 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 39,553 | 6,413 | +97.2 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,307 | 2,657 | +16.8 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 37,986 | 7,816 | +57.4 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 36,815 | 3,167 | +238.3 |
| [google/langextract](https://github.com/google/langextract) | 36,796 | 2,532 | +26.8 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 36,781 | 8,353 | +158.2 |
| [wshobson/agents](https://github.com/wshobson/agents) | 36,296 | 3,938 | +40.0 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 35,896 | 5,970 | +128.0 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 35,674 | 3,252 | +94.4 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 34,562 | 6,585 | +39.1 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 34,403 | 3,077 | +43.2 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 34,341 | 4,207 | +59.4 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 34,097 | 2,411 | +106.5 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 33,718 | 2,306 | +64.5 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 32,134 | 2,364 | +860.5 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 31,710 | 4,684 | +17.0 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 31,701 | 5,224 | +131.5 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 29,225 | 3,119 | +107.0 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 29,199 | 3,587 | +88.5 |
| [voideditor/void](https://github.com/voideditor/void) | 28,815 | 2,514 | +5.0 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 28,254 | 8,670 | +59.5 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 27,635 | 4,494 | +636.0 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 27,482 | 2,650 | +67.0 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 27,244 | 1,668 | +121.5 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 26,794 | 1,412 | +38.0 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 26,764 | 2,819 | +27.0 |
| [usestrix/strix](https://github.com/usestrix/strix) | 25,756 | 2,884 | +23.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,244 | 704 | +6.3 |
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
