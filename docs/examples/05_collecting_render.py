from cmx import doc

doc @ """
# Collecting Render

"""

with doc, doc.skip:
    from asyncio import sleep
    from io import BytesIO

    import numpy as np
    import PIL.Image as PImage

    from vuer import Vuer
    from vuer.events import ClientEvent
    from vuer.schemas import Box, Sphere, DefaultScene, CameraView, Plane

    app = Vuer()

    # We don't auto start the vuer app because we need to bind a handler.
    @app.spawn
    async def show_heatmap(proxy):
        proxy.set @ DefaultScene(
            rawChildren=[
                CameraView(
                    fov=50,
                    width=320,
                    height=240,
                    key="ego",
                    position=[-0.5, 1.25, 0.5],
                    rotation=[-0.4 * np.pi, -0.1 * np.pi, 0.15 + np.pi],
                    stream="frame",
                    fps=30,
                    near=0.45,
                    far=3.8,
                    showFrustum=True,
                    downsample=1,
                    distanceToCamera=2
                    # dpr=1,
                ),
            ],
            # hide the helper to only render the objects.
            grid=False,
            show_helper=False,
        )

        proxy.add @ Box(
            key="box",
            args=[0.2, 0.2, 0.2],
            position=[0, 0, 0.1],
            rotation=[0, 0, 0],
            materialType="depth",
            meterial=dict(color="green"),
            outlines=dict(angle=0, thickness=0.005, color="white"),
        )

        proxy.add @ Plane(
            key="ground-plane",
            args=[10, 10, 10],
            position=[0, 0, -0.01],
            rotation=[0, 0, 0],
            materialType="depth",
            meterial=dict(color="green", side=2),
        )

        proxy.add @ Sphere(
            key="sphere",
            args=[0.1, 200, 200],
            position=[0.2, 0, 0.1],
            rotation=[0, 0, 0],
            materialType="depth",
            outlines=dict(angle=0, thickness=0.002, color="white"),
        ),

        await sleep(0.01)

        i = 0
        while True:
            i += 1
            h = 0.25 - (0.00866 * (i % 120 - 60)) ** 2
            position = [0.2, 0.0, 0.1 + h]

            proxy.update @ Sphere(
                key="sphere",
                args=[0.1, 20, 20],
                position=position,
                rotation=[0, 0, 0],
                materialType="depth",
            ),

            await sleep(0.014)

    counter = 0

    async def collect_render(event: ClientEvent, proxy):
        global counter
        import cv2

        # add you render saving logic here.
        counter += 1
        if counter % 1 == 0:
            value = event.value

            buff = value["frame"]
            pil_image = PImage.open(BytesIO(buff))
            img = np.array(pil_image)
            img_bgr = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            cv2.imshow("frame", img_bgr)
            if cv2.waitKey(1) == ord("q"):
                exit()


# won't run, unless the skip is commented out.
with doc, doc.skip:
    app.add_handler("CAMERA_VIEW", collect_render)
    app.run()

doc.flush()
