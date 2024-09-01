import os
from contextlib import nullcontext

from cmx import doc

from vuer.schemas import Pcd

MAKE_DOCS = os.getenv("MAKE_DOCS", None)

doc @ """
# Point Cloud via Pcd Component

This example shows you how to load `pcd` files.

You should expect to see a scene that looks like the following:
![pointcloud](figures/pointcloud_pcd.png)
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    from asyncio import sleep

    from vuer import Vuer, VuerSession

    f3rm_ycb_1 = "pointclouds/f3rm_ycb_1.pcd"
    f3rm_ycb_2 = "pointclouds/f3rm_ycb_2.pcd"

    app = Vuer(
        static_root=os.getcwd() + "/../../../assets"
    )


    @app.spawn(start=True)
    async def main(sess: VuerSession):
        sess.upsert @ Pcd(
            src="http://localhost:8012/static/" + f3rm_ycb_1,
            size=0.001
        )
        sess.upsert @ Pcd(
            src="http://localhost:8012/static/" + f3rm_ycb_2,
            size=0.001,
        )

        while True:
            await sleep(1)
