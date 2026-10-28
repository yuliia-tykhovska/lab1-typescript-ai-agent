---
description: Run the complete laboratory initialization scenario.
agent: build-engineer
---

Act as the orchestrator. Run `git-init`, `create-project`, `create-build`, `create-actions`, then `check`, in that exact order. Pass each step's result to the next one. Stop at the first failure, retain existing files, and give a clear failure report. A repeated run must not duplicate configuration or overwrite user work.
