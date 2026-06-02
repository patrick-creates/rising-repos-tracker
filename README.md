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

> Auto-updated daily — last refreshed 2026-06-02

| Metric | Value |
|---|---|
| Repos tracked | **76** |
| Total stars | **5,136,788** |
| Total forks | **870,290** |
| Fastest growing | **hermes-agent** (+1424.5/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 176,536 | +1424.5 |
| 2 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | 202,704 | +1309.4 |
| 3 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 202,703 | +1082.8 |
| 4 | [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 88,694 | +976.7 |
| 5 | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 31,326 | +913.0 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 376,138 | 78,566 | +233.3 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 202,704 | 31,096 | +1309.4 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 202,703 | 31,096 | +1082.8 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,709 | 46,193 | +21.4 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 176,536 | 30,146 | +1424.5 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 163,179 | 21,212 | +50.4 |
| [langgenius/dify](https://github.com/langgenius/dify) | 143,496 | 22,583 | +113.5 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 139,816 | 9,510 | +840.4 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 139,636 | 20,030 | +137.2 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 138,302 | 22,917 | +83.3 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 111,583 | 59,898 | +41.5 |
| [github/spec-kit](https://github.com/github/spec-kit) | 107,665 | 9,524 | +490.2 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 88,694 | 5,780 | +976.7 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,160 | 59,678 | +8.2 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 86,260 | 8,907 | +418.4 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 81,668 | 17,545 | +89.2 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 80,163 | 6,900 | +239.2 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 78,084 | 15,363 | +54.3 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 75,638 | 9,590 | +113.7 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 75,179 | 8,151 | +31.9 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 73,929 | 12,510 | +21.3 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 70,006 | 9,358 | +514.1 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 67,647 | 3,807 | +409.0 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,285 | 13,586 | +2.9 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 65,560 | 5,862 | +70.7 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 64,208 | 10,492 | +208.7 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 62,883 | 6,906 | +166.3 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 60,664 | 4,928 | +155.7 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 57,689 | 3,539 | +540.7 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 57,295 | 6,465 | +874.7 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 55,996 | 5,619 | +166.5 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 55,430 | 8,898 | +70.8 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 55,404 | 6,785 | +316.3 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 53,292 | 7,026 | +59.5 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 53,264 | 24,460 | +24.3 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 52,297 | 3,660 | +233.9 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 50,355 | 5,606 | +35.3 |
| [tw93/Pake](https://github.com/tw93/Pake) | 49,698 | 10,073 | +61.3 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 49,012 | 8,543 | +108.3 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 48,268 | 10,028 | +201.5 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 45,669 | 4,529 | +47.2 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 45,444 | 3,949 | +89.9 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,020 | 10,163 | +31.0 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 43,519 | 7,694 | +55.9 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 42,567 | 2,730 | +178.9 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 41,135 | 6,817 | +50.0 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,263 | 4,088 | +17.8 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 39,855 | 38,428 | +127.0 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 39,444 | 6,402 | +95.8 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,291 | 2,657 | +16.9 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 37,901 | 7,806 | +54.0 |
| [google/langextract](https://github.com/google/langextract) | 36,790 | 2,531 | +29.4 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 36,608 | 8,301 | +156.4 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 36,585 | 3,147 | +239.4 |
| [wshobson/agents](https://github.com/wshobson/agents) | 36,258 | 3,930 | +40.3 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 35,751 | 5,945 | +125.9 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 35,554 | 3,247 | +91.3 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 34,513 | 6,575 | +37.9 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 34,359 | 3,076 | +43.1 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 34,286 | 4,195 | +60.0 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 33,988 | 2,398 | +104.0 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 33,648 | 2,302 | +59.0 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 31,707 | 4,672 | +31.0 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 31,562 | 5,213 | +124.0 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 31,326 | 2,318 | +913.0 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 29,116 | 3,105 | +105.0 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 29,110 | 3,570 | +88.0 |
| [voideditor/void](https://github.com/voideditor/void) | 28,808 | 2,514 | +3.0 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 28,192 | 8,663 | +57.0 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 27,414 | 2,640 | +66.0 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 27,110 | 1,659 | +109.0 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 27,041 | 4,389 | +678.0 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 26,746 | 1,407 | +28.0 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 26,744 | 2,810 | +34.0 |
| [usestrix/strix](https://github.com/usestrix/strix) | 25,727 | 2,880 | +17.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,242 | 704 | +6.5 |
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
