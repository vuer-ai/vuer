from collections import defaultdict
from copy import deepcopy
from dataclasses import dataclass
from functools import wraps
from typing import Dict, Union, List, DefaultDict, Optional, Generator, Callable, Sequence

from instant_feature.cameras.cameras import Cameras
from instant_feature.viewer.se3 import rotation_matrix
from vuer.addons.nerf_vuer.render_nodes import Chainer
from vuer.events import ServerEvent
from vuer.types import Vector3, Euler, EulerDeg, Body

import torch
from torchtyping import TensorType


@dataclass
class AABB:
    """
    AABB Scenebox

    note: in the future we will have the inputs automatically cast into the currect types.
    """

    aabb_min: Vector3 = None
    aabb_max: Vector3 = None
    position: Vector3 = None
    rotation: Euler = None

    def __post_init__(self):
        # If min bounds are greater than max bounds, set min bound to 1cm below max bound
        aabb = torch.Tensor([*self.aabb_min, *self.aabb_max]).reshape([2, 3])

        illegal = aabb[0] >= aabb[1]
        if illegal.any():
            print(f"Invalid aabb box with min bounds {self.aabb_min} and max_bounds {self.aabb_max}")
            aabb[0][illegal] = aabb[1][illegal] - 0.01
            print("Set min bounds to", aabb[0])

        self.aabb: TensorType[2, 3] = aabb

    def get_diagonal_length(self):
        """Returns the longest diagonal length."""
        diff = self.aabb[1] - self.aabb[0]
        length = torch.sqrt((diff**2).sum() + 1e-20)
        return length

    def get_center(self):
        """Returns the center of the box."""
        diff = self.aabb[1] - self.aabb[0]
        return self.aabb[0] + diff / 2.0

    def get_centered_and_scaled_scene_box(self, scale_factor: Union[float, torch.Tensor] = 1.0):
        """Returns a new box that has been shifted and rescaled to be centered
        about the origin.

        Args:
            scale_factor: How much to scale the camera origins by.
        """
        return AABB(aabb=(self.aabb - self.get_center()) * scale_factor)

    @staticmethod
    def get_normalized_positions(positions: TensorType[..., 3], aabb: TensorType[2, 3]):
        """Return normalized positions in range [0, 1] based on the aabb axis-aligned bounding box.

        Args:
            positions: the xyz positions
            aabb: the axis-aligned bounding box
        """
        aabb_lengths = aabb[1] - aabb[0]
        normalized_positions = (positions - aabb[0]) / aabb_lengths
        return normalized_positions

    def to_json(self) -> Dict:
        """Returns a json object from the Python object."""
        return {"type": "aabb", "min_point": self.aabb[0].tolist(), "max_point": self.aabb[1].tolist()}

    @staticmethod
    def from_json(json_: Dict) -> "AABB":
        """Returns the an instance of AABB from a json dictionary.

        Args:
            json_: the json dictionary containing scene box information
        """
        assert json_["type"] == "aabb"
        aabb = torch.tensor([json_[0], json_[1]])
        return AABB(aabb=aabb)

    @staticmethod
    def from_camera_poses(poses: TensorType[..., 3, 4], scale_factor: float) -> "AABB":
        """Returns the instance of AABB that fully envelopes a set of poses

        Args:
            poses: tensor of camera pose matrices
            scale_factor: How much to scale the camera origins by.
        """
        xyzs = poses[..., :3, -1]
        aabb = torch.stack([torch.min(xyzs, dim=0)[0], torch.max(xyzs, dim=0)[0]])
        return AABB(aabb=aabb * scale_factor)


def process_aabb(render_gen):
    # @wraps(render_gen)
    async def wrap_gen(
        *args,
        settings,
        render,
        **kwargs,
    ):

        if settings.get("use_aabb", None):
            # use_aabb = settings.get("use_aabb", None)
            # aabb_min = settings.get("aabb_min", None)
            # aabb_max = settings.get("aabb_max", None)
            scene_box = AABB(
                aabb_min=Vector3(**settings.get("aabb_min", None)),
                aabb_max=Vector3(**settings.get("aabb_max", None)),
            )
        elif render.get("use_aabb", None):
            scene_box = AABB(
                aabb_min=Vector3(**render.get("aabb_min", None)),
                aabb_max=Vector3(**render.get("aabb_max", None)),
            )
        else:
            scene_box = None

        async for event in render_gen(*args, aabb=scene_box, settings=settings, **kwargs):
            yield event

    return wrap_gen


def _se3(position=None, rotation=None, scale=None, **rest) -> Dict[str, Union[Vector3, EulerDeg, float]]:
    """
    Add handling of undefined parameters.
    """
    output = rest
    if position:
        output["position"] = Vector3(**position)
    if rotation:
        output["rotation"] = EulerDeg(**rotation).to_rad()
    if isinstance(scale, dict):
        output["scale"] = Vector3(**scale)
    elif scale:
        output["scale"] = scale
    return output


# Need more encapsulated handling. Transformations should be propagated down.
def process_world(render_gen):
    # @wraps(render_gen)
    async def wrap_gen(*args, camera, world, settings, **kwargs):
        async for event in render_gen(
            *args,
            parent=_se3(**world),
            settings=_se3(**settings),
            # background=background,
            camera=camera,
            world=world,
            **kwargs,
        ):
            yield event

    return wrap_gen


# these logic do not belong. They are too specific to nerfstudio.
# if hasattr(model, "renderer_rgb"):
#     model.renderer_rgb.background_color = bg_rgb
# elif hasattr(model, "rgb_model"):
#     model.rgb_model.renderer_rgb.background_color = bg_rgb
# else:
#     raise ValueError(f"Could not patch background color for RGB renderer for {type(model)}")


def _collect(cache: DefaultDict[str, List], *, height: int, width: int, prefix=None, **_):
    """
    collect outputs from render_gen
    params:
        output_lists: defaultdict(list)
        height: int
        width: int
        pred: Callable[[str, torch.Tensor], bool] This is the predicate for applying the
    """
    # Render image height and width
    # todo: not yet implemented
    outputs = dict(width=width, height=height)
    for output_name, out_list in cache.items():
        if prefix:
            outputs[prefix + output_name] = torch.cat(out_list).view(height, width, -1)
        else:
            outputs[output_name] = torch.cat(out_list).view(height, width, -1)
    return outputs


def _lie_action(ray_bundle, position: Vector3, rotation: Euler, scale: float, **_):
    if rotation is not None:
        mat = rotation_matrix(*rotation)
        c2w = torch.FloatTensor(mat).to(ray_bundle.origins.device)
    else:
        c2w = None

    if position is not None:
        ray_bundle.origins -= torch.FloatTensor(position).to(ray_bundle.origins.device)

    if c2w is not None:
        ray_bundle.origins @= c2w
        ray_bundle.directions @= c2w

    if scale is not None:
        # note: non-scaler scale is not supported. Need to transform ray bundles as well.
        ray_bundle.origins /= scale


def _transformation(rotation: Euler, position: Vector3, scale: Union[float, Vector3], **_) -> torch.Tensor:
    rot_mat = torch.from_numpy(rotation_matrix(*rotation))
    transform = torch.eye(4)
    if isinstance(scale, Vector3):
        transform[:3, :3] = rot_mat @ torch.DoubleTensor(scale).diag()
    else:
        transform[:3, :3] = rot_mat * scale
    transform[:3, 3] = torch.FloatTensor(position)
    return transform


def collect_rays(render_bundle):
    # @wraps(render_bundle)
    async def ray_gen(
        *args,
        camera: Cameras,
        parent: Dict = None,
        settings: Dict = None,
        aabb: Optional[AABB] = None,
        **kwargs,
    ) -> Dict[str, torch.Tensor]:
        assert len(camera) == 1

        parent2world = _transformation(**parent)

        if settings and "rotation" in settings:
            settings2parent = _transformation(**settings)
            settings2world = parent2world @ settings2parent
            world2setting = torch.linalg.inv(settings2world)

        else:
            world2setting = torch.linalg.inv(parent2world)

        camera2world = torch.eye(4)
        camera2world[:3, :] = camera.camera_to_worlds[0]
        camera2setting = world2setting @ camera2world

        camera = deepcopy(camera)
        camera.camera_to_worlds[0] = camera2setting[:3]

        ray_bundle = camera.generate_rays(camera_indices=0, aabb_box=aabb)
        ray_bundle = ray_bundle.to(camera.device)

        # timing is not accurate
        # with torch.no_grad(), logger.time("rendering", fmt=lambda s: f"{1000 * s:.1f}ms"):
        # with torch.no_grad():
        # synchronous.
        # this is not kosher. Parent is not mixed in.
        for chunk in render_bundle(*args, ray_bundle=ray_bundle, parent=parent, **kwargs):  # (field, chunk_size=chunk_size, to_cpu=to_cpu):
            yield chunk

    return ray_gen


def collector(
    pipe: Chainer = None,
    channels: List[str] = None,
    channel_prefix: Union[str, Callable] = None,
):
    """
    Decorator for processing the rendered images.

    Params:
    pipe: this is the chain of operations that forms the processing flow.
    channels: keys sent over the wire to the client. We use whitelisting to recude bandwidth.
    layer_prefix: when this is set, the output channels are attached a prefix, to accommodate
            conflicting keys in the pipeline.
            Also takes in a function, to allow more dynamics generation of prefixes
    """

    def decorator(async_render):
        # @wraps(async_render)
        # adding self argument to allow passing into the prefix function
        async def render_event(
            self,
            *args,
            camera,
            pipe=pipe,
            **kwargs,
        ) -> Generator:

            outputs = defaultdict(list)

            async for output_chunk in async_render(self, *args, channels=channels, camera=camera, **kwargs):
                signal = yield None

                # collect the results
                for key, value in output_chunk.items():
                    outputs[key].append(value)

            # the camera height and width is different from the frontend one by rounding error.
            flow = _collect(
                outputs,
                width=camera.width,
                height=camera.height,
                prefix="raw_",
            )
            # pipe = chainer(*nodes)
            flow = pipe(
                **flow,
                render=kwargs["render"],
                settings=kwargs["settings"],
            )

            # info: do NOT mutate channel_prefix. This is inside the closure and is shared between function calls.
            prefix = channel_prefix
            if callable(channel_prefix):
                prefix = channel_prefix(self)

            if prefix:
                # select channels, and prefix with
                flow = {prefix + k: v for k, v in flow.items() if k in channels}
            else:
                # filter out the non-requested channels
                flow = {k: v for k, v in flow.items() if k in channels}

            yield ServerEvent(
                etype="RENDER",
                # client_id=client_id,
                # data={"camera": camera, **flow},
                data={**flow},
            )

        # holds the current pipe.
        render_event._pipeline = pipe
        render_event._channels = channels

        return render_event

    return decorator


def chunk_rays(field_fn):
    # does not need to be async, because it is blocking anyways.
    # @wraps(field_fn)
    def render_bundle(*args, ray_bundle, chunk_size=4096, to_cpu: List[str] = "features", **kwargs) -> Dict[str, torch.Tensor]:
        # render generator, to allow timeout.
        for i in range(0, len(ray_bundle), chunk_size):
            start_idx = i
            end_idx = i + chunk_size

            # this is the row-major ray_bundle
            rays = ray_bundle.get_row_major_sliced_ray_bundle(start_idx, end_idx)
            outputs = field_fn(*args, ray_bundle=rays, **kwargs)
            # fixme: this is not working even though the implementation is simple.
            # ray_ge = ray_bundle[start_idx:end_idx]

            if isinstance(to_cpu, str):
                cpu_keys = [to_cpu]
            else:
                cpu_keys = to_cpu

            for k in cpu_keys:
                if k in outputs:
                    outputs[k] = outputs[k].to("cpu")

            yield outputs

    return render_bundle


if __name__ == "__main__":
    """Here is an example"""

    # not going to work with instance methods
    @collector()
    @torch.no_grad
    @process_aabb
    @process_world
    @collect_rays
    @chunk_rays
    def rgb_field(ray_bundle, **_):
        "returns a generator that yields rgb and alpha values for the ray_bundle"
        pass
