# Static File Serving & Cache Control

## Overview

Vuer includes a built-in static file server that allows you to serve 3D models, textures, and other assets alongside your visualization. Understanding how to configure static file serving and manage browser caching is essential for efficient development and deployment.

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

## Browser Cache Control

### The Problem: Stale Assets During Development

During development, when you modify static files (e.g., update a 3D model or texture), browsers may continue using cached versions. This means you won't see your changes immediately without manually clearing the cache (Ctrl+F5).

### The Solution: `?noCache` Parameter

Vuer provides a simple and efficient cache control mechanism using the `?noCache` query parameter. When appended to any static file URL, it forces the browser to revalidate the file on every request.

**Usage:**

```python
# Development mode - always check for updates
session.upsert @ Obj(
    key="model",
    src="/static/model.obj?noCache",
    mtl="/static/model.mtl?noCache"
)

# Or with textures
session.upsert @ ImageBackground(
    src="/static/environment.jpg?noCache"
)
```

### How `?noCache` Works

The `noCache` parameter can appear anywhere in the query string. The only restriction is that its value must not equal `false`.

**Valid formats:**
```
/static/model.obj?noCache           ✅ Works
/static/model.obj?noCache&foo=bar   ✅ Works (any position)
/static/model.obj?foo=bar&noCache   ✅ Works (any position)
/static/model.obj?noCache=true      ✅ Works
/static/model.obj?noCache=1         ✅ Works (any non-false value)
```

**Invalid format:**
```
/static/model.obj?noCache=false     ❌ Doesn't work (explicitly disabled)
```

When `noCache` is correctly specified:

1. **Server Response:** The server sets `Cache-Control: no-cache` in the HTTP headers
2. **Browser Behavior:** The browser MUST validate the file with the server on every request
3. **Efficient Bandwidth:** If the file hasn't changed, the server returns `304 Not Modified` (no file transfer)
4. **Instant Updates:** When you modify the file, the browser immediately receives the new version

### Production vs Development

**Development Mode (with `?noCache`):**
```python
@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Obj(
            key="robot",
            src="/static/robot.obj?noCache",  # Always fresh
            mtl="/static/robot.mtl?noCache"
        )
    )
```

**Production Mode (without `?noCache`):**
```python
@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Obj(
            key="robot",
            src="/static/robot.obj",  # Browser can cache
            mtl="/static/robot.mtl"
        )
    )
```

### Why Not Timestamp or Hash Parameters?

You might wonder why we use `?noCache` instead of common alternatives like `?ts=<timestamp>` or `?hash=<content-hash>`. Here's the reasoning:

**Problems with `?ts=<timestamp>`:**
- Changes URL even when file content hasn't changed
- Forces complete re-downloads instead of efficient 304 responses
- Requires server restart to update timestamps
- Unnecessarily invalidates browser cache for unchanged files

**Problems with `?hash=<content-hash>`:**
- Requires reading and hashing every file at server startup
- For large scenes (e.g., MJCF models with hundreds of assets), this means hundreds of disk reads
- Significantly slows server initialization
- Most assets rarely change, making this overhead wasteful

**Benefits of `?noCache`:**
- ✅ **Zero overhead:** No file reading or hashing required
- ✅ **Instant updates:** Browser detects changes immediately
- ✅ **Efficient bandwidth:** 304 Not Modified responses when files haven't changed
- ✅ **Simple implementation:** Just one HTTP header
- ✅ **Predictable URLs:** Same URL works consistently, easier to debug

The browser automatically detects file changes through the `ETag` header (which is based on file modification time and size), so you get instant updates without the complexity of URL manipulation.

## Complete Example

Here's a complete example showing static file configuration and cache control:

```python
from pathlib import Path
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Obj, Pcd, ImageBackground

# Configure static file serving
app = Vuer(
    static_root=Path(__file__).parent / "assets",
    port=8012
)

@app.spawn(start=True)
async def main(session: VuerSession):
    # Determine if in development mode
    DEV_MODE = True  # Set to False for production

    # Helper function to add ?noCache in dev mode
    def static_url(path: str) -> str:
        return f"{path}?noCache" if DEV_MODE else path

    session.set @ DefaultScene(
        # 3D Model
        Obj(
            key="robot",
            src=static_url("/static/models/robot.obj"),
            mtl=static_url("/static/models/robot.mtl")
        ),

        # Point Cloud
        Pcd(
            key="scan",
            src=static_url("/static/scans/room.ply")
        ),

        # Background Image
        ImageBackground(
            src=static_url("/static/backgrounds/sky.jpg")
        )
    )

    await session.forever()
```

## Advanced: Conditional Cache Control

For more control, you can conditionally enable `?noCache` based on environment variables:

```python
import os
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Obj

app = Vuer(static_root="./assets")

# Check environment
IS_PRODUCTION = os.getenv("PRODUCTION", "false").lower() == "true"

def asset_url(path: str) -> str:
    """Generate asset URL with appropriate cache control."""
    if IS_PRODUCTION:
        return path
    else:
        return f"{path}?noCache"

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Obj(
            key="model",
            src=asset_url("/static/model.obj"),
            mtl=asset_url("/static/model.mtl")
        )
    )

    await session.forever()
```

Then run with:
```bash
# Development (with hot reload)
python my_app.py

# Production (with caching)
PRODUCTION=true python my_app.py
```

## Summary

- **`static_root`**: Configure where static files are served from
- **`?noCache`**: Add to URLs during development for instant file updates
- **Remove `?noCache`**: In production for better performance through browser caching
- **Default behavior**: Without `?noCache`, browsers use heuristic caching with ETag validation

This approach provides the best balance between development convenience and production performance.

## See Also

- [Session APIs](session_apis.md) - Managing scene updates
- [Loading 3D Models](../examples/meshes.md) - Examples of loading different formats
- [Component Index](../components/category_3d_models.md) - All available 3D model components
