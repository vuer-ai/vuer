from typing import Union

import numpy as np
import PIL.Image as pil_image

# from msgpack_numpy import pack, packb

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
            if k.startswith('_'):
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

    def __init__(self, data: Union[str, np.ndarray, pil_image.Image] = None, src: str = None, **kwargs):
        if src is not None:
            assert data is None, "data and src can not be truful at the same time"
        else:
            if isinstance(data, pil_image.Image):
                data = data
            elif isinstance(data, str):
                # convert back to image first from base64
                data = pil_image.open(data)
            elif isinstance(data, np.ndarray):
                data = (data * 255).astype(np.uint8)

            src = self.base64(data)

        super().__init__(src=src, **kwargs)

    @staticmethod
    def base64(image_data):
        # if self.data is not None:
        from io import BytesIO
        import numpy as np
        import base64

        with BytesIO() as buf:
            # todo: specify PNG vs JPG
            if isinstance(image_data, np.ndarray):
                pil_image.fromarray(image_data).save(buf, "png")
            else:
                assert isinstance(image_data, pil_image.Image)
                image_data.save(buf, "png")

            return "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode("utf-8")


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
            backgroundChildren=None,
            **kwargs,
    ):
        super().__init__(*children, **kwargs)
        self.rawChildren = rawChildren or []
        self.htmlChildren = htmlChildren or []
        self.backgroundChildren = backgroundChildren or []

    def serialize(self):
        obj = super().serialize()
        if self.rawChildren:
            obj["rawChildren"] = [e.serialize() for e in self.rawChildren if e]
        if self.htmlChildren:
            obj["htmlChildren"] = [e.serialize() for e in self.htmlChildren if e]
        if self.backgroundChildren:
            obj["backgroundChildren"] = [e.serialize() for e in self.backgroundChildren if e]
        return obj


class DefaultScene(Scene):
    def __init__(
            self,
            *children,
            rawChildren=None,
            htmlChildren=None,
            backgroundChildren=None,
            **kwargs,
    ):
        super().__init__(
            AmbientLight(intensity=0.5, key="default_ambient_light"),
            DirectionalLight(intensity=1, key="default_directional_light"),
            *children, **kwargs)


class SceneElement(BlockElement):
    pass


class Camera(SceneElement):
    tag = "Camera"


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
    vertices = None
    faces = None
    colors = None

    def __post_init__(self, **kwargs):
        self.vertices = self.vertices.flatten()
        if hasattr(self.faces, "flatten"):
            self.faces = self.faces.flatten()
        if hasattr(self.colors, "flatten"):
            if self.colors.shape[-1] == 4:
                self.colors = self.colors[:, :3]
            if self.colors.dtype == np.uint8:
                self.colors = self.colors.astype(np.float32) / 255.
            self.colors = self.colors.flatten().astype(np.float32)


class PointCloud(SceneElement):
    tag = "PointCloud"
    children = []
    vertices = None
    colors = None

    def __post_init__(self, **kwargs):
        self.vertices = self.vertices.flatten()
        if hasattr(self.colors, "flatten"):
            if self.colors.shape[-1] == 4:
                self.colors = self.colors[:, :3]
            if self.colors.dtype == np.uint8:
                self.colors = self.colors.astype(np.float32) / 255.
            self.colors = self.colors.flatten()


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


class Wireframe(SceneElement):
    tag = "Wireframe"


class Pcd(SceneElement):
    tag = "Pcd"


class CameraView(SceneElement):
    tag = "CameraView"


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
