"""
This example visualizes a large number of coordinates markers.

Live demo: TBD
"""
from asyncio import sleep

from vuer import Vuer
from vuer.events import Set
from vuer.schemas import DefaultScene, CoordsMarker

if __name__ == "__main__":
    # from trimesh import util
    app = Vuer()

    n = 10
    N = 1000

    @app.spawn
    async def main(ws):
        app @ Set(
            DefaultScene(
                *[
                    CoordsMarker(
                        position=[i % n, (i // n) % n, (i // n**2) % n], scale=0.25
                    )
                    for i in range(N)
                ]
            ),
        )

        i = 0
        while True:
            i += 1
            await sleep(16)

    app.run()
