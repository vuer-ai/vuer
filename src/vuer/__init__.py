from vuer._compat import handle_server_import_error

try:
  from vuer.server import Vuer, VuerSession
  from vuer.workspace import Blob, Workspace
except ImportError as e:
  handle_server_import_error(e)
  Vuer, VuerSession, Workspace, Blob = None, None, None, None

from vuer.client import VuerClient

# this conflicts with vuer-cli. Remove.
# def entrypoint():
#     """CLI entrypoint for vuer command."""
#     app = Vuer()
#     app.run()


try:
  from vuer.webrtc import WebRTCStream
except ImportError:
  WebRTCStream = None

__all__ = [
  "Vuer",
  "VuerSession",
  "VuerClient",
  "Workspace",
  "Blob",
  "WebRTCStream",
  # "entrypoint",
]
