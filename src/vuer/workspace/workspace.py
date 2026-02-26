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

- ``FilesystemWorkspace`` / ``Workspace`` - Local filesystem (this module)
- ``McapWorkspace`` - MCAP recordings
- ``OverlayWorkspace`` - Composes multiple backends
- ``DashWorkspace`` - ML-Dash experiments (future)
- ``S3Workspace`` - S3 buckets (future)

**Return types from resolve()**::

    Path              - Local file (server uses FileResponse)
    bytes             - In-memory data, content-type guessed from filename
    Blob(data, type)  - In-memory data with explicit content-type
    AsyncIterator     - Streaming response
    None              - Not found (404)
"""

import asyncio
import fnmatch
import inspect
import json
import mimetypes
import os
from abc import ABC, abstractmethod
from dataclasses import dataclass, field
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


@dataclass
class TailRecord:
  """A single record returned by :meth:`BaseWorkspace.tail`.

  Represents either a line from a filesystem file or a message from an
  MCAP channel, depending on the workspace backend.

  Attributes:
      content:  Line text (``str``) for filesystem files, or raw message
                bytes (``bytes``) for MCAP channels.
      log_time: Timestamp in nanoseconds.  Always ``0`` for filesystem lines.
      topic:    MCAP channel topic (e.g. ``"/camera/image_raw"``).
                Empty string for filesystem records.

  Example::

      # MCAP
      records = ws.tail(n=5, path="topics/camera/image_raw")
      last = records[-1]
      last.content   # b'...'  (raw message bytes)
      last.log_time  # 1709123456789000000  (ns)
      last.topic     # "/camera/image_raw"

      # Filesystem
      records = ws.tail(n=5, path="logs/robot.log")
      last = records[-1]
      last.content   # "last line of the log"
  """

  content: Union[str, bytes]
  log_time: int = 0
  topic: str = ""

  def __repr__(self) -> str:
    if self.topic:
      ts = f", log_time={self.log_time}"
      return f"TailRecord(topic={self.topic!r}{ts}, content={self.content!r})"
    return f"TailRecord(content={self.content!r})"


def _tail_lines(filepath: Path, n: int) -> List[str]:
  """Read the last *n* lines of a text file memory-efficiently.

  Uses a fixed-size :class:`collections.deque` so only the last *n*
  lines are kept in memory regardless of file size.

  :param filepath: Path to the text file.
  :param n: Number of lines to return.
  :return: List of lines (trailing newline stripped).
  """
  from collections import deque

  with open(filepath, "r", errors="replace") as f:
    dq: deque = deque(f, maxlen=n)
  return [line.rstrip("\n") for line in dq]


def _head_lines(filepath: Path, n: int) -> List[str]:
  """Read the first *n* lines of a text file memory-efficiently.

  Stops reading after *n* lines, so the rest of the file is never loaded.

  :param filepath: Path to the text file.
  :param n: Number of lines to return.
  :return: List of lines (trailing newline stripped).
  """
  from itertools import islice

  with open(filepath, "r", errors="replace") as f:
    return [line.rstrip("\n") for line in islice(f, n)]


@dataclass
class TreeNode:
  """A node in the workspace directory tree.

  Returned by :meth:`BaseWorkspace.tree`. Supports pretty-printing via
  ``str()`` / ``repr()``, which renders an ASCII tree similar to the
  Linux ``tree`` command.

  Attributes:
      name:      Display name for this node (filename, path string, or label).
      path:      Resolved filesystem path, or ``None`` for virtual nodes.
      is_dir:    Whether this node represents a directory-like container.
      children:  Child nodes (populated for directories within depth limit).
      truncated: ``True`` when children were cut off by the ``limit`` argument.

  Example::

      root = workspace.tree(level=2, pattern="*.urdf")
      print(root)
      # Workspace
      # └── ./assets
      #     ├── robots/
      #     │   └── panda.urdf
      #     └── ...
  """

  name: str
  path: Optional[Path]
  is_dir: bool
  children: List["TreeNode"] = field(default_factory=list)
  truncated: bool = False

  def __str__(self) -> str:
    lines = [self.name]
    for i, child in enumerate(self.children):
      # When truncated, no real child is the visual last — "..." comes after
      is_last = (not self.truncated) and (i == len(self.children) - 1)
      child._render(lines, prefix="", is_last=is_last)
    if self.truncated:
      lines.append("└── ...")
    return "\n".join(lines)

  def __repr__(self) -> str:
    return str(self)

  def _render(self, lines: list, prefix: str, is_last: bool) -> None:
    """Recursively render this node into ``lines`` with ASCII connectors."""
    connector = "└── " if is_last else "├── "
    lines.append(prefix + connector + self.name)
    if self.is_dir:
      child_prefix = prefix + ("    " if is_last else "│   ")
      for i, child in enumerate(self.children):
        is_last_child = (not self.truncated) and (i == len(self.children) - 1)
        child._render(lines, child_prefix, is_last_child)
      if self.truncated:
        lines.append(child_prefix + "└── ...")


def _build_tree(
  path: Path,
  depth: int,
  max_level: Optional[int],
  pattern: str,
  limit: Optional[int],
) -> TreeNode:
  """Recursively build a :class:`TreeNode` rooted at *path*.

  :param path:      Directory or file to represent.
  :param depth:     Current recursion depth (0 = first level below workspace root).
  :param max_level: Stop expanding directories at this depth (``None`` = unlimited).
  :param pattern:   ``fnmatch`` pattern applied to *file* names only.
                    Directories are always included.
  :param limit:     Maximum children to show per directory.  Extra items are
                    replaced with a ``"..."`` trailing node (``truncated=True``).
  :return:          A populated :class:`TreeNode`.
  """
  is_dir = path.is_dir()
  display = path.name + ("/" if is_dir else "")
  node = TreeNode(name=display, path=path, is_dir=is_dir)

  if not is_dir:
    return node

  # Depth limit: expand but don't recurse further
  if max_level is not None and depth >= max_level:
    return node

  try:
    entries = sorted(path.iterdir(), key=lambda p: (not p.is_dir(), p.name.lower()))
  except PermissionError:
    return node

  # Apply pattern to files only; directories are always kept
  if pattern != "*":
    entries = [e for e in entries if e.is_dir() or fnmatch.fnmatch(e.name, pattern)]

  truncated = False
  if limit is not None and len(entries) > limit:
    entries = entries[:limit]
    truncated = True

  for entry in entries:
    child = _build_tree(entry, depth + 1, max_level, pattern, limit)
    # Prune directories that became empty after pattern filtering
    if entry.is_dir() and not child.children and pattern != "*":
      continue
    node.children.append(child)

  node.truncated = truncated
  return node


class BaseWorkspace(ABC):
  """Abstract base class for all workspace backends.

  Owns ``_links`` / ``_mounts`` and all link/mount management so every
  backend gets dynamic URL linking and directory mounting for free.
  Subclasses implement :meth:`resolve` for their own storage backend.

  **Subclasses**:

  - :class:`FilesystemWorkspace` — local filesystem (alias: ``Workspace``)
  - :class:`McapWorkspace` — MCAP recording files
  - :class:`OverlayWorkspace` — composes N backends, first match wins

  **Optional overrides** (default: no-op / empty):

  - :meth:`find` — sync file lookup
  - :meth:`glob` — pattern matching
  - :meth:`tail` / :meth:`head` — last/first N records
  - :meth:`exists` — async existence check
  - :meth:`tree` — directory-tree representation
  """

  # Class-level MIME types shared by all backends.
  # Add custom types: BaseWorkspace.MIME_TYPES[".npy"] = "application/x-npy"
  MIME_TYPES = MIME_TYPES

  def __init__(self):
    self._links: dict[str, dict] = {}
    self._mounts: List[dict] = []

  # ── Must implement ────────────────────────────────────────────────────────

  @abstractmethod
  async def resolve(self, filename: str) -> ResolveResult:
    """Resolve a filename to its content.

    :param filename: The filename (relative path) to resolve.
    :return: Path, bytes, Blob, AsyncIterator, or None if not found.
    """
    ...

  # ── Properties ────────────────────────────────────────────────────────────

  @property
  def paths(self) -> tuple:
    """Filesystem search paths (empty for non-filesystem backends)."""
    return ()

  @property
  def absolute_paths(self) -> List[str]:
    """Absolute filesystem paths as strings (empty for non-filesystem backends)."""
    return []

  @property
  def links(self) -> dict:
    """Get registered links (read-only view).

    :return: Dict of path -> link config.
    """
    return self._links

  @property
  def mounts(self) -> List[dict]:
    """Get registered mounts for the server to apply.

    :return: List of mount configuration dicts with path, handler, method.
    """
    return list(self._mounts)

  # ── Optional overrides (default: no-op / empty) ───────────────────────────

  def find(self, filename: str) -> Optional[Path]:
    """Find a file (sync).  Default: not found.

    :param filename: Relative path to look up.
    :return: ``Path`` if found, ``None`` otherwise.
    """
    return None

  def glob(self, pattern: str, wd: str = "") -> List[str]:
    """Glob files matching *pattern*.  Default: empty list.

    :param pattern: Glob pattern.
    :param wd: Working directory within the backend.
    :return: List of matched paths as strings.
    """
    return []

  def tail(self, n: int = 10, path: str = "") -> List[TailRecord]:
    """Return the last *n* records.  Default: empty list.

    :param n: Number of records to return.
    :param path: File or channel path.
    :return: List of :class:`TailRecord`.
    """
    return []

  def head(self, n: int = 10, path: str = "") -> List[TailRecord]:
    """Return the first *n* records.  Default: empty list.

    :param n: Number of records to return.
    :param path: File or channel path.
    :return: List of :class:`TailRecord`.
    """
    return []

  async def exists(self, filepath: Path) -> bool:
    """Check if a file exists.  Default: False.

    :param filepath: Full path to check.
    :return: True if exists.
    """
    return False

  def tree(
    self,
    level: Optional[int] = None,
    pattern: str = "*",
    limit: Optional[int] = None,
  ) -> TreeNode:
    """Build a tree representation.  Default: empty root node.

    :param level: Maximum display depth.
    :param pattern: Filename filter pattern.
    :param limit: Maximum children per directory.
    :return: :class:`TreeNode` root.
    """
    return TreeNode(name=repr(self), path=None, is_dir=True)

  # ── Concrete: link/mount management (inherited by all) ────────────────────

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


class FilesystemWorkspace(BaseWorkspace):
  """Workspace defines search paths for static file serving.

  A FilesystemWorkspace manages multiple search paths (overlay) for serving
  static files, similar to how $PATH works for executables. When a file is
  requested, paths are searched in order and the first match wins.

  This is useful when assets are spread across multiple directories::

      # Robot models in one place, textures in another
      workspace = FilesystemWorkspace("./local_assets", "/shared/robots", "/data/textures")

      # Request for /static/robot.urdf searches:
      #   1. ./local_assets/robot.urdf
      #   2. /shared/robots/robot.urdf
      #   3. /data/textures/robot.urdf
      # Returns first match

  **API**::

      workspace = FilesystemWorkspace(*overlay)  # Define search paths
      workspace.paths                            # Access paths (read-only tuple)
      workspace.find("file.txt")                 # Find file in overlay
      workspace.mount("./dir", to="/route")      # Mount single directory
      workspace.link(fn, to="/api")              # Link callable to URL path

  Attributes:
      paths: Tuple of paths that form the search overlay.
      MIME_TYPES: MimeTypes dict for content-type lookup (class attribute).
  """

  def __init__(self, *overlay: Union[str, Path]):
    """Initialize the FilesystemWorkspace with overlay paths.

    :param overlay: Variable number of paths to search for static files.
                   Earlier paths take precedence (like $PATH).
                   If no paths provided, defaults to current directory ".".

    Example::

        # Single path
        workspace = FilesystemWorkspace("./assets")

        # Multiple paths - first match wins
        workspace = FilesystemWorkspace("./local", "/shared", "/data")

        # No args = current directory
        workspace = FilesystemWorkspace()

        # Add custom MIME types (class-level, affects all instances)
        FilesystemWorkspace.MIME_TYPES[".npy"] = "application/x-npy"
    """
    super().__init__()
    if not overlay:
      overlay = (".",)

    self._overlay: tuple[Path, ...] = tuple(Path(p) for p in overlay)

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

        workspace = FilesystemWorkspace("./assets", "/data")
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

  def glob(self, pattern: str, wd: str = "") -> List[str]:
    """Glob files across all overlay paths.

    Searches every overlay directory for entries matching *pattern*, with an
    optional *wd* (working directory) to restrict the search to a
    sub-directory.  Works like the shell glob built-in: non-recursive by
    default (``*``), recursive with ``**``.

    Duplicate relative paths found in multiple overlay roots are
    deduplicated — first overlay wins, consistent with :meth:`find`.

    :param pattern: Glob pattern (e.g. ``"*"``, ``"*.urdf"``,
                    ``"**/*.stl"``).  Passed directly to
                    :meth:`pathlib.Path.glob`.
    :param wd:      Sub-directory to start the search from, relative to
                    each overlay root.  Default ``""`` means the overlay
                    root itself.

    :return: Sorted list of matched paths as strings, **relative to** *wd*
             (or to each overlay root when *wd* is empty).

    Examples::

        ws = FilesystemWorkspace("./assets", "/shared/robots")

        ws.glob("*")                  # all top-level entries in overlay
        ws.glob("*.urdf")             # URDF files at the overlay root
        ws.glob("**/*.urdf")          # all URDF files, recursively
        ws.glob("*", wd="robots/")    # top-level entries under robots/
        ws.glob("*.stl", wd="meshes") # STL files inside meshes/
    """
    wd_clean = sanitize_path(wd) if wd.strip("/") else ""

    results: List[str] = []
    seen: set = set()

    for root in self._overlay:
      search_root = (root / wd_clean) if wd_clean else root
      if not search_root.is_dir():
        continue
      for match in search_root.glob(pattern):
        try:
          rel = str(match.relative_to(search_root))
        except ValueError:
          continue
        if rel not in seen:
          seen.add(rel)
          results.append(rel)

    results.sort()
    return results

  def tail(self, n: int = 10, path: str = "") -> List["TailRecord"]:
    """Return the last *n* lines of a file in the overlay.

    Works like the Unix ``tail`` command for text files found anywhere in
    the workspace overlay.  Uses a fixed-size deque internally, so only
    *n* lines are kept in memory regardless of file size.

    :param n:    Number of lines to return (default: ``10``).
    :param path: Relative path to the file inside the overlay.  Required
                 for the base ``FilesystemWorkspace``; MCAP workspaces allow
                 an empty string to tail across all channels.
    :raises ValueError: If *path* is empty (no file to read).
    :raises FileNotFoundError: If *path* is not found in the overlay.
    :return: List of :class:`TailRecord` objects (at most *n* items),
             ordered from oldest to newest.  Each record's ``content``
             is a ``str`` (text line, trailing newline stripped).

    Example::

        ws = FilesystemWorkspace("./logs")

        # Last 10 lines of a log file
        records = ws.tail(path="robot.log")
        for r in records:
            print(r.content)

        # Handy one-liner
        last_line = ws.tail(n=1, path="robot.log")[0].content
    """
    if not path.strip("/"):
      raise ValueError("path must be specified; use McapWorkspace for channel tail without a path")

    filepath = self.find(path)
    if filepath is None:
      raise FileNotFoundError(f"File not found in workspace overlay: {path!r}")

    lines = _tail_lines(filepath, n)
    return [TailRecord(content=line) for line in lines]

  def head(self, n: int = 10, path: str = "") -> List["TailRecord"]:
    """Return the first *n* lines of a file in the overlay.

    Works like the Unix ``head`` command.  Stops reading after *n* lines,
    so the rest of the file is never loaded into memory.

    :param n:    Number of lines to return (default: ``10``).
    :param path: Relative path to the file inside the overlay.  Required
                 for the base ``FilesystemWorkspace``; MCAP workspaces allow
                 an empty string to head across all channels.
    :raises ValueError: If *path* is empty.
    :raises FileNotFoundError: If *path* is not found in the overlay.
    :return: List of :class:`TailRecord` objects (at most *n* items),
             ordered oldest → newest.  Each record's ``content`` is a
             ``str`` (text line, trailing newline stripped).

    Example::

        ws = FilesystemWorkspace("./logs")
        first_line = ws.head(n=1, path="robot.log")[0].content
    """
    if not path.strip("/"):
      raise ValueError("path must be specified; use McapWorkspace for channel head without a path")

    filepath = self.find(path)
    if filepath is None:
      raise FileNotFoundError(f"File not found in workspace overlay: {path!r}")

    lines = _head_lines(filepath, n)
    return [TailRecord(content=line) for line in lines]

  def tree(
    self,
    level: Optional[int] = None,
    pattern: str = "*",
    limit: Optional[int] = None,
  ) -> "TreeNode":
    """Build a tree representation of the workspace overlay paths.

    Works like the Linux ``tree`` command: walks each overlay directory
    and returns a :class:`TreeNode` root that pretty-prints with ASCII
    connectors.

    :param level:   Maximum display depth below each overlay root.
                    ``None`` (default) means unlimited, matching ``tree``'s
                    default behaviour.  ``level=1`` shows only direct
                    children; ``level=3`` shows three levels deep.
    :param pattern: ``fnmatch`` glob applied to *file* names.  Directories
                    are always included in the walk.  Default ``"*"`` shows
                    everything.  Example: ``"*.urdf"`` shows only URDF files.
    :param limit:   Maximum number of entries shown *per directory* before
                    the rest is replaced with a trailing ``"..."`` marker.
                    ``None`` (default) means no cap.

    :return: A :class:`TreeNode` root whose ``str()`` / ``repr()`` renders
             the tree.

    Example::

        root = workspace.tree(level=3, pattern="*.urdf", limit=5)
        print(root)
        # FilesystemWorkspace
        # ├── ./local_assets/
        # │   └── robots/
        # │       └── panda.urdf
        # └── /shared/robots/
        #     └── panda.urdf

        # Inspect programmatically
        for child in root.children:
            print(child.name, child.path)
    """
    if len(self._overlay) == 1:
      path = self._overlay[0]
      node = _build_tree(path, depth=0, max_level=level, pattern=pattern, limit=limit)
      # Use the path string as the display name so it matches how it was given
      node.name = str(path)
      return node

    root = TreeNode(name="Workspace", path=None, is_dir=True)
    for path in self._overlay:
      child = _build_tree(path, depth=0, max_level=level, pattern=pattern, limit=limit)
      child.name = str(path)
      root.children.append(child)
    return root

  async def exists(self, filepath: Path) -> bool:
    """Check if a file exists at the given path.

    Override this method for remote backends that need async existence checks.

    :param filepath: Full path to check.
    :return: True if file exists, False otherwise.
    """
    return filepath.is_file()

  async def resolve(self, filename: str) -> ResolveResult:
    """Resolve a filename by searching through overlay layers.

    Searches each layer in order, returning the first match.
    Override this method or :meth:`exists` for different storage backends.

    :param filename: The filename (relative path) to resolve.
    :return: Path, bytes, Blob, AsyncIterator, or None if not found.

    Example subclasses::

        class S3Workspace(FilesystemWorkspace):
            async def resolve(self, filename: str) -> ResolveResult:
                stream = await self.s3.get_object_stream(filename)
                return stream  # AsyncIterator[bytes]

        class CachedWorkspace(FilesystemWorkspace):
            async def resolve(self, filename: str) -> ResolveResult:
                if filename in self.cache:
                    return self.cache[filename]  # bytes
                return await super().resolve(filename)
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

  def __repr__(self):
    paths_str = ", ".join(f'"{p}"' for p in self._overlay)
    return f"FilesystemWorkspace({paths_str})"


# Backward-compatibility alias — existing code using ``Workspace(...)`` continues to work.
Workspace = FilesystemWorkspace


class OverlayWorkspace(BaseWorkspace):
  """Composes N :class:`BaseWorkspace` layers into a single virtual workspace.

  Resolution order: layers are searched left-to-right; the **first** match
  wins.  This means the first layer has the highest priority, exactly like
  ``$PATH``.

  ``handle_link`` checks the OverlayWorkspace's own registered links first,
  then each layer's links in order (so MCAP auto-registered topic links are
  accessible without re-registering them on the composite).

  Example::

      ws = OverlayWorkspace(
          McapWorkspace("rec1.mcap", "rec2.mcap"),
          FilesystemWorkspace("./assets"),
      )

      # Or via factory:
      ws = workspace_from_config(["recording.mcap", "./assets"])
  """

  def __init__(self, *layers: BaseWorkspace):
    """Initialize with one or more workspace layers.

    :param layers: Backends to compose, highest-priority first.
    """
    super().__init__()
    self._layers: List[BaseWorkspace] = list(layers)

  async def resolve(self, filename: str) -> ResolveResult:
    """Resolve by trying each layer in order; first match wins.

    :param filename: Relative filename to resolve.
    :return: First non-``None`` result, or ``None`` if all layers miss.
    """
    for layer in self._layers:
      result = await layer.resolve(filename)
      if result is not None:
        return result
    return None

  async def handle_link(self, path: str, request) -> Optional[web.Response]:
    """Handle a linked path, checking own links then each layer's links.

    :param path: Normalized URL path.
    :param request: aiohttp request object.
    :return: Response if found, None otherwise.
    """
    # Own links registered directly on this OverlayWorkspace
    result = await super().handle_link(path, request)
    if result is not None:
      return result
    # Each layer's auto-registered links (e.g. MCAP topic links)
    for layer in self._layers:
      result = await layer.handle_link(path, request)
      if result is not None:
        return result
    return None

  @property
  def paths(self) -> tuple:
    """Aggregated filesystem paths from all layers."""
    result = []
    for layer in self._layers:
      result.extend(layer.paths)
    return tuple(result)

  @property
  def mounts(self) -> List[dict]:
    """Aggregated mounts from own + all layers."""
    result = list(self._mounts)
    for layer in self._layers:
      result.extend(layer.mounts)
    return result

  @property
  def absolute_paths(self) -> List[str]:
    """Aggregated absolute paths from all layers."""
    result = []
    for layer in self._layers:
      result.extend(layer.absolute_paths)
    return result

  def find(self, filename: str) -> Optional[Path]:
    """Find a file by searching each layer; first match wins."""
    for layer in self._layers:
      r = layer.find(filename)
      if r is not None:
        return r
    return None

  def glob(self, pattern: str, wd: str = "") -> List[str]:
    """Glob across all layers, deduplicating results."""
    seen: set = set()
    results: List[str] = []
    for layer in self._layers:
      for item in layer.glob(pattern, wd=wd):
        if item not in seen:
          seen.add(item)
          results.append(item)
    return results

  def tail(self, n: int = 10, path: str = "") -> List[TailRecord]:
    """Return the last *n* records merged across all layers, sorted by log_time."""
    all_: List[TailRecord] = []
    for layer in self._layers:
      all_.extend(layer.tail(n=n, path=path))
    all_.sort(key=lambda r: r.log_time)
    return all_[-n:]

  def head(self, n: int = 10, path: str = "") -> List[TailRecord]:
    """Return the first *n* records merged across all layers, sorted by log_time."""
    all_: List[TailRecord] = []
    for layer in self._layers:
      all_.extend(layer.head(n=n, path=path))
    all_.sort(key=lambda r: r.log_time)
    return all_[:n]

  def tree(
    self,
    level: Optional[int] = None,
    pattern: str = "*",
    limit: Optional[int] = None,
  ) -> TreeNode:
    """Build a tree with one child per layer."""
    root = TreeNode(name="OverlayWorkspace", path=None, is_dir=True)
    for layer in self._layers:
      child = layer.tree(level=level, pattern=pattern, limit=limit)
      root.children.append(child)
    return root

  def __repr__(self):
    return f"OverlayWorkspace({', '.join(repr(l) for l in self._layers)})"


def workspace_from_config(
  config: Union[str, Path, List[Union[str, Path]], "BaseWorkspace", None],
) -> BaseWorkspace:
  """Convert various workspace configurations to a BaseWorkspace instance.

  This is the preferred way to construct a workspace from a mixed list of
  paths.  It automatically composes layers:

  - ``.mcap`` paths → :class:`McapWorkspace`
  - Other paths → :class:`FilesystemWorkspace`
  - Mix → :class:`OverlayWorkspace` (group order follows first occurrence in input)

  :param config: Workspace configuration. Can be:

                - ``None``: returns ``FilesystemWorkspace(".")``
                - ``str`` or ``Path``: single path
                - ``list`` of str/Path: multiple paths (auto-composed)
                - :class:`BaseWorkspace`: returned as-is

  :return: A :class:`BaseWorkspace` instance.

  Example::

      ws = workspace_from_config(None)                         # FilesystemWorkspace(".")
      ws = workspace_from_config("./assets")                   # FilesystemWorkspace
      ws = workspace_from_config("recording.mcap")             # McapWorkspace
      ws = workspace_from_config(["recording.mcap", "."])      # OverlayWorkspace(McapWorkspace, FilesystemWorkspace)
      ws = workspace_from_config([".", "recording.mcap"])      # OverlayWorkspace(FilesystemWorkspace, McapWorkspace)
      ws = workspace_from_config(["rec1.mcap", "rec2.mcap"])   # McapWorkspace
      ws = workspace_from_config(existing_ws)                  # returns existing_ws
  """
  if config is None:
    return FilesystemWorkspace()

  if isinstance(config, BaseWorkspace):
    return config

  paths = [config] if isinstance(config, (str, Path)) else list(config)
  mcap = [p for p in paths if str(p).endswith(".mcap")]
  fs = [p for p in paths if not str(p).endswith(".mcap")]

  if not mcap:
    return FilesystemWorkspace(*fs) if fs else FilesystemWorkspace()
  if not fs:
    from vuer.workspace.mcap_workspace import McapWorkspace

    return McapWorkspace(*mcap)

  # Both types present — order the two groups by which type appears first in
  # the input list so that workspace_from_config([".", "rec.mcap"]) gives
  # FilesystemWorkspace priority, not McapWorkspace.
  from vuer.workspace.mcap_workspace import McapWorkspace

  first_mcap_idx = next(i for i, p in enumerate(paths) if str(p).endswith(".mcap"))
  first_fs_idx = next(i for i, p in enumerate(paths) if not str(p).endswith(".mcap"))

  mcap_layer = McapWorkspace(*mcap)
  fs_layer = FilesystemWorkspace(*fs)

  if first_mcap_idx < first_fs_idx:
    return OverlayWorkspace(mcap_layer, fs_layer)
  return OverlayWorkspace(fs_layer, mcap_layer)
