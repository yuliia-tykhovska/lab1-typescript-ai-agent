# AI interaction log

This log records the work that must be demonstrated and extended with screenshots from the GitHub Copilot account required by the course.

| Step | Request or decision | Result / evidence |
|---|---|---|
| 1 | Determine the individual variant from list number 24 and six variants. | Variant 6: TypeScript, npm scripts, Vitest. |
| 2 | Design an agent with separate project, build/test, and CI skills. | Manifest, three skills, five commands, and an `init` orchestrator were added. |
| 3 | A non-interactive package installation left an incomplete generated `node_modules` directory; Vitest then could not resolve `@vitest/utils`. | Recreated the ignored dependency directory from `pnpm-lock.yaml` and reran verification successfully. |
| 4 | Verify the generated project. | `pnpm run check`, `pnpm run build`, `pnpm run test`, and `pnpm run start` completed successfully. |

## Local verification result

```text
Structural checks passed.
Test Files  1 passed (1)
Tests       2 passed (2)
Hello, World!
```

## Required student evidence

- Add screenshots of the actual GitHub Copilot requests and answers used in VS Code.
- Add a screenshot or link to each successful GitHub Actions matrix run.
- Describe at least one observed error and its AI-assisted correction truthfully; do not claim a failure that did not occur.
