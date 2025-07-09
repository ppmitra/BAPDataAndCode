#!/usr/bin/env bash
set -euo pipefail

# Usage: ./publish.sh "Your commit message"
MSG="${1:-Update site content}"

echo "Adding files…"
git add .

echo "Committing…"
git commit -m "$MSG"

echo "Pushing to origin/main…"
git push origin main

echo "Done!"

