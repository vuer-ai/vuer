from time import sleep

import numpy as np

from tassa import Tassa
from tassa.events import Set, Update, Frame
from tassa.schemas import Scene, Ply, Gripper, SkeletalGripper, Camera, Html, Text, Image

doc = Tassa(
    "ws://localhost:8013",
    "https://debug.ge.ngrok.io/tassa",
    uri="http://localhost:8000/tassa",
    # uri="https://debug.ge.ngrok.io/tassa",
    reconnect=True,
    debug=True,
)


# doc = Tassa(reconnect=True)
# this is blocking because it autostarts.
@doc.bind(start=True)
def show_heatmap():
    scene = Scene(
        # Camera(fov=75, far=20, aspect=1.6, position=[0, 1, 1], rotation=[0, 0, 0], helper=True, default=False),
        Html(
            Text("Hello World!", key="some text"),
            Image(
                f"/Users/ge/datasets/rooms/ei_stairway_v1/images/frame_{1:05d}.png",
                key="video",
            ),
            key="Ziqi",
        ),
        Ply(
            src="https://escher.ge.ngrok.io/files/william/nerfstudio/correspondences"
            "/2023-01-20_23-08-27/orange/mask_in.ply",
            position=[0, 0.4, 0],
            rotation=[-0.5 * np.pi, 0, -0.5 * np.pi],
        ),
        Gripper(pinchWidth=0.04, skeleton=False, axes=True, position=[0, 0.2, 0], key="gripper"),
        SkeletalGripper(movable=True, pinchWidth=0.04, position=[0, 0.2, 0], key="skeleton"),
        # Camera(fov=75, far=20, aspect=1.6),
        style={"width": "100vw", "height": "900px"},
    )

    i = 1
    event = yield Frame(Set(scene))
    print(vars(event))
    while event != "TERMINAL":
        # print(vars(event))
        if event == "CAMERA_MOVE":
            print(vars(event))

        # image starts at 1
        # while True:
        # update the image
        file_path = f"/Users/ge/datasets/rooms/ei_stairway_v1/images_8/frame_{i:05d}.png"
        print(file_path)

        yield Frame(
            Update(
                Html(
                    Image(
                        file_path,
                        width=640 * 2,
                        height=480 * 2,
                        # style={
                        #     "position": "absolute",
                        #     "top": "-480px",
                        #     "left": "-640px",
                        #     "width": 640 * 2,
                        #     "height": 480 * 2,
                        # },
                        key="video",
                    ),
                    style={
                        "position": "absolute",
                        "top": "-480px",
                        "left": "-640px",
                        "width": 640 * 2,
                        "height": 480 * 2,
                    },
                    key="Ziqi",
                ),
            )
        )
        # fix the error below
        if i == 203:
            i = 1
        else:
            i += 1

        sleep(0.0166)
        # sleep(0.0001)
