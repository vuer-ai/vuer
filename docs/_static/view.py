from asyncio import sleep

from vuer import Vuer, VuerSession
from vuer.schemas import MuJoCo

vuer = Vuer()

host = "http://localhost:8012/static"

@vuer.spawn(start=True)
async def main(proxy: VuerSession):
    proxy.add @ MuJoCo(
        key="default-sim",
        # src=f"{host}/mujoco_scenes/adhesion/active_adhesion.mjcf.xml",
        src="https://docs.vuer.ai/en/latest/_static/mujoco_scenes/adhesion/active_adhesion.mjcf.xml",
        assets=[],
    )
    while True:
        await sleep(10)
