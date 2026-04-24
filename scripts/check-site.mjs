import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const requiredFiles = [
  "index.html",
  "styles.css",
  "scripts.js",
  "assets/codex-architecture.svg",
  "assets/portfolio-preview.svg",
  "case-studies/the-codex.md",
  "case-studies/index.html",
  "case-studies/the-codex.html",
  "case-studies/paperclip-ops-cockpit.html",
  "case-studies/clean-water-field-guide.html",
  "case-studies/disaster-mesh-communications.html",
  "HUMANITY_PROJECTS.md",
  "HUMANITY_SOFTWARE_PROMPT.md",
  "HUMANITY_SOFTWARE_IDEAS_100.md",
  "REPUTATION_REVENUE_PLAN.md",
  "DONATE.md",
  ".github/FUNDING.yml",
  "project-specs/disaster-mesh-communications.md",
  "project-specs/clean-water-field-guide.md",
  "project-specs/open-repair-atlas.md",
  "project-specs/mutual-aid-logistics-os.md",
  "project-specs/open-medical-translation-cards.md",
  "project-specs/low-bandwidth-school-kit.md",
  "project-specs/local-hazard-memory-map.md",
  "project-specs/plain-language-rights-explainer.md",
  "project-specs/community-tool-library-manager.md",
  "PORTFOLIO_BUILD_PLAN.md",
  "README.md",
];

const html = readFileSync(join(root, "index.html"), "utf8");
const css = readFileSync(join(root, "styles.css"), "utf8");
const js = readFileSync(join(root, "scripts.js"), "utf8");

const failures = [];

for (const file of requiredFiles) {
  try {
    const stats = statSync(join(root, file));
    if (stats.size === 0) failures.push(`${file} is empty`);
  } catch {
    failures.push(`${file} is missing`);
  }
}

for (const id of [
  "main",
  "projects",
  "humanity",
  "unbuilt",
  "build-queue",
  "reputation",
  "support",
  "case-study",
  "stack",
  "roadmap",
]) {
  if (!html.includes(`id="${id}"`)) failures.push(`Missing section id: ${id}`);
}

for (const href of ["./styles.css", "./scripts.js", "./assets/codex-architecture.svg"]) {
  if (!html.includes(href)) failures.push(`Missing asset reference: ${href}`);
}

for (const href of [
  "./case-studies/index.html",
  "./case-studies/the-codex.html",
  "./case-studies/paperclip-ops-cockpit.html",
  "./case-studies/clean-water-field-guide.html",
  "./case-studies/disaster-mesh-communications.html",
]) {
  if (!html.includes(href)) failures.push(`Missing case study link: ${href}`);
}

if (!html.includes("https://github.com/00000star/Civilizationx")) {
  failures.push("Missing Civilizationx GitHub link");
}

if (!html.includes("https://github.com/00000star/paperclip-ai-companies")) {
  failures.push("Missing Paperclip AI Companies GitHub link");
}

if (!html.includes("https://github.com/00000star/zimsmeai-solutions")) {
  failures.push("Missing ZimSME AI Solutions GitHub link");
}

if (!html.includes("https://github.com/00000star/disaster-mesh-communications")) {
  failures.push("Missing Disaster Mesh GitHub link");
}

if (!html.includes("https://github.com/00000star/clean-water-field-guide")) {
  failures.push("Missing Clean Water GitHub link");
}

if (!html.includes("https://github.com/00000star/open-repair-atlas")) {
  failures.push("Missing Open Repair Atlas GitHub link");
}

for (const phrase of ["AI + knowledge system builds", "Opportunity funnel", "Useful to humanity"]) {
  if (!html.includes(phrase)) failures.push(`Missing reputation/revenue phrase: ${phrase}`);
}

for (const phrase of ["Funding path pending", "Software humanity needs", "Mutual Aid Logistics OS", "Selection scorecard"]) {
  if (!html.includes(phrase)) failures.push(`Missing support/brainstorm phrase: ${phrase}`);
}

for (const href of ["./HUMANITY_SOFTWARE_PROMPT.md", "./HUMANITY_SOFTWARE_IDEAS_100.md"]) {
  if (!html.includes(href)) failures.push(`Missing humanity expansion link: ${href}`);
}

for (const spec of [
  "./project-specs/disaster-mesh-communications.md",
  "./project-specs/clean-water-field-guide.md",
]) {
  if (!html.includes(spec)) failures.push(`Missing project spec link: ${spec}`);
}

if (!css.includes("@media (max-width: 900px)")) {
  failures.push("Missing responsive tablet/mobile CSS");
}

if (!css.includes("@media (prefers-reduced-motion: reduce)")) {
  failures.push("Missing reduced-motion accessibility CSS");
}

if (!js.includes("data-filter")) {
  failures.push("Missing project filter JavaScript");
}

if (failures.length > 0) {
  console.error("Portfolio check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("OK - portfolio files, links, responsive CSS, and interactions are present.");
