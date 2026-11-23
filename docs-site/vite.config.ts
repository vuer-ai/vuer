import { defineConfig } from 'vite'
import { readFileSync } from 'node:fs'
import { execSync } from 'node:child_process'
// dockit() returns the whole docs plugin stack (Tailwind v4, MDX + shiki,
// React, Vike). Spread it: `vike prerender` only finds Vike's plugin at the
// top level of `plugins`.
import { dockit } from '@dreamlake/dockit/vite'

// The version chip shows the version of the Python package this site documents.
const pyproject = readFileSync(new URL('../pyproject.toml', import.meta.url), 'utf-8')
const APP_VERSION = pyproject.match(/^version\s*=\s*"([^"]+)"/m)?.[1] ?? '0.0.0'

const GIT_HASH = (() => {
  try {
    return execSync('git rev-parse --short=6 HEAD', { encoding: 'utf-8' }).trim()
  } catch {
    return 'dev'
  }
})()

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(APP_VERSION),
    __GIT_HASH__: JSON.stringify(GIT_HASH),
  },
  plugins: [...dockit()],
  server: { port: Number(process.env.DOCS_PORT) || 3030 },
})
