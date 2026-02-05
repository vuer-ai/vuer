
# Splat

The `Splat` component renders 3D Gaussian Splatting scenes.

## Basic Usage

A minimal example that loads a 3D Gaussian Splat from a URL:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Splat, OrbitControls

app = Vuer()

@app.spawn(start=True)
async def main(sess: VuerSession):
    sess.set @ DefaultScene(
        Splat(
            key="splat",
            src="https://huggingface.co/cakewalk/splat-data/resolve/main/nike.splat",
            scale=0.5,
            position=[0, -1.0, 0.0],
        ),
        showGrid=False,
        up=[0, 0, -1],
        bgChildren=[
            OrbitControls(key="OrbitControls")
        ],
    )

    await sess.forever()
```


## Learn More

For detailed examples of using `Splat`, see:

- [OpenAI Sora Demo](../examples/openai_sora.md) - 3DGS from OpenAI Sora Video
