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

> Auto-updated daily — last refreshed 2026-06-06

| Metric | Value |
|---|---|
| Repos tracked | **76** |
| Total stars | **5,203,289** |
| Total forks | **879,384** |
| Fastest growing | **hermes-agent** (+1490.6/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 183,820 | +1490.6 |
| 2 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | 208,609 | +1365.0 |
| 3 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 208,608 | +1148.3 |
| 4 | [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 92,907 | +992.8 |
| 5 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | 145,722 | +946.4 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 377,173 | 78,817 | +237.6 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 208,609 | 32,000 | +1365.0 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 208,608 | 32,000 | +1148.3 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,791 | 46,185 | +21.3 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 183,820 | 31,512 | +1490.6 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 163,357 | 21,228 | +49.4 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 145,722 | 9,980 | +946.4 |
| [langgenius/dify](https://github.com/langgenius/dify) | 144,089 | 22,678 | +119.3 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 140,255 | 20,140 | +140.1 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 138,626 | 22,967 | +83.0 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 111,715 | 59,967 | +40.1 |
| [github/spec-kit](https://github.com/github/spec-kit) | 109,285 | 9,646 | +476.0 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 92,907 | 6,064 | +992.8 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,179 | 59,649 | +7.5 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 87,915 | 9,083 | +417.6 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 82,040 | 17,708 | +89.8 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 80,899 | 6,964 | +230.0 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 78,254 | 15,382 | +52.3 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 75,955 | 9,644 | +106.5 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 75,341 | 8,181 | +33.7 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 74,016 | 12,527 | +21.4 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 71,140 | 9,491 | +437.3 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 69,353 | 3,908 | +412.7 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,295 | 13,579 | +2.8 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 65,901 | 5,894 | +73.7 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 64,984 | 10,592 | +205.6 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 63,411 | 6,974 | +159.1 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 61,185 | 4,951 | +150.4 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 59,650 | 6,716 | +814.5 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 59,295 | 3,649 | +511.4 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 56,933 | 6,950 | +330.2 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 56,582 | 5,691 | +162.3 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 55,898 | 8,968 | +80.5 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 53,993 | 7,089 | +83.8 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 53,373 | 24,496 | +24.9 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 53,153 | 3,726 | +229.7 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 50,494 | 5,621 | +35.2 |
| [tw93/Pake](https://github.com/tw93/Pake) | 49,964 | 10,158 | +62.4 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 49,451 | 8,641 | +108.6 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 48,936 | 10,156 | +194.2 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 45,822 | 4,553 | +45.3 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 45,802 | 3,993 | +89.8 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,081 | 10,171 | +27.7 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 43,759 | 7,734 | +56.8 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 42,940 | 2,754 | +160.8 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 41,307 | 6,848 | +48.5 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 40,999 | 39,159 | +180.0 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,314 | 4,087 | +16.7 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 39,854 | 6,453 | +98.0 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,344 | 2,655 | +15.7 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 38,236 | 7,858 | +63.9 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 37,260 | 3,201 | +215.8 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 37,238 | 8,472 | +156.8 |
| [google/langextract](https://github.com/google/langextract) | 36,812 | 2,539 | +21.4 |
| [wshobson/agents](https://github.com/wshobson/agents) | 36,415 | 3,947 | +39.9 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 36,177 | 6,006 | +119.4 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 35,870 | 3,268 | +87.2 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 34,657 | 6,602 | +37.3 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 34,554 | 3,085 | +45.0 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 34,537 | 4,234 | +60.9 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 34,496 | 2,435 | +122.4 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 34,432 | 2,538 | +803.8 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 33,904 | 2,331 | +63.0 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 32,099 | 5,277 | +132.2 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 31,786 | 4,695 | +22.0 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 29,462 | 3,160 | +90.2 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 29,406 | 3,604 | +76.8 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 29,005 | 4,743 | +528.4 |
| [voideditor/void](https://github.com/voideditor/void) | 28,817 | 2,519 | +2.4 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 28,402 | 8,694 | +53.4 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 27,677 | 2,670 | +65.8 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 27,479 | 1,678 | +95.6 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 26,883 | 1,415 | +33.0 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 26,818 | 2,830 | +21.6 |
| [usestrix/strix](https://github.com/usestrix/strix) | 25,840 | 2,900 | +26.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,258 | 704 | +6.1 |
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
