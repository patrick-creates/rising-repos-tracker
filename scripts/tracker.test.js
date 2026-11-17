// Run: node --test scripts/tracker.test.js (from the repo root)
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { calcVelocity } = require("./update-readme");
const { mergeData } = require("./collect");

test("velocity: average stars per day over the whole history", () => {
  const h = [{ date: "2026-10-01", stars: 100 }, { date: "2026-10-05", stars: 120 }, { date: "2026-10-11", stars: 300 }];
  assert.strictEqual(calcVelocity(h), 20);
  // same-day snapshots count as one day, no division by zero
  assert.strictEqual(calcVelocity([{ date: "2026-10-01", stars: 1 }, { date: "2026-10-01", stars: 5 }]), 4);
  // while history builds up, fall back to the value from discovery
  assert.strictEqual(calcVelocity([{ date: "2026-10-01", stars: 1 }], { stars_per_day_at_add: "12.5" }), 12.5);
  assert.strictEqual(calcVelocity(null, {}), 0);
});

function inTempRepo(fn) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "rrt-"));
  const cwd = process.cwd();
  process.chdir(dir);
  try { fn(); } finally { process.chdir(cwd); fs.rmSync(dir, { recursive: true, force: true }); }
}
const write = (p, v) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, JSON.stringify(v)); };
const read = (p) => JSON.parse(fs.readFileSync(p, "utf8"));

test("rename: history merged by date, new name wins, old folder removed", () => {
  inTempRepo(() => {
    write("data/old/tool/history.json", [{ date: "2026-10-01", stars: 1 }, { date: "2026-10-02", stars: 2 }]);
    write("data/old/tool/summary.json", { summary: "from old" });
    write("data/new/tool/history.json", [{ date: "2026-10-02", stars: 20 }, { date: "2026-10-03", stars: 30 }]);
    mergeData("old", "tool", "new", "tool");
    assert.deepStrictEqual(read("data/new/tool/history.json").map((e) => [e.date, e.stars]),
      [["2026-10-01", 1], ["2026-10-02", 20], ["2026-10-03", 30]]);
    assert.strictEqual(read("data/new/tool/summary.json").summary, "from old"); // new had none
    assert.ok(!fs.existsSync("data/old/tool"));
  });
});

test("rename to a new name moves the folder, also for a case-only change", () => {
  inTempRepo(() => {
    write("data/acme/Tool/history.json", [{ date: "2026-10-01", stars: 5 }]);
    mergeData("acme", "Tool", "acme", "tool");
    assert.deepStrictEqual(fs.readdirSync("data/acme"), ["tool"]);
    assert.strictEqual(read("data/acme/tool/history.json")[0].stars, 5);
  });
});

test("rename of an untracked folder is a no-op", () => {
  inTempRepo(() => {
    mergeData("ghost", "repo", "new", "repo");
    assert.ok(!fs.existsSync("data"));
  });
});

const { classify } = require("./collect");
const { starsPerDay } = require("./discover");

// one snapshot per day from 2026-10-01, stars = start + perDay * i
const days = (n, start, perDay) => Array.from({ length: n }, (_, i) =>
  ({ date: new Date(Date.UTC(2026, 9, 1 + i)).toISOString().slice(0, 10), stars: start + perDay * i }));

test("classify: stalled after 30 days under 10 stars/day, not before", () => {
  assert.strictEqual(classify(days(31, 5000, 9), {}), "stalled");
  assert.strictEqual(classify(days(31, 5000, 10), {}), undefined); // exactly 300 in 30 days still rising
  assert.strictEqual(classify(days(20, 5000, 0), {}), undefined);  // too little history to judge
  assert.strictEqual(classify([], {}), undefined);
});

test("classify: spike needs 1000+/day over lifetime AND last week", () => {
  const fast = days(10, 20000, 1500); // 33,500 stars, created 10 days before first snapshot
  assert.strictEqual(classify(fast, { created_at: "2026-09-21" }), "spike");
  assert.strictEqual(classify(fast, { created_at: "2025-01-01" }), undefined); // old repo: lifetime rate low
  assert.strictEqual(classify(days(10, 400000, 50), { created_at: "2026-01-01" }), undefined); // big but slow now
  assert.strictEqual(classify(fast, {}), undefined); // no created_at: cannot judge
});

test("discover ranks by stars per day, a repo created today counts as one day", () => {
  const now = new Date().toISOString();
  assert.strictEqual(starsPerDay({ stargazers_count: 500, created_at: now }), 500);
  const old = { stargazers_count: 50000, created_at: new Date(Date.now() - 500 * 86400000).toISOString() };
  const young = { stargazers_count: 5000, created_at: new Date(Date.now() - 2 * 86400000).toISOString() };
  assert.ok(starsPerDay(young) > starsPerDay(old));
});

test("velocity: only the last 30 days count, so long and short histories compare fairly", () => {
  // 60 days at 100/day, then 30 days at 10/day: lifetime average would be 70, the last 30 days say 10
  const h = [...days(61, 0, 100), ...days(31, 6000, 10).map((e, i) =>
    ({ date: new Date(Date.UTC(2026, 9, 1 + 60 + i)).toISOString().slice(0, 10), stars: e.stars }))].filter((e, i) => i !== 61);
  assert.strictEqual(calcVelocity(h), 10);
});
