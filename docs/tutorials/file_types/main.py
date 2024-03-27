import os
import random
from asyncio import sleep

import numpy as np
import trimesh
import yaml

from vuer import Vuer, VuerSession
from vuer.schemas import Sphere, Glb

global counter
import cv2
import PIL.Image as PImage
from io import BytesIO

YAML_PATH = "layout.yaml"
FOV = 60
SCALE = 1
SEED = 42
WIDTH = 200
HEIGHT = 200

np.random.seed(SEED)
random.seed(SEED)
CENTER = (0, 0, 0)

# Prepare output JSON file
json_data_out = {}

aspect = WIDTH / HEIGHT
foh = np.deg2rad(FOV)
h = 2 * np.sin(foh / 2)
w = aspect * h
fov = 2 * np.arcsin(w / 2)

json_data_out["camera_angle_x"] = fov
json_data_out["frames"] = []

CONVERSION_INDICES = [0, 4, 8, 12, 1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15]


def colmap2three(mat):
    """Converts a 4x4 colmap matrix to a three.js matrix"""
    return np.array(mat)[CONVERSION_INDICES]


def pos_to_rot(p, degrees=True):
    """Compute yaw and pitch of a position that points it towards the origin"""
    yaw = np.arctan2(p[1], p[0])
    pitch = np.arctan2(p[2], (p[0] * p[0] + p[1] * p[1]) ** (0.5))
    if degrees:
        return {"pitch": np.rad2deg(pitch), "yaw": np.rad2deg(yaw)}
    else:
        return {"pitch": pitch, "yaw": yaw}


def scale_extrinsics(extrinsics, scale):
    scaled_matrix = np.copy(extrinsics)
    scaled_matrix[:3, 3] *= scale
    return scaled_matrix


def save_render(buff, prefix, filename):
    # we send jpg, you can dump the file buffer directly to disk (as jpg).
    pil_image = PImage.open(BytesIO(buff))
    img = np.array(pil_image)
    img_bgr = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    cv2.imwrite(os.path.join(prefix, filename), img_bgr)


def calculate_scale_factor(original_size, bounding_box):
    original_max_dimension = max(original_size)
    bounding_box_max_dimension = max(bounding_box)
    scale_factor = bounding_box_max_dimension / original_max_dimension
    return scale_factor


app = Vuer(static_root="assets")
sphere = Sphere(
    args=[30, 32, 32],
    materialType="standard",
    material=dict(
        map="http://localhost:8012/static/water_background.jpg",
        side=1,
    ),
    position=[0, 0, 0],
    up=[0, 0, 1],
)


@app.spawn(start=True)
async def main(session: VuerSession):
    session.remove("default-grid")
    session.upsert @ sphere
    session.upsert @ Glb(
        src="http://localhost:8012/static/black_cube.glb",
        # color="red",
        materialType="standard",
        material=dict(color="red", side=0),
        rotation=[np.pi / 2, 0, 0],
    )
    # Load the YAML file
    with open(YAML_PATH, "r") as file:
        layout_data = yaml.safe_load(file)

    # Process each object in the living room
    for item in layout_data["objects"]:
        mesh = trimesh.load_mesh(item["filename"])
        bounding_box = mesh.bounding_box_oriented
        original_size = bounding_box.extents
        position = [item["position"][0], item["position"][1], 0]
        filename = os.path.join(
            "http://localhost:8012/static", item["filename"].split("/")[-1]
        )
        bounding_box = item["size"]
        factor = calculate_scale_factor(original_size, bounding_box)
        session.upsert @ Glb(
            src=filename,
            scale=factor,
            position=position,
            rotation=[np.pi / 2, 0, 0],
            materialType="standard",
            material=dict(color="yellow", side=0),
        )

    await sleep(2.0)

    # keep the main session alive.
    while True:
        await sleep(1)
