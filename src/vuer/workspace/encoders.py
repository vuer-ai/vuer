"""Image encoding utilities for serving in-memory images via Workspace.

Provides functions to encode numpy arrays or torch tensors as JPEG/PNG bytes
or base64 data URIs for embedding in HTML/JSON.

**Usage**::

    from vuer import Workspace, jpg, png

    ws = Workspace()
    ws.link(lambda: jpg(camera.frame), to="/live/frame.jpg")
    ws.link(lambda: png(depth_map), to="/depth.png")

**Functions**:

- ``jpg(image, quality=90)`` - Encode as JPEG bytes
- ``png(image)`` - Encode as PNG bytes (supports alpha)
- ``b64jpg(image, quality=90)`` - Encode as base64 JPEG data URI
- ``b64png(image)`` - Encode as base64 PNG data URI
- ``decode_b64png(b64)`` - Decode base64 PNG back to PIL Image

**Input format**:

Images should be numpy arrays or torch tensors with values in [0, 1] range.
Shape should be (H, W, C) where C is 1, 3, or 4 channels.
"""

import base64
from io import BytesIO
from typing import Union

import numpy as np
from PIL import Image

# Type alias for array-like inputs
ArrayLike = Union[np.ndarray, "torch.Tensor"]


def _to_uint8(image: ArrayLike) -> np.ndarray:
    """Convert image to uint8 numpy array.

    Handles both numpy arrays and torch tensors.
    Assumes input is in [0, 1] range.
    """
    # Convert torch tensor to numpy if needed
    if hasattr(image, "cpu"):
        image = image.cpu().numpy()

    # Scale to [0, 255] and convert to uint8
    image_np = (image * 255).astype(np.uint8)

    # Handle single-channel images
    if len(image_np.shape) == 3 and image_np.shape[-1] == 1:
        image_np = image_np[:, :, 0]

    return image_np


def jpg(image: ArrayLike, quality: int = 90) -> bytes:
    """Encode image as JPEG bytes.

    Does not support transparency - alpha channel is stripped.

    :param image: Image array (H, W, C) with values in [0, 1].
                 Can be numpy array or torch tensor.
    :param quality: JPEG quality (1-100). Default 90.
    :return: JPEG-encoded bytes.

    Example::

        frame = camera.capture()  # (480, 640, 3) tensor in [0, 1]
        data = jpg(frame, quality=85)

        # Use with Workspace
        ws.link(lambda: jpg(frame), to="/frame.jpg")
    """
    # Remove alpha channel if present
    if len(image.shape) == 3 and image.shape[-1] == 4:
        image = image[:, :, :3]

    image_np = _to_uint8(image)

    with BytesIO() as buff:
        pil_image = Image.fromarray(image_np)
        pil_image.save(buff, format="JPEG", quality=quality)
        buff.seek(0)
        return buff.read()


def png(image: ArrayLike) -> bytes:
    """Encode image as PNG bytes.

    Supports transparency (alpha channel).

    :param image: Image array (H, W, C) with values in [0, 1].
                 Can be numpy array or torch tensor.
    :return: PNG-encoded bytes.

    Example::

        rgba = render_with_alpha()  # (480, 640, 4) with alpha
        data = png(rgba)

        # Use with Workspace
        ws.link(lambda: png(depth_colormap), to="/depth.png")
    """
    image_np = _to_uint8(image)

    with BytesIO() as buff:
        pil_image = Image.fromarray(image_np)
        pil_image.save(buff, format="PNG")
        buff.seek(0)
        return buff.read()


def b64jpg(image: ArrayLike, quality: int = 90) -> str:
    """Encode image as base64 JPEG data URI.

    Returns a string that can be used directly in HTML img src
    or embedded in JSON responses.

    :param image: Image array (H, W, C) with values in [0, 1].
    :param quality: JPEG quality (1-100). Default 90.
    :return: Data URI string like "data:image/jpeg;base64,..."

    Example::

        src = b64jpg(frame)
        # Use in HTML: <img src="{src}">
    """
    data = jpg(image, quality=quality)
    encoded = base64.b64encode(data).decode("utf-8")
    return f"data:image/jpeg;base64,{encoded}"


def b64png(image: ArrayLike) -> str:
    """Encode image as base64 PNG data URI.

    Returns a string that can be used directly in HTML img src
    or embedded in JSON responses. Supports alpha channel.

    :param image: Image array (H, W, C) with values in [0, 1].
    :return: Data URI string like "data:image/png;base64,..."

    Example::

        src = b64png(rgba_image)
        # Use in HTML: <img src="{src}">
    """
    data = png(image)
    encoded = base64.b64encode(data).decode("utf-8")
    return f"data:image/png;base64,{encoded}"


def decode_b64png(b64: str) -> Image.Image:
    """Decode a base64 PNG data URI back to a PIL Image.

    :param b64: Base64 string, with or without data URI prefix.
    :return: PIL Image object.

    Example::

        img = decode_b64png(data_uri)
        arr = np.array(img) / 255.0  # Back to [0, 1] range
    """
    # Strip data URI prefix if present
    if "," in b64:
        b64 = b64.split(",")[-1]

    buff = BytesIO(base64.b64decode(b64))
    return Image.open(buff)
