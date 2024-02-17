# Getting Started

To get a quick overview of what you can do with `vuer`, check out the following:

- take a look at the basic tutorial or the tutorial for robotics:
  - [Vuer Basics](tutorials/basics)
  - [Tutorial for Roboticists](tutorials/robotics)
- or try to take a look at the example gallery [here](examples/01_trimesh)

Setting up the conda environment:

```python
conda create -n vuer python=3.8
conda activate vuer
```

Install vuer --- the latest version is `{VERSION}` on [pypi](https://pypi.org/project/vuer/{VERSION}/).

```python
pip install -U 'vuer[all]=={VERSION}'
```

## Running These Examples

It would also be helpful to install `open3d==0.15.x` and `trimesh` so that you can run some 
of these examples, but vuer itself does not depend on these libraries. Note: other `0.15.x` versions are fine too, just not the newest version if you are on an M1 Mac.

```shell
pip install "open3d>=0.15.0,<0.16.0" trimesh
```

Now clone this repo,
```shell
git clone https://github.com/vuer-ai/vuer.git
```

**Optional:** If you want to develop vuer, you can install it in editable mode:
```shell
cd vuer
pip install -e '.[all]'
```
To run the examples, look for the asset you need in the assets folder, and run the
Makefile to download the dataset.

```python
cd assets/static_3d
make
```

Then you can run the examples in `vuer/examples`.

Enjoy!
