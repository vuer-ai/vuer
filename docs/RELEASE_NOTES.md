# Release Notes

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
