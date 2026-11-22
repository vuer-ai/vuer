"""WebXR hands, controllers, body tracking and meshes."""


from .base import SceneElement


class Hands(SceneElement):
  """

  .. admonition:: tip Setting stream to True

      Important: You need to set the `stream` option to `True` to
      start streaming the hand movement.


  The Hand component offers a way to stream the current pose of the hand to the server.
  You can get the full pose of the hands by listening to the `HAND_MOVE` event.
  You can add flags `left` and `right` to specify which hand you want to track.
  The returned data looks like the following:

  .. code-block:: typescript

      /**
       * Left and right pose are relative to the wrist transformations.
       */
      export type HandsData = {
        left?: Float32Array;       // 25 * 16 values.
        right?: Float32Array;      // 25 * 16 values.
        leftState: HandState;
        rightState: HandState;
      };

      export type HandState = {
        pinch: boolean;
        squeeze: boolean;
        tap: boolean;

        pinchValue: number;
        squeezeValue: number;
        tapValue: number;
      }

  **Matrix format**

  All 4x4 transform matrices used in WebGL are stored in 16-element `Float32Arrays`.
  The values are stored in the array in column-major order; that is, each column is
  written into the array top-down before moving to the next column to the right and
  writing it into the array. Therefore, for the array [a0, a1, a2, …, a13, a14, a15],
  the matrix looks like this:

  .. code-block::
                                    ⌈  a0 a4 a8 a12  ⌉
                                    |  a1 a5 a9 a13  |
                                    |  a2 a6 a10 a14 |
                                    ⌊  a3 a7 a11 a15 ⌋


  For details, refer to the MDN documentation on [XR Rigid Body Transformation](https://developer.mozilla.org/en-US/docs/Web/API/XRRigidTransform/matrix)

  **Hand Landmarks**

  We follow the [XR Hand](https://developer.mozilla.org/en-US/docs/Web/API/XRHand)
  conventions, and return the landmarks in a single array of `25 * 16` values in
  the following order:

  .. list-table::
     :widths: 40 10 40 10
     :header-rows: 1

     * - Hand joint
       - Index
       - Hand joint (continue)
       - Index
     * - wrist
       - 0
       - middle-finger-phalanx-distal
       - 13
     * - thumb-metacarpal
       - 1
       - middle-finger-tip
       - 14
     * - thumb-phalanx-proximal
       - 2
       - ring-finger-metacarpal
       - 15
     * - thumb-phalanx-distal
       - 3
       - ring-finger-phalanx-proximal
       - 16
     * - thumb-tip
       - 4
       - ring-finger-phalanx-intermediate
       - 17
     * - index-finger-metacarpal
       - 5
       - ring-finger-phalanx-distal
       - 18
     * - index-finger-phalanx-proximal
       - 6
       - ring-finger-tip
       - 19
     * - index-finger-phalanx-intermediate
       - 7
       - pinky-finger-metacarpal
       - 20
     * - index-finger-phalanx-distal
       - 8
       - pinky-finger-phalanx-proximal
       - 21
     * - index-finger-tip
       - 9
       - pinky-finger-phalanx-intermediate
       - 22
     * - middle-finger-metacarpal
       - 10
       - pinky-finger-phalanx-distal
       - 23
     * - middle-finger-phalanx-proximal
       - 11
       - pinky-finger-tip
       - 24
     * - middle-finger-phalanx-intermediate
       - 12
       - -
       - -

  Usage Example:

  .. code-block:: python

      from vuer import Vuer, VuerSession
      from vuer.schemas import Hands
      from asyncio import sleep

      app = Vuer()


      @app.add_handler("HAND_MOVE")
      async def handler(event, session):
          print(f"Movement Event: key-{event.key}", event.value)


      @app.spawn(start=True)
      async def main(session: VuerSession):
          # Important: You need to set the `stream` option to `True` to start
          # streaming the hand movement.
          session.upsert @ Hands(stream=True, key="hands")

          while True:
              await sleep(1)

  """

  tag = "Hands"
  key = "hands"
  # eventTypes=("squeeze",),
  stream = True
  disableLeft = False  # disables the left data stream, also hides the hand.
  disableRight = False  # disables the right data stream, also hides the hand.
  hideLeft = False  # hides the hand, but still streams the data.
  hideRight = False  # hides the hand, but still streams the data.


class MotionControllers(SceneElement):
  """
  MotionController for tracking XR controller poses and button states.

  :param key: Unique identifier for the controller.
  :type key: str, optional
  :param eventTypes: A tuple or list of events to track (e.g., "trigger", "squeeze").
  :type eventTypes: tuple or list, optional
  :param stream: Whether to enable streaming of controller data.
  :type stream: bool, optional
  :param left: Boolean indicating if the left controller should be tracked. defaults to None.
  :type left: bool, optional
  :param right: Boolean indicating if the right controller should be tracked.defaults to None
  :type right: bool, optional
  """

  tag = "MotionControllers"

  def __init__(
    self,
    key="motionControllers",
    eventTypes=("trigger", "squeeze"),
    stream=True,
    left=None,
    right=None,
    **kwargs,
  ):
    super().__init__(
      key=key,
      eventTypes=eventTypes,
      stream=stream,
      left=left,
      right=right,
      **kwargs,
    )


class Body(SceneElement):
  """
  Body component for tracking full-body XR poses using the WebXR Body Tracking API.

  .. admonition:: tip Setting stream to True

      Important: You need to set the `stream` option to `True` to
      start streaming the body pose data to the server.

  .. admonition:: warning Experimental API

      The WebXR Body Tracking API is experimental and currently only supported
      in Quest Browser. Enable WebXR Experiments flags in chrome://flags.

  The Body component streams the full 3D pose of the human body to the server in
  real time. You can listen to the `BODY_MOVE` event to receive body pose data.
  The data includes body joints and optionally left/right hand joints.

  **Returned Data**

  The `BODY_MOVE` event sends a `BodyData` object containing flattened arrays:

  .. code-block:: typescript

      type BodyData = {
        body: number[];      // 33 joints × 16 floats = 528 floats
        leftHand: number[];  // 25 joints × 16 floats = 400 floats
        rightHand: number[]; // 25 joints × 16 floats = 400 floats
      };

  **Matrix Format**

  All 4x4 transform matrices are stored in 16-element arrays in column-major order:

  .. code-block::

                                    ⌈  a0 a4 a8 a12  ⌉
                                    |  a1 a5 a9 a13  |
                                    |  a2 a6 a10 a14 |
                                    ⌊  a3 a7 a11 a15 ⌋

  **Body Joints (33 joints)**

  We follow the `WebXR Body Tracking specification <https://immersive-web.github.io/body-tracking/>`_.

  .. list-table::
     :widths: 40 10 40 10
     :header-rows: 1

     * - Body Joint
       - Index
       - Body Joint (continued)
       - Index
     * - hips
       - 0
       - left-hand-palm
       - 17
     * - spine-lower
       - 1
       - right-hand-palm
       - 18
     * - spine-middle
       - 2
       - left-upper-leg
       - 19
     * - spine-upper
       - 3
       - left-lower-leg
       - 20
     * - chest
       - 4
       - left-foot-ankle-twist
       - 21
     * - neck
       - 5
       - left-foot-ankle
       - 22
     * - head
       - 6
       - left-foot-subtalar
       - 23
     * - left-shoulder
       - 7
       - left-foot-transverse
       - 24
     * - left-scapula
       - 8
       - left-foot-ball
       - 25
     * - left-arm-upper
       - 9
       - right-upper-leg
       - 26
     * - left-arm-lower
       - 10
       - right-lower-leg
       - 27
     * - left-hand-wrist-twist
       - 11
       - right-foot-ankle-twist
       - 28
     * - right-shoulder
       - 12
       - right-foot-ankle
       - 29
     * - right-scapula
       - 13
       - right-foot-subtalar
       - 30
     * - right-arm-upper
       - 14
       - right-foot-transverse
       - 31
     * - right-arm-lower
       - 15
       - right-foot-ball
       - 32
     * - right-hand-wrist-twist
       - 16
       - -
       - -

  **Usage Example**

  .. code-block:: python

      from asyncio import sleep
      from vuer import Vuer, VuerSession
      from vuer.schemas import Body

      app = Vuer()


      @app.add_handler("BODY_MOVE")
      async def on_body_move(event, session):
          body = event.value.get("body", [])
          left = event.value.get("leftHand", [])
          right = event.value.get("rightHand", [])
          print(f"body: {len(body)//16} joints, hands: L={len(left)//16} R={len(right)//16}")


      @app.spawn(start=True)
      async def main(session: VuerSession):
          # Important: stream=True is required to receive BODY_MOVE events
          session.upsert @ Body(
              stream=True,
              leftHand=True,    # Include left hand joints
              rightHand=True,   # Include right hand joints
              fps=60,           # 60 frames per second
              showBody=True,    # Show body visualization
              showFrame=True,   # Show joint coordinate frames
          )

          while True:
              await sleep(1)

  :param key: Unique identifier for the body tracking instance.
  :type key: str, optional
  :param stream: Whether to enable streaming of body pose data to the server.
  :type stream: bool, optional
  :param leftHand: Whether to include left hand tracking data (25 joints). Default: True
  :type leftHand: bool, optional
  :param rightHand: Whether to include right hand tracking data (25 joints). Default: True
  :type rightHand: bool, optional
  :param fps: Frames per second at which body pose data should be sent. Default: 60
  :type fps: int, optional
  :param showBody: Whether to show body tracking visualization. Default: True
  :type showBody: bool, optional
  :param showFrame: Whether to display coordinate frames at each joint position. Default: True
  :type showFrame: bool, optional
  :param frameScale: Scale factor for the coordinate frames or joint markers. Default: 0.02
  :type frameScale: float, optional
  """

  tag = "Body"
  key = "body_tracking"
  stream = True
  leftHand = False
  rightHand = False
  fps = 30
  showBody = True
  showFrame = True
  frameScale = 0.02


class Head(SceneElement):
  """
  Head tracking component for 6DOF head pose using standard WebXR API.

  .. admonition:: tip Setting stream to True

      Important: You need to set the `stream` option to `True` to
      start streaming the head pose data to the server.

  The Head component tracks the user's head position and orientation using the
  standard WebXR API (XRFrame.getViewerPose). This is useful for devices like PICO
  that don't support full body tracking via xrFrame.body but still provide head
  tracking through the standard viewer pose.

  You can listen to the `HEAD_MOVE` event to receive head pose data.

  **Returned Data**

  The `HEAD_MOVE` event sends an object containing the head transformation:

  .. code-block:: typescript

      {
        ts: number,           // timestamp
        etype: 'HEAD_MOVE',
        key: string,          // default: 'head_tracking'
        value: {
          matrix: number[]    // 4x4 transformation matrix (16 floats)
        }
      }

  **Matrix Format**

  The 4x4 transform matrix is stored in 16-element arrays in column-major order:

  .. code-block::

                                    ⌈  a0 a4 a8 a12  ⌉
                                    |  a1 a5 a9 a13  |
                                    |  a2 a6 a10 a14 |
                                    ⌊  a3 a7 a11 a15 ⌋

  **Usage Example**

  .. code-block:: python

      from asyncio import sleep
      from vuer import Vuer, VuerSession
      from vuer.schemas import Head

      app = Vuer()


      @app.add_handler("HEAD_MOVE")
      async def on_head_move(event, session):
          matrix = event.value.get("matrix", [])
          print(f"Head matrix: {len(matrix)} floats")


      @app.spawn(start=True)
      async def main(session: VuerSession):
          # Important: stream=True is required to receive HEAD_MOVE events
          session.upsert @ Head(
              stream=True,
              fps=30,
              show=True,        # Show head pose visualization
              frameScale=0.05,  # Scale of coordinate frame marker
          )

          while True:
              await sleep(1)

  :param key: Unique identifier for the head tracking instance. Default: 'head_tracking'
  :type key: str, optional
  :param stream: Whether to enable streaming of head pose data to the server. Default: True
  :type stream: bool, optional
  :param fps: Frames per second at which head pose data should be sent. Default: 30
  :type fps: int, optional
  :param show: Whether to show head pose visualization with coordinate frame. Default: False
  :type show: bool, optional
  :param frameScale: Scale factor for the coordinate frame marker. Default: 0.05
  :type frameScale: float, optional
  """

  tag = "Head"
  key = "head_tracking"
  stream = True
  fps = 30
  show = False
  frameScale = 0.05


class WebXRMesh(SceneElement):
  """
  WebXR Mesh Detection component for real-world environment geometry detection in AR sessions.

  This component enables detection and rendering of environmental geometry like walls, floors,
  and furniture in WebXR AR sessions. It supports automatic mesh change detection and on-demand
  RPC requests for mesh data.

  **Requirements:**
    - WebXR session must be initialized with 'mesh-detection' feature
    - Only works in immersive-ar mode
    - Device must support mesh detection API (e.g., Quest 3, ARCore)

  **Data Upload Modes:**
    1. **Auto-Update Mode** (when `autoUpdate=True`, default):
       - Automatically detects mesh changes (new/updated/removed meshes)
       - Pushes updates to server only when changes occur
       - Server receives 'WEBXR_MESH_UPDATE' events with mesh data
       - Efficient: Only sends data when needed, not continuously
       - Set `autoUpdate=False` to disable automatic updates

    2. **RPC Mode** (always active):
       - Server can request mesh data on-demand using `session.get_webxr_mesh()`
       - Component responds with latest mesh data immediately
       - Useful for one-time queries or specific timing requirements
       - Works regardless of `autoUpdate` setting

  **Mesh Data Structure:**
    Each detected mesh contains:
      - vertices: Float32Array of vertex positions (x, y, z coordinates)
      - indices: Uint32Array of triangle indices
      - semanticLabel: Optional semantic classification (e.g., "wall", "floor")
      - matrix: 16-element transformation matrix (4x4 in column-major order)

  Usage Example (Auto-Update Mode):

  .. code-block:: python

      from vuer import Vuer, VuerSession
      from vuer.schemas import WebXRMesh, Scene

      app = Vuer()


      @app.add_handler("WEBXR_MESH_UPDATE")
      async def handle_mesh_update(event, session):
          meshes = event.value.get('meshes', [])
          print(f"Mesh update: {len(meshes)} meshes")
          for mesh in meshes:
              print(f"  Vertices: {len(mesh['vertices'])/3:.0f} points")
              print(f"  Semantic: {mesh.get('semanticLabel', 'unknown')}")


      @app.spawn(start=True)
      async def main(session: VuerSession):
          session.set @ Scene(
              children=[
                  WebXRMesh(
                      key="webxr-mesh",
                      autoUpdate=True,  # Enable auto-update (default)
                      color="blue",
                      opacity=0.15
                  )
              ]
          )
          await session.forever()

  Usage Example (RPC Mode Only):

  .. code-block:: python

      from vuer import Vuer, VuerSession
      from vuer.schemas import WebXRMesh, Scene
      from asyncio import sleep

      app = Vuer()


      @app.spawn(start=True)
      async def main(session: VuerSession):
          session.set @ Scene(
              children=[
                  WebXRMesh(
                      key="webxr-mesh",
                      autoUpdate=False,  # Disable auto-update
                      color="green",
                      opacity=0.2
                  )
              ]
          )

          await sleep(2)  # Wait for meshes to be detected

          # Request mesh data on-demand using RPC
          mesh_data = await session.get_webxr_mesh(key="webxr-mesh")
          meshes = mesh_data.value.get('meshes', [])
          print(f"Retrieved {len(meshes)} meshes")

  :param key: Unique identifier for the WebXR mesh component (default: "webxr-mesh")
  :type key: str
  :param color: Mesh material color (CSS color string or hex)
  :type color: str, optional
  :param opacity: Material opacity for solid mesh (default: 0.15, range: 0.0-1.0)
  :type opacity: float
  :param autoUpdate: Enable automatic updates when meshes change (default: True).
                     When True, sends WEBXR_MESH_UPDATE events on changes.
                     When False, only RPC mode is available.
  :type autoUpdate: bool
  """

  tag = "WebXRMesh"

  def __init__(
    self,
    key="webxr-mesh",
    color=None,
    opacity=0.15,
    autoUpdate=True,
    **kwargs,
  ):
    super().__init__(
      key=key,
      color=color,
      opacity=opacity,
      autoUpdate=autoUpdate,
      **kwargs,
    )
