---
name: getting-started
description: Vuer quick start and basic usage patterns for real-time 3D visualization in robotics and AI applications (plugin:vuer@vuer)
---

# Vuer Quick Start

Vuer: Python async backend (aiohttp) <--WebSocket--> Browser client (Three.js)

## Minimal Example

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Box, Sphere

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Box(key="box", args=[0.2, 0.2, 0.2]),
        Sphere(key="sphere", args=[0.1], position=[0.5, 0, 0]),
    )
    await session.forever()
```

View at https://vuer.ai (connects to ws://localhost:8012).

## Session APIs

| API | Purpose |
|-----|---------|
| `session.set @ Scene(...)` | Initialize root scene (once) |
| `session.upsert @ Element(...)` | Update or insert element |
| `session.update @ Element(...)` | Update existing only |
| `session.add @ Element(...)` | Add new element |
| `session.remove @ "key"` | Remove by key |
