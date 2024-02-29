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

Now you should be able to run scripts show in the examples, and look at the 
results on [vuer.ai](https://vuer.ai). To view the scene in VR or AR headsets, you
need to install `ngrok` (see [setting up ngrok](ngrok.io)) to promote the websocket
to `wss`.

```{admonition} Using ngrok to promote to <code>wss://</code>
:class: tip
You need to install `ngrok` to promote the local vuer server
from ws://localhost:8012 to wss://xxxx.ngrok.io, (note the double
w[ss] in the protocol), and pass it as a query parameter that 
looks like this:

      https://vuer.ai?ws=wss://xxxxx.ngrok.io

Note the repeated `ws` and then `wss://` in the query string.
```

## Running The Example Gallery

All examples can be run from the document folder in the vuer repository:
[vuer.git/docs](https://github.com/vuer-ai/vuer/tree/main/docs). First 
clone the vuer repo for example code,
```shell
cd ~  # assume working in home directory
git clone https://github.com/vuer-ai/vuer.git
```

Now, you need to install a few optional dependencies such as `open3d` and `trimesh`
for loading and processing point cloud and mesh data. The core vuer itself odes not 
depend on these libraries.

We provide an installation configuration to install these dependencies 
automatically:
```shell
pip install -U 'vuer[example]=={VERSION}'
```

```{admonition} Open3D for Apple Sillicon (2024-03)
:class: tip
The newest version of Open3D seems not compatible with Apple Silicon.
If you are using M1, M2 or M3 macs, install the `open3d==0.15.1` or 
other patches of `0.15`. 
```

### Downloading Examples and 3D Assets

To run the examples, you need to download some example 3D assets. The asset 
files are stored in [this repo](https://github.com/vuer-ai/assets) with git lfs.

If you haven't, you should follow the git lfs installation instructions to set 
up git lfs repository using [PackageCloud](https://packagecloud.io/github/git-lfs/install)
and to install git lfs extension by following the instructions [here](https://github.com/git-lfs/git-lfs/blob/main/INSTALLING.md).

**Optional:** To minimize efforts, we provide sample command lines here that we have
tested to work on a computer running x64 Ubuntu.

```shell
curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | sudo bash
sudo apt-get install git-lfs
git lfs install
```

With a working installation of `git lfs`, assets should be put into the same folder 
where the main `vuer` repo was cloned by running,

```shell
cd ~  # assume working in home directory
git lfs clone https://github.com/vuer-ai/assets

# Download optional assets for all examples
cd assets/robots
make  # Download some example robot URDFs
```

After this, you can find code included in the [official vuer examples](https://docs.vuer.ai/en/latest/examples/01_trimesh.html) under
`vuer/docs/examples`. To run the Trimesh examples, do

```shell
cd ~  # assume working in home directory
cd vuer/docs/examples
python 01_trimesh.py
```

Follow the instructions in the command line to view the visualization. Enjoy!

## Developing Vuer (Optional)

If you want to develop vuer, you can install it in editable mode plus dependencies
relevant for building the documentations:
```shell
cd vuer
pip install -e '.[all]'
```
To build the documentations, run
```shell
make docs
```

