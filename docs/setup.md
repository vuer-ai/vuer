# Welcome to `vuer`!

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
pip install vuer==0.0.11

pip install numpy
pip install params-proto
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
