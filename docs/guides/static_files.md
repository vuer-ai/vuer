# Static File Serving & Hot Loading

## Overview

Vuer includes a built-in static file server that allows you to serve 3D models, textures, and other assets alongside your visualization. This guide covers how to configure static file serving and use **hot loading** for assets that change frequently during development.

## Static File Configuration

### The `static_root` Parameter

When initializing your Vuer application, you can specify where static files are served from using the `static_root` parameter:

```python
from vuer import Vuer

# Serve static files from the current directory (default)
app = Vuer(static_root=".")

# Or specify a custom path
app = Vuer(static_root="/path/to/your/assets")

# Or use Path objects
from pathlib import Path
app = Vuer(static_root=Path(__file__).parent / "assets")
```

### URL Structure

Static files are served under the `/static` endpoint. For example:

```python
app = Vuer(static_root="./my_assets")

# File at: ./my_assets/models/robot.obj
# Accessible via: /static/models/robot.obj
```

### Using Static Files in Your Scene

Once configured, you can reference static files in your Vuer components:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Obj, ImageBackground

app = Vuer(static_root="./assets")

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        # Load 3D model from static files
        Obj(
            key="robot",
            src="/static/models/robot.obj",
            mtl="/static/models/robot.mtl"
        ),
        # Use texture as background
        ImageBackground(
            src="/static/textures/skybox.jpg"
        )
    )

    await session.forever()
```

## Hot Loading with `?hot`

### What is Hot Loading?

In Vuer, **hot loading** is a concept for handling assets that change frequently during development. When you mark an asset as "hot", Vuer treats it as dynamic content that should always reflect the latest version from disk.

Think of hot loading as telling Vuer:
> *"This asset is actively being edited. Always show me the newest version."*

This is especially useful when:
- Iteratively refining 3D models, textures, or materials
- Experimenting with different asset variations
- Debugging asset-related issues

### Using Hot URLs

To mark an asset as hot, append `?hot` to its URL:

```python
# Development: Hot loading for frequently changing assets
session.upsert @ Obj(
    key="model",
    src="/static/model.obj?hot",
    mtl="/static/model.mtl?hot"
)

# Or with textures
session.upsert @ ImageBackground(
    src="/static/environment.jpg?hot"
)
```

### Hot URL Syntax

The `?hot` parameter can appear anywhere in the query string:

```
/static/model.obj?hot              ✅ Works
/static/model.obj?hot&debug=true   ✅ Works (any position)
/static/model.obj?v=1&hot          ✅ Works (any position)
```

To explicitly disable hot loading, set it to `false`:

```
/static/model.obj?hot=false        ❌ Hot loading disabled
```

### How Hot Loading Works

When an asset is marked as hot:

1. **Loader behavior:** Vuer tells the browser to always check for updates
2. **Instant updates:** When you save changes to the file, they appear immediately
3. **Efficient:** Unchanged files are not re-downloaded (uses HTTP 304 responses)

This creates a smooth development experience where your changes are reflected instantly without manual page refreshes or cache clearing.

## Development vs Production

### Development Mode (Hot Assets)

During development, mark assets you're actively editing as hot:

```python
@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        # Hot loading for assets being actively edited
        Obj(
            key="robot",
            src="/static/robot.obj?hot",
            mtl="/static/robot.mtl?hot"
        )
    )
```

### Production Mode (Static Assets)

In production, omit the `?hot` parameter to allow efficient browser caching:

```python
@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        # Standard loading with browser caching
        Obj(
            key="robot",
            src="/static/robot.obj",
            mtl="/static/robot.mtl"
        )
    )
```

## Pattern: Conditional Hot Loading

You can conditionally enable hot loading based on your environment:

```python
from pathlib import Path
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Obj, Pcd

app = Vuer(static_root=Path(__file__).parent / "assets")

@app.spawn(start=True)
async def main(session: VuerSession):
    # Determine if in development mode
    DEV_MODE = True  # Toggle based on your environment

    # Helper function to create hot URLs in dev mode
    def asset(path: str) -> str:
        """Mark asset as hot in development mode."""
        return f"{path}?hot" if DEV_MODE else path

    session.set @ DefaultScene(
        Obj(
            key="robot",
            src=asset("/static/models/robot.obj"),
            mtl=asset("/static/models/robot.mtl")
        ),
        Pcd(
            key="scan",
            src=asset("/static/scans/room.ply")
        )
    )

    await session.forever()
```

### Using Environment Variables

For more flexibility, use environment variables to control hot loading:

```python
import os
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Obj

app = Vuer(static_root="./assets")

# Check if running in production
IS_PRODUCTION = os.getenv("PRODUCTION", "false").lower() == "true"

def asset(path: str) -> str:
    """Generate asset URL with hot loading in development."""
    return path if IS_PRODUCTION else f"{path}?hot"

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Obj(
            key="model",
            src=asset("/static/model.obj"),
            mtl=asset("/static/model.mtl")
        )
    )

    await session.forever()
```

Then run with:
```bash
# Development (with hot loading)
python my_app.py

# Production (standard loading)
PRODUCTION=true python my_app.py
```

## Understanding Hot vs Static Assets

### Hot Assets (`?hot`)
- **Use for:** Assets you're actively editing
- **Behavior:** Always reflect latest version from disk
- **Performance:** Minimal overhead (uses HTTP 304 for unchanged files)
- **Example:** Model you're refining in Blender, texture you're adjusting

### Static Assets (no parameter)
- **Use for:** Stable assets that rarely change
- **Behavior:** Browser caches efficiently
- **Performance:** Optimal (no server requests after initial load)
- **Example:** Final models, published textures, shared assets

## Best Practices

1. **Development workflow:**
   - Mark assets as `?hot` while actively editing them
   - Remove `?hot` once assets are finalized

2. **Performance:**
   - Don't mark all assets as hot—only those you're currently working on
   - Static assets load faster and reduce server load

3. **Team collaboration:**
   - Use environment variables to automatically enable hot loading in development
   - This prevents accidentally deploying hot URLs to production

4. **Debugging:**
   - If you don't see changes, verify the asset has `?hot` in the URL
   - Check the browser network tab to confirm the file is being fetched

## Complete Example

Here's a complete example showing hot loading for development:

```python
from pathlib import Path
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Obj, Pcd, ImageBackground

app = Vuer(
    static_root=Path(__file__).parent / "assets",
    port=8012
)

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        # Model you're actively refining - hot load
        Obj(
            key="robot",
            src="/static/models/robot.obj?hot",
            mtl="/static/models/robot.mtl?hot"
        ),

        # Stable point cloud - standard load
        Pcd(
            key="background-scan",
            src="/static/scans/room.ply"
        ),

        # Texture you're tweaking - hot load
        ImageBackground(
            src="/static/backgrounds/sky.jpg?hot"
        )
    )

    await session.forever()
```

## Summary

- **`static_root`**: Configure where static files are served from
- **`?hot`**: Mark frequently changing assets for instant updates
- **Hot loading**: A development concept for assets that change often
- **Production**: Remove `?hot` for optimal caching and performance

Hot loading provides a seamless development experience where your asset changes are instantly visible, without the complexity of build systems or manual cache management.

## See Also

- [Session APIs](session_apis.md) - Managing scene updates
- [Loading 3D Models](../examples/meshes.md) - Examples of loading different formats
- [Component Index](../components/category_3d_models.md) - All available 3D model components
