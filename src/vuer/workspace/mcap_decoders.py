"""Built-in message decoders for McapWorkspace.

Decoder type: ``Callable[[bytes], tuple[bytes, str]]``
    ``(raw_data) -> (response_bytes, content_type)``

Each decoder wraps its optional import in a try/except, falling back to
``(data, "application/octet-stream")`` if the dependency is not installed.
"""

from __future__ import annotations

from typing import Callable, Dict

# Decoder signature: (raw_data: bytes) -> (response_bytes: bytes, content_type: str)
Decoder = Callable[[bytes], "tuple[bytes, str]"]


def _decode_compressed_image(data: bytes) -> tuple[bytes, str]:
    """Decode sensor_msgs/CompressedImage using rosbags CDR deserializer.

    Extracts the JPEG/PNG bytes from the ROS2 CompressedImage message and
    returns the appropriate MIME type based on the ``.format`` field.
    """
    try:
        from rosbags.typesys import Stores, get_typestore

        typestore = get_typestore(Stores.ROS2_HUMBLE)
        msg = typestore.deserialize_cdr(data, "sensor_msgs/msg/CompressedImage")
        fmt = msg.format.lower().strip()
        if "jpeg" in fmt or "jpg" in fmt:
            content_type = "image/jpeg"
        elif "png" in fmt:
            content_type = "image/png"
        else:
            content_type = f"image/{fmt}"
        return bytes(msg.data), content_type
    except ImportError:
        return data, "application/octet-stream"


def _decode_raw_image(data: bytes) -> tuple[bytes, str]:
    """Decode sensor_msgs/Image using rosbags CDR and re-encode as JPEG.

    Converts raw pixel data to a JPEG image using Pillow.
    Supports rgb8, bgr8, rgba8, and mono8 encodings.
    """
    try:
        import io

        import numpy as np
        from PIL import Image
        from rosbags.typesys import Stores, get_typestore

        typestore = get_typestore(Stores.ROS2_HUMBLE)
        msg = typestore.deserialize_cdr(data, "sensor_msgs/msg/Image")

        encoding = msg.encoding.lower()
        raw = bytes(msg.data)
        height, width = msg.height, msg.width

        if encoding in ("rgb8", "rgb"):
            arr = np.frombuffer(raw, dtype=np.uint8).reshape(height, width, 3)
            img = Image.fromarray(arr, "RGB")
        elif encoding in ("bgr8", "bgr"):
            arr = np.frombuffer(raw, dtype=np.uint8).reshape(height, width, 3)
            arr = arr[:, :, ::-1]  # BGR -> RGB
            img = Image.fromarray(arr, "RGB")
        elif encoding in ("rgba8", "rgba"):
            arr = np.frombuffer(raw, dtype=np.uint8).reshape(height, width, 4)
            img = Image.fromarray(arr, "RGBA")
        elif encoding in ("mono8", "8uc1"):
            arr = np.frombuffer(raw, dtype=np.uint8).reshape(height, width)
            img = Image.fromarray(arr, "L")
        else:
            return raw, "application/octet-stream"

        buf = io.BytesIO()
        img.convert("RGB").save(buf, format="JPEG")
        return buf.getvalue(), "image/jpeg"
    except ImportError:
        return data, "application/octet-stream"


def _decode_json(data: bytes) -> tuple[bytes, str]:
    """Passthrough decoder for JSON/jsonschema messages."""
    return data, "application/json"


def _decode_fallback(data: bytes) -> tuple[bytes, str]:
    """Fallback decoder: returns raw bytes with octet-stream content-type."""
    return data, "application/octet-stream"


# Built-in decoder registry keyed by schema name or schema encoding.
BUILTIN_DECODERS: Dict[str, Decoder] = {
    "sensor_msgs/CompressedImage": _decode_compressed_image,
    "sensor_msgs/msg/CompressedImage": _decode_compressed_image,
    "sensor_msgs/Image": _decode_raw_image,
    "sensor_msgs/msg/Image": _decode_raw_image,
    "jsonschema": _decode_json,
    "json": _decode_json,
}
