"""
RenderComponents are view components that respond to camera movements in the frontend
that returns rendered images
"""
import base64
from io import BytesIO

import numpy as np
import png
import torch
from PIL import Image
from torch import Tensor
from torchtyping import TensorType

from instant_feature.viewer.render_utils import get_camera_from_three


class Chainer:
    def __init__(self, *fns):
        self.fns = fns

    def thunk(self, **pipe):
        for fn in self.fns:
            try:
                pipe = fn(**pipe)
            except Exception as e:
                print(fn)
                raise e
        return pipe

    def __call__(self, **pipe):
        return self.thunk(**pipe)


def pose(height, width, **pipeline):
    camera_poses = get_camera_from_three([camera], width, height)
    return {"camera_poses": camera_poses, **pipeline}


def rgb(raw_rgb: TensorType["hwc"], raw_accumulation, **pipeline):
    image_c = torch.cat([raw_rgb, raw_accumulation], dim=-1)
    encoded = b64jpg(image_c)
    return {"rgb": encoded, "raw_rgb": raw_rgb, "raw_accumulation": raw_accumulation, **pipeline}


def alpha(raw_accumulation: Tensor, alpha_threshold=None, **pipeline):
    if alpha_threshold is not None:
        raw_accumulation[raw_accumulation < alpha_threshold] = 0

    return {
        "alpha": b64jpg(raw_accumulation),
        "raw_accumulation": raw_accumulation,
        **pipeline,
    }


def monochrome(image, colormap, normalize, clip, gain, alpha_np, **pipeline):
    # assert image.shape[-1] == 1 and colormap is not None, "Invalid colormap for depth"
    # cmap = get_colormap(colormap, normalize=normalize, clip=clip, gain=gain)
    # # Need to ignore nans and infs
    # mask = ~torch.isnan(image) & ~torch.isinf(image)
    # mask = mask.squeeze().cpu().numpy()
    # image_c = cmap(image.cpu().numpy(), mask=mask)[:, :, 0, :]
    # # Set alphas
    # image_c[:, :, 3] = alpha_np.squeeze()
    # # Set unmasked pixels to 0 RGBA
    # image_c[~mask] = 0
    # return image_c
    pass


def features(raw_rgb, raw_accumulation, **pipeline):
    # Apply PCA projection to non-nan features
    # not_nan = ~torch.isnan(image).any(dim=-1)
    # rgb = torch.zeros((*image.shape[:2], 3)).to(Worker.device)
    # rgb[not_nan], info["pca_proj"], info["pca_min"], info["pca_max"] = apply_pca_colormap_return_proj(
    #     image[not_nan], proj_V=info["pca_proj"], low_rank_min=info["pca_min"], low_rank_max=info["pca_max"]
    # )
    # image = torch.cat([rgb, alpha], dim=-1)
    # image = image.cpu().numpy()
    # return image
    return {"raw_rgb": raw_rgb, "raw_accumulation": raw_accumulation, **pipeline}


def b64jpg(image: Tensor, quality: int = 90):
    """
    base64 encode the image into a string, using JPEG encoding

    Does not support transparency.
    """
    # remove alpha channel
    if len(image.shape) == 3:
        image = image[:, :, :3]

    image *= 255
    image_np = image.cpu().numpy().astype(np.uint8)
    image_np.max()

    C = image_np.shape[-1]
    if C == 1:
        image_np = image_np[:, :, 0]

    buff = BytesIO()
    rgb_pil = Image.fromarray(image_np)
    rgb_pil.save(buff, format="JPEG", quality=quality)
    img64 = base64.b64encode(buff.getbuffer().tobytes()).decode("utf-8")
    return "data:image/jpeg;base64," + img64


def b64png(image: Tensor):
    """
    base64 encode the image into a string, using PNG encoding
    """
    # supports alpha channel
    image *= 255
    image_np = image.cpu().numpy().astype(np.uint8)

    buff = BytesIO()
    rgb_pil = Image.fromarray(image_np)
    rgb_pil.save(buff, format="PNG")
    img64 = base64.b64encode(buff.getbuffer().tobytes()).decode("utf-8")
    return img64


def b64png_depth(depth):
    # base64 encode depth map into a string
    raise NotImplementedError

    buff = BytesIO()

    depth *= 32767
    depth[depth > 65535] = 65535
    im_uint16 = np.round(depth).astype(np.uint16)

    # PyPNG library can save 16-bit PNG and is faster than imageio.imwrite().
    w_depth = png.Writer(depth.shape[1], depth.shape[0], greyscale=True, bitdepth=16)
    w_depth.write(buff, np.reshape(im_uint16, (-1, depth.shape[1])))

    img64 = base64.b64encode(buff.getbuffer().tobytes()).decode("utf-8")
    return img64


def decode_b64png(b64: str) -> Image:
    """
    Decode a base64 encoded PNG image into a numpy array.
    """
    b64 = b64.split(",")[-1]
    buff = BytesIO(base64.b64decode(b64))
    img = Image.open(buff)
    return img
