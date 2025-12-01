# 3.1.4 Camera Control

Vuer provides two types of cameras for viewing your 3D scenes.

- Main Camera - The default user viewport with interactive OrbitControls
- [Virtual Cameras](../../tutorials/camera/README.md) (CameraView) - Programmable cameras for off-screen rendering and multi-view displays

This chapter only covers the usage of the first type of camera. You'll learn how to:

- Camera Behavior in VR/AR
- How to disable default camera interaction controls
- Set up different camera types (Perspective and Orthographic)
- Configure camera parameters like field of view and position

By default, Vuer provides a perspective camera at `[0, 2, 2]` with `OrbitControls` enabled, so you can start building scenes immediately. This chapter shows you how to customize these defaults.

## VR/AR Camera Behavior
**Key parameters:** `left`, `right`, `top`, `bottom` (define view boundaries), `near`, `far`, `position`, `lookAt`, `makeDefault`

In WebXR sessions (VR/AR), the camera is controlled by the headset. Simply create a normal scene - Vuer automatically handles VR/AR mode when the user clicks the VR button

**VR Camera Characteristics:**
- Position: Tracked by headset (6DOF)
- Rotation: Tracked by headset
- IPD (interpupillary distance): Automatically handled
- Render: Stereo rendering for both eyes
- OrbitControls: Automatically disabled in VR mode

**Note:** To test VR mode, you need a VR headset and a WebXR-compatible browser. The VR button appears automatically in the top-right corner of the scene.

## Interactive Camera Controls

Vuer provides interactive camera controls through the `OrbitControls` component. By default, Vuer includes OrbitControls in every scene, so you can immediately interact with your 3D scenes.

**Mouse/Touch Controls:**
- **Left click + drag**: Rotate around target
- **Right click + drag**: Pan (move sideways)
- **Scroll wheel**: Zoom in/out
- **Touch**: One finger to rotate, two fingers to pan/zoom

### Basic Scene Setup

Here's a minimal scene with default controls:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Box

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ Scene(
        Box(args=[1, 1, 1], position=[0, 0.5, 0], key="box"),

        # Default camera at [0, 2, 2] with OrbitControls enabled
    )

    await session.forever()
```

The scene above automatically includes:
- A `PerspectiveCamera` at position `[0, 2, 2]`
- `OrbitControls` for interaction
- Default lighting

### Disabling OrbitControls

To create a fixed camera view without interaction, set `defaultOrbitControls=False`:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Box
from vuer.schemas import PerspectiveCamera

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ Scene(
        Box(args=[1, 1, 1], position=[0, 0.5, 0], key="box"),

        defaultOrbitControls=False,  # Disable interactive controls
    )

    await session.forever()
```

This keeps all other defaults (Grid, Lights, etc.) while only removing OrbitControls.

**Use cases:**
- Cinematic presentations or product showcases
- Fixed viewpoint demonstrations
- Guided tours with programmatic camera animation

## Camera Types

Vuer supports two main camera types: **PerspectiveCamera** and **OrthographicCamera**. Each serves different purposes in 3D visualization.

### PerspectiveCamera - Realistic View

Perspective cameras mimic how the human eye sees the world: objects appear smaller as they get farther away. This is the default camera type and is ideal for most 3D applications.

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Box
from vuer.schemas import PerspectiveCamera, OrbitControls

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ Scene(
        Box(args=[1, 1, 1], position=[0, 0.5, 0], key="box"),
        Box(args=[1, 1, 1], position=[0, 0.5, -5], key="far-box"),

        up=[0, 1, 0],
        grid=True,
        rawChildren=[
            PerspectiveCamera(
                key="main-camera",
                fov=60,                    # Field of view in degrees
                near=0.1,                  # Near clipping plane
                far=1000,                  # Far clipping plane
                position=[0, 3, 5],
                lookAt=[0, 0, 0],          # Point at scene center
                makeDefault=True,
            ),
        ],
    )

    await session.forever()
```

**Key parameters:** `fov` (field of view, default: 75°), `near` (default: 0.1), `far` (default: 1000), `position`, `lookAt`, `makeDefault`

**When to use:**
- Games and interactive 3D applications
- Product visualization and showcases
- Architectural walkthroughs
- Any scene requiring depth perception

### OrthographicCamera - Technical View

Orthographic cameras render objects at the same size regardless of distance. Parallel lines remain parallel, making it perfect for technical drawings and 2D games.

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Box
from vuer.schemas import OrthographicCamera, OrbitControls

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ Scene(
        Box(args=[0.1, 0.1, 0.1], position=[0, 0, 0], key="box"),
        Box(args=[0.1, 0.1, 0.1], position=[0, 0, -0.5], key="far-box"),

        up=[0, 1, 0],
        grid=True,
        rawChildren=[
            OrthographicCamera(
                key="ortho-camera",
                left=-100,                   # Left boundary
                right=100,                   # Right boundary
                top=100,                     # Top boundary
                bottom=-100,                 # Bottom boundary
                near=1,
                far=100,
                position=[0, 3, 5],
                lookAt=[0, 0, 0],
                makeDefault=True,
            ),
        ],
    )

    await session.forever()
```

**Key parameters:** `left`, `right`, `top`, `bottom` (define view boundaries), `near`, `far`, `position`, `lookAt`, `makeDefault`

**When to use:**
- CAD and technical drawings
- 2D games with isometric view
- Data visualization where size consistency matters
- Blueprint or schematic visualization

## Camera Properties Reference

### Scene Parameters

Control default camera and controls behavior through Scene parameters:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `defaultOrbitControls` | `bool` | True | Include OrbitControls in default components |
| `defaultLights` | `bool` | True | Include default lighting setup |
| `grid` | `bool` | True | Show ground grid |
| `up` | `[x, y, z]` | `[0, 1, 0]` | Up vector for the scene |

### PerspectiveCamera

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `fov` | `float` | 75 | Vertical field of view (degrees) |
| `near` | `float` | 0.1 | Near clipping plane distance |
| `far` | `float` | 1000 | Far clipping plane distance |
| `position` | `[x, y, z]` | `[0, 0, 0]` | Camera position in 3D space |
| `rotation` | `[x, y, z]` | `[0, 0, 0]` | Camera rotation (radians) |
| `lookAt` | `[x, y, z]` | - | Point camera toward this position |
| `zoom` | `float` | 1 | Zoom level multiplier |
| `makeDefault` | `bool` | False | Set as the active camera |

### OrthographicCamera

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `left` | `float` | -1 | Left boundary of view frustum |
| `right` | `float` | 1 | Right boundary of view frustum |
| `top` | `float` | 1 | Top boundary of view frustum |
| `bottom` | `float` | -1 | Bottom boundary of view frustum |
| `near` | `float` | 0.1 | Near clipping plane distance |
| `far` | `float` | 1000 | Far clipping plane distance |
| `position` | `[x, y, z]` | `[0, 0, 0]` | Camera position in 3D space |
| `rotation` | `[x, y, z]` | `[0, 0, 0]` | Camera rotation (radians) |
| `lookAt` | `[x, y, z]` | - | Point camera toward this position |
| `zoom` | `float` | 1 | Zoom level multiplier |
| `makeDefault` | `bool` | False | Set as the active camera |

### OrbitControls

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `target` | `[x, y, z]` | `[0, 0, 0]` | Point to orbit around |
| `enableDamping` | `bool` | False | Enable smooth damping |
| `dampingFactor` | `float` | 0.05 | Damping strength (lower = smoother) |
| `enableZoom` | `bool` | True | Allow zoom in/out |
| `enablePan` | `bool` | True | Allow panning |
| `enableRotate` | `bool` | True | Allow rotation |
| `minDistance` | `float` | 0 | Minimum zoom distance |
| `maxDistance` | `float` | Infinity | Maximum zoom distance |
| `minPolarAngle` | `float` | 0 | Minimum vertical angle (radians) |
| `maxPolarAngle` | `float` | π | Maximum vertical angle (radians) |
| `makeDefault` | `bool` | False | Set as default controls |

## What's Next?

Now that you understand camera control basics, you can:

**Continue with rendering:**
- [Lights](./05_lights.md) - Illuminate your scenes properly
- [Post-processing Effects](./06_post_processing.md) - Add bloom and visual effects
- [Path Tracing](./07_path_tracing.md) - Create photorealistic renders

**Advanced camera features** (for later exploration):
- [Virtual Camera Tutorial](../../tutorials/camera/grab_render_virtual_camera.md) - Capture images from multiple cameras
- [Recording Camera Movement](../../tutorials/camera/record_camera_movement.md) - Save and replay camera animations
