from cmx import doc

doc @ """
# Transforming Points using Camera Matrix

This example shows how to transform points using the camera matrix.

![red spheres in the frustum of a camera, close to the image plane](figures/frustum_transformation.png)

first, we make a function to sample points in the camera frustum. This is a helper function that we will use later.
"""
with doc:
    from typing import Tuple
    import numpy as np

    def sample_camera_frustum_batch(
        fov: float,
        width: float,
        height: float,
        near: float,
        far: float,
        num_samples=1,
        **_,
    ) -> Tuple[np.ndarray]:
        """Sample Camera Frustum

        For rectangular cameras, sample a point between near and far plane, relative to camera transform

        Output in view space: X right, Y up, Z backward

        (Assumed to have the same intrinsics for each sample)


        :param fov: vertical field-of-view, in degrees
        :param width: px
        :param height: px
        :param near: in meters (world units)
        :param far: in meters (world units)
        """
        aspect = width / height
        fov_rad = fov * np.pi / 180
        foh_rad = np.arctan(np.tan(fov_rad / 2) * aspect) * 2

        d = np.random.uniform(near, far, size=num_samples)  # distance in camera coordinates

        y_range = d * np.tan(fov_rad / 2)
        y = np.random.uniform(-y_range, y_range, size=num_samples)

        x_range = d * np.tan(foh_rad / 2)
        x = np.random.uniform(-x_range, x_range, size=num_samples)

        return np.stack([x, y, -d]).T


with doc, doc.skip:
    import asyncio
    import os

    from ml_logger import ML_Logger
    from vuer import Vuer, VuerSession
    from vuer.events import ClientEvent
    from vuer.schemas import DefaultScene, CameraView, Sphere

    ball_pts = sample_camera_frustum_batch(
        fov=50,
        width=320,
        height=240,
        near=0.45,
        far=0.5,
        num_samples=100,
    )

    logger = ML_Logger(root=os.getcwd(), prefix="assets")

    app = Vuer()

    # fmt: off
    matrix = np.array([
        -0.9403771820302098, -0.33677144289058686, 0.04770482963301034, 0,
        0.14212405695663877, -0.26162828559882034, 0.9546472608292598, 0,
        -0.30901700268934784, 0.9045085048953463, 0.2938925936815643, 0,
        -0.47444114213044175, 1.2453493553603068, 0.5411873913841395, 1,
    ]).reshape(4, 4)


    # fmt: on

    @app.add_handler("CAMERA_MOVE")
    async def track_movement(event: ClientEvent, sess: VuerSession):
        global matrix
        # only intercept the ego camera.
        if event.key != "ego":
            return
        if event.value["matrix"] is None:
            return
        new_matrix = np.array(event.value["matrix"]).reshape(4, 4)
        if not np.allclose(new_matrix, matrix):
            print("matrix has changed")
            matrix = new_matrix

    def transform_points(pts, matrix):
        # Convert the list of points to a numpy array with an additional dimension for the homogeneous coordinate
        pts_homogeneous = np.hstack((pts, np.ones((len(pts), 1))))

        # Apply the transformation matrix to each point
        transformed_pts = pts_homogeneous @ matrix

        # Convert back to 3D points from homogeneous coordinates
        transformed_pts = transformed_pts[:, :3]
        return transformed_pts

    # We don't auto start the vuer app because we need to bind a handler.
    @app.spawn(start=True)
    async def show_heatmap(proxy):
        proxy.set @ DefaultScene(
            rawChildren=[
                CameraView(
                    fov=50,
                    width=320,
                    height=240,
                    key="ego",
                    # position=[-0.5, 1.25, 0.5],
                    # rotation=[-0.4 * np.pi, -0.1 * np.pi, 0.15 + np.pi],
                    matrix=matrix.flatten().tolist(),
                    # movable=False,
                    stream="ondemand",
                    fps=30,
                    near=0.4,
                    far=1.8,
                    showFrustum=True,
                    downsample=1,
                    distanceToCamera=2,
                ),
            ],
            # hide the helper to only render the objects.
            grid=False,
            show_helper=False,
        )
        last_id = None
        while True:
            if last_id and id(matrix) == last_id:
                await asyncio.sleep(0.016)
                continue

            last_id = id(matrix)
            pts = transform_points(ball_pts, matrix)
            print("update balls")

            proxy.upsert @ [
                Sphere(
                    args=[0.01],
                    position=(pts[i]).tolist(),
                    material=dict(color="red"),
                    materialType="phong",
                    key=f"ball-{i}",
                )
                for i, p in enumerate(ball_pts)
            ]

            await asyncio.sleep(0.01)
