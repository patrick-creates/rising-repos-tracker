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
