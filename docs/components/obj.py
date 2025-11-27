import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Obj

The `Obj` component loads and displays OBJ (Wavefront) 3D model files.
This is ideal for:
- Loading static 3D models from files
- Displaying pre-made assets
- Loading textured models with MTL files
- Importing models from 3D modeling software

## Basic Usage

A minimal example that loads an OBJ file from a URL:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import os
    from vuer import Vuer
    from vuer.schemas import DefaultScene, Obj, OrbitControls

    app = Vuer(static_root=os.getcwd() + "/../../../assets")
    obj_file = "static_3d/armadillo_midres.obj"

    @app.spawn(start=True)
    async def main(sess):
        sess.set @ DefaultScene(
            Obj(
                key="model",
                src="http://localhost:8012/static/" + obj_file,
                position=[0, 0, 0],
                scale=0.5,
            ),
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        )

        await sess.forever()

doc @ """
## Key Parameters

| Parameter | Type         | Default | Description |
|-----------|--------------|---------|-------------|
| `key` | str          | - | Unique identifier for the model |
| `src` | str          | - | URL to the OBJ file |
| `buff` | bytes        | - | Binary OBJ data (alternative to src) |
| `text` | str          | - | OBJ file content as string (alternative to src) |
| `mtl` | str          | `[0,0,0]` | The source of the mtl file. Can be a url or a local file. |
| `materials` | list[string] | `[0,0,0]` | A list of materials to be used for the obj file. |

## OBJ with Materials (MTL)

OBJ files often come with companion MTL (Material Template Library) files that define colors, textures, and material properties:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Obj

app = Vuer(static_root="./assets")

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Obj(
            src="http://localhost:8012/static/textured_model.obj",
            mtl="http://localhost:8012/static/textured_model.mtl",
            position=[0, 0, 0],
            key="textured",
        ),
    )
    
    await session.forever()
```


## Learn More

For detailed examples of using `Obj`, see:

- [Loading 3D Meshes](../examples/meshes/mesh.md) - Multiple mesh loading methods
"""

doc.flush()
