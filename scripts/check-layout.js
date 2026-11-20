// Loads the live dashboard at four widths and fails if it scrolls sideways, shows empty
// data or throws. Run after the screenshot: node scripts/check-layout.js [url]
const puppeteer = require("puppeteer");

const URL = process.argv[2] || "https://patrick-creates.github.io/rising-repos-tracker/";
const WIDTHS = [1440, 1024, 768, 390];

// Runs in the page; returns a list of problems.
function inspect() {
  const problems = [];
  const doc = document.documentElement;
  if (doc.scrollWidth > doc.clientWidth + 1) problems.push(`scrolls sideways (${doc.scrollWidth}px > ${doc.clientWidth}px)`);
  const status = document.getElementById("status")?.textContent || "";
  if (/error|loading/i.test(status)) problems.push(`status says "${status}"`);
  for (const id of ["m-repos", "m-stars", "m-forks", "m-top", "m-since"]) {
    const t = document.getElementById(id)?.textContent.trim() || "";
    if (!t || t === "—" || /undefined|NaN|null/.test(t)) problems.push(`card #${id} shows "${t}"`);
  }
  const canvas = document.getElementById("growthChart");
  if (!canvas || canvas.clientWidth < 100 || canvas.clientHeight < 100) problems.push("chart is missing or collapsed");
  const rows = document.querySelectorAll("#repoTable .repo-row");
  if (rows.length < 10) problems.push(`repo table has ${rows.length} rows`);
  const name = rows[0]?.firstElementChild;
  if (name && name.clientWidth < 80) problems.push(`repo name column is ${name.clientWidth}px wide`);
  if (/undefined|NaN/.test(document.getElementById("repoTable")?.textContent || "")) problems.push("repo table contains undefined/NaN");
  return problems;
}

async function main() {
  const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  let failed = 0;
  try {
    for (const width of WIDTHS) {
      const page = await browser.newPage();
      const errors = [];
      page.on("pageerror", (e) => errors.push(`script error: ${e.message}`));
      // Failed requests by URL instead of console errors, which do not name the file. The site has no favicon.
      page.on("response", (r) => r.status() >= 400 && !r.url().endsWith("/favicon.ico") && errors.push(`${r.status()} ${r.url()}`));
      await page.setViewport({ width, height: 900 });
      await page.goto(`${URL}?check=${Date.now()}`, { waitUntil: "networkidle0", timeout: 60000 });
      await page.waitForSelector("#repoTable .repo-row", { timeout: 20000 }).catch(() => {});
      const problems = [...errors, ...(await page.evaluate(inspect))];
      console.log(`${problems.length ? "FAIL" : "PASS"} ${width}px${problems.map((p) => `\n  - ${p}`).join("")}`);
      failed += problems.length ? 1 : 0;
      await page.close();
    }
  } finally {
    await browser.close();
  }
  if (failed) process.exit(1);
}

main().catch((e) => { console.error(e); process.exit(1); });
