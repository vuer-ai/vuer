import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# TriMesh

The `TriMesh` component renders triangle meshes directly from vertex and face data.
This is ideal for:
- Real-time mesh updates and animations
- Procedurally generated geometry
- Streaming mesh data from simulations
- Displaying meshes loaded from custom formats

## Basic Usage

A minimal example that creates a simple mesh from numpy arrays:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
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

        while True:
            await asyncio.sleep(1.0)

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the mesh |
| `vertices` | ndarray | - | Nx3 array of vertex positions |
| `faces` | ndarray | - | Mx3 array of triangle indices |
| `color` | str | `"white"` | Mesh color (hex or named color) |
| `wireframe` | bool | `False` | Render as wireframe |
| `position` | list | `[0,0,0]` | Mesh position in world coordinates |
| `rotation` | list | `[0,0,0]` | Mesh rotation (Euler angles) |
| `scale` | float/list | `1` | Uniform or per-axis scale |
| `materialType` | str | `"standard"` | Material type: `"standard"`, `"depth"`, `"normal"` |

## Material Types

| Type | Description | Use Case |
|------|-------------|----------|
| `"standard"` | Standard PBR material with lighting | General purpose rendering |
| `"depth"` | Depth-based shading | Visualization of surface depth |
| `"normal"` | Normal-based coloring | Debugging surface normals |

## Learn More

For detailed examples of using `TriMesh`, see:

- [Loading 3D Meshes](../examples/meshes/mesh.md) - Multiple methods for loading and displaying meshes
- [Textured TriMesh](../examples/meshes/textured_trimesh.md) - Adding textures to triangle meshes
"""

doc.flush()
