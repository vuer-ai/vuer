# CI and local tests

Pull requests: vuer-ai/vuer#174, vuer-ai/vuer-ts#180.

## Rule

PR CI runs only lint, typecheck and fast unit tests. Browser, end-to-end,
render and GPU tests run on your computer with a script, or by manual dispatch.

## vuer (Python)

`.github/workflows/check.yml`:

- `ruff check` (a small rule set on `src/vuer`).
- `pytest` on Python 3.10 and 3.12.
- Paths filters, `concurrency` with `cancel-in-progress`, and
  `runs-on: ${{ vars.CI_RUNNER || 'ubuntu-latest' }}`.

Run the same checks locally:

```bash
uv run --python 3.10 --extra dev pytest src specs -q
```

Run the heavy checks (docs build, a server that serves `client_build`):

```bash
scripts/test-local.sh
```

## vuer-ts (TypeScript)

`.github/workflows/check.yml`: `pnpm install --frozen-lockfile`,
`pnpm typecheck`, `pnpm test`, `pnpm build`.

Local only:

```bash
pnpm test:render       # @react-three/test-renderer scenes (vitest + jsdom)
scripts/test-local.sh  # browser and render checks
```

Each PR template has the checkbox "Ran local browser/render tests
(scripts/test-local.sh)".

## Docs site

```bash
cd docs-site
pnpm install
pnpm dev     # http://localhost:3030
pnpm build   # static site in docs-site/dist/client, llms.txt, skill, search index
```

`pnpm build` also writes the agent skill to `skills/vuer-docs/` at the repository
root. Commit it with the page change. `pnpm check:llms` fails when the committed
skill is old.

## Rebuild the bundled client

The wheel contains `src/vuer/client_build`. It must match the server protocol.
In `vuer-web-workspace`, with this repository next to it as `../vuer`, and
`packages/vuer-ts` at the matching vuer-ts commit:

```bash
pnpm --filter @vuer-ai/vuer-uikit build
pnpm --filter @vuer-ai/vuer build
pnpm --filter @vuer-ai/vuer-py-client build
pnpm --filter @vuer-ai/vuer-py-client copy-client-build
python -m vuer.protocol --check-client-build
```
