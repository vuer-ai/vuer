import asyncio
import cv2

from vuer import Vuer
from vuer.schemas import ImageBackground

exit()

app = Vuer(
    host="0.0.0.0",
    port=8012,
    queue_size=1,
)


def rescale_image(img, height=1024):
    h, w = img.shape[:2]
    aspect = w / h
    new_width = int(height * aspect)
    return cv2.resize(img, (new_width, height), interpolation=cv2.INTER_AREA)


def get_array(file_path):
    img = cv2.imread(str(file_path))
    if img.ndim == 3:
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    else:
        img = img[..., None]  # Add channel dimension for grayscale
    img = rescale_image(img)  # Rescale to 256x256
    return img


@app.spawn(start=True)
async def stereo_image(session, fps=60):
    # session.upsert @ Hands(fps=fps, stream=True, key="hands", showLeft=False, showRight=False)
    # print(end_time - start)
    # aspect = self.aspect_shared.value

    left_image = get_array("assets/mario_left.jpg")  # HxWx3 RGB array
    right_image = get_array("assets/mario_right.jpg")  # HxWx3 RGB array

    session.upsert @ ImageBackground(
        # Can scale the images down.
        left_image,
        # display_image[:self.img_height:2, ::2],
        # 'jpg' encoding is significantly faster than 'png'.
        format="jpeg",
        quality=80,
        key="left",
        interpolate=True,
        # fixed=True,
        # aspect=1.66667,
        # distanceToCamera=0.5,
        height=8,
        width=6,
        position=[-1, -1, 3],
        # rotation=[0, 0, 0],
        layers=1,
    )
    await asyncio.sleep(0.03)

    session.upsert @ ImageBackground(
        # Can scale the images down.
        right_image,
        # display_image[self.img_height::2, ::2],
        # 'jpg' encoding is significantly faster than 'png'.
        format="jpeg",
        quality=80,
        key="right",
        interpolate=True,
        # fixed=True,
        # aspect=1.66667,
        # distanceToCamera=0.5,
        height=8,
        width=6,
        position=[1, -1, 3],
        # rotation=[0, 0, 0],
        layers=2,
    )

    await asyncio.sleep(0.03)

    while True:
        await asyncio.sleep(10.0)
