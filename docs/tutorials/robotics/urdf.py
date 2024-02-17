from cmx import doc

doc @ """
# Loading URDF Files 

In this simple example, we will load an URDF file of the Mars Rover Perserverance into Vuer.

Vuer supports URDF files with mesh files in the following formats: `.dae`, `.stl`, `.obj`, `.ply`. For 
details on the mesh file formats supported, refer to the Typescript source code.

<iframe src="https://vuer.ai/?background=131416,fff&collapseMenu=true&scene=3gAEqGNoaWxkcmVukt4AB6hjaGlsZHJlbpCjdGFnpFVyZGaja2V5rHBlcnNldmVyYW5jZaNzcmPZRGh0dHBzOi8vZG9jcy52dWVyLmFpL2VuL2xhdGVzdC9fc3RhdGljL3BlcnNldmVyYW5jZS9yb3Zlci9tMjAyMC51cmRmq2pvaW50VmFsdWVz3gAAqHJvdGF0aW9uk8tACR64YAAAAAAAqHBvc2l0aW9ukwAA%2Ft4AB6hjaGlsZHJlbpCjdGFnpFVyZGaja2V5r21hcnMtaGVsaWNvcHRlcqNzcmPZQGh0dHBzOi8vZG9jcy52dWVyLmFpL2VuL2xhdGVzdC9fc3RhdGljL3BlcnNldmVyYW5jZS9taHMvTUhTLnVyZGaram9pbnRWYWx1ZXPeAACocm90YXRpb26Ty0AJHrhgAAAAAACocG9zaXRpb26TAAD%2BrGh0bWxDaGlsZHJlbpCrcmF3Q2hpbGRyZW6QqmJnQ2hpbGRyZW6Q" width="100%" height="400px" frameborder="0"></iframe>
"""

with doc, doc.skip:
    from asyncio import sleep
    from vuer import Vuer, VuerSession
    from vuer.schemas import Urdf

    app = Vuer()


    @app.spawn(start=True)
    async def main(proxy: VuerSession):
        proxy.upsert @ Urdf(
            src="https://docs.vuer.ai/en/latest/_static/perseverance/rover/m2020.urdf",
            jointValues={},
            rotation=[3.14, 0, 0],
            position=[0, 0, -2],
            key="perseverance",
        )

        proxy.upsert @ Urdf(
            src="https://docs.vuer.ai/en/latest/_static/perseverance/mhs/MHS.urdf",
            jointValues={},
            rotation=[3.14, 0, 0],
            position=[0, 0, -2],
            key="mars-helicopter",
        )

        # keep the session alive.
        while True:
            await sleep(10)

doc.flush()
