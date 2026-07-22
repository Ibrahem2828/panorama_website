import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, "..");
const workflowPath = join(repositoryRoot, ".github", "workflows", "ci.yml");
const requiredCommands = [
  "npm ci",
  "npm run type-check",
  "npm run lint",
  "npm run test",
  "npm run test:repository",
  "npm run build",
];

assert.ok(
  existsSync(workflowPath),
  "GitHub Actions workflow must exist in a full repository checkout: .github/workflows/ci.yml",
);

const workflow = readFileSync(workflowPath, "utf8");

assert.match(
  workflow,
  /^\s*node-version:\s*22(?:\.\d+\.\d+)?\s*$/m,
  "GitHub Actions must use a Node.js 22 runtime",
);

for (const command of requiredCommands) {
  assert.ok(
    workflow.includes("- run: " + command),
    "GitHub Actions must execute the required command: " + command,
  );
}

console.log("Repository contract verified: GitHub Actions uses Node 22 and runs all required quality gates.");
