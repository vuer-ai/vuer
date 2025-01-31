from cmx import doc

doc @ """
# 3D Scene Reconstruction from OpenAI Sora Videos (Live Demo)

We run videos generated by sora through our 3DGS reconstruction pipeline. Here
are the generated 3D Gaussian Splatting models. This page includes four scenes:

1. [Big Sur](#big-sur) 
2. [Construction Site](#sora-construction-scene) 
3. [Art Gallery](#art-gallery)
4. [Minecraft](#minecraft)

## Big Sur

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
with doc:
    from asyncio import sleep
    from vuer import Vuer
    from vuer.schemas import Splat

    pi = 3.141592653
    app = Vuer()

with doc, doc.skip:
    @app.spawn(start=True)
    async def main(proxy):
        proxy.upsert @ Splat(
            src="https://docs.vuer.ai/en/{VERSION}/_static/gaussian_splatting/big_sur.splat",
            scale=0.5,
            position=[-0.7, 0.75, 1.58],
            rotation=[75 / 180 * pi, -3.92 / 180 * pi, 25 / 180 * pi],
            key="big_sur"
        )

        while True:
            await sleep(10.0)

doc @ """

## Construction Site

You can rotate, pan and dolly the camera to view the construction scene from different angles.

<iframe src="https://vuer.ai/?collapseMenu=True&fov=50&scene=3gAEqGNoaWxkcmVukd4AB6hjaGlsZHJlbpCjdGFnpVNwbGF0o2tleadiaWdfc3Vyo3NyY9lAaHR0cHM6Ly9kb2NzLnZ1ZXIuYWkvZW4vbGF0ZXN0L19zdGF0aWMvYXNzZXRzL2NvbnN0cnVjdGlvbi5zcGxhdKVzY2FsZcs%2F4AAAAAAAAKhwb3NpdGlvbpPLv9UeuGAAAADLP9j1woAAAADLv7HrhSAAAACocm90YXRpb26Tyz%2F6P%2B%2FAAAAAy7%2FfRrugAAAAy0ACtb4AAAAArGh0bWxDaGlsZHJlbpCrcmF3Q2hpbGRyZW6QqmJnQ2hpbGRyZW6Q" width="100%" height="400" frameborder="0"></iframe>

Or click on this <a href="https://vuer.ai/?collapseMenu=True&fov=50&scene=3gAEqGNoaWxkcmVukd4AB6hjaGlsZHJlbpCjdGFnpVNwbGF0o2tleadiaWdfc3Vyo3NyY9lAaHR0cHM6Ly9kb2NzLnZ1ZXIuYWkvZW4vbGF0ZXN0L19zdGF0aWMvYXNzZXRzL2NvbnN0cnVjdGlvbi5zcGxhdKVzY2FsZcs%2F4AAAAAAAAKhwb3NpdGlvbpPLv9UeuGAAAADLP9j1woAAAADLv7HrhSAAAACocm90YXRpb26Tyz%2F6P%2B%2FAAAAAy7%2FfRrugAAAAy0ACtb4AAAAArGh0bWxDaGlsZHJlbpCrcmF3Q2hpbGRyZW6QqmJnQ2hpbGRyZW6Q">link</a> to visit the scene in full screen.

You can also run the following code to load the construction scene.
"""
with doc, doc.skip:
    @app.spawn(start=True)
    async def main(proxy):
        proxy.upsert @ Splat(
            src="https://docs.vuer.ai/en/{VERSION}/_static/gaussian_platting/construction.splat",
            scale=0.5,
            position=[-0.33, 0.39, -0.07],
            rotation=[94 / 180 * pi, -28 / 180 * pi, 134 / 180 * pi],
            key="big_sur",
        )

        while True:
            await sleep(10.0)

scene = "3gAEqGNoaWxkcmVukd4AB6hjaGlsZHJlbpCjdGFnpVNwbGF0o2tleadiaWdfc3Vyo3NyY9lDaHR0cHM6Ly9kb2NzLnZ1ZXIuYWkvZW4vbGF0ZXN0L19zdGF0aWMvZ2F1c3NpYW5fc3BsYXR0aW5nL2FydC5zcGxhdKVzY2FsZQWocG9zaXRpb26TAMs%2F4zMzQAAAAACocm90YXRpb26Tyz%2F5HRTgAAAAy7%2Bqya%2FgAAAAAKxodG1sQ2hpbGRyZW6Qq3Jhd0NoaWxkcmVukKpiZ0NoaWxkcmVukA%3D%3D"
doc @ f"""
## Art Gallery

You can rotate, pan and dolly the camera to view this art gallery scene from different angles.

<iframe src="https://vuer.ai/?collapseMenu=True&fov=50&grid=False&scene={scene}" width="100%" height="400" frameborder="0"></iframe>

Or click on this <a href="https://vuer.ai/?collapseMenu=True&grid=False&fov=50&scene={scene}">link</a> to visit the scene in full screen.

You can also run the following code to load the construction scene.
"""
with doc, doc.skip:
    @app.spawn(start=True)
    async def main(proxy):
        proxy.upsert @ Splat(
            src="https://docs.vuer.ai/en/{VERSION}/_static/gaussian_splatting/art.splat",
            scale=5,
            position=[0., 0.6, 0.],
            rotation=[90 * 0.01744, -3 * 0.01744, 0 * 0.01744],
            key="big_sur",
        )

        while True:
            await sleep(10.0)

scene = "3gAEqGNoaWxkcmVukd4AB6hjaGlsZHJlbpCjdGFnpVNwbGF0o2tlealtaW5lY3JhZnSjc3Jj2UlodHRwczovL2RvY3MudnVlci5haS9lbi9sYXRlc3QvX3N0YXRpYy9nYXVzc2lhbl9zcGxhdHRpbmcvbWluZWNyYWZ0LnNwbGF0pXNjYWxlyz%2FgAAAAAAAAqHBvc2l0aW9uk8u%2FtHrhQAAAAMs%2F09cKQAAAAMu%2FseuFIAAAAKhyb3RhdGlvbpPLP%2FSmIkAAAADLv8iONoAAAADLP%2FV8b8AAAACsaHRtbENoaWxkcmVukKtyYXdDaGlsZHJlbpCqYmdDaGlsZHJlbpA%3D"
doc @ f"""
## Minecraft

You can rotate, pan and dolly the camera to view the minecraft scene from different angles.

<iframe src="https://vuer.ai/?collapseMenu=True&fov=50&grid=False&scene={scene}" width="100%" height="400" frameborder="0"></iframe>

Or click on this <a href="https://vuer.ai/?collapseMenu=True&fov=50&grid=False&scene={scene}">link</a> to visit the scene in full screen.

You can also run the following code to load the construction scene.
"""
with doc, doc.skip:
    @app.spawn(start=True)
    async def main(proxy):
        proxy.upsert @ Splat(
            src="https://docs.vuer.ai/en/{VERSION}/_static/gaussian_splatting/minecraft.splat",
            scale=0.5,
            position=[-0.08, 0.31, -0.07],
            rotation=[74 * 0.01744, -11 * 0.01744, 77 * 0.01744],
            key="minecraft",
        )

        while True:
            await sleep(10.0)
