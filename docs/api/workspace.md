# `Workspace`

The Workspace class manages static and dynamic file serving with support for multiple
search paths (overlay), similar to how `$PATH` works for executables.

## Overview

When assets are spread across multiple directories, Workspace provides a unified
interface to serve them all:

```python
from vuer import Vuer

vuer = Vuer(workspace=["./assets", "/data/robots", "./fallback"])
```

## API Summary

| Method | Description |
|--------|-------------|
| `vuer.workspace.link(target, "/path")` | Link file or callable to URL |
| `vuer.workspace.unlink("/path")` | Remove a link |
| `vuer.workspace.find("file.txt")` | Find file in overlay |
| `vuer.workspace.mount("./dir", to="/route")` | Mount single directory |
| `vuer.workspace.paths` | Access paths (read-only tuple) |

## Usage Examples

### Basic Usage

```python
from vuer import Vuer

# Single path (simplest)
vuer = Vuer(workspace="./assets")

# Multiple paths - searched in order, first match wins
vuer = Vuer(workspace=["./local", "/shared/assets", "/data"])
```

### Overlay Behavior

The overlay works like `$PATH` - paths are searched in order:

```python
vuer = Vuer(workspace=["./local", "/shared", "/data"])

# Request for /workspace/robot.urdf searches:
#   1. ./local/robot.urdf
#   2. /shared/robot.urdf
#   3. /data/robot.urdf
# Returns first match found

# Find a file programmatically
path = vuer.workspace.find("models/robot.urdf")
if path:
    print(f"Found at: {path}")
```

### Dynamic Links

Links can be added and removed at runtime. The `link()` method accepts either a file path
or a callable:

```python
from pathlib import Path
from vuer import Vuer
from vuer.workspace import jpg, png

vuer = Vuer()

@vuer.spawn(start=True)
async def main(session):
    # === Static links ===

    # Link a file directly (alias to a different URL path)
    vuer.workspace.link("./robots/panda.urdf", "/robot.urdf")

    # Link raw bytes directly
    vuer.workspace.link(b"raw binary data", "/data.bin")

    # === Dynamic callable links ===

    # JSON response
    vuer.workspace.link(lambda: {"status": "ok", "count": 42}, "/api/status")

    # Serve in-memory images
    vuer.workspace.link(lambda: jpg(camera.frame), "/live/frame.jpg")
    vuer.workspace.link(lambda: png(depth_map), "/depth.png")

    # Serve file bytes directly
    vuer.workspace.link(lambda: Path("./scene.xml").read_bytes(), "/scene.xml")

    # Dynamic file selection via query params
    vuer.workspace.link(
        lambda r: Path(f"./robots/{r.query.get('model', 'panda')}.urdf"),
        "/robot.urdf"
    )

    # Render with query params
    vuer.workspace.link(
        lambda r: jpg(render(angle=float(r.query.get("angle", 0)))),
        "/render.jpg"
    )

    # Async handler
    async def get_data(request):
        data = await fetch_from_db()
        return {"data": data}

    vuer.workspace.link(get_data, "/api/data")

    # Remove a link when done
    vuer.workspace.unlink("/live/frame.jpg")

    await session.forever()
```

## Custom MIME Types

Add custom MIME types for auto-detection in `link()` and static file serving:

```python
from vuer.workspace import MIME_TYPES

# Add custom extensions
MIME_TYPES[".npy"] = "application/x-npy"
MIME_TYPES[".npz"] = "application/x-npz"
MIME_TYPES[".h5"] = "application/x-hdf5"
```

## Future Workspace Types

The Workspace interface is designed for extensibility:

- `Workspace` - Local filesystem (current)
- `DashWorkspace` - ML-Dash experiments (future)
- `McapWorkspace` - MCAP recordings (future)
- `S3Workspace` - S3 buckets (future)

All workspace types will share the same interface (`overlay()`, `mount()`, `link()`).

## API Reference

```{eval-rst}
.. automodule:: vuer.workspace
   :members:
   :show-inheritance:
```
