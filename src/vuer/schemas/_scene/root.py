"""The scene root."""

from typing import List, Literal

from ..html_components import BlockElement, Element
from .base import SceneElement
from .controls import CameraPreviewOverlay, CameraPreviewThumbs, Gamepad, SceneCamera, SceneCameraControl
from .geometry import Grid
from .lights import HemisphereLightStage
from .xr import Hands, MotionControllers


class Scene(BlockElement):
  tag = "Scene"

  def __init__(
    self,
    *children,
    rawChildren=None,
    htmlChildren=None,
    bgChildren: List[Element] = None,
    # default to y-up to be consistent with three.js. Blender uses z-up though.
    up=[0, 1, 0],
    background=None,
    toneMapping: str = None,
    toneMappingExposure: float = None,
    frameloop: Literal["always", "demand"] = None,
    camPosition: List[float] = None,
    camRotation: List[float] = None,
    **kwargs,
  ):
    super().__init__(*children, up=up, **kwargs)

    # Set bgChildren: use user-provided value, or empty list if None
    if bgChildren:
      self.bgChildren = bgChildren

    if rawChildren is None:
      pass
    elif isinstance(rawChildren, list):
      self.rawChildren = rawChildren
    else:
      self.rawChildren = [rawChildren]

    if htmlChildren:
      self.htmlChildren = htmlChildren

    self.up = up

    if background:
      self.background = background

    if toneMapping is not None:
      self.toneMapping = toneMapping
    if toneMappingExposure is not None:
      self.toneMappingExposure = toneMappingExposure

    if frameloop is not None:
      self.frameloop = frameloop

    if camPosition is not None:
      self.camPosition = camPosition
    if camRotation is not None:
      self.camRotation = camRotation

  def _serialize(self):
    obj = super()._serialize()
    if getattr(self, "rawChildren", None):
      obj["rawChildren"] = [e._serialize() for e in self.rawChildren if e]
    if getattr(self, "htmlChildren", None):
      obj["htmlChildren"] = [e._serialize() for e in self.htmlChildren if e]
    if getattr(self, "bgChildren", None):
      obj["bgChildren"] = [e._serialize() for e in self.bgChildren if e]
    return obj


class DefaultScene(Scene):
  """Default Scene with sensible defaults for interactive 3D applications.

  Includes:
  - Grid, HemisphereLightStage, Gamepad, Hands, MotionControllers
  - SceneCamera, SceneCameraControl, CameraPreviewThumbs, CameraPreviewOverlay

  :param children: Scene elements to render.
  :param rawChildren: Raw children elements.
  :param htmlChildren: HTML overlay elements.
  :param bgChildren: Additional background children (appended to defaults).
  :param grid: Whether to include the grid (default: True).
  :param up: Up vector (default: [0, 1, 0] for y-up).
  :param kwargs: Additional arguments passed to Scene.
  """

  def __init__(
    self,
    *children: SceneElement,
    rawChildren: List[SceneElement] = None,
    htmlChildren: List[Element] = None,
    bgChildren: List[SceneElement] = None,
    # default to y-up
    up=[0, 1, 0],
    grid=True,
    **kwargs,
  ):
    # Default bgChildren: Grid + HemisphereLightStage + Gamepad + Hands + MotionControllers
    # + SceneCamera + SceneCameraControl + CameraPreviewThumbs + CameraPreviewOverlay
    default_bg_children = [
      Grid(key="grid") if grid else None,
      HemisphereLightStage(key="light-stage"),
      Gamepad(key="gamepad-0", index=0),
      Hands(fps=30, stream=True, key="hands"),
      MotionControllers(fps=30, stream=True, key="motion-controllers"),
      SceneCamera(key="SceneCamera", position=[0, 5, 10]),
      SceneCameraControl(key="SceneCameraControl", makeDefault=True),
      CameraPreviewThumbs(key="CameraPreviewThumbs"),
      CameraPreviewOverlay(key="CameraPreviewOverlay"),
      *(bgChildren or []),
    ]

    super().__init__(
      *children,
      rawChildren=rawChildren,
      htmlChildren=htmlChildren,
      bgChildren=default_bg_children,
      up=up,
      **kwargs,
    )
