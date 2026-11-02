import { existsSync, readFileSync } from "node:fs";

const requiredFiles = [
  ".github/agents/build-engineer.agent.md",
  ".github/prompts/git-init.prompt.md",
  ".github/prompts/create-project.prompt.md",
  ".github/prompts/create-build.prompt.md",
  ".github/prompts/create-actions.prompt.md",
  ".github/prompts/check.prompt.md",
  ".github/prompts/init.prompt.md",
  ".github/skills/project-scaffold/SKILL.md",
  ".github/skills/build-and-test/SKILL.md",
  ".github/skills/github-actions/SKILL.md",
  ".github/workflows/ci.yml",
  "src/hello.ts",
  "src/math.ts",
  "tests/math.test.ts",
  "docs/architecture.md",
  "docs/usage.md",
  "package.json",
  "tsconfig.json",
  "vitest.config.ts",
  ".gitignore"
];

const missingFiles = requiredFiles.filter((file) => !existsSync(file));
if (missingFiles.length > 0) {
  throw new Error(`Required files are missing:\n${missingFiles.map((file) => `- ${file}`).join("\n")}`);
}

const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
for (const script of ["build", "start", "test", "check", "ci"]) {
  if (typeof packageJson.scripts?.[script] !== "string") {
    throw new Error(`package.json does not define the required \"${script}\" script.`);
  }
}

const workflow = readFileSync(".github/workflows/ci.yml", "utf8");
for (const requiredText of ["ubuntu-latest", "windows-latest", "macos-latest", "scripts/ci.sh", "scripts\\ci.bat"]) {
  if (!workflow.includes(requiredText)) {
    throw new Error(`CI workflow does not contain required entry: ${requiredText}`);
  }
}

console.log("Structural checks passed.");
