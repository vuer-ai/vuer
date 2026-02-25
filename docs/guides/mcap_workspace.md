# McapWorkspace — MCAP Recording Backend

## Overview

`McapWorkspace` serves data from [MCAP](https://mcap.dev) recording files directly over
HTTP, making robot sensor recordings immediately accessible to the Vuer browser client.

MCAP is the standard container format for robotics data (ROS 2 bag format). A single
`.mcap` file can hold named binary blobs (**attachments** — URDF models, meshes, configs)
and timestamped sensor streams (**channels** — camera images, IMU, LiDAR, joint states).

```python
from vuer.workspace import McapWorkspace

# MCAP only
ws = McapWorkspace("recording.mcap")

# MCAP + local filesystem overlay
ws = McapWorkspace("recording.mcap", "./local_assets")

# Multiple recordings merged into one timeline
ws = McapWorkspace("rec_part1.mcap", "rec_part2.mcap", "./assets")
```

`Workspace` auto-upgrades when any path ends in `.mcap`:

```python
from vuer.workspace import Workspace

ws = Workspace("recording.mcap")          # → McapWorkspace
ws = Workspace("recording.mcap", "./assets")  # → McapWorkspace
ws = Workspace("./assets")               # → plain Workspace
```

---

## Quick Start

```python
from vuer import Vuer
from vuer.workspace import McapWorkspace

ws = McapWorkspace("recording.mcap", "./assets")
vuer = Vuer(workspace=ws)

@vuer.spawn(start=True)
async def main(session):
    # URDF stored as MCAP attachment
    session.set @ Robot(src="/workspace/robot.urdf")

    # Latest camera frame
    session.set @ ImagePlane(src="/topics/camera/image_raw")

    # Frame at a specific time (seconds)
    session.set @ ImagePlane(src="/topics/camera/image_raw?t=12.5")

    await session.forever()
```

---

## URL Scheme

### Attachments

Attachments are served through the standard workspace route:

```
GET /workspace/<name>
```

```python
# Attachment named "robot.urdf" in the MCAP file
session.set @ Robot(src="/workspace/robot.urdf")
session.set @ Mesh(src="/workspace/meshes/hand.stl")
```

### Topic channels

Each channel is registered as a link at init time:

```
GET /topics/<topic>          # latest message (highest log_time)
GET /topics/<topic>?t=<T>   # message closest to time T
```

Topic `/camera/image_raw` → URL `/topics/camera/image_raw`.

```python
# Latest frame
session.set @ ImagePlane(src="/topics/camera/image_raw")

# Closest frame to t = 12.5 seconds
session.set @ ImagePlane(src="/topics/camera/image_raw?t=12.5")

# Nanosecond timestamp also accepted (value >= 1e15 treated as ns)
session.set @ ImagePlane(src="/topics/camera/image_raw?t=1709123456789000000")
```

### Custom topic prefix

```python
ws = McapWorkspace("recording.mcap", topic_prefix="/data")
# topic "/camera/image_raw" → GET /data/camera/image_raw
```

---

## Overlay Behavior

Three layers with their own precedence rules:

| Layer | Precedence |
|---|---|
| MCAP attachments | First MCAP file wins for duplicate names |
| MCAP vs filesystem | MCAP attachment takes priority over same-named filesystem file |
| Filesystem paths | First path wins (inherited `Workspace` behavior) |

**Channels** from multiple MCAP files for the same topic are **merged** and sorted by
`log_time`, reconstructing a seamless timeline from split recordings.

```
McapWorkspace("rec1.mcap", "rec2.mcap", "./assets")

resolve("robot.urdf"):  MCAP attachment from rec1.mcap (first wins)
resolve("mesh.stl"):    not in MCAP → ./assets/mesh.stl
find("mesh.stl"):       ./assets/mesh.stl  (filesystem only)
find("robot.urdf"):     None              (find() never searches MCAP)
```

---

## API Reference

### Inherited from `Workspace`

All standard `Workspace` APIs work unchanged on `McapWorkspace`:

| API | Behavior |
|---|---|
| `ws.link(fn, to="/path")` | Register a callable link |
| `ws.unlink("/path")` | Remove a link |
| `ws.mount("./dir", to="/route")` | Mount a filesystem directory |
| `ws.paths` | Filesystem overlay paths only (not `.mcap` files) |
| `ws.find("file.txt")` | Filesystem search only |
| `ws.resolve("file.txt")` | MCAP attachments first, then filesystem |
| `ws.handle_link(path, req)` | Handles both user links and auto-registered topic links |

### McapWorkspace-specific

```python
ws.mcap_files           # List[Path] — MCAP files in load order
ws.attachments          # Dict[str, _AttachmentRef] — lazy refs, no bytes
ws.channels             # Dict[str, _Channel] — timestamp index, no bytes

ws.glob("*", wd="topics/")          # list all topic names
ws.glob("camera/*", wd="topics/")   # topics under camera/
ws.glob("*", wd="attachments/")     # list all attachment names
ws.glob("*.urdf", wd="attachments/")# URDF attachments only

ws.tail(n=10)                        # last 10 messages across all channels
ws.tail(n=5, path="topics/camera/image_raw")  # last 5 from one topic
ws.head(n=1)                         # first message overall
ws.head(n=1, path="/camera/image_raw")

ws.tree(level=2)                     # ASCII tree (MCAP + filesystem)
```

### Custom decoders

```python
ws = McapWorkspace(
    "recording.mcap",
    decoders={
        # Override built-in or add new schema support
        "my_company/DepthImage": lambda data: (data, "image/png"),
        "sensor_msgs/msg/PointCloud2": my_pcd_decoder,
    }
)
```

Built-in decoders handle `sensor_msgs/msg/CompressedImage`, `sensor_msgs/msg/Image`,
`json`, and `jsonschema`. Unknown schemas fall back to `application/octet-stream`.

---

## Memory Model — Lazy Loading

`McapWorkspace` never stores message payloads or attachment bytes in RAM.
Only **timestamps** and **file references** are kept in the index.

| What is stored at init | Per message |
|---|---|
| `log_time` (8 bytes) | ✓ |
| `chunk_start_offset` (8 bytes) | ✓ |
| `source_file` pointer (8 bytes) | ✓ |
| Message payload | ✗ |

For a 10 GB recording with 10 million messages:

- **Index size**: ~240 MB (24 bytes × 10M)
- **Old eager-load design**: 10 GB in RAM
- **Data is read from disk only when an HTTP request arrives.**

---

## MCAP Index Exploitation

`McapWorkspace` fully exploits all three MCAP index record types stored in the
summary section at the end of every indexed MCAP file.

### MCAP file layout

```
┌─────────────────────────────────────────────────────────┐
│  DATA SECTION                                           │
│  ┌──────────────┐ ← chunk_start_offset (ChunkIndex)    │
│  │  Chunk       │   compressed messages                 │
│  └──────────────┘                                       │
│  MessageIndex    ← offset stored in ChunkIndex          │
│    (log_time, offset_in_chunk) × N                      │
│  Attachment      ← absolute offset stored in            │
│                    AttachmentIndex                       │
├─────────────────────────────────────────────────────────┤
│  SUMMARY SECTION  ← get_summary() reads ONLY this       │
│    Schema, Channel records                              │
│    Statistics  (totals, time range)                     │
│    ChunkIndex × N  (.chunk_start_offset, .time_range,   │
│                     .message_index_offsets)             │
│    AttachmentIndex × M  (.offset, .name, .media_type)   │
│    SummaryOffset  (group locations within summary)      │
├─────────────────────────────────────────────────────────┤
│  Footer  (→ summary_start)                              │
└─────────────────────────────────────────────────────────┘
```

### Init — zero chunk decompression

```
get_summary()
  → reads Footer → seeks to summary_start → reads summary only
  → returns: channels, schemas, statistics, chunk_indexes, attachment_indexes
  → NO data section read, NO chunk decompressed

AttachmentIndex  →  _AttachmentRef.file_offset  (direct seek key)
ChunkIndex       →  _Channel.chunk_offsets[i]   (direct seek key per message)
MessageIndex     →  _Channel.log_times[i]       (timestamps, 16B each, no payload)
```

Init reads only the summary section plus small `MessageIndex` records —
O(summary\_size + 16 × N\_messages). A 10 GB file with a 1 MB summary initialises
in milliseconds.

### Fetch — direct seeking

**Attachment fetch** (`file_offset >= 0`):

```
f.seek(ref.file_offset + 9)     # skip opcode (1B) + length (8B)
Attachment.read(ReadDataStream(f))
→ one seek, one contiguous read  (O(1) regardless of attachment count)
```

**Message fetch** (`chunk_offset >= 0`):

```
f.seek(chunk_offsets[idx] + 9)   # seek directly to chunk — no index filtering
Chunk.read(ReadDataStream(f))    # read compressed chunk header
breakup_chunk(chunk)             # decompress exactly this one chunk
match (channel_id, log_time)     # find message within chunk
→ one seek, one chunk decompressed per request
```

### Fallback — files without a summary section

If `get_summary()` returns `None` (file written without indexing), `McapWorkspace`
falls back to a single-pass `StreamReader` scan that decompresses all chunks.
`chunk_offsets` and `file_offset` are set to `-1`; fetch methods detect this and
use `iter_messages()` / `iter_attachments()` instead.

---

## Cost Summary

| Operation | Before (iter_messages only) | After (full index) |
|---|---|---|
| Init (indexed file) | Decompress all chunks — O(file\_size) | Read summary + MessageIndex — **O(summary + 16·N)** |
| Init (no summary) | Linear scan | Same linear scan (fallback) |
| Attachment fetch | Scan until name match — O(n\_attachments) | Direct seek — **O(1)** |
| Message fetch — chunk location | Filter all ChunkIndex — O(n\_chunks) | Direct seek — **O(1)** |
| Message fetch — data | Decompress one chunk | Decompress one chunk (same) |
| Timestamp lookup (`?t=`) | O(log N) binary search | O(log N) binary search (same) |

---

## See Also

- [Workspace API](../api/workspace.md) — base `Workspace` class reference
- [Static File Serving](static_files.md) — filesystem overlay and hot loading
