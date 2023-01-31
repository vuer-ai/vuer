import base64
from io import BytesIO
from typing import Union

from PIL import Image

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
        return {**super().serialize(), 'children': [e.serialize() for e in self.children]}


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


class ImageCls(Element):
    """
    An Image element is an element that displays an image.
    It is represented by an img element in the DOM.
    """
    tag = "Img"

    def __init__(self, data: Union[str, Image.Image], **kwargs):
        if isinstance(data, str):
            # convert back to image first from base64
            self._data = Image.open(BytesIO(base64.b64decode(data)))
        self._data = data
        super().__init__(**kwargs)

    def data_repr(self):
        from io import BytesIO

        im_file = BytesIO()
        self._data.save(im_file, format="PNG")
        im_bytes = im_file.getvalue()
        im_b64 = base64.b64encode(im_bytes)
        return "data:image/png;base64," + im_b64.decode("utf-8")

    def serialize(self):
        data = {**super().serialize(), 'src': self.data_repr()}
        del data['_data']
        return data

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

class SceneElement(Element):
    pass

class Pcd(SceneElement):
    tag = "Pcd"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

class Ply(SceneElement):
    tag = "Ply"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

class Glb(SceneElement):
    tag = "Glb"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

class PointCloud(SceneElement):
    tag = "PointCloud"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

class Gripper(SceneElement):
    tag = "Gripper"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)