import os
from contextlib import nullcontext

from cmx import doc

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Loading URDF from the Web

This example demonstrates how to load and display a **URDF** file (the Mars Rover Perserverance) directly from a URL.
Vuer supports URDF files with mesh files in the following formats: `.dae`, `.stl`, `.obj`, `.ply`. 
![](figures/urdf.png)

<iframe src="https://vuer.ai/?background=131416,fff&collapseMenu=true&scene=3gAEqGNoaWxkcmVukt4AB6hjaGlsZHJlbpCjdGFnpFVyZGaja2V5rHBlcnNldmVyYW5jZaNzcmPZRGh0dHBzOi8vZG9jcy52dWVyLmFpL2VuL2xhdGVzdC9fc3RhdGljL3BlcnNldmVyYW5jZS9yb3Zlci9tMjAyMC51cmRmq2pvaW50VmFsdWVz3gAAqHJvdGF0aW9uk8s%2F%2BR64YAAAAAAAqHBvc2l0aW9ukwAAy7%2F4AAAAAAAA3gAHqGNoaWxkcmVukKN0YWekVXJkZqNrZXmvbWFycy1oZWxpY29wdGVyo3NyY9lAaHR0cHM6Ly9kb2NzLnZ1ZXIuYWkvZW4vbGF0ZXN0L19zdGF0aWMvcGVyc2V2ZXJhbmNlL21ocy9NSFMudXJkZqtqb2ludFZhbHVlc94AAKhyb3RhdGlvbpPLP%2FkeuGAAAAAAAKhwb3NpdGlvbpMAyz%2FR64UgAAAAyz%2FgAAAAAAAArGh0bWxDaGlsZHJlbpCrcmF3Q2hpbGRyZW6QqmJnQ2hpbGRyZW6Q" width="100%" height="400px" frameborder="0"></iframe>


## Code Example
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    from asyncio import sleep
    from math import pi

    from vuer import Vuer
    from vuer.schemas import DefaultScene, Movable, OrbitControls, Urdf

    app = Vuer()

    @app.spawn(start=True)
    async def main(session):
        session.set @ DefaultScene(
            # Movable wrapper allows the user to drag and reposition the robot
            Movable(
                Urdf(
                    # Load URDF directly from a URL
                    src="https://raw.githubusercontent.com/nasa-jpl/m2020-urdf-models/main/rover/m2020.urdf",
                    jointValues={},
                    # Rotate to correct orientation (model is upside-down by default)
                    rotation=[pi, 0, 0],
                ),
                position=[0, 0, 0.15],
            ),
            grid=True,
            collapseMenu=True,
            # Z-up coordinate system
            up=[0, 0, 1],
            bgChildren=[
                OrbitControls(key="OrbitControls"),
            ],
        )

        while True:
            await sleep(16)


doc.flush()
