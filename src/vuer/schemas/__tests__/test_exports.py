"""Every name that vuer.schemas exported in 0.1.6 still imports, from the same paths.

scene_components.py was split into vuer.schemas._scene.*; these tests guard the
public import paths and the wire format of every component.
"""

import importlib
import json
from pathlib import Path

import pytest

FIXTURE = json.loads((Path(__file__).parent / "fixtures" / "exports_0.1.6.json").read_text())
NAMES = FIXTURE["names"]

# Robot, camera-frustum and physics components are not moved by the split.
KEPT_IN_SCENE_COMPONENTS = [
  "Frustum",
  "PerspectiveFrustum",
  "FisheyeFrustum",
  "OrthographicFrustum",
  "CameraHelper",
  "Urdf",
  "Gripper",
  "SkeletalGripper",
]


@pytest.mark.parametrize("module", sorted(NAMES))
def test_every_name_still_exported(module):
  mod = importlib.import_module(module)
  missing = [n for n in NAMES[module] if not hasattr(mod, n)]
  assert not missing, f"{module} no longer exports {missing}"


def test_star_import_matches():
  namespace = {}
  exec("from vuer.schemas import *", namespace)
  expected = {n for n in NAMES["vuer.schemas"] if not n.startswith("_")}
  assert expected <= set(namespace)


def test_same_object_across_paths():
  schemas = importlib.import_module("vuer.schemas")
  scene_components = importlib.import_module("vuer.schemas.scene_components")
  # vuer/schemas/__init__.py star-imports these after scene_components, so their
  # names win (e.g. drei_components.Html); that was already the case in 0.1.6.
  later = set()
  for module in ("drei_components", "physics_components", "material_components", "vuer_components"):
    later |= set(NAMES[f"vuer.schemas.{module}"])
  for name in NAMES["vuer.schemas.scene_components"]:
    if name.startswith("_") or name in later:
      continue
    assert getattr(schemas, name) is getattr(scene_components, name), name


def test_robot_components_not_moved():
  scene_components = importlib.import_module("vuer.schemas.scene_components")
  for name in KEPT_IN_SCENE_COMPONENTS:
    assert getattr(scene_components, name).__module__ == "vuer.schemas.scene_components", name


@pytest.mark.parametrize("name", sorted(FIXTURE["serialize"]))
def test_serialization_unchanged(name):
  expected = FIXTURE["serialize"][name]
  cls = getattr(importlib.import_module("vuer.schemas"), name)
  try:
    actual = cls(key=f"k-{name}")._serialize()
  except Exception as exc:
    actual = f"<error {type(exc).__name__}>"
  # The fixture is JSON; round-trip the same way so tuples compare as lists.
  assert json.loads(json.dumps(actual, sort_keys=True, default=repr)) == expected
