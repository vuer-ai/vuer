#!/usr/bin/env node
/**
 * Usage: node scripts/set-version.mjs <version>
 *
 * Updates the docs-deploy version in two places:
 *   - package.json at the workspace root (the canonical version used by
 *     version-branch.sh)
 *   - docs/public/versions.json (the version manifest served at /versions.json,
 *     consumed by the in-site version switcher)
 *
 * versions.json schema:
 *   {
 *     "current": "<latest>",
 *     "stable": "<stable>",
 *     "aliases": { "latest": "<url>", "stable": "<url>" },
 *     "versions": [{ "version", "url", "date" }, ...]   // newest first
 *   }
 *
 * Idempotent: if the version already exists, its url/date are refreshed.
 *
 * Run from the workspace root. Paths resolve from the invocation cwd and
 * assume the root-package.json + docs/public/versions.json layout; adjust
 * below if your docs package lives elsewhere.
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// ── EDIT ME ──────────────────────────────────────────────────────────
// Your Netlify site name. Per-version URLs are the site's branch-deploy
// addresses for branch v<x.y.z> — they always resolve once branch deploys
// are enabled, with no DNS setup. (Pretty subdomains like
// v0-2-0.your-domain.com require a manual Netlify domain-management step
// per release; most sites should skip them.)
const NETLIFY_SITE = 'vuer-docs';
const versionUrl = (version) =>
  `https://docs-v${version.replace(/\./g, '-')}--${NETLIFY_SITE}.netlify.app`;
// ─────────────────────────────────────────────────────────────────────

const version = process.argv[2];

if (!version || !/^\d+\.\d+\.\d+/.test(version)) {
  console.error('Usage: node scripts/set-version.mjs <x.y.z>');
  process.exit(1);
}

const pkgPath = resolve(process.cwd(), 'package.json');
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
pkg.version = version;
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');

const manifestPath = resolve(process.cwd(), 'public', 'versions.json'); // run from docs-site/
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

const url = versionUrl(version);
const date = new Date().toISOString().slice(0, 10);

const existing = manifest.versions.find((v) => v.version === version);
if (existing) {
  existing.url = url;
  existing.date = date;
} else {
  manifest.versions.unshift({ version, url, date });
}
manifest.current = version;

writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');

console.log(`Updated docs version to ${version}`);
console.log(`  package.json  → version: "${version}"`);
console.log(`  versions.json → current: "${version}", entry: ${url}`);
