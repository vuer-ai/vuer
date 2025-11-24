# 3.1.2 The Magical Index of Vuer Components

## Overview

Vuer provides a rich set of 3D components for building interactive scenes. This guide organizes all available components by category with practical examples.

## Primitive Geometries

Basic geometric shapes that are perfect for prototyping and simple visualizations.

### Box
A rectangular cuboid.

```python
from vuer.schemas import Box

Box(
    args=[width, height, depth, widthSegments, heightSegments, depthSegments],
    # Default: [1, 1, 1, 1, 1, 1]
    position=[0, 0, 0],
    color="red",
    key="my-box",
)
```

### Sphere
A perfect sphere.

```python
from vuer.schemas import Sphere

Sphere(
    args=[radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength],
    # Default: [1, 32, 16, 0, Math.PI*2, 0, Math.PI]
    position=[0, 0, 0],
    color="blue",
    key="my-sphere",
)
```

### Cylinder
A cylindrical shape.

```python
from vuer.schemas import Cylinder

Cylinder(
    args=[radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength],
    # Default: [1, 1, 1, 8, 1, False, 0, Math.PI*2]
    position=[0, 0, 0],
    key="my-cylinder",
)
```

### Cone
A conical shape.

```python
from vuer.schemas import Cone

Cone(
    args=[radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength],
    # Default: [1, 1, 8, 1, False, 0, Math.PI*2]
    position=[0, 0, 0],
    key="my-cone",
)
```

### Capsule
A capsule shape (cylinder with hemispherical ends).

```python
from vuer.schemas import Capsule

Capsule(
    args=[radius, length, capSegments, radialSegments, heightSegments],
    # Default: [1, 1, 4, 8, 1]
    position=[0, 0, 0],
    key="my-capsule",
)
```

### Plane
A flat rectangular surface.

```python
from vuer.schemas import Plane

Plane(
    args=[width, height, widthSegments, heightSegments],
    # Default: [1, 1, 1, 1]
    position=[0, 0, 0],
    rotation=[3.14/2, 0, 0],  # Rotate to be horizontal
    key="ground-plane",
)
```

### Other Primitives

```python
from vuer.schemas import (
    Circle, Ring, Torus, TorusKnot,
    Dodecahedron, Icosahedron, Octahedron, Tetrahedron
)

# Circle
Circle(
    args=[radius, segments, thetaStart, thetaLength],
    # Default: [1, 8, 0, Math.PI*2]
    key="circle"
)

# Ring (2D donut)
Ring(
    args=[innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength],
    # Default: [0.5, 1, 8, 1, 0, Math.PI*2]
    key="ring"
)

# Torus (3D donut)
Torus(
    args=[radius, tube, radialSegments, tubularSegments, arc],
    # Default: [1, 0.4, 8, 6, Math.PI*2]
    key="torus"
)

# TorusKnot
TorusKnot(
    args=[radius, tube, tubularSegments, radialSegments, p, q],
    # Default: [1, 0.4, 64, 8, 2, 3]
    key="torus-knot"
)

# Platonic solids
Dodecahedron(
    args=[radius, detail],
    # Default: [1, 0]
    key="dodeca"
)

Icosahedron(
    args=[radius, detail],
    # Default: [1, 0]
    key="icosa"
)

Octahedron(
    args=[radius, detail],
    # Default: [1, 0]
    key="octa"
)

Tetrahedron(
    args=[radius, detail],
    # Default: [1, 0]
    key="tetra"
)
```

### Building with Primitives

Now let's combine multiple primitives to create a complete geometry showcase! This scene demonstrates various geometric primitives with simple colored materials.

<iframe src="https://vuer.ai/?grid=False&collapseMenu=True&initCamPos=-3,4,4&reconnect=True&scene=hqN0YWelU2NlbmWja2V5oTCidXCTAAEApGdyaWTCq3Jhd0NoaWxkcmVukoSoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5p2FtYmllbnSpaW50ZW5zaXR5yz%2FTMzMzMzMzhahjaGlsZHJlbpCjdGFnsERpcmVjdGlvbmFsTGlnaHSja2V5o3N1bqlpbnRlbnNpdHnLP%2B5mZmZmZmaocG9zaXRpb26TBQUFqGNoaWxkcmVumIeoY2hpbGRyZW6Qo3RhZ6hDeWxpbmRlcqNrZXmubWF0dGUtY3lsaW5kZXKkYXJnc5TLP%2BmZmZmZmZrLP%2BmZmZmZmZrLP%2BAAAAAAAAAgqHBvc2l0aW9uk8vADAAAAAAAAMs%2F0AAAAAAAAP%2BsbWF0ZXJpYWxUeXBlpWJhc2ljpWNvbG9ypyM0YTM0MjiHqGNoaWxkcmVukKN0YWemU3BoZXJlo2tleaxtYXR0ZS1zcGhlcmWkYXJnc5PLP%2BZmZmZmZmYgIKhwb3NpdGlvbpPLwAwAAAAAAADLP%2FGZmZmZmZr%2FrG1hdGVyaWFsVHlwZadsYW1iZXJ0pWNvbG9ypyM2YjRlM2SHqGNoaWxkcmVukKN0YWeqT2N0YWhlZHJvbqNrZXmwZ2xhc3Mtb2N0YWhlZHJvbqRhcmdzkss%2F7MzMzMzMzQCocG9zaXRpb26Ty7%2F8zMzMzMzNyz%2F4AAAAAAAAyz%2FTMzMzMzMzqHJvdGF0aW9ukwAAyz%2FZJul41P30rG1hdGVyaWFsVHlwZahwaHlzaWNhbIeoY2hpbGRyZW6Qo3RhZ6VUb3J1c6NrZXmrZ2xhc3MtdG9ydXOkYXJnc5TLP%2BAAAAAAAADLP8MzMzMzMzMgQKhwb3NpdGlvbpMAyz%2FZmZmZmZmayz%2FpmZmZmZmaqHJvdGF0aW9uk8s%2F%2BSLQ5WBBiQAArG1hdGVyaWFsVHlwZahwaHlzaWNhbIioY2hpbGRyZW6Qo3RhZ6NCb3ija2V5qmdsb3NzeS1ib3ikYXJnc5PLP%2FMzMzMzMzPLP%2FMzMzMzMzPLP%2FMzMzMzMzOocG9zaXRpb26Tyz%2FZmZmZmZmayz%2FgAAAAAAAA%2Fqhyb3RhdGlvbpMAAACsbWF0ZXJpYWxUeXBlpXBob25npWNvbG9ypyNhMTdjNTCGqGNoaWxkcmVukKN0YWemU3BoZXJlo2tlea1nbG9zc3ktc3BoZXJlpGFyZ3OTyz%2FkzMzMzMzNICCocG9zaXRpb26Tyz%2F8zMzMzMzNyz%2FmZmZmZmZmAKxtYXRlcmlhbFR5cGWoc3RhbmRhcmSIqGNoaWxkcmVukKN0YWelUGxhbmWja2V5pWZsb29ypGFyZ3OSFBSocG9zaXRpb26TAAAAqHJvdGF0aW9uk8u%2F%2BR64UeuFHwAArG1hdGVyaWFsVHlwZahzdGFuZGFyZKVjb2xvcqcjMTgxODE0h6hjaGlsZHJlbpCjdGFnpVBsYW5lo2tleahiYWNrZHJvcKRhcmdzkhQUqHBvc2l0aW9ukwAA%2FaxtYXRlcmlhbFR5cGWoc3RhbmRhcmSlY29sb3KnIzBmMGYxMg%3D%3D" width="100%" height="400px" frameborder="0"></iframe>

*Geometry showcase with simple colored materials: Cylinder, Spheres, Box, Octahedron, and Torus*

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Box, Sphere, Cylinder, Octahedron, Torus, Plane
from vuer.schemas import AmbientLight, DirectionalLight

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ Scene(
        # === LEFT GROUP ===
        # Matte materials (will be used in materials tutorial)
        Cylinder(
            args=[0.8, 0.8, 0.5, 32],
            position=[-3.5, 0.25, -1],
            materialType="standard",
            color="#8b6f47",
            key="cylinder-1",
        ),
        Sphere(
            args=[0.6, 64, 64],
            position=[-3.5, 1.1, -1],
            materialType="standard",
            color="#6b4e3d",
            key="sphere-1",
        ),

        # === CENTER GROUP ===
        # Glass materials (will be used in materials tutorial)
        Octahedron(
            args=[0.9, 0],
            position=[-1.2, 1.5, 0.3],
            rotation=[0, 0, 0.393],
            materialType="standard",
            color="#ffd700",
            key="octahedron-1",
        ),
        Torus(
            args=[0.5, 0.15, 32, 64],
            position=[0.9, 0.4, 0.8],
            rotation=[1.571, 0, 0],
            materialType="standard",
            color="#daa520",
            key="torus-1",
        ),

        # === RIGHT GROUP ===
        # Glossy materials (will be used in materials tutorial)
        Box(
            args=[1.4, 1.4, 1.4],
            position=[0.4, 0.5, -2],
            rotation=[0, 0.785, 0],
            materialType="standard",
            color="#d4af37",
            key="box-1",
        ),
        Sphere(
            args=[0.4, 64, 64],
            position=[1.8, 0.7, 0],
            materialType="standard",
            color="#cd7f32",
            key="sphere-2",
        ),

        # === ENVIRONMENT ===
        Plane(
            args=[20, 20],
            position=[0, 0, 0],
            rotation=[-1.57, 0, 0],
            materialType="standard",
            color="#18181d",
            key="floor",
        ),
        Plane(
            args=[20, 20],
            position=[0, 0, -3],
            materialType="standard",
            color="#0f0f12",
            key="backdrop",
        ),

        up=[0, 1, 0],
        grid=False,
        rawChildren=[
            AmbientLight(key="ambient", intensity=0.3),
            DirectionalLight(key="sun", intensity=1, position=[5, 5, 5]),
        ],
    )

    await session.forever()
```

This example shows how combining different primitives creates a complete geometry showcase. In the next chapter, we'll dive deeper into materials and textures!

### Event Handling for Primitives

All primitive components support click events and can respond to user interaction. Use event handlers to make your scenes interactive:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Box, Sphere

app = Vuer()

@app.add_handler("ON_CLICK")
async def handle_click(event, session: VuerSession):
    """Handle click events on objects."""
    print(f"Clicked object: {event.value['key']}")

    # Update the clicked object's color
    session.upsert @ Box(
        args=[0.3, 0.3, 0.3],
        position=[0, 0, 0],
        color="yellow",  # Change color on click
        key=event.value['key'],
    )

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Box(args=[0.3, 0.3, 0.3], position=[0, 0, 0], color="red", key="clickable-box"),
        Sphere(args=[0.15], position=[0.5, 0, 0], color="blue", key="clickable-sphere"),
    )
```

**Event Object Structure:**
```python
{
    "ts": 1234567890,  # Timestamp
    "dtype": "ON_CLICK",  # Event type
    "value": {
        "key": "clickable-box",  # Component key
        # Additional event-specific data
    }
}
```

## Complex Mesh Components

Complex mesh components allow you to load and display custom 3D models from various formats. Choose the right format based on your needs:

- **TriMesh**: Programmatic meshes from numpy arrays (fastest for dynamic geometry)
- **PointCloud/Ply/Pcd**: Point cloud data (best for LiDAR, depth sensors)
- **Obj**: Simple textured models (good compatibility, but larger file size)
- **Glb/Gltf**: Modern standard with PBR materials (best for detailed models)
- **Urdf**: Robot models with articulated joints (robotics applications)

<iframe src="https://vuer.ai/?collapseMenu=True&initCamPos=3,2,3&reconnect=True&scene=h6hjaGlsZHJlbpGEqGNoaWxkcmVukYaoY2hpbGRyZW6Qo3RhZ6RVcmRmo2tleaExo3NyY9lSaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25hc2EtanBsL20yMDIwLXVyZGYtbW9kZWxzL21haW4vcm92ZXIvbTIwMjAudXJkZqtqb2ludFZhbHVlc4Cocm90YXRpb26Ty0AJHrhR64UfAACjdGFnp01vdmFibGWja2V5oTKocG9zaXRpb26TAADLP8MzMzMzMzOjdGFnpVNjZW5lo2tleaEzonVwkwAAAaRncmlkw6hzaG93TGV2YcKrcmF3Q2hpbGRyZW6ShKhjaGlsZHJlbpCjdGFnrEFtYmllbnRMaWdodKNrZXm1ZGVmYXVsdF9hbWJpZW50X2xpZ2h0qWludGVuc2l0eQGFqGNoaWxkcmVukKN0YWewRGlyZWN0aW9uYWxMaWdodKNrZXm5ZGVmYXVsdF9kaXJlY3Rpb25hbF9saWdodKlpbnRlbnNpdHkBpmhlbHBlcsM%3D" width="100%" height="350px" frameborder="0"></iframe>

*URDF robot model loaded from remote URL - movable Mars rover example*

### TriMesh
Custom triangle mesh from vertices and faces. Use TriMesh when you're generating geometry programmatically or need maximum control over mesh data.

```python
import numpy as np
from vuer.schemas import TriMesh

# Create a simple pyramid
vertices = np.array([
    [0, 1, 0],      # Top
    [-1, 0, -1],    # Base corners
    [1, 0, -1],
    [1, 0, 1],
    [-1, 0, 1],
], dtype=np.float32)

faces = np.array([
    [0, 1, 2],  # Side faces
    [0, 2, 3],
    [0, 3, 4],
    [0, 4, 1],
    [1, 4, 3, 2],  # Base (quad, will be triangulated)
], dtype=np.uint32)

TriMesh(
    vertices=vertices,
    faces=faces,
    color="#23aaff",
    position=[0, 0, 0],
    rotation=[0, 0, 0],
    scale=1.0,
    wireframe=False,  # Show solid mesh
    flatShading=False,  # Smooth shading
    key="pyramid",
)
```

### Point Cloud Components

Vuer supports three ways to display point cloud data. Choose based on your data source:

- **PointCloud**: Direct numpy arrays (best performance for real-time updates)
- **Ply**: Stanford PLY files (common format, supports colors and normals)
- **Pcd**: PCL format files (widely used in robotics, supports intensity)

#### PointCloud
Efficient point cloud visualization from numpy arrays. Best for real-time data streaming.

```python
import numpy as np
from vuer.schemas import PointCloud

# Random point cloud
vertices = np.random.rand(1000, 3) * 2 - 1  # [-1, 1]
colors = np.random.rand(1000, 3)            # RGB [0, 1]

PointCloud(
    vertices=vertices,  # Shape: (N, 3) float32
    colors=colors,      # Shape: (N, 3) float32, range [0, 1]
    size=0.01,          # Point size in world units
    position=[0, 0, 0],
    rotation=[0, 0, 0],
    key="my-pointcloud",
)

# For better performance with large point clouds, use half-precision:
vertices_half = vertices.astype(np.float16)
colors_uint8 = (colors * 255).astype(np.uint8)
```

**Performance Tips:**
- Use `float16` for vertices to halve bandwidth
- Use `uint8` for colors (0-255 range) to reduce size further
- Typical sizes: 100K points ~6MB (float32) vs ~3MB (optimized)

#### Ply
Load PLY files from disk or URL. Supports vertex colors and normals.

```python
from vuer.schemas import Ply

Ply(
    src="http://localhost:8012/static/model.ply",
    size=0.008,  # Point size
    position=[0, 0, 0],
    rotation=[0, 0, 0],
    key="my-ply",
)
```

#### Pcd
Load PCD (Point Cloud Data) files. Common in robotics (ROS, PCL library).

```python
from vuer.schemas import Pcd

Pcd(
    src="http://localhost:8012/static/pointcloud.pcd",
    size=0.01,  # Point size
    position=[0, 0, 0],
    key="my-pcd",
)
```

### 3D Model File Formats

#### Obj
Load Wavefront OBJ files. Widely supported but larger file sizes compared to GLB.

```python
from vuer.schemas import Obj

# Three ways to load:

# 1. From URL
Obj(
    src="http://localhost:8012/static/model.obj",
    mtl="http://localhost:8012/static/model.mtl",  # Optional
    key="obj-url",
)

# 2. From file buffer (most efficient)
with open("model.obj", "rb") as f:
    data = f.read()

Obj(
    buff=data,
    position=[0, 0, 0],
    scale=0.1,
    key="obj-buffer",
)

# 3. From text string
Obj(
    text="v 0 0 0\nv 1 0 0\nv 0 1 0\nf 1 2 3",
    position=[0, 0, 0],
    rotation=[0, 0, 0],
    scale=1.0,
    key="obj-text",
)
```

**Note**: OBJ supports MTL files for materials and textures. For modern PBR materials, use GLB instead.

#### Glb
Load GLB/GLTF files (modern standard). Best choice for detailed models with PBR materials, animations, and efficient compression.

```python
from vuer.schemas import Glb, Gltf

# GLB (binary, single file - recommended)
Glb(
    src="http://localhost:8012/static/model.glb",
    position=[0, 0, 0],
    rotation=[0, 0, 0],
    scale=1.0,
    key="my-glb",
)

# GLTF (JSON + separate bin/texture files)
Gltf(
    src="http://localhost:8012/static/model.gltf",
    key="my-gltf",
)
```

**GLB vs OBJ:**
- GLB: Smaller file size, PBR materials, animations, better compression
- OBJ: Simpler format, wider tool support, no animations

### Robot Models

#### Urdf
Load robot models in URDF format.

```python
from vuer.schemas import Urdf

Urdf(
    src="http://localhost:8012/static/robot.urdf",
    jointValues={  # Optional: set joint positions
        "joint1": 0.5,
        "joint2": -0.3,
    },
    position=[0, 0, 0],
    rotation=[0, 0, 0],  # Often need [3.14, 0, 0] for Z-up robots
    scale=1.0,
    key="robot",
)
```

**Common Use Cases:**
- Robotic arm visualization
- Mobile robot simulation
- Articulated mechanism display
- Real-time joint angle updates with `session.upsert`

**Note**: URDF files often reference mesh files (STL, DAE, OBJ) which must be accessible from the same base URL.

## Advanced Rendering

### Gaussian Splatting

```python
from vuer.schemas import Splat, LumaSplats, SparkSplats

# Standard splat
Splat(
    src="https://example.com/scene.splat",
    key="splat-scene",
)

# Luma AI format
LumaSplats(
    src="https://lumalabs.ai/capture/xyz",
    key="luma-scene",
)

# Spark format (optimized)
SparkSplats(
    src="scene.spark",
    key="spark-scene",
)
```

## Interactive Components

Enable user interaction with your 3D scene through movable objects and VR/AR controllers.

<iframe src="https://vuer.ai/?collapseMenu=True&initCamPos=2.8,2.2,2.5&reconnect=True&scene=hqhjaGlsZHJlbpGFqGNoaWxkcmVukYOoY2hpbGRyZW6Qo3RhZ6dHcmlwcGVyo2tlealncmlwcGVyLTGjdGFnp01vdmFibGWja2V5qW1vdmFibGUtMahwb3NpdGlvbpMAyz%2FgAAAAAAAAAKlzaG93RnJhbWXDo3RhZ6VTY2VuZaNrZXmhM6J1cJMAAQCkZ3JpZMOrcmF3Q2hpbGRyZW6ShKhjaGlsZHJlbpCjdGFnrEFtYmllbnRMaWdodKNrZXmnYW1iaWVudKlpbnRlbnNpdHnLP%2BAAAAAAAACFqGNoaWxkcmVukKN0YWewRGlyZWN0aW9uYWxMaWdodKNrZXmjc3VuqWludGVuc2l0eQGocG9zaXRpb26TAgMC" width="100%" height="350px" frameborder="0"></iframe>

*Interactive Movable component with Gripper - drag to move the gripper in 3D space*

### Movable
Make objects grabbable and movable in VR/AR or with mouse. The Movable component wraps any child components and allows users to manipulate their position and orientation.

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Movable, Box, DefaultScene

app = Vuer()

@app.add_handler("OBJECT_MOVE")
async def handle_move(event, session: VuerSession):
    """Triggered when Movable object is moved."""
    print(f"Object {event.value['key']} moved to:")
    print(f"  Position: {event.value.get('position')}")
    print(f"  Rotation: {event.value.get('rotation')}")

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Movable(
            Box(args=[0.1, 0.1, 0.1], color="red", key="inner-box"),
            position=[0, 1.5, -0.5],
            rotation=[0, 0, 0],
            scale=0.1,
            showFrame=True,       # Show RGB=XYZ coordinate frame
            localRotation=False,  # Use world-space rotation
            key="movable-box",
        ),
    )
```

**Interaction Methods:**
- **Desktop**: Click and drag with mouse
- **VR/AR Hand Tracking**: Pinch gesture to grab
- **VR Controllers**: Trigger button to grab

**Common Parameters:**
- `showFrame`: Display coordinate axes on the object
- `localRotation`: If True, rotations are relative to object's frame
- `position`, `rotation`, `scale`: Initial transform

### Gripper
3D visualization of a robot gripper. Often used with Movable for interactive manipulation demos.

```python
from vuer.schemas import Gripper, Movable

Movable(
    Gripper(key="gripper-mesh"),
    position=[0, 1, -0.5],
    rotation=[0, 0, 0],
    showFrame=True,
    key="interactive-gripper",
)
```

**Note**: The Gripper component renders a pre-made gripper mesh. Combine with `OBJECT_MOVE` event handler to mirror real robot gripper movements.

## Camera and View Components

### CameraView
Virtual camera for off-screen rendering.

```python
from vuer.schemas import CameraView

CameraView(
    key="virtual-cam",
    width=640,
    height=480,
    fov=50,
    position=[2, 2, 2],
    rotation=[0, 0, 0],
    stream="ondemand",  # or "30fps", "60fps"
    renderDepth=True,   # Also render depth map
    showFrustum=True,   # Visualize camera frustum
)
```

### Frustum
Visualize camera frustum.

```python
from vuer.schemas import Frustum

Frustum(
    position=[0, 1, 0],
    rotation=[0, 0, 0],
    fov=50,
    aspect=16/9,
    near=0.1,
    far=10,
    showFrustum=True,
    showFocalPlane=True,
    showImagePlane=False,
    key="cam-frustum",
)
```

## Helper Components

<iframe src="https://vuer.ai/?collapseMenu=True&initCamPos=2.8,2.2,2.5&reconnect=True&scene=hqhjaGlsZHJlbpOFqGNoaWxkcmVukKN0YWesQ29vcmRzTWFya2Vyo2tleahjb29yZHMtMahwb3NpdGlvbpMAAAClc2NhbGXLP%2BAAAAAAAACHqGNoaWxkcmVukKN0YWelQXJyb3eja2V5p2Fycm93LTGocG9zaXRpb26Tyz%2FgAAAAAAAAyz%2FJmZmZmZmaAKhyb3RhdGlvbpMAAMs%2F%2BR64UeuFH6Vjb2xvcqNyZWSlc2NhbGXLP9MzMzMzMzOHqGNoaWxkcmVukKN0YWejQm94o2tleadyZWYtYm94pGFyZ3OWyz%2FJmZmZmZmayz%2FJmZmZmZmayz%2FJmZmZmZmaAQEBqHBvc2l0aW9uk8u%2F4AAAAAAAAMs%2FuZmZmZmZmgClY29sb3Kmb3JhbmdlrG1hdGVyaWFsVHlwZahzdGFuZGFyZKN0YWelU2NlbmWja2V5oTCidXCTAAEApGdyaWTDq3Jhd0NoaWxkcmVukoSoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5p2FtYmllbnSpaW50ZW5zaXR5yz%2FgAAAAAAAAhahjaGlsZHJlbpCjdGFnsERpcmVjdGlvbmFsTGlnaHSja2V5o3N1bqlpbnRlbnNpdHkBqHBvc2l0aW9ukwIDAg%3D%3D" width="100%" height="350px" frameborder="0"></iframe>

*Helper components: Grid, CoordsMarker (RGB=XYZ axes), Arrow, and reference Box*

### Grid
Ground grid plane.

```python
from vuer.schemas import Grid

Grid(
    size=10,
    divisions=10,
    colorCenterLine="red",
    colorGrid="gray",
    key="ground-grid",
)
```

### CoordsMarker
Coordinate frame (RGB = XYZ).

```python
from vuer.schemas import CoordsMarker

CoordsMarker(
    position=[0, 0, 0],
    scale=1.0,
    key="origin-frame",
)
```

### Arrow
3D arrow indicator.

```python
from vuer.schemas import Arrow

Arrow(
    position=[0, 0, 0],
    rotation=[0, 0, 0],
    scale=1.0,
    color="red",
    key="direction-arrow",
)
```

## Text Components

<iframe src="https://vuer.ai/?collapseMenu=True&initCamPos=2.8,2.2,2.5&reconnect=True&scene=hqhjaGlsZHJlbpOLqGNoaWxkcmVukatIZWxsbyBWdWVyIaN0YWemVGV4dDNEo2tlead3ZWxjb21lpGZvbnTZQGh0dHBzOi8vdGhyZWVqcy5vcmcvZXhhbXBsZXMvZm9udHMvaGVsdmV0aWtlcl9ib2xkLnR5cGVmYWNlLmpzb26sYmV2ZWxFbmFibGVkw6liZXZlbFNpemXLP5R64UeuFHuuYmV2ZWxUaGlja25lc3PLP4R64UeuFHukc2l6Zcs%2F4AAAAAAAAKVjb2xvcqNyZWSlc2NhbGXLP9MzMzMzMzOocG9zaXRpb26TAMs%2F2ZmZmZmZmgCGqGNoaWxkcmVukapGaXhlZCBUZXh0o3RhZ6RUZXh0o2tleapmaXhlZC10ZXh0pWNvbG9ypWdyZWVuqGZvbnRTaXplyz%2FDMzMzMzMzqHBvc2l0aW9ukwDLP%2BAAAAAAAAAAhahjaGlsZHJlbpGGqGNoaWxkcmVukalCaWxsYm9hcmSjdGFnpFRleHSja2V5rmJpbGxib2FyZC10ZXh0pWNvbG9ypGJsdWWoZm9udFNpemXLP764UeuFHriocG9zaXRpb26TAAAAo3RhZ6lCaWxsYm9hcmSja2V5q2JpbGxib2FyZC0xpmZvbGxvd8OocG9zaXRpb26Tyz%2FgAAAAAAAAyz%2FzMzMzMzMzAKN0YWelU2NlbmWja2V5oTCidXCTAAEApGdyaWTCq3Jhd0NoaWxkcmVukoSoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5p2FtYmllbnSpaW50ZW5zaXR5yz%2FZmZmZmZmahahjaGlsZHJlbpCjdGFnsERpcmVjdGlvbmFsTGlnaHSja2V5o3N1bqlpbnRlbnNpdHkBqHBvc2l0aW9ukwIDAg%3D%3D" width="100%" height="350px" frameborder="0"></iframe>

*Text components: 3D extruded text, fixed 2D text, and camera-facing billboard text*

### Text
2D text in 3D space.

```python
from vuer.schemas import Text

Text(
    "Hello, Vuer!",
    fontSize=0.2,
    color="white",
    anchorX="center",
    anchorY="middle",
    position=[0, 1, 0],
    key="text-label",
)
```

### Text3D
Extruded 3D text.

```python
from vuer.schemas import Text3D, Center

Center(
    Text3D(
        "3D TEXT",
        font="fonts/helvetiker.json",
        size=0.5,
        height=0.1,  # Extrusion depth
        key="3d-text",
    ),
)
```

### Billboard
Text/mesh always facing camera.

```python
from vuer.schemas import Billboard, Text

Billboard(
    Text("I face you!", fontSize=0.1, key="billboard-text"),
    position=[0, 2, 0],
    follow=True,
    key="billboard",
)
```

## Background Components

### SceneBackground
Static background image.

```python
from vuer.schemas import SceneBackground

SceneBackground(
    src="http://localhost:8012/static/bg.jpg",
    key="scene-bg",
)
```

### ImageBackground
High-framerate background.

```python
from vuer.schemas import ImageBackground

ImageBackground(
    src="frame.jpg",
    key="image-bg",
)
```

## Organization Components

### Group
Group objects together.

```python
from vuer.schemas import Group, Box, Sphere

Group(
    Box(position=[0, 0, 0], key="box"),
    Sphere(position=[0.5, 0, 0], key="sphere"),
    # Transform applies to all children
    position=[1, 0, 0],
    rotation=[0, 3.14/4, 0],
    key="my-group",
)
```

### Pivot
Custom rotation pivot point.

```python
from vuer.schemas import Pivot, Box

Pivot(
    Box(position=[1, 0, 0], key="orbiting-box"),
    # Rotate around pivot origin
    rotation=[0, angle, 0],
    key="pivot-point",
)
```

## Quick Reference Table

| Category | Components |
|----------|-----------|
| **Primitives** | Box, Sphere, Cylinder, Cone, Capsule, Plane |
| **Platonic Solids** | Dodecahedron, Icosahedron, Octahedron, Tetrahedron |
| **2D Shapes** | Circle, Ring |
| **3D Curves** | Torus, TorusKnot |
| **Custom Meshes** | TriMesh, PointCloud |
| **File Loaders** | Obj, Glb, Ply, Pcd, Urdf |
| **Advanced Render** | Splat, LumaSplats, SparkSplats |
| **Interactive** | Movable, Gripper |
| **Cameras** | CameraView, Frustum |
| **Helpers** | Grid, CoordsMarker, Arrow, Center, Pivot |
| **Text** | Text, Text3D, Billboard |
| **Background** | SceneBackground, ImageBackground |
| **Organization** | Group, Scene |

## Component Patterns

### Combining Components

```python
from vuer.schemas import DefaultScene, Group, Box, Sphere, Movable, Trail

DefaultScene(
    # Static group
    Group(
        Box(position=[0, 0, 0], color="red", key="box-1"),
        Sphere(position=[1, 0, 0], color="blue", key="sphere-1"),
        key="static-group",
    ),

    # Interactive object with trail
    Trail(
        Movable(
            Sphere(args=[0.1], color="green", key="ball"),
            position=[0, 1, -1],
            key="movable-ball",
        ),
        width=0.02,
        color="lime",
        key="ball-trail",
    ),
)
```

### Loading Multiple File Formats

```python
from vuer import Vuer
from vuer.schemas import DefaultScene, Obj, Glb, PointCloud
import numpy as np

app = Vuer(static_root="./assets")

@app.spawn(start=True)
async def main(session):
    session.set @ DefaultScene(
        # OBJ model
        Obj(
            src="http://localhost:8012/static/model.obj",
            position=[-2, 0, 0],
            key="obj-model",
        ),

        # GLB model
        Glb(
            src="http://localhost:8012/static/robot.glb",
            position=[0, 0, 0],
            key="glb-model",
        ),

        # Point cloud
        PointCloud(
            vertices=np.random.rand(500, 3),
            colors=np.random.rand(500, 3),
            position=[2, 0, 0],
            key="pointcloud",
        ),
    )

    await session.forever()
```

## Next Steps

- Learn about [Materials and Textures](03_materials_and_textures.md) to make your components look realistic
- Explore [Camera Control](./04_camera_control.md) for better viewpoints
- Add [Lights](./05_lights.md) to illuminate your scene
