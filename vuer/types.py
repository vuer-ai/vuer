from collections import namedtuple
from typing import NamedTuple, Callable, Union, Coroutine
from math import pi
from uuid import UUID

from vuer.events import Event, ServerEvent, ClientEvent

Vector3 = namedtuple("Vector3", ["x", "y", "z"])


class Euler(NamedTuple):
    x: int
    y: int
    z: int
    order: str = "XYZ"
    # unit: str = "rad"


class EulerDeg(Euler):
    unit: str = "deg"

    def to_rad(self) -> Euler:
        return Euler(*[v / 180 * pi for v in self[:3]], order=self.order)


# class EulerRad(Euler):
#     unit: str = "rad"


class Body(NamedTuple):
    position: Vector3
    rotation: Euler
    scale: float


class RenderNode:
    pass


IDType = Union[UUID, str]
CoroutineFn = Callable[[], Coroutine]

# SendProxy = Callable[[ServerEvent], None]
EventHandler = Callable[[ClientEvent, "VuerProxy"], None]
Spawnable = Callable[["VuerProxy"], Coroutine]

if __name__ == "__main__":
    e = Euler(x=1, y=2, z=3)
    assert e[:3] == (1, 2, 3)
    assert e == (1, 2, 3, "XYZ")
