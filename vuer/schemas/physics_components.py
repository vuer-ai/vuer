from typing import List

from .scene_components import SceneElement


class MuJoCoProvider(SceneElement):
    tag = "MuJoCoProvider"


class MuJoCo(SceneElement):
    tag = "MuJoCo"
    # todo: consider adding default component keys here.
    src: str
    workDir: str = None
    assets: List[str] = []
    speed: float = 1.0
    pause: bool = False
    fps: int = 60
    timeout: float = 0.0
    threshold: float = 0.001
    keyFrames: List[str] = []

    # visible GeomGroups.
    visibile: List[int] = None

    # Allow adding additional children for the user to control.
    # actually this can be done outside.
    selfProvide = True
    useLights = True
    useMocap = True
    gizmoScale = 0.3


class HandActuator(SceneElement):
    tag = "HandActuator"

    ctrlId = -1
    offset = 0.01
    low = 0.01
    high = 1.0
    cond = "right-squeeze"
    value = "right:thumb-tip,right:index-finger-tip"
    scale = 1.0


class MotionControllerActuator(SceneElement):
    """
    MotionControllerActuator component for actuating the MuJoCo simulation based on motion controller inputs.

    :param ctrlId: The control ID in the MuJoCo simulation to actuate.
    :type ctrlId: int
    :param low: The minimum value for actuation.
    :type low: float
    :param high: The maximum value for actuation.
    :type high: float
    :param cond: The condition for actuation, e.g., 'right-trigger'.
    :type cond: str
    :param scale: The scaling factor applied to the input value for actuation.
    :type scale: float
    """

    tag = "MotionControllerActuator"

    ctrlId: int = -1
    low: float = 0.0
    high: float = 1.0
    cond: str = "right-trigger"
    scale: float = 1.0

class MjCameraView(SceneElement):
    """MjCameraView for rendering from arbitrary camera poses.

    :param fov: The vertical field of view of the camera. Defaults to 50.
    :type fov: float, optional
    :param width: The width of the camera image. Defaults to 320.
    :type width: int, optional
    :param height: The height of the camera image. Defaults to 240.
    :type height: int, optional
    :param key: The key of the camera view. Defaults to "ego".
    :type key: str, optional
    :param position: The position of the camera. Defaults to [0, 0, 0].
    :type position: List[float], optional
    :param rotation: The rotation of the camera. Defaults to [0, 0, 0]
    :type rotation: List[float], optional
    :param fps: The frames per second of the camera. Defaults to 30.
    :type fps: int, optional
    :param near: The near field of the camera. Defaults to 0.1.
    :type near: float, optional
    :param far: The far field of the camera. Defaults to 20.
    :type far: float, optional
    :param downsample: The downsample rate. Defaults to 1.
    :type downsample: int, optional
    :param distanceToCamera: The distance to the camera. Defaults to 2.
    :type distanceToCamera: float, optional
    """

    tag = "MjCameraView"
