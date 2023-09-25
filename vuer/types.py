from collections import namedtuple
from typing import NamedTuple
from math import pi

Vector3 = namedtuple("Vector3", ["x", "y", "z"])


# Euler = namedtuple("Euler", ["x", "y", "z", "order"])
# refactor with default values for "order"
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


if __name__ == "__main__":
    e = Euler(x=1, y=2, z=3)
    assert e[:3] == (1, 2, 3)
    assert e == (1, 2, 3, "XYZ")
