---
name: build-and-test
description: Configures TypeScript compilation and Vitest unit testing for the laboratory project.
---

# When to use

Use this skill for `create-build` after the project scaffold exists.

# Input

- Source directory: `src/`
- Test directory: `tests/`
- Build tool: TypeScript compiler through an npm-compatible script
- Test framework: Vitest

# Output

- `package.json`, `tsconfig.json`, `vitest.config.ts`.
- `pnpm-workspace.yaml` when pnpm is used, with an explicit build-script policy.
- A BasicAddition unit test and `build`, `test`, and `check` scripts.
- A read-only structural-check script, for example `scripts/check.mjs`.

# Check command contract

The `check` script must not create, edit, or delete project files. It must validate all of the following before reporting success:

- the agent manifest, all three skills, and the six prompt commands exist;
- TypeScript source files and at least one Vitest test exist;
- `package.json` defines `build`, `start`, `test`, and `check` scripts;
- `.github/workflows/ci.yml` exists and names `ubuntu-latest`, `windows-latest`, and `macos-latest`;
- generated directories such as `node_modules`, `dist`, and `build` are covered by `.gitignore`.

Then it must run TypeScript type checking and Vitest. A suitable command is `node scripts/check.mjs && tsc --noEmit && vitest run`.

# Verification

Run `pnpm run check`, `pnpm run build`, and `pnpm run test`. The compiled program must be runnable with `pnpm run start`.

# Typical failure

If pnpm reports `ERR_PNPM_IGNORED_BUILDS` for `esbuild`, approve only that named dependency with `pnpm approve-builds esbuild`, then rerun the installation. This records an explicit `allowBuilds` policy in `pnpm-workspace.yaml`. Never use `--all` and never approve an unreviewed package.

If dependencies remain unavailable or a compiler/test error occurs, stop, show the exact failing command, and preserve the files for review.

# Example

Input: `create-build for TypeScript and Vitest`.

Expected result: successful type checking, a passing BasicAddition test, and compiled output in `dist/`.
