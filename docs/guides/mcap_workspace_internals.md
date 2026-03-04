# McapWorkspace — Internal Workflow

This document traces the complete internal execution flow of `McapWorkspace`,
from construction through every fetch path. Intended for contributors and anyone
who needs to understand or extend the implementation.

See [McapWorkspace guide](mcap_workspace.md) for the user-facing API reference.

---

## 1. Construction

```python
ws = McapWorkspace("rec1.mcap", "rec2.mcap", "./assets")
```

```
McapWorkspace.__init__("rec1.mcap", "rec2.mcap", "./assets")
│
├─ mcap_paths = [rec1.mcap, rec2.mcap]
├─ overlay    = ["./assets"]
│
├─ super().__init__("./assets")     ← Workspace sets up _overlay, _links, _mounts
│
├─ _attachments: Dict[str, _AttachmentRef] = {}
├─ _channels:    Dict[str, _Channel]       = {}
│
├─ _load()                          ← phase 1: build the index
└─ _register_topic_links()          ← phase 2: register HTTP handlers
```

`Workspace.__new__` auto-upgrade (triggered by `Workspace("recording.mcap")`):

```python
def __new__(cls, *paths, **kwargs):
    if cls is Workspace and any(str(p).endswith(".mcap") for p in paths):
        from vuer.workspace.mcap_workspace import McapWorkspace
        return object.__new__(McapWorkspace)   # McapWorkspace.__init__ called automatically
    return object.__new__(cls)
```

The `cls is Workspace` guard prevents infinite recursion when `McapWorkspace`
inherits this method.

---

## 2. Index Building — MCAP's Three-Level Index Stack

### 2.1 MCAP file layout (what's on disk)

```
┌─────────────────────────────────────────────────────────┐
│  magic (8 B)                                            │
├─────────────────────────────────────────────────────────┤
│  DATA SECTION                                           │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Schema record                                    │  │
│  │ Channel record                                   │  │
│  │ ┌────────────────┐  ← chunk_start_offset         │  │
│  │ │ Chunk record   │     (stored in ChunkIndex)    │  │
│  │ │  compressed    │                               │  │
│  │ │  messages...   │                               │  │
│  │ └────────────────┘                               │  │
│  │ MessageIndex  ← file offset stored in ChunkIndex │  │
│  │   [(log_time_ns, offset_in_chunk), ...]          │  │
│  │ ┌────────────────┐                               │  │
│  │ │ Chunk record   │                               │  │
│  │ │  ...           │                               │  │
│  │ └────────────────┘                               │  │
│  │ MessageIndex                                     │  │
│  │ Attachment   ← absolute offset in AttachmentIndex│  │
│  └──────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────┤
│  SUMMARY SECTION  ← get_summary() reads ONLY this       │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Schema records                                   │  │
│  │ Channel records                                  │  │
│  │ Statistics   (totals, global time range)         │  │
│  │ ChunkIndex × N chunks                            │  │
│  │   .chunk_start_offset  ← direct chunk seek key   │  │
│  │   .message_start_time / .message_end_time        │  │
│  │   .message_index_offsets {channel_id → offset}   │  │
│  │ AttachmentIndex × M attachments                  │  │
│  │   .offset   ← direct attachment seek key         │  │
│  │   .name, .media_type, .data_size                 │  │
│  │ SummaryOffset  (fast group lookup within summary) │  │
│  └──────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────┤
│  Footer  (→ summary_start offset)                       │
│  magic (8 B)                                            │
└─────────────────────────────────────────────────────────┘
```

### 2.2 `_load_file()` — three steps, zero chunk decompression

```
_load_file(rec1.mcap)
│
├─ open(rec1.mcap) → SeekingReader(validate_crcs=False)
│
├─ reader.get_summary()
│    ├─ seeks to EOF → reads Footer → finds summary_start
│    ├─ seeks to summary_start → reads ONLY the summary section
│    └─ returns Summary{channels, schemas, statistics,
│                       chunk_indexes, attachment_indexes}
│       ── NO data section read, NO chunk decompressed ──
│
├─ Step 1: channel catalog  (zero I/O beyond summary)
│    for ch_id, ch in summary.channels.items():
│      schema = summary.schemas[ch.schema_id]
│      _channels[ch.topic] = _Channel(
│          topic           = "/camera/image_raw",
│          schema_name     = "sensor_msgs/msg/CompressedImage",
│          schema_encoding = "ros2msg",
│      )
│      _channels[ch.topic].channel_ids[str(path)] = ch_id   # e.g. 3
│
├─ Step 2: attachment index  (zero data reads)
│    for ai in summary.attachment_indexes:
│      _attachments[ai.name] = _AttachmentRef(
│          name        = "robot.urdf",
│          media_type  = "application/xml",
│          source_file = rec1.mcap,
│          file_offset = 48291,    # ai.offset: absolute byte position
│      )                           # ── no attachment bytes read ──
│
└─ Step 3: message timestamp index via MessageIndex records
     #
     # ChunkIndex.message_index_offsets maps:
     #   channel_id → absolute file offset of MessageIndex record
     # MessageIndex.records = [(log_time_ns, offset_within_chunk), ...]
     #
     # Collect all (mi_file_offset, topic, chunk_start_offset) jobs
     # Sort ascending by mi_file_offset → sequential I/O, minimal seeks
     #
     for mi_offset, topic, chunk_start_offset in sorted(mi_jobs):
       f.seek(mi_offset)
       f.read(1)   # opcode byte
       f.read(8)   # length: uint64 LE
       mi = MessageIndex.read(ReadDataStream(f))
       # reads only 16 bytes × n_msgs_in_chunk — NOT message payloads
       for log_time, _ in mi.records:
         _channels[topic].log_times.append(log_time)
         _channels[topic].chunk_offsets.append(chunk_start_offset)
         _channels[topic].sources.append(rec1.mcap)
```

### 2.3 After all files — merge and sort

```
_load()  (after both rec1.mcap and rec2.mcap are indexed)
│
└─ for each channel:
     sort (log_times, chunk_offsets, sources) together by log_time
     → merged timeline across rec1.mcap + rec2.mcap
     → all three parallel lists stay in sync
```

### 2.4 What lives in RAM after `_load()`

```
_attachments = {
    "robot.urdf": _AttachmentRef(
        source_file = rec1.mcap,
        file_offset = 48291,       ← O(1) seek key; no bytes stored
        media_type  = "application/xml",
    )
}

_channels = {
    "/camera/image_raw": _Channel(
        schema_name    = "sensor_msgs/msg/CompressedImage",
        log_times      = [1_000_000_000, 2_000_000_000, 3_000_000_000, ...],
        chunk_offsets  = [12800,         12800,         65536,         ...],
              #                ↑ both t=1s and t=2s are in the SAME chunk
              #                                         ↑ t=3s is in a different chunk
        sources        = [rec1.mcap,     rec1.mcap,     rec2.mcap,     ...],
        channel_ids    = {"rec1.mcap": 3, "rec2.mcap": 1},
    )
}
```

**Memory**: `N × 24 bytes` = `24N` bytes.
For 10M messages: **240 MB** vs gigabytes of message payloads.

### 2.5 Fallback — files without a summary section

```
get_summary() → None
    │
    └─ _load_file_fallback(path)
         │
         ├─ StreamReader(f, emit_chunks=False)
         │    decompresses all chunks, yields records sequentially
         │
         ├─ Schema / Channel records → build _channels catalog
         ├─ Message records          → append log_time, chunk_offset=-1, source
         └─ Attachment records       → build _AttachmentRef(file_offset=-1)

  Sentinel -1 values trigger fallback paths in fetch methods:
    chunk_offset == -1  →  _fetch_message_fallback()  →  iter_messages()
    file_offset  == -1  →  iter_attachments() linear scan
```

---

## 3. Topic Link Registration

```
_register_topic_links()
  for topic "/camera/image_raw":
    url_path = "/topics/camera/image_raw"
    handler  = async def(request): ...   ← closure over (ch, topic)
    self.link(handler, to=url_path)
    │
    └─ _links["/topics/camera/image_raw"] = {
           "type": "callable", "fn": handler, "takes_request": True, ...
       }

_links after registration:
  "/topics/camera/image_raw" → async handler
  "/topics/imu/data"         → async handler
```

After `__init__` the workspace is fully ready. No file I/O until a request arrives.

---

## 4. Attachment Serving — O(1) seek

```
GET /workspace/robot.urdf
    │
    ▼
server → McapWorkspace.resolve("robot.urdf")
    │
    ├─ sanitize_path("robot.urdf") → "robot.urdf"   (path-traversal safe)
    ├─ ref = _attachments.get("robot.urdf")
    │        → _AttachmentRef(file_offset=48291, source_file=rec1.mcap)
    │
    └─ _fetch_attachment(ref)
         │
         ├─ ref.file_offset >= 0  → indexed path
         │
         ├─ open(rec1.mcap, "rb")
         ├─ f.seek(48291 + 9)
         │         ↑ skip opcode (1B) + length prefix (8B)
         │         file pointer is now at first byte of Attachment content
         │
         └─ Attachment.read(ReadDataStream(f))
              → bytes(att.data)    ← one seek + one contiguous read
                                     no scanning, no other attachments touched

    → Blob(data=b"<robot>...</robot>", content_type="application/xml")
    → web.Response(body=..., content_type=...)
```

**Filesystem fallback** (attachment not in MCAP):

```
resolve("mesh.stl")
  → _attachments.get("mesh.stl") → None
  → super().resolve("mesh.stl")
       → search ./assets/mesh.stl → found
       → return Path("./assets/mesh.stl")
```

**Precedence chain**:

```
MCAP attachment  →  filesystem overlay  →  None (404)
 (first file wins)    (first path wins)
```

---

## 5. Topic Serving — direct chunk seek

### 5.1 Latest message (no `?t=`)

```
GET /topics/camera/image_raw
    │
    ▼
Workspace.handle_link("/topics/camera/image_raw", request)
    │
    ├─ _links["/topics/camera/image_raw"]["fn"]  → async handler
    └─ await handler(request)
         │
         ├─ request.query.get("t") → None
         ├─ idx = len(ch.log_times) - 1      ← last (newest) entry
         │
         └─ _fetch_message("/camera/image_raw", idx, ch)
              │
              ├─ target_time  = ch.log_times[idx]    e.g. 3_000_000_000 ns
              ├─ chunk_offset = ch.chunk_offsets[idx] e.g. 65536
              ├─ source_file  = ch.sources[idx]       e.g. rec2.mcap
              ├─ channel_id   = ch.channel_ids["rec2.mcap"]  e.g. 1
              │
              ├─ chunk_offset >= 0  → indexed path
              │
              ├─ open(rec2.mcap, "rb")
              ├─ f.seek(65536 + 9)          ← direct seek to chunk
              │         ↑ no ChunkIndex scan — we know exactly where to go
              │
              ├─ chunk = Chunk.read(ReadDataStream(f))
              │          reads compressed chunk header and payload
              │
              ├─ for record in breakup_chunk(chunk, validate_crc=False):
              │    ↑ decompresses exactly THIS ONE chunk
              │    yields Schema, Channel, Message records in sequence
              │    │
              │    └─ match: isinstance(record, Message)
              │               and record.channel_id == 1
              │               and record.log_time == 3_000_000_000
              │               → return bytes(record.data)
              │
              └─ raw_bytes  (e.g. compressed JPEG)

         → _decode("sensor_msgs/msg/CompressedImage", "ros2msg", raw_bytes)
              → BUILTIN_DECODERS["sensor_msgs/msg/CompressedImage"](raw_bytes)
              → (jpeg_bytes, "image/jpeg")

         → Blob(data=jpeg_bytes, content_type="image/jpeg")

    → web.Response(body=jpeg_bytes, content_type="image/jpeg")
```

### 5.2 Time query (`?t=1.9`)

```
GET /topics/camera/image_raw?t=1.9
    │
    ├─ t_str = "1.9"
    ├─ _parse_time_ns("1.9") → 1_900_000_000 ns
    │
    ├─ _closest_index(ch.log_times, 1_900_000_000)
    │    │
    │    │  ch.log_times = [1_000_000_000, 2_000_000_000, 4_000_000_000]
    │    │                     idx=0            idx=1           idx=2
    │    │
    │    ├─ bisect_left([1e9, 2e9, 4e9], 1.9e9) → insert position 1
    │    ├─ |2e9 − 1.9e9| = 0.1e9  (after neighbor)
    │    ├─ |1e9 − 1.9e9| = 0.9e9  (before neighbor)
    │    └─ return 1              ← t=2s is nearest
    │
    └─ _fetch_message(..., idx=1, ...)
         ├─ chunk_offsets[1] = 12800   ← t=1s and t=2s are in the SAME chunk
         ├─ f.seek(12800 + 9)          ← one seek to that chunk
         ├─ Chunk.read() + breakup_chunk()
         └─ match channel_id=3, log_time=2_000_000_000 → bytes
```

---

## 6. Multi-file Overlay Logic

```
McapWorkspace("rec1.mcap", "rec2.mcap", "./assets")

┌─────────────────────────────────────────────────────┐
│                    _attachments                     │
│  "robot.urdf" → _AttachmentRef(src=rec1, off=48291) │
│  (rec2.mcap's "robot.urdf" silently dropped —       │
│   first MCAP file always wins)                      │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                    _channels                        │
│  "/camera/image_raw":                               │
│    log_times     = [1e9,   2e9,   3e9,   4e9  ]    │
│    chunk_offsets = [12800, 12800, 65536, 73728]     │
│    sources       = [rec1,  rec1,  rec2,  rec2 ]     │
│    channel_ids   = {"rec1.mcap": 3, "rec2.mcap": 1} │
│                                                     │
│  (messages from both files, sorted by log_time)     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                    _overlay                         │
│  (Path("./assets"),)   ← filesystem fallback        │
└─────────────────────────────────────────────────────┘

resolve("robot.urdf"):  MCAP att  → direct seek to rec1:48291
resolve("mesh.stl"):    MCAP miss → ./assets/mesh.stl
find("mesh.stl"):       fs only   → ./assets/mesh.stl
find("robot.urdf"):     fs only   → None  (find() never searches MCAP)
```

---

## 7. Complete Data Flow Diagram

```
                    INIT TIME (once)
                 ════════════════════

  .mcap file
  ──────────►  get_summary()
                     │  reads summary section only — NO chunk decompression
                     │
              ┌──────┴──────────────────────────┐
              │                                 │
         AttachmentIndex               ChunkIndex
         .offset ──────────────►       .chunk_start_offset
         .name                         .message_index_offsets
         .media_type                           │
              │                               │
              ▼                               ▼
        _AttachmentRef              MessageIndex records
        (offset stored,              seek in file order
         no bytes)                   (log_time, _) × N
              │                      (16B each, no payload)
              │                               │
              └──────────────┬────────────────┘
                             │
                    _attachments{}         _channels{}
                    {name → ref}           {topic → _Channel
                                            .log_times[]
                                            .chunk_offsets[]
                                            .channel_ids{}}

                    _register_topic_links()
                         _links{"/topics/..." → async handler}


                    REQUEST TIME (per HTTP request)
                 ══════════════════════════════════

  GET /workspace/robot.urdf      GET /topics/camera/image?t=1.9
          │                                  │
    resolve()                        handle_link()
          │                                  │
   _attachments["robot.urdf"]   _closest_index(log_times, t_ns) → idx
          │                                  │
   _fetch_attachment(ref)         _fetch_message(topic, idx, ch)
          │                                  │
   f.seek(file_offset + 9)        f.seek(chunk_offsets[idx] + 9)
          │         ▲                         │         ▲
          │         └── 1 seek               │         └── 1 seek
          │                            Chunk.read()
   Attachment.read()                         │
          │                          breakup_chunk()
   return bytes                              │ decompress 1 chunk
                                    match (channel_id, log_time)
                                             │
                                     return bytes
                                             │
                                      _decode(schema, enc, bytes)
                                             │
                                   Blob(data, content_type)
                                             │
                                   web.Response(body=...)
```

---

## 8. Utility APIs

### `glob()`

```python
ws.glob("*",      wd="topics/")       # fnmatch on _channels keys → no I/O
ws.glob("*.urdf", wd="attachments/")  # fnmatch on _attachments keys → no I/O
ws.glob("**/*.stl")                   # falls through → Workspace.glob() → Path.glob()
```

### `tree()`

```
ws.tree(level=2)

McapWorkspace
├── rec1.mcap  [MCAP]             ← virtual node
│   ├── attachments/
│   │   └── robot.urdf            ← _AttachmentRef.name (no bytes)
│   └── topics/
│       └── /camera/image_raw  (4 msgs)  ← len(ch.log_times)
└── ./assets/                     ← real filesystem walk
    └── mesh.stl
```

### `tail()` / `head()`

```python
ws.tail(n=5)
  # collect all (log_time, ch, idx) from every channel
  # sort by log_time → take last 5
  # _fetch_message() for each → 5 file opens (lazy, on-demand)

ws.tail(n=5, path="topics/camera/image_raw")
  # slice ch.log_times[-5:]
  # _fetch_message() for each idx → 5 file opens

ws.tail(n=5, path="logs/run.log")
  # no channel match → Workspace.tail() → deque(file, maxlen=5)
```

---

## 9. Cost Summary

| Operation | Before | After |
|---|---|---|
| **Init — indexed file** | Decompress all chunks: O(file\_size) | Read summary + MessageIndex: **O(summary + 16·N)** |
| **Init — no summary** | Linear scan | Same linear scan (fallback) |
| **Attachment fetch** | Scan until name match: O(n\_attachments) | Direct seek: **O(1)** |
| **Message fetch — chunk location** | Filter all ChunkIndex: O(n\_chunks) | Stored offset, direct seek: **O(1)** |
| **Message fetch — data** | Decompress one chunk | Decompress one chunk (same) |
| **Timestamp lookup `?t=`** | O(log N) binary search | O(log N) binary search (same) |
| **Index memory** | `16N` bytes (log\_time + source ptr) | `24N` bytes (+ chunk\_offset) |
