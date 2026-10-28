---
name: github-actions
description: Creates a cross-platform GitHub Actions workflow that delegates building and testing to repository scripts.
---

# When to use

Use this skill for `create-actions` after build and test scripts exist.

# Input

- CI scripts: `scripts/ci.sh` and `scripts/ci.bat`
- Target runners: Ubuntu, Windows, and macOS

# Output

- `.github/workflows/ci.yml` with one matrix job.

# Verification

Confirm that the workflow contains `ubuntu-latest`, `windows-latest`, `macos-latest`, checkout, Node.js setup, and only delegates build/test work to the CI scripts.

# Typical failure

If a CI script is missing or the workflow includes secrets, stop and report the issue. Do not add credentials to repair CI.

# Example

Input: `create-actions`.

Expected result: one CI matrix job for all three operating systems.
