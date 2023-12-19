# Setup

Setting up the conda environment:

```python
conda create -n vuer python=3.8
conda activate vuer
```

Install vuer:

```python
pip install vuer==0.0.8

pip install numpy
pip install trimesh
pip install websockets
pip install aiohttp-cors
pip install pillow
```

To run the examples, download the dataset

```python
cd assets/static_3d
make
```

and run the examples in `vuer/examples/vuer`
