from cmx import doc

from vuer import Vuer
from vuer.schemas import Splat

app = Vuer()


@app.spawn(start=True)
async def main(proxy):
    from asyncio import sleep


    # doc @ """https://vuer.ai/?ws=ws://localhost:8012&position=-0.33,0.75,0.68&rotation=1.31,-3.92,0.44&fov=50"""
    # proxy.upsert @ Splat(
    #     src="http://localhost:8012/static/assets/big_sur.splat",
    #     scale=0.5,
    #     position=[-0.33, 0.75, 0.68],
    #     rotation=[75 / 180 * np.pi, -3.92 / 180 * np.pi, 25 / 180 * np.pi],
    #     key="big_sur"
    # )
    # doc @ """ https://vuer.ai/?ws=ws://localhost:8012&position=0.45,-0.36,-0.06&rotation=-15,-1.6,9.3&fov=50 """
    doc @ """ https://vuer.ai/?ws=ws://localhost:8012&position=-0.33,0.39,-0.12&rotation=110,-21,162&fov=50 """
    proxy.upsert @ Splat(
        src="http://localhost:8012/static/assets/construction.splat",
        scale=0.5,
        key="big_sur",
    )

    while True:
        await sleep(10.0)
