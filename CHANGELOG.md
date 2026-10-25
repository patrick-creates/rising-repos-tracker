# Changelog

All notable changes to the tracker code and docs are documented here. Daily data commits by `github-actions[bot]` are not listed. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
