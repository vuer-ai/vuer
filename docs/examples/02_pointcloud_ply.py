import os
from contextlib import nullcontext

from cmx import doc

MAKE_DOCS = os.getenv("MAKE_DOCS", None)

doc @ """
# Point Cloud via Ply Component

This example shows you how to load a `pcd` file.

You should expect to see a scene that looks like the following:
![pointcloud](figures/pointcloud_ply.png)

```{admonition} Changing the Tone Mapping Exposure
:class: tip
Point cloud rendering does not depend on the environment lighting.

You can, however, change the toneMappingExposure to make the point cloud look nicer.
```

```{admonition} Point Clouds looking Desaturated
:class: tip
This usually happens because your realsense camera is overexposed. You need
to adjust the exposure settings on the camera to make the point cloud look 
nicer.
```
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    from asyncio import sleep
    import numpy as np

    from vuer import Vuer, VuerSession
    from vuer.schemas import Ply, Scene

    pixelnerf = "pointclouds/pixelnerf.ply"

    app = Vuer(
        static_root=os.getcwd() + "/../../../assets"
    )


    @app.spawn(start=True)
    async def main(sess: VuerSession):
        # setting the toneMappingExposure to a lower value to make the color look nicer.
        sess.set @ Scene(toneMappingExposure=0.4)

        sess.upsert @ Ply(
            src="http://localhost:8012/static/" + pixelnerf,
            size=0.008,
            rotation=[- 0.5 * np.pi, 0, -0.5 * np.pi]
        )

        while True:
            await sleep(1)
