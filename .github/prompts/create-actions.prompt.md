---
description: Create the cross-platform GitHub Actions workflow.
agent: build-engineer
---

Apply the `github-actions` skill. First create `scripts/ci.sh` and `scripts/ci.bat`; each must install dependencies, verify, build, test, and run Hello World. Execute only the script compatible with the current operating system and inspect, rather than execute, the other one. Then create one matrix CI job for Ubuntu, Windows, and macOS. The workflow must call only those repository CI scripts for installation, verification, build, and tests. Do not add secrets.
