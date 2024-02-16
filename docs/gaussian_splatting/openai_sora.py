from cmx import doc

doc @ """
# 3D Scene Reconstruction from OpenAI Sora

Here is a simple live demo of the 3D Gaussian Splatting model learned from OpenAI Sora.

Here is a live demo:
<iframe src="https://vuer.ai/?collapseMenu=True&grid=False&fov=115&scene=3gAEqGNoaWxkcmVukd4AB6hjaGlsZHJlbpCjdGFnpVNwbGF0o2tleadiaWdfc3Vyo3NyY9k7aHR0cHM6Ly9kb2NzLnZ1ZXIuYWkvZW4vbGF0ZXN0L19zdGF0aWMvYXNzZXRzL2JpZ19zdXIuc3BsYXSlc2NhbGXLP%2BAAAAAAAACocG9zaXRpb26Ty7%2FmZmZgAAAAyz%2FoAAAAAAAAyz%2F5R64gAAAAqHJvdGF0aW9uk8s%2F9PGmwAAAAMu%2FsYPFQAAAAMs%2F2%2BzeYAAAAKxodG1sQ2hpbGRyZW6Qq3Jhd0NoaWxkcmVukKpiZ0NoaWxkcmVukA%3D%3D" width="100%" height="400" frameborder="0"></iframe>
can visit: <a href="https://vuer.ai/?collapseMenu=True&grid=False&fov=115&scene=3gAEqGNoaWxkcmVukd4AB6hjaGlsZHJlbpCjdGFnpVNwbGF0o2tleadiaWdfc3Vyo3NyY9k7aHR0cHM6Ly9kb2NzLnZ1ZXIuYWkvZW4vbGF0ZXN0L19zdGF0aWMvYXNzZXRzL2JpZ19zdXIuc3BsYXSlc2NhbGXLP%2BAAAAAAAACocG9zaXRpb26Ty7%2FmZmZgAAAAyz%2FoAAAAAAAAyz%2F5R64gAAAAqHJvdGF0aW9uk8s%2F9PGmwAAAAMu%2FsYPFQAAAAMs%2F2%2BzeYAAAAKxodG1sQ2hpbGRyZW6Qq3Jhd0NoaWxkcmVukKpiZ0NoaWxkcmVukA%3D%3">link</a>

To run this python code locally, you need to install the `vuer` package 
```shell
pip install 'vuer[all]=={VERSION}'
```

Download the asset file at {download}`_static/assets/big_sur.splat`

and run the following code:
"""
# doc @ """https://vuer.ai/?ws=ws://localhost:8012&position=-0.33,0.75,0.68&rotation=1.31,-3.92,0.44&fov=50"""
with doc, doc.skip:
    from asyncio import sleep
    from vuer import Vuer
    from vuer.schemas import Splat

    pi = 3.141592653
    app = Vuer()

    @app.spawn(start=True)
    async def main(proxy):
        pi = 3.141592653

        proxy.upsert @ Splat(
            src="https://docs.vuer.ai/en/{VERSION}/_static/assets/big_sur.splat",
            scale=0.5,
            position=[-0.7, 0.75, 1.58],
            rotation=[75 / 180 * pi, -3.92 / 180 * pi, 25 / 180 * pi],
            key="big_sur"
        )

        while True:
            await sleep(10.0)

doc @ """

## Scene 2: Sora Construction Scene


<iframe src="https://vuer.ai/?collapseMenu=True&fov=50&scene=3gAEqGNoaWxkcmVukd4AB6hjaGlsZHJlbpCjdGFnpVNwbGF0o2tleadiaWdfc3Vyo3NyY9lAaHR0cHM6Ly9kb2NzLnZ1ZXIuYWkvZW4vbGF0ZXN0L19zdGF0aWMvYXNzZXRzL2NvbnN0cnVjdGlvbi5zcGxhdKVzY2FsZcs%2F4AAAAAAAAKhwb3NpdGlvbpPLv9UeuGAAAADLP9j1woAAAADLv7HrhSAAAACocm90YXRpb26Tyz%2F6P%2B%2FAAAAAy7%2FfRrugAAAAy0ACtb4AAAAArGh0bWxDaGlsZHJlbpCrcmF3Q2hpbGRyZW6QqmJnQ2hpbGRyZW6Q" width="100%" height="400" frameborder="0"></iframe>
Or click on this <a href="https://vuer.ai/?collapseMenu=True&fov=50&scene=3gAEqGNoaWxkcmVukd4AB6hjaGlsZHJlbpCjdGFnpVNwbGF0o2tleadiaWdfc3Vyo3NyY9lAaHR0cHM6Ly9kb2NzLnZ1ZXIuYWkvZW4vbGF0ZXN0L19zdGF0aWMvYXNzZXRzL2NvbnN0cnVjdGlvbi5zcGxhdKVzY2FsZcs%2F4AAAAAAAAKhwb3NpdGlvbpPLv9UeuGAAAADLP9j1woAAAADLv7HrhSAAAACocm90YXRpb26Tyz%2F6P%2B%2FAAAAAy7%2FfRrugAAAAy0ACtb4AAAAArGh0bWxDaGlsZHJlbpCrcmF3Q2hpbGRyZW6QqmJnQ2hpbGRyZW6Q">link</a> to visit the scene in full screen.

You can also run the following code to load the construction scene.
"""
with doc.hide:
    from asyncio import sleep
    from vuer import Vuer
    from vuer.schemas import Splat

    pi = 3.141592653
    app = Vuer()

# doc @ """ https://vuer.ai/?ws=ws://localhost:8012&position=-0.33,0.07,0.5&rotation=94,-28,134&fov=50 """
with doc, doc.skip:
    @app.spawn(start=True)
    async def main(proxy):
        proxy.upsert @ Splat(
            src="https://docs.vuer.ai/en/{VERSION}/_static/assets/construction.splat",
            scale=0.5,
            position=[-0.33, 0.39, -0.07],
            rotation=[94 / 180 * pi, -28 / 180 * pi, 134 / 180 * pi],
            key="big_sur",
        )

        while True:
            await sleep(10.0)
