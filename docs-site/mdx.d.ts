declare module '*.mdx' {
  import type { ComponentType } from 'react'
  export const frontmatter: Record<string, unknown>
  const Component: ComponentType
  export default Component
}

declare module '*?raw' {
  const content: string
  export default content
}

/** Injected via Vite `define` in vite.config.ts. */
declare const __APP_VERSION__: string
declare const __GIT_HASH__: string
