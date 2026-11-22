"""The bundled client_build must speak the same wire protocol as the server.

The TypeScript client puts the marker ``vuer-wire-protocol/<n>`` in its bundle
(``WIRE_PROTOCOL_MARKER`` in vuer-ts). Rebuild ``src/vuer/client_build`` when the
protocol changes; see ``python -m vuer.protocol --check-client-build``.
"""

from vuer.protocol import PROTOCOL_VERSION, client_build_protocols
from vuer.server import DEFAULT_CLIENT_ROOT


def test_bundled_client_build_matches_protocol():
  versions = client_build_protocols(DEFAULT_CLIENT_ROOT)
  assert versions, f"no vuer-wire-protocol marker in {DEFAULT_CLIENT_ROOT}; the bundled client is older than protocol 2"
  assert versions == {PROTOCOL_VERSION}, f"client_build speaks {sorted(versions)}, server speaks {PROTOCOL_VERSION}"
