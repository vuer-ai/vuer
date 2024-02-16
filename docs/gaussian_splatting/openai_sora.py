from cmx import doc

doc @ """
# 3D Gaussian Splattng from OpenAI Sora

Here is a simple live demo of the 3D Gaussian Splatting model learned from OpenAI Sora.

For a live demo, visit: [link](https://vuer.ai/?ws=ws%3A%2F%2Flocalhost%3A8012&grid=false&scene=3gAEqGNoaWxkcmVukd4AB6hjaGlsZHJlbpCjdGFnpVNwbGF0o2tleadiaWdfc3Vyo3NyY9kxaHR0cDovL2xvY2FsaG9zdDo4MDEyL3N0YXRpYy9hc3NldHMvYmlnX3N1ci5zcGxhdKVzY2FsZcs%2F4AAAAAAAAKhwb3NpdGlvbpPLv%2BZmZmAAAADLP%2BgAAAAAAADLP%2FlHriAAAACocm90YXRpb26Tyz%2F08abAAAAAy7%2Bxg8VAAAAAyz%2Fb7N5gAAAArGh0bWxDaGlsZHJlbpCrcmF3Q2hpbGRyZW6QqmJnQ2hpbGRyZW6Q)

<iframe src="https://vuer.ai/?ws=ws%3A%2F%2Flocalhost%3A8012&grid=false&scene=3gAEqGNoaWxkcmVukd4AB6hjaGlsZHJlbpCjdGFnpVNwbGF0o2tleadiaWdfc3Vyo3NyY9kxaHR0cDovL2xvY2FsaG9zdDo4MDEyL3N0YXRpYy9hc3NldHMvYmlnX3N1ci5zcGxhdKVzY2FsZcs%2F4AAAAAAAAKhwb3NpdGlvbpPLv%2BZmZmAAAADLP%2BgAAAAAAADLP%2FlHriAAAACocm90YXRpb26Tyz%2F08abAAAAAy7%2Bxg8VAAAAAyz%2Fb7N5gAAAArGh0bWxDaGlsZHJlbpCrcmF3Q2hpbGRyZW6QqmJnQ2hpbGRyZW6Q" width="800" height="600"></iframe>

To run this python code locally, you need to install the `vuer` package 
```shell
pip install 'vuer[all]=={VERSION}'
```

Download the asset file at {download}`_static/assets/big_sur.splat`

and run the following code:
"""

with doc:
    from asyncio import sleep
    from vuer import Vuer
    from vuer.schemas import Splat

    app = Vuer()


    @app.spawn(start=True)
    async def main(proxy):
        pi = 3.141592653

        # doc @ """https://vuer.ai/?ws=ws://localhost:8012&position=-0.33,0.75,0.68&rotation=1.31,-3.92,0.44&fov=50"""
        proxy.upsert @ Splat(
            src="https://docs.vuer.ai/en/latest/_static/assets/big_sur.splat",
            scale=0.5,
            position=[-0.7, 0.75, 1.58],
            rotation=[75 / 180 * pi, -3.92 / 180 * pi, 25 / 180 * pi],
            key="big_sur"
        )

        while True:
            await sleep(10.0)

doc @ """You can also run the following code to load the construction scene."""
with doc, doc.skip:
    @app.spawn(start=True)
    async def main(proxy):
        doc @ """ https://vuer.ai/?ws=ws://localhost:8012&position=-0.33,0.39,-0.12&rotation=110,-21,162&fov=50 """
        proxy.upsert @ Splat(
            src="https://docs.vuer.ai/en/latest/_static/assets/construction.splat",
            scale=0.5,
            key="big_sur",
        )

        while True:
            await sleep(10.0)
