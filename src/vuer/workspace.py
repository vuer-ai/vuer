"""Workspace module for managing static and dynamic file serving in Vuer.

This module provides the Workspace class which handles multiple search paths
for static files and offers a clean API for serving content.
"""

import os
from functools import partial
from pathlib import Path
from typing import Callable, List, Optional, Union

from aiohttp import web


async def handle_file_request_multi(request, roots: List[Path], filename=None):
    """Handle file requests by searching through multiple root paths.

    Searches through the list of root paths in order and returns the first
    file found that matches the requested filename.

    :param request: The aiohttp request object.
    :param roots: List of root paths to search through.
    :param filename: Optional filename override. If None, extracted from request.
    :return: FileResponse for the first matching file.
    :raises HTTPNotFound: If file is not found in any of the root paths.
    """
    if filename is None:
        filename = request.match_info["filename"]

    for root in roots:
        filepath = Path(root) / filename
        if filepath.is_file():
            response = web.FileResponse(filepath)

            # Check if URL contains "hot" parameter for hot loading mode
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

    A Workspace manages multiple search paths for serving static files and
    provides a clean API for configuring routes.

    Usage::

        # Single path
        workspace = Workspace(paths="./assets")

        # Multiple paths - first match wins
        workspace = Workspace(paths=["./local", "./shared", "/data/assets"])

        # Using environment variable
        workspace = Workspace()  # Uses VUER_WORKSPACE env var or "."

    Attributes:
        paths: Single path or list of paths to search for static files.
               Earlier paths take precedence when files exist in multiple locations.
    """

    def __init__(
        self,
        paths: Union[str, Path, List[Union[str, Path]]] = ".",
    ):
        """Initialize the Workspace.

        :param paths: Single path or list of paths to search for static files.
        """
        self.paths = paths
        self._server: Optional["Server"] = None
        self._routes: List[dict] = []
        self._normalize_paths()

    def _normalize_paths(self):
        """Normalize paths to a list of Path objects."""
        if isinstance(self.paths, (str, Path)):
            self._paths = [Path(self.paths)]
        else:
            self._paths = [Path(p) for p in self.paths]

    @property
    def roots(self) -> List[Path]:
        """Get the list of root paths (normalized)."""
        return self._paths

    @property
    def absolute_paths(self) -> List[str]:
        """Get absolute paths as strings for display."""
        return [os.path.abspath(p) for p in self._paths]

    def find_file(self, filename: str) -> Optional[Path]:
        """Find a file in the workspace paths.

        Searches through paths in order and returns the first match.

        :param filename: The filename to search for.
        :return: Path to the file if found, None otherwise.
        """
        for root in self._paths:
            filepath = root / filename
            if filepath.is_file():
                return filepath
        return None

    def bind(self, server: "Server"):
        """Bind the workspace to a server for route registration.

        :param server: The Vuer/Server instance to bind to.
        :return: self for method chaining.
        """
        self._server = server
        return self

    def link(self, route: str = "/static"):
        """Serve workspace files at the given route.

        This is the primary method for making workspace files accessible.
        Files are searched in path order; first match wins.

        :param route: The URL route prefix (default: "/static").
        """
        if self._server is None:
            raise RuntimeError(
                "Workspace is not bound to a server. Call workspace.bind(server) first."
            )

        _fn = partial(handle_file_request_multi, roots=self._paths)
        self._server._add_route(f"{route}/{{filename:.*}}", _fn, method="GET")
        self._routes.append({"type": "static", "route": route, "paths": self._paths})

    def serve_static(self, path: Union[str, Path], route: str):
        """Serve a specific directory at a route.

        Unlike `link()` which uses the workspace paths, this serves a
        specific directory. Useful for additional static directories.

        :param path: The directory path to serve.
        :param route: The URL route prefix.
        """
        if self._server is None:
            raise RuntimeError(
                "Workspace is not bound to a server. Call workspace.bind(server) first."
            )

        from vuer.base import handle_file_request

        _fn = partial(handle_file_request, root=Path(path))
        self._server._add_route(f"{route}/{{filename:.*}}", _fn, method="GET")
        self._routes.append({"type": "static", "route": route, "paths": [Path(path)]})

    def serve_dynamic(self, fn: Callable, route: str, method: str = "GET", content_type: str = "text/html"):
        """Serve dynamic content via a function at a route.

        The function should return the content to serve. For async functions,
        they will be awaited automatically.

        :param fn: Function that returns the content to serve.
                   Can be sync or async. Receives the request as argument.
        :param route: The URL route.
        :param method: HTTP method (default: "GET").
        :param content_type: Response content type (default: "text/html").

        Example::

            @workspace.serve_dynamic
            def status(request):
                return {"status": "ok", "count": 42}

            # Or with explicit route
            workspace.serve_dynamic(lambda r: "Hello!", "/hello")
        """
        if self._server is None:
            raise RuntimeError(
                "Workspace is not bound to a server. Call workspace.bind(server) first."
            )

        import asyncio
        import json

        async def handler(request):
            try:
                if asyncio.iscoroutinefunction(fn):
                    result = await fn(request)
                else:
                    result = fn(request)

                # Auto-detect JSON content
                if isinstance(result, (dict, list)):
                    return web.Response(
                        text=json.dumps(result),
                        content_type="application/json"
                    )
                return web.Response(text=str(result), content_type=content_type)
            except Exception as e:
                return web.Response(status=500, text=str(e))

        self._server._add_route(route, handler, method=method)
        self._routes.append({"type": "dynamic", "route": route, "fn": fn.__name__})

    def __repr__(self):
        paths_str = ", ".join(str(p) for p in self._paths)
        return f"Workspace(paths=[{paths_str}])"


# Backwards compatibility: allow string/Path conversion
def workspace_from_config(
    config: Union[str, Path, List[Union[str, Path]], "Workspace", None]
) -> "Workspace":
    """Convert various workspace configurations to a Workspace instance.

    :param config: String, Path, list of paths, or existing Workspace.
    :return: A Workspace instance.
    """
    if config is None:
        return Workspace()
    if isinstance(config, Workspace):
        return config
    return Workspace(paths=config)
