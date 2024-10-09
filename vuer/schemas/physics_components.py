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

    # def __init__(self, src: str, assets: List[str] = [], workDir: str = None, speed: float = 1.0, pause: bool = True, fps: int = 60, timeout: float = 0.0, keyFrames: List[str] = [], **kwargs):
    #     super().__init__(**kwargs)
    #     self.src = src
    #     self.assets = assets
    #     self.workDir = workDir
    #     self.speed = speed
    #     self.pause = pause
    #     self.fps = fps
    #     self.timeout = timeout
    #     self.keyFrames = keyFrames


class HandActuator(SceneElement):
    tag = "HandActuator"

    ctrlId = -1
    offset = 0.01
    low = 0.01
    high = 1.0
    cond = 'right-squeeze'
    value = "right:thumb-tip,right:index-finger-tip"
    scale = 1.0
