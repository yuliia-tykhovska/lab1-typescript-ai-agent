# Usage

## Prerequisites

- Node.js 22 or later
- pnpm 11 or a compatible package manager
- Git
- A GitHub account with GitHub Copilot, for running the agent prompts

## Run the agent

Open this repository in VS Code while signed into the GitHub account with Copilot access. In Copilot Chat, choose the `Build Engineer` custom agent and invoke the prompt files from `.github/prompts/`.

Run the commands in this order:

1. `git-init`
2. `create-project`
3. `create-build`
4. `create-actions`
5. `check`

Alternatively invoke `init`; it orchestrates the same ordered sequence and must stop at the first error.

## Local verification

```powershell
pnpm install
pnpm run check
pnpm run build
pnpm run test
pnpm run start
```

`pnpm run check` is read-only: it validates required files, package scripts, the CI matrix, type checking, and tests. `pnpm run build` produces `dist/hello.js`; `pnpm run start` executes it.

## CI scripts

On Unix runners use `sh scripts/ci.sh`. On Windows use `scripts\ci.bat`. Both install dependencies, check the repository, build, test, and run Hello World.
