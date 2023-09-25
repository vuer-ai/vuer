from asyncio import sleep
from copy import deepcopy

import numpy as np
from termcolor import cprint

from instant_feature.viewer.render_utils import get_camera_from_three
from vuer import Vuer
from vuer.addons.nerf_vuer.render_components import Render
from vuer.events import ServerEvent
from vuer.schemas import (
    Scene,
    group,
)


class RenderVuer(Vuer):
    device = "cuda:0"

    def __init__(self, render: Render = None, scene: Scene = None, **args):
        super().__init__()

        self.scene = scene
        self.render = render

        self.spawn(self.on_connect, start=True)

    async def on_connect(self, ws_id):
        # from ml_logger import logger

        if self.scene:
            self.set @ self.scene
        else:
            scene = Scene(
                group(key="playground"),
                # set camera position
                backgroundChildren=[self.render],
                key="scene",
            )

            self.set @ scene

        cprint("Need to allow for mulitple event handlers", color="yellow")

        # need to explicitly terminate the coroutine
        while ws_id in self.ws:
            await sleep(0)
            # print(*doc.ws, sep="\n")
            event = self.pop()

            if not event:
                continue

            if event == "CAMERA_MOVE":
                value = event.value
                self.clear()

                world = value.pop("world")
                camera = value.pop("camera")
                render_params = value.pop("render", {})
                # initially the values are non.
                if not render_params:
                    print("initial camera movement does not contain render params.")
                    continue

                # the renderHeight parameter is not currently being respected.
                # rgb_params = render_params["rgb"]

                # if we need to do processing anyway, might as well do the exponentiation here.
                progressive = np.clip(2 ** render_params["progressive"], 0, 1)

                height = camera["height"]
                width = camera["width"]
                # now compute the intended height and width using render height
                renderHeight = render_params.get("renderHeight", height)
                print("renderHeight is", renderHeight)
                renderWidth = width * renderHeight / height

                camera = get_camera_from_three([camera], width=renderWidth, height=renderHeight).to(self.device)

                from ml_logger import logger

                if progressive < 1:
                    quick_cam = deepcopy(camera)
                    quick_cam.rescale_output_resolution(progressive)

                    logger.start("low-res-render")
                    async for render_response in self.render.render(
                        camera=quick_cam,
                        world=world,
                        render=render_params,
                        # other params
                        chunk_size=8096,
                        to_cpu="features",
                        **render_params,
                    ):
                        if isinstance(render_response, ServerEvent):
                            print("Sendinging low-def", logger.since("low-res-render"))
                            self @ render_response

                await sleep(0.0001)
                if "CAMERA_MOVE" in self.downlink_queue:
                    print("skip long render:", logger.since("low-res-render"))
                    continue

                logger.start("long-render")
                async for render_response in self.render.render(
                    camera=camera,
                    world=world,
                    render=render_params,
                    # other params
                    chunk_size=8096,
                    to_cpu="features",
                    **render_params,
                ):
                    # print("high-res rendering.")
                    if isinstance(render_response, ServerEvent):
                        print("Sendinging high-def", logger.since("long-render"))
                        self @ render_response

                    await sleep(0.0001)
                    if "CAMERA_MOVE" in self.downlink_queue:
                        print("terminate long render:", logger.since("long-render"))
                        break

        # need to explicitly terminate the coroutine
        cprint(f"{ws_id} has left the chat", "red")
