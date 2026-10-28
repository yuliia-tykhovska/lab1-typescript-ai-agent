# Laboratory work 1 report

## 1. Topic, purpose, and variant

**Topic:** Designing an AI agent for development automation and CI/CD.

**Purpose:** Gain practical skills in designing and using AI automation for software development.

**Variant:** 6 - TypeScript, npm-compatible scripts, and Vitest.

Replace the title-page placeholders in `README.md` with the student's full name and group.

## 2. Problem solved by the AI agent

The agent creates and verifies a minimal cross-platform TypeScript Hello World application. It separates project scaffolding, build/test configuration, and GitHub Actions setup into reusable skills, then coordinates them through an idempotent orchestrator.

## 3. Component interaction

```text
build-engineer.agent.md
          |
          v
project-scaffold -> build-and-test -> github-actions
          |                 |                  |
          +-------- prompt commands -----------+
                            |
                            v
                      init -> check
```

## 4. Required listings and evidence

- Manifest: `.github/agents/build-engineer.agent.md`
- Skills: `.github/skills/*/SKILL.md`
- Commands: `.github/prompts/*.prompt.md`
- Source and test: `src/`, `tests/math.test.ts`
- CI: `.github/workflows/ci.yml`
- AI log: `docs/ai-log.md`

## 5. Results

Local verification completed successfully:

```text
Structural checks passed.
Test Files  1 passed (1)
Tests       2 passed (2)
Hello, World!
```

Add links/screenshots for each GitHub Actions matrix result after pushing the repository. Include the pull-request URL and the required demonstration-video URL.

## 6. Conclusion

The agent automates project creation, TypeScript compilation, Vitest testing, and CI setup. Its safety constraints and explicit verification steps prevent unreviewed changes, secret disclosure, and false success reports.
