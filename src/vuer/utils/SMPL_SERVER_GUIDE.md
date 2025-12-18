# SMPL Server User Guide

## Overview

The SMPL Server keeps SMPL model data on the backend and streams computed mesh vertices to the frontend via WebSocket.

## Architecture

```
┌─────────────────────────────────────┐
│   Python Backend (Port 8012)        │
│   - Loads SMPL model (user provides)│
│   - Computes mesh vertices          │
│   - Streams via WebSocket           │
└─────────────────────────────────────┘
              ↓ WebSocket
┌─────────────────────────────────────┐
│   Web Frontend (Vuer Client)        │
│   - Receives mesh vertices          │
│   - Renders 3D visualization        │
│   - No SMPL model data             │
└─────────────────────────────────────┘
```

## Setup

### 1. Install Dependencies

```bash
cd /Users/57block/repository/vuer/vuer
conda activate smpl  # Or your Python 3.10 environment

# Install required packages
pip install smplx torch numpy scipy
pip install -e .  # Install vuer
pip install 'vuer[all]'  # Install vuer with all dependencies
```

### 2. Prepare SMPL Model

You must download SMPL model files yourself from https://smpl.is.tue.mpg.de/

Create the proper directory structure:

```bash
mkdir -p ~/smpl_models/smpl

# Link or copy your SMPL model files
ln -s /path/to/SMPL_MALE.pkl ~/smpl_models/smpl/SMPL_MALE.pkl
ln -s /path/to/SMPL_FEMALE.pkl ~/smpl_models/smpl/SMPL_FEMALE.pkl
ln -s /path/to/SMPL_NEUTRAL.pkl ~/smpl_models/smpl/SMPL_NEUTRAL.pkl
```

## Convert WebXR Data to SMPL Parameters

```bash
cd /Users/57block/repository/vuer/vuer

# Simple conversion (T-pose with position tracking)
python src/vuer/utils/webxr_to_smpl.py \
    bodies_data/session_20251216_162658.json \
    bodies_data/session_20251216_162658_simple.json
```

### Basic Usage

```bash
python webxr_to_smpl_optimized.py \
    input.json \
    output.json \
    --model_folder /path/to/models/smpl
```

### With GPU Acceleration

```bash
python webxr_to_smpl_optimized.py \
    input.json \
    output.json \
    --model_folder /path/to/models/smpl \
    --device cuda
```

### High Accuracy (More Iterations)

```bash
python webxr_to_smpl_optimized.py \
    input.json \
    output.json \
    --model_folder /path/to/models/smpl \
    --iterations 200 \
    --verbose
```

## Start SMPL Server

```bash
cd /Users/57block/repository/vuer/vuer
export KMP_DUPLICATE_LIB_OK=TRUE
source /opt/miniconda3/bin/activate smpl

# Start server with SMPL sequence
python src/vuer/utils/smpl_websocket_server.py \
    --smpl-model ~/smpl_models/smpl/SMPL_MALE.pkl \
    --smpl-sequence bodies_data/session_20251216_162658_smpl.json \
    --port 8012
```

### View Visualization

Open your browser and visit:
- **Vuer Web Interface**: https://vuer.ai
- Connect to server at: `ws://localhost:8012`

Or if vuer provides a direct URL, visit that address.

## Server Options

```bash
python src/vuer/utils/smpl_websocket_server.py --help

Options:
  --smpl-model PATH       Path to SMPL model .pkl file (required)
  --smpl-sequence PATH    Path to SMPL sequence JSON file
  --webxr-data PATH       Path to WebXR data (for future use)
  --host HOST             Server host (default: 0.0.0.0)
  --port PORT             Server port (default: 8012)
  --cpu                   Force CPU usage (default: auto-detect CUDA)
```

## License Compliance

✅ **This architecture is license-compliant:**
- SMPL model stays on your local machine
- Only computed mesh vertices are sent to browser
- No SMPL model data is distributed
- Users must download SMPL model themselves

## Troubleshooting

### Server won't start

```bash
# Make sure conda environment is activated
conda activate smpl

# Install vuer with all dependencies
pip install 'vuer[all]'

# Check SMPL model path
ls ~/smpl_models/smpl/
```

### Can't see visualization

- Make sure server is running (check terminal output)
- Visit https://vuer.ai and connect to `ws://localhost:8012`
- Check browser console for WebSocket connection errors
