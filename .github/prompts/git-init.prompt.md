---
description: Initialize the Git repository when needed and update ignore rules safely.
agent: build-engineer
---

First determine whether this folder is already a Git repository. If it is not, run `git init` in this folder and verify that initialization succeeded. If it is already a repository, do not reinitialize it and preserve its existing Git configuration and history.

Then create or update `.gitignore` so that dependencies, build output, caches, logs, and secrets are not tracked. Show `git status --short --branch`. Do not commit, push, delete files, force-push, rewrite Git history, or modify branch protection.
