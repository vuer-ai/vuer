from cmx import doc
from contextlib import nullcontext
import os

MAKE_DOCS = os.getenv("MAKE_DOCS", None)

doc @ """
# Spline and Frustums

This example shows you how to visualize a spline from a set of points. We also show a camera frustum moving along it, which is a common use case when visualizing posed image data.

![frustum](figures/15_spline_frustum.png)

## Download Data

run the following:

```shell
mkdir -p assets
wget https://raw.githubusercontent.com/vuer-ai/assets/main/nerf/camera_path.json -O assets/camera_path.json
```

"""

with doc:
    CONVERSION_INDICES = [0, 4, 8, 12, 1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15]

    def colmap2three(mat):
        """Converts a 4x4 colmap matrix to a three.js matrix"""
        return mat[:, CONVERSION_INDICES]


with doc:
    import json
    import numpy as np

    with open("assets/camera_path.json") as f:
        matrices = np.array([p["camera_to_world"] for p in json.load(f)["camera_path"]])

with doc @ "Extract the points from the camera matrices":
    points = matrices[:, [3, 7, 11]]
    three_matrices = colmap2three(matrices)

with doc @ f"Camera path with {len(points)} points", doc.skip if MAKE_DOCS else nullcontext():
    from asyncio import sleep
    from vuer import Vuer
    from vuer.schemas import DefaultScene, Line, Frustum

    app = Vuer()

    # use `start=True` to start the app immediately
    @app.spawn(start=True)
    async def main(session):
        # requires the ambient light in the default Scene for showing the colors
        session.set @ DefaultScene()

        session.add @ Line(
            points=points,
            color="red",
            closed=False,
            lineWidth=4,
            key="camera_path",
        )

        while True:
            for mat in three_matrices:
                session.upsert @ Frustum(
                    matrix=mat,
                    far=3,
                    showFrustum=True,
                    showImagePlane=True,
                    showFocalPlane=False,
                    key="camera",
                )
                await sleep(0.016)


doc.flush()
