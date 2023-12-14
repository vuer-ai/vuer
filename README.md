# Vuer: A modern 3D Visualizer for Robotics and VR

Vuer is a 3D visualization tool for robotics and VR applications.

## Installation In A Fresh Conda Environment

Setup the conda environment
```bash
conda create -n vuer python=3.8
conda activate vuer
```

Install vuer
```bash
pip install vuer==0.0.9

pip install numpy
pip install trimesh
pip install websockets
pip install aiohttp-cors
pip install pillow
```

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



