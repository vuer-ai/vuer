from vuer._compat import handle_server_import_error

try:
    from vuer.server import Vuer, VuerSession
    from vuer.workspace import Blob, Workspace, jpg, png, b64jpg, b64png
except ImportError as e:
    handle_server_import_error(e)
    Vuer, VuerSession, Workspace, Blob = None, None, None, None
    jpg, png, b64jpg, b64png = None, None, None, None

from vuer.client import VuerClient


def entrypoint():
    """CLI entrypoint for vuer command."""
    app = Vuer()
    app.run()


__all__ = [
    "Vuer",
    "VuerSession",
    "VuerClient",
    "Workspace",
    "Blob",
    "jpg",
    "png",
    "b64jpg",
    "b64png",
    "entrypoint",
]
