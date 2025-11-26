# 3.1.4 Camera Control

## Overview

Vuer provides two types of cameras for viewing your 3D scenes:

1. **Main Camera** - The default user viewport with interactive OrbitControls
2. **Virtual Cameras (CameraView)** - Programmable cameras for off-screen rendering and multi-view displays

This guide covers both camera types and how to use them effectively.

## Main Camera with OrbitControls

Vuer provides interactive camera controls through the `OrbitControls` component. To enable camera interaction, you need to add `OrbitControls` to your scene's `rawChildren`:

**Controls:**
- **Left mouse drag**: Rotate around target
- **Right mouse drag**: Pan
- **Scroll wheel**: Zoom in/out
- **Touch**: Single finger rotate, two fingers pan/zoom

### Basic Scene with OrbitControls

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Box, Plane
from vuer.schemas import AmbientLight, DirectionalLight, OrbitControls

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ Scene(
        # ... your scene objects ...

        up=[0, 1, 0],
        grid=True,
        rawChildren=[
            AmbientLight(key="ambient", intensity=0.3),
            OrbitControls(key="controls"),
        ],
    )

    await session.forever()
```

### Fixed Camera Views (No Controls)

For fixed camera views or cinematic presentations, simply don't add `OrbitControls` to your scene:

```python
session.set @ Scene(
    # ... your scene objects ...


    up=[0, 1, 0],
    rawChildren=[
        AmbientLight(key="ambient", intensity=0.5),
        # Note: No OrbitControls added - camera is fixed
    ],
)
```

**Use cases:**
- Cinematic presentations
- Fixed viewpoint demos
- VR/AR experiences (headset controls camera)
- Guided tours with programmatic camera movement

## Virtual Cameras (CameraView)

![Virtual Camera Example](../../tutorials/camera/figures/grab_render_virtual_camera.png)

Virtual cameras are programmable cameras that you can control from Python. They're perfect for:
- Picture-in-picture displays
- Security camera feeds
- Depth map generation
- Multi-view rendering
- Collecting training data for ML

### Creating a Virtual Camera

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, CameraView, Box

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Box(
            args=[1, 1, 1],
            position=[0, 0.5, 0],
            materialType="standard",
            material=dict(color="#9b59b6"),
            key="box",
        ),

        rawChildren=[
            CameraView(
                key="virtual-cam",

                # Render dimensions
                width=640,
                height=480,

                # Camera properties
                fov=50,
                near=0.1,
                far=100,

                # Transform
                position=[2, 2, 2],
                rotation=[0, 0, 0],

                # Rendering options
                stream="ondemand",         # Render on request
                renderDepth=True,          # Also render depth map
                showFrustum=True,          # Visualize camera frustum
                downsample=1,              # Downsampling factor
            ),
        ],
    )

    await session.forever()
```

### Streaming Modes

Control how the virtual camera sends frames back to your Python code:

- `"ondemand"`: Render only when requested via `session.grab_render()` (recommended for most use cases)
- `"frame"`: Stream continuously based on frame rate - sends frames automatically at the specified `fps`
- `"time"`: Stream continuously based on time intervals
- `None`: No streaming - camera view visible but no frames sent to Python

**Frame rate** is controlled separately with the `fps` parameter (default: 30). Example:

```python
CameraView(
    key="my-cam",
    stream="frame",  # Continuous streaming mode
    fps=60,          # At 60 frames per second
)
```

### Capturing Images from Virtual Camera

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, CameraView, Sphere
from asyncio import sleep

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Sphere(key="sphere", args=[0.5, 32, 32]),

        rawChildren=[
            CameraView(
                key="capture-cam",
                width=1920,
                height=1080,
                position=[3, 2, 3],
                stream="ondemand",
                renderDepth=True,
            ),
        ],
    )

    await sleep(1)  # Wait for scene to load

    # Capture frame
    result = await session.grab_render(
        key="capture-cam",
        downsample=2,  # Reduce resolution by 2x
    )

    # Access image and depth
    rgb_frame = result.value["frame"]              # RGB image bytes
    depth_frame = result.value.get("depthFrame")   # Depth map (if renderDepth=True)

    # Save frames
    with open("capture.jpg", "wb") as f:
        f.write(rgb_frame)

    if depth_frame:
        with open("depth.bin", "wb") as f:
            f.write(depth_frame)
```

### Dynamically Moving Virtual Cameras

You can update virtual camera positions programmatically:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, CameraView, Box
from asyncio import sleep
from math import sin, cos

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Box(key="target", args=[1, 1, 1]),

        rawChildren=[
            CameraView(
                key="orbit-cam",
                width=640,
                height=480,
                position=[3, 2, 0],
                showFrustum=True,
            ),
        ],
    )

    # Orbit the camera around the box
    angle = 0
    while True:
        angle += 0.05
        x = 3 * cos(angle)
        z = 3 * sin(angle)

        session.upsert @ CameraView(
            key="orbit-cam",
            position=[x, 2, z],
            rotation=[0, -angle, 0],  # Look at center
        )

        await sleep(0.016)  # ~60 FPS
```

### Multiple Virtual Cameras

Create multiple viewpoints simultaneously:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, CameraView

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        # Your scene objects here
    
        rawChildren=[
            # Front view
            CameraView(
                key="front-cam",
                width=320,
                height=240,
                position=[0, 1, 3],
                fov=60,
            ),
    
            # Top view
            CameraView(
                key="top-cam",
                width=320,
                height=240,
                position=[0, 5, 0],
                rotation=[-3.14/2, 0, 0],
                fov=60,
            ),
    
            # Side view
            CameraView(
                key="side-cam",
                width=320,
                height=240,
                position=[3, 1, 0],
                rotation=[0, 3.14/2, 0],
                fov=60,
            ),
        ],
    )
```

## Camera Frustum Visualization

![Frustum Visualization](../../tutorials/camera/figures/frustum_transformation.png)

Visualize camera view volumes for debugging or artistic purposes:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Frustum, Box

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        # Target object
        Box(
            args=[0.5, 0.5, 0.5],
            position=[0, 0.5, 0],
            materialType="standard",
            material=dict(color="#3498db"),
            key="target",
        ),

        rawChildren=[
            # Visualize a virtual camera's frustum
            Frustum(
                key="cam-frustum",

                # Transform
                position=[2, 1, 0],
                rotation=[0, 0.5, 0],

                # Camera properties
                fov=50,              # Field of view (degrees)
                aspect=16/9,         # Aspect ratio
                near=0.1,            # Near plane
                far=10,              # Far plane

                # Visualization options
                showFrustum=True,    # Show frustum edges
                showFocalPlane=True, # Show focal plane
                showImagePlane=True, # Show image plane

                # Colors
                colorFrustum="yellow",
                colorFocalPlane="cyan",
                colorOrigin="red",
            ),
        ],
    )

    await session.forever()
```

**Use cases:**
- Debug camera positioning
- Visualize virtual camera coverage
- Plan security camera placement
- Artistic visualization of perspective

## VR/AR Camera Behavior

In WebXR sessions (VR/AR), the camera is controlled by the headset. Simply create a normal scene - Vuer automatically handles VR/AR mode when the user clicks the VR button

**VR Camera Characteristics:**
- Position: Tracked by headset (6DOF)
- Rotation: Tracked by headset
- IPD (interpupillary distance): Automatically handled
- Render: Stereo rendering for both eyes
- OrbitControls: Automatically disabled in VR mode

**Note:** To test VR mode, you need a VR headset and a WebXR-compatible browser. The VR button appears automatically in the top-right corner of the scene.

## Camera Properties Reference

### Main Camera (Scene)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `up` | `[x, y, z]` | `[0, 1, 0]` | Up vector for camera |

**Note:** To enable interactive camera controls, add `OrbitControls(key="controls")` to `rawChildren`.

### Virtual Camera (CameraView)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `width` | `int` | 320 | Render width (pixels) |
| `height` | `int` | 240 | Render height (pixels) |
| `fov` | `float` | 50 | Vertical field of view (degrees) |
| `near` | `float` | 0.1 | Near clipping plane |
| `far` | `float` | 100 | Far clipping plane |
| `position` | `[x,y,z]` | `[0,0,0]` | Camera position |
| `rotation` | `[x,y,z]` | `[0,0,0]` | Camera rotation (radians) |
| `matrix` | `list` | - | 4x4 transformation matrix |
| `stream` | `str` | `"ondemand"` | Stream mode |
| `renderDepth` | `bool` | `True` | Render depth map |
| `showFrustum` | `bool` | `True` | Visualize frustum |
| `downsample` | `int` | 1 | Downsampling factor |

## Performance Tips

1. **Limit virtual cameras**: Each virtual camera adds rendering overhead
2. **Use appropriate resolution**: Don't render 4K if 720p suffices
3. **Use ondemand streaming**: Only render when needed
4. **Disable showFrustum in production**: Frustum rendering adds draw calls

## What's Next?

Now that you understand camera control, you can:

**Continue with rendering:**
- [Lights](./05_lights.md) - Illuminate your scenes properly
- [Post-processing Effects](./06_post_processing.md) - Add bloom and visual effects
- [Path Tracing](./07_path_tracing.md) - Create photorealistic renders

**Explore camera features:**
- [Virtual Camera Tutorial](../../tutorials/camera/grab_render_virtual_camera.md) - Deep dive into CameraView
- [Recording Camera Movement](../../tutorials/camera/record_camera_movement.md) - Capture user interactions
- [Event Types API](../../api/events.md) - Handle camera movement events
