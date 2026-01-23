---
description: Vuer - real-time 3D visualization toolkit for robotics and AI
topics: [vuer, 3d, visualization, robotics, webxr, python]
---

# Vuer

Vuer is a lightweight, event-driven, declarative visualization toolkit for GenAI and robotics. It provides real-time 3D visualization in the browser with VR/AR support.

## Architecture

```
Python Backend (async/aiohttp) <--WebSocket--> Browser Client (Three.js)
```

## Installation

```bash
pip install 'vuer[all]'
```

## Basic Usage

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Box, Sphere

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Box(key="box", args=[0.2, 0.2, 0.2], position=[0, 0, 0]),
        Sphere(key="sphere", args=[0.1], position=[0.5, 0, 0]),
    )
    await session.forever()
```

View at https://vuer.ai (connects to ws://localhost:8012 by default).

## Core Concepts

- **Vuer**: Server class that manages WebSocket connections
- **VuerSession**: Server-side session with scene manipulation APIs
- **VuerClient**: Python client for connecting to a Vuer server
- **Components**: Declarative 3D elements (Box, Sphere, TriMesh, Urdf, etc.)
- **Events**: Bidirectional communication via `@app.add_handler()`

## Session APIs

| API | Purpose |
|-----|---------|
| `session.set @ Scene(...)` | Initialize root scene (once) |
| `session.upsert @ Element(...)` | Update or insert element |
| `session.update @ Element(...)` | Update existing only |
| `session.add @ Element(...)` | Add new element |
| `session.remove @ "key"` | Remove by key |

## Related Skills

- [vuer/server](vuer/server.md) - Server configuration and lifecycle
- [vuer/client](vuer/client.md) - Python client for remote connections
- [vuer/components](vuer/components.md) - Component reference
- [vuer/events](vuer/events.md) - Event system and handlers
- [vuer/examples](vuer/examples.md) - Common patterns
- [vuer/xr](vuer/xr.md) - VR/AR features
