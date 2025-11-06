# WebXR Mesh Detection

## Overview

The WebXRMesh component enables detection and rendering of environmental surfaces like walls, floors, and furniture in AR mode. It supports two modes of operation:

1. **Auto-Update Mode**: Automatically detects and pushes mesh changes (new/updated/removed) to the server
2. **RPC Mode**: Server requests mesh data on-demand

**Full example:** [vuer-examples/vuer-webxr-mesh-demo](https://github.com/vuer-examples/vuer-webxr-mesh-demo)

Here's what WebXRMesh component looks like on devices that support it (e.g., Meta Quest 3):

```{eval-rst}
.. video:: ../_static/26_webxr_mesh.mp4
    :alt: WebXR Mesh Detection Demo with Vuer and Quest 3
    :autoplay:
    :nocontrols:
    :loop:
    :muted:
    :preload: auto
    :width: 100%
```

## Requirements

- WebXR-compatible device with mesh detection support (e.g., Quest 3, ARCore devices)
- WebXR session must be initialized with 'mesh-detection' feature
- Immersive-ar mode must be active

## Usage

### Auto-Update Mode

In auto-update mode (default), the client automatically detects mesh changes and pushes updates to the server only when changes occur:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import WebXRMesh

app = Vuer()

@app.add_handler("WEBXR_MESH_UPDATE")
async def handle_mesh_update(event, session):
    meshes = event.value.get('meshes', [])
    print(f"Mesh update: {len(meshes)} meshes")
    for mesh in meshes:
        print(f"  Vertices: {len(mesh['vertices'])/3:.0f}")
        print(f"  Semantic: {mesh.get('semanticLabel', 'unknown')}")

@app.spawn(start=True)
async def main(session: VuerSession):
    session.upsert(
        WebXRMesh(
            key="webxr-mesh",
            autoUpdate=True,  # Enable auto-update (default)
            color="blue",
            opacity=0.15
        ),
        to="bgChildren",
    )
    await session.forever()
```

### RPC Mode

In RPC-only mode (disable auto-update), the server requests mesh data on-demand:

```python
from asyncio import sleep
from vuer import Vuer, VuerSession
from vuer.schemas import WebXRMesh

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.upsert(
        WebXRMesh(
            key="webxr-mesh",
            autoUpdate=False,  # Disable auto-update, use RPC only
            color="green",
            opacity=0.2
        ),
        to="bgChildren",
    )

    await sleep(2)  # Wait for meshes to be detected

    # Request mesh data on-demand using RPC
    mesh_data = await session.get_webxr_mesh(key="webxr-mesh")
    meshes = mesh_data.value.get('meshes', [])
    print(f"Retrieved {len(meshes)} meshes")
```

**Note:** You can also use RPC mode together with auto-update (default behavior). RPC requests work regardless of the `autoUpdate` setting.

## Component Parameters

- `key` (str): Unique identifier for the component (default: "webxr-mesh")
- `color` (str): Mesh material color - CSS color string or hex (optional)
- `opacity` (float): Material opacity for solid mesh (default: 0.15, range: 0.0-1.0)
- `autoUpdate` (bool): Enable automatic updates when meshes change (default: True)
  - When `True`: Automatically sends `WEBXR_MESH_UPDATE` events when changes are detected
  - When `False`: Only RPC mode is available for on-demand queries

## Data Structure

Each detected mesh contains:

- `vertices`: Float32Array of vertex positions (x, y, z coordinates)
- `indices`: Uint32Array of triangle indices
- `semanticLabel`: Optional semantic classification (e.g., "wall", "floor", "furniture")
- `matrix`: 16-element transformation matrix (4x4 in column-major order)
