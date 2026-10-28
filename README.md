# Laboratory work 1 - TypeScript AI agent

| Field | Value |
|---|---|
| Student | **[replace with your full name]** |
| Group | **[replace with your group]** |
| Variant | 6 |
| Language | TypeScript |
| Build/run | npm-compatible scripts (pnpm) |
| Tests | Vitest |

## Purpose

This repository contains a specialised GitHub Copilot agent that scaffolds, builds, tests, and verifies a minimal cross-platform TypeScript Hello World project.

## Quick start

```powershell
pnpm install
pnpm run check
pnpm run build
pnpm run test
pnpm run start
```

Expected output from the final command is `Hello, World!`.

## Copilot agent commands

In GitHub Copilot Chat, use the prompt files in `.github/prompts/` in this order:

1. `git-init`
2. `create-project`
3. `create-build`
4. `create-actions`
5. `check`

Or use `init` to orchestrate the full sequence. Details are in [docs/usage.md](docs/usage.md).
