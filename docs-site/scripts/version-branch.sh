#!/usr/bin/env bash
# Push current HEAD to a v<version> branch for Netlify branch deploy.
# Netlify serves branch "vx.y.z" at v<x-y-z>--<site>.netlify.app.
set -euo pipefail

# ── EDIT ME ──────────────────────────────────────────────────────────
# Your Netlify site name (matches NETLIFY_SITE in set-version.mjs).
SITE="vuer-docs"
# ─────────────────────────────────────────────────────────────────────

VERSION=$(node -e "console.log(require('./package.json').version)")
BRANCH="docs-v${VERSION}"  # docs- prefix: the vuer repo already uses v<x.y.z> tags

echo "Pushing to branch: ${BRANCH}"
git push origin "HEAD:refs/heads/${BRANCH}" --force
echo "Branch deploy will be available at: https://${BRANCH//./-}--${SITE}.netlify.app"
