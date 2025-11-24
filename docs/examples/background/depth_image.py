import os
from contextlib import nullcontext

from cmx import doc

MAKE_DOCS = os.getenv("MAKE_DOCS", None)

doc @ """
# RGB-D Visualization

Demo for rendering an RGB and depth pair. 
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    from asyncio import sleep
    from pathlib import Path

    from vuer import Vuer
    from vuer.schemas import DefaultScene, ImageBackground, OrbitControls

    assets_folder = Path(__file__).parent / "../../../../assets"

    app = Vuer(
        queries=dict(
            reconnect=True,
            grid=False,
            backgroundColor="black",
        ),
        static_root=assets_folder,
    )

    def get_buffer(file_path):
        with open(file_path, "rb") as f:
            file_buffer = f.read()

        return file_buffer

    @app.spawn(start=True)
    async def show_heatmap(proxy):
        rgb = get_buffer(assets_folder / "images/cubic_rgb.jpg")
        depth = get_buffer(assets_folder / "images/cubic_depth.jpg")

        proxy.set @ DefaultScene(
            bgChildren=[
                ImageBackground(
                    src=rgb,
                    depthSrc=depth,
                    distanceToCamera=1.0,
                    key="background",
                    fixed=True,
                ),
                OrbitControls(key="OrbitControls")

            ],
            # hide the helper to only render the objects.
            up=[0, 1, 0],
            show_helper=False,

        )

        while True:
            await sleep(10.0)

doc.flush()
