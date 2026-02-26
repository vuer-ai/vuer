"""McapWorkspace — MCAP recording backend for Vuer's Workspace.

Serves MCAP attachments and topics over HTTP:

- Attachments -> ``resolve("name")`` or ``GET /workspace/name``
- Topics      -> ``GET /topics/<topic>`` (latest) or ``GET /topics/<topic>?t=<time>``

**MCAP index exploitation**

MCAP files carry a summary section at the end of the file containing three
index record types that we exploit at every level:

``AttachmentIndex`` (one per attachment)
    Stores the absolute byte ``offset`` of the ``Attachment`` record.
    Used by :meth:`_fetch_attachment` to seek directly to the right byte —
    O(1) regardless of file size or attachment count.

``ChunkIndex`` (one per chunk)
    Stores ``chunk_start_offset``, ``message_start_time``, and
    ``message_end_time`` for each compressed chunk.  We store
    ``chunk_start_offset`` alongside every message in our index so that
    :meth:`_fetch_message` can seek directly to the correct chunk —
    O(1) instead of scanning all chunk indexes.

``MessageIndex`` (one per channel per chunk)
    Stores ``(log_time_ns, offset_within_uncompressed_chunk)`` for every
    message.  Read at init time to populate ``_Channel.log_times`` **without
    decompressing any chunk**.

**Init cost** (indexed file)::

    get_summary()           → O(summary_section_size)
                              reads AttachmentIndex + ChunkIndex + channel metadata
                              **no chunk decompression at all**
    read MessageIndex rows  → O(total_messages × 16 bytes)
                              small sequential I/O in file order

**Init cost** (fallback — file has no summary section)::

    Full linear scan        → O(file_size + decompress_all_chunks)
                              same as before, only triggered on non-indexed files

**Memory footprint** (both paths)::

    N messages × 24 bytes   (log_time + chunk_offset + source pointer)
    vs. N messages × payload (old eager-load design)

**Fetch cost per HTTP request**::

    Attachment: seek(file_offset + 9) → Attachment.read()   # 1 seek
    Topic msg:  seek(chunk_offset + 9) → Chunk.read()
                → breakup_chunk() → find Message by (channel_id, log_time)
                                                              # 1 seek + 1 chunk decompress

**Usage**::

    # MCAP-only
    ws = McapWorkspace("recording.mcap")

    # Multiple MCAP files (channels merged by log_time)
    ws = McapWorkspace("rec1.mcap", "rec2.mcap")

    # MCAP + filesystem overlay via OverlayWorkspace
    from vuer.workspace import OverlayWorkspace, FilesystemWorkspace
    ws = OverlayWorkspace(McapWorkspace("recording.mcap"), FilesystemWorkspace("./assets"))

    # Or via factory (auto-compose)
    from vuer.workspace import workspace_from_config
    ws = workspace_from_config(["recording.mcap", "./assets"])

**Topic URLs**::

    GET /topics/camera/image_raw          # latest message
    GET /topics/camera/image_raw?t=1.5   # closest to 1.5 seconds

**Time query format**: float seconds or nanosecond integer (>= 1e15).
"""

from __future__ import annotations

import bisect
import fnmatch
from dataclasses import dataclass, field
from pathlib import Path
from typing import Dict, IO, List, Optional

from vuer.workspace.mcap_decoders import BUILTIN_DECODERS, Decoder
from vuer.workspace.workspace import BaseWorkspace, Blob, ResolveResult, TailRecord, TreeNode, sanitize_path


@dataclass
class _AttachmentRef:
    """Lazy reference to one MCAP attachment.

    No data is stored in RAM.  :meth:`McapWorkspace._fetch_attachment` uses
    ``file_offset`` to seek directly to the ``Attachment`` record —
    O(1) regardless of how many attachments are in the file.

    Attributes:
        name:        Attachment name (key in ``_attachments`` dict).
        media_type:  MIME type from the ``AttachmentIndex`` record.
        source_file: The MCAP file that owns this attachment.
        file_offset: Absolute byte offset of the ``Attachment`` record in
                     ``source_file``.  ``-1`` when the file has no summary
                     section (fallback path: scanned via ``iter_attachments``).
    """

    name: str
    media_type: str
    source_file: Path
    file_offset: int  # AttachmentIndex.offset; -1 → no index (fallback)


@dataclass
class _Channel:
    """Per-topic index built from ``MessageIndex`` records.

    Three parallel lists — ``log_times``, ``chunk_offsets``, ``sources`` —
    are always the same length and represent the same message at each index
    ``i``.  No message bytes are stored.

    ``chunk_offsets`` is the key addition over a naive timestamp-only design:
    it lets :meth:`_fetch_message` jump directly to the right chunk in O(1)
    without scanning all ``ChunkIndex`` records.

    Attributes:
        topic:         Channel topic string (e.g. ``"/camera/image_raw"``).
        schema_name:   MCAP schema name (e.g. ``"sensor_msgs/msg/Image"``).
        schema_encoding: MCAP schema encoding (e.g. ``"ros2msg"``, ``"json"``).
        log_times:     Sorted nanosecond timestamps, one per message.
        chunk_offsets: Parallel to ``log_times``.  ``ChunkIndex.chunk_start_offset``
                       for the chunk that holds message ``i``.  ``-1`` for files
                       without a summary section.
        sources:       Parallel to ``log_times``.  Which MCAP file holds message ``i``.
        channel_ids:   ``str(path) → channel_id`` for each source file.
                       Required so :meth:`_fetch_message` can match messages by
                       ``(channel_id, log_time)`` after decompressing a chunk.
    """

    topic: str
    schema_name: str
    schema_encoding: str
    log_times: List[int] = field(default_factory=list)
    chunk_offsets: List[int] = field(default_factory=list)  # ChunkIndex.chunk_start_offset
    sources: List[Path] = field(default_factory=list)
    channel_ids: Dict[str, int] = field(default_factory=dict)  # str(path) → int channel_id


class McapWorkspace(BaseWorkspace):
    """Workspace backend for MCAP recording files.

    Serves MCAP attachments and channel messages over HTTP.  Fully exploits
    MCAP's three-level index (``AttachmentIndex``, ``ChunkIndex``,
    ``MessageIndex``) so that:

    - **Init** never decompresses a single chunk.
    - **Attachment fetch** is a single file seek (O(1)).
    - **Topic fetch** decompresses exactly one chunk per request.

    All base :class:`BaseWorkspace` APIs work unchanged:

    - ``workspace.link(fn, to="/path")``       — inherited
    - ``workspace.unlink("/path")``            — inherited
    - ``workspace.mount("./dir", to="/route")`` — inherited
    - ``workspace.links``                      — inherited
    - ``workspace.resolve("name")``            — MCAP attachments
    - ``workspace.handle_link(path, req)``     — inherited

    For MCAP + filesystem overlay use :class:`OverlayWorkspace` or the
    :func:`workspace_from_config` factory.
    """

    def __init__(
        self,
        *mcap_files,
        topic_prefix: str = "/topics",
        decoders: Optional[Dict[str, Decoder]] = None,
    ):
        """Initialize McapWorkspace with MCAP files only.

        :param mcap_files: One or more ``.mcap`` file paths.
        :param topic_prefix: URL prefix for auto-registered topic links.
                             Default: ``"/topics"``.
        :param decoders: Custom decoders merged over built-ins.
                         ``{schema_name_or_encoding: callable(bytes) -> (bytes, ct)}``
        """
        super().__init__()

        self._mcap_files: List[Path] = [Path(p) for p in mcap_files if str(p).endswith(".mcap")]
        self._topic_prefix: str = topic_prefix.rstrip("/")
        self._decoders: Dict[str, Decoder] = {**BUILTIN_DECODERS, **(decoders or {})}

        # Lazy index — only metadata, no message/attachment bytes in RAM
        self._attachments: Dict[str, _AttachmentRef] = {}
        self._channels: Dict[str, _Channel] = {}

        self._load()
        self._register_topic_links()

    # ------------------------------------------------------------------
    # Phase 1: Index building
    # ------------------------------------------------------------------

    def _load(self):
        """Index all MCAP files then sort merged channel timelines."""
        for path in self._mcap_files:
            self._load_file(path)

        # Sort all three parallel lists together by log_time
        for ch in self._channels.values():
            if len(ch.log_times) > 1:
                triples = sorted(zip(ch.log_times, ch.chunk_offsets, ch.sources))
                ch.log_times = [t[0] for t in triples]
                ch.chunk_offsets = [t[1] for t in triples]
                ch.sources = [t[2] for t in triples]

    def _load_file(self, path: Path):
        """Index one MCAP file using its summary section.

        **Fast path** (file has a summary section — the common case):

        1. ``get_summary()`` — reads only the summary section at the end of
           the file.  Returns ``AttachmentIndex``, ``ChunkIndex``, channel /
           schema metadata, and ``Statistics``.  **Zero chunk decompression.**

        2. Build ``_AttachmentRef`` objects from ``AttachmentIndex`` records,
           storing ``file_offset`` for O(1) seeking later.

        3. For each ``ChunkIndex``, read its ``MessageIndex`` records from the
           file offsets stored in ``ChunkIndex.message_index_offsets``.
           ``MessageIndex.records`` yields ``(log_time, offset_in_chunk)``
           pairs — the complete timestamp index with no decompression.

        **Slow path** (file has no summary section):

        Falls back to :meth:`_load_file_fallback` which does a full linear
        scan via ``StreamReader`` (``emit_chunks=False``).  This decompresses
        all chunks and is O(file_size), but it is the only option for
        non-indexed files.
        """
        try:
            from mcap.reader import SeekingReader
        except ImportError as exc:
            raise ImportError(
                "The 'mcap' package is required for McapWorkspace. "
                "Install it with: pip install mcap"
            ) from exc

        with open(path, "rb") as f:
            reader = SeekingReader(f, validate_crcs=False)
            summary = reader.get_summary()

            if summary is None:
                # No summary section — fall through to linear scan
                has_summary = False
            else:
                has_summary = True
                self._index_from_summary(f, path, summary)

        if not has_summary:
            self._load_file_fallback(path)

    def _index_from_summary(self, f: IO, path: Path, summary) -> None:
        """Populate ``_channels`` and ``_attachments`` from an MCAP ``Summary``.

        All reads are in ascending file-offset order to minimise seek distance.

        :param f:       Open (seekable) file handle.
        :param path:    Absolute path to the MCAP file.
        :param summary: ``mcap.reader.Summary`` returned by ``get_summary()``.
        """
        # ── Channel catalog ──────────────────────────────────────────────
        # summary.channels and summary.schemas are read from the summary
        # section — zero message data reads.
        for ch_id, ch in summary.channels.items():
            schema = summary.schemas.get(ch.schema_id)
            topic = ch.topic
            if topic not in self._channels:
                self._channels[topic] = _Channel(
                    topic=topic,
                    schema_name=schema.name if schema else "",
                    schema_encoding=schema.encoding if schema else "",
                )
            # Store channel_id per source file for use in _fetch_message()
            self._channels[topic].channel_ids[str(path)] = ch_id

        # ── Attachment index ─────────────────────────────────────────────
        # AttachmentIndex.offset is the absolute byte position of the
        # Attachment record — no attachment data is read here.
        for ai in summary.attachment_indexes:
            if ai.name not in self._attachments:
                self._attachments[ai.name] = _AttachmentRef(
                    name=ai.name,
                    media_type=ai.media_type or "application/octet-stream",
                    source_file=path,
                    file_offset=ai.offset,  # direct seek key — O(1) fetch later
                )

        # ── Message timestamp index from MessageIndex records ────────────
        # ChunkIndex.message_index_offsets maps channel_id → absolute file
        # offset of the MessageIndex record for that channel in that chunk.
        # MessageIndex.records = [(log_time_ns, offset_within_chunk), ...].
        # Reading MessageIndex records requires only small sequential I/O —
        # no chunk decompression.
        mi_jobs: List[tuple] = []  # (file_offset, topic, chunk_start_offset)
        for ci in summary.chunk_indexes:
            for ch_id, mi_offset in ci.message_index_offsets.items():
                ch_info = summary.channels.get(ch_id)
                if ch_info and ch_info.topic in self._channels:
                    mi_jobs.append((mi_offset, ch_info.topic, ci.chunk_start_offset))

        # Process in file-offset order → ascending I/O → minimal seek distance
        mi_jobs.sort()
        for mi_offset, topic, chunk_start_offset in mi_jobs:
            mi = _read_message_index_at(f, mi_offset)
            if mi is None:
                continue
            ch = self._channels[topic]
            for log_time, _offset_in_chunk in mi.records:
                ch.log_times.append(log_time)
                ch.chunk_offsets.append(chunk_start_offset)  # direct chunk key
                ch.sources.append(path)

    def _load_file_fallback(self, path: Path) -> None:
        """Linear scan fallback for MCAP files without a summary section.

        Decompresses all chunks and streams ``Schema``, ``Channel``,
        ``Message``, and ``Attachment`` records in one forward pass.
        ``chunk_offsets`` and ``file_offset`` are set to ``-1`` to signal
        that index-based seeking is unavailable; fetch methods fall back to
        ``iter_messages`` / ``iter_attachments`` for these entries.
        """
        from mcap.records import Attachment, Channel, Message, Schema
        from mcap.stream_reader import StreamReader

        schemas: Dict[int, object] = {}
        raw_channels: Dict[int, object] = {}

        with open(path, "rb") as f:
            for record in StreamReader(f, validate_crcs=False).records:
                if isinstance(record, Schema):
                    schemas[record.id] = record

                elif isinstance(record, Channel):
                    raw_channels[record.id] = record
                    schema = schemas.get(record.schema_id)
                    topic = record.topic
                    if topic not in self._channels:
                        self._channels[topic] = _Channel(
                            topic=topic,
                            schema_name=schema.name if schema else "",
                            schema_encoding=schema.encoding if schema else "",
                        )
                    # -1 channel_id sentinel: not needed because chunk_offset=-1
                    # triggers _fetch_message_fallback() for these messages.

                elif isinstance(record, Message):
                    raw_ch = raw_channels.get(record.channel_id)
                    if raw_ch is None:
                        continue
                    topic = raw_ch.topic
                    if topic not in self._channels:
                        continue
                    ch = self._channels[topic]
                    ch.log_times.append(record.log_time)
                    ch.chunk_offsets.append(-1)  # no ChunkIndex → use fallback
                    ch.sources.append(path)

                elif isinstance(record, Attachment):
                    if record.name not in self._attachments:
                        self._attachments[record.name] = _AttachmentRef(
                            name=record.name,
                            media_type=record.media_type or "application/octet-stream",
                            source_file=path,
                            file_offset=-1,  # no AttachmentIndex → use fallback
                        )

    # ------------------------------------------------------------------
    # Phase 2: On-demand data fetching
    # ------------------------------------------------------------------

    def _fetch_attachment(self, ref: _AttachmentRef) -> bytes:
        """Read attachment bytes on demand.

        **Indexed path** (``ref.file_offset >= 0``):
            Seeks directly to ``ref.file_offset + 9`` (skipping the 1-byte
            opcode and 8-byte length prefix), then calls
            ``Attachment.read(ReadDataStream(f))``.  Exactly one seek +
            one contiguous read of ``ref.data_size`` bytes.

        **Fallback path** (``ref.file_offset == -1``):
            Falls back to ``iter_attachments()`` (linear scan) for files
            that were written without a summary section.
        """
        if ref.file_offset >= 0:
            try:
                from mcap.data_stream import ReadDataStream
                from mcap.records import Attachment

                with open(ref.source_file, "rb") as f:
                    # +1 opcode byte, +8 length bytes (uint64 LE)
                    f.seek(ref.file_offset + 9)
                    att = Attachment.read(ReadDataStream(f))
                    return bytes(att.data)
            except Exception:
                pass  # fall through to linear scan

        # Fallback: linear scan via iter_attachments()
        from mcap.reader import make_reader

        with open(ref.source_file, "rb") as f:
            for attachment in make_reader(f, validate_crcs=False).iter_attachments():
                if attachment.name == ref.name:
                    return bytes(attachment.data)

        raise FileNotFoundError(f"Attachment {ref.name!r} not found in {ref.source_file}")

    def _fetch_message(self, topic: str, idx: int, ch: _Channel) -> Optional[bytes]:
        """Read one message on demand, exploiting stored chunk offsets.

        **Indexed path** (``ch.chunk_offsets[idx] >= 0``):
            Seeks directly to ``chunk_start_offset + 9``, reads the ``Chunk``
            record header, decompresses via ``breakup_chunk()``, and scans
            the chunk's ``Message`` records for a match on
            ``(channel_id, log_time)``.  Only one chunk is ever decompressed
            per call.

        **Fallback path** (``ch.chunk_offsets[idx] == -1``):
            Falls back to ``iter_messages(start_time=t, end_time=t+1)`` which
            uses the ``SeekingReader``'s cached chunk index to locate and
            decompress the right chunk.

        :param topic: Channel topic string.
        :param idx:   Index into ``ch.log_times`` / ``ch.chunk_offsets`` / ``ch.sources``.
        :param ch:    Channel metadata.
        :return:      Raw message bytes, or ``None`` if not found.
        """
        target_time = ch.log_times[idx]
        chunk_offset = ch.chunk_offsets[idx]
        source_file = ch.sources[idx]

        if chunk_offset >= 0:
            try:
                from mcap.data_stream import ReadDataStream
                from mcap.records import Chunk, Message
                from mcap.stream_reader import breakup_chunk

                channel_id = ch.channel_ids.get(str(source_file), -1)

                with open(source_file, "rb") as f:
                    # Seek directly to chunk data — skip opcode (1B) + length (8B)
                    f.seek(chunk_offset + 9)
                    chunk = Chunk.read(ReadDataStream(f))

                # Decompress chunk and locate message by (channel_id, log_time).
                # breakup_chunk() yields Schema/Channel/Message records in order;
                # we only return on an exact match so timestamp collisions across
                # channels within the same chunk are handled correctly.
                for record in breakup_chunk(chunk, validate_crc=False):
                    if (
                        isinstance(record, Message)
                        and record.channel_id == channel_id
                        and record.log_time == target_time
                    ):
                        return bytes(record.data)

                return None
            except Exception:
                pass  # fall through to iter_messages() fallback

        # Fallback: SeekingReader.iter_messages() with 1-ns time window.
        # The cached chunk index is used internally to skip to the right chunk.
        return self._fetch_message_fallback(topic, target_time, source_file)

    def _fetch_message_fallback(self, topic: str, target_time: int, source_file: Path) -> Optional[bytes]:
        """Fallback message fetch via ``iter_messages`` for unindexed files."""
        from mcap.reader import make_reader

        with open(source_file, "rb") as f:
            for _, _, message in make_reader(f, validate_crcs=False).iter_messages(
                topics=[topic],
                start_time=target_time,
                end_time=target_time + 1,
            ):
                if message.log_time == target_time:
                    return bytes(message.data)
        return None

    # ------------------------------------------------------------------
    # Topic link registration
    # ------------------------------------------------------------------

    def _register_topic_links(self):
        """Auto-register one ``link()`` per MCAP channel.

        Each topic becomes accessible at ``<topic_prefix>/<topic>`` with an
        optional ``?t=<time>`` query parameter.
        """
        for topic, channel in self._channels.items():
            url_path = self._topic_prefix + "/" + topic.lstrip("/")

            def _make_handler(ch: _Channel, t: str):
                async def handler(request):
                    if not ch.log_times:
                        from aiohttp import web

                        raise web.HTTPNotFound()

                    t_str = request.query.get("t")
                    if t_str is not None:
                        try:
                            t_ns = _parse_time_ns(t_str)
                            idx = _closest_index(ch.log_times, t_ns)
                        except (ValueError, IndexError):
                            idx = len(ch.log_times) - 1
                    else:
                        idx = len(ch.log_times) - 1

                    data = self._fetch_message(t, idx, ch)
                    if data is None:
                        from aiohttp import web

                        raise web.HTTPNotFound()

                    decoded, content_type = self._decode(ch.schema_name, ch.schema_encoding, data)
                    return Blob(data=decoded, content_type=content_type)

                return handler

            self.link(_make_handler(channel, topic), to=url_path)

    # ------------------------------------------------------------------
    # Resolve override
    # ------------------------------------------------------------------

    async def resolve(self, filename: str) -> ResolveResult:
        """Resolve by name: MCAP attachments only.

        :param filename: Relative filename to resolve.
        :return: ``Blob`` (MCAP attachment) or ``None`` if not found.
        """
        key = sanitize_path(filename)
        if not key:
            return None

        ref = self._attachments.get(key)
        if ref is None:
            return None

        data = self._fetch_attachment(ref)
        return Blob(data=data, content_type=ref.media_type)

    # ------------------------------------------------------------------
    # Decoder dispatch
    # ------------------------------------------------------------------

    def _decode(self, schema_name: str, schema_encoding: str, data: bytes) -> tuple[bytes, str]:
        """Decode message bytes via the registered decoder registry.

        Lookup: ``schema_name`` → ``schema_encoding`` → raw fallback.
        """
        decoder = self._decoders.get(schema_name) or self._decoders.get(schema_encoding)
        if decoder:
            return decoder(data)
        return data, "application/octet-stream"

    # ------------------------------------------------------------------
    # Glob override
    # ------------------------------------------------------------------

    def glob(self, pattern: str, wd: str = "") -> List[str]:
        """Glob across MCAP virtual directories.

        ``wd="topics/"`` — matches channel topics.
        ``wd="attachments/"`` — matches attachment names.
        Anything else — returns empty list (no filesystem in McapWorkspace).
        """
        wd_key = sanitize_path(wd) if wd.strip("/") else ""

        if wd_key == "topics":
            return sorted(
                t.lstrip("/")
                for t in self._channels
                if fnmatch.fnmatch(t.lstrip("/"), pattern)
            )

        if wd_key == "attachments":
            return sorted(
                name
                for name in self._attachments
                if fnmatch.fnmatch(name, pattern)
            )

        return []

    # ------------------------------------------------------------------
    # Tail / Head overrides
    # ------------------------------------------------------------------

    def tail(self, n: int = 10, path: str = "") -> List["TailRecord"]:
        """Return the last *n* messages from an MCAP channel.

        Fetches only the selected *n* messages on demand (lazy).

        Path routing:

        - Empty → last *n* across all channels merged by ``log_time``.
        - ``"topics/<topic>"`` or bare topic name → last *n* from that channel.
        - Anything else → empty list (no filesystem in McapWorkspace).
        """
        path_stripped = path.strip("/")

        if not path_stripped:
            all_entries = []
            for ch in self._channels.values():
                for i, t in enumerate(ch.log_times):
                    all_entries.append((t, ch, i))
            all_entries.sort(key=lambda x: x[0])

            records = []
            for t, ch, idx in all_entries[-n:]:
                data = self._fetch_message(ch.topic, idx, ch)
                if data is not None:
                    records.append(TailRecord(content=data, log_time=t, topic=ch.topic))
            return records

        topic_name = self._resolve_topic_path(path_stripped)

        if topic_name is not None:
            ch = self._channels[topic_name]
            start_idx = max(0, len(ch.log_times) - n)
            records = []
            for idx in range(start_idx, len(ch.log_times)):
                data = self._fetch_message(topic_name, idx, ch)
                if data is not None:
                    records.append(TailRecord(content=data, log_time=ch.log_times[idx], topic=topic_name))
            return records

        return []

    def head(self, n: int = 10, path: str = "") -> List["TailRecord"]:
        """Return the first *n* messages from an MCAP channel.

        Symmetric counterpart to :meth:`tail`.  Same path routing rules.
        """
        path_stripped = path.strip("/")

        if not path_stripped:
            all_entries = []
            for ch in self._channels.values():
                for i, t in enumerate(ch.log_times):
                    all_entries.append((t, ch, i))
            all_entries.sort(key=lambda x: x[0])

            records = []
            for t, ch, idx in all_entries[:n]:
                data = self._fetch_message(ch.topic, idx, ch)
                if data is not None:
                    records.append(TailRecord(content=data, log_time=t, topic=ch.topic))
            return records

        topic_name = self._resolve_topic_path(path_stripped)

        if topic_name is not None:
            ch = self._channels[topic_name]
            records = []
            for idx in range(min(n, len(ch.log_times))):
                data = self._fetch_message(topic_name, idx, ch)
                if data is not None:
                    records.append(TailRecord(content=data, log_time=ch.log_times[idx], topic=topic_name))
            return records

        return []

    def _resolve_topic_path(self, path_stripped: str) -> Optional[str]:
        """Convert a user-supplied path to a canonical channel topic string.

        Tries ``"topics/<rest>"``, ``"/<topic>"``, and bare topic forms.
        Returns ``None`` if no channel matches.
        """
        if path_stripped.startswith("topics/"):
            rest = path_stripped[len("topics/"):]
            for candidate in ("/" + rest, rest):
                if candidate in self._channels:
                    return candidate

        for candidate in ("/" + path_stripped, path_stripped):
            if candidate in self._channels:
                return candidate

        return None

    # ------------------------------------------------------------------
    # Properties
    # ------------------------------------------------------------------

    @property
    def paths(self) -> tuple:
        """McapWorkspace has no filesystem paths."""
        return ()

    @property
    def attachments(self) -> Dict[str, _AttachmentRef]:
        """Read-only view of all indexed MCAP attachments (lazy refs).

        Each value is an :class:`_AttachmentRef` — no bytes are stored.
        Use :meth:`resolve` to get the actual data::

            blob = await ws.resolve("robot.urdf")   # Blob with bytes
        """
        return dict(self._attachments)

    @property
    def channels(self) -> Dict[str, _Channel]:
        """Read-only view of all indexed MCAP channels.

        Each channel holds ``log_times`` (sorted timestamps) and
        ``chunk_offsets`` (direct chunk seek keys).  No message bytes stored.
        """
        return dict(self._channels)

    @property
    def mcap_files(self) -> List[Path]:
        """List of MCAP files loaded into this workspace (in load order)."""
        return list(self._mcap_files)

    # ------------------------------------------------------------------
    # Tree
    # ------------------------------------------------------------------

    def tree(
        self,
        level: Optional[int] = None,
        pattern: str = "*",
        limit: Optional[int] = None,
    ) -> TreeNode:
        """Build a tree representation of all MCAP content.

        Each MCAP file is a virtual directory with ``attachments/`` and
        ``topics/`` sub-sections.
        """
        root = TreeNode(name="McapWorkspace", path=None, is_dir=True)

        for mcap_path in self._mcap_files:
            mcap_node = TreeNode(name=f"{mcap_path.name}  [MCAP]", path=mcap_path, is_dir=True)

            # attachments/ section
            atts = list(self._attachments.values())
            if pattern != "*":
                atts = [a for a in atts if fnmatch.fnmatch(a.name, pattern)]
            truncated_atts = False
            if limit is not None and len(atts) > limit:
                atts = atts[:limit]
                truncated_atts = True

            if atts or truncated_atts:
                att_sec = TreeNode(name="attachments/", path=None, is_dir=True, truncated=truncated_atts)
                for att in atts:
                    att_sec.children.append(TreeNode(name=att.name, path=None, is_dir=False))
                mcap_node.children.append(att_sec)

            # topics/ section
            if level is None or level >= 1:
                topics = sorted(self._channels.keys())
                if pattern != "*":
                    topics = [t for t in topics if fnmatch.fnmatch(t.lstrip("/"), pattern)]
                truncated_topics = False
                if limit is not None and len(topics) > limit:
                    topics = topics[:limit]
                    truncated_topics = True

                if topics or truncated_topics:
                    topic_sec = TreeNode(name="topics/", path=None, is_dir=True, truncated=truncated_topics)
                    for topic in topics:
                        ch = self._channels[topic]
                        n = len(ch.log_times)
                        label = f"{topic}  ({n} msg{'s' if n != 1 else ''})"
                        topic_sec.children.append(TreeNode(name=label, path=None, is_dir=False))
                    mcap_node.children.append(topic_sec)

            root.children.append(mcap_node)

        return root

    def __repr__(self):
        paths_str = ", ".join(f'"{p}"' for p in self._mcap_files)
        return f"McapWorkspace({paths_str})"


# ------------------------------------------------------------------
# Module-level helpers
# ------------------------------------------------------------------


def _read_message_index_at(f: IO, offset: int):
    """Read a ``MessageIndex`` record at the given absolute file offset.

    Seeks to ``offset``, reads the 1-byte opcode and 8-byte length prefix,
    then calls ``MessageIndex.read(ReadDataStream(f))`` on the remaining
    content.  Returns ``None`` on any error (corrupted record, wrong opcode).

    This is the key primitive used by :meth:`McapWorkspace._index_from_summary`
    to read per-message timestamps **without decompressing any chunks**.

    :param f:      Open seekable binary file handle.
    :param offset: Absolute byte offset of the ``MessageIndex`` record.
    :return:       Parsed ``MessageIndex`` object, or ``None``.
    """
    try:
        from mcap.data_stream import ReadDataStream
        from mcap.records import MessageIndex

        f.seek(offset)
        f.read(1)  # opcode byte (0x07 for MessageIndex)
        f.read(8)  # length: uint64 LE
        return MessageIndex.read(ReadDataStream(f))
    except Exception:
        return None


def _parse_time_ns(t_str: str) -> int:
    """Parse a time string to nanoseconds.

    Values >= 1e15 are treated as nanoseconds; smaller values as seconds.

    Examples::

        _parse_time_ns("1.5")                  # 1_500_000_000
        _parse_time_ns("1709123456789000000")  # as-is
    """
    t = float(t_str)
    if t >= 1e15:
        return int(t)
    return int(t * 1e9)


def _closest_index(log_times: List[int], t_ns: int) -> int:
    """Return the index of the entry in *log_times* closest to *t_ns*.

    Binary search on the sorted list — O(log n).

    :raises IndexError: If ``log_times`` is empty.
    """
    if not log_times:
        raise IndexError("log_times is empty")

    idx = bisect.bisect_left(log_times, t_ns)

    if idx == 0:
        return 0
    if idx >= len(log_times):
        return len(log_times) - 1

    before_t = log_times[idx - 1]
    after_t = log_times[idx]
    if abs(after_t - t_ns) < abs(before_t - t_ns):
        return idx
    return idx - 1
