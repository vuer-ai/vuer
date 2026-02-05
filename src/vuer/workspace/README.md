# Workspace

The Workspace module provides flexible static file serving with overlay path support,
similar to how `$PATH` works for executables.

## Basic Usage

```python
from vuer import Vuer

# Single path
app = Vuer(workspace="./assets")

# Multiple paths - first match wins (like $PATH)
app = Vuer(workspace=["./local", "/shared/robots", "/data/textures"])
```

For advanced configuration (mounts, links), use the `Workspace` class:

```python
from vuer import Vuer, Workspace, jpg

workspace = Workspace("./assets", "/shared")
workspace.mount("./uploads", to="/uploads")
workspace.link(lambda: {"status": "ok"}, "/api/status")
workspace.link(lambda: jpg(camera.frame), "/live/frame.jpg")

app = Vuer(workspace=workspace)
```

When a file is requested at `/workspace/robot.urdf`, the paths are searched in order:
1. `./local/robot.urdf`
2. `/shared/robots/robot.urdf`
3. `/data/textures/robot.urdf`

The first match is returned.

## API Reference

### Workspace

```python
workspace = Workspace(*paths)      # Define overlay search paths
workspace.paths                    # Access paths (read-only tuple)
workspace.find("file.txt")         # Find file in overlay (sync)
workspace.resolve("file.txt")      # Resolve to Path|bytes|Blob (async)
workspace.mount("./dir", to="/x")  # Mount directory at route
workspace.link(fn, "/api")         # Link callable to URL path
```

### Image Encoders

Encode in-memory images for serving via `link()`:

```python
from vuer import jpg, png, b64jpg, b64png

# Encode as bytes (for HTTP responses)
jpg(image, quality=90)   # JPEG bytes (no alpha)
png(image)               # PNG bytes (supports alpha)

# Encode as base64 data URIs (for embedding in HTML/JSON)
b64jpg(image)            # "data:image/jpeg;base64,..."
b64png(image)            # "data:image/png;base64,..."
```

Images should be numpy arrays or torch tensors with values in [0, 1] range,
shape (H, W, C) where C is 1, 3, or 4 channels.

### Blob

Use `Blob` when you need explicit control over content-type:

```python
from vuer import Blob

# Bytes with default content-type (application/octet-stream)
Blob(data=raw_bytes)

# Text with explicit content-type
Blob(text="<robot>...</robot>", content_type="application/xml")

# JSON (automatically uses application/json)
Blob(json={"status": "ok"})
```

## Examples

### Basic File Serving

```python
from vuer import Vuer

# Serve files from ./assets at /workspace/
app = Vuer(workspace="./assets")

@app.spawn(start=True)
async def main(session):
    # Files accessible at:
    # http://localhost:8012/workspace/robot.urdf
    # http://localhost:8012/workspace/textures/metal.png
    await session.forever()
```

### Multi-Path Overlay

```python
from vuer import Vuer

# Local overrides shared, shared overrides system
app = Vuer(workspace=[
    "./local_assets",      # Highest priority
    "/shared/team_assets", # Second priority
    "/opt/system_assets",  # Lowest priority
])
```

### Additional Mounts

```python
from vuer import Vuer, Workspace

workspace = Workspace("./assets")

# Mount uploads directory at /uploads
workspace.mount("./user_uploads", to="/uploads")

# Mount exports at /exports
workspace.mount("/var/exports", to="/exports")

app = Vuer(workspace=workspace)

# Files accessible at:
# /workspace/...  -> ./assets/...
# /uploads/...    -> ./user_uploads/...
# /exports/...    -> /var/exports/...
```

### Dynamic Links

```python
from vuer import Vuer, Workspace, jpg, png

workspace = Workspace("./assets")

# JSON endpoint (no request param needed)
workspace.link(lambda: {"status": "ok", "version": "1.0"}, "/api/status")

# Serve in-memory images
workspace.link(lambda: jpg(camera.frame), "/live/frame.jpg")
workspace.link(lambda: png(depth_map), "/depth.png")

# With request param for query args
workspace.link(lambda r: render(angle=r.query.get("angle", 0)), "/render.jpg")

# Async handler
async def get_data(request):
    data = await fetch_from_database()
    return {"data": data}

workspace.link(get_data, "/api/data")

app = Vuer(workspace=workspace)
```

### Custom Workspace (Subclassing)

```python
from vuer.workspace import Workspace, Blob
from pathlib import Path

class S3Workspace(Workspace):
    """Workspace that fetches files from S3."""

    def __init__(self, bucket: str, *local_paths):
        super().__init__(*local_paths)
        self.bucket = bucket
        self.s3 = boto3.client("s3")

    async def exists(self, filepath: Path) -> bool:
        # Check local first
        if filepath.is_file():
            return True
        # Then check S3
        try:
            self.s3.head_object(Bucket=self.bucket, Key=str(filepath))
            return True
        except:
            return False

    async def resolve(self, filename: str):
        # Try local paths first
        result = await super().resolve(filename)
        if result is not None:
            return result

        # Fall back to S3
        try:
            obj = self.s3.get_object(Bucket=self.bucket, Key=filename)
            return obj["Body"].read()  # Returns bytes
        except:
            return None


# Usage
workspace = S3Workspace("my-bucket", "./local_cache")
app = Vuer(workspace=workspace)
```

### Cached Workspace

```python
from vuer.workspace import Workspace

class CachedWorkspace(Workspace):
    """Workspace with in-memory caching."""

    def __init__(self, *paths):
        super().__init__(*paths)
        self.cache = {}

    async def resolve(self, filename: str):
        if filename in self.cache:
            return self.cache[filename]

        result = await super().resolve(filename)
        if isinstance(result, Path):
            # Cache file contents
            self.cache[filename] = result.read_bytes()
            return self.cache[filename]

        return result
```

### Return Blob with Custom Content-Type

```python
from vuer.workspace import Workspace, Blob
import json

class ApiWorkspace(Workspace):
    """Workspace that can generate dynamic content."""

    async def resolve(self, filename: str):
        # Handle special API files
        if filename == "config.json":
            config = {"debug": True, "version": "2.0"}
            return Blob(json=config)

        if filename == "scene.xml":
            xml = generate_scene_xml()
            return Blob(text=xml, content_type="application/xml")

        # Fall back to file system
        return await super().resolve(filename)
```

## Supported MIME Types

The following robotics-related MIME types are auto-detected:

| Extension | Content-Type |
|-----------|--------------|
| `.urdf`, `.xacro`, `.srdf`, `.sdf`, `.mjcf` | `application/xml` |
| `.dae` | `model/vnd.collada+xml` |
| `.stl` | `model/stl` |
| `.obj` | `model/obj` |
| `.glb` | `model/gltf-binary` |
| `.gltf` | `model/gltf+json` |
| `.ply` | `application/x-ply` |
| `.pcd` | `application/x-pcd` |

Plus all standard MIME types via Python's `mimetypes` module.

## Hot Reload

Add `?hot` to any URL to disable caching (useful during development):

```
http://localhost:8012/workspace/robot.urdf?hot
```

This sets `Cache-Control: no-cache` on the response.
