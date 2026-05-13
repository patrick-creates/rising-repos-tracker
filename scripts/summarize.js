const fs = require("fs");
const path = require("path");

const token = process.env.GITHUB_TOKEN;
const MODEL = "gpt-4o-mini"; // free via GitHub Models for public repos
const ENDPOINT = "https://models.inference.ai.azure.com/chat/completions";

const repos = JSON.parse(fs.readFileSync("repos.json", "utf8"));

async function fetchReadme(owner, repo) {
  // Try main, then master, then default branch
  const branches = ["main", "master"];
  for (const branch of branches) {
    try {
      const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/README.md`;
      const res = await fetch(url);
      if (res.ok) return await res.text();
    } catch {}
  }
  // Fallback: use GitHub API to find the README
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.raw",
      },
    });
    if (res.ok) return await res.text();
  } catch {}
  return null;
}

async function summarize(owner, repo, readme) {
  const prompt = `You are analyzing a GitHub repository for a tracker dashboard.

Repository: ${owner}/${repo}

README content (truncated to first ~8000 chars):
${readme.slice(0, 8000)}

Respond with ONLY valid JSON (no markdown, no code fences) in this exact format:
{
  "summary": "2 sentences describing what this repo does and why it exists",
  "use_cases": ["concrete use case 1", "concrete use case 2", "concrete use case 3"],
  "similar_tools": ["alternative tool 1", "alternative tool 2"],
  "tags": ["tag1", "tag2", "tag3"]
}

Keep it concise. Use_cases should be practical scenarios. Similar_tools should be real, well-known alternatives. Tags should be lowercase single words or short phrases.`;

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
      max_tokens: 500,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Model API ${res.status}: ${errText.slice(0, 200)}`);
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content || "";
  // Strip code fences if model added them anyway
  const clean = content.replace(/```json|```/g, "").trim();
  return JSON.parse(clean);
}

async function main() {
  let processed = 0;
  let skipped = 0;
  const errors = [];

  for (const { owner, repo } of repos) {
    const dir = path.join("data", owner, repo);
    const summaryPath = path.join(dir, "summary.json");

    // Skip if summary already exists
    if (fs.existsSync(summaryPath)) {
      skipped++;
      continue;
    }

    try {
      console.log(`→ ${owner}/${repo}`);
      const readme = await fetchReadme(owner, repo);
      if (!readme) {
        console.error(`  ✗ No README found`);
        errors.push({ repo: `${owner}/${repo}`, error: "no README" });
        continue;
      }

      const summary = await summarize(owner, repo, readme);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(summaryPath, JSON.stringify({
        generated_at: new Date().toISOString(),
        model: MODEL,
        ...summary,
      }, null, 2));

      console.log(`  ✓ ${summary.summary.slice(0, 80)}...`);
      processed++;

      // Be polite to the API
      await new Promise((r) => setTimeout(r, 1000));
    } catch (e) {
      console.error(`  ✗ ${e.message}`);
      errors.push({ repo: `${owner}/${repo}`, error: e.message });
    }
  }

  console.log(`\n✓ Generated ${processed} new summaries, ${skipped} already existed`);
  if (errors.length > 0) {
    console.log(`⚠️  ${errors.length} errors:`);
    errors.forEach((e) => console.log(`   - ${e.repo}: ${e.error}`));
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
