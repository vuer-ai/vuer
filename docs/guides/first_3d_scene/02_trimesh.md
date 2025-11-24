
# TriMesh - Programmatic Meshes

## Overview

`TriMesh` creates custom 3D meshes from numpy arrays, giving you complete control over vertices and faces for procedural generation, real-time updates, and scientific visualization.

![TriMesh Example](../../examples/figures/trimesh.png)

## Basic Usage

```python
import numpy as np
import trimesh
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, TriMesh

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    # Load mesh with trimesh library
    mesh = trimesh.load_mesh("armadillo.obj")
    mesh.apply_scale(0.1)
    
    session.set @ DefaultScene(
        TriMesh(
            vertices=np.array(mesh.vertices),
            faces=np.array(mesh.faces),
            position=[0, 0, 0],
            color="#23aaff",
            materialType="standard",
            key="trimesh",
        ),
        up=[0, 1, 0],
    )
    
    await session.forever()
```

## Parameters

```python
TriMesh(
    # Required
    vertices=np.ndarray,      # (N, 3) float32 - XYZ coordinates
    faces=np.ndarray,         # (M, 3) uint32 - Triangle indices
    
    # Appearance
    color="#ffffff",
    colors=np.ndarray,        # (N, 3 or 4) - Per-vertex colors
    materialType="standard",  # basic, lambert, phong, standard, normal, depth
    wireframe=False,
    opacity=1.0,
    side="double",            # front, back, double
    
    # Textures
    uv=np.ndarray,            # (N, 2) - UV coordinates
    material=dict(
        map="texture.jpg",
        mapRepeat=[1, 1],
    ),
    
    # Transform
    position=[x, y, z],
    rotation=[rx, ry, rz],
    scale=[sx, sy, sz],
    
    key="unique-id",
)
```

## Simple Triangle

```python
vertices = np.array([
    [0.0, 0.0, 0.0],
    [1.0, 0.0, 0.0],
    [0.5, 1.0, 0.0],
], dtype=np.float32)

faces = np.array([[0, 1, 2]], dtype=np.uint32)

TriMesh(vertices=vertices, faces=faces, color="red", key="triangle")
```

## Wireframe Mode

From the [trimesh example](../../examples/01_trimesh):

```python
# Solid mesh
TriMesh(
    vertices=np.array(mesh.vertices),
    faces=np.array(mesh.faces),
    position=[0, 0, 0],
    color="#23aaff",
    materialType="depth",
    key="solid",
)

# Wireframe
TriMesh(
    vertices=np.array(mesh.vertices),
    faces=np.array(mesh.faces),
    wireframe=True,
    position=[-0.3, 0, 0],
    color="yellow",
    key="wireframe",
)
```

## Real-Time Animation

```python
from asyncio import sleep

mesh = trimesh.load_mesh("model.obj")
base_vertices = np.array(mesh.vertices)
faces = np.array(mesh.faces)

session.set @ DefaultScene(
    TriMesh(vertices=base_vertices, faces=faces, key="animated"),
)

# Animate in loop
i = 0
while True:
    i += 1
    x, z = 0.3 * np.sin(i / 10), 0.3 * np.cos(i / 10)
    
    session.upsert @ TriMesh(
        vertices=base_vertices,
        faces=faces,
        position=[x, 0, z],
        color="#23aaff",
        key="animated",
    )
    
    await sleep(0.016)  # 60 FPS
```

## UV Texturing

From the [textured trimesh example](../../examples/texture_meshes/textured_trimesh):

![Textured TriMesh](../../examples/texture_meshes/figures/trimesh_uv.png)

```python
mesh = trimesh.load_mesh("model.obj")

# Generate UV from XY coordinates
xyz = np.array(mesh.vertices)
uv = xyz[:, :2]  # Take X, Y
uv -= uv.min(axis=0)
uv /= uv.max(axis=0)  # Normalize to 0-1

TriMesh(
    vertices=np.array(mesh.vertices),
    faces=np.array(mesh.faces),
    uv=uv,
    materialType="phong",
    material=dict(
        map="http://localhost:8012/static/texture.jpg",
        mapRepeat=[2, 4],  # Repeat texture
    ),
    key="textured",
)
```

## Vertex Colors

```python
vertices = np.array([
    [-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0]
], dtype=np.float32)

faces = np.array([[0, 1, 2], [0, 2, 3]], dtype=np.uint32)

# RGBA colors (0-255)
colors = np.array([
    [255, 0, 0, 255],    # Red
    [0, 255, 0, 255],    # Green
    [0, 0, 255, 255],    # Blue
    [255, 255, 0, 255],  # Yellow
], dtype=np.uint8)

TriMesh(
    vertices=vertices,
    faces=faces,
    colors=colors,
    materialType="basic",
    key="gradient",
)
```

## Procedural Generation

```python
def create_sphere(radius=1.0, segments=32):
    vertices = []
    faces = []
    
    for i in range(segments + 1):
        lat = np.pi * i / segments
        for j in range(segments + 1):
            lon = 2 * np.pi * j / segments
            x = radius * np.sin(lat) * np.cos(lon)
            y = radius * np.cos(lat)
            z = radius * np.sin(lat) * np.sin(lon)
            vertices.append([x, y, z])
    
    for i in range(segments):
        for j in range(segments):
            first = i * (segments + 1) + j
            second = first + segments + 1
            faces.append([first, second, first + 1])
            faces.append([second, second + 1, first + 1])
    
    return (
        np.array(vertices, dtype=np.float32),
        np.array(faces, dtype=np.uint32)
    )

vertices, faces = create_sphere(radius=1.0, segments=32)
TriMesh(vertices=vertices, faces=faces, color="#4a90e2", key="sphere")
```

## Performance Tips

1. **Use correct dtypes**: float32 for vertices, uint32 for faces
2. **Limit updates**: 30-60 FPS is smooth enough
3. **Keep vertex count reasonable**: < 100k for real-time
4. **Use `session.upsert`**: More efficient than `session.set`

## Material Types

```python
# Flat color, no lighting
materialType="basic"

# Matte surface
materialType="lambert"

# Glossy with specular
materialType="phong"

# Physically-based (PBR)
materialType="standard"

# Visualize normals
materialType="normal"

# Visualize depth
materialType="depth"
```

## Next Steps

- [Obj](02_obj) - Load OBJ files
- [Glb](02_glb) - Load GLB files
- [Materials and Textures](03_materials_and_textures) - Advanced materials
