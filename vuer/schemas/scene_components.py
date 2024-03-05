from typing import List

import numpy as np
from numpy.typing import NDArray

from vuer.schemas.html_components import BlockElement, Image, Element


class Scene(BlockElement):
    tag = "Scene"

    def __init__(
            self,
            *children,
            rawChildren=None,
            htmlChildren=None,
            bgChildren=None,
            # default to y-up to be consistent with three.js. Blender uses z-up though.
            up=[0, 1, 0],
            # background=None,
            # bgLight=None,
            # bgDark=None,
            # grid=True,
            **kwargs,
    ):
        super().__init__(*children, up=up, **kwargs)
        self.rawChildren = rawChildren or []
        self.htmlChildren = htmlChildren or []
        self.bgChildren = bgChildren or []

    def serialize(self):
        obj = super().serialize()
        if self.rawChildren:
            obj["rawChildren"] = [e.serialize() for e in self.rawChildren if e]
        if self.htmlChildren:
            obj["htmlChildren"] = [e.serialize() for e in self.htmlChildren if e]
        if self.bgChildren:
            obj["bgChildren"] = [e.serialize() for e in self.bgChildren if e]
        return obj


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


class Pcd(SceneElement):
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
    tag = "Movable"


class Hands(SceneElement):
    tag = "Hands"

    def __init__(self, fps=30, key="hands", eventTypes=('squeeze',), stream=False, left=None, right=None, **kwargs):
        super().__init__(fps=fps, key=key, eventTypes=eventTypes, stream=stream, left=left, right=right, **kwargs)


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
        matrix: A list of 16 numbers representing the matrix. Overrides position and rotation.
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
            up=[0, 0, 1],
            **kwargs,
    ):
        rawChildren = [
            AmbientLight(intensity=1.0, key="default_ambient_light"),
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
