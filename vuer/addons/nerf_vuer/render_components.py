from typing import List, Generator

from vuer.addons.nerf_vuer.mixins import collector, process_aabb, process_world, collect_rays, chunk_rays
from vuer.addons.nerf_vuer.render_nodes import rgb, Chainer, alpha
from vuer.addons.nerf_vuer.control_components import Controls
from vuer.events import ServerEvent
from vuer.schemas import SceneElement

from instant_feature.viewer.neko.constants.default_settings import RENDER_DEFAULT, RGB_DEFAULT


# =============== Leva Components ===============
# class ActiveElements(SceneElement):
#     def on_connect(self, vuer: Vuer, client_id):
#         yield from self.set_scene(vuer)
#         yield from self.render(vuer)
#
#         while ws_id in self.ws:
#             await sleep(0)
#             event = self.pop()
#
#             if not event:
#                 continue
#
#             for handler in self.eventHandlers:
#                 for signal in handler(event):
#                     if isinstance(event, ServerEvent):
#                         # control-flow signals
#                         if event == "TERMINATE":
#                             break
#                         vuer @ event


class Render(SceneElement):
    tag = "Render"
    key = ""
    # these are the extra options
    # need to be able to register handlers.
    children: List["RenderLayer"] = []

    def __init__(
        self,
        *children,
        layers=[],
        options=[],
        # settings: Controls = Controls(**RENDER_DEFAULT)
        settings=RENDER_DEFAULT,
        **kwargs,
    ):
        super().__init__(
            *children,
            layers=layers,
            options=options,
            settings=settings,
            **kwargs,
        )

    # def serialize(self):
    #     obj = super().serialize()
    #     # if self.settings:
    #     #     obj["settings"] = self.settings
    #     return obj

    def __post_init__(self):
        self._fields = {}
        for child in self.children:
            # only include those that are RenderLayer
            if not isinstance(child, RenderLayer):
                continue

            self._fields[child.key] = child

    async def render(self, *, camera, world, render, **rest):
        layers = render.get("layers", [])
        # outputs = {}
        for key in layers:
            print(f"layer [{key}]")
            channel_args = render.get(key, {})

            async for render_event in self._fields[key].render(
                camera=camera,
                world=world,
                render=render,
                settings=channel_args,
                **rest,
            ):
                yield render_event


class RenderLayer(SceneElement):
    tag = "RenderLayer"

    def __init__(
        self,
        channel="rgb",
        alphaChannel="alpha",
        displacementMap=None,
        geometry="plane",
        settings=RGB_DEFAULT,
        **kwargs,
    ):
        super().__init__(
            channel=channel,
            alphaChannel=alphaChannel,
            displacementMap=displacementMap,
            geometry=geometry,
            settings=settings,
            **kwargs,
        )

    def __post_init__(self, _render=None, **_):
        self._render = _render

    @collector(
        pipe=Chainer(rgb, alpha),
        channels=["rgb", "alpha"],
    )
    @process_aabb
    @process_world
    @collect_rays
    @chunk_rays
    def render(self, ray_bundle, **kwargs) -> Generator[ServerEvent, None, None]:
        import torch

        with torch.no_grad():
            return self._render(ray_bundle=ray_bundle, **kwargs)


class Heatmap(RenderLayer):
    tag = "RenderLayer"
    channel = "clip@pca"
    alphaChannel = "clip@mask"


# supports VR and XR 2.5D overlay
# class VRRenderLayer(RenderLayer):
#     tag = "RenderLayer"
#     channel = "clip@pca"
#     alphaChannel = "clip@mask"
#     geometry = "sphere"
