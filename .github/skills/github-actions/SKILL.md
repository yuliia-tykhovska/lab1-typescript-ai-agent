---
name: github-actions
description: Creates a cross-platform GitHub Actions workflow that delegates building and testing to repository scripts.
---

# When to use

Use this skill for `create-actions` after the package build and test scripts exist.

# Input

- Package scripts: `check`, `build`, `test`, and `start`
- Target runners: Ubuntu, Windows, and macOS

# Output

- `scripts/ci.sh` for Unix runners and `scripts/ci.bat` for Windows.
- Each CI script installs dependencies, runs `check`, builds, tests, and runs Hello World.
- `.github/workflows/ci.yml` with one matrix job that delegates all build/test work to those scripts.

# Verification

Confirm that both CI scripts exist, then confirm that the workflow contains `ubuntu-latest`, `windows-latest`, `macos-latest`, checkout, Node.js setup, and only delegates build/test work to the CI scripts.

# Typical failure

If a CI script is missing, create it before creating the workflow. If the workflow includes secrets, stop and report the issue. Do not add credentials to repair CI.

# Example

Input: `create-actions`.

Expected result: one CI matrix job for all three operating systems.
