import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Gripper

The `Gripper` component renders a robot gripper/hand visualization.
This is ideal for:
- Visualizing end-effector poses
- Creating teleoperation interfaces
- Displaying grasp targets
- Building interactive manipulation demos

## Basic Usage

A minimal example that creates a gripper:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
    from vuer import Vuer
    from vuer.schemas import DefaultScene, Gripper, OrbitControls

    app = Vuer()

    @app.spawn(start=True)
    async def main(session):
        session.set @ DefaultScene(
            Gripper(
                key="gripper",
                position=[0, 0.5, 0],
            ),
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        )

        while True:
            await asyncio.sleep(1.0)

doc @ """

## Learn More

For detailed examples of using `Gripper`, see:

- [Movable Grippers](movable.md) - Interactive gripper controls
"""

doc.flush()
