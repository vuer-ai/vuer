from io import BytesIO
from typing import Union, Literal

import numpy as np
from PIL import Image as pil_image

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
        src: Union[str, bytes] = None,
        format: Literal["png", "jpeg", "b64png", "b64jpeg"] = "png",
        quality: int = None,
        **kwargs,
    ):
        if src is not None:
            assert data is None, "data and src can not be truthy at the same time"
            super().__init__(src=src, **kwargs)
            return

        elif data is None or isinstance(data, list) and len(data) == 0:
            super().__init__(**kwargs)
            return

        elif isinstance(data, pil_image.Image):
            buff = BytesIO()
            assert not format.startswith(
                "b64"
            ), "does not support base64 encoding, use binary."
            data.save(buff, format=format)
            binary = buff.getbuffer().tobytes()
            super().__init__(src=binary, **kwargs)
            return

        elif isinstance(data, str):
            buff = BytesIO()
            img = pil_image.open(data)
            assert not format.startswith(
                "b64"
            ), "does not support base64 encoding, use binary."
            img.save(buff, format=format)
            binary = buff.getbuffer().tobytes()
            super().__init__(src=binary, **kwargs)
            return

        if isinstance(data, np.ndarray):
            if data.dtype == np.uint8:
                pass
            else:
                data = (data * 255).astype(np.uint8)

            if quality is not None:
                src = IMAGE_FORMATS[format](data, quality=quality)
            else:
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
