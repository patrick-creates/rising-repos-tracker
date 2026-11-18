# Changelog

All notable changes to the tracker code and docs are documented here. Daily data commits by `github-actions[bot]` are not listed. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added
- `scripts/weekly-report.js`: weekly report per ISO week in `reports/YYYY-Www.md` (top 10 by stars gained, top 10 by growth rate for repos with 500+ stars, newly tracked repos) plus an index in `reports/README.md`. Runs as a step of the daily collect workflow and writes each week once, on the first run after Monday's snapshot. `--week YYYY-Www` and `--force` for manual runs.
- `scripts/weekly-report.test.js`: tests for ISO weeks, snapshot gaps and ranking (`node --test scripts/weekly-report.test.js`).
- First report: `reports/2026-W42.md`.
- Weekly report marks unusual growth (over 50% in a week or 25% in a day) with ⚠️ and a note; README explains that star counts are taken from the GitHub API as they are.
- Dashboard: filter the repo table by age (created in the last 90 or 180 days).
- `scripts/tracker.test.js`: tests for velocity and for merging data of renamed repos. All tests: `node --test scripts/tracker.test.js scripts/weekly-report.test.js`.

- Dependabot version updates for GitHub Actions, monthly and grouped.
- Collect workflow fails once the CI Node version is end-of-life.
- Repo status, recomputed on every collect run and stored as `status` in `repos.json`: `stalled` 💤 (under 300 stars in the last 30 days; history is kept and the repo is still collected) and `spike` ⚠️ (1,000+ stars/day over its lifetime and the last week; marked, not removed). README and dashboard show the marks, count stalled repos and leave them out of the top 5 and "fastest growing".
- `dashboard.json`, written daily by `scripts/update-readme.js` and committed by the collect workflow: latest numbers, 30-day stars/day, status and 90 days of stars per repo. The dashboard loads this one file (~400 KB) instead of one `history.json` per repo (8+ MB, 200+ requests).
- Tests for repo status, ranking by stars per day and the 30-day velocity window.

### Removed
- `summarize.yml`, `scripts/summarize.js` and the `SUMMARIES` repository variable: GitHub Models no longer exists. Summaries generated until then stay in `data/` and are still shown, dated.

### Changed
- Dashboard detail view shows the repo's GitHub description and topics for every repo (collected with each daily snapshot, passed through `dashboard.json`) instead of "No AI summary available".
- Stars/day (README, dashboard) is averaged over the last 30 days instead of the whole tracking period, so repos tracked for one month and for six months compare fairly.
- Discovery ranks candidates by stars per day since creation instead of total stars, and the 365-day age limit now also applies to the `claude` and `openai` searches. The unused `MIN_GROWTH_PERCENT` is gone.
- Dashboard chart shows stars gained over the last 90 days by the top 5, 10 or 20 repos by stars/day instead of total stars of the biggest repos; the 219-line "all repos" option is gone; stalled and spike repos stay out of the chart.
- Dashboard on narrow screens: cards stack, forks and issues columns are hidden.
- Workflows run on Node 24 (Node 20 is end-of-life since 2026-04-30); actions moved to their Node 24 releases (`checkout` v7, `setup-node` v7, `cache` v6).
- Fork instructions: remove `data/` and `reports/` before tracking your own list.

### Fixed
- Dashboard footer said data updates at 05:17 UTC; GitHub starts the scheduled collect run hours later (lately 12–15 UTC). It now says "usually early afternoon UTC".
- 48 repos had no description in the dashboard: GitHub Models, which generated the AI summaries, was retired on 2026-07-30, and `summarize.yml` kept passing while every call failed with "fetch failed".
- Dashboard chart sorted dates by first appearance across repos instead of chronologically, so the axis could jump from October back to May.
- Dashboard repo table on phones: the repo name column collapsed to zero width and stars/day ran off screen.
- Dashboard inserted AI summaries as HTML. They are generated from third-party READMEs, so a crafted README could inject markup or script into the page. They are now escaped.

## [1.0.0] – 2026-10-25

First tagged release.

### Added
- `collect.yml` + `scripts/collect.js`: daily snapshot of stars, forks, watchers and open issues per repo in `data/<owner>/<repo>/history.json`.
- `discover.yml` + `scripts/discover.js`: weekly GitHub Search for new trending repos (configurable `MIN_STARS`, `MAX_AGE_DAYS`, `MAX_NEW_REPOS`, query list).
- `summarize.yml` + `scripts/summarize.js`: AI summaries (use cases, similar tools, tags) via GitHub Models (`gpt-4o-mini`).
- `screenshot.yml`: dashboard screenshot (`preview.png`) after each collect run.
- `scripts/update-readme.js`: auto-generated README sections (snapshot, top 5 by velocity, architecture diagram, workflow table, repo table).
- `index.html`: GitHub Pages dashboard with Chart.js star growth and expandable AI summaries.
- Issue templates.
