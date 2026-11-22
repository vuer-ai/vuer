# These names were always part of `from vuer.schemas import *`; keep them exported.
from typing import List, Literal  # noqa: F401

import numpy as np  # noqa: F401
from numpy.typing import NDArray  # noqa: F401

from .html_components import BlockElement, Element, Img  # noqa: F401

# Scene elements live in vuer.schemas._scene; they are re-exported here so that
# `from vuer.schemas.scene_components import X` keeps working.
from ._scene.base import (  # noqa: F401
  SceneElement,
)
from ._scene.geometry import (  # noqa: F401
  group,
  mesh,
  TriMesh,
  PointCloud,
  p,
  Box,
  Capsule,
  Cone,
  Circle,
  Cylinder,
  Dodecahedron,
  Edges,
  Extrude,
  Icosahedron,
  Lathe,
  Octahedron,
  Plane,
  Polyhedron,
  Ring,
  Shape,
  Sphere,
  Tetrahedron,
  Torus,
  TorusKnot,
  Tube,
  Wireframe,
  Group,
  CoordsMarker,
  Arrow,
  Grid,
  Trail,
  Center,
  Billboard,
  BBox,
  VuerGroup,
  BoundingBox,
  BoundingBoxProvider,
)
from ._scene.splats import (  # noqa: F401
  Splat,
  LumaSplats,
  SparkSplats,
  Pcd,
  VuerSplat,
  DepthPointCloud,
  DepthPointCloudProvider,
  InPlaceDepthPointCloud,
)
from ._scene.media import (  # noqa: F401
  SceneBackground,
  ImageBackground,
  HUDPlane,
  VideoMaterial,
  WebRTCVideoMaterial,
  VideoPlane,
  WebRTCVideoPlane,
  StereoVideoPlane,
  WebRTCStereoVideoPlane,
  Image,
  Html,
  Text,
  Text3D,
  BackgroundColor,
)
from ._scene.lights import (  # noqa: F401
  Fog,
  HemisphereLight,
  HemisphereLightStage,
  RectAreaLight,
  Stage,
  DirectionalLight,
  PointLight,
  SpotLight,
  AmbientLight,
  RandomizedLight,
  AccumulativeShadows,
  AmbientLightStage,
)
from ._scene.controls import (  # noqa: F401
  CameraView,
  Gamepad,
  KeyboardMonitor,
  Pivot,
  Movable,
  Clickable,
  GrabRender,
  ViewportHud,
  TimelineControls,
  PointerControls,
  SceneCamera,
  SceneCameraControl,
  CameraPreviewThumbs,
  CameraPreviewOverlay,
)
from ._scene.xr import (  # noqa: F401
  Hands,
  MotionControllers,
  Body,
  Head,
  WebXRMesh,
)
from ._scene.models import (  # noqa: F401
  ModelNode,
  Obj,
  Fbx,
  Stl,
  Dae,
  Ply,
  Glb,
  Bvh,
)
from ._scene.animation import (  # noqa: F401
  AnimationClip,
  VectorTrack,
  QuaternionTrack,
  ThreeAnimate,
  PlaybackAnimate,
)
from ._scene.root import (  # noqa: F401
  Scene,
  DefaultScene,
)


class Frustum(SceneElement):
  """Camera Frustum

  :param position: An optional tuple of three numbers representing the position.
  :type position: tuple[float, float, float]
  :param rotation: An optional tuple of three numbers representing the rotation.
  :type rotation: tuple[float, float, float]
  :param matrix: An optional tuple of sixteen numbers representing the matrix.
  :type matrix: tuple[float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float]
  :param aspect: An optional number representing the aspect.
  :type aspect: float
  :param focus: An optional number representing the focus.
  :type focus: float
  :param fov: An optional number representing the field of view.
  :type fov: float
  :param near: An optional number representing the near field.
  :type near: float
  :param far: An optional number representing the far field.
  :type far: float
  :param scale: An optional number representing the scale.
  :type scale: float
  :param upScale: An optional number representing the up scale.
  :type upScale: float
  :param focalLength: An optional number representing the focal length.
  :type focalLength: float
  :param showUp: An optional boolean indicating whether to show up.
  :type showUp: bool
  :param showFrustum: An optional boolean indicating whether to show the frustum.
  :type showFrustum: bool
  :param showFocalPlane: An optional boolean indicating whether to show the focal plane.
  :type showFocalPlane: bool
  :param showImagePlane: An optional boolean indicating whether to show the image plane.
  :type showImagePlane: bool
  :param src: An optional string representing the source.
  :type src: str
  :param colorOrigin: An optional ColorRepresentation for the origin color.
  :type colorOrigin: ColorRepresentation
  :param colorFrustum: An optional ColorRepresentation for the frustum color.
  :type colorFrustum: ColorRepresentation
  :param colorCone: An optional ColorRepresentation for the cone color.
  :type colorCone: ColorRepresentation
  :param colorFocalPlane: An optional ColorRepresentation for the focal plane color.
  :type colorFocalPlane: ColorRepresentation
  :param colorUp: An optional ColorRepresentation for the up color.
  :type colorUp: ColorRepresentation
  :param colorTarget: An optional ColorRepresentation for the target color.
  :type colorTarget: ColorRepresentation
  :param colorCross: An optional ColorRepresentation for the cross color.
  :type colorCross: ColorRepresentation
  """

  tag = "Frustum"


class PerspectiveFrustum(SceneElement):
  """
  Frustum visualization for perspective cameras.

  Shows the typical pyramid-shaped frustum with optional up vector indicator.
  Children are inserted inside the frustum group.

  :param position: Position of the frustum in 3D space [x, y, z].
  :type position: tuple[float, float, float], optional
  :param rotation: Rotation of the frustum in Euler angles [x, y, z].
  :type rotation: tuple[float, float, float], optional
  :param fov: Field of view in degrees. Defaults to 50.
  :type fov: float, optional
  :param aspect: Aspect ratio (width/height). Defaults to 4/3.
  :type aspect: float, optional
  :param zoom: Zoom factor. Defaults to 1.
  :type zoom: float, optional
  :param near: Near clipping plane distance. Defaults to 0.1.
  :type near: float, optional
  :param far: Far clipping plane distance. Defaults to 1.0.
  :type far: float, optional
  :param showFrustum: Whether to show the frustum wireframe. Defaults to True.
  :type showFrustum: bool, optional
  :param showUp: Whether to show the up vector indicator. Defaults to True.
  :type showUp: bool, optional
  :param colorFrustum: Color of the frustum wireframe. Defaults to 0xffaa00.
  :type colorFrustum: int, optional
  :param colorCone: Color of the cone indicator. Defaults to 0xff0000.
  :type colorCone: int, optional
  :param colorUp: Color of the up vector indicator. Defaults to 0x00aaff.
  :type colorUp: int, optional
  :param layer: Scene layer for this frustum visualization.
  :type layer: int, optional
  :param children: Child elements rendered inside the frustum group.
  :type children: list, optional
  """

  tag = "PerspectiveFrustum"


class FisheyeFrustum(SceneElement):
  """
  Frustum visualization for fisheye/equidistant cameras.

  Shows a spherical frustum for wide-angle fisheye lenses.
  Children are inserted inside the frustum group.

  :param position: Position of the frustum in 3D space [x, y, z].
  :type position: tuple[float, float, float], optional
  :param rotation: Rotation of the frustum in Euler angles [x, y, z].
  :type rotation: tuple[float, float, float], optional
  :param fov: Field of view in degrees. Defaults to 180.
  :type fov: float, optional
  :param aspect: Aspect ratio (width/height). Defaults to 1.
  :type aspect: float, optional
  :param near: Near clipping plane distance. Defaults to 0.1.
  :type near: float, optional
  :param far: Far clipping plane distance. Defaults to 1.0.
  :type far: float, optional
  :param showFrustum: Whether to show the frustum wireframe. Defaults to True.
  :type showFrustum: bool, optional
  :param showUp: Whether to show the up vector indicator. Defaults to True.
  :type showUp: bool, optional
  :param colorFrustum: Color of the frustum wireframe. Defaults to 0xffaa00.
  :type colorFrustum: int, optional
  :param colorCone: Color of the cone indicator. Defaults to 0xff0000.
  :type colorCone: int, optional
  :param colorUp: Color of the up vector indicator. Defaults to 0x00aaff.
  :type colorUp: int, optional
  :param layer: Scene layer for this frustum visualization.
  :type layer: int, optional
  :param children: Child elements rendered inside the frustum group.
  :type children: list, optional
  """

  tag = "FisheyeFrustum"


class OrthographicFrustum(SceneElement):
  """
  Frustum visualization for orthographic cameras.

  Shows a box-shaped frustum for orthographic projection.
  Children are inserted inside the frustum group.

  :param position: Position of the frustum in 3D space [x, y, z].
  :type position: tuple[float, float, float], optional
  :param rotation: Rotation of the frustum in Euler angles [x, y, z].
  :type rotation: tuple[float, float, float], optional
  :param width: Width of the orthographic view. Defaults to 1.
  :type width: float, optional
  :param height: Height of the orthographic view. Defaults to 1.
  :type height: float, optional
  :param zoom: Zoom factor. Defaults to 1.
  :type zoom: float, optional
  :param near: Near clipping plane distance. Defaults to 0.1.
  :type near: float, optional
  :param far: Far clipping plane distance. Defaults to 1.0.
  :type far: float, optional
  :param showFrustum: Whether to show the frustum wireframe. Defaults to True.
  :type showFrustum: bool, optional
  :param showUp: Whether to show the up vector indicator. Defaults to True.
  :type showUp: bool, optional
  :param colorFrustum: Color of the frustum wireframe. Defaults to 0xffaa00.
  :type colorFrustum: int, optional
  :param colorUp: Color of the up vector indicator. Defaults to 0x00aaff.
  :type colorUp: int, optional
  :param layer: Scene layer for this frustum visualization.
  :type layer: int, optional
  :param children: Child elements rendered inside the frustum group.
  :type children: list, optional
  """

  tag = "OrthographicFrustum"


class CameraHelper(SceneElement):
  tag = "CameraHelper"


class Urdf(ModelNode):
  """
  Loads and displays a robot model from URDF (Unified Robot Description Format) file.

  URDF is the standard format for describing robot kinematics and dynamics.
  This component loads the URDF file and its associated mesh files (STL, DAE, OBJ, etc.)
  to create a 3D visualization of the robot.

  :param src: URL or path to the URDF file
  :type src: str
  :param text: URDF file content as text string (alternative to src)
  :type text: str, optional
  :param assets: Dictionary mapping file paths to blob URLs for mesh assets
  :type assets: dict[str, str], optional
  :param workingPath: Base path for resolving relative paths in URDF
  :type workingPath: str, optional
  :param jointValues: Dictionary of joint names to angles/positions for setting robot pose
  :type jointValues: dict[str, float], optional
  :param parseVisual: Parse visual geometry elements
  :type parseVisual: bool, optional, default True
  :param parseCollision: Parse collision geometry elements
  :type parseCollision: bool, optional, default False
  :param packages: ROS package path resolution (string path or dict mapping)
  :type packages: str | dict[str, str], optional
  :param color: Override color for all meshes
  :type color: str, optional
  :param material: Material properties for robot meshes
  :type material: dict, optional
  :param materialType: Type of material ("physical", "standard", etc.)
  :type materialType: str, optional

  Example Usage::

      from vuer.schemas import Urdf

      # Load URDF from URL
      Urdf(
          src="https://example.com/robot.urdf",
          key="robot1"
      )

      # Load URDF with joint configuration
      Urdf(
          src="/path/to/robot.urdf",
          jointValues={
              "joint1": 0.5,
              "joint2": -0.3,
              "joint3": 1.2,
          },
          key="robot2"
      )

      # Load URDF with custom material
      Urdf(
          src="robot.urdf",
          material=dict(
              roughness=0.01,
              metalness=0.2,
              color="#cccccc"
          ),
          key="robot3"
      )
  """

  tag = "Urdf"


class Gripper(SceneElement):
  """
  Creates a 3D robot gripper visualization with two parallel jaws.

  The gripper is rendered as a cylindrical body with two opposing jaw assemblies
  (left: blue, right: red). Useful for robotics visualization and teleoperation.

  :param color: Base color for the gripper body
  :type color: str, optional
  :param pinchWidth: Half-distance between gripper jaws (default: 0.04)
  :type pinchWidth: float, optional
  :param skeleton: Use skeletal (simplified) gripper model instead
  :type skeleton: bool, optional, default False
  :param axes: Show coordinate axes helper at gripper origin
  :type axes: bool, optional, default False
  :param showOrigin: Show green sphere at gripper origin point
  :type showOrigin: bool, optional, default True
  :param hide: Hide the gripper visualization
  :type hide: bool, optional, default False

  Example Usage::

      from vuer.schemas import Gripper

      # Simple gripper
      Gripper(key="gripper1")

      # Gripper with custom jaw width
      Gripper(pinchWidth=0.06, key="gripper2")

      # Gripper with axes and custom color
      Gripper(
          color="#ff0000",
          axes=True,
          showOrigin=True,
          key="gripper3"
      )
  """

  tag = "Gripper"


class SkeletalGripper(SceneElement):
  """
  Creates a simplified skeletal gripper visualization.

  A lightweight version of the Gripper component with simplified geometry,
  useful for performance-critical applications or when many grippers need
  to be rendered simultaneously.

  :param color: Color for the gripper
  :type color: str, optional
  :param pinchWidth: Half-distance between gripper jaws (default: 0.04)
  :type pinchWidth: float, optional
  :param hide: Hide the gripper visualization
  :type hide: bool, optional, default False

  Example Usage::

      from vuer.schemas import SkeletalGripper

      # Simple skeletal gripper
      SkeletalGripper(key="skel-gripper1")

      # Skeletal gripper with custom width
      SkeletalGripper(pinchWidth=0.05, key="skel-gripper2")
  """

  tag = "SkeletalGripper"
