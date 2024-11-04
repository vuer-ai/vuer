from math import pi
from typing import NamedTuple, Callable, Union, Coroutine
from uuid import UUID

from vuer.events import ClientEvent

IDType = Union[UUID, str]
"""IDType is either a UUID or a string. Not in use."""

CoroutineFn = Callable[[], Coroutine]
"""A function that returns a coroutine. Not in use."""

# SendProxy = Callable[[ServerEvent], None]
EventHandler = Callable[[ClientEvent, "VuerProxy"], None]
"""Defines a function that handles a client event. Second argument is the VuerProxy instance bound
to a specific client connected through a websocket session."""

SocketHandler = Callable[["VuerProxy"], Coroutine]
"""Defines a function that spawns a new entity. Argument is the VuerProxy instance."""


class Vector3(NamedTuple):
    x: int
    y: int
    z: int


class Euler(NamedTuple):
    x: int
    y: int
    z: int
    order: str = "XYZ"


class EulerDeg(Euler):
    unit: str = "deg"

    def to_rad(self) -> Euler:
        return Euler(*[v / 180 * pi for v in self[:3]], order=self.order)


class Body(NamedTuple):
    position: Vector3
    rotation: Euler
    scale: float


if __name__ == "__main__":
    e = Euler(x=1, y=2, z=3)
    assert e[:3] == (1, 2, 3)
    assert e == (1, 2, 3, "XYZ")
