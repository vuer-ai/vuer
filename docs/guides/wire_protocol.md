# Wire Protocol and Binary Arrays

Vuer sends events between the Python server and the client as MessagePack.
Protocol 2 sends numpy arrays as binary typed arrays instead of nested lists.

## What changes

- A numpy array with more than 16 elements goes on the wire as the MessagePack
  extension type `0x56`. The payload holds the dtype, the shape and the raw
  little-endian bytes in C order.
- The browser client decodes it into a typed array (`Float32Array`,
  `Uint8Array`, and so on) with `shape` and `dtype` properties.
- A numpy array with 16 elements or fewer stays a plain list. Positions,
  quaternions and 4x4 matrices are props that react-three-fiber expects as
  arrays.
- Element props keep numpy arrays until the encoder runs, so
  `Line(points=np.array(...))` also goes as binary.
- The server decodes binary arrays from the client (extension `0x56` and the
  msgpackr typed-array extension `0x74`) into numpy arrays.

| Code | dtype   | Code | dtype   |
| ---- | ------- | ---- | ------- |
| 1    | uint8   | 7    | float16 |
| 2    | int8    | 8    | float32 |
| 3    | uint16  | 9    | float64 |
| 4    | int16   | 10   | int64   |
| 5    | uint32  | 11   | uint64  |
| 6    | int32   | 12   | bool    |

Payload layout: byte 0 is the format version (1), byte 1 is the dtype code,
byte 2 is the number of dimensions, byte 3 is reserved (0). Then come the
dimensions as `uint32` little-endian values, then the raw bytes.

## Handshake

1. The client opens the WebSocket with the query parameter `protocol=2`, for
   example `ws://localhost:8012/?protocol=2`.
2. The server sends `SERVER_INFO` with
   `{"protocol": 2, "arrayProtocol": "binary" | "list"}`.
3. The client sends `INIT` with `protocol: 2` in its value.

A client that does not announce protocol 2 is a legacy client. In the default
mode, the server sends lists to legacy clients, so older clients keep working.

## Options

```python
from vuer import Vuer

app = Vuer(array_protocol="auto")  # default
```

| `array_protocol` | Behavior |
| ---------------- | -------- |
| `auto`           | Binary arrays for clients that announce protocol 2, lists for legacy clients. |
| `binary`         | Always binary arrays. Legacy clients cannot decode them. |
| `list`           | Always lists. Use it as a compatibility flag for old clients or components. |

You can also set `VUER_ARRAY_PROTOCOL=list` in the environment.
`array_list_max` (default 16) sets the largest array size that stays a list.

In the browser, `setArrayDecoding('list')` from `@vuer-ai/vuer` decodes binary
arrays into nested plain arrays, as protocol 1 did. `asNestedList(value)`
converts one value for a component that expects nested lists.

## Python client

`VuerClient` announces protocol 2, decodes binary arrays into numpy arrays,
and sends binary arrays after the server announced protocol 2 in
`SERVER_INFO`. `client.server_protocol` holds that value.

## The bundled client

The wheel ships the browser client in `src/vuer/client_build`. That client and
the server must speak the same protocol. The test
`src/vuer/__tests__/test_client_build.py` fails when they do not. To rebuild
the client in `vuer-web-workspace`:

```bash
pnpm --filter @vuer-ai/vuer build
pnpm --filter @vuer-ai/vuer-py-client build
pnpm --filter @vuer-ai/vuer-py-client copy-client-build   # needs ../vuer next to the workspace
python -m vuer.protocol --check-client-build
```
