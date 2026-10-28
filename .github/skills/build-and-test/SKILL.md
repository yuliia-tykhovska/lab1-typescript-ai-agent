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
- A BasicAddition unit test and `build`, `test`, and `check` scripts.

# Verification

Run `pnpm run check`, `pnpm run build`, and `pnpm run test`. The compiled program must be runnable with `pnpm run start`.

# Typical failure

If dependencies are unavailable or a compiler/test error occurs, stop, show the exact failing command, and preserve the files for review.

# Example

Input: `create-build for TypeScript and Vitest`.

Expected result: successful type checking, a passing BasicAddition test, and compiled output in `dist/`.
