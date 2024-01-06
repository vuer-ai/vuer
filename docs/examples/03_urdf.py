from cmx import doc

from pathlib import Path
from asyncio import sleep

doc @ """
# URDF

"""


async def save_doc():
    await sleep(10.0)

    result = await app.grab_render(downsample=2)

    filestem = Path(__file__).stem
    doc.window.logger.client.log_buffer(f"_static/{filestem}.jpg", result.value["frame"])
    doc.image(src=f"_static/{Path(__file__).stem}.jpg", width=400)

    doc.flush()
    print("Example run is complete.")
    exit()


# filename = Path(__file__).parent.parent.parent / "docs" / Path(__file__).stem
# doc = CommonMark(f"{filename}.md", root=Path.cwd().parent.parent / "docs", prefix=".")

doc @ """
# Loading URDF Files from the Web

<iframe src="https://vuer.ai/?background=131416,fff&collapseMenu=true&ws=ws%3A%2F%2Flocalhost%3A8012&scene=3gAJqGNoaWxkcmVukd4ABKhjaGlsZHJlbpHeAAaoY2hpbGRyZW6Qo3RhZ6RVcmRmo2tleaExo3NyY9lSaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25hc2EtanBsL20yMDIwLXVyZGYtbW9kZWxzL21haW4vcm92ZXIvbTIwMjAudXJkZqtqb2ludFZhbHVlc94AAKhyb3RhdGlvbpPLQAkeuGAAAAAAAKN0YWenTW92YWJsZaNrZXmhMqhwb3NpdGlvbpMAAMs%2FwzMzQAAAAKN0YWelU2NlbmWja2V5oTOidXCTAAABpGdyaWTDqHNob3dMZXZhwqtyYXdDaGlsZHJlbpLeAASoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5tWRlZmF1bHRfYW1iaWVudF9saWdodKlpbnRlbnNpdHkB3gAFqGNoaWxkcmVukKN0YWewRGlyZWN0aW9uYWxMaWdodKNrZXm5ZGVmYXVsdF9kaXJlY3Rpb25hbF9saWdodKlpbnRlbnNpdHkBpmhlbHBlcsOsaHRtbENoaWxkcmVukLJiYWNrZ3JvdW5kQ2hpbGRyZW6Q" width="100%" height="400px" frameborder="0"></iframe>
"""

doc @ """
Setup: Fist run the following in the terminal
```shell
cd examples/vuer/assets/robots
make
```

And then run the following in the example folder:
"""
with doc, doc.skip:
    from vuer import Vuer
    from vuer.schemas import Urdf, Movable, DefaultScene

    app = Vuer()

    pi = 3.14

    @app.spawn(start=True)
    async def main(proxy):
        app.set @ DefaultScene(
            Movable(
                Urdf(
                    src="https://raw.githubusercontent.com/nasa-jpl/m2020-urdf-models/main/rover/m2020.urdf",
                    jointValues={},
                    rotation=[pi, 0, 0],
                ),
                position=[0, 0, 0.15],
            ),
            grid=True,
            collapseMenu=True,
        )

        while True:
            await sleep(16)


doc.flush()
