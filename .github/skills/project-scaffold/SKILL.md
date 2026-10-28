---
name: project-scaffold
description: Creates the minimal TypeScript Hello World project structure without overwriting user work.
---

# When to use

Use this skill for `create-project` after confirming that the repository root is the intended target.

# Input

- Project name: `lab1-typescript-ai-agent`
- Language: TypeScript
- Greeting: `Hello, World!`

# Output

- `src/hello.ts` with a runnable greeting function.
- `src/math.ts`, `tests/`, `README.md`, `.gitignore`, and required directories.

# Verification

Confirm the files exist and that `package.json` declares a `start` script. Do not overwrite a differing existing implementation; report the conflict instead.

# Typical failure

If the target is not a Git repository or the destination file already contains user work, stop and ask for direction rather than replacing it.

# Example

Input: `create-project for lab1-typescript-ai-agent`.

Expected result: a TypeScript source tree with `src/hello.ts` and a documented start command.
