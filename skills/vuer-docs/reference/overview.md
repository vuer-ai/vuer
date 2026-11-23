# Vuer

Vuer shows 3D scenes in a web browser and in VR/AR headsets. A Python program
controls the scene. The browser client renders it with React and three.js.
The two parts talk over one WebSocket.

| Part | Package | Repository |
| --- | --- | --- |
| Python server and client | `vuer` on PyPI | [vuer-ai/vuer](https://github.com/vuer-ai/vuer) |
| TypeScript client | `@vuer-ai/vuer` on npm | vuer-ai/vuer-ts (private) |

> **Warning:** This site documents vuer **0.2.0** and @vuer-ai/vuer **0.1.0**. These versions
> are in review and are not on PyPI or npm yet. The current releases are vuer
> 0.1.6 and @vuer-ai/vuer 0.0.103.

## What changes in 0.2.0

- [Wire protocol 2](reference/transport-protocol.md): numpy arrays go on the wire as binary
  typed arrays, not as lists. Old clients continue to get lists.
- [Access tokens and roles](reference/transport-auth.md): one-time, N-use and reusable
  links; `viewer` and `controller` roles; an origin allow-list.
- [Streaming queues](reference/transport-streaming.md): the "latest frame wins" policy for
  slow clients.
- [Library mode](reference/client-library-mode.md): show a vuer scene in a React app with
  no server.
- [Theme](reference/client-theme.md): the workspace UI uses `@dreamlake/uikit` and follows
  the host theme.
- [Packaging](reference/client-packaging.md): real peer ranges for React 19,
  react-three-fiber 9 and three r178 or later.
- [Python 3.10 and module layout](reference/python-python-310.md): Python 3.10 or later; the
  scene components are in smaller modules with the same imports.

Read the [migration guide](reference/release-migration.md) before you upgrade.

## Next step

Go to the [quickstart](reference/get-started-quickstart.md).
