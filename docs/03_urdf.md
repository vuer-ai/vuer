
# Loading URDF Files from the Web


![_static/03_urdf.jpg](_static/03_urdf.jpg)

Setup: Fist run the following in the terminal
```shell
cd examples/vuer/assets/robots
make
```

And then run the following in the example folder:

```python
from vuer import Vuer
from vuer.schemas import Urdf, Movable, DefaultScene

app = Vuer()

pi = 3.14

@app.spawn(start=True)
async def main(ws):
    app.set @ DefaultScene(
        Movable(
            Urdf(
                src="https://raw.githubusercontent.com/nasa-jpl/m2020-urdf-models/main/rover/m2020.urdf",
                jointValues={},
                rotation=[pi, 0, 0],
            ),
            position=[0, 0, 0.3],
        ),
        grid=True,
    )

    await save_doc()
```


<iframe src="https://vuer.ai/?scene=3gAIqGNoaWxkcmVukd4ABKhjaGlsZHJlbpHeAAaoY2hpbGRyZW6Qo3RhZ6RVcmRmo2tleaE3o3NyY9lSaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25hc2EtanBsL20yMDIwLXVyZGYtbW9kZWxzL21haW4vcm92ZXIvbTIwMjAudXJkZqtqb2ludFZhbHVlc94AAKhyb3RhdGlvbpPLQAkeuGAAAAAAAKN0YWenTW92YWJsZaNrZXmhOKhwb3NpdGlvbpMAAMs%2F0zMzQAAAAKN0YWelU2NlbmWja2V5oTmidXCTAAABpGdyaWTDq3Jhd0NoaWxkcmVukt4ABKhjaGlsZHJlbpCjdGFnrEFtYmllbnRMaWdodKNrZXm1ZGVmYXVsdF9hbWJpZW50X2xpZ2h0qWludGVuc2l0eQHeAAWoY2hpbGRyZW6Qo3RhZ7BEaXJlY3Rpb25hbExpZ2h0o2tleblkZWZhdWx0X2RpcmVjdGlvbmFsX2xpZ2h0qWludGVuc2l0eQGmaGVscGVyw6xodG1sQ2hpbGRyZW6QsmJhY2tncm91bmRDaGlsZHJlbpA%3D" width="100%" height="400px" frameborder="0"></iframe>

![_static/03_urdf.jpg](_static/03_urdf.jpg)