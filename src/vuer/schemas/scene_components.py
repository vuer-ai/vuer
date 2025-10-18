from typing import List, Literal, Optional, Union

import numpy as np
from numpy.typing import NDArray

from .html_components import BlockElement, Element, Image, _UNSET


class SceneElement(BlockElement):
    pass


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


class CameraHelper(SceneElement):
    tag = "CameraHelper"


class group(SceneElement):
    tag = "group"
    children = []


class mesh(SceneElement):
    tag = "mesh"
    children = []


class TriMesh(SceneElement):
    tag = "TriMesh"
    children = []

    vertices: NDArray[np.float16] = None
    # note: Uint16 is too few. Quickly overflows
    faces: NDArray[np.uint32] = None
    colors: NDArray[np.uint8] = None
    uv: NDArray[np.float16] = None

    def __post_init__(self, **kwargs):
        self.vertices = self.vertices.astype(np.float16).flatten().tobytes()

        # uinit16 is too few at 65536. Have to use uint32.
        self.faces = self.faces.astype(np.uint32).flatten().tobytes()

        if self.colors is not None:
            if self.colors.shape[-1] == 4:
                self.colors = self.colors[:, :3]

            # send only integers: https://stackoverflow.com/questions/34669537
            if self.colors.dtype != np.uint8:
                self.colors *= 255
                self.colors = self.colors.astype(np.uint8)

            self.colors = self.colors.flatten().tobytes()

        if self.uv is not None:
            self.uv = self.uv.astype(np.float16).flatten().tobytes()


class PointCloud(SceneElement):
    """PointCould element, highly optimized for payload size and speed.

    :param vertices: An optional numpy array of shape (N, 3) containing the vertices of the pointcloud.
    :type  vertices: NDArray[np.float16]
    :param colors: An optional numpy array of shape (N, 3) containing the colors of the point cloud.
    :type  color: NDArray[np.uint8]
    :param size: An optional float that sets the size of the points.
    :type  size: float
    :param key: str An optional string that sets the key of the element.
    :type  key: str

    Usage::

        sess.upsert @ PointCloud(
            vertices=np.random.rand(1000, 3),
            colors=np.random.rand(1000, 3),
            size=0.01,
            key="pointcloud",
        )

    """

    tag: str = "PointCloud"
    vertices: NDArray[np.float16] = None
    """An optional numpy array of shape (N, 3) containing the vertices of the point cloud."""
    colors: NDArray[np.uint8] = None
    """An optional numpy array of shape (N, 3) containing the colors of the point cloud."""
    children = []

    def __post_init__(self, **kwargs):
        self.vertices = self.vertices.astype(np.float16).flatten().tobytes()

        if self.colors is None:
            return

        if self.colors.shape[-1] == 4:
            self.colors = self.colors[:, :3]

        if self.colors.dtype != np.uint8:
            # todo: use this and send only integers: https://stackoverflow.com/questions/34669537
            self.colors *= 255
            self.colors = self.colors.astype(np.uint8)

        self.colors = self.colors.flatten().tobytes()


p = PointCloud


class Box(SceneElement):
    tag = "Box"


class Capsule(SceneElement):
    tag = "Capsule"


class Cone(SceneElement):
    tag = "Cone"


class Circle(SceneElement):
    tag = "Circle"


class Cylinder(SceneElement):
    tag = "Cylinder"


class Dodecahedron(SceneElement):
    tag = "Dodecahedron"


class Edges(SceneElement):
    tag = "Edges"


class Extrude(SceneElement):
    tag = "Extrude"


class Icosahedron(SceneElement):
    tag = "Icosahedron"


class Lathe(SceneElement):
    tag = "Lathe"


class Octahedron(SceneElement):
    tag = "Octahedron"


class Plane(SceneElement):
    tag = "Plane"


class Polyhedron(SceneElement):
    tag = "Polyhedron"


class Ring(SceneElement):
    tag = "Ring"


class Shape(SceneElement):
    tag = "Shape"


class Sphere(SceneElement):
    tag = "Sphere"


class Tetrahedron(SceneElement):
    tag = "Tetrahedron"


class Torus(SceneElement):
    tag = "Torus"


class TorusKnot(SceneElement):
    tag = "TorusKnot"


class Tube(SceneElement):
    tag = "Tube"


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

    def __init__(self, *, children=None, color=None, near=None, far=None, **kwargs):
        assert children is None, "Fog does not support children."
        super().__init__(attach="fog", key="fog", color=color, near=near, far=far, **kwargs)


class Wireframe(SceneElement):
    tag = "Wireframe"


class Splat(SceneElement):
    tag = "Splat"


class LumaSplats(SceneElement):
    tag = "Splats"

class SparkSplats(SceneElement):
    tag = "SparkSplats"

class Pcd(SceneElement):
    """
    Represents a PCD (Point Cloud Data) element in a scene.

    The Pcd class serves as a specialized scene element to handle
    PCD data. It inherits from the base SceneElement class and is
    used to define and represent point cloud data within the scene
    structure. The tag attribute is predefined as "Pcd" to denote its
    type in the scene representation.

    :param src: The source of the PCD. Can be a url or a local file.
    :type src: str, optional
    :param text: The text content of the PCD, allow one to load a scene from a string.
    :type  text: str, optional
    :param buff: The binary content of the PCD file. This is the most efficient, because you are sending binaries..
    :type  buff: bytes, optional
    :param encoding: The encoding of the PCD file. Defaults to 'ascii'.
    :type  encoding: str, optional
    :param size: Optional float that sets the size of the points in the point cloud.
    :type  size: float, optional
    :param matrix: Optional 4x4 transformation matrix (16 values) to position and orient the point cloud.
    :type matrix: tuple[float, ...]
    :param hide: Optional flag to hide the point cloud. Defaults to False.
    :type  hide: bool, optional
    """

    tag = "Pcd"


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


class SceneBackground(Image, SceneElement):
    """Sets the background of the scene to a static image. Does not work well
    with high frame rates. For displaying movies, use the ImageBackground element.
    """

    tag = "SceneBackground"


class ImageBackground(Image, SceneElement):
    """Sets the background of the scene to an image, Supports high frame rates.

    We use a plane that is always facing the camera to display the image.
    """

    tag = "ImageBackground"


class HUDPlane(Image, SceneElement):
    """A Head-up display (HUD) plane that is always facing the camera. Requires
    mounting a material."""

    tag = "HUDPlane"


class VideoMaterial(Image, SceneElement):
    """A Video Material for loading from a file hosted at a url."""

    tag = "VideoMaterial"


class WebRTCVideoMaterial(Image, SceneElement):
    """A Video Material for loading from a media stream."""

    tag = "WebRTCVideoMaterial"


class VideoPlane(Image, SceneElement):
    """A Head-up display (HUD) plane that is always facing the camera. Requires
    mounting a material."""

    tag = "VideoPlane"


class WebRTCVideoPlane(SceneElement):
    """A Head-up display (HUD) plane that is always facing the camera. Requires
    mounting a material."""

    tag = "WebRTCVideoPlane"


class StereoVideoPlane(Image, SceneElement):
    """A Head-up display (HUD) plane that is always facing the camera. Requires
    mounting a material."""

    tag = "StereoVideoPlane"


class WebRTCStereoVideoPlane(SceneElement):
    """A Head-up display (HUD) plane that is always facing the camera. Requires
    mounting a material."""

    tag = "WebRTCStereoVideoPlane"


# class ImagePlane(Image, SceneElement):
#     """For displaying a static image. Just pass in an image object to the first argument."
#
#     Untested, not taking in images right now.
#     ""
#
#     tag = "ImagePlane"


class Group(SceneElement):
    tag = "VuerGroup"


class HemisphereLight(SceneElement):
    tag = "HemisphereLight"


class RectAreaLight(SceneElement):
    tag = "RectAreaLight"


class Stage(SceneElement):
    tag = "Stage"


class Gamepads(SceneElement):
    tag = "Gamepads"


class DirectionalLight(SceneElement):
    tag = "DirectionalLight"


class PointLight(SceneElement):
    tag = "PointLight"


class SpotLight(SceneElement):
    tag = "SpotLight"


class AmbientLight(SceneElement):
    tag = "AmbientLight"


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


class Pivot(SceneElement):
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

    def __init__(
        self,
        key="hands",
        # eventTypes=("squeeze",),
        stream=True,
        disableLeft=False,  # disables the left data stream, also hides the hand.
        disableRight=False,  # disables the right data stream, also hides the hand.
        hideLeft=False,  # hides the hand, but still streams the data.
        hideRight=False,  # hides the hand, but still streams the data.
        **kwargs,
    ):
        super().__init__(
            key=key,
            # eventTypes=eventTypes,
            stream=stream,
            disableLeft=disableLeft,
            disableRight=disableRight,
            hideLeft=hideLeft,
            hideRight=hideRight,
            **kwargs,
        )


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

class Bodies(SceneElement):
    """
    Bodies component for tracking full-body XR poses using the WebXR Body Tracking API.

    :param key: Unique identifier for the body tracking instance.
    :type key: str, optional
    :param stream: Whether to enable streaming of body pose data to the server.
    :type stream: bool, optional
    :param fps: Frames per second at which body pose data should be sent.
    :type fps: int, optional
    :param hideIndicate: Whether to hide all visual indicators for tracked joints while still tracking data.
    :type hideIndicate: bool, optional
    :param showFrame: Whether to display coordinate frames at each joint position.
    :type showFrame: bool, optional
    :param frameScale: Scale factor for the coordinate frames or joint markers.
    :type frameScale: float, optional
    """

    tag = "Bodies"

    def __init__(
        self,
        key="body_tracking",
        stream=True,
        fps=30,
        hideIndicate=False,
        showFrame=True,
        frameScale=0.02,
        **kwargs,
    ):
        super().__init__(
            key=key,
            stream=stream,
            fps=fps,
            hideIndicate=hideIndicate,
            showFrame=showFrame,
            frameScale=frameScale,
            **kwargs,
        )

class Obj(SceneElement):
    tag = "Obj"

    def __init__(self, src=None, mtl=None, text=None, buff=None, materials=None, **kwargs):
        """
        :param src: The source of the obj file. Can be a url or a local file.
        :type  src: str
        :param mtl: The source of the mtl file. Can be a url or a local file.
        :type  mtl: str
        :param text: The text content of the obj file, allow one to load a scene from a string.
        :type  text: str
        :param buff: The binary content of the obj file. This is the most efficient, because you are sending binaries..
        :type  buff: bytes
        :param materials: A list of materials to be used for the obj file.
        :type  materials: List[String]

        todo: In the future we probably want to enable the loading of multiple material files.
        """
        self.src = src
        self.mtl = mtl
        self.text = text
        self.buff = buff
        self.materials = materials

        super().__init__(**kwargs)


class CoordsMarker(SceneElement):
    """Coordinates Marker Component.

    Args:
        position: A list of 3 numbers representing the position.
        rotation: A list of 3 numbers representing the rotation.
        matrix: A list of 16 numbers representing the matrix. Overrides position and rotation.
        scale: 1.0
        headScale: 1.0
        lod: Level of detail. The number of segments for the cone and the stem.
    """

    tag = "CoordsMarker"


class Arrow(SceneElement):
    """Coordinates Marker Component.

    Args:
        matrix: A list of 16 numbers representing the matrix. Overrides position and rotation.
        position: A list of 3 numbers representing the position.
        rotation: A list of 3 numbers representing the rotation.
        scale: 1.0
        headScale: 1.0
        lod: Level of detail. The number of segments for the cone and the stem.
    """

    tag = "Arrow"


class Ply(SceneElement):
    tag = "Ply"


class Glb(SceneElement):
    """Glb Component

    # this follows the material type

    :param materialType: Literal["basic", ...]
    :param material: {
      side=0: inside, side=1: outsie, side=2: both.
    }
    """

    tag = "Glb"


class Urdf(SceneElement):
    tag = "Urdf"


class Gripper(SceneElement):
    tag = "Gripper"


class SkeletalGripper(SceneElement):
    tag = "SkeletalGripper"


class Grid(SceneElement):
    tag = "Grid"


class GrabRender(SceneElement):
    tag = "GrabRender"
    key = "DEFAULT"
    """We do not want the client to set keys automatically since GrabRender is 
    usually used a singleton component as default."""


class TimelineControls(SceneElement):
    tag = "TimelineControls"
    # todo: consider adding default component keys here.


class PointerControls(SceneElement):
    tag = "PointerControls"
    # todo: consider adding default component keys here.


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


class Trail(SceneElement):
    """A declarative, three.MeshLine based Trails implementation. You can attach it to any mesh and it will give it a beautiful trail.

    :param width: Width of the line. Defaults to 0.2.
    :type width: float
    :param color: Color of the line. Defaults to 'hotpink'.
    :type color: str
    :param length: Length of the line. Defaults to 1.
    :type length: float
    :param decay: How fast the line fades away. Defaults to 1.
    :type decay: float
    :param local: Whether to use the target's world or local positions. Defaults to False.
    :type local: bool
    :param stride: Min distance between previous and current point. Defaults to 0.
    :type stride: float
    :param interval: Number of frames to wait before next calculation. Defaults to 1.
    :type interval: int
    :param target: Optional target. This object will produce the trail.
    :type target: Any
    :param attenuation: A function to define the width in each point along it.
    :type attenuation: callable

    Note: If `target` is not defined, Trail will use the first `Object3D` child as the target.
    You can optionally define a custom meshLineMaterial to use.

    Example Usage::

        Trail(
            width=0.2,
            color='hotpink',
            length=1,
            decay=1,
            local=False,
            stride=0,
            interval=1
        )
    """

    tag = "Trail"


class Center(SceneElement):
    """Centers its children by calculating their boundary box.

    The Center component automatically centers child elements by calculating their bounding box.
    It allows fine control over which axes to center along.

    :param top: Align to top edge instead of center on Y axis
    :type top: bool
    :param right: Align to right edge instead of center on X axis
    :type right: bool
    :param bottom: Align to bottom edge instead of center on Y axis
    :type bottom: bool
    :param left: Align to left edge instead of center on X axis
    :type left: bool
    :param front: Align to front edge instead of center on Z axis
    :type front: bool
    :param back: Align to back edge instead of center on Z axis
    :type back: bool
    :param disable: Disable centering on all axes
    :type disable: bool
    :param disableX: Disable centering on X axis
    :type disableX: bool
    :param disableY: Disable centering on Y axis
    :type disableY: bool
    :param disableZ: Disable centering on Z axis
    :type disableZ: bool
    :param precise: Use precise boundary box calculation (default: True)
    :type precise: bool

    Example Usage::

        Center(
            top=True,
            left=True,
            children=[mesh]
        )
    """

    tag = "Center"

class Billboard(SceneElement):
    """
    Renders its children as a billboard that always faces the camera.

    :param follow: Whether the billboard should follow the camera position (default: True)
    :type follow: bool, optional
    :param lockX: Lock rotation on the X axis (default: False)
    :type lockX: bool, optional
    :param lockY: Lock rotation on the Y axis (default: False)
    :type lockY: bool, optional
    :param lockZ: Lock rotation on the Z axis (default: False)
    :type lockZ: bool, optional

    Example Usage::

        Billboard(
            follow=True,
            lockX=False,
            lockY=True,
            children=[mesh]
        )
    """
    tag = "Billboard"

    def __init__(
        self,
        *children,
        follow: bool = True,
        lockX: bool = False,
        lockY: bool = False,
        lockZ: bool = False,
        **kwargs
    ):
        super().__init__(
            *children,
            follow=follow,
            lockX=lockX,
            lockY=lockY,
            lockZ=lockZ,
            **kwargs
        )

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

    def __init__(
        self,
        *children,
        characters: Union[str, None, object] = _UNSET,
        color: Union[str, None, object] = _UNSET,
        fontSize: Union[float, None, object] = _UNSET,
        fontWeight: Union[int, str, None, object] = _UNSET,
        fontStyle: Union[str, None, object] = _UNSET,
        maxWidth: Union[float, None, object] = _UNSET,
        lineHeight: Union[float, None, object] = _UNSET,
        letterSpacing: Union[float, None, object] = _UNSET,
        textAlign: Union[str, None, object] = _UNSET,
        font: Union[str, None, object] = _UNSET,
        anchorX: Union[float, str, None, object] = _UNSET,
        anchorY: Union[float, str, None, object] = _UNSET,
        clipRect: Union[list, None, object] = _UNSET,
        depthOffset: Union[float, None, object] = _UNSET,
        direction: Union[str, None, object] = _UNSET,
        overflowWrap: Union[str, None, object] = _UNSET,
        whiteSpace: Union[str, None, object] = _UNSET,
        outlineWidth: Union[float, str, None, object] = _UNSET,
        outlineOffsetX: Union[float, str, None, object] = _UNSET,
        outlineOffsetY: Union[float, str, None, object] = _UNSET,
        outlineBlur: Union[float, str, None, object] = _UNSET,
        outlineColor: Union[str, None, object] = _UNSET,
        outlineOpacity: Union[float, None, object] = _UNSET,
        strokeWidth: Union[float, str, None, object] = _UNSET,
        strokeColor: Union[str, None, object] = _UNSET,
        strokeOpacity: Union[float, None, object] = _UNSET,
        fillOpacity: Union[float, None, object] = _UNSET,
        sdfGlyphSize: Union[int, None, object] = _UNSET,
        debugSDF: Union[bool, None, object] = _UNSET,
        glyphGeometryDetail: Union[int, None, object] = _UNSET,
        **kwargs
    ):
        super().__init__(
            *children,
            characters=characters,
            color=color,
            fontSize=fontSize,
            fontWeight=fontWeight,
            fontStyle=fontStyle,
            maxWidth=maxWidth,
            lineHeight=lineHeight,
            letterSpacing=letterSpacing,
            textAlign=textAlign,
            font=font,
            anchorX=anchorX,
            anchorY=anchorY,
            clipRect=clipRect,
            depthOffset=depthOffset,
            direction=direction,
            overflowWrap=overflowWrap,
            whiteSpace=whiteSpace,
            outlineWidth=outlineWidth,
            outlineOffsetX=outlineOffsetX,
            outlineOffsetY=outlineOffsetY,
            outlineBlur=outlineBlur,
            outlineColor=outlineColor,
            outlineOpacity=outlineOpacity,
            strokeWidth=strokeWidth,
            strokeColor=strokeColor,
            strokeOpacity=strokeOpacity,
            fillOpacity=fillOpacity,
            sdfGlyphSize=sdfGlyphSize,
            debugSDF=debugSDF,
            glyphGeometryDetail=glyphGeometryDetail,
            **kwargs
        )

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

    def __init__(self, *text, font=None, smooth=None, lineHeight=0, letterSpacing=1, **kwargs):
        super().__init__(*text, font=font, smooth=smooth, lineHeight=lineHeight, letterSpacing=letterSpacing, **kwargs)


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
        grid=True,
        toneMapping: str = None,
        toneMappingExposure: float = None,
        frameloop: Literal["always", "demand"] = None,
        enableOrbitControl: bool = None,
        camPosition: List[float] = None,
        camRotation: List[float] = None,
        **kwargs,
    ):
        super().__init__(*children, up=up, **kwargs)
        self.rawChildren = rawChildren or []
        self.htmlChildren = htmlChildren or []
        # note: empty list switch to default.
        self.bgChildren = bgChildren or [
            # use `grid=True` to select the grid component
            Grid(key="default-grid", _key="default-grid") if grid else None,
            AmbientLight(key="ambient", intensity=0.25),
            PointLight(key="spot", intensity=1, position=[0, 1, 1]),
            Hands(fps=30, eventType=["squeeze"], stream=True),
            MotionControllers(fps=30, eventType=["trigger", "squeeze"], stream=True),
        ]

        self.up = up
        if background:
            self.background = background

        if toneMapping is not None:
            self.toneMapping = toneMapping
        if toneMappingExposure is not None:
            self.toneMappingExposure = toneMappingExposure

        if frameloop is not None:
            self.frameloop = frameloop

        if enableOrbitControl is not None:
            self.enableOrbitControl = enableOrbitControl
        if camPosition is not None:
            self.camPosition = camPosition
        if camRotation is not None:
            self.camRotation = camRotation

    def serialize(self):
        obj = super().serialize()
        if self.rawChildren:
            obj["rawChildren"] = [e.serialize() for e in self.rawChildren if e]
        if self.htmlChildren:
            obj["htmlChildren"] = [e.serialize() for e in self.htmlChildren if e]
        if self.bgChildren:
            obj["bgChildren"] = [e.serialize() for e in self.bgChildren if e]
        return obj


class DefaultScene(Scene):
    """Default Scene that includes a basic setup of ambient lights.


    :param children: list of children elements to be rendered in the scene.
    :type children: SceneElement, ...
    :param rawChildren: list of children elements to be rendered in the scene.
    :param htmlChildren: list of children elements to be rendered in the scene.
    :param bgChildren: list of children elements to be rendered in the scene.
    :param show_helper: list of children elements to be rendered in the scene.
    :param startStep: list of children elements to be rendered in the scene.
    :param endStep: list of children elements to be rendered in the scene.
    :param up: list of children elements to be rendered in the scene.
    :param kwargs: list of children elements to be rendered in the scene.

    Example Usage::

        DefaultScene(
            # Ambient Light does not have helper because it is ambient.
            AmbientLight(intensity=1.0, key="default_ambient_light"),
            DirectionalLight(
                intensity=1, key="default_directional_light", helper=show_helper
            ),
            *children,
            rawChildren=rawChildren,
            htmlChildren=htmlChildren,
            bgChildren=[
                GrabRender(),
                *[
                    # we use a key here so that we can replace the timeline controls via update
                    TimelineControls(start=startStep, end=endStep, key="timeline")
                    if endStep
                    else None,
                ],
                PointerControls(),
                Grid(),
                *bgChildren,
            ],
            up=up,
            **kwargs,
        )
    """

    def __init__(
        self,
        *children: SceneElement,
        rawChildren: List[SceneElement] = None,
        htmlChildren: List[Element] = None,
        bgChildren: List[SceneElement] = [],
        show_helper=True,
        startStep=0,
        endStep=None,
        # default to z-up
        up=[0, 1, 0],
        grid=True,
        **kwargs,
    ):
        rawChildren = [
            AmbientLight(intensity=0.5, key="default_ambient_light"),
            DirectionalLight(intensity=1, key="default_directional_light", helper=show_helper),
            *(rawChildren or []),
        ]

        super().__init__(
            # Ambient Light does not have helper because it is ambient.
            *children,
            rawChildren=rawChildren,
            htmlChildren=htmlChildren,
            bgChildren=[
                # skey spec here is a little redundant.
                GrabRender(key="DEFAULT"),
                *[
                    # we use a key here so that we can replace the timeline controls via update
                    TimelineControls(start=startStep, end=endStep, key="timeline") if endStep else None,
                ],
                PointerControls(),
                Grid() if grid else None,
                *bgChildren,
            ],
            up=up,
            **kwargs,
        )
