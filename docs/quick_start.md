# Getting Started

To get a quick overview of what you can do with `vuer`, check out the following:

- take a look at the basic tutorial or the tutorial for robotics: [Vuer Basics](https://docs.vuer.ai/en/latest/tutorials/basics.html)
- or try to take a look at the example gallery [here](https://docs.vuer.ai/en/latest/examples/meshes/mesh_loading.html)

You can install `vuer` with `pip`:

```shell
pip install -U 'vuer=={VERSION}'
```

### Pyodide / WebAssembly

Vuer auto-detects Pyodide (Emscripten) environments and excludes server dependencies (`websockets`, `aiohttp`). In browser environments, use `VuerClient` to connect to an existing vuer.ai session:

```python
import micropip
await micropip.install("vuer")

from vuer.client import VuerClient
```

Now you should be able to run scripts show in the examples, and look at the 
results on [vuer.ai](https://vuer.ai). 

To view the scene in VR or AR headsets, you need to install `ngrok` (see [setting up ngrok](ngrok.io)) to promote the websocket
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

To run the examples, you'll need to download the required assets:

1. `git clone https://github.com/vuer-ai/vuer.git`
2. Download `vuer_doc_assets` from [this Google Drive link](https://drive.google.com/file/d/1sx2-UckFTwEpXZwuSWSc4b2f8z0JAF1F/view?usp=sharing)
3. Unzip the downloaded file
4. Place the `vuer_doc_assets` folder alongside the project directory and rename it to `assets`.

```
parent_directory/
├── vuer/                 # This project
│   ├── docs/
│   ├── vuer/
│   └── README.md
└── assets/      # Downloaded assets folder
```

5. Run the examples:

```bash
cd docs/examples/meshes
python mesh_loading.py
```
*Note: you need to install a few optional dependencies such as `open3d` and `trimesh`
for loading and processing point cloud and mesh data. The core vuer itself does not 
depend on these libraries.*

[//]: # (We provide an installation configuration to install these dependencies )

[//]: # (automatically:)

[//]: # (```shell)

[//]: # (pip install -U 'vuer[example]=={VERSION}')

[//]: # (```)

```{admonition} Open3D for Apple Sillicon (2024-03)
:class: tip
The newest version of Open3D seems not compatible with Apple Silicon.
If you are using M1, M2 or M3 macs, install the `open3d==0.15.1` or 
other patches of `0.15`. 
```

[//]: # (### Downloading Examples and 3D Assets)

[//]: # ()
[//]: # (To run the examples, you need to download some example 3D assets. The asset )

[//]: # (files are stored in [this repo]&#40;https://github.com/vuer-ai/assets&#41; with git lfs.)

[//]: # ()
[//]: # (If you haven't, you should follow the git lfs installation instructions to set )

[//]: # (up git lfs repository using [PackageCloud]&#40;https://packagecloud.io/github/git-lfs/install&#41;)

[//]: # (and to install git lfs extension by following the instructions [here]&#40;https://github.com/git-lfs/git-lfs/blob/main/INSTALLING.md&#41;.)

[//]: # ()
[//]: # (**Optional:** To minimize efforts, we provide sample command lines here that we have)

[//]: # (tested to work on a computer running x64 Ubuntu.)

[//]: # ()
[//]: # (```shell)

[//]: # (curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | sudo bash)

[//]: # (sudo apt-get install git-lfs)

[//]: # (git lfs install)

[//]: # (```)

[//]: # ()
[//]: # (With a working installation of `git lfs`, assets should be put into the same folder )

[//]: # (where the main `vuer` repo was cloned by running,)

[//]: # ()
[//]: # (```shell)

[//]: # (cd ~  # assume working in home directory)

[//]: # (git lfs clone https://github.com/vuer-ai/assets)

[//]: # ()
[//]: # (# Download optional assets for all examples)

[//]: # (cd assets/robots)

[//]: # (make  # Download some example robot URDFs)

[//]: # (```)

[//]: # ()
[//]: # (After this, you can find code included in the [official vuer examples]&#40;https://docs.vuer.ai/en/latest/examples/01_trimesh.html&#41; under)

[//]: # (`vuer/docs/examples`. To run the Trimesh examples, do)

[//]: # ()
[//]: # (```shell)

[//]: # (cd ~  # assume working in home directory)

[//]: # (cd vuer/docs/examples)

[//]: # (python 01_trimesh.py)

[//]: # (```)

[//]: # ()
[//]: # (Follow the instructions in the command line to view the visualization. Enjoy!)

## Developing Vuer (Optional)

If you want to develop vuer, you can install it in editable mode plus dependencies
relevant for building the documentations:

**Using uv (recommended):**
```shell
cd vuer
uv sync --group dev
source .venv/bin/activate
```

**Using pip:**
```shell
cd vuer
pip install -e '.[dev]'
```

To build the documentation:
```shell
make clean         # clean the cache from previous building
make docs          # Build HTML documentation
make preview       # Live preview with auto-reload
```

For more information on contributing, see [CONTRIBUTING.md](https://github.com/vuer-ai/vuer/blob/main/CONTRIBUTING.md).

