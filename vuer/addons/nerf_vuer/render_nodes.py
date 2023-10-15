"""
RenderComponents are view components that respond to camera movements in the frontend
that returns rendered images
"""
import base64
from abc import abstractmethod
from collections import deque
from copy import deepcopy
from io import BytesIO

import numpy as np
import png
import torch
from PIL import Image
from torch import Tensor
from torchtyping import TensorType


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


class Singleton(deque):
    def __init__(self, sequence=None):
        super().__init__(sequence or [], maxlen=1)
        self.__post_init__()

    @abstractmethod
    def __post_init__(self):
        pass


class RGBA(Singleton):
    @staticmethod
    def rgb(raw_rgb: TensorType["hwc"], **pipeline):
        # only needed for PNG images
        # image_c = torch.cat([raw_rgb, raw_accumulation], dim=-1)
        # encoded = b64jpg(image_c)
        encoded = b64jpg(raw_rgb)
        return {"rgb": encoded, "raw_rgb": raw_rgb, **pipeline}

    @staticmethod
    def alpha(raw_accumulation: Tensor, alpha_threshold=None, **pipeline):
        if alpha_threshold is not None:
            raw_accumulation[raw_accumulation < alpha_threshold] = 0

        return {
            "alpha": b64jpg(raw_accumulation),
            "raw_accumulation": raw_accumulation,
            **pipeline,
        }

    @staticmethod
    def depth(raw_depth: TensorType["hwc"], raw_accumulation, settings, **pipeline):
        # con
        cmap = _get_colormap(**settings)

        alphaThreshold = settings.get("alphaThreshold", None)

        if alphaThreshold is None:
            mask = None
        else:
            mask = (raw_accumulation > alphaThreshold).squeeze().cpu()

        depthmap = cmap(raw_depth.squeeze().cpu().numpy(), mask)[:, :, :3]
        depthmap = torch.Tensor(depthmap).to(raw_depth.device)

        return {
            "depth": b64png(depthmap),
            "raw_depth": raw_depth,
            "raw_accumulation": raw_accumulation,
            **pipeline,
        }

    def cache(self, raw_rgb, raw_accumulation, **pipeline):
        rgba = torch.cat([raw_rgb, 255 * raw_accumulation], dim=-1).clip(0, 255).cpu().numpy().astype(np.uint8)
        self.append(rgba)

        return {
            "raw_rgb": raw_rgb,
            "raw_accumulation": raw_accumulation,
            **pipeline,
        }


def _get_colormap(colormap, invert=False, useClip=True, clip: tuple = None, gain=1.0, normalize=False, **_):
    """
    https://matplotlib.org/3.1.0/tutorials/colors/colormaps.html
    get color map from matplotlib
    returns color_map function with signature (x, mask=None),
    where mask is the mask-in for the colormap.

    """
    import matplotlib.cm as cm

    cmap = cm.get_cmap(colormap + "_r" if invert else colormap)

    def map_color(x, mask=None):
        if useClip and clip is not None:
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


class FeatA(Singleton):
    """Cache for Feature and Alpha Channel. Contains two caches, self, and low_res_cache.
    The low-res cache is for the low-res feature map.

    Self is the flat cache.
    """

    def __post_init__(self):
        self.pca = PCA()
        self.low_res_cache = deque(maxlen=1)

    def features_pca(self, raw_features, raw_accumulation, alpha=None, **pipeline):
        # print("feat_pca.shape:", raw_features.shape)
        feat_pca = self.pca(raw_features, dim=3)
        feat_pca_flat = feat_pca.reshape(-1, 3)

        # these should be configurations
        low = torch.nanquantile(feat_pca_flat, 0.02, dim=0)
        top = torch.nanquantile(feat_pca_flat, 0.98, dim=0)

        feat_pca_normalized = 0.02 + 0.96 * (feat_pca - low) / (top - low)
        feat_pca_normalized.clip_(0, 1)

        if alpha is None:
            alpha = b64jpg(raw_accumulation)

        return {
            "features": b64jpg(feat_pca_normalized),
            "features_pca": feat_pca_normalized,
            "alpha": alpha,
            "raw_features": raw_features,
            "raw_accumulation": raw_accumulation,
            **pipeline,
        }

    def cache(self, features_pca, raw_accumulation, **pipeline):
        fpca_cuda = features_pca.to(raw_accumulation.device)
        feat_alpha = torch.cat([fpca_cuda, 255 * raw_accumulation], dim=-1).clip(0, 255).cpu().numpy().astype(np.uint8)
        self.append(feat_alpha)
        return {**pipeline}

    def cache_low_res(self, raw_features, **pipeline):
        from einops import rearrange

        h, w = raw_features.shape[:2]
        size = h * w - torch.isnan(raw_features).any(dim=-1).sum()
        ratio = float(120 / size) ** 0.5
        feat = rearrange(raw_features, "h w c -> 1 c h w")
        try:
            feat = torch.nn.functional.upsample(feat, scale_factor=ratio, mode="bilinear")
            feat = rearrange(feat, "1 c h w -> h w c")
            feat_flat = feat[~torch.isnan(feat).any(dim=-1)]
            self.low_res_cache.append(feat_flat)
            return {
                # note: remove [ raw_features, and features_pca ] from the flow to conserve memory
                **pipeline,
            }
        except Exception as e:
            print("upsample failed", e)
            return pipeline

    def reset_pca(self):
        self.pca.clear()


class HeatmapA(Singleton):
    """Cache for Feature and Alpha Channel. Contains two caches, self, and low_res_cache.
    The low-res cache is for the low-res feature map.

    Self is the flat cache.
    """

    def heatmap(self, raw_features, raw_accumulation, settings, **pipeline):
        from instant_feature.viewer.nerf_vuer.clip.clip_heatmap import get_lerf_text_map

        print("raw_features.shape:", raw_features.shape)
        print(settings)

        # case clip to tuple for hashability in the lru_cache.
        clip = settings.pop("clip", None)
        if clip is not None:
            clip = tuple(clip)

        text_map = get_lerf_text_map(
            **settings,
            device=raw_accumulation.device,
        )

        raw_features_cuda = raw_features.to(raw_accumulation.device)
        heatmap, mask = text_map(raw_features_cuda)
        del raw_features_cuda

        heatmap_normalized = heatmap
        # heatmap_normalized = deepcopy(raw_features)
        # heatmap_normalized.clip_(0, 1)
        print("heatmap_normalized.shape:", heatmap_normalized.shape)

        # final_mask = raw_accumulation * mask.float()[..., None]

        cmap = _get_colormap(clip=clip, **settings)
        heatmap_rgb = cmap(heatmap_normalized.cpu(), mask.cpu())[:, :, :3]
        heatmap_rgb = torch.FloatTensor(heatmap_rgb).to(raw_accumulation.device)

        mask_float = mask.float()[..., None]

        return {
            "heatmap": b64jpg(heatmap_rgb),
            "heatmap_mask": b64jpg(mask_float),
            "raw_heatmap": heatmap_rgb,
            "raw_heatmap_mask": mask_float,
            "raw_accumulation": raw_accumulation,
            **pipeline,
        }

    def cache(self, raw_heatmap, raw_heatmap_mask, **pipeline):
        print("cache")
        feat_alpha = torch.cat([raw_heatmap, 255 * raw_heatmap_mask], dim=-1).clip(0, 255).cpu().numpy().astype(np.uint8)
        print("done caching")
        self.append(feat_alpha)
        return {**pipeline}


# async def pca_reset_handler(event: "ClientEvent", send):
#     print("clearing the pca cache")
#     get_pca.clear()


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
