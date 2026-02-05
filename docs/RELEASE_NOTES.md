# Release Notes

## v0.0.80rc4 - Dynamic Links & Scene Refactor

### Dynamic Link/Unlink

Links can now be added and removed at runtime via `vuer.workspace`:

```python
from vuer import Vuer
from vuer.workspace import jpg

vuer = Vuer()

@vuer.spawn(start=True)
async def main(session):
    # Add links dynamically
    vuer.workspace.link(lambda: jpg(camera.frame), "/live/frame.jpg")
    vuer.workspace.link(lambda: {"status": "recording"}, "/api/status")

    # Access at /workspace/live/frame.jpg

    await do_recording()

    # Remove when done
    vuer.workspace.unlink("/live/frame.jpg")

    await session.forever()
```

### Scene Refactor

- **`Scene`** is now minimal with empty `bgChildren` by default
- **`DefaultScene`** includes rich defaults:
  - Grid, HemisphereLightStage, Gamepad, Hands, MotionControllers
  - SceneCamera (position `[0, 5, 10]`), SceneCameraControl
  - CameraPreviewThumbs, CameraPreviewOverlay
- Removed deprecated parameters: `defaultLights`, `defaultOrbitControls`, `show_helper`

### Other Changes

- Updated `params-proto` to 3.2.4

---

## v0.0.80rc2 - Workspace Link API & Image Encoders

This release candidate adds convenience methods for serving dynamic content and in-memory images.

### New Features

#### `Workspace.link()` Method

Link callables to URL paths for serving dynamic content:

```python
from vuer import Vuer
from vuer.workspace import jpg, png

vuer = Vuer()

# Serve in-memory images
vuer.workspace.link(lambda: jpg(camera.frame), "/live/frame.jpg")
vuer.workspace.link(lambda: png(depth_map), "/depth.png")

# JSON endpoints
vuer.workspace.link(lambda: {"status": "ok"}, "/api/status")

# With request parameter for query args
vuer.workspace.link(lambda r: jpg(render(r.query["angle"])), "/render.jpg")
```

**Features:**
- Follows `os.link(src, dst)` convention: source first, destination second
- Auto-detects content-type from `MIME_TYPES` (`.jpg` → `image/jpeg`)
- Optional request parameter via signature inspection
- Supports bytes, dict/list (JSON), Blob, and string return types

#### Image Encoders

New encoder utilities for serving in-memory images:

```python
from vuer.workspace import jpg, png, b64jpg, b64png

# Encode as bytes (for HTTP responses)
jpg(image, quality=90)   # JPEG bytes (strips alpha)
png(image)               # PNG bytes (supports alpha)

# Encode as base64 data URIs (for embedding in HTML/JSON)
b64jpg(image)            # "data:image/jpeg;base64,..."
b64png(image)            # "data:image/png;base64,..."
```

Images should be numpy arrays or torch tensors with values in [0, 1] range.

#### Custom MIME Types

`MIME_TYPES` is now a `MimeTypes` class with a `guess()` method:

```python
from vuer.workspace import MIME_TYPES

# Add custom types
MIME_TYPES[".npy"] = "application/x-npy"
MIME_TYPES[".h5"] = "application/x-hdf5"

# Guess content-type
MIME_TYPES.guess("data.npy")  # "application/x-npy"
```

### New Exports

```python
from vuer import Workspace, Blob
from vuer.workspace import jpg, png, b64jpg, b64png, MIME_TYPES
```

---

## v0.0.80rc1 - Workspace Multi-Path & Provider Pattern

This release candidate introduces a powerful new **Workspace** system for multi-path file serving,
new **Provider** patterns for high-performance instanced rendering, and new visualization components.

### New Features

#### Multi-Path Workspace System

The `workspace` parameter now accepts multiple paths and supports programmatic file serving:

```python
from vuer import Vuer, Workspace

# Single path (unchanged)
vuer = Vuer(workspace="./data")

# Multiple paths - files resolved in order
vuer = Vuer(workspace=["./local_data", "./shared_assets", "/mnt/datasets"])

# Workspace object with mounts
workspace = Workspace(["./data"])
workspace.mount("/api/config", lambda req: {"status": "ok"})
vuer = Vuer(workspace=workspace)
```

**Key Changes:**
- `static_root` is deprecated → use `workspace`
- `/static` endpoint renamed → `/workspace`
- `vuer.static_prefix` → `vuer.workspace_prefix`
- `vuer.localhost_prefix` now points to `/workspace`

#### New Blob Class for In-Memory Data

```python
from vuer import Blob

# Serve in-memory data with explicit content-type
blob = Blob(data=my_bytes, content_type="image/png")
```

#### DepthPointCloud Component

Generate point clouds directly from depth images with colormap support:

```python
from vuer.schemas import DepthPointCloud

sess.upsert @ DepthPointCloud(
    key="depth-pc",
    depth=vuer.localhost_prefix / "depth.png",
    cmap="viridis",      # turbo, viridis, inferno, jet
    colorMode="worldY",  # depth, camZ, camDist, localY, worldY
    fov=58,              # RealSense D435 default
)
```

#### DepthPointCloudProvider for High Performance

Render thousands of depth point clouds at 120fps with frustum culling and LoD:

```python
from vuer.schemas import DepthPointCloud, DepthPointCloudProvider

sess.upsert @ DepthPointCloudProvider(
    DepthPointCloud(key="pc-0", depth="depth_0.png", position=[0, 0, 0]),
    DepthPointCloud(key="pc-1", depth="depth_1.png", position=[2, 0, 0]),
    key="provider",
    frustumCulling=True,
)
```

#### BoundingBox Component

Render 3D bounding boxes with customizable edges and walls:

```python
from vuer.schemas import BoundingBox

sess.upsert @ BoundingBox(
    key="bbox",
    color="red",
    size=[2, 1, 3],
    edgeOpacity=0.9,
    wallOpacity=0.08,
)
```

#### BoundingBoxProvider for Instanced Rendering

Render tens of thousands of bounding boxes efficiently:

```python
from vuer.schemas import BoundingBox, BoundingBoxProvider

sess.upsert @ BoundingBoxProvider(
    key="provider",
    maxInstances=10000,
    children=[
        BoundingBox(key=f"box-{i}", color="green", position=[i*2, 0, 0])
        for i in range(1000)
    ]
)
```

### API Changes Summary

| Old API | New API | Notes |
|---------|---------|-------|
| `static_root="./data"` | `workspace="./data"` | Deprecated with warning |
| `vuer.static_prefix` | `vuer.workspace_prefix` | Network-accessible URL |
| `/static/file.png` | `/workspace/file.png` | Endpoint renamed |
| Single path only | Multiple paths supported | `workspace=["./a", "./b"]` |

### New Exports

```python
from vuer import Vuer, VuerSession, Workspace, Blob
from vuer.schemas import (
    DepthPointCloud,
    DepthPointCloudProvider,
    BoundingBox,
    BoundingBoxProvider,
)
```

### Documentation

- New [Depth Point Cloud](examples/point_clouds/depth_pointcloud.md) example
- New [Bounding Box](components/bounding_box.md) component reference
- New [Workspace API](api/workspace.md) reference

---

## Upcoming Release

### Breaking Changes

- **Renamed `kill` parameter to `free_port`**: The `kill` parameter in `Vuer.start()` and `Vuer.run()` has been renamed to `free_port` for better clarity.
  ```python
  # Old
  main.start(kill=True)

  # New
  main.start(free_port=True)
  ```

### Bug Fixes

#### SSL/TLS Client Certificate Handling

Fixed an issue where the HTTPS server would request client certificates even when mutual TLS (mTLS) was not configured.

**Before:** Setting `cert` and `key` alone would still prompt browsers for client certificates.

**After:** Client certificates are only requested when `ca_cert` is explicitly provided:
```python
# Standard HTTPS - no client cert required
app = Vuer(cert='/path/to/cert.pem', key='/path/to/key.pem')

# Mutual TLS - client cert required
app = Vuer(cert='/path/to/cert.pem', key='/path/to/key.pem', ca_cert='/path/to/ca.pem')
```

This fix allows WebXR applications to work seamlessly with self-signed certificates without browser prompts for client authentication.

### New Features

#### Improved Decorator Pattern

The spawn decorator now returns a `BoundFn` instance with a `.start()` method, enabling a cleaner pattern:

```python
app = Vuer()

@app.spawn()  # or @app.spawn
async def main(session: VuerSession):
    session.upsert @ Box(args=[0.2, 0.2, 0.2], key="box")
    await session.forever()

main.start()  # Start the server when ready
```

**Benefits:**
- Works identically in regular Python and IPython/Jupyter
- More explicit control over when the server starts
- Clearer separation between definition and execution

#### IPython/Jupyter Support

Vuer now seamlessly detects and works with IPython/Jupyter environments:

```python
# Cell 1: Define your app
@app.spawn()
async def main(session):
    ...

# Cell 2: Start the server
main.start()  # Returns immediately, server runs in background
```

The server automatically detects the existing event loop and schedules itself accordingly.

#### New `session.forever()` Method

Added `VuerSession.forever()` to keep sessions alive indefinitely:

```python
@app.spawn()
async def main(session: VuerSession):
    session.upsert @ Box(args=[0.2, 0.2, 0.2], key="box")
    await session.forever()  # Keep session alive
```

This replaces manual event waiting patterns.

#### Comprehensive Component Definitions

Added 18 new component definitions from schema specification:

**Scene Components (16 new):**
- **Transform & Render:** `VuerSplat`, `VuerGroup`, `RenderRoot`
- **Camera:** `SceneCamera`, `SceneControl`
- **Lighting:** `AmbientLightStage`
- **Preview:** `CameraPreviewThumbs`, `CameraPreviewOverlay`
- **Animation:** `AnimationClip`, `VectorTrack`, `QuaternionTrack`, `ThreeAnimate`, `PlaybackAnimate`
- **Model Loaders:** `Fbx`, `Stl`, `Dae`

**Three.js Components (2 new):**
- **Cameras:** `OrthographicCamera`, `FisheyeCamera`

Total component count now: **101 classes** across all schema modules. Complete schema definitions available in `schema.dial`.

### Improvements

#### Better `free_port` Error Handling

The `free_port` parameter now gracefully handles common errors:
- Race conditions with process lookup (silently ignored)
- Missing `psutil` dependency (informative message)
- Other killport failures (warning but continues)

No more crashes when freeing ports!

#### Class-Based Decorator Implementation

The internal implementation has been refactored from nested functions to a cleaner `BoundFn` class:
- Better code organization
- Easier to understand and maintain
- Provides the `.start()` method

### Deprecations

- **`Vuer.run()` is deprecated**: Use `Vuer.start()` instead. The `run()` method now issues a `DeprecationWarning` and will be removed in a future version.
  ```python
  # Deprecated
  app.run()

  # Use instead
  app.start()
  ```

### Documentation

- Added `docs/tutorials/basics/ipython_jupyter.md` - Complete guide for IPython/Jupyter usage
- Added `QUICKSTART.md` - Quick start guide with installation and basic examples
- Updated all tutorials to use the new `@app.spawn()` + `main.start()` pattern
- Simplified "Setting Up Your First Scene" tutorial
- Improved async programming tutorial with clearer examples

### Bug Fixes

- Fixed `RuntimeError: There is no current event loop` in IPython/Jupyter
- Fixed crashes when using `free_port=True` with race conditions
- Fixed event loop handling for Python 3.10+

### Internal Changes

- Refactored `spawn()` and `bind()` decorators to use `BoundFn` class
- Added `Server.start()` method in base class with IPython/Jupyter detection
- Improved error handling for port freeing operations
- Added `omit()` function with glob pattern support for cleaner code
