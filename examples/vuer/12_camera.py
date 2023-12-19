import numpy as np
from asyncio import sleep
from cmx import doc

doc.clear()

doc @ """
### Visualizing Camera Frustums


"""


async def save_doc():
    await sleep(2.)

    result = await app.grab_render(downsample=2)
    doc.window.logger.client.log_buffer("figures/frustum.jpg", result.value["frame"])
    print(doc.window.logger)
    doc.image(src="figures/frustum.jpg", width=400)
    doc.flush()
    print("Example run is complete.")
    exit()


with doc:
    from vuer import Vuer
    from vuer.schemas import DefaultScene, Frustum

    n, N = 5, 125

    app = Vuer()

    @app.spawn(start=True)
    async def main(ws):
        app.set @ DefaultScene(
            *[
                Frustum(
                    key=f"frustum-{i}",
                    scale=10,
                    showImagePlane=True,
                    showFrustum=False,
                    showFocalPlane=False,
                    position=[i % n, (i // n) % n, (i // n**2) % n],
                    rotation=[0.5 * np.pi, 0, 0],
                )
                for i in range(N)
            ]
        )

# fmt: off
        await save_doc()
