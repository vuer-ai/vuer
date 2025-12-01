from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Frustum, OrbitControls, Clickable
from vuer.events import ClientEvent
n, N = 12, 12**3
app = Vuer(domain="https://localhost:3012/?ws=ws://localhost:8012")

@app.add_handler("OBJECT_CLICK")
async def on_add_marker(event: ClientEvent, sess: VuerSession):
    """Handle ADD_MARKER events by placing a red sphere at the click position."""
    print("Added marker")


@app.spawn(start=True)
async def main(sess: VuerSession):
    sess.set @ DefaultScene(
        *[
            Clickable(Frustum(
                key=f"frustum-{i}",
                scale=10,
                showImagePlane=True,
                showFrustum=False,
                showFocalPlane=False,
                position=[i % n, (i // n) % n, (i // n**2) % n],
                rotation=[0.5 * 3.14, 0, 0],
            ))
            for i in range(N)
        ],
        show_helper=False,
        up=[0, 0, 1],
        bgChildren=[
            OrbitControls(key="OrbitControls")
        ],
    )
    await sess.forever()