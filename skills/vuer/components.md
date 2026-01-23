---
description: Vuer component reference - 3D primitives, models, cameras, and more
topics: [vuer, components, 3d, primitives, models]
---

# Vuer Components

All components are imported from `vuer.schemas`:

```python
from vuer.schemas import Box, Sphere, TriMesh, Urdf, PointCloud, ...
```

## Common Properties

All components accept:
- `key` (str): Unique identifier (required for updates)
- `position` (tuple): [x, y, z] position
- `rotation` (tuple): [x, y, z] Euler rotation in radians
- `scale` (tuple): [x, y, z] scale factors
- `matrix` (list): 4x4 transformation matrix (16 floats)
- `children` (list): Child components

## Primitives

### Box
```python
Box(key="box", args=[1, 1, 1], position=[0, 0, 0], color="red")
# args: [width, height, depth]
```

### Sphere
```python
Sphere(key="sphere", args=[0.5, 32, 16], position=[0, 1, 0])
# args: [radius, widthSegments, heightSegments]
```

### Cylinder
```python
Cylinder(key="cyl", args=[0.5, 0.5, 2, 32])
# args: [radiusTop, radiusBottom, height, radialSegments]
```

### Capsule
```python
Capsule(key="cap", args=[0.2, 1, 4, 8])
# args: [radius, height, capSegments, radialSegments]
```

### Cone, Plane, Ring, Torus, TorusKnot
```python
Cone(key="cone", args=[1, 2, 8])
Plane(key="plane", args=[2, 2])
Ring(key="ring", args=[0.5, 1, 32])
Torus(key="torus", args=[1, 0.4, 16, 100])
```

## Custom Geometry

### TriMesh
```python
import numpy as np
from vuer.schemas import TriMesh

vertices = np.array([[0,0,0], [1,0,0], [0.5,1,0]], dtype=np.float16)
faces = np.array([[0, 1, 2]], dtype=np.uint32)
colors = np.array([[255,0,0], [0,255,0], [0,0,255]], dtype=np.uint8)

TriMesh(key="mesh", vertices=vertices, faces=faces, colors=colors)
```

### PointCloud
```python
PointCloud(
    key="pcd",
    vertices=np.random.rand(1000, 3).astype(np.float16),
    colors=np.random.rand(1000, 3).astype(np.uint8) * 255,
    size=0.01
)
```

## Model Loaders

### URDF (Robots)
```python
Urdf(
    key="robot",
    src="/static/robot.urdf",
    jointValues={"joint1": 0.5, "joint2": -0.3},
    position=[0, 0, 0]
)
```

### GLB/GLTF
```python
Glb(key="model", src="/static/model.glb", scale=0.1)
```

### OBJ, PLY, STL, FBX, DAE
```python
Obj(key="obj", src="/static/model.obj")
Ply(key="ply", src="/static/model.ply")
Stl(key="stl", src="/static/model.stl")
Fbx(key="fbx", src="/static/model.fbx")
Dae(key="dae", src="/static/model.dae")
```

## Gaussian Splatting

```python
Splat(key="splat", src="/static/scene.splat")
LumaSplats(key="luma", src="https://lumalabs.ai/capture/...")
```

## Cameras

```python
PerspectiveCamera(
    key="cam",
    fov=75,
    position=[5, 5, 5],
    makeDefault=True
)

OrthographicCamera(key="ortho", zoom=1)
```

### Camera Frustum Visualization
```python
Frustum(
    key="frustum",
    fov=60,
    aspect=1.6,
    near=0.1,
    far=10,
    showFrustum=True,
    showImagePlane=True
)
```

## Lighting

```python
AmbientLight(key="ambient", intensity=0.5)
DirectionalLight(key="dir", intensity=1, position=[5, 5, 5])
PointLight(key="point", intensity=1, position=[0, 3, 0])
SpotLight(key="spot", intensity=1, angle=0.5, position=[0, 5, 0])
```

## Text

```python
Text(key="label", text="Hello", position=[0, 2, 0], fontSize=0.5)
Text3D(key="3d-text", text="3D", height=0.2, bevelEnabled=True)
Billboard(key="billboard", text="Always faces camera")
```

## Lines

```python
Line(key="line", points=[[0,0,0], [1,1,1], [2,0,0]], color="blue")
CatmullRomLine(key="curve", points=[...], tension=0.5)
CubicBezierLine(key="bezier", start=[0,0,0], end=[1,1,0], ...)
```

## Interaction

### Movable (Drag & Drop)
```python
Movable(
    key="movable-box",
    children=[Box(key="box")],
    position=[0, 0, 0]
)
```

### Gripper
```python
Gripper(
    key="gripper",
    position=[0, 0, 0],
    pinchWidth=0.04
)
```

## Organization

### Group
```python
group(
    key="my-group",
    children=[
        Box(key="box1"),
        Sphere(key="sphere1"),
    ],
    position=[0, 0, 0]
)
```

### Scene
```python
Scene(
    children=[...],
    bgChildren=[Grid(), CoordsMarker()],
    rawChildren=[AmbientLight()],
)

DefaultScene(...)  # Includes default lighting and controls
```

## Images

### Img (DOM Image)
Display images in the HTML DOM. Supports multiple input formats.

```python
from vuer.schemas import Img
import numpy as np
from PIL import Image as PILImage

# From URL (direct)
Img(src="https://example.com/image.png", key="url-img")

# From local file path (reads and converts to binary)
Img("/path/to/image.png", key="file-img")

# From numpy array (H, W, C), uint8
img_array = np.random.randint(0, 255, (480, 640, 3), dtype=np.uint8)
Img(img_array, key="numpy-img")

# From numpy array with float [0-1] (auto-scaled to 255)
img_float = np.random.rand(480, 640, 3).astype(np.float32)
Img(img_float, key="float-img")

# From PIL Image
pil_img = PILImage.open("/path/to/image.png")
Img(pil_img, key="pil-img")

# With JPEG format and quality
Img(img_array, format="jpeg", quality=85, key="jpeg-img")
```

**Parameters:**
- `data`: Image data that needs processing (file path, numpy array, or PIL Image)
- `src`: Direct URL string or raw binary bytes (cannot use with `data`)
- `format`: Output format - "png" (default), "jpeg"
- `quality`: JPEG quality (1-100), only for jpeg format

**When to use `data` vs `src`:**
- Use `data=` for inputs that need conversion (numpy, PIL, file paths)
- Use `src=` for ready-to-use data (URLs, pre-encoded bytes)

```python
# Raw bytes go through src=
image_bytes = open("image.png", "rb").read()
Img(src=image_bytes, key="bytes-img")
```

### Image (3D Scene Image Plane)
Display images on a plane in 3D space. Inherits from Img, so accepts same input formats.

```python
from vuer.schemas import Image

# From URL
Image(src="https://example.com/image.png", position=[0, 1, -2], key="url-plane")

# From numpy array
img_array = np.random.randint(0, 255, (480, 640, 3), dtype=np.uint8)
Image(img_array, position=[0, 1, -2], key="numpy-plane")

# From file path
Image("/path/to/image.png", position=[0, 1, -2], key="file-plane")

# From PIL Image
pil_img = PILImage.open("/path/to/image.png")
Image(pil_img, position=[0, 1, -2], key="pil-plane")

# Full transform with JPEG format
Image(
    img_array,
    format="jpeg",
    quality=80,
    position=[0, 1, -2],
    rotation=[0, 0.5, 0],
    scale=2,
    opacity=0.8,
    key="transformed-plane"
)
```

**Additional parameters (3D scene):**
- `position`: [x, y, z] position in world space
- `rotation`: [x, y, z] Euler rotation in radians
- `scale`: Uniform float or [x, y, z] scale factors
- `opacity`: Transparency (0-1), default 1.0

### ImageBackground
Camera-facing background image plane. Inherits from Img, expects `src` attribute.

```python
# From URL
ImageBackground(src="background.jpg", distance=10, key="bg")

# From numpy/PIL (inherits Img processing)
ImageBackground(img_array, distance=10, key="bg")
```

### HUDPlane
Geometry helper that orients a quad to face the camera. Used as base for VideoPlanes and other components. Does not handle textures directly.

```python
HUDPlane(distanceToCamera=10, aspect=1.6, height=2, key="hud")
```

## Helpers

```python
Grid(key="grid", args=[10, 10])
CoordsMarker(key="coords", size=1)
Arrow(key="arrow", direction=[0, 1, 0], length=1)
```
