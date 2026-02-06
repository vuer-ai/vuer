"""Workspace module for managing static file search paths in Vuer.

This module provides the Workspace class which defines multiple search paths
(overlay) for static files, similar to how $PATH works for executables.

**Basic Usage**::

    from vuer import Vuer
    from vuer.workspace import jpg

    vuer = Vuer(workspace="./assets")

    @vuer.spawn(start=True)
    async def main(session):
        # Add dynamic links at runtime via vuer.workspace
        vuer.workspace.link(lambda: jpg(camera.frame), "/live/frame.jpg")
        vuer.workspace.link(lambda: {"status": "ok"}, "/api/status")

        # Remove when done
        vuer.workspace.unlink("/live/frame.jpg")

        await session.forever()

**API Overview**::

    vuer.workspace.link(fn, "/path")      # Link callable to URL (dynamic)
    vuer.workspace.unlink("/path")        # Remove a link
    vuer.workspace.find("file.txt")       # Find file in overlay (sync)
    vuer.workspace.resolve("file.txt")    # Resolve to Path|bytes|Blob (async)

**Extensibility**:

This module is designed to support different workspace backends.
Subclasses override ``resolve()`` for different storage:

- ``Workspace`` - Local filesystem (this module)
- ``DashWorkspace`` - ML-Dash experiments (future)
- ``McapWorkspace`` - MCAP recordings (future)
- ``S3Workspace`` - S3 buckets (future)

**Return types from resolve()**::

    Path              - Local file (server uses FileResponse)
    bytes             - In-memory data, content-type guessed from filename
    Blob(data, type)  - In-memory data with explicit content-type
    AsyncIterator     - Streaming response
    None              - Not found (404)
"""

import asyncio
import inspect
import json
import mimetypes
import os
from dataclasses import dataclass
from pathlib import Path
from typing import AsyncIterator, Callable, List, Optional, Union

from aiohttp import web


class MimeTypes(dict):
  """Dict subclass for MIME type mappings with a guess method.

  Example::

      MIME_TYPES[".npy"] = "application/x-npy"
      content_type = MIME_TYPES.guess("data.npy")
  """

  def guess(self, filename: str) -> str:
    """Guess content-type from filename.

    Checks this dict first, then falls back to Python's mimetypes module.

    :param filename: Filename or path to guess type for.
    :return: MIME type string.
    """
    ext = Path(filename).suffix.lower()
    if ext in self:
      return self[ext]
    mime_type, _ = mimetypes.guess_type(filename)
    return mime_type or "application/octet-stream"


# Extended MIME types for robotics files.
# Add custom types: MIME_TYPES[".custom"] = "application/x-custom"
MIME_TYPES = MimeTypes(
  {
    ".urdf": "application/xml",
    ".xacro": "application/xml",
    ".srdf": "application/xml",
    ".sdf": "application/xml",
    ".mjcf": "application/xml",
    ".xml": "application/xml",
    ".dae": "model/vnd.collada+xml",
    ".stl": "model/stl",
    ".obj": "model/obj",
    ".glb": "model/gltf-binary",
    ".gltf": "model/gltf+json",
    ".ply": "application/x-ply",
    ".pcd": "application/x-pcd",
    ".json": "application/json",
    ".yaml": "application/x-yaml",
    ".yml": "application/x-yaml",
  }
)


def guess_content_type(filename: str) -> str:
  """Guess content-type from filename, with robotics file support.

  Convenience function that calls MIME_TYPES.guess().
  """
  return MIME_TYPES.guess(filename)


def sanitize_path(filename: str) -> str:
  """Sanitize a filename to prevent path traversal attacks.

  - Strips leading slashes (absolute paths)
  - Removes '..' components
  - Normalizes the path

  :param filename: The raw filename from the request.
  :return: Sanitized relative path.
  """
  # Remove leading slashes to prevent absolute paths
  filename = filename.lstrip("/")

  # Split into parts and filter out dangerous components
  parts = Path(filename).parts
  safe_parts = [p for p in parts if p not in ("..", ".")]

  if not safe_parts:
    return ""

  return str(Path(*safe_parts))


@dataclass
class Blob:
  """In-memory data with explicit content-type.

  Use one of: data (bytes), text (str), or json (dict/list)::

      return Blob(data=raw_bytes)
      return Blob(text="<xml>...</xml>", content_type="application/xml")
      return Blob(json={"status": "ok"})
  """

  data: bytes = None
  text: str = None
  json: Union[dict, list] = None
  content_type: str = None

  def __post_init__(self):
    # Validate exactly one content field is set
    fields = [self.data, self.text, self.json]
    set_count = sum(1 for f in fields if f is not None)
    if set_count != 1:
      raise ValueError("Exactly one of data, text, or json must be set")

    # Set default content-type based on field used
    if self.content_type is None:
      if self.json is not None:
        self.content_type = "application/json"
      elif self.text is not None:
        self.content_type = "text/plain"
      else:
        self.content_type = "application/octet-stream"

  def as_bytes(self) -> bytes:
    """Convert content to bytes."""
    if self.data is not None:
      return self.data
    if self.text is not None:
      return self.text.encode("utf-8")
    if self.json is not None:
      return json.dumps(self.json).encode("utf-8")


# Type alias for resolve() return type
ResolveResult = Union[Path, bytes, Blob, AsyncIterator[bytes], None]


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
      workspace.link(fn, to="/api")         # Link callable to URL path

  Attributes:
      paths: Tuple of paths that form the search overlay.
      MIME_TYPES: MimeTypes dict for content-type lookup (class attribute).
  """

  # Class-level MIME types with guess() method.
  # Add custom types: Workspace.MIME_TYPES[".npy"] = "application/x-npy"
  # Guess type: Workspace.MIME_TYPES.guess("file.npy")
  MIME_TYPES = MIME_TYPES

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

        # Add custom MIME types (class-level, affects all instances)
        Workspace.MIME_TYPES[".npy"] = "application/x-npy"
    """
    if not overlay:
      overlay = (".",)

    self._overlay: tuple[Path, ...] = tuple(Path(p) for p in overlay)
    self._mounts: List[dict] = []  # Directory mounts
    self._links: dict[str, dict] = {}  # Dynamic links keyed by path

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
    """Find a file in the overlay paths (sync version).

    Searches through paths in order and returns the first match.
    For async code, use :meth:`resolve` instead.

    Path traversal attacks are prevented by sanitizing the filename.

    :param filename: The filename (relative path) to search for.
    :return: Path to the file if found, None otherwise.

    Example::

        workspace = Workspace("./assets", "/data")
        path = workspace.find("models/robot.urdf")
        if path:
            print(f"Found at: {path}")
    """
    # Sanitize to prevent path traversal
    filename = sanitize_path(filename)
    if not filename:
      return None

    for root in self._overlay:
      filepath = root / filename
      if filepath.is_file():
        return filepath
    return None

  async def exists(self, filepath: Path) -> bool:
    """Check if a file exists at the given path.

    Override this method for remote backends that need async existence checks.

    :param filepath: Full path to check.
    :return: True if file exists, False otherwise.

    Example subclass for S3::

        class S3Workspace(Workspace):
            async def exists(self, filepath: Path) -> bool:
                return await self.s3.head_object(str(filepath))
    """
    return filepath.is_file()

  async def resolve(self, filename: str) -> ResolveResult:
    """Resolve a filename by searching through overlay layers.

    Searches each layer in order, returning the first match.
    Override this method or :meth:`exists` for different storage backends.

    :param filename: The filename (relative path) to resolve.
    :return: Path, bytes, Blob, AsyncIterator, or None if not found.

    Example subclasses::

        class S3Workspace(Workspace):
            async def resolve(self, filename: str) -> ResolveResult:
                stream = await self.s3.get_object_stream(filename)
                return stream  # AsyncIterator[bytes]

        class CachedWorkspace(Workspace):
            async def resolve(self, filename: str) -> ResolveResult:
                if filename in self.cache:
                    return self.cache[filename]  # bytes
                return await super().resolve(filename)

        class ApiWorkspace(Workspace):
            async def resolve(self, filename: str) -> ResolveResult:
                data = await self.fetch_json(filename)
                return Blob(json.dumps(data).encode(), "application/json")
    """
    # Sanitize to prevent path traversal
    filename = sanitize_path(filename)
    if not filename:
      return None

    for root in self._overlay:
      filepath = root / filename
      if await self.exists(filepath):
        return filepath
    return None

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
    root = Path(path)

    async def handler(request):
      filename = request.match_info["filename"]
      filepath = root / filename

      if not filepath.is_file():
        raise web.HTTPNotFound()

      response = web.FileResponse(filepath)

      # Handle hot reload header
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

    self._mounts.append(
      {
        "type": "mount",
        "path": to,
        "handler": handler,
      }
    )

  def link(
    self,
    target: Union[Callable, Path, bytes],
    to: str,
    *,
    method: str = "GET",
    content_type: str = None,
  ) -> str:
    """Link a Path, bytes, or callable to a URL path (dynamic, works at runtime).

    Links are stored in a dict and looked up at request time, so you can
    add/remove links while the server is running.

    - **Path**: Served directly as a static file (efficient streaming)
    - **bytes**: Served directly as binary data
    - **Callable**: Called on each request, return type determines response

    Callable return types are handled automatically:

    - ``dict``/``list``: JSON response
    - ``Path``: File response (efficient streaming)
    - ``bytes``: Binary response (content-type from path extension)
    - ``Blob``: Binary response with explicit content-type
    - ``str``: Text response

    :param target: Path, bytes, or handler function.
                  Functions can optionally receive request, sync or async.
    :param to: The URL path for this handler.
    :param method: HTTP method (default: "GET").
    :param content_type: Response content type. If None, auto-detected
                        from path extension.

    Example::

        from pathlib import Path
        from vuer import Vuer
        from vuer.workspace import jpg

        vuer = Vuer()

        # Static file link (alias to a different path)
        vuer.workspace.link(Path("./robots/panda.urdf"), "/robot.urdf")

        # Dynamic image from camera
        vuer.workspace.link(lambda: jpg(camera.frame), "/live/frame.jpg")

        # Serve file bytes directly
        vuer.workspace.link(lambda: Path("./scene.xml").read_bytes(), "/scene.xml")

        # Dynamic file selection via query params
        vuer.workspace.link(
            lambda r: Path(f"./robots/{r.query.get('model', 'panda')}.urdf"),
            "/robot.urdf"
        )

        # JSON response
        vuer.workspace.link(lambda: {"status": "ok"}, "/api/status")

        # Remove a link later
        vuer.workspace.unlink("/api/status")

    .. note:: Lambda Capture

        Lambdas capture variables by reference, not value. In loops, use
        default arguments to capture the current value::

            # WRONG - all lambdas return the final value of i
            for i in range(3):
                workspace.link(lambda: f"value {i}", f"/api/{i}")

            # CORRECT - each lambda captures its own i
            for i in range(3):
                workspace.link(lambda i=i: f"value {i}", f"/api/{i}")
    """
    # Normalize path (ensure leading slash, no trailing slash)
    path = "/" + to.strip("/")

    # Auto-detect content-type from path extension if not specified
    effective_content_type = content_type or self.MIME_TYPES.guess(to)

    # Handle Path, bytes, or callable
    if isinstance(target, Path):
      # Static file link
      file_path = target.resolve()
      self._links[path] = {
        "type": "file",
        "path": file_path,
        "method": method,
        "content_type": effective_content_type,
      }
    elif isinstance(target, bytes):
      # Static bytes link
      self._links[path] = {
        "type": "bytes",
        "data": target,
        "method": method,
        "content_type": effective_content_type,
      }
    else:
      # Callable link
      sig = inspect.signature(target)
      takes_request = len(sig.parameters) > 0
      self._links[path] = {
        "type": "callable",
        "fn": target,
        "method": method,
        "content_type": effective_content_type,
        "takes_request": takes_request,
      }
    return to

  def unlink(self, path: str) -> bool:
    """Remove a linked callable from a URL path.

    :param path: The URL path to unlink.
    :return: True if the link was removed, False if it didn't exist.

    Example::

        workspace.link(lambda: {"status": "ok"}, "/api/status")
        # ... later ...
        workspace.unlink("/api/status")
    """
    # Normalize path
    path = "/" + path.strip("/")
    if path in self._links:
      del self._links[path]
      return True
    return False

  async def handle_link(self, path: str, request) -> Optional[web.Response]:
    """Handle a request for a linked path (called by server).

    :param path: The normalized URL path.
    :param request: The aiohttp request object.
    :return: Response if path is linked, None otherwise.
    """
    # Normalize path
    path = "/" + path.strip("/")

    link = self._links.get(path)
    if link is None:
      return None

    content_type = link["content_type"]

    # Handle file links (static)
    if link.get("type") == "file":
      file_path = link["path"]
      if not file_path.is_file():
        return web.Response(status=404, text=f"File not found: {file_path}")
      response = web.FileResponse(file_path)
      response.content_type = content_type or self.MIME_TYPES.guess(file_path.name)
      return response

    # Handle bytes links (static)
    if link.get("type") == "bytes":
      return web.Response(body=link["data"], content_type=content_type)

    # Handle callable links (dynamic)
    fn = link["fn"]
    takes_request = link.get("takes_request", False)

    try:
      # Call with or without request based on signature
      if asyncio.iscoroutinefunction(fn):
        result = await (fn(request) if takes_request else fn())
      else:
        result = fn(request) if takes_request else fn()

      # Handle different return types
      if isinstance(result, (dict, list)):
        return web.Response(
          text=json.dumps(result),
          content_type="application/json",
        )
      if isinstance(result, Path):
        if not result.is_file():
          return web.Response(status=404, text=f"File not found: {result}")
        response = web.FileResponse(result)
        response.content_type = content_type or self.MIME_TYPES.guess(result.name)
        return response
      if isinstance(result, Blob):
        return web.Response(
          body=result.as_bytes(),
          content_type=result.content_type,
        )
      if isinstance(result, bytes):
        return web.Response(
          body=result,
          content_type=content_type,
        )
      return web.Response(text=str(result), content_type=content_type)
    except Exception as e:
      return web.Response(status=500, text=str(e))

  @property
  def links(self) -> dict[str, dict]:
    """Get registered links (read-only view).

    :return: Dict of path -> link config.
    """
    return self._links

  @property
  def mounts(self) -> List[dict]:
    """Get registered mounts for the server to apply.

    Returns a list of mount configurations that the server should
    register when starting up.

    :return: List of mount configuration dicts with path, handler, method.
    """
    return self._mounts

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
