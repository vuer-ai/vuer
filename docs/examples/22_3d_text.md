
# 3D Text, 2D Text, and Billboard in Vuer

This example demonstrates how to create and customize 3D text in Vuer using the Text3D component, as well as how to display 2D text (Text component) and always-face-camera labels (Billboard component).

- **Text3D** renders 3D text using ThreeJS's TextGeometry.
- **Text** displays 2D text, suitable for labels and annotations.
- **Billboard** ensures its children always face the camera, useful for floating labels.

<iframe src="https://vuer.ai/?background=131416,fff&collapseMenu=true&scene=3gAHqGNoaWxkcmVuld4ADahjaGlsZHJlbpKrSGVsbG8gVnVlciHeAAKjdGFnsm1lc2hOb3JtYWxNYXRlcmlhbKNrZXmiNDGjdGFnplRleHQzRKNrZXmnd2VsY29tZaRmb2502UBodHRwczovL3RocmVlanMub3JnL2V4YW1wbGVzL2ZvbnRzL2hlbHZldGlrZXJfYm9sZC50eXBlZmFjZS5qc29upnNtb290aMCqbGluZUhlaWdodACtbGV0dGVyU3BhY2luZ8u%2FmZmZoAAAAKxiZXZlbEVuYWJsZWTDqWJldmVsU2l6Zcs%2FpHrhQAAAAK5iZXZlbFRoaWNrbmVzc8s%2FuZmZoAAAAKRzaXplyz%2F4AAAAAAAApWNvbG9yo3JlZKVzY2FsZcs%2FwzMzQAAAAN4ABqhjaGlsZHJlbpGqRml4ZWQgVGV4dKN0YWekVGV4dKNrZXmqZml4ZWQtdGV4dKVjb2xvcqVncmVlbqhmb250U2l6Zcs%2FuZmZoAAAAKhwb3NpdGlvbpMAyz%2FTMzNAAAAA%2F94AB6hjaGlsZHJlbpHeAAeoY2hpbGRyZW6RrkJpbGxib2FyZCBUZXh0o3RhZ6RUZXh0o2tlea5iaWxsYm9hcmQtdGV4dKVjb2xvcqNyZWSoZm9udFNpemXLP7mZmaAAAAClc2NhbGXLP%2BAAAAAAAACocG9zaXRpb26Tyz%2FTMzNAAAAAyz%2FpmZmgAAAAAKN0YWepQmlsbGJvYXJko2tleaI0MqZmb2xsb3fDpWxvY2tYwqVsb2NrWcKlbG9ja1rC3gAEqGNoaWxkcmVukKN0YWesQW1iaWVudExpZ2h0o2tlea1hbWJpZW50X2xpZ2h0qWludGVuc2l0eQLeAAWoY2hpbGRyZW6Qo3RhZ7BEaXJlY3Rpb25hbExpZ2h0o2tlebFkaXJlY3Rpb25hbF9saWdodKlpbnRlbnNpdHkBqHBvc2l0aW9ukwECAqN0YWelU2NlbmWja2V5ojQ1onVwkwABAKtyYXdDaGlsZHJlbpLeAASoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5tWRlZmF1bHRfYW1iaWVudF9saWdodKlpbnRlbnNpdHnLP%2BAAAAAAAADeAAWoY2hpbGRyZW6Qo3RhZ7BEaXJlY3Rpb25hbExpZ2h0o2tleblkZWZhdWx0X2RpcmVjdGlvbmFsX2xpZ2h0qWludGVuc2l0eQGmaGVscGVyw6xodG1sQ2hpbGRyZW6QqmJnQ2hpbGRyZW6T3gADqGNoaWxkcmVukKN0YWeqR3JhYlJlbmRlcqNrZXmnREVGQVVMVN4AA6hjaGlsZHJlbpCjdGFnr1BvaW50ZXJDb250cm9sc6NrZXmiNDPeAAOoY2hpbGRyZW6Qo3RhZ6RHcmlko2tleaI0NA%3D%3D" width="100%" height="400px" frameborder="0"></iframe>


```python
from asyncio import sleep

from vuer import Vuer
from vuer.schemas import (
    Text3D,
    DefaultScene,
    AmbientLight,
    DirectionalLight,
    Text,
    Billboard,
    MeshNormalMaterial,
)

app = Vuer()


@app.spawn(start=True)
async def show_3d_text(session):
    # Create a scene with some basic elements
    session.set @ DefaultScene(
        # Customized 3D text with different parameters
        Text3D(
            "Hello Vuer!",
            MeshNormalMaterial(),
            font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",
            bevelEnabled=True,
            bevelSize=0.04,
            bevelThickness=0.1,
            size=1.5,
            letterSpacing=-0.025,
            color="red",
            scale=0.15,
            key="welcome",
        ),
        Text('Fixed Text', color='green', fontSize=0.1, position=[0, 0.3, -1], key="fixed-text"),
        Billboard(
            Text(
                'Billboard Text',
                color="red",
                fontSize=0.1,
                scale=0.5,
                position=[0.3, 0.8, 0],
                key="billboard-text",
            )
        ),
        # Add lighting to make the text visible
        AmbientLight(intensity=2, key="ambient_light"),
        DirectionalLight(intensity=1, position=[1, 2, 2], key="directional_light"),
    )
    await sleep(0.1)

    # Demo of rotating text
    angle = 0
    while True:
        angle += 0.01

        session.update([
            Text3D(
                "Hello Vuer!",
                MeshNormalMaterial(),
                font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",
                bevelEnabled=True,
                bevelSize=0.04,
                bevelThickness=0.1,
                size=1,
                letterSpacing=-0.025,
                color="red",
                scale=0.1,
                key="welcome",
                rotation=[0, angle, 0]
            ),
            Text('Angle: ' + f'{angle:.2f}', key="fixed-text"),
        ]),
        await sleep(0.032)
```
