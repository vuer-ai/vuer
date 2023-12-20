# Getting Started

To get a quick overview of what you can do with `vuer`, check out the following:

- take a look at the example gallery [here](https://docs.vuer.ai/en/latest/examples.html)
- or try to take a look at this demo [here](https://docs.vuer.ai/en/latest/examples.html#demo)


Setting up the conda environment:

```python
conda create -n vuer python=3.8
conda activate vuer
```

Install vuer:

```python
pip install vuer
```

## Running These Examples

It would also be helpful to install `open3d==0.15.1` and `trimesh` so that you can run some of these 
examples, but vuer itself does not depend on these libraries. 

```shell
pip install open3d==0.15.1 trimesh
```
Now clone this repo,

```shell
git clone https://github.com/vuer-ai/vuer.git
```

**Optional:** If you want to develop vuer, you can install it in editable mode:
```shell
cd vuer
pip install -e .
```
To run the examples, look for the asset you need in the assets folder, and run the
Makefile to download the dataset.

```python
cd assets/static_3d
make
```

Then you can run the examples in `vuer/examples/vuer`.

Enjoy!
