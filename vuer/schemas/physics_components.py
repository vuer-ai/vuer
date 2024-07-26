from typing import List

from .scene_components import SceneElement


class MuJoCoProvider(SceneElement):
    tag = "MuJoCoProvider"


class MuJoCo(SceneElement):
    tag = "MuJoCo"
    # todo: consider adding default component keys here.
    src: str
    assets: List[str] = []
    speed: float = 1.0
    pause: bool = True

    # Allow adding additional children for the user to control.
    # actually this can be done outside.
