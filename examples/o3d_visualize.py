# visualize ply using o3d
import json

import open3d as o3d
import numpy as np

pcd = o3d.io.read_point_cloud("pcds/label.ply")
gripper = o3d.io.read_point_cloud("pcds/gripper.ply")
# paint gripper red
gripper.paint_uniform_color([1, 0, 0])


# read in gripper position and rotations from jsonl
with open('output/2023-02-03_17-28-04/default.jsonl', 'r') as f:
    lines = f.readlines()
    labels = [json.loads(line) for line in lines]

label = labels[0]

vis_from_world_translation = np.array([0, 1.8, 0])
vis_from_world_rotation = np.array([-0.5 * np.pi, 0, -0.5 * np.pi])
vis_from_world = np.eye(4)
vis_from_world[:3, :3] = o3d.geometry.get_rotation_matrix_from_xyz(vis_from_world_rotation)
vis_from_world[:3, 3] = vis_from_world_translation

world_from_vis = np.linalg.inv(vis_from_world)

# make rotation matrix using open3d
rotation = label['rotation']
translation = label['position']

vis_gripper_mat = np.eye(4)

world_gripper_mat = world_from_vis @ vis_gripper_mat

# transform gripper
gripper.transform(world_gripper_mat)

o3d.visualization.draw_geometries([pcd, gripper])