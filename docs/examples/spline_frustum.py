from cmx import doc
from contextlib import nullcontext
import os

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Moving Camera Along A Camera Trajectory

This example shows you how to visualize a spline from a set of points. We also show a camera frustum moving along it, which is a common use case when visualizing posed image data.

![frustum](figures/15_spline_frustums.png)

"""

with doc, doc.skip if MAKE_DOCS else nullcontext():
    import json
    import numpy as np
    from pathlib import Path
    from asyncio import sleep
    from vuer import Vuer
    from vuer.schemas import DefaultScene, Line, Frustum, OrbitControls

    def colmap2three(mat):
        """Converts a 4x4 colmap matrix to a three.js matrix.

        COLMAP stores matrices in row-major order, while Three.js uses column-major.
        This function reorders the 16 elements to match Three.js expectations.
        """
        CONVERSION_INDICES = [0, 4, 8, 12, 1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15]
        return mat[:, CONVERSION_INDICES]

    # Load camera trajectory data from a JSON file.
    # The file contains a list of camera poses along a predefined path.
    assets_folder = Path(__file__).parent / "../../../assets"
    with open(assets_folder / "camera_path.json") as f:
        matrices = np.array([p["camera_to_world"] for p in json.load(f)["camera_path"]])

    # Extract camera positions (translation components) from the 4x4 transformation matrices.
    # Indices [3, 7, 11] correspond to the translation vector [tx, ty, tz] in row-major format.
    points = matrices[:, [3, 7, 11]]

    # Convert all camera matrices to Three.js format for rendering.
    three_matrices = colmap2three(matrices)

    app = Vuer()

    @app.spawn(start=True)
    async def main(session):
        # Set up the default scene with ambient lighting (required for colored elements).
        session.set @ DefaultScene(
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        )

        # Render the camera trajectory as a red line connecting all camera positions.
        session.add @ Line(
            points=points,      # Array of 3D points defining the path
            color="red",        # Line color
            closed=False,       # Don't connect the last point back to the first
            lineWidth=4,        # Line thickness in pixels
            key="camera_path",  # Unique identifier for this element
        )

        # Animate a camera frustum along the trajectory path.
        while True:
            for mat in three_matrices:
                # Update the frustum position and orientation using upsert.
                # Using the same key "camera" ensures we update rather than create new frustums.
                session.upsert @ Frustum(
                    matrix=mat,            # 4x4 transformation matrix (position + orientation)
                    far=0.3,                 # Far clipping plane distance
                    showFrustum=True,      # Display the frustum wireframe
                    showImagePlane=True,   # Show the image plane at the near clip
                    showFocalPlane=False,  # Hide the focal plane visualization
                    key="camera",          # Unique identifier for updating this frustum
                )
                # Sleep for ~16ms to achieve approximately 60 FPS animation.
                await sleep(0.016)


doc.flush()
