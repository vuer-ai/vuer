"""Images, video planes, backgrounds, HTML and text."""


from ..html_components import Img
from .base import SceneElement


class SceneBackground(Img, SceneElement):
  """
  Sets the background of the scene to a static image or texture.

  Uses Three.js scene.background property to display an environment image.
  Suitable for static backgrounds like skyboxes or HDRI environments.
  For video backgrounds or high frame rate updates, use ImageBackground instead.

  :param src: URL or path to the background image
  :type src: str
  :param backgroundIntensity: Intensity multiplier for the background (used in path tracing)
  :type backgroundIntensity: float, optional, default -0.5
  :param backgroundBlurriness: Blur amount for the background (0-1)
  :type backgroundBlurriness: float, optional, default 0.0

  Example Usage::

      from vuer.schemas import SceneBackground

      # Simple image background
      SceneBackground(
          src="https://example.com/skybox.jpg",
          key="bg1"
      )

      # HDRI environment with blur
      SceneBackground(
          src="studio.hdr",
          backgroundBlurriness=0.3,
          key="bg2"
      )
  """

  tag = "SceneBackground"


class ImageBackground(Img, SceneElement):
  """
  Sets the background to a dynamically updating image plane.

  Uses a camera-facing plane to display images, supporting high frame rates
  and video streams. The plane always faces the camera to maintain the background effect.

  :param src: URL or path to the background image/video
  :type src: str
  :param distance: Distance from camera to the background plane
  :type distance: float, optional
  :param scale: Scale of the background plane
  :type scale: float, optional

  Example Usage::

      from vuer.schemas import ImageBackground

      # Static image background
      ImageBackground(
          src="background.jpg",
          key="bg1"
      )

      # Video background
      ImageBackground(
          src="background_video.mp4",
          key="bg2"
      )
  """

  tag = "ImageBackground"


class HUDPlane(SceneElement):
  """
  Geometry helper that orients a quad plane to always face the camera.

  This is a geometry-only component that does not handle textures or materials.
  It is used as a base for other components (e.g., VideoPlane, DepthImagePlane)
  that need camera-facing orientation.

  :param distanceToCamera: Distance from camera to the plane
  :type distanceToCamera: float, optional, default 10
  :param aspect: Aspect ratio (width/height) of the plane
  :type aspect: float, optional
  :param height: Height of the plane in world units
  :type height: float, optional
  :param position: Position [x, y, z] offset from camera
  :type position: tuple[float, float, float], optional
  :param rotation: Rotation [x, y, z] in radians
  :type rotation: tuple[float, float, float], optional
  :param fixed: Whether the plane stays fixed in screen space
  :type fixed: bool, optional, default False
  :param layers: Render layer for VR/AR contexts
  :type layers: int, optional

  Example Usage::

      from vuer.schemas import HUDPlane

      # Simple HUD plane geometry
      HUDPlane(
          distanceToCamera=5,
          height=1,
          key="hud1"
      )
  """

  tag = "HUDPlane"


class VideoMaterial(Img, SceneElement):
  """
  Material for displaying video from a URL.

  Loads video from a file or URL and creates a material that can be
  applied to meshes. The video plays automatically when loaded.

  :param src: URL or path to the video file
  :type src: str
  :param loop: Whether to loop the video
  :type loop: bool, optional, default True
  :param autoplay: Start playing automatically
  :type autoplay: bool, optional, default True

  Example Usage::

      from vuer.schemas import VideoMaterial

      VideoMaterial(
          src="video.mp4",
          loop=True,
          key="video-mat"
      )
  """

  tag = "VideoMaterial"


class WebRTCVideoMaterial(Img, SceneElement):
  """
  Material for displaying real-time video from WebRTC media stream.

  Creates a material that displays live video from a WebRTC connection,
  useful for video conferencing, camera feeds, or screen sharing.

  :param stream: WebRTC media stream ID or configuration
  :type stream: str | dict

  Example Usage::

      from vuer.schemas import WebRTCVideoMaterial

      WebRTCVideoMaterial(
          stream="camera-stream",
          key="webrtc-mat"
      )
  """

  tag = "WebRTCVideoMaterial"


class VideoPlane(Img, SceneElement):
  """
  Plane for displaying video content that faces the camera.

  Combines HUDPlane behavior with video playback. The plane automatically
  faces the camera and displays video from a file or URL.

  :param src: URL or path to the video file
  :type src: str
  :param distanceToCamera: Distance from camera to the video plane
  :type distanceToCamera: float, optional, default 10
  :param height: Height of the video plane
  :type height: float, optional
  :param loop: Whether to loop the video
  :type loop: bool, optional, default True
  :param autoplay: Start playing automatically
  :type autoplay: bool, optional, default True

  Example Usage::

      from vuer.schemas import VideoPlane

      VideoPlane(
          src="video.mp4",
          distanceToCamera=5,
          height=2,
          key="video1"
      )
  """

  tag = "VideoPlane"


class WebRTCVideoPlane(SceneElement):
  """
  Plane for displaying WebRTC video stream that faces the camera.

  Displays real-time video from WebRTC on a camera-facing plane.
  Ideal for video calls, live camera feeds, or screen sharing.

  :param stream: WebRTC media stream ID or configuration
  :type stream: str | dict
  :param distanceToCamera: Distance from camera to the plane
  :type distanceToCamera: float, optional, default 10
  :param height: Height of the video plane
  :type height: float, optional

  Example Usage::

      from vuer.schemas import WebRTCVideoPlane

      WebRTCVideoPlane(
          stream="camera-feed",
          distanceToCamera=3,
          height=1.5,
          key="webrtc-video"
      )
  """

  tag = "WebRTCVideoPlane"


class StereoVideoPlane(Img, SceneElement):
  """
  Plane for displaying stereoscopic (3D) video content.

  Displays side-by-side or top-bottom stereoscopic video for VR applications.
  Each eye sees the appropriate half of the video for 3D effect.

  :param src: URL or path to the stereoscopic video file
  :type src: str
  :param distanceToCamera: Distance from camera to the plane
  :type distanceToCamera: float, optional, default 10
  :param height: Height of the video plane
  :type height: float, optional
  :param layout: Stereo layout ("side-by-side" or "top-bottom")
  :type layout: str, optional, default "side-by-side"

  Example Usage::

      from vuer.schemas import StereoVideoPlane

      StereoVideoPlane(
          src="stereo_video.mp4",
          layout="side-by-side",
          key="stereo-video"
      )
  """

  tag = "StereoVideoPlane"


class WebRTCStereoVideoPlane(SceneElement):
  """
  Plane for displaying stereoscopic WebRTC video stream.

  Combines WebRTC streaming with stereoscopic video display for
  real-time 3D video in VR applications.

  :param stream: WebRTC media stream ID or configuration
  :type stream: str | dict
  :param distanceToCamera: Distance from camera to the plane
  :type distanceToCamera: float, optional, default 10
  :param height: Height of the video plane
  :type height: float, optional
  :param layout: Stereo layout ("side-by-side" or "top-bottom")
  :type layout: str, optional, default "side-by-side"

  Example Usage::

      from vuer.schemas import WebRTCStereoVideoPlane

      WebRTCStereoVideoPlane(
          stream="stereo-camera",
          layout="side-by-side",
          key="webrtc-stereo"
      )
  """

  tag = "WebRTCStereoVideoPlane"


class Image(Img, SceneElement):
  """
  Displays a static image on a plane in 3D space.

  Creates a textured plane for displaying images at specific positions and orientations
  in the 3D scene. Unlike ImageBackground, this plane has a fixed position in world space.

  :param src: URL or path to the image file
  :type src: str
  :param position: Position [x, y, z] of the image plane
  :type position: tuple[float, float, float], optional
  :param rotation: Rotation [x, y, z] in radians
  :type rotation: tuple[float, float, float], optional
  :param scale: Scale of the image plane
  :type scale: float | tuple[float, float, float], optional
  :param opacity: Transparency of the image (0-1)
  :type opacity: float, optional, default 1.0

  Example Usage::

      from vuer.schemas import ImagePlane

      # Simple image plane
      Image(
          src="image.png",
          position=[0, 1, -2],
          key="img1"
      )

      # Rotated and scaled image
      Image(
          src="poster.jpg",
          position=[2, 1.5, -1],
          rotation=[0, 0.5, 0],
          scale=2,
          key="img2"
      )
  """

  tag = "Image"

  def __post_init__(self, src=None, _width=None, _height=None, **kwargs):
    if src is not None:
      self.rgb = src
      del self.src

    # todo: current abstraction does not allow width overwrite. Need restructure
    #   in the next iteration. This might require taking the width/height out of
    #   the parent class.
    if _width is not None and _height is not None:
      if not hasattr(self, "aspect") or self.aspect is None:
        self.aspect = _width / _height

      if not hasattr(self, "height") or self.height is None:
        self.height = _height * 0.001


class Html(SceneElement):
  """
  Usage::

      as='div' // Wrapping element (default: 'div')
      wrapperClass // The className of the wrapping element (default: undefined)
      prepend // Project content behind the canvas (default: false)
      center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
      fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
      distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
      zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])
      portal={domnodeRef} // Reference to target container (default=undefined)
      transform // If true, applies matrix3d transformations (default=false)
      sprite // Renders as sprite, but only in transform mode (default=false)
      calculatePosition={(el: Object3D, camera: Camera, size: { width: number; height: number }) => number[]} // Override default positioning function. (default=undefined) [ignored in transform mode]
      occlude={[ref]} // Can be true or a Ref<Object3D>[], true occludes the entire scene (default: undefined)
      onOcclude={(visible) => null} // Callback when the visibility changes (default: undefined)
      {...groupProps} // All THREE.Group props are valid
      {...divProps} // All HTMLDivElement props are valid

  """

  tag = "Html"


class Text(SceneElement):
  """
  Renders 2D text in the scene with extensive styling and layout options.

  :param children: The text content to render.
  :type children: str
  :param characters: Restrict the set of characters to use for glyph generation.
  :type characters: str, optional
  :param color: Text color.
  :type color: str, optional
  :param fontSize: Font size in world units.
  :type fontSize: float, optional
  :param fontWeight: Font weight (number or string, e.g. 'bold').
  :type fontWeight: int or str, optional
  :param fontStyle: Font style, either 'italic' or 'normal'.
  :type fontStyle: str, optional
  :param maxWidth: Maximum width of the text block before wrapping.
  :type maxWidth: float, optional
  :param lineHeight: Line height as a multiple of fontSize.
  :type lineHeight: float, optional
  :param letterSpacing: Additional spacing between letters.
  :type letterSpacing: float, optional
  :param textAlign: Text alignment: 'left', 'right', 'center', or 'justify'.
  :type textAlign: str, optional
  :param font: Font URL or name.
  :type font: str, optional
  :param anchorX: Horizontal anchor: number or 'left', 'center', 'right'.
  :type anchorX: float or str, optional
  :param anchorY: Vertical anchor: number or 'top', 'top-baseline', 'middle', 'bottom-baseline', 'bottom'.
  :type anchorY: float or str, optional
  :param clipRect: Rectangle [minX, minY, maxX, maxY] to clip text rendering.
  :type clipRect: list[float], optional
  :param depthOffset: Offset in Z to avoid z-fighting.
  :type depthOffset: float, optional
  :param direction: Text direction: 'auto', 'ltr', or 'rtl'.
  :type direction: str, optional
  :param overflowWrap: Wrapping behavior: 'normal' or 'break-word'.
  :type overflowWrap: str, optional
  :param whiteSpace: White space handling: 'normal', 'overflowWrap', or 'nowrap'.
  :type whiteSpace: str, optional
  :param outlineWidth: Outline width (number or string, e.g. '2px').
  :type outlineWidth: float or str, optional
  :param outlineOffsetX: Outline X offset (number or string).
  :type outlineOffsetX: float or str, optional
  :param outlineOffsetY: Outline Y offset (number or string).
  :type outlineOffsetY: float or str, optional
  :param outlineBlur: Outline blur radius (number or string).
  :type outlineBlur: float or str, optional
  :param outlineColor: Outline color.
  :type outlineColor: str, optional
  :param outlineOpacity: Outline opacity (0-1).
  :type outlineOpacity: float, optional
  :param strokeWidth: Stroke width (number or string).
  :type strokeWidth: float or str, optional
  :param strokeColor: Stroke color.
  :type strokeColor: str, optional
  :param strokeOpacity: Stroke opacity (0-1).
  :type strokeOpacity: float, optional
  :param fillOpacity: Fill opacity (0-1).
  :type fillOpacity: float, optional
  :param sdfGlyphSize: SDF glyph size for rendering quality.
  :type sdfGlyphSize: int, optional
  :param debugSDF: Show SDF debug overlay.
  :type debugSDF: bool, optional
  :param glyphGeometryDetail: Level of detail for glyph geometry.
  :type glyphGeometryDetail: int, optional
  """

  tag = "Text"


class Text3D(SceneElement):
  """Renders 3D text using ThreeJS's TextGeometry.

  Text3D will suspend while loading the font data. It requires fonts in JSON format
  generated through typeface.json, either as a path to a JSON file or a JSON object.
  If you face display issues try checking "Reverse font direction" in the typeface tool.

  :param font: Font URL or JSON object with font data
  :type font: str
  :param smooth: Merges vertices with a tolerance and calls computeVertexNormals
  :type smooth: float
  :param lineHeight: Line height in threejs units (default: 0)
  :type lineHeight: float
  :param letterSpacing: Letter spacing factor (default: 1)
  :type letterSpacing: float

  You can align the text using the Center component:

  .. code-block:: python

      Center(
          Text3D(
              "Hello world!",
              font="fonts/helvetiker.json",
              smooth=1,
              lineHeight=0.5,
              letterSpacing=-0.025
          )
      )
  """

  tag = "Text3D"

  def __init__(
    self, *text, font=None, smooth=None, lineHeight=0, letterSpacing=1, **kwargs
  ):
    super().__init__(
      *text,
      font=font,
      smooth=smooth,
      lineHeight=lineHeight,
      letterSpacing=letterSpacing,
      **kwargs,
    )


class BackgroundColor(SceneElement):
  """
  Sets a solid color background for the scene.

  Changes the scene background to a uniform color. This is the simplest
  way to set a background and has minimal performance impact.

  :param color: Hex color string for the background
  :type color: str, optional, default "#131416"

  Example Usage::

      from vuer.schemas import BackgroundColor

      # Dark background
      BackgroundColor(color="#131416", key="bg")

      # White background
      BackgroundColor(color="#ffffff", key="bg")

      # Custom color
      BackgroundColor(color="#4A90E2", key="bg")
  """

  tag = "BackgroundColor"

  def __init__(self, color="#131416", **kwargs):
    super().__init__(color=color, **kwargs)
