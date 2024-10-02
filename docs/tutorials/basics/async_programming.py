import os
from contextlib import nullcontext

from cmx import doc

MAKE_DOCS = os.getenv("MAKE_DOCS", None)

doc @ """

# Async Programming 101

This tutorial shows you how to write parallel routines/handle callbacks 
using async programming in vuer.
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    from asyncio import sleep
    import numpy as np

    from vuer import Vuer
    from vuer.schemas import Box

    from vuer import VuerSession

    app = Vuer(
        # These query parameters show up in the URL, and are used to configure the scene.
        queries=dict(
            reconnect=True,
            collapseMenu=True,
        ),
    )


    async def background_task():
        print("Hello from the background task!")
        await sleep(1.0)


    async def long_running_bg_task():
        while True:
            print("Hello from the long running task!")
            await sleep(1.0)


    T = 60


    # use `start=True` to start the app immediately
    @app.spawn(start=True)
    async def main_function(sess: VuerSession):

        print("start background tasks")

        task = sess.spawn_task(background_task())
        task_long = sess.spawn_task(long_running_bg_task())

        t = 0

        while True:
            print("Hello from the main function!\r", end="")

            sess.upsert @ Box(
                args=[0.1, 0.1, 0.1],
                position=[np.sin(np.pi * t / T), 0, np.cos(np.pi * t / T)],
                rotation=[-3.14 / 2, 0, 0],
                materialType="physical",
                material=dict(
                    color="red",
                    roughness=0.0,
                ),
                key="box",
            )

            await sleep(1 / T)
            t += 1

            if t / T == 10:
                print("cancel background task")
                task_long.cancel()

doc.flush()
