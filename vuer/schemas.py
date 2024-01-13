from typing import Union, Tuple, List

import numpy as np
import PIL.Image as pil_image
from numpy._typing import NDArray

from vuer.serdes import IMAGE_FORMATS

element_count = 0


class Element:
    """
    Base class for all elements
    """

    tag: str = "div"

    def __post_init__(self, **kwargs):
        pass

    def __init__(self, key=None, **kwargs):
        global element_count
        if key is None:
            key = str(element_count)
            element_count += 1

        self.__dict__.update(tag=self.tag, key=key, **kwargs)
        self.__post_init__(**{k: v for k, v in kwargs.items() if k.startswith("_")})

    def serialize(self):
        """
        Serialize the element to a dictionary for sending over the websocket.
        :return: Dictionary representing the element.
        """

        # note: only return the non-private attributes, allow bypass.
        output = {}
        for k, v in self.__dict__.items():
            if k.startswith("_"):
                continue
            if hasattr(v, "tolist"):
                output[k] = v.tolist()
            else:
                output[k] = v

        return output


class BlockElement(Element):
    def __init__(self, *children, **kwargs):
        self.children = children
        super().__init__(**kwargs)

    def serialize(self):
        # writ this as multiple lines
        children = []
        for e in self.children:
            if isinstance(e, str):
                children.append(e)
            else:
                children.append(e.serialize())
        return {**super().serialize(), "children": children}


class AutoScroll(BlockElement):
    tag = "AutoScroll"


class Markdown(BlockElement):
    tag = "Markdown"


class Page(BlockElement):
    """
    A Page is an element that contains other elements.
    It is represented by a div element in the DOM.
    """

    tag = "article"


class div(BlockElement):
    tag = "Div"


class InputBox(Element):
    """
    An InputBox is an element that allows the user to input text.
    It is represented by an input element in the DOM.
    """

    tag = "Input"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class Header1(BlockElement):
    """
    A Text element is an element that displays text.
    It is represented by a text, or p element in the DOM.
    """

    tag = "h1"

    def __init__(self, *children, **kwargs):
        children = [Text(c) if isinstance(c, str) else c for c in children]
        super().__init__(*children, **kwargs)


Header = Header1


class Header2(Header1):
    """Header 2"""

    tag = "h2"


class Header3(Header1):
    """Header 2"""

    tag = "h3"


class Paragraph(BlockElement):
    """
    A Text element is an element that displays text.
    It is represented by a text, or p element in the DOM.
    """

    tag = "p"

    def __init__(self, *children, **kwargs):
        children = [Text(c) if isinstance(c, str) else c for c in children]
        super().__init__(*children, **kwargs)


class Text(Element):
    """
    A Text element is an element that displays text.
    It is represented by a text, or p element in the DOM.
    """

    tag = "Text"

    def __init__(self, *text, sep=" ", **kwargs):
        self.text = sep.join(text)
        super().__init__(**kwargs)


class Bold(Text):
    def __init__(self, text, style=None, **kwargs):
        _style = {"fontWeight": "bold"}
        _style.update(style or {})
        super().__init__(text, style=_style, **kwargs)


class Italic(Text):
    def __init__(self, text, style=None, **kwargs):
        _style = {"fontStyle": "italic"}
        _style.update(style or {})
        super().__init__(text, style=_style, **kwargs)


class Link(Text):
    tag = "a"

    def __init__(self, text, src, **kwargs):
        super().__init__(text, src=src, **kwargs)


class Button(Element):
    """
    A Button element is an element that allows the user to click on it.
    It is represented by a button element in the DOM.
    """

    tag = "Button"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class Slider(Element):
    """
    A Slider element is an element that allows the user to slide a value.
    It is represented by a slider element in the DOM.
    """

    tag = "Slider"

    def __init__(self, **kwargs):
        """
        :param min: Minimum value of the slider
        :param max: Maximum value of the slider
        :param step: Step size of the slider
        :param value: Initial value of the slider
        :param kwargs:
        """
        super().__init__(**kwargs)


class Image(Element):
    """
    An Image element is an element that displays an image.
    It is represented by an img element in the DOM.
    """

    tag = "Img"

    def __init__(
        self,
        data: Union[str, np.ndarray, pil_image.Image] = None,
        *,
        src: str = None,
        format="png",
        **kwargs,
    ):
        if src is not None:
            assert data is None, "data and src can not be truful at the same time"
        if data is None:
            pass
        elif isinstance(data, list) and len(data) == 0:
            pass
        else:
            if isinstance(data, pil_image.Image):
                data = data
            elif isinstance(data, str):
                # convert back to image first from base64
                data = pil_image.open(data)
            elif isinstance(data, np.ndarray):
                if data.dtype == np.uint8:
                    pass
                else:
                    data = (data * 255).astype(np.uint8)

            src = IMAGE_FORMATS[format](data)

        super().__init__(src=src, **kwargs)


class ImageUpload(Element):
    """
    A ImageUpload element is an element that allows the user to upload a file.
    It is represented by a file upload element in the DOM.
    """

    tag = "ImageUpload"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


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

    def __post_init__(self, **kwargs):
        self.vertices = self.vertices.astype(np.float16).flatten().tobytes()

        # uinit16 is too few at 65536. Have to use uint32.
        self.faces = self.faces.astype(np.uint32).flatten().tobytes()

        if self.colors is None:
            return

        if self.colors.shape[-1] == 4:
            self.colors = self.colors[:, :3]

        # send only integers: https://stackoverflow.com/questions/34669537
        if self.colors.dtype != np.uint8:
            self.colors *= 255
            self.colors = self.colors.astype(np.uint8)

        self.colors = self.colors.flatten().tobytes()


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

    Arguments:
        args: color, near, far

    Example Usage:
        Fog(args=[0xcccccc, 10, 15])
    """

    tag = "fog"


class Wireframe(SceneElement):
    tag = "Wireframe"


class Splat(SceneElement):
    tag = "Splat"


class LumaSplats(SceneElement):
    tag = "Splats"


class Pcd(SceneElement):
    tag = "Pcd"


class CameraView(SceneElement):
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


# todo: Need to decide if we want to rename this, to avoid conflict
class Html(SceneElement):
    """
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


class Obj(SceneElement):
    tag = "Obj"

    def __init__(self, src, mtl=None, materials=None, **kwargs):
        """
        :param src: The source of the obj file. Can be a url or a local file.
        :type  src: str
        :param mtlSrc: The source of the mtl file. Can be a url or a local file.
        :type  mtlSrc: str
        :param materials: A list of materials to be used for the obj file.
        :type  materials: List[String]

        todo: In the future we probably want to enable the loading of multiple material files.
        """
        self.src = src
        self.mtl = mtl
        self.materials = []

        super().__init__(**kwargs)


class CoordsMarker(SceneElement):
    tag = "CoordsMarker"


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
            DirectionalLight(
                intensity=1, key="default_directional_light", helper=show_helper
            ),
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
