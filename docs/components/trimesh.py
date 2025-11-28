import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# TriMesh

## Overview

`TriMesh` creates custom 3D meshes from numpy arrays, giving you complete control over vertices and faces for procedural generation, real-time updates, and scientific visualization.

## Basic Usage
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import numpy as np
    from vuer import Vuer
    from vuer.schemas import DefaultScene, TriMesh, OrbitControls

    # Create a simple triangle
    vertices = np.array([
        [0, 0, 0],
        [1, 0, 0],
        [0.5, 1, 0],
    ], dtype=np.float32)

    faces = np.array([[0, 1, 2]], dtype=np.int32)

    app = Vuer()


    @app.spawn(start=True)
    async def main(session):
        session.set @ DefaultScene(
            TriMesh(
                key="triangle",
                vertices=vertices,
                faces=faces,
                color="#23aaff",
            ),
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        )

        await session.forever()

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the mesh |
| `vertices` | ndarray | - | (N, 3) float32 array of XYZ coordinates |
| `faces` | ndarray | - | (M, 3) uint32 array of triangle indices |
| `color` | str | `"#ffffff"` | Mesh color (hex or CSS color name) |
| `colors` | ndarray | - | (N, 3 or 4) array of per-vertex colors |
| `materialType` | str | `"standard"` | Material type: basic, lambert, phong, standard, normal, depth |
| `wireframe` | bool | `False` | Display mesh as wireframe |
| `opacity` | float | `1.0` | Mesh opacity (0-1 range) |
| `side` | str | `"double"` | Face rendering: front, back, double |
| `uv` | ndarray | - | (N, 2) array of UV texture coordinates |
| `material` | dict | - | Material properties (map, mapRepeat, etc.) |
| `position` | list | `[0,0,0]` | Mesh position in world coordinates |
| `rotation` | list | `[0,0,0]` | Mesh rotation (Euler angles) |
| `scale` | float/list | `1` | Uniform or per-axis scale |

## Performance Tips

1. **Use correct dtypes**: float32 for vertices, uint32 for faces
2. **Limit updates**: 30-60 FPS is smooth enough
3. **Keep vertex count reasonable**: < 100k for real-time
4. **Use `session.upsert`**: More efficient than `session.set`


## Learn More

- [Loading 3D Meshes](../examples/meshes/mesh.md) - 5 methods for loading meshes and how to update the mesh in real-time.
- [Textured TriMesh](../examples/meshes/textured_trimesh.md) - Adding textures to triangle meshes
- [Materials and Textures](../guides/first_3d_scene/03_materials_and_textures) - Advanced materials

"""

doc.flush()
