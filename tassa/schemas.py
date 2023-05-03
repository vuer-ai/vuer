import base64
from io import BytesIO
from typing import Union

import numpy as np
import PIL.Image as pil_image

element_count = 0


class Element:
    """
    Base class for all elements
    """

    tag: str = "div"

    def __init__(self, key=None, **kwargs):
        global element_count
        if key is None:
            key = str(element_count)
            element_count += 1

        self.__dict__.update(tag=self.tag, key=key, **kwargs)

    def serialize(self):
        """
        Serialize the element to a dictionary for sending over the websocket.
        :return: Dictionary representing the element.
        """
        return {**self.__dict__}


class BlockElement(Element):
    def __init__(self, *children, **kwargs):
        self.children = children
        super().__init__(**kwargs)

    def serialize(self):
        return {**super().serialize(), "children": [e.serialize() for e in self.children]}


class Page(BlockElement):
    """
    A Page is an element that contains other elements.
    It is represented by a div element in the DOM.
    """

    tag = "article"


class div(BlockElement):
    tag = "div"


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
        if src:
            assert data is None, "data and src can not be truful at the same time"
        else:
            if isinstance(data, str):
                # convert back to image first from base64
                image_data = pil_image.open(data)
            else:
                image_data = (data * 255).astype(np.uint8)

            src = self.base64(image_data)

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


class SceneElement(BlockElement):
    pass


class Camera(SceneElement):
    tag = "Camera"


class group(SceneElement):
    tag = "group"


class Pcd(SceneElement):
    tag = "Pcd"


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


class Ply(SceneElement):
    tag = "Ply"


class Pivot(SceneElement):
    tag = "Pivot"


class Movable(SceneElement):
    tag = "Movable"


class Glb(SceneElement):
    tag = "Glb"


class PointCloud(SceneElement):
    tag = "PointCloud"


class Gripper(SceneElement):
    tag = "Gripper"


class SkeletalGripper(SceneElement):
    tag = "SkeletalGripper"
