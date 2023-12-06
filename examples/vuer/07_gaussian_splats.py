from asyncio import sleep
from pathlib import Path

import numpy as np

from vuer import Vuer
from vuer.events import Set
from vuer.schemas import DefaultScene, Splat

# // https://twitter.com/alexcarliera
cakewalk = "https://huggingface.co/cakewalk/splat-data/resolve/main"
# // https://twitter.com/dylan_ebert_
dylanebert = "https://huggingface.co/datasets/dylanebert/3dgs/resolve/main/kitchen"

if __name__ == "__main__":
    assets_folder = Path(__file__).parent / "../../assets"

    app = Vuer(static_root=assets_folder)

    @app.spawn(start=True)
    async def main(ws):
        app @ Set(
            DefaultScene(
                Splat(
                    alphaTest=0.1,
                    src=f"{cakewalk}/nike.splat",
                    scale=0.5,
                    position=[0, 1.6, 2],
                    key="moving",
                ),
                Splat(
                    alphaTest=0.1,
                    src=f"{cakewalk}/nike.splat",
                    scale=0.5,
                    position=[0, 1.6, -1.5],
                    rotation=[np.pi, 0, np.pi],
                ),
                Splat(
                    alphaTest=0.1,
                    src=f"{cakewalk}/plush.splat",
                    scale=0.5,
                    position=[-1.5, 1.6, 1],
                ),
                Splat(
                    alphaTest=0.1,
                    src=f"{dylanebert}/kitchen-7k.splat",
                    scale=0.5,
                    position=[0, 0.25, 0],
                ),
            ),
        )

        i = 0
        while True:
            i += 1
            x, z = 0.3 * np.sin(i / 5), 0.3 * np.cos(i / 5)
            app.update @ Splat(
                alphaTest=0.1,
                src=f"{cakewalk}/nike.splat",
                scale=0.5,
                key="moving",
                position=[x, 1.5, z],
            )
            await sleep(0.016)
