"""Workspace module for managing static file search paths in Vuer.

This module provides the Workspace class which defines multiple search paths
(overlay) for static files, similar to how $PATH works for executables.

**Basic Usage**::

    from vuer import Vuer, Workspace

    # Multiple search paths - first match wins (like $PATH)
    workspace = Workspace("./assets", "/data/robots", "./fallback")

    # Configure additional routes
    workspace.mount("./uploads", to="/uploads")
    workspace.route(lambda r: {"status": "ok"}, "/api/status")

    app = Vuer(workspace=workspace)

**API Overview**::

    workspace = Workspace(*overlay)       # Define overlay search paths
    workspace.paths                       # Access paths (read-only tuple)
    workspace.find("file.txt")            # Find file in overlay
    workspace.mount("./dir", to="/route") # Mount single directory
    workspace.route(fn, "/api")           # Dynamic handler

**Extensibility**:

This module is designed to support different workspace backends:

- ``Workspace`` - Local filesystem (this module)
- ``DashWorkspace`` - ML-Dash experiments (future)
- ``McapWorkspace`` - MCAP recordings (future)
- ``S3Workspace`` - S3 buckets (future)
"""

import asyncio
import json
import os
from functools import partial
from pathlib import Path
from typing import Callable, List, Optional, Union

from aiohttp import web


async def handle_file_request_overlay(request, roots, filename=None):
    """Handle file requests by searching through overlay paths.

    Searches through the list of root paths in order and returns the first
    file found that matches the requested filename. This implements overlay
    filesystem semantics where earlier paths take precedence (like $PATH).
    """
    if filename is None:
        filename = request.match_info["filename"]

    for root in roots:
        filepath = Path(root) / filename
        if filepath.is_file():
            response = web.FileResponse(filepath)

            hot_key = None
            for key in request.query.keys():
                if key.lower() == "hot":
                    hot_key = key
                    break

            if hot_key:
                hot_value = request.query.get(hot_key, "")
                if hot_value.lower() != "false":
                    response.headers["Cache-Control"] = "no-cache"

            return response

    raise web.HTTPNotFound()


async def handle_file_request_single(request, root, filename=None):
    """Handle file requests for a single directory."""
    if filename is None:
        filename = request.match_info["filename"]

    filepath = Path(root) / filename

    if not filepath.is_file():
        raise web.HTTPNotFound()

    response = web.FileResponse(filepath)

    hot_key = None
    for key in request.query.keys():
        if key.lower() == "hot":
            hot_key = key
            break

    if hot_key:
        hot_value = request.query.get(hot_key, "")
        if hot_value.lower() != "false":
            response.headers["Cache-Control"] = "no-cache"

    return response


class Workspace:
    """Workspace defines search paths for static file serving.

    A Workspace manages multiple search paths (overlay) for serving static files,
    similar to how $PATH works for executables. When a file is requested, paths
    are searched in order and the first match wins.

    This is useful when assets are spread across multiple directories::

        # Robot models in one place, textures in another
        workspace = Workspace("./local_assets", "/shared/robots", "/data/textures")

        # Request for /static/robot.urdf searches:
        #   1. ./local_assets/robot.urdf
        #   2. /shared/robots/robot.urdf
        #   3. /data/textures/robot.urdf
        # Returns first match

    **API**::

        workspace = Workspace(*overlay)       # Define search paths
        workspace.paths                       # Access paths (read-only tuple)
        workspace.find("file.txt")            # Find file in overlay
        workspace.mount("./dir", to="/route") # Mount single directory
        workspace.route(fn, "/api")           # Dynamic handler

    Attributes:
        paths: Tuple of paths that form the search overlay.
    """

    def __init__(self, *overlay: Union[str, Path]):
        """Initialize the Workspace with overlay paths.

        :param overlay: Variable number of paths to search for static files.
                       Earlier paths take precedence (like $PATH).
                       If no paths provided, defaults to current directory ".".

        Example::

            # Single path
            workspace = Workspace("./assets")

            # Multiple paths - first match wins
            workspace = Workspace("./local", "/shared", "/data")

            # No args = current directory
            workspace = Workspace()
        """
        if not overlay:
            overlay = (".",)

        self._overlay: tuple[Path, ...] = tuple(Path(p) for p in overlay)
        self._routes: List[dict] = []

    @property
    def paths(self) -> tuple[Path, ...]:
        """The overlay paths (read-only).

        :return: Tuple of Path objects representing the search paths.
        """
        return self._overlay

    @property
    def absolute_paths(self) -> List[str]:
        """Get absolute paths as strings for display.

        :return: List of absolute path strings.
        """
        return [os.path.abspath(p) for p in self._overlay]

    def find(self, filename: str) -> Optional[Path]:
        """Find a file in the overlay paths.

        Searches through paths in order and returns the first match.

        :param filename: The filename (relative path) to search for.
        :return: Path to the file if found, None otherwise.

        Example::

            workspace = Workspace("./assets", "/data")
            path = workspace.find("models/robot.urdf")
            if path:
                print(f"Found at: {path}")
        """
        for root in self._overlay:
            filepath = root / filename
            if filepath.is_file():
                return filepath
        return None

    def overlay_handler(self) -> Callable:
        """Get the handler function for serving overlay files.

        This returns an aiohttp handler that searches through all overlay
        paths in order to find and serve files.

        :return: Async handler function for aiohttp.
        """
        return partial(handle_file_request_overlay, roots=self._overlay)

    def mount(self, path: Union[str, Path], *, to: str):
        """Mount a directory at a URL route.

        This registers a route configuration that will be applied when
        the workspace is bound to a server.

        :param path: The local directory path to mount.
        :param to: The URL route prefix (keyword-only).

        Example::

            workspace = Workspace("./assets")
            workspace.mount("./uploads", to="/uploads")
            workspace.mount("/var/exports", to="/exports")
        """
        handler = partial(handle_file_request_single, root=Path(path))
        self._routes.append({
            "type": "mount",
            "path": to,
            "handler": handler,
            "method": "GET",
        })

    def route(
        self,
        fn: Callable,
        path: str,
        *,
        method: str = "GET",
        content_type: str = "text/html",
    ):
        """Register a dynamic route handler.

        The function receives the request and returns content to serve.
        Supports both sync and async functions. Dict/list returns are
        automatically serialized as JSON.

        :param fn: Handler function. Receives request, returns content.
                  Can be sync or async. Dict/list -> JSON automatically.
        :param path: The URL path for this route.
        :param method: HTTP method (default: "GET").
        :param content_type: Response content type for non-JSON responses.

        Example::

            workspace = Workspace("./assets")

            # JSON response (automatic)
            workspace.route(lambda r: {"status": "ok"}, "/api/status")

            # Async handler
            async def fetch_data(request):
                return {"data": await get_data()}

            workspace.route(fetch_data, "/api/data")
        """
        async def handler(request):
            try:
                if asyncio.iscoroutinefunction(fn):
                    result = await fn(request)
                else:
                    result = fn(request)

                if isinstance(result, (dict, list)):
                    return web.Response(
                        text=json.dumps(result),
                        content_type="application/json",
                    )
                return web.Response(text=str(result), content_type=content_type)
            except Exception as e:
                return web.Response(status=500, text=str(e))

        self._routes.append({
            "type": "route",
            "path": path,
            "handler": handler,
            "method": method,
        })

    @property
    def routes(self) -> List[dict]:
        """Get registered routes for the server to apply.

        Returns a list of route configurations that the server should
        register when starting up.

        :return: List of route configuration dicts with path, handler, method.
        """
        return self._routes

    def __repr__(self):
        paths_str = ", ".join(f'"{p}"' for p in self._overlay)
        return f"Workspace({paths_str})"


def workspace_from_config(
    config: Union[str, Path, List[Union[str, Path]], "Workspace", None],
) -> Workspace:
    """Convert various workspace configurations to a Workspace instance.

    This handles backwards compatibility with the old workspace parameter
    that accepted strings, paths, or lists.

    :param config: Workspace configuration. Can be:
                  - None: returns Workspace() (current directory)
                  - str or Path: single path
                  - List of str/Path: multiple paths (overlay)
                  - Workspace: returned as-is
    :return: A Workspace instance.

    Example::

        # All of these work:
        ws = workspace_from_config(None)           # Workspace(".")
        ws = workspace_from_config("./assets")     # Workspace("./assets")
        ws = workspace_from_config(["./a", "./b"]) # Workspace("./a", "./b")
        ws = workspace_from_config(existing_ws)    # returns existing_ws
    """
    if config is None:
        return Workspace()
    if isinstance(config, Workspace):
        return config
    if isinstance(config, (str, Path)):
        return Workspace(config)
    if isinstance(config, list):
        return Workspace(*config)
    raise TypeError(f"Cannot convert {type(config)} to Workspace")
