# Welcome to `Vuer`  

[![PyPI version fury.io](https://badge.fury.io/py/vuer.svg)](https://pypi.python.org/pypi/vuer/)

![Production](https://api.netlify.com/api/v1/badges/2df7f3ba-1a26-4047-b76a-d7401f907bb5/deploy-status)

![Staging](https://api.netlify.com/api/v1/badges/1727476e-c992-4dc1-98bf-92ef266cad78/deploy-status)

Vuer is a light-weight visualization toolkit for interacting with dynamic 3D and robotics data. It is
VR and AR ready, and can be run on mobile devices.

## Installation

You can install `vuer` with `pip`:

```shell
pip install vuer
```

Here is an example that loads a URDF file and displays it in the browser. For a more comprehensive list of examples, please refer to the [examples](https://docs.vuer.ai/en/latest/examples.html) page.

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Urdf

app = Vuer()


@app.spawn(start=True)
async def main(session: VuerSession):
    app.set @ DefaultScene(
        Urdf("assets/urdf/robotiq.urdf"),
    )

    while True:
        await session.sleep(0.1)
```

<iframe src="https://vuer.ai?collapseMenu=True&background=131416,fff&initCamPos=2.8,2.2,2.5&ws=ws%3A%2F%2Flocalhost%3A8012&scene=3gAJqGNoaWxkcmVukd4ABKhjaGlsZHJlbpHeAAaoY2hpbGRyZW6Qo3RhZ6RVcmRmo2tleaExo3NyY9lSaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25hc2EtanBsL20yMDIwLXVyZGYtbW9kZWxzL21haW4vcm92ZXIvbTIwMjAudXJkZqtqb2ludFZhbHVlc94AAKhyb3RhdGlvbpPLQAkeuGAAAAAAAKN0YWenTW92YWJsZaNrZXmhMqhwb3NpdGlvbpMAAMs%2FwzMzQAAAAKN0YWelU2NlbmWja2V5oTOidXCTAAABpGdyaWTDqHNob3dMZXZhwqtyYXdDaGlsZHJlbpLeAASoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5tWRlZmF1bHRfYW1iaWVudF9saWdodKlpbnRlbnNpdHkB3gAFqGNoaWxkcmVukKN0YWewRGlyZWN0aW9uYWxMaWdodKNrZXm5ZGVmYXVsdF9kaXJlY3Rpb25hbF9saWdodKlpbnRlbnNpdHkBpmhlbHBlcsOsaHRtbENoaWxkcmVukLJiYWNrZ3JvdW5kQ2hpbGRyZW6Q" width="100%" height="400px" frameborder="0"></iframe>

Vuer is built by researchers at MIT and UCSD in fields including robotics, computer vision, and computer graphics.

- light-weight and performant
- VR and AR ready
- has a strong community support
- Hackable and extensible
- Open source, licensed under MIT

To get a quick overview of what you can do with  <code style="font-size: 1.3em; background-clip: text; color: transparent; background-image: linear-gradient(to right, rgb(0,140,220), rgb(226,213,79), rgb(210,0,12));">vuer</code>, check out the following:

- take a look at the example gallery [here](https://docs.vuer.ai/en/latest/examples.html)
- or try to take a look at this demo [here](https://docs.vuer.ai/en/latest/examples.html#demo)

For a comprehensive list of visualization components, please refer to
the [API documentation on Components](https://docs.vuer.ai/en/latest/api.html).

For a comprehensive list of data types, please refer to the [API documentation on Data Types](https://docs.vuer.ai/en/latest/api.html).

Now, to run the examples, first download the example datasets. 

Each subdirectory in the `assets` directory contains a `Makefile`. Run the `make` command in each subdirectory to download the datasets. For example:

```bash
cd assets/static_3d
make
```

Then run the examples

```bash
cd vuer/examples/vuer
python 01_trimesh.py
```

## To Develop

### Setting up the Document Site

https://www.docslikecode.com/learn/05-cd-for-docs/

```bash
cd docs
pip install -r requirements.txt
```



