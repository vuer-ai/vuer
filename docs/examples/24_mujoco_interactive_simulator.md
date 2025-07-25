
# Using in-browser mujoco as an interactive simulator for robots

This example shows you how to use the MuJoCo component in Vuer to create an interactive simulation of a car model.


```python
from asyncio import sleep, Queue, create_task, gather
from pathlib import Path

import numpy as np

from vuer import Vuer
from vuer.events import MjStep, Set, MjRender
from vuer.schemas import DefaultScene, SceneBackground, MjCameraView
from vuer.schemas import MuJoCo
from PIL import Image as PImage
from io import BytesIO
import cv2

app = Vuer(static_root=f"{Path(__file__).parent}/../_static/mujoco_scenes")

asset_pref = "http://localhost:8012/static/"

IS_MUJOCO_LOAD = False

@app.add_handler("ON_MUJOCO_LOAD")
async def handler(event, session):
    global IS_MUJOCO_LOAD
    IS_MUJOCO_LOAD = True
    print("MuJoCo component loaded successfully.")

result_queue = Queue()

async def process_results():
    while True:
        result = await (await result_queue.get())
        try:
            if hasattr(result, 'value') and isinstance(result.value, dict):
                frame = result.value.get("depthFrame") or result.value.get("frame")
                if frame:
                    pil_image = PImage.open(BytesIO(frame))
                    img = np.array(pil_image)
                    img_bgr = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
                    cv2.imshow("monitor", img_bgr)
                    if cv2.waitKey(1) == ord("q"):
                        exit()
                else:
                    print("No valid frame data found in result.")
            else:
                print("Invalid result structure or missing 'value' attribute.")
        except Exception as e:
            print(f"Error processing result: {e}")

# use `start=True` to start the app immediately
@app.spawn(start=True)
async def main(session):
    session @ Set(
        DefaultScene(
            SceneBackground(),
            MuJoCo(
                key="simple",
                src=asset_pref + "car/car.mjcf.xml",
                pause=False,
                useLights=True,
                dragAble=False,
            ),
            MjCameraView(
                key="cam1",
                position=[0, 0.35, 0.5],
                rotation=[-0.4, 0, 0],
                width=640,
                height=480,
                stream="ondemand",
                distanceToCamera=0.1,
            ),

            up=[0, 1, 0],
            show_helper=False
        ),
    )
    await sleep(2)

    create_task(process_results())

    i = 0
    while True:
        i += 1
        if not IS_MUJOCO_LOAD:
            print("Waiting for MuJoCo component to load...")
            await sleep(1)
            continue

        await session.rpc(MjStep(
            key="simple",
            sim_steps=5,
            ctrl=[np.clip(np.sin(i * 0.1), -1, 1), 1]
        ), ttl=5)

        """
        Instead of waiting for the rendering result, we can use a queue to handle the rendering tasks like the code below.
        Or you can using 
            `await session.rpc_no_wait(MjRender(key="cam1"))`
        to send the rendering task without waiting for the result directly. It is the same as the direct "send" event.
        """
        result_task = session.rpc(MjRender(key="cam1"))
        await result_queue.put(result_task)

        await sleep(1 / 30)
```
