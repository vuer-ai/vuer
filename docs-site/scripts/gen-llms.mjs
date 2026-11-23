// Generate the LLM-readable surfaces of the docs from a single source of
// truth: the MDX pages under `pages/**/+Page.mdx` (relative to this docs
// package). Nothing here is hand-maintained — every output is derived, so the
// rendered site, the web artifacts, and the importable skill never drift.
//
// Layout-agnostic: works whether the docs package is the repo root, `docs/`,
// or `packages/docs/`. The committed skill always lands at the *git repo root*
// under `skills/<name>/`; the web artifacts land in this package's
// `dist/client`. The public origin is taken from Netlify's `process.env.URL`
// at build time, falling back to `site.config.ts`'s `url`.
//
// Surfaces:
//   1. Web/fetch  → dist/client/<path>.md, /llms.txt, /llms-full.txt
//   2. Skill      → <repo-root>/skills/<name>/{SKILL.md,reference/*.md}
//                   + dist/client/skills/<name>.zip   (download)
//
// Usage:
//   node scripts/gen-llms.mjs           generate all surfaces
//   node scripts/gen-llms.mjs --check   exit 1 if the committed skill is stale
//
// Run order in `build`: AFTER `vike prerender`, BEFORE `pagefind`.

import { readFile, writeFile, mkdir, readdir, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DOCS_DIR = join(__dirname, '..')
const PAGES_DIR = join(DOCS_DIR, 'pages')
const DIST_DIR = join(DOCS_DIR, 'dist', 'client')

// Repo root = git toplevel (robust across root / docs / packages/docs layouts).
const REPO_ROOT = (() => {
  try {
    return execFileSync('git', ['rev-parse', '--show-toplevel'], {
      cwd: DOCS_DIR,
      encoding: 'utf-8',
    }).trim()
  } catch {
    return join(DOCS_DIR, '..')
  }
})()

const CHECK = process.argv.includes('--check')

const siteConfig = await loadSiteConfig()
const SKILL_NAME = siteConfig.skill
const SKILL_DIR = join(REPO_ROOT, 'skills', SKILL_NAME)

// ── source: read + parse every page ──────────────────────────────────────

async function collectPageFiles(dir) {
  const out = []
  for (const ent of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, ent.name)
    if (ent.isDirectory()) out.push(...(await collectPageFiles(full)))
    else if (ent.name === '+Page.mdx') out.push(full)
  }
  return out
}

/** Minimal frontmatter parser — flat `key: value`, string/number/boolean. */
function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\s*\n?/)
  const fm = {}
  if (!m) return { fm, body: raw }
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/)
    if (!kv) continue
    let v = kv[2].trim().replace(/^["']|["']$/g, '')
    if (v === 'true') v = true
    else if (v === 'false') v = false
    else if (/^-?\d+$/.test(v)) v = Number(v)
    fm[kv[1]] = v
  }
  return { fm, body: raw.slice(m[0].length) }
}

function pathFromFile(filePath) {
  const dir = relative(PAGES_DIR, filePath).replace(/\/\+Page\.mdx$/, '')
  return dir === 'index' ? '/' : `/${dir}`
}

/** Strip ESM imports and degrade custom MDX components to plain markdown. */
function toMarkdown(body) {
  // Code is CONTENT, not markup. The component-degrading rules below match any
  // `<Capitalized …>`, which inside a fence is a JSX example rather than a
  // component to unwrap — every such example used to come out stripped to its
  // text nodes, so a documented `<Tabs>` snippet reached an agent as a few bare
  // words. Hold code aside, transform the prose, put it back. Fences first:
  // they can contain backticks, so protecting inline spans first would cut one
  // in half.
  const held = []
  const hold = (m) => `\u0000HOLD${held.push(m) - 1}\u0000`
  let s = body
  s = s.replace(/^[ \t]*(`{3,}|~{3,})[^\n]*\n[\s\S]*?^[ \t]*\1[ \t]*$/gm, hold)
  s = s.replace(/`[^`\n]+`/g, hold)
  s = s.replace(/^[ \t]*import[\s\S]*?from\s+['"][^'"]+['"]\s*;?\s*$/gm, '')
  s = s.replace(
    /<Callout(?:\s+(?:variant|type)=["'](\w+)["'])?[^>]*>([\s\S]*?)<\/Callout>/g,
    (_m, variant, inner) => {
      const label = { warn: 'Warning', info: 'Note' }[variant] ?? 'Note'
      const text = inner.trim().replace(/\n/g, '\n> ')
      return `> **${label}:** ${text}`
    }
  )
  s = s.replace(/<Preview[^>]*>([\s\S]*?)<\/Preview>/g, (_m, inner) => inner.trim())
  s = s.replace(/<\/?[A-Z][\w]*(?:\s[^>]*)?\/?>/g, '')
  s = s.replace(/\n{3,}/g, '\n\n')
  s = s.replace(/\u0000HOLD(\d+)\u0000/g, (_m, i) => held[Number(i)])
  return s.trim() + '\n'
}

const pageFiles = await collectPageFiles(PAGES_DIR)
const pagesRaw = await Promise.all(
  pageFiles.map(async (f) => {
    const { fm, body } = parseFrontmatter(await readFile(f, 'utf-8'))
    return {
      file: f,
      path: pathFromFile(f),
      title: fm.title ?? pathFromFile(f),
      section: fm.section ?? '',
      order: fm.order ?? 99,
      description: fm.description ?? '',
      hidden: fm.hidden === true,
      noindex: fm.noindex === true,
      markdown: toMarkdown(body),
    }
  })
)
pagesRaw.sort((a, b) => a.order - b.order)

// noindex pages are internal/dev — excluded from every public artifact.
const pages = pagesRaw.filter((p) => !p.noindex)

// ── helpers ──────────────────────────────────────────────────────────────

const mdFile = (p) => (p === '/' ? 'index.md' : `${p.slice(1)}.md`)
const mdUrl = (p) => `${siteConfig.url}/${mdFile(p)}`
function firstLine(md) {
  for (const line of md.split('\n')) {
    const t = line.trim()
    if (t && !t.startsWith('#') && !t.startsWith('>')) return t.replace(/[*_`]/g, '')
  }
  return ''
}
const blurb = (p) => p.description || firstLine(p.markdown)

const knownPath = new Set(pages.map((p) => p.path))
function rewriteLinks(md, mode) {
  return md.replace(/\]\((\/[^)\s#]*)(#[^)\s]*)?\)/g, (m, path, anchor = '') => {
    if (!knownPath.has(path)) return m
    if (mode === 'skill') {
      const p = pages.find((x) => x.path === path)
      return `](reference/${refFile(p)}${anchor})`
    }
    return `](${path === '/' ? '/index' : path}.md${anchor})`
  })
}

function bySection(items) {
  const order = []
  const map = new Map()
  for (const p of items) {
    if (!map.has(p.section)) {
      order.push(p.section)
      map.set(p.section, [])
    }
    map.get(p.section).push(p)
  }
  return order.map((label) => ({ label, items: map.get(label) }))
}

// ── artifact builders ─────────────────────────────────────────────────────

function buildLlmsTxt() {
  const lines = [`# ${siteConfig.brand}`, '', `> ${siteConfig.summary}`, '']
  for (const { label, items } of bySection(pages)) {
    lines.push(`## ${label || 'Docs'}`, '')
    for (const p of items)
      lines.push(`- [${p.title}](${mdUrl(p.path)})${blurb(p) ? `: ${blurb(p)}` : ''}`)
    lines.push('')
  }
  return lines.join('\n').trim() + '\n'
}

function buildLlmsFullTxt() {
  const parts = [
    `# ${siteConfig.brand} — Full documentation`,
    '',
    `> ${siteConfig.summary}`,
    '',
    `Generated from ${siteConfig.url}. ${pages.length} pages.`,
    '',
  ]
  for (const p of pages) {
    parts.push(
      '---',
      '',
      `Source: ${siteConfig.url}${p.path === '/' ? '' : p.path}`,
      '',
      rewriteLinks(p.markdown, 'web').trim(),
      ''
    )
  }
  return parts.join('\n').trim() + '\n'
}

const refFile = (p) =>
  p.path === '/' ? 'overview.md' : `${p.path.slice(1).replace(/\//g, '-')}.md`

function buildSkillMd() {
  const titles = pages.map((p) => p.title).join(', ')
  const fm = [
    '---',
    `name: ${SKILL_NAME}`,
    `description: ${siteConfig.summary} Use when answering questions about ${siteConfig.brand} (${titles}).`,
    '---',
    '',
  ]
  const body = [
    `# ${siteConfig.brand}`,
    '',
    siteConfig.summary,
    '',
    `This skill bundles the ${siteConfig.brand} documentation. Read the reference`,
    'file that matches the question; each is a self-contained markdown page.',
    '',
    '## Reference',
    '',
  ]
  for (const { label, items } of bySection(pages)) {
    body.push(`**${label || 'Docs'}**`, '')
    for (const p of items)
      body.push(`- \`reference/${refFile(p)}\` — ${p.title}${blurb(p) ? `: ${blurb(p)}` : ''}`)
    body.push('')
  }
  body.push(
    '## Canonical source',
    '',
    `These docs live at ${siteConfig.url}. Each page is also fetchable as markdown`,
    `at \`<page-url>.md\`, and the full corpus at ${siteConfig.url}/llms-full.txt.`,
    ''
  )
  return fm.join('\n') + body.join('\n').trim() + '\n'
}

// ── write surfaces ───────────────────────────────────────────────────────

async function writeFileMk(path, content) {
  await mkdir(dirname(path), { recursive: true })
  await writeFile(path, content)
}

function buildSkillFiles() {
  const files = { 'SKILL.md': buildSkillMd() }
  for (const p of pages) files[`reference/${refFile(p)}`] = rewriteLinks(p.markdown, 'skill')
  return files
}

async function readDirTree(dir) {
  const out = {}
  if (!existsSync(dir)) return out
  for (const ent of await readdir(dir, { withFileTypes: true, recursive: true })) {
    if (ent.isFile()) {
      const full = join(ent.parentPath ?? ent.path, ent.name)
      out[relative(dir, full)] = await readFile(full, 'utf-8')
    }
  }
  return out
}

async function main() {
  const skillFiles = buildSkillFiles()

  if (CHECK) {
    const onDisk = await readDirTree(SKILL_DIR)
    const want = new Map(Object.entries(skillFiles))
    const have = new Map(Object.entries(onDisk))
    const stale = []
    for (const [k, v] of want) if (have.get(k) !== v) stale.push(k)
    for (const k of have.keys()) if (!want.has(k)) stale.push(`${k} (orphaned)`)
    if (stale.length) {
      console.error(`skills/${SKILL_NAME} is stale vs. pages. Run \`pnpm gen:llms\`. Files:`)
      for (const f of stale) console.error(`  - ${f}`)
      process.exit(1)
    }
    console.log(`skills/${SKILL_NAME} is up to date.`)
    return
  }

  await rm(SKILL_DIR, { recursive: true, force: true })
  for (const [rel, content] of Object.entries(skillFiles)) {
    await writeFileMk(join(SKILL_DIR, rel), content)
  }
  console.log(`✓ skill   skills/${SKILL_NAME} (${Object.keys(skillFiles).length} files)`)

  if (!existsSync(DIST_DIR)) {
    console.log('• dist/client absent — skipping web artifacts (run after `vike prerender`).')
    return
  }

  for (const p of pages)
    await writeFileMk(join(DIST_DIR, mdFile(p.path)), rewriteLinks(p.markdown, 'web'))
  console.log(`✓ pages   ${pages.length} .md files in dist/client`)

  await writeFile(join(DIST_DIR, 'llms.txt'), buildLlmsTxt())
  await writeFile(join(DIST_DIR, 'llms-full.txt'), buildLlmsFullTxt())
  console.log('✓ index   llms.txt, llms-full.txt')

  try {
    const zipPath = join(DIST_DIR, 'skills', `${SKILL_NAME}.zip`)
    await mkdir(dirname(zipPath), { recursive: true })
    await rm(zipPath, { force: true })
    execFileSync('zip', ['-rq', zipPath, SKILL_NAME], { cwd: join(REPO_ROOT, 'skills') })
    console.log(`✓ zip     dist/client/skills/${SKILL_NAME}.zip`)
  } catch (e) {
    console.warn('• zip skipped:', e.message)
  }
}

async function loadSiteConfig() {
  const src = await readFile(join(DOCS_DIR, 'site.config.ts'), 'utf-8')
  const pick = (k) => src.match(new RegExp(`${k}:\\s*\\n?\\s*['"]([\\s\\S]*?)['"]`))?.[1] ?? ''
  const brand = pick('brand')
  // Origin: Netlify injects URL at build; fall back to site.config `url`.
  const url = (process.env.URL || process.env.DEPLOY_PRIME_URL || pick('url')).replace(/\/$/, '')
  const slug = (s) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  return {
    brand,
    url,
    summary: pick('summary'),
    // Explicit `skill` field wins; else derive from brand + subtitle.
    skill: pick('skill') || slug(`${brand} ${pick('subtitle')}`.trim()) || slug(brand),
  }
}

await main()
