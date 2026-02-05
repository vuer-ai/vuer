import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Glb

The `Glb` component (GLB/GLTF File Loader) loads 3D models from GLB (GL Transmission Format Binary) and GLTF files, the modern standard for 3D assets on the web. GLB is the binary version of GLTF, offering superior compression and faster loading than OBJ.

**Why GLB?**
- **Fast loading**: Binary format, up to 10x smaller than OBJ
- **Everything embedded**: Geometry, materials, textures in one file
- **Animation support**: Skeletal animations and morph targets
- **Industry standard**: Supported by all major 3D tools

![](figures/glb.png)

## Basic Usage

A minimal example that loads a GLB model:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import os
    from vuer import Vuer
    from vuer.schemas import DefaultScene, Glb, OrbitControls

    app = Vuer(static_root=os.getcwd() + "/../../../assets")
    glb_file = "static_3d/dragon.glb"

    @app.spawn(start=True)
    async def main(sess):
        sess.set @ DefaultScene(
            Glb(
                src="http://localhost:8012/static/" + glb_file,
                position=[0, 0, 0],
                key="glb-model",
            ),
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        )

        await sess.forever()

doc.flush()
