from cmx import doc

doc @ """
# 3D Gaussian Splatting

This example shows you how to load a 3D gaussian splat.

You should expect to see a scene that looks like the following:
![3d gaussian splat: Garden Table](figures/garden_table_4.png)
![3d gaussian splat: Garden Table](figures/garden_table_2.png)
"""

with doc:
    from asyncio import sleep
    from pathlib import Path

    import numpy as np

    from vuer import Vuer
    from vuer.events import Set
    from vuer.schemas import DefaultScene, Splat, Movable

    # https://twitter.com/alexcarliera
    cakewalk = "https://huggingface.co/cakewalk/splat-data/resolve/main"

    # https://twitter.com/dylan_ebert_
    dylanebert = "https://huggingface.co/datasets/dylanebert/3dgs/resolve/main/kitchen"

    # # arial = "https://storage.polycam.io/captures/7607fbd0-d4da-41a7-b84b-738a52580397/model.splat?t=16984043"
    # arial = "https://storage.polycam.io/captures/52b1e099-c2cc-4eca-a0ae-e17aabece1ff/model.splat"

    assets_folder = Path(__file__).parent / "../../assets"

    app = Vuer(static_root=assets_folder)

    @app.spawn(start=True)
    async def main(proxy):
        proxy @ Set(
            DefaultScene(
                # Splat(
                #     key="moving",
                #     src=f"{cakewalk}/nike.splat",
                #     scale=0.5,
                #     position=[0, 1.6, -1.5],
                #     rotation=[np.pi, 0, np.pi],
                # ),
                # Movable(
                Splat(
                    src=f"http://localhost:8012/static/splats/garden_table.splat",
                    # src=arial,
                    scale=0.5,
                    position=[0, 1.32, 0],
                    rotation=[-40 / 180 * np.pi, -11 / 180 * np.pi, -5.6 / 180 * np.pi],
                ),
                up=[0, 1, 0],
                showGrid=False,
            )
        )

        i = 0
        while True:
            i += 1
            x, z = 0.3 * np.sin(i / 50), 0.3 * np.cos(i / 50)
            # app.update @ Splat(
            #     src=f"{cakewalk}/nike.splat",
            #     scale=0.5,
            #     key="moving",
            #     position=[x, 1.5, z],
            # )
            await sleep(0.016)
