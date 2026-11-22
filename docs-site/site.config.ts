/**
 * Wires the @dreamlake/dockit shell for the vuer docs. Both renderer entries
 * import this file FIRST, so `initDocs` runs before anything renders.
 */
import { initDocs, type PageFrontmatter, type DocPageLoader } from '@dreamlake/dockit'

const pageMetadata = import.meta.glob<PageFrontmatter>('./pages/**/+Page.mdx', {
  eager: true, query: '?frontmatter', import: 'default',
})
const pageLoaders = import.meta.glob<Awaited<ReturnType<DocPageLoader>>>('./pages/**/+Page.mdx')
const rawPages = import.meta.env.DEV
  ? import.meta.glob<string>('./pages/**/+Page.mdx', { eager: true, query: '?raw', import: 'default' })
  : undefined

initDocs({
  site: {
    brand: 'Vuer',
    subtitle: 'docs',
    repoUrl: 'https://github.com/vuer-ai/vuer',
    docsRepoUrl: 'https://github.com/vuer-ai/vuer',
    docsBranch: 'main',
    breadcrumbRoot: 'Vuer',
    url: 'https://vuer-docs.dreamlake.ai',
    skill: 'vuer-docs',
    summary:
      'Vuer is a Python server and a React/three.js client for 3D and robotics visualization over WebSockets: scene tree, events, binary arrays, access tokens and roles, and an embeddable client library.',
    versionChips: [{ label: 'vuer', version: __APP_VERSION__, dropdown: true }],
    gitHash: __GIT_HASH__,
    docsPagesPath: 'docs-site/pages',
  },
  pageMetadata,
  pageLoaders,
  rawPages,
  sectionOrder: ['Get started', 'Transport', 'Client', 'Python', 'Release', 'Development'],
  tabs: [],
})
