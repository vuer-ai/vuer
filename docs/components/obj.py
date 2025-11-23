import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Obj

The `Obj` component loads and displays OBJ (Wavefront) 3D model files.
This is ideal for:
- Loading static 3D models from files
- Displaying pre-made assets
- Loading textured models with MTL files
- Importing models from 3D modeling software

## Basic Usage

A minimal example that loads an OBJ file from a URL:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
    from vuer import Vuer
    from vuer.schemas import DefaultScene, Obj, OrbitControls

    app = Vuer()

    @app.spawn(start=True)
    async def main(session):
        session.set @ DefaultScene(
            Obj(
                key="model",
                src="http://localhost:8012/static/model.obj",
                position=[0, 0, 0],
                scale=0.5,
            ),
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        )

        while True:
            await asyncio.sleep(1.0)

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the model |
| `src` | str | - | URL to the OBJ file |
| `buff` | bytes | - | Binary OBJ data (alternative to src) |
| `text` | str | - | OBJ file content as string (alternative to src) |
| `position` | list | `[0,0,0]` | Model position in world coordinates |
| `rotation` | list | `[0,0,0]` | Model rotation (Euler angles) |
| `scale` | float/list | `1` | Uniform or per-axis scale |

## Loading Methods

| Method | Parameter | Use Case |
|--------|-----------|----------|
| URL | `src=...` | Load from static server or CDN |
| Binary | `buff=...` | Pre-loaded binary data |
| Text | `text=...` | OBJ file as string |

## Example: Multiple Loading Methods

```python
# Method 1: From URL
Obj(key="url-loader", src="http://server/model.obj")

# Method 2: From binary buffer
with open("model.obj", "rb") as f:
    data = f.read()
Obj(key="buff-loader", buff=data)

# Method 3: From text content
with open("model.obj", "r") as f:
    text = f.read()
Obj(key="text-loader", text=text)
```

## Learn More

For detailed examples of using `Obj`, see:

- [Loading 3D Meshes](../examples/meshes/mesh.md) - Multiple mesh loading methods
"""

doc.flush()
