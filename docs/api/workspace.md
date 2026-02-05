# `Workspace`

The Workspace class manages static and dynamic file serving with support for multiple
search paths (overlay), similar to how `$PATH` works for executables.

## Overview

When assets are spread across multiple directories, Workspace provides a unified
interface to serve them all:

```python
from vuer import Vuer, Workspace

# Multiple search paths - first match wins (like $PATH)
workspace = Workspace("./assets", "/data/robots", "./fallback")

app = Vuer(workspace=workspace)
```

## API Summary

| Method | Description |
|--------|-------------|
| `Workspace(*overlay)` | Create workspace with overlay paths |
| `workspace.paths` | Access paths (read-only tuple) |
| `workspace.find("file.txt")` | Find file in overlay |
| `workspace.overlay(at="/static")` | Expose overlay at URL route |
| `workspace.mount("./dir", to="/route")` | Mount single directory |
| `workspace.link(fn, "/api")` | Link callable to URL path |

## Usage Examples

### Basic Usage

```python
from vuer import Vuer, Workspace

# Single path (simplest)
app = Vuer(workspace="./assets")

# Multiple paths - searched in order, first match wins
app = Vuer(workspace=["./local", "/shared/assets", "/data"])

# Explicit Workspace object
workspace = Workspace("./primary", "./fallback")
app = Vuer(workspace=workspace)
```

### Overlay Behavior

The overlay works like `$PATH` - paths are searched in order:

```python
workspace = Workspace("./local", "/shared", "/data")

# Request for /static/robot.urdf searches:
#   1. ./local/robot.urdf
#   2. /shared/robot.urdf
#   3. /data/robot.urdf
# Returns first match found

# Find a file programmatically
path = workspace.find("models/robot.urdf")
if path:
    print(f"Found at: {path}")
```

### Additional Mounts

Mount extra directories outside the overlay:

```python
@app.spawn(start=True)
async def main(session):
    # Mount uploads directory
    app.workspace.mount("./uploads", to="/uploads")

    # Mount exports at a different route
    app.workspace.mount("/var/exports", to="/exports")
```

### Dynamic Links

Serve dynamic content with functions:

```python
from vuer import Vuer, Workspace, jpg, png

@app.spawn(start=True)
async def main(session):
    # JSON response (no request param needed)
    app.workspace.link(lambda: {"status": "ok", "count": 42}, "/api/status")

    # Serve in-memory images
    app.workspace.link(lambda: jpg(camera.frame), "/live/frame.jpg")
    app.workspace.link(lambda: png(depth_map), "/depth.png")

    # With request param for query args
    app.workspace.link(lambda r: render(r.query.get("id")), "/render.jpg")

    # Async handler
    async def get_data(request):
        data = await fetch_from_db()
        return {"data": data}

    app.workspace.link(get_data, "/api/data")

    # POST handler
    app.workspace.link(handle_submit, "/api/submit", method="POST")
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
