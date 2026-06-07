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

> Auto-updated daily — last refreshed 2026-06-07

| Metric | Value |
|---|---|
| Repos tracked | **76** |
| Total stars | **5,217,561** |
| Total forks | **881,237** |
| Fastest growing | **hermes-agent** (+1482.0/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 185,094 | +1482.0 |
| 2 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | 209,371 | +1318.6 |
| 3 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 209,371 | +1132.9 |
| 4 | [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 93,740 | +984.8 |
| 5 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | 146,699 | +947.6 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 377,338 | 78,882 | +234.7 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 209,371 | 32,109 | +1132.9 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 209,371 | 32,109 | +1318.6 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 185,094 | 31,802 | +1482.0 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,804 | 46,187 | +20.9 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 163,396 | 21,228 | +49.0 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 146,699 | 10,040 | +947.6 |
| [langgenius/dify](https://github.com/langgenius/dify) | 144,213 | 22,695 | +119.5 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 140,418 | 20,156 | +141.0 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 138,700 | 22,983 | +82.6 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 111,738 | 59,978 | +39.4 |
| [github/spec-kit](https://github.com/github/spec-kit) | 109,710 | 9,698 | +474.0 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 93,740 | 6,125 | +984.8 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 88,269 | 9,149 | +415.0 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,186 | 59,638 | +7.5 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 82,108 | 17,735 | +89.0 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 81,029 | 6,972 | +226.0 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 78,302 | 15,381 | +52.2 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 76,068 | 9,653 | +106.8 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 75,364 | 8,186 | +33.1 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 74,042 | 12,534 | +21.6 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 71,424 | 9,518 | +425.5 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 69,610 | 3,922 | +404.9 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,306 | 13,576 | +3.3 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 65,946 | 5,905 | +72.3 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 65,105 | 10,615 | +201.4 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 63,533 | 6,987 | +157.3 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 61,319 | 4,957 | +149.6 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 60,464 | 6,796 | +814.5 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 59,575 | 3,671 | +499.9 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 57,148 | 6,976 | +324.4 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 56,721 | 5,701 | +161.2 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 55,950 | 8,972 | +79.1 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 54,459 | 7,122 | +103.0 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 53,391 | 24,495 | +24.6 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 53,259 | 3,733 | +223.6 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 50,517 | 5,625 | +34.5 |
| [tw93/Pake](https://github.com/tw93/Pake) | 50,058 | 10,201 | +64.0 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 49,598 | 10,234 | +217.6 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 49,526 | 8,659 | +106.9 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 45,872 | 3,999 | +88.8 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 45,849 | 4,556 | +44.4 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,109 | 10,177 | +27.7 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 43,812 | 7,748 | +56.6 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 43,018 | 2,761 | +156.7 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 41,353 | 6,855 | +48.4 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 41,095 | 39,266 | +173.5 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,338 | 4,087 | +17.1 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 39,939 | 6,468 | +97.0 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 38,471 | 7,888 | +77.1 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,360 | 2,652 | +15.7 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 37,406 | 8,507 | +157.6 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 37,372 | 3,215 | +207.8 |
| [google/langextract](https://github.com/google/langextract) | 36,820 | 2,539 | +20.4 |
| [wshobson/agents](https://github.com/wshobson/agents) | 36,457 | 3,952 | +40.1 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 36,322 | 6,026 | +121.4 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 35,921 | 3,274 | +84.4 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 35,609 | 2,590 | +866.0 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 34,753 | 2,452 | +144.8 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 34,677 | 6,604 | +35.9 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 34,577 | 3,089 | +43.3 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 34,571 | 4,247 | +58.8 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 34,033 | 2,337 | +74.0 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 32,230 | 5,297 | +132.0 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 31,809 | 4,701 | +22.2 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 29,560 | 4,818 | +532.8 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 29,533 | 3,172 | +87.0 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 29,480 | 3,609 | +76.3 |
| [voideditor/void](https://github.com/voideditor/void) | 28,816 | 2,519 | +1.8 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 28,431 | 8,706 | +49.3 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 27,735 | 2,684 | +64.5 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 27,521 | 1,682 | +86.7 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 26,895 | 1,416 | +29.5 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 26,830 | 2,832 | +20.0 |
| [usestrix/strix](https://github.com/usestrix/strix) | 25,854 | 2,903 | +24.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,264 | 704 | +6.1 |
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
