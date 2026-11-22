---
name: vuer-docs
description: Vuer is a Python server and a React/three.js client for 3D and robotics visualization over WebSockets: scene tree, events, binary arrays, access tokens and roles, and an embeddable client library. Use when answering questions about Vuer (Introduction, Library mode, CI and local tests, Quickstart, Python 3.10 and module layout, Migrate from 0.1 to 0.2, Wire protocol 2, Theme and UI kit, Access tokens and roles, Packaging, Streaming queues).
---
# Vuer

Vuer is a Python server and a React/three.js client for 3D and robotics visualization over WebSockets: scene tree, events, binary arrays, access tokens and roles, and an embeddable client library.

This skill bundles the Vuer documentation. Read the reference
file that matches the question; each is a self-contained markdown page.

## Reference

**Get started**

- `reference/overview.md` — Introduction: Vuer is a Python server and a React client for 3D and robotics visualization. This site documents vuer 0.2.0 and @vuer-ai/vuer 0.1.0.
- `reference/get-started-quickstart.md` — Quickstart: Install vuer, start a server, and open the scene in a browser.

**Client**

- `reference/client-library-mode.md` — Library mode: Show a vuer scene in any React 19 app with no Python server and no WebSocket, with VuerScene, VuerLocalProvider and a WebGL-free test renderer.
- `reference/client-theme.md` — Theme and UI kit: The ./workspace entry uses @dreamlake/uikit ^0.3.0 and follows the host theme; there is no theme switch.
- `reference/client-packaging.md` — Packaging: Peer dependency ranges of @vuer-ai/vuer 0.1.0, optional peers, and the standalone install.

**Development**

- `reference/development-ci.md` — CI and local tests: What runs in PR CI (lint, typecheck, fast unit tests), what runs locally (browser, render, GPU), and how to rebuild the bundled client.

**Python**

- `reference/python-python-310.md` — Python 3.10 and module layout: vuer 0.2.0 needs Python 3.10 or later; scene components are split into modules under vuer.schemas._scene with unchanged public imports.

**Release**

- `reference/release-migration.md` — Migrate from 0.1 to 0.2: Every breaking change in vuer 0.2.0 and @vuer-ai/vuer 0.1.0, who it affects, and the fix.

**Transport**

- `reference/transport-protocol.md` — Wire protocol 2: Binary arrays (MessagePack ExtType 0x56), the protocol handshake, SERVER_INFO, and compatibility with old clients.
- `reference/transport-auth.md` — Access tokens and roles: Tokens at the WebSocket handshake, one-time / N-use / reusable links, viewer and controller roles, `vuer token`, and the VUER_CORS origin allow-list.
- `reference/transport-streaming.md` — Streaming queues: The fifo and latest uplink and downlink policies, frame keys, and how to stream full frames to slow clients.

## Canonical source

These docs live at https://vuer-docs.dreamlake.ai. Each page is also fetchable as markdown
at `<page-url>.md`, and the full corpus at https://vuer-docs.dreamlake.ai/llms-full.txt.
