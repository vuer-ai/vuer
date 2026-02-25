"""Tests for McapWorkspace.

All MCAP fixtures are created programmatically via the ``mcap`` writer —
no binary files are committed to the repository.

Run::

    pytest src/vuer/workspace/__tests__/test_mcap_workspace.py -v

Requires::

    pip install mcap
"""

from __future__ import annotations

from pathlib import Path
from unittest.mock import MagicMock

import pytest


# ---------------------------------------------------------------------------
# Helper: programmatic MCAP fixture builder
# ---------------------------------------------------------------------------


def _make_mcap(
    tmp_path: Path,
    filename: str = "test.mcap",
    attachments: list = None,
    channels: list = None,
) -> Path:
    """Write a minimal MCAP file for testing.

    :param tmp_path: Temporary directory from pytest.
    :param filename: Output filename within ``tmp_path``.
    :param attachments: List of dicts ``{name, media_type, data}``.
    :param channels: List of dicts::

        {
            topic: str,
            schema_name: str,
            schema_encoding: str,   # default "json"
            messages: [{log_time: int, data: bytes}, ...]
        }

    :return: Path to the written MCAP file.
    """
    try:
        from mcap.writer import Writer
    except ImportError:
        pytest.skip("mcap package not installed")

    mcap_path = tmp_path / filename
    with open(mcap_path, "wb") as f:
        writer = Writer(f)
        writer.start()

        if channels:
            for ch_spec in channels:
                schema_id = writer.register_schema(
                    name=ch_spec["schema_name"],
                    encoding=ch_spec.get("schema_encoding", "json"),
                    data=b"",
                )
                channel_id = writer.register_channel(
                    schema_id=schema_id,
                    topic=ch_spec["topic"],
                    message_encoding=ch_spec.get("schema_encoding", "json"),
                )
                for i, msg in enumerate(ch_spec.get("messages", [])):
                    writer.add_message(
                        channel_id=channel_id,
                        log_time=msg["log_time"],
                        data=msg["data"],
                        publish_time=msg["log_time"],
                        sequence=i,
                    )

        if attachments:
            for att in attachments:
                writer.add_attachment(
                    log_time=0,
                    create_time=0,
                    name=att["name"],
                    media_type=att.get("media_type", "application/octet-stream"),
                    data=att["data"],
                )

        writer.finish()

    return mcap_path


# ---------------------------------------------------------------------------
# Attachment tests
# ---------------------------------------------------------------------------


@pytest.mark.asyncio
async def test_resolve_attachment(tmp_path):
    """Attachment is resolved by name and returned as a Blob."""
    mcap_path = _make_mcap(
        tmp_path,
        attachments=[
            {"name": "robot.urdf", "media_type": "application/xml", "data": b"<robot/>"}
        ],
    )

    from vuer.workspace import Blob
    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = McapWorkspace(str(mcap_path))
    result = await ws.resolve("robot.urdf")

    assert result is not None
    assert isinstance(result, Blob)
    assert result.data == b"<robot/>"
    assert result.content_type == "application/xml"


@pytest.mark.asyncio
async def test_resolve_attachment_not_found(tmp_path):
    """Resolving a name not in MCAP or filesystem returns None."""
    mcap_path = _make_mcap(tmp_path)

    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = McapWorkspace(str(mcap_path))
    result = await ws.resolve("nonexistent.urdf")

    assert result is None


# ---------------------------------------------------------------------------
# MCAP index population tests
# ---------------------------------------------------------------------------


def test_attachment_ref_has_file_offset(tmp_path):
    """AttachmentIndex.offset is stored in _AttachmentRef.file_offset (>= 0)."""
    mcap_path = _make_mcap(
        tmp_path,
        attachments=[
            {"name": "robot.urdf", "media_type": "application/xml", "data": b"<robot/>"}
        ],
    )

    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = McapWorkspace(str(mcap_path))
    ref = ws.attachments["robot.urdf"]
    # file_offset >= 0 means the fast direct-seek path is used
    assert ref.file_offset >= 0


def test_channel_chunk_offsets_populated(tmp_path):
    """ChunkIndex.chunk_start_offset is stored in _Channel.chunk_offsets (>= 0)."""
    mcap_path = _make_mcap(
        tmp_path,
        channels=[
            {
                "topic": "/sensor/data",
                "schema_name": "json",
                "schema_encoding": "json",
                "messages": [
                    {"log_time": 1_000_000_000, "data": b'{"x": 1}'},
                    {"log_time": 2_000_000_000, "data": b'{"x": 2}'},
                ],
            }
        ],
    )

    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = McapWorkspace(str(mcap_path))
    ch = ws.channels["/sensor/data"]

    assert len(ch.chunk_offsets) == 2
    # All offsets should be non-negative (indexed file)
    assert all(off >= 0 for off in ch.chunk_offsets)


def test_channel_channel_ids_populated(tmp_path):
    """channel_ids maps str(source_file) → int channel_id for message matching."""
    mcap_path = _make_mcap(
        tmp_path,
        channels=[
            {
                "topic": "/imu",
                "schema_name": "json",
                "schema_encoding": "json",
                "messages": [{"log_time": 1_000_000_000, "data": b"{}"}],
            }
        ],
    )

    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = McapWorkspace(str(mcap_path))
    ch = ws.channels["/imu"]

    assert str(mcap_path) in ch.channel_ids
    assert isinstance(ch.channel_ids[str(mcap_path)], int)


# ---------------------------------------------------------------------------
# Topic link registration tests
# ---------------------------------------------------------------------------


def test_topic_link_registered(tmp_path):
    """Each MCAP channel gets a link at ``/topics/<topic>``."""
    mcap_path = _make_mcap(
        tmp_path,
        channels=[
            {
                "topic": "/camera/image_raw",
                "schema_name": "json",
                "schema_encoding": "json",
                "messages": [{"log_time": 1_000_000_000, "data": b"{}"}],
            }
        ],
    )

    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = McapWorkspace(str(mcap_path))
    assert "/topics/camera/image_raw" in ws.links


def test_topic_link_custom_prefix(tmp_path):
    """Custom ``topic_prefix`` is applied to all topic links."""
    mcap_path = _make_mcap(
        tmp_path,
        channels=[
            {
                "topic": "/camera/image_raw",
                "schema_name": "json",
                "schema_encoding": "json",
                "messages": [{"log_time": 1_000_000_000, "data": b"{}"}],
            }
        ],
    )

    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = McapWorkspace(str(mcap_path), topic_prefix="/data")
    assert "/data/camera/image_raw" in ws.links
    assert "/topics/camera/image_raw" not in ws.links


# ---------------------------------------------------------------------------
# Topic message retrieval tests
# ---------------------------------------------------------------------------


@pytest.mark.asyncio
async def test_topic_latest_message(tmp_path):
    """No ``?t=`` query returns the last message (highest log_time)."""
    mcap_path = _make_mcap(
        tmp_path,
        channels=[
            {
                "topic": "/sensor/data",
                "schema_name": "json",
                "schema_encoding": "json",
                "messages": [
                    {"log_time": 1_000_000_000, "data": b'{"frame": 1}'},
                    {"log_time": 2_000_000_000, "data": b'{"frame": 2}'},
                    {"log_time": 3_000_000_000, "data": b'{"frame": 3}'},
                ],
            }
        ],
    )

    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = McapWorkspace(str(mcap_path))

    mock_request = MagicMock()
    mock_request.query = {}
    response = await ws.handle_link("/topics/sensor/data", mock_request)

    assert response is not None
    assert response.body == b'{"frame": 3}'


@pytest.mark.asyncio
async def test_topic_time_query(tmp_path):
    """``?t=<seconds>`` returns the message closest to that timestamp."""
    mcap_path = _make_mcap(
        tmp_path,
        channels=[
            {
                "topic": "/sensor/data",
                "schema_name": "json",
                "schema_encoding": "json",
                "messages": [
                    {"log_time": 1_000_000_000, "data": b'{"frame": 1}'},  # t=1.0s
                    {"log_time": 2_000_000_000, "data": b'{"frame": 2}'},  # t=2.0s
                    {"log_time": 4_000_000_000, "data": b'{"frame": 4}'},  # t=4.0s
                ],
            }
        ],
    )

    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = McapWorkspace(str(mcap_path))

    # t=1.9s is 0.1s from frame 2 and 0.9s from frame 1 -> frame 2 wins
    mock_request = MagicMock()
    mock_request.query = {"t": "1.9"}
    response = await ws.handle_link("/topics/sensor/data", mock_request)

    assert response is not None
    assert response.body == b'{"frame": 2}'


# ---------------------------------------------------------------------------
# Multiple MCAP file overlay tests
# ---------------------------------------------------------------------------


@pytest.mark.asyncio
async def test_multiple_mcap_files_attachment_first_wins(tmp_path):
    """First MCAP file wins for duplicate attachment names."""
    mcap1 = _make_mcap(
        tmp_path,
        filename="rec1.mcap",
        attachments=[
            {
                "name": "robot.urdf",
                "media_type": "application/xml",
                "data": b"<robot>first</robot>",
            }
        ],
    )
    mcap2 = _make_mcap(
        tmp_path,
        filename="rec2.mcap",
        attachments=[
            {
                "name": "robot.urdf",
                "media_type": "application/xml",
                "data": b"<robot>second</robot>",
            }
        ],
    )

    from vuer.workspace import Blob
    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = McapWorkspace(str(mcap1), str(mcap2))

    # _AttachmentRef stores source_file (no .data); first file wins
    ref = ws.attachments["robot.urdf"]
    assert ref.name == "robot.urdf"
    assert ref.source_file == mcap1

    # resolve() fetches bytes on demand from the correct source file
    result = await ws.resolve("robot.urdf")
    assert isinstance(result, Blob)
    assert result.data == b"<robot>first</robot>"


@pytest.mark.asyncio
async def test_multiple_mcap_files_channels_merged(tmp_path):
    """Messages from multiple MCAP files for the same topic are merged."""
    mcap1 = _make_mcap(
        tmp_path,
        filename="rec1.mcap",
        channels=[
            {
                "topic": "/sensor/data",
                "schema_name": "json",
                "schema_encoding": "json",
                "messages": [{"log_time": 1_000_000_000, "data": b'{"frame": 1}'}],
            }
        ],
    )
    mcap2 = _make_mcap(
        tmp_path,
        filename="rec2.mcap",
        channels=[
            {
                "topic": "/sensor/data",
                "schema_name": "json",
                "schema_encoding": "json",
                "messages": [{"log_time": 2_000_000_000, "data": b'{"frame": 2}'}],
            }
        ],
    )

    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = McapWorkspace(str(mcap1), str(mcap2))

    # Both timestamps should be merged into log_times
    channel = ws.channels["/sensor/data"]
    assert len(channel.log_times) == 2
    # chunk_offsets should also have 2 entries
    assert len(channel.chunk_offsets) == 2

    # Latest should be frame 2
    mock_request = MagicMock()
    mock_request.query = {}
    response = await ws.handle_link("/topics/sensor/data", mock_request)
    assert response.body == b'{"frame": 2}'


# ---------------------------------------------------------------------------
# Decoder tests
# ---------------------------------------------------------------------------


def test_decoder_json():
    """``json`` schema name passes data through as ``application/json``."""
    from vuer.workspace.mcap_decoders import _decode_json

    data, ct = _decode_json(b'{"key": "value"}')
    assert data == b'{"key": "value"}'
    assert ct == "application/json"


@pytest.mark.asyncio
async def test_decoder_jsonschema_via_encoding(tmp_path):
    """``jsonschema`` schema encoding passes data through as JSON."""
    mcap_path = _make_mcap(
        tmp_path,
        channels=[
            {
                "topic": "/events",
                "schema_name": "MyEvent",  # not in built-ins
                "schema_encoding": "jsonschema",  # IS in built-ins
                "messages": [{"log_time": 1_000_000_000, "data": b'{"type": "click"}'}],
            }
        ],
    )

    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = McapWorkspace(str(mcap_path))

    mock_request = MagicMock()
    mock_request.query = {}
    response = await ws.handle_link("/topics/events", mock_request)
    assert response.content_type == "application/json"


def test_decode_fallback():
    """Unknown schema name and encoding returns raw bytes with octet-stream."""
    from vuer.workspace.mcap_decoders import _decode_fallback

    raw = b"\x00\x01\x02\x03"
    data, ct = _decode_fallback(raw)
    assert data == raw
    assert ct == "application/octet-stream"


@pytest.mark.asyncio
async def test_decode_fallback_via_workspace(tmp_path):
    """Unknown schema in MCAP topic returns raw bytes."""
    mcap_path = _make_mcap(
        tmp_path,
        channels=[
            {
                "topic": "/custom",
                "schema_name": "my_company/CustomMsg",
                "schema_encoding": "protobuf",
                "messages": [{"log_time": 1_000_000_000, "data": b"\x08\x01"}],
            }
        ],
    )

    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = McapWorkspace(str(mcap_path))

    mock_request = MagicMock()
    mock_request.query = {}
    response = await ws.handle_link("/topics/custom", mock_request)
    assert response.body == b"\x08\x01"
    assert response.content_type == "application/octet-stream"


@pytest.mark.asyncio
async def test_custom_decoder(tmp_path):
    """Custom decoder overrides built-in for the given schema name."""
    mcap_path = _make_mcap(
        tmp_path,
        channels=[
            {
                "topic": "/proprietary",
                "schema_name": "my_company/Depth",
                "schema_encoding": "custom",
                "messages": [{"log_time": 1_000_000_000, "data": b"depth-data"}],
            }
        ],
    )

    from vuer.workspace.mcap_workspace import McapWorkspace

    custom_decoder = lambda data: (b"decoded:" + data, "image/png")
    ws = McapWorkspace(str(mcap_path), decoders={"my_company/Depth": custom_decoder})

    mock_request = MagicMock()
    mock_request.query = {}
    response = await ws.handle_link("/topics/proprietary", mock_request)
    assert response.body == b"decoded:depth-data"
    assert response.content_type == "image/png"


# ---------------------------------------------------------------------------
# Workspace.__new__ factory tests
# ---------------------------------------------------------------------------


def test_workspace_factory_upgrades_to_mcap(tmp_path):
    """``Workspace("file.mcap")`` auto-upgrades to ``McapWorkspace``."""
    mcap_path = _make_mcap(tmp_path)

    from vuer.workspace import Workspace
    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = Workspace(str(mcap_path))
    assert isinstance(ws, McapWorkspace)


def test_workspace_factory_no_mcap():
    """``Workspace("./assets")`` stays as plain ``Workspace``."""
    from vuer.workspace import Workspace
    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = Workspace("./assets")
    assert type(ws) is Workspace
    assert not isinstance(ws, McapWorkspace)


def test_workspace_factory_mixed_paths(tmp_path):
    """``Workspace("file.mcap", "./assets")`` auto-upgrades to ``McapWorkspace``."""
    mcap_path = _make_mcap(tmp_path)

    from vuer.workspace import Workspace
    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = Workspace(str(mcap_path), "./assets")
    assert isinstance(ws, McapWorkspace)
    assert Path("./assets") in ws.paths


# ---------------------------------------------------------------------------
# MCAP + filesystem overlay tests
# ---------------------------------------------------------------------------


@pytest.mark.asyncio
async def test_mcap_attachment_takes_priority_over_filesystem(tmp_path):
    """MCAP attachment wins over a same-named filesystem file."""
    fs_dir = tmp_path / "assets"
    fs_dir.mkdir()
    (fs_dir / "robot.urdf").write_text("<robot>filesystem</robot>")

    mcap_path = _make_mcap(
        tmp_path,
        attachments=[
            {
                "name": "robot.urdf",
                "media_type": "application/xml",
                "data": b"<robot>mcap</robot>",
            }
        ],
    )

    from vuer.workspace import Blob
    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = McapWorkspace(str(mcap_path), str(fs_dir))
    result = await ws.resolve("robot.urdf")

    assert isinstance(result, Blob)
    assert result.data == b"<robot>mcap</robot>"


@pytest.mark.asyncio
async def test_filesystem_fallback_for_missing_attachment(tmp_path):
    """``resolve()`` falls back to filesystem for files not in MCAP."""
    fs_dir = tmp_path / "assets"
    fs_dir.mkdir()
    (fs_dir / "mesh.stl").write_bytes(b"\x00STL")

    mcap_path = _make_mcap(tmp_path)  # no attachments

    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = McapWorkspace(str(mcap_path), str(fs_dir))
    result = await ws.resolve("mesh.stl")

    assert result is not None
    assert isinstance(result, Path)
    assert result.name == "mesh.stl"


@pytest.mark.asyncio
async def test_find_searches_filesystem_only(tmp_path):
    """``find()`` only searches filesystem (not MCAP attachments)."""
    fs_dir = tmp_path / "assets"
    fs_dir.mkdir()
    (fs_dir / "mesh.stl").write_bytes(b"\x00STL")

    mcap_path = _make_mcap(
        tmp_path,
        attachments=[
            {"name": "robot.urdf", "media_type": "application/xml", "data": b"<robot/>"}
        ],
    )

    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = McapWorkspace(str(mcap_path), str(fs_dir))

    # filesystem file -> found
    assert ws.find("mesh.stl") is not None
    # MCAP attachment -> NOT found by find() (filesystem only)
    assert ws.find("robot.urdf") is None


# ---------------------------------------------------------------------------
# mcap_files property test
# ---------------------------------------------------------------------------


def test_mcap_files_property(tmp_path):
    """``mcap_files`` exposes the list of loaded MCAP paths."""
    mcap1 = _make_mcap(tmp_path, filename="a.mcap")
    mcap2 = _make_mcap(tmp_path, filename="b.mcap")

    from vuer.workspace.mcap_workspace import McapWorkspace

    ws = McapWorkspace(str(mcap1), str(mcap2))
    assert len(ws.mcap_files) == 2
    assert mcap1 in ws.mcap_files
    assert mcap2 in ws.mcap_files


# ---------------------------------------------------------------------------
# Time parsing unit tests
# ---------------------------------------------------------------------------


def test_parse_time_ns_seconds():
    """Float seconds are converted to nanoseconds."""
    from vuer.workspace.mcap_workspace import _parse_time_ns

    assert _parse_time_ns("1.5") == 1_500_000_000
    assert _parse_time_ns("0.0") == 0
    assert _parse_time_ns("10") == 10_000_000_000


def test_parse_time_ns_nanoseconds():
    """Values >= 1e15 are treated as nanoseconds directly."""
    from vuer.workspace.mcap_workspace import _parse_time_ns

    assert _parse_time_ns("1000000000000000000") == 1_000_000_000_000_000_000
    assert _parse_time_ns("1.5e15") == 1_500_000_000_000_000


# ---------------------------------------------------------------------------
# _closest_index unit tests
# ---------------------------------------------------------------------------


def test_closest_index_empty_raises():
    """``_closest_index`` raises IndexError for an empty list."""
    from vuer.workspace.mcap_workspace import _closest_index

    with pytest.raises(IndexError):
        _closest_index([], 1_000_000_000)


def test_closest_index_exact_match():
    """``_closest_index`` returns the correct index for an exact timestamp match."""
    from vuer.workspace.mcap_workspace import _closest_index

    log_times = [1_000_000_000, 2_000_000_000, 3_000_000_000]
    assert _closest_index(log_times, 2_000_000_000) == 1


def test_closest_index_before_first():
    """``_closest_index`` returns 0 when t_ns is before all timestamps."""
    from vuer.workspace.mcap_workspace import _closest_index

    log_times = [5_000_000_000, 10_000_000_000]
    assert _closest_index(log_times, 0) == 0


def test_closest_index_after_last():
    """``_closest_index`` returns last index when t_ns is after all timestamps."""
    from vuer.workspace.mcap_workspace import _closest_index

    log_times = [1_000_000_000, 2_000_000_000]
    assert _closest_index(log_times, 999_000_000_000) == 1


def test_closest_index_prefers_nearest():
    """``_closest_index`` returns the index of the genuinely nearest timestamp."""
    from vuer.workspace.mcap_workspace import _closest_index

    log_times = [1_000_000_000, 2_000_000_000, 4_000_000_000]
    # t=1.9s → 0.1s from index 1 vs 0.9s from index 0 → index 1
    assert _closest_index(log_times, 1_900_000_000) == 1
    # t=3.5s → 0.5s from index 2 vs 1.5s from index 1 → index 2
    assert _closest_index(log_times, 3_500_000_000) == 2
