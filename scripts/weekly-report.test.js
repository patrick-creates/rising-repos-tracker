// Run: node --test scripts/weekly-report.test.js
const test = require("node:test");
const assert = require("node:assert");
const { isoWeek, weekLabel, lastCompleteWeek, snapshotAt, maxDayPct, weekStats, renderReport } = require("./weekly-report");

test("ISO week numbers, including year boundaries", () => {
  assert.strictEqual(weekLabel(isoWeek("2026-10-25")), "2026-W43"); // Sunday
  assert.strictEqual(isoWeek("2026-10-25").monday, "2026-10-19");
  assert.strictEqual(weekLabel(isoWeek("2026-10-26")), "2026-W44"); // Monday
  assert.strictEqual(weekLabel(isoWeek("2027-01-01")), "2026-W53"); // Friday, still 2026's last week
  assert.strictEqual(weekLabel(isoWeek("2025-12-29")), "2026-W01"); // Monday of 2026's first week
});

test("last complete week needs the following Monday's snapshot", () => {
  assert.strictEqual(weekLabel(lastCompleteWeek("2026-10-25")), "2026-W42"); // Sunday: W43 not finished
  assert.strictEqual(weekLabel(lastCompleteWeek("2026-10-26")), "2026-W43"); // Monday: W43 done
});

test("snapshot lookup tolerates small gaps only", () => {
  const h = [{ date: "2026-10-17", stars: 1 }, { date: "2026-10-20", stars: 2 }];
  assert.strictEqual(snapshotAt(h, "2026-10-20").stars, 2);
  assert.strictEqual(snapshotAt(h, "2026-10-19").stars, 1); // 2 days back: ok
  assert.strictEqual(snapshotAt(h, "2026-10-16"), null);    // nothing before
  assert.strictEqual(snapshotAt([{ date: "2026-10-10", stars: 1 }], "2026-10-19"), null); // too old
});

test("week stats: gain, ranking, growth threshold, new repos", () => {
  const repos = [
    { owner: "a", repo: "big", added: "2026-01-01" },
    { owner: "b", repo: "small", added: "2026-10-21", stars_at_add: 300 },
    { owner: "c", repo: "partial", added: "2026-10-23" },
  ];
  const histories = {
    "a/big": [{ date: "2026-10-19", stars: 10000 }, { date: "2026-10-26", stars: 10700 }],
    "b/small": [{ date: "2026-10-19", stars: 100 }, { date: "2026-10-26", stars: 400 }],
    "c/partial": [{ date: "2026-10-23", stars: 50 }, { date: "2026-10-26", stars: 80 }],
  };
  const s = weekStats(repos, histories, isoWeek("2026-10-19"));
  assert.strictEqual(s.measured, 2);                       // partial has no start snapshot
  assert.strictEqual(s.totalGain, 1000);
  assert.deepStrictEqual(s.byGain.map((r) => r.name), ["a/big", "b/small"]);
  assert.strictEqual(s.byGain[0].perDay, 100);
  assert.deepStrictEqual(s.byPct.map((r) => r.name), ["a/big"]); // small is below 500 stars
  assert.ok(Math.abs(s.byPct[0].pct - 7) < 1e-9);
  assert.deepStrictEqual(s.added.map((r) => r.name), ["b/small", "c/partial"]);
});

test("unusual growth is flagged and explained", () => {
  const h = [
    { date: "2026-10-19", stars: 1000 }, { date: "2026-10-20", stars: 1300 }, // +30% in a day
    { date: "2026-10-26", stars: 1350 },
  ];
  assert.strictEqual(Math.round(maxDayPct(h, "2026-10-19", "2026-10-26")), 30);
  const steady = [{ date: "2026-10-19", stars: 1000 }, { date: "2026-10-26", stars: 1100 }];
  const repos = [{ owner: "a", repo: "spike" }, { owner: "b", repo: "steady" }];
  const s = weekStats(repos, { "a/spike": h, "b/steady": steady }, isoWeek("2026-10-19"));
  assert.deepStrictEqual(s.byGain.map((r) => [r.name, r.flagged]), [["a/spike", true], ["b/steady", false]]);
  const md = renderReport("2026-W43", s);
  assert.match(md, /\[a\/spike\]\([^)]*\) ⚠️/);
  assert.match(md, /⚠️ Unusual growth/);
});
