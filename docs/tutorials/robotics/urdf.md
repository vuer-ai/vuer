
# Loading URDF Files 

In this simple example, we will load an URDF file of the Mars Rover Perserverance into Vuer.

Vuer supports URDF files with mesh files in the following formats: `.dae`, `.stl`, `.obj`, `.ply`. For 
details on the mesh file formats supported, refer to the Typescript source code.

<iframe src="https://vuer.ai/?background=131416,fff&collapseMenu=true&reconnect=0&scene=3gAEqGNoaWxkcmVukt4AB6hjaGlsZHJlbpCjdGFnpFVyZGaja2V5rHBlcnNldmVyYW5jZaNzcmPZRGh0dHBzOi8vZG9jcy52dWVyLmFpL2VuL2xhdGVzdC9fc3RhdGljL3BlcnNldmVyYW5jZS9yb3Zlci9tMjAyMC51cmRmq2pvaW50VmFsdWVz3gAAqHJvdGF0aW9uk8s%2F%2BR64YAAAAAAAqHBvc2l0aW9ukwAAy7%2F4AAAAAAAA3gAHqGNoaWxkcmVukKN0YWekVXJkZqNrZXmvbWFycy1oZWxpY29wdGVyo3NyY9lAaHR0cHM6Ly9kb2NzLnZ1ZXIuYWkvZW4vbGF0ZXN0L19zdGF0aWMvcGVyc2V2ZXJhbmNlL21ocy9NSFMudXJkZqtqb2ludFZhbHVlc94AAKhyb3RhdGlvbpPLP%2FkeuGAAAAAAAKhwb3NpdGlvbpMAyz%2FR64UgAAAAyz%2FgAAAAAAAArGh0bWxDaGlsZHJlbpCrcmF3Q2hpbGRyZW6QqmJnQ2hpbGRyZW6Q" width="100%" height="400px" frameborder="0"></iframe>

```python
from asyncio import sleep
from vuer import Vuer, VuerSession
from vuer.schemas import Urdf

app = Vuer()


@app.spawn(start=True)
async def main(proxy: VuerSession):
    proxy.upsert @ Urdf(
        src="https://docs.vuer.ai/en/latest/_static/perseverance/rover/m2020.urdf",
        jointValues={},
        rotation=[3.14 / 2, 0, 0],
        position=[0, 0, -1.5],
        key="perseverance",
    )

    proxy.upsert @ Urdf(
        src="https://docs.vuer.ai/en/latest/_static/perseverance/mhs/MHS.urdf",
        jointValues={},
        rotation=[3.14 / 2, 0, 0],
        position=[0, 0.28, 0.5],
        key="mars-helicopter",
    )

    # keep the session alive.
    while True:
        await sleep(10)
```
