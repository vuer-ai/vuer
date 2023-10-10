"""
RenderComponents are view components that respond to camera movements in the frontend
that returns rendered images
"""
import base64
from io import BytesIO

import numpy as np
import png
import torch
from einops import rearrange
from PIL import Image
from torch import Tensor
from torchtyping import TensorType

from instant_feature.viewer.render_utils import get_camera_from_three


class Chainer:
    def __init__(self, *fns):
        """Chainer is a function that chains multiple functions together

        Example:

            I have functions fn_1 and fn_2, both are "render nodes" for processing the rendered output from the nerf.
            I can use Chainer to chain them together:

            chained = Chainer(fn_1, fn_2)
            chained(**pipeline) gives fn_1(fn_2(**pipeline))

        """
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


# def pose(height, width, **pipeline):
#     camera_poses = get_camera_from_three([camera], width, height)
#     return {"camera_poses": camera_poses, **pipeline}


def rgb(raw_rgb: TensorType["hwc"], **pipeline):
    # only needed for PNG images
    # image_c = torch.cat([raw_rgb, raw_accumulation], dim=-1)
    # encoded = b64jpg(image_c)
    encoded = b64jpg(raw_rgb)
    return {"rgb": encoded, "raw_rgb": raw_rgb, **pipeline}


def alpha(raw_accumulation: Tensor, alpha_threshold=None, **pipeline):
    if alpha_threshold is not None:
        raw_accumulation[raw_accumulation < alpha_threshold] = 0

    return {
        "alpha": b64jpg(raw_accumulation),
        "raw_accumulation": raw_accumulation,
        **pipeline,
    }


def _get_colormap(colormap, invert, clip=None, gain=1.0, normalize=False, **_):
    """
    https://matplotlib.org/3.1.0/tutorials/colors/colormaps.html
    get color map from matplotlib
    returns color_map function with signature (x, mask=None),
    where mask is the mask-in for the colormap.

    """
    import matplotlib.cm as cm

    cmap = cm.get_cmap(colormap + "_r" if invert else colormap)

    def map_color(x, mask=None):
        if clip is not None:
            x = x.clip(*clip)

        if gain is not None:
            x *= gain

        if normalize:
            if mask is None or mask.sum() == 0:
                min, max = x.min(), x.max()
            else:
                min, max = x[mask].min(), x[mask].max()

            x -= min
            x /= max - min + 1e-6
            x[x < 0] = 0

        return cmap(x)

    return map_color


def depth(raw_depth: TensorType["hwc"], render, settings, **pipeline):
    # con
    cmap = _get_colormap(**settings)
    heatmap = cmap(raw_depth.cpu().numpy())[:, :, :3]
    encoded = b64png(heatmap)
    return {
        "depth": encoded,
        "raw_depth": raw_depth,
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


def nan_prune(t):
    """Drop all rows containing any nan:"""
    t = t[~torch.any(t.isnan(), dim=-1)]
    return t


class PCA:
    proj = None

    def clear(self):
        self.proj = None

    def __call__(self, raw_features, dim=3, center=True):
        """no batch dimension."""
        *shape, c = raw_features.shape
        feat_flat = raw_features.reshape(-1, c)

        if self.proj is None:
            print("Computing the PCA")
            feat_nan_free = nan_prune(feat_flat)
            # we can not use this u because it is potentially has the nans removed.
            u, diag, self.proj = torch.pca_lowrank(feat_nan_free, q=dim, center=center)
        else:
            print("Using cached PCA")

        u = raw_features @ self.proj
        return u


get_pca = PCA()


def features_pca(raw_features, raw_accumulation, **pipeline):
    # print("feat_pca.shape:", raw_features.shape)
    feat_pca = get_pca(raw_features, dim=3)
    feat_pca_flat = feat_pca.reshape(-1, 3)

    # these should be configurations
    low = torch.nanquantile(feat_pca_flat, 0.02, dim=0)
    top = torch.nanquantile(feat_pca_flat, 0.98, dim=0)

    feat_pca_normalized = 0.02 + 0.96 * (feat_pca - low) / (top - low)
    feat_pca_normalized.clip_(0, 1)

    return {
        "features": b64jpg(feat_pca_normalized),
        "features_pca": feat_pca_normalized,
        "raw_features": raw_features,
        "raw_accumulation": raw_accumulation,
        **pipeline,
    }


async def pca_reset_handler(event: "ClientEvent", send):
    print("clearing the pca cache")
    get_pca.clear()


def b64jpg(image: Tensor, quality: int = 90):
    """
    base64 encode the image into a string, using JPEG encoding

    Does not support transparency.
    """
    # remove alpha channel
    if len(image.shape) == 3:
        image = image[:, :, :3]

    image *= 255

    if isinstance(image, np.ndarray):
        image_np = image.astype(np.uint8)
    else:
        image_np = image.cpu().numpy().astype(np.uint8)

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
    return "data:image/png;base64," + img64


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
