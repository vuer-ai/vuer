import base64
from io import BytesIO
from typing import Sequence

from PIL import Image as pil_image


def serializer(data):
    if hasattr(data, "serialize"):
        return data.serialize()

    if isinstance(data, str):
        # return Text(data)
        return data

    # this could be dangerous.
    if isinstance(data, list):
        return [serializer(d) for d in data]

    # this could be dangerous.
    if isinstance(data, tuple):
        return [serializer(d) for d in data]

    return data

    # note: we do not need the custom serializer anymore
    #
    # if isinstance(data, str):
    #     # return Text(data)
    #     return data
    #
    # # this could be dangerous.
    # if isinstance(data, Sequence):
    #     return [serializer(d) for d in data]
    #
    # # this could be dangerous
    # if isinstance(data, dict):
    #     return {k: serializer(v) for k, v in data.items()}
    #
    # return data
    # # raise NotImplementedError(f"Cannot serialize {data}")


def jpeg(image, quality: int = 90):
    """
    base64 encode the image into a string, using JPEG encoding

    Does not support transparency.
    """
    with BytesIO() as buff:
        rgb_pil = pil_image.fromarray(image)
        if image.shape.__len__() == 2 or image.shape[2] == 1:
            rgb_pil = rgb_pil.convert("L")
        rgb_pil.save(buff, format="JPEG", quality=quality)
        return buff.getbuffer().tobytes()


def png(image):
    """
    base64 encode the image into a string, using PNG encoding
    """
    with BytesIO() as buff:
        rgb_pil = pil_image.fromarray(image)
        rgb_pil.save(buff, format="PNG")
        return buff.getbuffer().tobytes()


def b64jpeg(image, quality: int = 90):
    """
    base64 encode the image into a string, using JPEG encoding

    Does not support transparency.
    """
    buff = BytesIO()
    rgb_pil = pil_image.fromarray(image)
    if image.shape.__len__() == 2 or image.shape[2] == 1:
        rgb_pil = rgb_pil.convert("L")
    rgb_pil.save(buff, format="JPEG", quality=quality)
    img64 = base64.b64encode(buff.getbuffer().tobytes()).decode("utf-8")
    return "data:image/jpeg;base64," + img64


def b64png(image):
    """
    base64 encode the image into a string, using PNG encoding
    """
    with BytesIO() as buff:
        rgb_pil = pil_image.fromarray(image)
        rgb_pil.save(buff, format="PNG")
        img64 = base64.b64encode(buff.getbuffer().tobytes()).decode("utf-8")
        return "data:image/png;base64," + img64


IMAGE_FORMATS = {
    "jpeg": jpeg,
    "png": png,
    "b64jpeg": b64jpeg,
    "b64png": b64png,
}
