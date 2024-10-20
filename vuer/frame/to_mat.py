import numpy as np


def to_mat(pos, quat):
    """
    Convert a quaternion and position to a 4x4 transformation matrix.

    :param quat: A list or numpy array of 4 elements [x, y, z, w] representing the quaternion
    :param pos: A list or numpy array of 3 elements [x, y, z] representing the position
    :return: A 4x4 numpy array representing the transformation matrix
    """
    # Ensure inputs are numpy arrays
    q = np.array(quat, dtype=np.float64)
    p = np.array(pos, dtype=np.float64)

    # Normalize the quaternion
    q /= np.linalg.norm(q)

    # Extract the values from the quaternion
    x, y, z, w = q

    # Compute the rotation matrix elements
    x2, y2, z2 = x * x, y * y, z * z
    xy, xz, yz, wx, wy, wz = x * y, x * z, y * z, w * x, w * y, w * z

    # Construct the rotation matrix
    # fmt: off
    rot_matrix = np.array([
        [1 - 2 * (y2 + z2), 2 * (xy - wz), 2 * (xz + wy), 0],
        [2 * (xy + wz), 1 - 2 * (x2 + z2), 2 * (yz - wx), 0],
        [2 * (xz - wy), 2 * (yz + wx), 1 - 2 * (x2 + y2), 0],
        [0, 0, 0, 1]
    ])
    # fmt: on

    # Add the translation
    rot_matrix[:3, 3] = p

    return rot_matrix


# Example usage
if __name__ == "__main__":
    # Example quaternion [x, y, z, w] and position [x, y, z]
    quat_example = [0, 0, 0, 1]  # Identity rotation
    pos_example = [1, 2, 3]

    matrix = to_mat(quat_example, pos_example)
    print("Resulting transformation matrix:")
    print(matrix)
