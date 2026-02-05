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
    from vuer import Vuer, VuerSession
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
    async def main(sess: VuerSession):
        sess.set @ DefaultScene(
            TriMesh(
                key="triangle",
                vertices=vertices,
                faces=faces,
                color="red"
            ),
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        )

        await sess.forever()

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `vertices` | ndarray | - | (N, 3) float32 array of XYZ coordinates |
| `faces` | ndarray | - | (M, 3) uint32 array of triangle indices |
| `colors` | ndarray | - | (N, 3 or 4) array of per-vertex colors |
| `uv` | ndarray | - | (N, 2) array of UV texture coordinates |

## Learn More

- [Loading 3D Meshes](../examples/meshes/mesh_loading.md) - 5 ways for loading meshes and how to update the mesh in real-time.
- [Textured TriMesh](../examples/meshes/textured_trimesh.md) - Adding textures to triangle meshes
- [Materials and Textures](../guides/first_3d_scene/03_materials_and_textures) - Advanced materials

"""

doc.flush()
