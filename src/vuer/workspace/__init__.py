"""Workspace backends for Vuer static file serving.

This package provides different workspace implementations for serving
static files from various storage backends.

Available workspaces:

- ``Workspace`` - Local filesystem (default)
- ``Blob`` - In-memory data with explicit content-type

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

__all__ = [
    "Blob",
    "Workspace",
    "guess_content_type",
    "sanitize_path",
    "workspace_from_config",
    "MIME_TYPES",
    "ResolveResult",
]
