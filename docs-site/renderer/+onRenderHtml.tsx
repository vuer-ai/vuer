// site.config MUST come first: it runs initDocs before anything renders.
import '../site.config'
import '../styles/app.css'
export { onRenderHtml } from '@dreamlake/dockit/server'
