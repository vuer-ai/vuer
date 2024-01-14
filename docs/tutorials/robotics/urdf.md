
# Loading URDF Files 

In this simple example, we will load an URDF file of the Mars Rover Perserverance into Vuer.

Vuer supports URDF files with mesh files in the following formats: `.dae`, `.stl`, `.obj`, `.ply`. For 
details on the mesh file formats supported, refer to the Typescript source code.

<iframe src="https://vuer.ai/?background=131416,fff&collapseMenu=true&ws=ws%3A%2F%2Flocalhost%3A8012&scene=3gAJqGNoaWxkcmVukd4ABKhjaGlsZHJlbpHeAAaoY2hpbGRyZW6Qo3RhZ6RVcmRmo2tleaExo3NyY9lSaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25hc2EtanBsL20yMDIwLXVyZGYtbW9kZWxzL21haW4vcm92ZXIvbTIwMjAudXJkZqtqb2ludFZhbHVlc94AAKhyb3RhdGlvbpPLQAkeuGAAAAAAAKN0YWenTW92YWJsZaNrZXmhMqhwb3NpdGlvbpMAAMs%2FwzMzQAAAAKN0YWelU2NlbmWja2V5oTOidXCTAAABpGdyaWTDqHNob3dMZXZhwqtyYXdDaGlsZHJlbpLeAASoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5tWRlZmF1bHRfYW1iaWVudF9saWdodKlpbnRlbnNpdHkB3gAFqGNoaWxkcmVukKN0YWewRGlyZWN0aW9uYWxMaWdodKNrZXm5ZGVmYXVsdF9kaXJlY3Rpb25hbF9saWdodKlpbnRlbnNpdHkBpmhlbHBlcsOsaHRtbENoaWxkcmVukLJiYWNrZ3JvdW5kQ2hpbGRyZW6Q" width="100%" height="400px" frameborder="0"></iframe>

```python
from asyncio import sleep
from vuer import Vuer, VuerSession
from vuer.schemas import Urdf, Movable, DefaultScene

app = Vuer()


# Use the following to start the server immediately
# @app.spawn(start=True)
@app.spawn
async def main(proxy: VuerSession):
    proxy.set @ DefaultScene(
        Movable(
            Urdf(
                src="https://raw.githubusercontent.com/nasa-jpl/m2020-urdf-models/main/rover/m2020.urdf",
                jointValues={},
                rotation=[3.14, 0, 0],
                position=[0, 0, -2],
            ),
            position=[0, 0, 2.15],
        ),
        grid=True,
        collapseMenu=False,
    )
```

Now also:

```python
    # keep the session alive.
    while True:
        await sleep(16)

# Run the app
app.run()
```
