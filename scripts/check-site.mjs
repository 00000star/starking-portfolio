import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const requiredFiles = [
  "index.html",
  "styles.css",
  "scripts.js",
  "assets/codex-architecture.svg",
  "case-studies/the-codex.md",
  "HUMANITY_PROJECTS.md",
  "project-specs/disaster-mesh-communications.md",
  "project-specs/clean-water-field-guide.md",
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

for (const id of ["main", "projects", "humanity", "case-study", "stack", "roadmap"]) {
  if (!html.includes(`id="${id}"`)) failures.push(`Missing section id: ${id}`);
}

for (const href of ["./styles.css", "./scripts.js", "./assets/codex-architecture.svg"]) {
  if (!html.includes(href)) failures.push(`Missing asset reference: ${href}`);
}

if (!html.includes("https://github.com/00000star/Civilizationx")) {
  failures.push("Missing Civilizationx GitHub link");
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
