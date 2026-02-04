from fnmatch import fnmatch
from io import BytesIO
from itertools import count
from pathlib import Path
from typing import Literal, Tuple, Union

import numpy as np
from PIL import Image as pil_image

from vuer.serdes import IMAGE_FORMATS
from vuer.types import Url

element_counter = count()


def omit(d, *patterns):
  """Omit keys from dictionary that match any of the glob patterns.

  :param d: Dictionary to filter
  :param patterns: Glob patterns to match keys against (e.g., "_*", "tag")
  :return: New dictionary with matching keys removed

  Example::

      omit({"foo": 1, "_bar": 2, "tag": 3}, "_*", "tag")
      # Returns: {"foo": 1}
  """
  result = {}
  for k, v in d.items():
    if not any(fnmatch(k, pattern) for pattern in patterns):
      result[k] = v
  return result


class Element:
  """
  Base class for all elements
  """

  tag: str = "div"

  def __post_init__(self, **kwargs):
    pass

  def __init__(self, *, key=None, **kwargs):
    self.key = key or getattr(self, "key", None) or str(next(element_counter))

    class_kwargs = omit(vars(self), "_*", "tag", "key")
    kwargs = {**class_kwargs, **kwargs}

    self.__dict__.update(tag=self.tag, key=self.key, **kwargs)
    self.__post_init__(**kwargs)

  def _serialize(self):
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
      elif isinstance(v, Url):
        output[k] = str(v)
      elif isinstance(v, Path):
        output[k] = str(v)
      else:
        output[k] = v

    return output


class BlockElement(Element):
  children: Tuple[Element]

  def __init__(self, *children, **kwargs):
    if children:
      self.children = children
    super().__init__(**kwargs)

  def _serialize(self):
    result = super()._serialize()
    if children := getattr(self, "children", None):
      result["children"] = [
        e if isinstance(e, str) else e._serialize() for e in children
      ]
    return result

class Iframe(BlockElement):
  tag = "iframe"

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


class Header1(BlockElement):
  """
  A Text element is an element that displays text.
  It is represented by a text, or p element in the DOM.
  """

  tag = "h1"


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


class span(Element):
  """
  A Text element is an element that displays text.
  It is represented by a text, or p element in the DOM.
  """

  tag = "Span"

  def __init__(self, *text, sep=" ", **kwargs):
    self.text = sep.join(text)
    super().__init__(**kwargs)


class Bold(span):
  def __post_init__(self, text, style=None, **_):
    _style = {"fontWeight": "bold"}
    _style.update(style or {})
    self.style = _style


class Italic(span):
  def __post_init__(self, text, style=None, **_):
    _style = {"fontStyle": "italic"}
    _style.update(style or {})
    self.style = _style


class Link(span):
  tag = "a"


class Button(Element):
  """
  A Button element is an element that allows the user to click on it.
  It is represented by a button element in the DOM.
  """

  tag = "Button"


class Slider(Element):
  """
  A Slider element is an element that allows the user to slide a value.
  It is represented by a slider element in the DOM.

  Args:
    :param min: Minimum value of the slider
    :param max: Maximum value of the slider
    :param step: Step size of the slider
    :param value: Initial value of the slider
    :param kwargs:
  """

  tag = "Slider"


class Img(Element):
  """
  An Image element that displays an image in the DOM.

  Supports multiple input formats: URL strings, local file paths, PIL Images,
  and numpy arrays. The image data is automatically converted to binary for
  efficient transfer.

  :param data: Image data as a file path (str), numpy array, or PIL Image.
    - str: Local file path, will be read and converted to binary.
    - np.ndarray: Image array (H, W, C). If dtype is not uint8, values are
      scaled by 255 and converted.
    - PIL.Image: PIL Image object, saved to binary format.
  :type data: str | np.ndarray | PIL.Image.Image, optional
  :param src: Direct URL or binary data. Cannot be used together with `data`.
  :type src: str | bytes, optional
  :param format: Output format for encoding. Defaults to "png".
  :type format: "png" | "jpeg" | "b64png" | "b64jpeg", optional
  :param quality: JPEG quality (1-100). Only used with jpeg format.
  :type quality: int, optional

  .. note::
      When used in multiple inheritance (e.g., ``ImagePlane(Img, SceneElement)``),
      ``Img.__init__`` takes precedence due to Python's MRO (Method Resolution Order).
      This ensures image data is properly processed before being passed to parent classes.

  Example Usage::

      from vuer.schemas import Img
      import numpy as np
      from PIL import Image as PILImage

      # From URL (pass directly to src)
      Img(src="https://example.com/image.png", key="url-img")

      # From local file path (reads and converts to binary)
      Img("/path/to/image.png", key="file-img")

      # From numpy array (H, W, C), uint8 or float [0-1]
      img_array = np.random.randint(0, 255, (480, 640, 3), dtype=np.uint8)
      Img(img_array, key="numpy-img")

      # From PIL Image
      pil_img = PILImage.open("/path/to/image.png")
      Img(pil_img, key="pil-img")

      # With JPEG format and quality
      Img(img_array, format="jpeg", quality=85, key="jpeg-img")
  """

  tag = "Img"

  def __init__(
    self,
    data: Union[str, Path, np.ndarray, pil_image.Image] = None,
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
      return

    elif isinstance(data, pil_image.Image):
      buff = BytesIO()
      assert not format.startswith("b64"), (
        "does not support base64 encoding, use binary."
      )
      data.save(buff, format=format)
      binary = buff.getbuffer().tobytes()
      # Pass image dimensions to __post_init__ so subclasses (e.g., Image)
      # can use them for geometry calculations without re-decoding the binary.
      # Allow explicit width/height kwargs to override the computed values.
      width, height = data.size
      super().__init__(src=binary, _width=width, _height=height, **kwargs)
      return

    elif isinstance(data, str) or isinstance(data, Path):
      buff = BytesIO()
      img = pil_image.open(data)
      assert not format.startswith("b64"), (
        "does not support base64 encoding, use binary."
      )
      img.save(buff, format=format)
      binary = buff.getbuffer().tobytes()
      # Pass image dimensions to __post_init__ so subclasses (e.g., Image)
      # can use them for geometry calculations without re-decoding the binary.
      # Allow explicit width/height kwargs to override the computed values.
      width, height = img.size
      super().__init__(src=binary, _width=width, _height=height, **kwargs)
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

      # Pass image dimensions to __post_init__ so subclasses (e.g., Image)
      # can use them for geometry calculations without re-decoding the binary.
      # numpy array shape is (H, W, C) or (H, W), so height=shape[0], width=shape[1]
      # Allow explicit width/height kwargs to override the computed values.
      height, width = data.shape[:2]
      super().__init__(src=src, _width=width, _height=height, **kwargs)
      return

    print("Warning: this should never be hit", src)
    super().__init__(src=src, **kwargs)


# class ImageUpload(Element):
#   """
#   A ImageUpload element is an element that allows the user to upload a file.
#   It is represented by a file upload element in the DOM.
#   """
#
#   tag = "ImageUpload"
#
#   def __init__(self, **kwargs):
#     super().__init__(**kwargs)
