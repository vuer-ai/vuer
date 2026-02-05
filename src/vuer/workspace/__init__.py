"""Workspace backends for Vuer static file serving.

This package provides different workspace implementations for serving
static files from various storage backends.

**Available workspaces**:

- ``Workspace`` - Local filesystem (default)
- ``Blob`` - In-memory data with explicit content-type

**Image encoders** (for serving in-memory images):

- ``jpg(image, quality=90)`` - Encode as JPEG bytes
- ``png(image)`` - Encode as PNG bytes (supports alpha)
- ``b64jpg(image, quality=90)`` - Encode as base64 JPEG data URI
- ``b64png(image)`` - Encode as base64 PNG data URI

**Example**::

    from vuer import Workspace, jpg, png

    ws = Workspace()
    ws.link(lambda: jpg(camera.frame), "/live/frame.jpg")
    ws.link(lambda: png(depth_map), "/depth.png")

**Custom MIME types**::

    from vuer.workspace import MIME_TYPES

    MIME_TYPES[".npy"] = "application/x-npy"
    MIME_TYPES[".h5"] = "application/x-hdf5"

Future workspaces:

- ``DashWorkspace`` - ML-Dash experiments
- ``McapWorkspace`` - MCAP recordings
- ``S3Workspace`` - S3 buckets
"""

from vuer.workspace.workspace import (
    Blob,
    Workspace,
    guess_content_type,
    sanitize_path,
    workspace_from_config,
    MIME_TYPES,
    ResolveResult,
)
from vuer.workspace.encoders import (
    jpg,
    png,
    b64jpg,
    b64png,
    decode_b64png,
)

__all__ = [
    # Workspace
    "Blob",
    "Workspace",
    "guess_content_type",
    "sanitize_path",
    "workspace_from_config",
    "MIME_TYPES",
    "ResolveResult",
    # Encoders
    "jpg",
    "png",
    "b64jpg",
    "b64png",
    "decode_b64png",
]
