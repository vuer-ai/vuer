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
    cond = 'right-squeeze'
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
    cond: str = 'right-trigger'
    scale: float = 1.0
