"""Workspace module for managing static and dynamic file serving in Vuer.

This module provides the Workspace class which handles multiple search paths
(overlay) for static files, similar to how $PATH works for executables.

**Basic Usage**::

    from vuer import Vuer, Workspace

    # Multiple search paths - first match wins (like $PATH)
    workspace = Workspace("./assets", "/data/robots", "./fallback")

    app = Vuer(workspace=workspace)

    @app.spawn(start=True)
    async def main(session):
        # Overlay is served at /static automatically
        # Add additional routes:
        app.workspace.mount("./extra", to="/extra")
        app.workspace.route(lambda r: {"status": "ok"}, "/api/status")

**API Overview**::

    workspace = Workspace(*overlay)       # Define overlay search paths
    workspace.overlay(at="/static")       # Expose overlay at URL route
    workspace.mount("./dir", to="/route") # Mount single directory
    workspace.route(fn, "/api")           # Dynamic handler

**Extensibility**:

This module is designed to support different workspace backends:

- ``Workspace`` - Local filesystem (this module)
- ``DashWorkspace`` - ML-Dash experiments (future)
- ``McapWorkspace`` - MCAP recordings (future)
- ``S3Workspace`` - S3 buckets (future)

All workspace types share the same interface (``overlay()``, ``mount()``, ``route()``).
"""

import json
import asyncio
import os
from functools import partial
from pathlib import Path
from typing import Callable, List, Optional, Union

from aiohttp import web


async def handle_file_request_overlay(request, roots: List[Path], filename: str = None):
    """Handle file requests by searching through overlay paths.

    Searches through the list of root paths in order and returns the first
    file found that matches the requested filename. This implements overlay
    filesystem semantics where earlier paths take precedence.

    :param request: The aiohttp request object.
    :param roots: List of root paths to search through (overlay).
    :param filename: Optional filename override. If None, extracted from request.
    :return: FileResponse for the first matching file.
    :raises HTTPNotFound: If file is not found in any of the overlay paths.
    """
    if filename is None:
        filename = request.match_info["filename"]

    for root in roots:
        filepath = Path(root) / filename
        if filepath.is_file():
            response = web.FileResponse(filepath)

            # Check if URL contains "hot" parameter for hot loading mode
            # Hot assets change frequently during development
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


class Workspace:
    """Workspace for managing static and dynamic file serving.

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

    **Full API**::

        workspace = Workspace(*overlay)       # Define search paths
        workspace.paths                       # Access paths (read-only tuple)
        workspace.find("file.txt")            # Find file in overlay
        workspace.overlay(at="/static")       # Expose overlay at route
        workspace.mount("./dir", to="/api")   # Mount single directory
        workspace.route(fn, "/endpoint")      # Register dynamic handler

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
        self._server: Optional["Server"] = None
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

    def bind(self, server: "Server") -> "Workspace":
        """Bind the workspace to a server for route registration.

        This is called automatically when passing a Workspace to Vuer.
        You typically don't need to call this directly.

        :param server: The Vuer/Server instance to bind to.
        :return: self for method chaining.
        """
        self._server = server
        return self

    def _check_bound(self):
        """Check that workspace is bound to a server."""
        if self._server is None:
            raise RuntimeError(
                "Workspace is not bound to a server. "
                "Pass the workspace to Vuer(workspace=...) or call workspace.bind(server)."
            )

    def serve(self, at: str = "/static"):
        """Serve the overlay paths at a URL route.

        .. deprecated::
            Use :meth:`overlay` instead. This method will be removed in a future version.
        """
        import warnings
        warnings.warn(
            "workspace.serve() is deprecated, use workspace.overlay() instead",
            DeprecationWarning,
            stacklevel=2,
        )
        return self.overlay(at=at)

    def overlay(self, at: str = "/static"):
        """Expose the overlay paths at a URL route.

        This makes all files found in the overlay accessible at the given route.
        Files are searched in overlay order; first match wins.

        :param at: The URL route prefix (default: "/static").

        Example::

            workspace = Workspace("./assets", "/data/models")
            workspace.overlay(at="/static")

            # Now accessible:
            # /static/robot.urdf -> searches ./assets/robot.urdf, then /data/models/robot.urdf
        """
        self._check_bound()

        handler = partial(handle_file_request_overlay, roots=self._overlay)
        self._server._add_route(f"{at}/{{filename:.*}}", handler, method="GET")
        self._routes.append({
            "type": "overlay",
            "at": at,
            "paths": self._overlay,
        })

    def mount(self, path: Union[str, Path], *, to: str):
        """Mount a single directory at a URL route.

        Unlike serve() which uses the overlay, this mounts a specific
        directory. Useful for additional static directories outside
        the main overlay.

        :param path: The local directory path to mount.
        :param to: The URL route prefix (keyword-only).

        Example::

            workspace.mount("./uploads", to="/uploads")
            workspace.mount("/var/data/exports", to="/exports")

            # Now accessible:
            # /uploads/file.txt -> ./uploads/file.txt
            # /exports/data.csv -> /var/data/exports/data.csv
        """
        self._check_bound()

        from vuer.base import handle_file_request

        handler = partial(handle_file_request, root=Path(path))
        self._server._add_route(f"{to}/{{filename:.*}}", handler, method="GET")
        self._routes.append({
            "type": "mount",
            "path": Path(path),
            "to": to,
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
        :param content_type: Response content type for non-JSON responses
                            (default: "text/html").

        Example::

            # Simple handler
            workspace.route(lambda r: "Hello!", "/hello")

            # JSON response (automatic)
            workspace.route(lambda r: {"status": "ok", "count": 42}, "/api/status")

            # Async handler
            async def fetch_data(request):
                data = await get_data()
                return {"data": data}

            workspace.route(fetch_data, "/api/data")

            # POST handler
            workspace.route(handle_submit, "/api/submit", method="POST")
        """
        self._check_bound()

        async def handler(request):
            try:
                if asyncio.iscoroutinefunction(fn):
                    result = await fn(request)
                else:
                    result = fn(request)

                # Auto-serialize dict/list as JSON
                if isinstance(result, (dict, list)):
                    return web.Response(
                        text=json.dumps(result),
                        content_type="application/json",
                    )
                return web.Response(text=str(result), content_type=content_type)
            except Exception as e:
                return web.Response(status=500, text=str(e))

        self._server._add_route(path, handler, method=method)
        self._routes.append({
            "type": "route",
            "path": path,
            "method": method,
            "fn": fn.__name__ if hasattr(fn, "__name__") else str(fn),
        })

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
