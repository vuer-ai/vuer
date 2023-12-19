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

if __name__ == "__main__":
    assets_folder = Path(__file__).parent / "../../assets"

    app = Vuer(static_root=assets_folder)


    @app.spawn(start=True)
    async def main(ws):
        app @ Set(
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
                    src=f"{dylanebert}/kitchen-7k.splat",
                    # src=arial,
                    scale=0.5,
                    position=[0, 0.25, 0],
                    # rotation=[-np.pi, 0, -np.pi],
                ),
                up=[0, 1, 0],
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
