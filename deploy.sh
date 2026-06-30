#!/usr/bin/env bash
# ===========================================================
#  Simple one-command deploy script (Mac/Linux)
#  Usage:  ./deploy.sh
#
#  Stages all changes, commits them, and pushes to the current
#  branch's remote. If there is nothing to commit it prints
#  "Nothing to deploy" and exits without touching git.
# ===========================================================

# Stop on the first error so a failed step never leaves the
# repo in a half-deployed state.
set -euo pipefail

echo "=== Checking repository status ==="
git status

# git status --porcelain is empty when the working tree is clean.
if [ -z "$(git status --porcelain)" ]; then
  echo
  echo "Nothing to deploy"
  exit 0
fi

echo
echo "=== Staging changes ==="
git add .

echo
echo "=== Committing ==="
git commit -m "auto deploy update"

echo
echo "=== Pushing ==="
git push

echo
echo "=== Deploy complete ==="
