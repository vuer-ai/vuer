from pathlib import Path

from cmx import doc
from asyncio import sleep


# async def save_doc():
#     await sleep(1.0)
#
#     result = await app.grab_render(downsample=2)
#
#     filestem = Path(__file__).stem
#     doc.window.logger.client.log_buffer(f"_static/{filestem}.jpg", result.value["frame"])
#
#     doc @ """"""
#
#     print(doc.window.logger)
#     doc.flush()
#     print("Example run is complete.")
#     exit()
#
#
# filename = Path(__file__).parent.parent.parent / "docs" / Path(__file__).stem
# doc = CommonMark(f"{filename}.md", root=Path.cwd().parent.parent / "docs", prefix=".")


async def save_doc():
    await sleep(10.0)

    result = await app.grab_render(downsample=2)
    doc.window.logger.client.log_buffer(f"../docs/_static/{Path(__file__).stem}.jpg", result.value["frame"])
    print(doc.window.logger)
    doc.flush()
    print("Example run is complete.")
    exit()


doc @ """
# Visualizing Camera Frustums

You can programmatically insert camera frustums into the scene. Here
we stress-test vuer by inserting 1728 frustums.
"""
doc.image(src=f"figures/{Path(__file__).stem}.jpg", width=400)

doc @ """
Simply run the following script:
"""
with doc, doc.skip:
    from vuer import Vuer, VuerSession
    from vuer.schemas import DefaultScene, Frustum

    n, N = 12, 12**3

    app = Vuer()

    @app.spawn(start=True)
    async def main(sess: VuerSession):
        sess.set @ DefaultScene(
            *[
                Frustum(
                    key=f"frustum-{i}",
                    scale=10,
                    showImagePlane=True,
                    showFrustum=False,
                    showFocalPlane=False,
                    position=[i % n, (i // n) % n, (i // n**2) % n],
                    rotation=[0.5 * 3.14, 0, 0],
                )
                for i in range(N)
            ]
        )

        # # fmt: off
        # await save_doc()
