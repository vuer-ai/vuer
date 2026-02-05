# SceneStore - Reactive Scene Graph Management

The `SceneStore` class provides a reactive store for managing 3D scene graph state and synchronizing it across multiple connected VuerSession clients.

## Overview

SceneStore solves a common problem in multi-client visualization: maintaining consistent scene state across all connected browsers while allowing the Python backend to track and modify the scene.

Key features:
- **Reactive updates**: Changes automatically propagate to all subscribed sessions
- **Snapshot access**: Get the current scene state at any time
- **Auto-cleanup**: Context manager pattern prevents memory leaks from disconnected sessions
- **Familiar API**: Uses the same `@` operator pattern as VuerSession

## Installation

SceneStore is included in the vuer package:

```bash
pip install vuer
```

## Quick Start

```python
import asyncio
from vuer import Vuer, VuerSession
from vuer.rtc.scene_store import SceneStore
from vuer.schemas import Box, Sphere, DefaultScene

app = Vuer()
scene_store = SceneStore()

@app.spawn(start=True)
async def main(sess: VuerSession):
    # Subscribe session - auto-unsubscribes when context exits
    async with scene_store.subscribe(sess):
        # Set initial scene
        await scene_store.set_scene(
            children=[
                Box(key="box-1", position=[0, 0, 0], color="red"),
            ]
        )

        # Main loop - update scene reactively
        t = 0
        while True:
            # Upsert updates existing nodes or adds new ones
            await scene_store.upsert @ Sphere(
                key="sphere-1",
                position=[2 * math.sin(t), 0, 2 * math.cos(t)],
                color="blue",
            )
            t += 0.1
            await asyncio.sleep(0.05)
```

## API Reference

### SceneStore

```python
from vuer.rtc.scene_store import SceneStore

store = SceneStore()
```

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `snapshot` | `SceneState` | Returns a deep copy of the current scene state |
| `upsert` | `_UpsertProxy` | Proxy for upsert operations with `@` operator |
| `add` | `_AddProxy` | Proxy for add operations with `@` operator |
| `update` | `_UpdateProxy` | Proxy for update operations with `@` operator |
| `remove` | `_RemoveProxy` | Proxy for remove operations with `@` operator |

#### Methods

##### `subscribe(session: VuerSession) -> SubscriptionContext`

Subscribe a session to receive scene updates. Use as an async context manager:

```python
async with scene_store.subscribe(sess):
    # Session receives all updates here
    await scene_store.set_scene(...)
# Session automatically unsubscribed - no memory leaks
```

##### `async set_scene(...)`

Set the entire scene state:

```python
await scene_store.set_scene(
    children=[Box(key="box")],
    bgChildren=[AmbientLight()],
    position=[0, 0, 0],
    rotation=[0, 0, 0],
    scale=[1, 1, 1],
    up=[0, 1, 0],
)
```

##### `async upsert_async(*nodes, to=None)`

Update existing nodes or add new ones:

```python
await scene_store.upsert_async(
    Box(key="box-1", color="red"),
    Sphere(key="sphere-1", radius=0.5),
)
```

##### `async add_async(*nodes, to=None)`

Add new nodes to the scene:

```python
# Add to root
await scene_store.add_async(Box(key="box"))

# Add to a specific parent
await scene_store.add_async(Sphere(key="child"), to="parent-group")
```

##### `async update_async(*updates)`

Update properties of existing nodes:

```python
await scene_store.update_async(
    {"key": "box-1", "color": "blue", "position": [1, 0, 0]},
)
```

##### `async remove_async(*keys)`

Remove nodes by key:

```python
await scene_store.remove_async("box-1", "sphere-1")
```

##### `get_node(key: str) -> Optional[SceneNode]`

Find a node by key:

```python
node = scene_store.get_node("box-1")
if node:
    print(f"Found: {node.tag} at {node.properties.get('position')}")
```

##### `has_node(key: str) -> bool`

Check if a node exists:

```python
if scene_store.has_node("box-1"):
    await scene_store.remove_async("box-1")
```

### Using the @ Operator

SceneStore supports the same `@` operator pattern as VuerSession:

```python
# Upsert
await scene_store.upsert @ Box(key="box", color="red")
await scene_store.upsert @ [Box(key="b1"), Sphere(key="s1")]

# Add
await scene_store.add @ Sphere(key="sphere")
await scene_store.add(to="parent") @ Box(key="child")

# Update
await scene_store.update @ {"key": "box", "color": "blue"}

# Remove
await scene_store.remove @ "box-key"
await scene_store.remove @ ["key1", "key2"]
```

## Usage Patterns

### Multi-Session Synchronization

```python
scene_store = SceneStore()

@app.spawn(start=True)
async def handle_session(sess: VuerSession):
    async with scene_store.subscribe(sess):
        # New clients automatically receive current scene state
        # via set_scene or can query snapshot

        # Send current state to new client
        snapshot = scene_store.snapshot
        sess.set @ Scene(**snapshot.to_dict())

        # Handle client events
        async for event in sess:
            if event.etype == "CLICK":
                # All subscribed sessions see this update
                await scene_store.upsert @ Box(
                    key=f"box-{event.value['id']}",
                    position=event.value['position'],
                )
```

### Conditional Updates

```python
async with scene_store.subscribe(sess):
    await scene_store.set_scene(children=[Box(key="target")])

    while True:
        if scene_store.has_node("target"):
            node = scene_store.get_node("target")
            current_pos = node.properties.get("position", [0, 0, 0])
            new_pos = [current_pos[0] + 0.1, current_pos[1], current_pos[2]]
            await scene_store.update @ {"key": "target", "position": new_pos}

        await asyncio.sleep(0.05)
```

### Cleanup Pattern

The context manager ensures sessions are properly unsubscribed even if errors occur:

```python
async with scene_store.subscribe(sess):
    try:
        await scene_store.set_scene(...)
        while True:
            await process_updates()
    except ConnectionError:
        # Session disconnected - context manager handles cleanup
        pass
# Subscriber automatically removed here
```

## See Also

- [vuer.rtc - CRDT Data Store](README.md)
- [VuerSession API](../guides/session_apis.md)
- [Vuer documentation](https://vuer.ai)
