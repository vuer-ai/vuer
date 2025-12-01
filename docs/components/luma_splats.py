import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# LumaSplats

The `LumaSplats` component (Luma AI Gaussian Splats) is optimized for loading Gaussian splats exported from Luma AI. It provides better performance and loading times compared to standard Splat format.

This is ideal for:
- Loading Luma AI captures directly
- Fast-loading Gaussian splat scenes

With this example, you should expect to see a scene that looks like the following:
![3d gaussian splat: Robot (no background)](figures/robot_no_background.png)
![3d gaussian splat: Robot (w/ background)](figures/robot.png)

## Basic Example

This example shows how to load a Gaussian splat from Luma AI.
You can use either a `Luma AI URL` directly or an exported file.
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    from vuer import Vuer, VuerSession
    from vuer.events import Set
    from vuer.schemas import DefaultScene, LumaSplats, OrbitControls

    src = "https://lumalabs.ai/capture/ca9ea966-ca24-4ec1-ab0f-af665cb546ff"
    src = "https://lumalabs.ai/capture/1b5f3e33-3900-4398-8795-b585ae13fd2d"
    src = "https://lumalabs.ai/capture/4da7cf32-865a-4515-8cb9-9dfc574c90c2"
    src = "https://lumalabs.ai/capture/822bac8d-70d6-404e-aaae-f89f46672c67"
    src = "https://lumalabs.ai/capture/da82625c-9c8d-4d05-a9f7-3367ecab438c"
    src = "https://lumalabs.ai/capture/4da7cf32-865a-4515-8cb9-9dfc574c90c2"
    src = "https://lumalabs.ai/capture/83e9aae8-7023-448e-83a6-53ccb377ec86"

    app = Vuer()


    @app.spawn(start=True)
    async def main(sess: VuerSession):
        sess @ Set(
            DefaultScene(
                LumaSplats(
                    src=src,
                    # this selected the object versus the background.
                    semantics="foregrounds",
                    scale=0.5,
                    position=[0, 1, 0],
                    key="luma-splats",
                ),
                show_helper=False,
                up=[0, 1, 0],
                bgChildren=[
                    OrbitControls(key="OrbitControls")
                ],
            ),
        )

        await sess.forever()

doc @ """

## Luma AI Integration

1. Create a capture on [Luma AI](https://lumalabs.ai/)
2. Export as Gaussian Splat
3. Use the provided URL directly in `src` parameter

"""

doc.flush()
