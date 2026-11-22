"""Vuer wire protocol (MessagePack with binary arrays).

Protocol version 2 sends numpy arrays as a MessagePack extension type instead of
nested lists. The extension carries the dtype, the shape and the raw bytes, and
the TypeScript client decodes it into a typed array (``Float32Array`` and so on).

Extension ``NDARRAY_EXT`` (``0x56``) payload::

    byte 0      format version (1)
    byte 1      dtype code (see ``DTYPE_CODES``)
    byte 2      ndim
    byte 3      reserved (0)
    4 * ndim    shape, uint32 little-endian
    rest        raw little-endian bytes in C order

Small arrays (``size <= array_list_max``, default 16) stay plain lists. They are
usually props such as positions, quaternions and 4x4 matrices, which
react-three-fiber expects as arrays.

A client announces protocol 2 with the ``protocol=2`` WebSocket query parameter
and with ``protocol: 2`` in the INIT event. Clients that do not announce it are
legacy clients (protocol 1) and receive lists.
"""

import struct
from typing import Any, Callable, Optional

from msgpack import ExtType, packb, unpackb

PROTOCOL_VERSION = 2
LEGACY_PROTOCOL_VERSION = 1
NDARRAY_EXT = 0x56
MSGPACKR_TYPED_ARRAY_EXT = 0x74
NDARRAY_FORMAT_VERSION = 1
DEFAULT_ARRAY_LIST_MAX = 16

ARRAY_PROTOCOLS = ("auto", "binary", "list")

# dtype code -> little-endian numpy dtype string
DTYPE_CODES = {
  1: "|u1",
  2: "|i1",
  3: "<u2",
  4: "<i2",
  5: "<u4",
  6: "<i4",
  7: "<f2",
  8: "<f4",
  9: "<f8",
  10: "<i8",
  11: "<u8",
  12: "|b1",
}
_CODE_BY_KIND = {
  ("u", 1): 1,
  ("i", 1): 2,
  ("u", 2): 3,
  ("i", 2): 4,
  ("u", 4): 5,
  ("i", 4): 6,
  ("f", 2): 7,
  ("f", 4): 8,
  ("f", 8): 9,
  ("i", 8): 10,
  ("u", 8): 11,
  ("b", 1): 12,
}

# msgpackr typed-array ext (0x74) type codes, see msgpackr/unpack.js `typedArrays`.
_MSGPACKR_TYPED_ARRAYS = ["|i1", "|u1", "|u1", "<i2", "<u2", "<i4", "<u4", "<f4", "<f8", "<i8", "<u8"]


def resolve_array_protocol(array_protocol: str, client_protocol: Optional[int]) -> str:
  """Return ``"binary"`` or ``"list"`` for a session.

  :param array_protocol: The server option: ``auto``, ``binary`` or ``list``.
  :param client_protocol: The protocol the client announced (``None`` or 1 for legacy clients).
  """
  if array_protocol not in ARRAY_PROTOCOLS:
    raise ValueError(f"array_protocol must be one of {ARRAY_PROTOCOLS}, got {array_protocol!r}")
  if array_protocol == "auto":
    return "binary" if (client_protocol or LEGACY_PROTOCOL_VERSION) >= PROTOCOL_VERSION else "list"
  return array_protocol


def parse_protocol(value: Any) -> Optional[int]:
  """Parse a protocol version from a query string or an INIT value. Return ``None`` if absent or invalid."""
  try:
    version = int(value)
  except (TypeError, ValueError):
    return None
  return version if version >= 1 else None


def encode_ndarray(array) -> ExtType:
  """Encode a numpy array as the ``NDARRAY_EXT`` extension type."""
  import numpy as np

  array = np.asarray(array)
  code = _CODE_BY_KIND.get((array.dtype.kind, array.dtype.itemsize))
  if code is None:
    raise TypeError(f"Cannot send numpy dtype {array.dtype} as a binary array")
  if array.ndim > 255:
    raise ValueError("Binary arrays support at most 255 dimensions")
  # astype keeps 0-d arrays 0-d (ascontiguousarray would make them 1-d).
  array = array.astype(np.dtype(DTYPE_CODES[code]), order="C", copy=False)
  header = struct.pack(f"<BBBB{array.ndim}I", NDARRAY_FORMAT_VERSION, code, array.ndim, 0, *array.shape)
  return ExtType(NDARRAY_EXT, header + array.tobytes())


def decode_ndarray(data: bytes):
  """Decode a ``NDARRAY_EXT`` payload into a numpy array (a writable copy)."""
  import numpy as np

  version, code, ndim, _ = struct.unpack_from("<BBBB", data, 0)
  if version != NDARRAY_FORMAT_VERSION:
    raise ValueError(f"Unknown binary array format version {version}")
  if code not in DTYPE_CODES:
    raise ValueError(f"Unknown binary array dtype code {code}")
  shape = struct.unpack_from(f"<{ndim}I", data, 4)
  offset = 4 + 4 * ndim
  dtype = np.dtype(DTYPE_CODES[code])
  count = 1
  for dim in shape:
    count *= dim
  if len(data) - offset != count * dtype.itemsize:
    raise ValueError("Binary array payload size does not match its shape")
  return np.frombuffer(data, dtype=dtype, count=count, offset=offset).reshape(shape).copy()


def decode_msgpackr_typed_array(data: bytes):
  """Decode msgpackr's native typed-array extension (``0x74``) into a 1-d numpy array."""
  import numpy as np

  code = data[0]
  if code >= len(_MSGPACKR_TYPED_ARRAYS):
    raise ValueError(f"Unknown msgpackr typed array code {code}")
  return np.frombuffer(data[1:], dtype=np.dtype(_MSGPACKR_TYPED_ARRAYS[code])).copy()


def ext_hook(code: int, data: bytes):
  """msgpack ``ext_hook`` that decodes binary arrays and leaves other extensions as ``ExtType``."""
  if code == NDARRAY_EXT:
    return decode_ndarray(data)
  if code == MSGPACKR_TYPED_ARRAY_EXT:
    return decode_msgpackr_typed_array(data)
  return ExtType(code, data)


def make_encoder(binary: bool = True, array_list_max: int = DEFAULT_ARRAY_LIST_MAX) -> Callable[[Any], Any]:
  """Return a msgpack ``default`` function for numpy values.

  :param binary: Send arrays larger than ``array_list_max`` as ``NDARRAY_EXT``. If False, send all arrays as lists (protocol 1).
  :param array_list_max: Largest array size that stays a plain list.
  """

  def default(obj):
    try:
      import numpy as np
    except ImportError:  # pragma: no cover
      raise TypeError(f"Cannot serialize object of type {type(obj)}")

    if isinstance(obj, np.ndarray):
      if binary and obj.size > array_list_max:
        return encode_ndarray(obj)
      return obj.tolist()
    if isinstance(obj, np.generic):
      return obj.item()
    raise TypeError(f"Cannot serialize object of type {type(obj)}")

  return default


def pack_event(obj: Any, binary: bool = True, array_list_max: int = DEFAULT_ARRAY_LIST_MAX) -> bytes:
  """Pack an event dict with MessagePack.

  :param obj: The serialized event.
  :param binary: Use binary arrays (protocol 2). If False, use lists (protocol 1).
  :param array_list_max: Largest array size that stays a plain list.
  """
  return packb(obj, use_single_float=True, use_bin_type=True, default=make_encoder(binary, array_list_max))


def unpack_event(data: bytes) -> Any:
  """Unpack a MessagePack message and decode binary arrays into numpy arrays."""
  return unpackb(data, raw=False, ext_hook=ext_hook)


def client_build_protocols(root) -> set:
  """Return the wire-protocol versions marked in a built client (``vuer-wire-protocol/<n>``).

  The TypeScript client keeps this marker in its bundle. An empty set means a
  client older than protocol 2.
  """
  import re
  from pathlib import Path

  pattern = re.compile(rb"vuer-wire-protocol/(\d+)")
  versions = set()
  for path in Path(root).rglob("*.js"):
    versions.update(int(m) for m in pattern.findall(path.read_bytes()))
  return versions


if __name__ == "__main__":
  import sys

  if "--check-client-build" in sys.argv:
    from pathlib import Path

    root = Path(__file__).parent / "client_build"
    found = client_build_protocols(root)
    if found != {PROTOCOL_VERSION}:
      print(f"client_build protocol {sorted(found) or 'missing'} != server protocol {PROTOCOL_VERSION}")
      sys.exit(1)
    print(f"client_build speaks wire protocol {PROTOCOL_VERSION}")
