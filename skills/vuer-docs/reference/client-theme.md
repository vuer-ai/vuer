# Theme and UI kit

Pull requests: vuer-ai/vuer-ts#182, vuer-ai/vuer-py-client#4.

## Entries

| Entry | UI kit |
| --- | --- |
| `@vuer-ai/vuer` | none |
| `@vuer-ai/vuer/workspace` (`SimpleVuer`, scene graph, properties and workspace panels) | `@dreamlake/uikit` `^0.3.0` (optional peer) |

The workspace entry used `@vuer-ai/vuer-uikit` in 0.0.x. It now uses
`@dreamlake/uikit`. `@vuer-ai/vuer-uikit` becomes a thin alias, then retires.

## Set up the workspace entry

```bash
pnpm add @dreamlake/uikit@^0.3.0
```

```css file="app.css"
@import "tailwindcss";
@import "@dreamlake/uikit/styles.css";
@source "../node_modules/@dreamlake/uikit/dist";
@source "../node_modules/@vuer-ai/vuer/dist";
```

If you do not load the stylesheet, the panels show with no kit styles.

## Controls

- Toggles are square. Vuer does not use the round variant.
- A choice of one item from a set is a button group. For example, the panel
  layout (floating or docked) is a two-button group. `?layout=dock` sets the
  initial layout.
- Panels use a translucent, blurred surface with no outline.

## Host theme

Vuer follows the host theme. It has no theme switch and it does not store a
theme preference. `useHostTheme()` (main entry) finds the theme in this order:

1. A `{ type: 'theme', theme }` message from the parent window. Vuer accepts it
   only from the DreamLake artifact host, or with `source: 'vuer-host'`.
2. `?theme=` or `#theme=` on the URL.
3. `data-theme` on the `html` element of the host page.
4. `prefers-color-scheme`.

When Vuer owns the document (its own page, or an iframe), it writes
`html[data-theme]`. When the host page sets `data-theme`, Vuer does not change it.

To set the theme of an embedded vuer iframe from your page:

```ts
iframe.contentWindow?.postMessage({ type: 'theme', theme: 'dark', source: 'vuer-host' }, '*');
```
