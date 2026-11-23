"""Cameras, input devices, interaction and viewport controls."""


from .base import SceneElement


class CameraView(SceneElement):
  """CameraView for rendering from arbitrary camera poses.

  :param fov: The vertical field of view of the camera. Defaults to 50.
  :type fov: float, optional
  :param width: The width of the camera image. Defaults to 320.
  :type width: int, optional
  :param height: The height of the camera image. Defaults to 240.
  :type height: int, optional
  :param key: The key of the camera view. Defaults to "ego".
  :type key: str, optional
  :param position: The position of the camera. Defaults to [0, 0, 0].
  :type position: List[float], optional
  :param rotation: The rotation of the camera. Defaults to [0, 0, 0]
  :type rotation: List[float], optional
  :param stream: The stream of the camera. Defaults to "ondemand".
  :type stream: str, optional
  :param fps: The frames per second of the camera. Defaults to 30.
  :type fps: int, optional
  :param near: The near field of the camera. Defaults to 0.1.
  :type near: float, optional
  :param far: The far field of the camera. Defaults to 20.
  :type far: float, optional
  :param renderDepth: Whether to render depth. If set, returns value["depthFrame"]. Defaults to True.
  :type renderDepth: bool, optional
  :param showFrustum: Whether to show the frustum. Defaults to True.
  :type showFrustum: bool, optional
  :param downsample: The downsample rate. Defaults to 1.
  :type downsample: int, optional
  :param distanceToCamera: The distance to the camera. Defaults to 2.
  :type distanceToCamera: float, optional
  """

  tag = "CameraView"


class Gamepad(SceneElement):
  """
  Gamepad input controller component.

  Captures standard gamepad (e.g., Xbox, PlayStation controllers) input
  and sends it via websocket to the Python backend.

  :param index: Gamepad index to monitor (for multiple connected gamepads)
  :type index: int, optional, default 0
  """

  tag = "Gamepad"


class KeyboardMonitor(SceneElement):
  """
  Monitors keyboard events in the browser and sends them to Python backend.

  The KeyboardMonitor component listens for keyboard events (keydown, keyup, keypress)
  and transmits event details including key codes, modifier states, and repeat information
  through the WebSocket connection.

  :param enableKeyDown: Enable monitoring of keydown events
  :type enableKeyDown: bool, optional, default False
  :param enableKeyUp: Enable monitoring of keyup events
  :type enableKeyUp: bool, optional, default False
  :param enableKeyPress: Enable monitoring of keypress events
  :type enableKeyPress: bool, optional, default False

  Event payload includes:

  - **key**: Character value of the key pressed
  - **code**: Physical key code (e.g., 'KeyA', 'Space', 'ArrowUp')
  - **shiftKey**, **ctrlKey**, **altKey**, **metaKey**: Modifier key states
  - **repeat**: Whether key is being held down
  - **isComposing**: Whether key is part of a composition session

  Example Usage::

      @app.spawn(start=True)
      async def main(session):
          session.set @ Scene(
              KeyboardMonitor(
                  enableKeyDown=True,
                  enableKeyUp=True,
                  key="keyboard-monitor"
              )
          )

          # Handle keyboard events
          async for event in session.listen():
              if event.etype in ["KeyDown", "KeyUp"]:
                  print(f"Key: {event.value['key']}, Code: {event.value['code']}")
                  print(f"Modifiers: Shift={event.value['shiftKey']}, "
                        f"Ctrl={event.value['ctrlKey']}, "
                        f"Alt={event.value['altKey']}")
  """

  tag = "KeyboardMonitor"


class Pivot(SceneElement):
  """
  Creates a pivot point for rotation and transformation.

  A Pivot acts as a transformation anchor, allowing objects to rotate
  around a specific point rather than their own center. Useful for
  mechanical joints, doors, or any object that rotates around an axis.

  :param position: Position [x, y, z] of the pivot point
  :type position: tuple[float, float, float], optional
  :param rotation: Initial rotation [x, y, z] in radians
  :type rotation: tuple[float, float, float], optional
  :param children: Child elements that rotate around this pivot
  :type children: list, optional

  Example Usage::

      from vuer.schemas import Pivot, Box

      # Door rotating around left edge
      Pivot(
          Box(position=[0.5, 0, 0], args=(1, 2, 0.1), key="door"),
          position=[-2, 0, 0],
          rotation=[0, 1.57, 0],  # 90 degrees open
          key="door-pivot"
      )
  """

  tag = "Pivot"


class Movable(SceneElement):
  """A universal component that can be grabbed and moved using pointers, hands, controllers.

  :param offset: Optional [x, y, z] offset from the position. Defaults to [0, 0, 0].
  :param position: Optional [x, y, z] position. Defaults to [0, 1, -1].
  :param quaternion: Optional [x, y, z, w] quaternion rotation.
  :param rotation: Optional [x, y, z] euler rotation.
  :param scale: Optional float or [x, y, z] scale factor. Defaults to 0.1.
  :param handle: Optional float or [x, y, z] handle size. Overrides scale for the handle geometry.
  :param showFrame: Optional boolean to show coordinate frame. Defaults to True.
  :param wireframe: Optional boolean for wireframe rendering. Defaults to False.
  :param localRotation: Optional boolean to use local rotation. Defaults to False.

  The component can be grabbed using:
  - Hand pinch gestures (left/right hand)
  - Controller trigger buttons (left/right controller)

  When grabbed, the component follows the hand/controller movement and rotation.
  A coordinate frame can be displayed to visualize the current transformation.

  The component supports both AR and VR modes through the WebXR versions of these components.
  """

  tag = "Movable"
  localRotation: bool = False


class Clickable(SceneElement):
  """A component wrapper that makes its children clickable and detects pointer interactions.

  Listen to click events using the event handler system to respond to user interactions.
  """

  tag = "Clickable"


class GrabRender(SceneElement):
  """
  Captures the current rendered frame from the canvas.

  A singleton component that grabs the current frame buffer and sends it
  to the Python backend. Useful for capturing screenshots or implementing
  custom rendering pipelines.

  This component is a singleton and should only be instantiated once per scene.
  The key is automatically set to "DEFAULT".

  Example Usage::

      from vuer.schemas import GrabRender

      # Add to scene to enable frame capture
      GrabRender()
  """

  tag = "GrabRender"
  key = "DEFAULT"


class ViewportHud(SceneElement):
  """A HUD (Heads-Up Display) component that renders to a specific viewport region.

  Creates an isolated render scene within a rectangular region of the canvas,
  using CSS-like positioning (top, right, bottom, left). Useful for mini-maps,
  picture-in-picture views, auxiliary camera feeds, or UI overlays.

  The viewport uses a separate scene and camera, so children are rendered
  independently of the main scene. You must include a camera (SimplePerspectiveCamera
  or SimpleOrthographicCamera) as a child with makeDefault=True.

  **Positioning:**

  Position values can be numbers (pixels) or strings with '%' (percentage).
  Use top/left for top-left anchoring, or bottom/right for other corners.

  :param top: Distance from top edge (pixels or percentage string like '10%')
  :type top: int | str, optional
  :param right: Distance from right edge (pixels or percentage string like '10%')
  :type right: int | str, optional
  :param bottom: Distance from bottom edge (pixels or percentage string like '10%')
  :type bottom: int | str, optional
  :param left: Distance from left edge (pixels or percentage string like '10%')
  :type left: int | str, optional
  :param width: Width of the viewport (pixels or percentage). Required.
  :type width: int | str
  :param height: Height of the viewport (pixels or percentage). Required.
  :type height: int | str
  :param renderPriority: Render priority (1-10). Default: 1
  :type renderPriority: int, optional

  Example Usage::

      from vuer.schemas import ViewportHud, SimplePerspectiveCamera, Box

      # Mini-map in top-right corner (pixel positioning)
      ViewportHud(
          SimplePerspectiveCamera(position=[0, 10, 0], rotation=[-1.57, 0, 0], makeDefault=True),
          Box(args=[1, 1, 1], materialColor="red"),
          top=10,
          right=10,
          width=200,
          height=150,
          key="minimap"
      )

      # Picture-in-picture with percentage positioning
      ViewportHud(
          SimplePerspectiveCamera(position=[5, 5, 5], makeDefault=True),
          Box(args=[1, 1, 1], materialColor="blue"),
          bottom="5%",
          left="5%",
          width="20%",
          height="25%",
          key="pip"
      )
  """

  tag = "ViewportHud"


class TimelineControls(SceneElement):
  tag = "TimelineControls"


class PointerControls(SceneElement):
  """
  Enables pointer-based interaction with scene objects.

  Provides mouse/touch pointer controls for selecting and interacting
  with objects in the scene. Works with Clickable and Movable components.

  Example Usage::

      from vuer.schemas import PointerControls

      PointerControls(key="pointer-controls")
  """

  tag = "PointerControls"


class SceneCamera(SceneElement):
  """Camera component for setting scene camera properties.

  :param position: Camera position
  :type position: tuple[float, float, float], optional
  :param lookAt: Point to look at
  :type lookAt: tuple[float, float, float], optional
  :param fov: Field of view in degrees
  :type fov: float, optional
  :param near: Near clipping plane
  :type near: float, optional
  :param far: Far clipping plane
  :type far: float, optional
  :param cx: Principal point horizontal offset (0 = centered, range [-1, 1]). Default: 0
  :type cx: float, optional
  :param cy: Principal point vertical offset (0 = centered, range [-1, 1]). Default: 0
  :type cy: float, optional
  """

  tag = "SceneCamera"


class SceneCameraControl(SceneElement):
  """Advanced camera control component.

  Provides fine-grained control over camera movement and rotation speeds.

  :param moveSpeed: Speed of camera movement
  :type moveSpeed: float, optional
  :param keyboardRotateSpeed: Speed of keyboard rotation
  :type keyboardRotateSpeed: float, optional
  :param mouseRotateSpeed: Speed of mouse rotation
  :type mouseRotateSpeed: float, optional
  :param dollySpeed: Speed of dolly motion
  :type dollySpeed: float, optional
  :param truckSpeed: Speed of truck motion
  :type truckSpeed: float, optional
  """

  tag = "SceneCameraControl"


class CameraPreviewThumbs(SceneElement):
  """Camera preview thumbnails component.

  Displays thumbnail previews of multiple camera views.

  :param previewHeight: Height of preview thumbnails in pixels
  :type previewHeight: int, optional
  :param gap: Gap between thumbnails in pixels
  :type gap: int, optional
  :param margin: Margin around thumbnails in pixels
  :type margin: int, optional
  :param showLabels: Show camera labels
  :type showLabels: bool, optional
  """

  tag = "CameraPreviewThumbs"


class CameraPreviewOverlay(SceneElement):
  """Camera preview overlay component.

  Overlays camera preview information on the scene.

  :param margin: Margin from edge
  :type margin: float, optional
  :param showLabel: Show camera label
  :type showLabel: bool, optional
  :param showCornerBrackets: Show corner brackets
  :type showCornerBrackets: bool, optional
  :param showCenterFocus: Show center focus indicator
  :type showCenterFocus: bool, optional
  :param cornerBracketColor: Color of corner brackets
  :type cornerBracketColor: str, optional
  :param centerFocusColor: Color of center focus
  :type centerFocusColor: str, optional
  """

  tag = "CameraPreviewOverlay"
