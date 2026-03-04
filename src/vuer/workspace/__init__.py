"""Workspace backends for Vuer static file serving.

This package provides different workspace implementations for serving
static files from various storage backends.

**Available workspaces**:

- ``FilesystemWorkspace`` / ``Workspace`` - Local filesystem (default).
- ``McapWorkspace`` - MCAP recordings (attachments + topics over HTTP).
- ``OverlayWorkspace`` - Composes multiple backends, first match wins.
- ``BaseWorkspace`` - Abstract base class for custom backends.

**Factory**::

    from vuer.workspace import workspace_from_config

    ws = workspace_from_config("recording.mcap")             # McapWorkspace
    ws = workspace_from_config(["recording.mcap", "."])      # OverlayWorkspace
    ws = workspace_from_config("./assets")                   # FilesystemWorkspace

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

    from vuer.workspace import McapWorkspace, OverlayWorkspace, FilesystemWorkspace

    # MCAP-only
    ws = McapWorkspace("recording.mcap", topic_prefix="/data")

    # MCAP + filesystem overlay (explicit)
    ws = OverlayWorkspace(McapWorkspace("recording.mcap"), FilesystemWorkspace("./assets"))

    # Or via factory (auto-compose)
    ws = workspace_from_config(["recording.mcap", "./assets"])

Future workspaces:

- ``DashWorkspace`` - ML-Dash experiments
- ``S3Workspace`` - S3 buckets
"""

from vuer.workspace.workspace import (
    BaseWorkspace,
    Blob,
    FilesystemWorkspace,
    MimeTypes,
    OverlayWorkspace,
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
    # Workspace hierarchy
    "BaseWorkspace",
    "FilesystemWorkspace",
    "OverlayWorkspace",
    "McapWorkspace",
    # Backward-compat alias
    "Workspace",
    # Data types
    "Blob",
    "MimeTypes",
    "TailRecord",
    "TreeNode",
    "ResolveResult",
    # Utilities
    "guess_content_type",
    "sanitize_path",
    "workspace_from_config",
    "MIME_TYPES",
    # Encoders
    "jpg",
    "png",
    "b64jpg",
    "b64png",
    "decode_b64png",
]
