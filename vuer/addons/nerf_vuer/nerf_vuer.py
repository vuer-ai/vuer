from asyncio import sleep
from collections import defaultdict
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

    WEBSOCKET_MAX_SIZE = 2**28

    def __init__(self, render: Render = None, scene: Scene = None, **kwargs):
        super().__init__(**kwargs)

        self.scene = scene
        self.render = render

        self.handlers = defaultdict(dict)

        self.spawn(self.on_connect)

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

        # need to explicitly terminate the coroutine
        while ws_id in self.ws:
            await sleep(0)
            # print(*doc.ws, sep="\n")
            event = self.pop()

            if not event:
                continue

            if event.etype in self.handlers:
                handlers = self.handlers[event.etype]
                for fn_factory in handlers.values():
                    # todo: see if we want to add throttling here.
                    # also pass in an event handler.
                    # Use an arrow function to avoid exposing the server instance.
                    my_task = self.spawn_task(fn_factory(event, lambda e: self @ e))
                    await sleep(0.0)

            if event == "CAMERA_MOVE":
                value = event.value
                self.clear()

                world = value.pop("world", None)
                if world is None:
                    print("initial camera movement does not contain world params.")
                    continue

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
                        render=deepcopy(render_params),
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
                    render=deepcopy(render_params),
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
