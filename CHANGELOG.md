# Changelog

All notable changes to the tracker code and docs are documented here. Daily data commits by `github-actions[bot]` are not listed. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added
- `scripts/weekly-report.js`: weekly report per ISO week in `reports/YYYY-Www.md` (top 10 by stars gained, top 10 by growth rate for repos with 500+ stars, newly tracked repos) plus an index in `reports/README.md`. Runs as a step of the daily collect workflow and writes each week once, on the first run after Monday's snapshot. `--week YYYY-Www` and `--force` for manual runs.
- `scripts/weekly-report.test.js`: tests for ISO weeks, snapshot gaps and ranking (`node --test scripts/weekly-report.test.js`).
- First report: `reports/2026-W42.md`.

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
