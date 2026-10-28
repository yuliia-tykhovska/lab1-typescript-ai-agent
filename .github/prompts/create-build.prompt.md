---
description: Configure TypeScript build scripts and Vitest tests.
agent: build-engineer
---

Apply the `build-and-test` skill. Configure strict TypeScript compilation, npm-compatible scripts, and Vitest. Add a `BasicAddition` unit test. If pnpm blocks the `esbuild` postinstall script, resolve only that named dependency with `pnpm approve-builds esbuild`, then retry installation; do not use `--all`. Run the declared checks and stop if one fails.
