"""Lights, stages, shadows and fog."""


from .base import SceneElement


class Fog(SceneElement):
  """
  Fog is a scene element that adds fog to the scene. This
  can be used to approximate depth.

  Args:
      color: The color of the fog.
      near: The distance to the near plane.
      far: The distance to the far plane.

  Example Usage:

      Fog(color="green", near=3, far=7)
  """

  tag = "fog"
  attach = "fog"
  key = "fog"

  def __post_init__(self, *, children=None, **kwargs):
    assert children is None, "Fog does not support children."


class HemisphereLight(SceneElement):
  """
  Creates a hemisphere light that simulates ambient outdoor lighting.

  Hemisphere lights emit light from directly above and below, with different
  colors for sky and ground. This creates more realistic outdoor lighting than
  ambient light alone.

  :param skyColor: Color of light from above
  :type skyColor: str, optional, default "#ffffff"
  :param groundColor: Color of light from below
  :type groundColor: str, optional, default "#ffffff"
  :param intensity: Light intensity
  :type intensity: float, optional, default 1.0
  :param helper: Show visual helper for debugging
  :type helper: bool, optional, default False
  :param hide: Hide the light
  :type hide: bool, optional, default False

  Example Usage::

      from vuer.schemas import HemisphereLight

      # Basic hemisphere light
      HemisphereLight(key="hemi1")

      # Outdoor-style lighting (blue sky, brown ground)
      HemisphereLight(
          skyColor="#87CEEB",
          groundColor="#8B4513",
          intensity=0.6,
          key="hemi2"
      )
  """

  tag = "HemisphereLight"


class HemisphereLightStage(SceneElement):
  """
  Composite lighting component that provides a complete default lighting setup.

  In the default rendering mode, this component creates:
  - A HemisphereLight for ambient outdoor-style lighting
  - A DirectionalLight for shadows and directional illumination

  In pathtracer mode, it uses:
  - An AmbientLight
  - Area and spot lights optimized for path-traced rendering

  This matches the frontend's HemisphereLightStage component and provides
  consistent lighting across Python and frontend scene definitions.
  """

  tag = "HemisphereLightStage"


class RectAreaLight(SceneElement):
  """
  Creates a rectangular area light source.

  Area lights emit light from a rectangular surface, producing soft, realistic
  shadows. Ideal for simulating windows, light panels, or studio lighting.

  :param color: Color of the light
  :type color: str, optional, default "#ffffff"
  :param intensity: Light intensity
  :type intensity: float, optional, default 1.0
  :param width: Width of the light panel
  :type width: float, optional, default 1.0
  :param height: Height of the light panel
  :type height: float, optional, default 1.0
  :param lookAt: Target position [x, y, z] for the light to face
  :type lookAt: tuple[float, float, float], optional, default [0, 0, 0]
  :param helper: Show visual helper for debugging
  :type helper: bool, optional, default False
  :param hide: Hide the light
  :type hide: bool, optional, default False

  Example Usage::

      from vuer.schemas import RectAreaLight

      # Simple area light
      RectAreaLight(
          position=[0, 2, 0],
          key="area1"
      )

      # Large soft light panel
      RectAreaLight(
          width=4,
          height=2,
          intensity=2,
          position=[0, 3, -2],
          lookAt=[0, 0, 0],
          key="area2"
      )
  """

  tag = "RectAreaLight"


class Stage(SceneElement):
  """
  Creates a pre-configured lighting stage setup.

  Provides automatic three-point lighting (key, fill, rim) commonly used
  in studio and product visualization. Simplifies lighting setup for common scenarios.

  Example Usage::

      from vuer.schemas import Stage

      Stage(key="stage1")
  """

  tag = "Stage"


class DirectionalLight(SceneElement):
  """
  Creates a directional light that simulates sunlight.

  Directional lights emit parallel rays from an infinite distance, like sunlight.
  The position determines the direction of the light rays.

  :param color: Color of the light
  :type color: str, optional, default "#ffffff"
  :param intensity: Light intensity
  :type intensity: float, optional, default 0.5
  :param helper: Show visual helper for debugging
  :type helper: bool, optional, default False
  :param hide: Hide the light
  :type hide: bool, optional, default False

  Example Usage::

      from vuer.schemas import DirectionalLight

      # Simple sun-like light
      DirectionalLight(
          position=[5, 5, 5],
          intensity=1.0,
          key="sun"
      )

      # Warm sunset lighting
      DirectionalLight(
          position=[10, 3, 0],
          color="#FFA500",
          intensity=0.8,
          key="sunset"
      )
  """

  tag = "DirectionalLight"


class PointLight(SceneElement):
  """
  Creates a point light that emits in all directions from a point.

  Point lights simulate light bulbs or other omnidirectional light sources.
  Light intensity decreases with distance.

  :param color: Color of the light
  :type color: str, optional, default "#ffffff"
  :param intensity: Light intensity
  :type intensity: float, optional, default 20
  :param radius: Visual radius of the light sphere (if showSphere is True)
  :type radius: float, optional, default 0.1
  :param showSphere: Show sphere visualization at light position
  :type showSphere: bool, optional, default False
  :param helper: Show visual helper for debugging
  :type helper: bool, optional, default False
  :param hide: Hide the light
  :type hide: bool, optional, default False

  Example Usage::

      from vuer.schemas import PointLight

      # Simple point light
      PointLight(
          position=[0, 2, 0],
          key="bulb1"
      )

      # Colored light with sphere visualization
      PointLight(
          position=[1, 1, 1],
          color="#ff0000",
          intensity=30,
          showSphere=True,
          key="bulb2"
      )
  """

  tag = "PointLight"


class SpotLight(SceneElement):
  """
  Creates a spotlight that emits light in a cone.

  Spotlights are useful for focused lighting effects, stage lighting,
  or flashlight simulations.

  :param color: Color of the light
  :type color: str, optional, default "#ffffff"
  :param intensity: Light intensity
  :type intensity: float, optional, default 0.5
  :param distance: Maximum range of the light (0 = infinite)
  :type distance: float, optional, default 0
  :param angle: Maximum cone angle in radians (max: π/2)
  :type angle: float, optional, default π/3
  :param penumbra: Softness of the cone edge (0-1)
  :type penumbra: float, optional, default 0
  :param decay: Light falloff rate with distance
  :type decay: float, optional, default 2
  :param helper: Show visual helper for debugging
  :type helper: bool, optional, default False
  :param hide: Hide the light
  :type hide: bool, optional, default False

  Example Usage::

      from vuer.schemas import SpotLight
      import math

      # Simple spotlight
      SpotLight(
          position=[0, 3, 0],
          key="spot1"
      )

      # Focused spotlight with soft edges
      SpotLight(
          position=[2, 4, 2],
          angle=math.pi / 6,  # 30 degrees
          penumbra=0.5,
          intensity=1.5,
          key="spot2"
      )
  """

  tag = "SpotLight"


class AmbientLight(SceneElement):
  """
  Creates uniform ambient lighting from all directions.

  Ambient lights illuminate all objects equally without shadows or directionality.
  Use sparingly as too much ambient light can make scenes look flat.

  :param color: Color of the light
  :type color: str, optional, default "#ffffff"
  :param intensity: Light intensity
  :type intensity: float, optional, default 0.5
  :param hide: Hide the light
  :type hide: bool, optional, default False

  Example Usage::

      from vuer.schemas import AmbientLight

      # Subtle ambient fill light
      AmbientLight(
          intensity=0.3,
          key="ambient1"
      )

      # Warm ambient lighting
      AmbientLight(
          color="#FFF5E1",
          intensity=0.4,
          key="ambient2"
      )
  """

  tag = "AmbientLight"


class RandomizedLight(SceneElement):
  """A randomized light that internally runs multiple lights and jiggles them.

  This component is typically paired with AccumulativeShadows for realistic soft shadows.
  When used with AccumulativeShadows, it automatically inherits the number of frames
  from the parent component.

  :param frames: How many frames to jiggle the lights. Defaults to 1. If used with
                AccumulativeShadows, frames will be inherited from there.
  :type frames: int
  :param position: Light position [x, y, z]. Defaults to [0, 0, 0].
  :type position: List[float]
  :param radius: Radius of the jiggle - higher values create softer light. Defaults to 5.
  :type radius: float
  :param amount: Number of lights to use. Defaults to 8.
  :type amount: int
  :param intensity: Light intensity. Defaults to 1.
  :type intensity: float
  :param ambient: Ambient occlusion factor - lower values mean less AO. Can be mixed with directional light. Defaults to 0.5.
  :type ambient: float
  :param castShadow: Whether lights cast shadows. Defaults to True.
  :type castShadow: bool
  :param bias: Shadow bias value. Defaults to 0.
  :type bias: float
  :param mapSize: Shadow map size. Defaults to 512.
  :type mapSize: int
  :param size: Size of the shadow camera. Defaults to 10.
  :type size: float
  :param near: Shadow camera near plane. Defaults to 0.5.
  :type near: float
  :param far: Shadow camera far plane. Defaults to 500.
  :type far: float

  Example Usage::

      RandomizedLight(
          frames=40,
          position=[5, 5, -10],
          radius=8,
          amount=8,
          intensity=1,
          ambient=0.5,
          castShadow=True
      )
  """

  tag = "RandomizedLight"


class AccumulativeShadows(SceneElement):
  """A planar, Y-up oriented shadow-catcher that accumulates soft shadows with zero performance impact after accumulation.

  The shadow-catcher can operate in temporal mode (accumulating over time) or instantaneous mode. It must be paired with
  light sources and scene objects that cast shadows as children. Works best with RandomizedLight components for realistic
  raycast-like shadows and ambient occlusion.

  :param frames: Number of frames to render. More frames yield cleaner results but take longer. Defaults to 40.
  :type frames: int
  :param blend: Controls the refresh ratio when frames=Infinity. Defaults to 100.
  :type blend: int
  :param limit: Limits rendered frames when frames=Infinity to regain performance once scene settles. Defaults to Infinity.
  :type limit: int
  :param scale: Scale of the shadow plane. No default.
  :type scale: float
  :param temporal: Whether to accumulate shadows over time (more performant but has visual regression). Defaults to False.
  :type temporal: bool
  :param opacity: Opacity of the shadow plane. Defaults to 1.
  :type opacity: float
  :param alphaTest: Threshold for discarding alpha pixels. Defaults to 0.65.
  :type alphaTest: float
  :param color: Shadow color. Defaults to black.
  :type color: str
  :param colorBlend: How much colors turn to black (0 is black). Defaults to 2.
  :type colorBlend: float
  :param resolution: Buffer resolution. Defaults to 1024.
  :type resolution: int

  Example Usage::

      AccumulativeShadows(
          temporal=True,
          frames=100,
          scale=10,
          children=[
              RandomizedLight(amount=8, position=[5, 5, -10])
          ]
      )
  """

  tag = "AccumulativeShadows"


class AmbientLightStage(SceneElement):
  """Ambient light stage component.

  :param something: Configuration flag
  :type something: bool, optional
  """

  tag = "AmbientLightStage"
