import mujoco
import mujoco.viewer
import numpy as np
import pyquaternion as pyq
from pynput import keyboard

# Global state to keep track of keys pressed
key_states = {
    "up": False,
    "down": False,
    "left": False,
    "right": False,
    "numpad_0": False,
    "numpad_dot": False,
    "insert": False,
    "home": False,
    "page_up": False,
    "page_down": False,
}


# Utility function to rotate a quaternion
def rotate_quaternion(quat, axis, angle):
    """
    Rotate a quaternion by an angle around an axis
    """
    angle_rad = np.deg2rad(angle)
    axis = axis / np.linalg.norm(axis)
    q = pyq.Quaternion(quat)
    q = q * pyq.Quaternion(axis=axis, angle=angle_rad)
    return q.elements


def update_mocap_position(data):
    """
    Update the mocap position and orientation based on the active keys.
    """
    step_size = 0.01  # Position step size
    rot_angle = 10  # Rotation step size

    # Position updates
    if key_states["up"]:
        data.mocap_pos[0, 2] += step_size
    if key_states["down"]:
        data.mocap_pos[0, 2] -= step_size
    if key_states["left"]:
        data.mocap_pos[0, 0] -= step_size
    if key_states["right"]:
        data.mocap_pos[0, 0] += step_size
    if key_states["numpad_0"]:
        data.mocap_pos[0, 1] += step_size
    if key_states["numpad_dot"]:
        data.mocap_pos[0, 1] -= step_size

    # Orientation updates
    if key_states["insert"]:
        data.mocap_quat[0] = rotate_quaternion(data.mocap_quat[0], [1, 0, 0], rot_angle)
    if key_states["home"]:
        data.mocap_quat[0] = rotate_quaternion(data.mocap_quat[0], [1, 0, 0], -rot_angle)
    if key_states["page_up"]:
        data.mocap_quat[0] = rotate_quaternion(data.mocap_quat[0], [0, 1, 0], rot_angle)
    if key_states["page_down"]:
        data.mocap_quat[0] = rotate_quaternion(data.mocap_quat[0], [0, 1, 0], -rot_angle)


def on_press(key):
    """
    Handle key press events.
    """
    try:
        if key == keyboard.Key.up:
            key_states["up"] = True
        elif key == keyboard.Key.down:
            key_states["down"] = True
        elif key == keyboard.Key.left:
            key_states["left"] = True
        elif key == keyboard.Key.right:
            key_states["right"] = True
        elif key == keyboard.Key.insert:
            key_states["insert"] = True
        elif key == keyboard.Key.home:
            key_states["home"] = True
        elif key == keyboard.Key.page_up:
            key_states["page_up"] = True
        elif key == keyboard.Key.page_down:
            key_states["page_down"] = True
        elif key == keyboard.KeyCode.from_char('0'):
            key_states["numpad_0"] = True
        elif key == keyboard.KeyCode.from_char('.'):
            key_states["numpad_dot"] = True
    except AttributeError:
        print(f"Unknown key {key} pressed.")


def on_release(key):
    """
    Handle key release events.
    """
    try:
        if key == keyboard.Key.up:
            key_states["up"] = False
        elif key == keyboard.Key.down:
            key_states["down"] = False
        elif key == keyboard.Key.left:
            key_states["left"] = False
        elif key == keyboard.Key.right:
            key_states["right"] = False
        elif key == keyboard.Key.insert:
            key_states["insert"] = False
        elif key == keyboard.Key.home:
            key_states["home"] = False
        elif key == keyboard.Key.page_up:
            key_states["page_up"] = False
        elif key == keyboard.Key.page_down:
            key_states["page_down"] = False
        elif key == keyboard.KeyCode.from_char('0'):
            key_states["numpad_0"] = False
        elif key == keyboard.KeyCode.from_char('.'):
            key_states["numpad_dot"] = False
    except AttributeError:
        print(f"Unknown key {key} released.")


def main():
    # Load the mujoco model
    model = mujoco.MjModel.from_xml_path('scene.xml')
    data = mujoco.MjData(model)

    # Set up the key listener
    listener = keyboard.Listener(on_press=on_press, on_release=on_release)
    listener.start()

    # Use forward to update the simulation state without stepping through time
    mujoco.mj_forward(model, data)

    # Launch the viewer and update based on key input
    with mujoco.viewer.launch_passive(model, data) as viewer:
        while viewer.is_running():
            # Update mocap frame based on key states
            update_mocap_position(data)
            # mujoco.mj_forward(model, data)
            mujoco.mj_step(model, data)

            # Render the viewer with the updated data
            # viewer.render()
            viewer.sync()


if __name__ == '__main__':
    main()
