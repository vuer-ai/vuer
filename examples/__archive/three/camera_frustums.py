import json
import math
from functools import lru_cache
from time import sleep

import numpy as np
import yaml

from vuer import Vuer
from vuer.events import Set, Update, Frame, END
from vuer.schemas import (
    Scene,
    Ply,
    Gripper,
    SkeletalGripper,
    Frustum,
    Html,
    Text,
    Image,
    group,
    Glb,
    Pivot,
    div,
    Paragraph,
    # Instances,
)

from tqdm import tqdm


def colmap_to_three(m):
    """Converts a 3x4 colmap camera matrix to a 4x4 three.js camera matrix."""
    matrix = np.array(m).reshape(4, 4)
    return matrix.T.flatten().tolist()


doc = Vuer(
    ws="ws://localhost:8013",
    # domain="http://localhost:8000/tassa",
    # domain="http://localhost:8000/demos/vqn-dash/three",
    domain="http://dash.ml/demos/vqn-dash/three",
    reconnect=True,
    debug=True,
)

# dataset = f"/Users/ge/datasets/rooms/ei_stairway_v1"
dataset = f"/instant-feature/datasets/rooms_dpvo/davis_lab_v1"
# dataset = f"/instant-feature/datasets/rooms_dpvo/ei_stairway_v1"
# dataset = f"/instant-feature/datasets/rooms_dpvo/shelf_in_room_v5"
# dataset = f"/instant-feature/datasets/rooms_dpvo/whiteboard_v1"
# dataset = f"/instant-feature/datasets/slam/experiments/ycb_v0_small"
# from ml_logger import logger

# with open(dataset + "/transforms.json", "r") as f:
#     transforms = json.load(f)
# print(transforms)
from ml_logger import logger

transforms = logger.load_json(dataset + "/transforms.json")
poses = sorted(transforms["frames"], key=lambda x: x["file_path"])


# for pose in poses:
#     pose["file_path"] = pose["file_path"].replace("source", "images")
#
# logger.duplicate(dataset + "/transforms.json", dataset + "/transforms.json.bk")
# logger.save_json(transforms, dataset + "/transforms.json")


# doc = Tassa(reconnect=True)
# this is blocking because it autostarts.
@doc.bind(start=True)
def show_heatmap():
    scene = Scene(
        # Frustum(fov=75, far=20, aspect=1.6, position=[0, 1, 1], rotation=[0, 0, 0], helper=True, default=False),
        # Ply(
        #     src="https://escher.ge.ngrok.io/files/william/nerfstudio/correspondences/2023-01-20_23-08-27/orange/mask_in.ply",
        #     position=[0, 0.4, 0],
        #     rotation=[-0.5 * np.pi, 0, -0.5 * np.pi],
        # ),
        # Gripper(pinchWidth=0.04, skeleton=False, axes=True, position=[0, 0.2, 0], key="gripper"),
        # SkeletalGripper(movable=True, pinchWidth=0.04, position=[0, 0.2, 0], key="skeleton"),
        group(key="cameras"),
    )

    event = yield Set(scene)
    assert event == "INIT"

    sleep(2.0)

    cameras = []
    for i, pose in enumerate(tqdm(poses)):
        matrix = colmap_to_three(pose["transform_matrix"])
        camera = Frustum(
            matrix=matrix,
            showUp=i % 5 == 0,
            showFrustum=False,
            showFocalPlane=False,
            showImagePlane=True,
            scale=10,
            near=0.08,
            far=0.2,
            fov=75,
            key=f"camera_{i}",
        )
        cameras.append(camera)

    event = yield Frame(
        Update(
            # Text(f"hahahha   {i}", key="debug-prompt"),
            group(*list(cameras)[::1], key="cameras"),
        )
    )

    sleep(1000)
