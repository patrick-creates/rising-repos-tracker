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

> Auto-updated daily — last refreshed 2026-06-05

| Metric | Value |
|---|---|
| Repos tracked | **76** |
| Total stars | **5,189,361** |
| Total forks | **877,558** |
| Fastest growing | **hermes-agent** (+1461.4/day) |

### 🔥 Top 5 by velocity

| # | Repo | Stars | Stars/day |
|---|---|---:|---:|
| 1 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 181,657 | +1461.4 |
| 2 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | 207,710 | +1407.4 |
| 3 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 207,710 | +1159.2 |
| 4 | [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 92,199 | +1008.6 |
| 5 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | 144,712 | +943.7 |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 376,967 | 78,760 | +239.0 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 207,710 | 31,874 | +1159.2 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 207,710 | 31,874 | +1407.4 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,772 | 46,188 | +21.3 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 181,657 | 31,167 | +1461.4 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 163,317 | 21,223 | +49.8 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 144,712 | 9,911 | +943.7 |
| [langgenius/dify](https://github.com/langgenius/dify) | 143,965 | 22,653 | +119.1 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 140,127 | 20,120 | +140.7 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 138,554 | 22,956 | +83.4 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 111,685 | 59,959 | +40.6 |
| [github/spec-kit](https://github.com/github/spec-kit) | 108,835 | 9,616 | +477.1 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 92,199 | 6,013 | +1008.6 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,180 | 59,648 | +7.9 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 87,589 | 9,050 | +421.6 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 81,990 | 17,671 | +91.6 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 80,752 | 6,945 | +233.6 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 78,220 | 15,372 | +53.1 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 75,887 | 9,632 | +108.6 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 75,314 | 8,178 | +34.1 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 73,988 | 12,524 | +21.1 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 70,894 | 9,472 | +454.6 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 69,029 | 3,885 | +417.6 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66,282 | 13,578 | +2.3 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 65,831 | 5,883 | +73.9 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 64,805 | 10,580 | +207.1 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 63,312 | 6,964 | +162.4 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 61,103 | 4,945 | +154.2 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 59,121 | 6,648 | +830.4 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 59,022 | 3,634 | +524.7 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 56,668 | 6,920 | +333.8 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 56,466 | 5,672 | +164.9 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 55,847 | 8,962 | +82.2 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 53,599 | 7,065 | +66.6 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 53,353 | 24,485 | +25.2 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 52,997 | 3,712 | +233.8 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 50,474 | 5,617 | +36.0 |
| [tw93/Pake](https://github.com/tw93/Pake) | 49,828 | 10,113 | +58.3 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 49,372 | 8,618 | +110.2 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 48,772 | 10,128 | +195.9 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 45,781 | 4,545 | +45.6 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 45,730 | 3,979 | +90.8 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,066 | 10,170 | +28.4 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 43,707 | 7,734 | +57.1 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 42,878 | 2,750 | +166.3 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 41,275 | 6,843 | +49.4 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 40,880 | 39,042 | +185.5 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 40,307 | 4,087 | +17.3 |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 39,763 | 6,441 | +98.6 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 38,332 | 2,657 | +16.0 |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 38,176 | 7,844 | +64.3 |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 37,139 | 3,195 | +224.5 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 37,120 | 8,447 | +160.3 |
| [google/langextract](https://github.com/google/langextract) | 36,805 | 2,536 | +22.7 |
| [wshobson/agents](https://github.com/wshobson/agents) | 36,390 | 3,941 | +41.3 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 36,109 | 5,996 | +124.1 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 35,820 | 3,265 | +90.5 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 34,625 | 6,599 | +37.7 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 34,521 | 3,081 | +46.1 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 34,491 | 4,223 | +62.3 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 34,320 | 2,425 | +109.0 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 33,844 | 2,326 | +63.8 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 33,347 | 2,454 | +733.5 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 31,993 | 5,263 | +138.8 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 31,762 | 4,693 | +21.5 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 29,387 | 3,153 | +94.0 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 29,332 | 3,596 | +77.5 |
| [voideditor/void](https://github.com/voideditor/void) | 28,815 | 2,517 | +2.5 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 28,586 | 4,675 | +555.8 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 28,355 | 8,687 | +55.0 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 27,620 | 2,665 | +68.0 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 27,429 | 1,673 | +107.0 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 26,856 | 1,415 | +34.5 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 26,814 | 2,828 | +26.0 |
| [usestrix/strix](https://github.com/usestrix/strix) | 25,826 | 2,894 | +29.0 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 9,255 | 704 | +6.2 |
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
