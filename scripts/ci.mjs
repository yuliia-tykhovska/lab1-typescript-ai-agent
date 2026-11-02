import { spawnSync } from "node:child_process";

const executable = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
const commands = [
  ["install", "--frozen-lockfile"],
  ["run", "check"],
  ["run", "build"],
  ["run", "test"],
  ["run", "start"]
];

for (const args of commands) {
  const result = spawnSync(executable, args, { stdio: "inherit" });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
