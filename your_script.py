from vuer import Vuer, VuerSession
from vuer.schemas import Scene, KeyboardMonitor, DefaultScene

app = Vuer()

@app.add_handler("KeyDown")
async def on_key_down(event, session: VuerSession):
    key_data = event.value
    print(f"Key pressed: {key_data['key']}")
    print(f"Key code: {key_data['code']}")
    if key_data['ctrlKey']:
        print("Ctrl modifier active")

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        KeyboardMonitor(
            enableKeyDown=True,
            enableKeyUp=True,
            key="keyboard-monitor",
        ),
    )

    await session.forever()