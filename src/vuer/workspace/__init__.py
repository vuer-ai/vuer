"""Workspace backends for Vuer static file serving.

This package provides different workspace implementations for serving
static files from various storage backends.

**Available workspaces**:

- ``Workspace``     - Local filesystem (default). Auto-upgrades to
                      ``McapWorkspace`` when ``.mcap`` files are detected.
- ``McapWorkspace`` - MCAP recordings (attachments + topics over HTTP).
- ``Blob``          - In-memory data with explicit content-type.

**Image encoders** (for serving in-memory images)::

    from vuer.workspace import jpg, png, b64jpg, b64png

- ``jpg(image, quality=90)`` - Encode as JPEG bytes
- ``png(image)`` - Encode as PNG bytes (supports alpha)
- ``b64jpg(image, quality=90)`` - Encode as base64 JPEG data URI
- ``b64png(image)`` - Encode as base64 PNG data URI

**Example**::

    from vuer import Vuer
    from vuer.workspace import jpg, png

    vuer = Vuer()
    vuer.workspace.link(lambda: jpg(camera.frame), "/live/frame.jpg")
    vuer.workspace.link(lambda: png(depth_map), "/depth.png")

**Custom MIME types**::

    from vuer.workspace import MIME_TYPES

    MIME_TYPES[".npy"] = "application/x-npy"
    MIME_TYPES.guess("data.npy")  # "application/x-npy"

**MCAP recordings**::

    from vuer.workspace import McapWorkspace

    # Workspace() auto-upgrades when .mcap paths are detected
    ws = Workspace("recording.mcap")
    ws = Workspace("recording.mcap", "./local_assets")

    # Or use McapWorkspace directly for extra kwargs
    ws = McapWorkspace("recording.mcap", topic_prefix="/data")

Future workspaces:

- ``DashWorkspace`` - ML-Dash experiments
- ``S3Workspace`` - S3 buckets
"""

from vuer.workspace.workspace import (
    Blob,
    MimeTypes,
    TailRecord,
    TreeNode,
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
from vuer.workspace.mcap_workspace import McapWorkspace

__all__ = [
    # Workspace
    "Blob",
    "MimeTypes",
    "TailRecord",
    "TreeNode",
    "Workspace",
    "McapWorkspace",
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
