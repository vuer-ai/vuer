import asyncio
from vuer import Vuer
from vuer.schemas import DefaultScene, Pivot, Box, Sphere, OrbitControls

app = Vuer()


@app.spawn(start=True)
async def main(sess):
    # Create scene with multiple pivoted objects
    sess.set @ DefaultScene(
        # Central marker at pivot point
        Sphere(position=[0, 0, 0], args=[0.2], key="center-marker"),

        # Box orbiting around center (like a door hinge)
        Pivot(
            Box(position=[2, 0, 0], args=[0.5, 0.5, 0.5], key="box"),
            position=[1, 0, 0],  # Pivot at center
            rotation=[0, 0, 0],  # Will be animated
            key="pivot-box",
        ),

        # Sphere orbiting at different radius (like a planet)
        Pivot(
            Sphere(position=[3, 0, 0], args=[0.3], key="sphere"),
            position=[2, 0, 0],  # Same pivot point
            rotation=[0, 0, 0],  # Will be animated
            key="pivot-sphere",
        ),

        bgChildren=[OrbitControls(key="OrbitControls")],
    )

    # Animate both objects orbiting around the pivot
    angle = 0
    while True:
        # Box orbits slowly
        sess.update @ Pivot(
            rotation=[0, angle, 0],
            key="pivot-box",
        )

        # Sphere orbits faster
        sess.update @ Pivot(
            rotation=[0, angle * 2, 0],
            key="pivot-sphere",
        )

        angle += 0.02
        await asyncio.sleep(0.016)