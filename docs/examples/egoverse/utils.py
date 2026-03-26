"""Shared helpers for EgoVerse Zarr visualization.

Coordinate system notes:
    EgoVerse/Aria head pose: X-right, Y-down, Z-forward (OpenCV-like)
    Three.js:                X-right, Y-up,   Z-backward

    Camera conversion: T_threejs = T_aria @ diag(1, -1, -1, 1)
    This flips Y (down→up) and Z (forward→backward) simultaneously,
    equivalent to a 180° rotation around the local X axis.

    The SLAM world frame is NOT gravity-aligned. We compute a gravity
    alignment rotation from the average head orientation.
"""

import numpy as np
from scipy.spatial.transform import Rotation as R

# Flip Y and Z: converts Aria (Y-down, Z-forward) to Three.js (Y-up, Z-backward)
_ARIA_TO_THREEJS = np.diag([1.0, -1.0, -1.0, 1.0])

# Aria 21-keypoint hand skeleton connections.
#
# Aria ordering (from projectaria_tools HandLandmark enum):
#   0  Thumb Fingertip         (WebXR: thumb-tip)
#   1  Index Fingertip         (WebXR: index-finger-tip)
#   2  Middle Fingertip        (WebXR: middle-finger-tip)
#   3  Ring Fingertip          (WebXR: ring-finger-tip)
#   4  Pinky Fingertip         (WebXR: pinky-finger-tip)
#   5  Wrist                   (WebXR: wrist)
#   6  Thumb Intermediate      (WebXR: thumb-phalanx-proximal)
#   7  Thumb Distal            (WebXR: thumb-phalanx-distal)
#   8  Index Proximal          (WebXR: index-finger-phalanx-proximal)
#   9  Index Intermediate      (WebXR: index-finger-phalanx-intermediate)
#  10  Index Distal            (WebXR: index-finger-phalanx-distal)
#  11  Middle Proximal         (WebXR: middle-finger-phalanx-proximal)
#  12  Middle Intermediate     (WebXR: middle-finger-phalanx-intermediate)
#  13  Middle Distal           (WebXR: middle-finger-phalanx-distal)
#  14  Ring Proximal           (WebXR: ring-finger-phalanx-proximal)
#  15  Ring Intermediate       (WebXR: ring-finger-phalanx-intermediate)
#  16  Ring Distal             (WebXR: ring-finger-phalanx-distal)
#  17  Pinky Proximal          (WebXR: pinky-finger-phalanx-proximal)
#  18  Pinky Intermediate      (WebXR: pinky-finger-phalanx-intermediate)
#  19  Pinky Distal            (WebXR: pinky-finger-phalanx-distal)
#  20  Palm Center             (no WebXR equivalent)
#
# vs WebXR (25 joints): adds 4 metacarpal joints (indices 1, 5, 10, 15, 20 in WebXR)
#   that Aria does not track. WebXR also lacks Palm Center.
ARIA_HAND_CONNECTIONS = [
    # Thumb: wrist → intermediate → distal → tip
    (5, 6), (6, 7), (7, 0),
    # Index: wrist → proximal → intermediate → distal → tip
    (5, 8), (8, 9), (9, 10), (10, 1),
    # Middle: wrist → proximal → intermediate → distal → tip
    (5, 11), (11, 12), (12, 13), (13, 2),
    # Ring: wrist → proximal → intermediate → distal → tip
    (5, 14), (14, 15), (15, 16), (16, 3),
    # Pinky: wrist → proximal → intermediate → distal → tip
    (5, 17), (17, 18), (18, 19), (19, 4),
    # Palm: across proximal joints
    (8, 11), (11, 14), (14, 17),
    # Wrist to palm center
    (5, 20),
]
ARIA_WRIST_INDEX = 5
ARIA_FINGERTIP_INDICES = [0, 1, 2, 3, 4]

# MediaPipe 21-keypoint hand skeleton connections.
# Used by Mecka, Scale, and other non-Aria embodiments.
#   0=Wrist, 1=ThumbCMC, 2=ThumbMCP, 3=ThumbIP, 4=ThumbTip,
#   5=IndexMCP, 6=IndexPIP, 7=IndexDIP, 8=IndexTip,
#   9=MiddleMCP, ... 20=PinkyTip
MEDIAPIPE_HAND_CONNECTIONS = [
    # Thumb: wrist → CMC → MCP → IP → tip
    (0, 1), (1, 2), (2, 3), (3, 4),
    # Index: wrist → MCP → PIP → DIP → tip
    (0, 5), (5, 6), (6, 7), (7, 8),
    # Middle
    (0, 9), (9, 10), (10, 11), (11, 12),
    # Ring
    (0, 13), (13, 14), (14, 15), (15, 16),
    # Pinky
    (0, 17), (17, 18), (18, 19), (19, 20),
    # Palm: across MCP joints
    (5, 9), (9, 13), (13, 17),
]
MEDIAPIPE_WRIST_INDEX = 0
MEDIAPIPE_FINGERTIP_INDICES = [4, 8, 12, 16, 20]

# Embodiment → connection table mapping
_EMBODIMENT_CONNECTIONS = {
    "aria": (ARIA_HAND_CONNECTIONS, ARIA_WRIST_INDEX, ARIA_FINGERTIP_INDICES),
}
_DEFAULT_CONNECTIONS = (MEDIAPIPE_HAND_CONNECTIONS, MEDIAPIPE_WRIST_INDEX, MEDIAPIPE_FINGERTIP_INDICES)


def get_hand_topology(embodiment: str):
    """Return (connections, wrist_index, fingertip_indices) for the given embodiment.

    Aria uses a fingertip-first ordering; all other embodiments (Mecka, Scale, etc.)
    use MediaPipe/standard ordering.
    """
    key = embodiment.lower().split("_")[0]  # "aria_bimanual" → "aria"
    return _EMBODIMENT_CONNECTIONS.get(key, _DEFAULT_CONNECTIONS)


def compute_gravity_alignment(head_poses):
    """Compute a rotation matrix that aligns the SLAM world frame to gravity.

    In Aria convention, the head's -Y axis points "up" (away from gravity),
    since Y is down. We estimate gravity as the average of head +Y directions,
    then rotate so gravity aligns with Three.js [0, -1, 0].

    Args:
        head_poses: (N, 7) array of [x, y, z, qw, qx, qy, qz] head poses

    Returns:
        (4, 4) rotation matrix that aligns gravity to -Y in Three.js
    """
    # In Aria (Y-down), "up" = -Y, so gravity = +Y direction of head
    gravity_dirs = []
    for i in range(len(head_poses)):
        qw, qx, qy, qz = head_poses[i, 3], head_poses[i, 4], head_poses[i, 5], head_poses[i, 6]
        rot = R.from_quat([qx, qy, qz, qw]).as_matrix()
        gravity_dirs.append(rot @ [0, 1, 0])  # +Y = down in Aria = gravity direction
    gravity_dirs = np.array(gravity_dirs)

    gravity_slam = gravity_dirs.mean(axis=0)
    gravity_slam = gravity_slam / np.linalg.norm(gravity_slam)
    gravity_target = np.array([0, -1, 0])  # Three.js gravity

    # Rodrigues rotation: gravity_slam → gravity_target
    v = np.cross(gravity_slam, gravity_target)
    s = np.linalg.norm(v)
    c = np.dot(gravity_slam, gravity_target)

    if s < 1e-8:
        R_align = np.eye(3) if c > 0 else -np.eye(3)
    else:
        vx = np.array([[0, -v[2], v[1]], [v[2], 0, -v[0]], [-v[1], v[0], 0]])
        R_align = np.eye(3) + vx + vx @ vx * (1 - c) / (s * s)

    T_align = np.eye(4)
    T_align[:3, :3] = R_align
    return T_align


def align_positions(positions, T_align):
    """Apply gravity alignment to (N, 3) position array."""
    R_align = T_align[:3, :3]
    return (R_align @ positions.T).T


def align_poses(poses, T_align):
    """Apply gravity alignment to (N, 7) pose array [x,y,z,qw,qx,qy,qz]."""
    R_align = T_align[:3, :3]
    aligned = np.copy(poses)
    aligned[:, :3] = (R_align @ poses[:, :3].T).T
    R_align_scipy = R.from_matrix(R_align)
    for i in range(len(poses)):
        qw, qx, qy, qz = poses[i, 3], poses[i, 4], poses[i, 5], poses[i, 6]
        original = R.from_quat([qx, qy, qz, qw])
        rotated = R_align_scipy * original
        q = rotated.as_quat()  # [x, y, z, w]
        aligned[i, 3:] = [q[3], q[0], q[1], q[2]]  # back to [qw, qx, qy, qz]
    return aligned


def align_keypoints(keypoints, T_align):
    """Apply gravity alignment to (N, 21, 3) keypoints array."""
    R_align = T_align[:3, :3]
    N, K, _ = keypoints.shape
    flat = keypoints.reshape(-1, 3)
    aligned = (R_align @ flat.T).T
    return aligned.reshape(N, K, 3)


def _pose_to_mat4(pose):
    """Convert [x, y, z, qw, qx, qy, qz] to a 4x4 SE3 matrix (row-major)."""
    xyz = pose[:3]
    qw, qx, qy, qz = pose[3], pose[4], pose[5], pose[6]
    rot = R.from_quat([qx, qy, qz, qw]).as_matrix()
    mat = np.eye(4)
    mat[:3, :3] = rot
    mat[:3, 3] = xyz
    return mat


def decode_jpeg(raw):
    """Unwrap nested numpy object arrays and return raw JPEG bytes."""
    val = raw
    while isinstance(val, np.ndarray) and val.dtype == object:
        val = val.item()
    return val.tobytes() if isinstance(val, np.ndarray) else val


def make_bone_points(keypoints, connections):
    """Convert (21, 3) keypoints into line segment pairs for segments=True mode.

    Args:
        keypoints: (21, 3) array of joint positions
        connections: list of (a, b) index pairs defining bones
    """
    points = []
    for a, b in connections:
        points.append(keypoints[a].tolist())
        points.append(keypoints[b].tolist())
    return points


def pose_to_matrix16(pose):
    """Convert pose to a 16-element column-major matrix for Three.js.

    Used for non-camera elements (CoordsMarker, etc.) in aligned world space.
    """
    mat = _pose_to_mat4(pose)
    return mat.T.flatten().tolist()


def pose_to_camera_matrix16(pose):
    """Convert Aria head pose to a Three.js camera matrix (column-major).

    Applies the Aria→Three.js Y/Z-flip so the camera looks correctly:
    Aria (Y-down, Z-forward) → Three.js (Y-up, Z-backward).
    """
    mat = _pose_to_mat4(pose) @ _ARIA_TO_THREEJS
    return mat.T.flatten().tolist()


def pose_to_camera_position_euler(pose):
    """Convert Aria head pose to Three.js camera (position, euler).

    Applies the Aria→Three.js Y/Z-flip.
    Use this for components like PerspectiveCamera that need position+rotation
    instead of a matrix.

    Args:
        pose: (7,) array [x, y, z, qw, qx, qy, qz] (gravity-aligned)

    Returns:
        (position, euler) lists for Three.js
    """
    mat = _pose_to_mat4(pose) @ _ARIA_TO_THREEJS
    position = mat[:3, 3].tolist()
    euler = R.from_matrix(mat[:3, :3]).as_euler("XYZ").tolist()
    return position, euler


def gaze_to_3d(yaw, pitch, depth, head_pose):
    """Convert eye gaze (yaw, pitch, depth) to a 3D point in aligned world coordinates.

    Follows the EgoVerse/Aria convention (see egomimicUtils.get_vector_from_yaw_pitch):
    the gaze direction in CPF (Central Pupil Frame) is computed as
        direction = normalize([tan(yaw), tan(pitch), 1.0]) * depth
    then rotated from head-local to world frame.

    Note: Aria's gaze depth is "vergence depth" — the estimated convergence
    distance of both eyes. It is often very short (~0.1-0.5m) and may not
    correspond to the actual fixation target distance.
    """
    # Gaze direction in CPF/head-local frame (Aria convention: tan-based)
    x = np.tan(yaw)
    y = np.tan(pitch)
    z = 1.0
    direction = np.array([x, y, z])
    direction = direction / np.linalg.norm(direction) * depth

    head_pos = head_pose[:3]
    qw, qx, qy, qz = head_pose[3], head_pose[4], head_pose[5], head_pose[6]
    head_rot = R.from_quat([qx, qy, qz, qw])
    world_dir = head_rot.apply(direction)

    return head_pos + world_dir
