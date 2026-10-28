#!/usr/bin/env sh
set -eu

pnpm install --frozen-lockfile
pnpm run check
pnpm run build
pnpm run test
pnpm run start
