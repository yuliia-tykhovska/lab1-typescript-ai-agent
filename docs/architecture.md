# Architecture

## Purpose

The build engineer agent automates creation and verification of the laboratory TypeScript project while keeping potentially destructive Git and secret-handling actions out of scope.

## Agent components

| Component | Location | Responsibility |
|---|---|---|
| Manifest | `.github/agents/build-engineer.agent.md` | Role, scope, safety rules, completion criteria |
| Project skill | `.github/skills/project-scaffold/SKILL.md` | Creates the basic TypeScript project tree |
| Build skill | `.github/skills/build-and-test/SKILL.md` | Configures TypeScript and Vitest |
| CI skill | `.github/skills/github-actions/SKILL.md` | Configures the cross-platform workflow |
| Commands | `.github/prompts/*.prompt.md` | User-invoked operations |
| Orchestrator | `init.prompt.md` | Coordinates all commands and stops at a failure |

## Data flow

```text
git-init
  -> create-project (source tree, README, ignore rules)
  -> create-build (package scripts, compiler configuration, tests)
  -> create-actions (CI scripts and workflow)
  -> check (structure + type check + tests)
```

Each stage consumes files made by the previous one. The orchestrator reports and stops on the first failed prerequisite or verification; it does not hide errors.

## Variant 6 adaptation

The methodical example shows `CMakeLists.txt` because it also documents C++ variant 1. Variant 6 instead uses `package.json`, `tsconfig.json`, npm-compatible scripts, and Vitest. The compiled runnable analogue of the requested `hello` executable is `dist/hello.js`, started with Node.js through `pnpm run start`.

## Safety and idempotency

The prompts require inspection before modification, preserve existing user files, exclude generated output from Git, and prohibit deleting files, force-pushing, rewriting history, publishing secrets, and changing branch protection. Repeated commands must detect existing work rather than duplicate it.
