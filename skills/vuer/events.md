---
description: Vuer event system - client/server communication and session APIs
topics: [vuer, events, websocket, session, api]
---

# Vuer Events

Vuer uses an event-driven architecture for real-time bidirectional communication.

## Session APIs

### session.set - Initialize Scene

Sets the root scene. Use once at session start.

```python
from vuer.schemas import DefaultScene, Box

session.set @ DefaultScene(
    Box(key="box", args=[1, 1, 1]),
)
```

### session.upsert - Update or Insert

Most common API. Updates if exists, creates if not.

```python
# Single element
session.upsert @ Box(key="box", position=[1, 0, 0])

# Multiple elements
session.upsert @ [
    Box(key="box1", position=[0, 0, 0]),
    Sphere(key="sphere1", position=[1, 0, 0]),
]

# To specific parent
session.upsert(Box(key="child"), to="parent-key")
```

### session.update - Update Only

Updates existing elements. NOOP if element doesn't exist.

```python
session.update @ Box(key="box", color="blue")  # Only updates if "box" exists
```

### session.add - Add New

Adds new elements. Use when certain element doesn't exist.

```python
session.add @ Box(key="new-box")
session.add(Sphere(key="child"), to="parent-key")
```

### session.remove - Remove Elements

```python
session.remove @ "box-key"
session.remove @ ["key1", "key2", "key3"]
```

## Custom Client Events

Define custom events by subclassing `ClientEvent` with an `etype` class attribute:

```python
from vuer.events import ClientEvent

class SetPositionEvent(ClientEvent):
    etype = "SET_POSITION"
    value = [0, 0, 0]  # optional default

class ControlEvent(ClientEvent):
    etype = "CONTROL"

# Usage (from VuerClient)
await client.send @ SetPositionEvent(value=[1, 2, 3])
```

## Event Handlers

Register handlers for client events:

```python
@app.add_handler("CAMERA_MOVE")
async def on_camera(event: ClientEvent, session: VuerSession):
    print(f"Camera position: {event.value}")

# Handle custom event
@app.add_handler("SET_POSITION")
async def on_position(event: ClientEvent, session: VuerSession):
    session.upsert @ Box(key="box", position=event.value)
```

### Common Event Types

| Event Type | Description | event.value |
|------------|-------------|-------------|
| `CAMERA_MOVE` | Camera moved | position, rotation, matrix |
| `HAND_MOVE` | Hand tracking | hand data with joints |
| `OBJECT_MOVE` | Movable object moved | position, rotation |
| `CLICK` | Element clicked | element key, position |
| `UPLOAD` | File uploaded | PIL.Image |

### Handler with Cleanup

```python
cleanup = app.add_handler("CAMERA_MOVE", handler_fn)
# Later, remove the handler
cleanup()
```

### One-time Handler

```python
app.add_handler("CAMERA_MOVE", handler_fn, once=True)
```

## RPC Methods

### grab_render - Capture Frame

```python
render = await session.grab_render(quality=0.9)
image = render.value  # PIL.Image or base64 data
```

### get_webxr_mesh - AR Mesh Data

```python
mesh_data = await session.get_webxr_mesh(key="webxr-mesh")
for mesh in mesh_data.value['meshes']:
    vertices = mesh['vertices']
    indices = mesh['indices']
    label = mesh.get('semanticLabel')
```

## Background Tasks

```python
async def background_task():
    while True:
        await asyncio.sleep(1)
        print("tick")

@app.spawn(start=True)
async def main(session: VuerSession):
    task = session.spawn_task(background_task())

    session.set @ DefaultScene()
    await session.forever()

    # To cancel:
    task.cancel()
```

## Server Events (Internal)

These are sent automatically by session APIs:

| Event | Triggered By |
|-------|--------------|
| `Set` | `session.set @ Scene(...)` |
| `Update` | `session.update @ Element(...)` |
| `Add` | `session.add @ Element(...)` |
| `Upsert` | `session.upsert @ Element(...)` |
| `Remove` | `session.remove @ "key"` |
| `Frame` | `yield Frame(...)` in bind handler |

## Streaming Pattern

For high-frequency updates:

```python
@app.bind(start=True)
async def streaming(session: VuerSession):
    session.set @ DefaultScene()

    t = 0
    while True:
        t += 0.016
        yield Frame(
            Update(Box(key="box", position=[np.sin(t), 0, 0])),
            frame_rate=60
        )
```

## Error Handling

```python
@app.spawn(start=True)
async def main(session: VuerSession):
    try:
        render = await session.grab_render(ttl=2.0)
    except asyncio.TimeoutError:
        print("Render request timed out")
```
