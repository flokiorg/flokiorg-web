#!/usr/bin/env bash
set -euo pipefail

branch="${1:-main}"

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "Preparing commits for branch '${branch}'..."
else
  echo "No changes detected. Exiting."
  exit 0
fi

echo "\nStaging project configuration updates..."
git add -A .env.example .eslintignore .eslintrc README.md package.json scripts/inject-banner.js commits.sh
git add -A makefile yarn.lock

git commit -m "chore: update project config"

echo "\nStaging site refresh changes..."
git add -A public src/components src/constants src/pages src/styles src/utils

git commit -m "feat: refresh site content"

echo "\nPushing commits to origin/${branch}..."
git push origin "${branch}"

echo "\nAll done."
