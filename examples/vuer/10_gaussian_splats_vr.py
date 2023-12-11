"""
We are using LumaAI's Gaussian Splatting implementation for VR.
"""
from asyncio import sleep

from vuer import Vuer
from vuer.events import Set
from vuer.schemas import DefaultScene, LumaSplats

if __name__ == "__main__":

    src = "https://lumalabs.ai/capture/ca9ea966-ca24-4ec1-ab0f-af665cb546ff"
    src = "https://lumalabs.ai/capture/1b5f3e33-3900-4398-8795-b585ae13fd2d"
    src = "https://lumalabs.ai/capture/4da7cf32-865a-4515-8cb9-9dfc574c90c2"
    src = 'https://lumalabs.ai/capture/822bac8d-70d6-404e-aaae-f89f46672c67'
    src = 'https://lumalabs.ai/capture/da82625c-9c8d-4d05-a9f7-3367ecab438c'
    src = 'https://lumalabs.ai/capture/4da7cf32-865a-4515-8cb9-9dfc574c90c2'
    src = 'https://lumalabs.ai/capture/83e9aae8-7023-448e-83a6-53ccb377ec86'

    app = Vuer()

    @app.spawn
    async def main(ws):
        app @ Set(
            DefaultScene(
                LumaSplats(
                    src=src,
                    semantics="foregrounds",
                    scale=0.5,
                    position=[0, 1, 0],
                    key="luma-splats",
                ),
            ),
        )

        while True:
            await sleep(10)

    app.run()
