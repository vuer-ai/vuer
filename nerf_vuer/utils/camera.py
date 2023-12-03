import numpy as np
import torch
from typing import List, Dict

from instant_feature.cameras.cameras import Cameras, THREE_CAMERA_MODEL_TO_TYPE, CameraType


def focal_len(fov: float, image_height: int):
    """Convert Field of View (FOV) in degrees, to the focal length
    of a three.js perspective camera (in pixels).

    Args:
        fov: the field of view of the camera in degrees.
        image_height: the height of the image in pixels.
    """

    pp_h = image_height / 2.0
    focal_length = pp_h / np.tan(fov * np.pi / 360.0)
    return focal_length


def get_camera_from_three(poses: List[Dict], width=1280, height=720) -> Cameras:
    """Get camera object from three.js camera objects"""
    import pandas as pd

    df = pd.DataFrame(poses)

    ctype = [THREE_CAMERA_MODEL_TO_TYPE[t] for t in df["type"].values]
    matrices = np.stack(df["matrix"].values)

    cmatrix = torch.FloatTensor(matrices).reshape(-1, 4, 4)
    cmatrix.transpose_(1, 2)
    c2w = torch.stack(
        [
            cmatrix[:, 0],
            cmatrix[:, 2],
            cmatrix[:, 1],
            cmatrix[:, 3],
        ],
        dim=1,
    )
    c2w = c2w[:, :3, :]
    c2w = torch.stack([c2w[:, 0], c2w[:, 2], c2w[:, 1]], dim=1)

    config = []
    for i, c in enumerate(ctype):
        row = df.iloc[i]
        progressive = row.get("progressive", 1)
        if c == CameraType.PERSPECTIVE:
            fov = row["fov"]
            config.append(
                dict(
                    fx=focal_len(fov, height),
                    fy=focal_len(fov, height),
                    cx=width / 2,
                    cy=height / 2,
                    progressive=progressive,
                )
            )
        elif c == CameraType.ORTHOGRAPHIC:
            zoom = row["zoom"]
            orbit_distance = row["orbit_distance"]
            config.append(
                dict(
                    # Not sure why this is missing a factor of 2.
                    fx=height / zoom,
                    fy=height / zoom,
                    cx=width / 2,
                    cy=height / 2,
                    progressive=progressive,
                )
            )
        else:
            raise ValueError(f"Camera model {c} not yet implemented.")

    config_df = pd.DataFrame(config)

    cam = Cameras(
        fx=torch.Tensor(config_df["fx"].values),
        fy=torch.Tensor(config_df["fy"].values),
        cx=torch.Tensor(config_df["cx"].values),
        cy=torch.Tensor(config_df["cy"].values),
        camera_to_worlds=c2w,
        camera_type=ctype,
    )
    # want to remove this.
    progressive_ratio = torch.Tensor(config_df["progressive"].values)
    cam.rescale_output_resolution(progressive_ratio)
    return cam
