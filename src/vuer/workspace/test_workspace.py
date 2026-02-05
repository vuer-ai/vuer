"""Tests for the Workspace class."""

import asyncio
import os
import tempfile
from pathlib import Path
from unittest.mock import MagicMock

import pytest

from vuer.workspace import Workspace, Blob, workspace_from_config, jpg, png


# =============================================================================
# Workspace initialization tests
# =============================================================================


def test_workspace_init_no_args():
    """Test Workspace initialization with no arguments (defaults to '.')."""
    ws = Workspace()

    assert ws.paths == (Path("."),)


def test_workspace_init_single_string():
    """Test Workspace initialization with single string path."""
    ws = Workspace("/tmp/test")

    assert ws.paths == (Path("/tmp/test"),)


def test_workspace_init_single_path():
    """Test Workspace initialization with single Path object."""
    ws = Workspace(Path("/tmp/test"))

    assert ws.paths == (Path("/tmp/test"),)


def test_workspace_init_multiple_strings():
    """Test Workspace initialization with multiple string paths."""
    ws = Workspace("/tmp/a", "/tmp/b", "/tmp/c")

    assert ws.paths == (Path("/tmp/a"), Path("/tmp/b"), Path("/tmp/c"))


def test_workspace_init_mixed_args():
    """Test Workspace initialization with mixed string and Path args."""
    ws = Workspace("/tmp/a", Path("/tmp/b"), "/tmp/c")

    assert ws.paths == (Path("/tmp/a"), Path("/tmp/b"), Path("/tmp/c"))


def test_workspace_paths_is_tuple():
    """Test that paths returns a tuple (immutable)."""
    ws = Workspace("/tmp/a", "/tmp/b")

    assert isinstance(ws.paths, tuple)


def test_workspace_absolute_paths():
    """Test absolute_paths property."""
    ws = Workspace(".")

    assert ws.absolute_paths == [os.path.abspath(".")]


def test_workspace_absolute_paths_multiple():
    """Test absolute_paths with multiple overlay paths."""
    ws = Workspace(".", "/tmp")

    paths = ws.absolute_paths
    assert len(paths) == 2
    assert paths[0] == os.path.abspath(".")
    assert paths[1] == "/tmp"


# =============================================================================
# Workspace.find() tests
# =============================================================================


def test_workspace_find_file():
    """Test find() with multiple search paths."""
    with tempfile.TemporaryDirectory() as tmpdir1:
        with tempfile.TemporaryDirectory() as tmpdir2:
            # Create a file only in the second directory
            test_file = Path(tmpdir2) / "test.txt"
            test_file.write_text("hello")

            ws = Workspace(tmpdir1, tmpdir2)

            # Should find file in second path
            found = ws.find("test.txt")
            assert found == test_file


def test_workspace_find_file_first_wins():
    """Test that first matching path wins when file exists in multiple paths."""
    with tempfile.TemporaryDirectory() as tmpdir1:
        with tempfile.TemporaryDirectory() as tmpdir2:
            # Create file in both directories
            file1 = Path(tmpdir1) / "test.txt"
            file2 = Path(tmpdir2) / "test.txt"
            file1.write_text("first")
            file2.write_text("second")

            ws = Workspace(tmpdir1, tmpdir2)

            # Should find file in first path
            found = ws.find("test.txt")
            assert found == file1


def test_workspace_find_file_not_found():
    """Test find() returns None when file not found."""
    with tempfile.TemporaryDirectory() as tmpdir:
        ws = Workspace(tmpdir)

        found = ws.find("nonexistent.txt")
        assert found is None


def test_workspace_find_nested_path():
    """Test find() with nested file paths."""
    with tempfile.TemporaryDirectory() as tmpdir:
        # Create nested directory and file
        nested_dir = Path(tmpdir) / "subdir" / "deep"
        nested_dir.mkdir(parents=True)
        test_file = nested_dir / "file.txt"
        test_file.write_text("nested")

        ws = Workspace(tmpdir)

        found = ws.find("subdir/deep/file.txt")
        assert found == test_file


# =============================================================================
# Workspace.__repr__() tests
# =============================================================================


def test_workspace_repr_single():
    """Test workspace string representation with single path."""
    ws = Workspace("/tmp/test")

    assert repr(ws) == 'Workspace("/tmp/test")'


def test_workspace_repr_multiple():
    """Test workspace string representation with multiple paths."""
    ws = Workspace("/tmp/a", "/tmp/b")

    assert repr(ws) == 'Workspace("/tmp/a", "/tmp/b")'


# =============================================================================
# workspace_from_config() tests
# =============================================================================


def test_workspace_from_config_none():
    """Test workspace_from_config with None."""
    ws = workspace_from_config(None)

    assert isinstance(ws, Workspace)
    assert ws.paths == (Path("."),)


def test_workspace_from_config_string():
    """Test workspace_from_config with string."""
    ws = workspace_from_config("/tmp/test")

    assert isinstance(ws, Workspace)
    assert ws.paths == (Path("/tmp/test"),)


def test_workspace_from_config_path():
    """Test workspace_from_config with Path."""
    ws = workspace_from_config(Path("/tmp/test"))

    assert isinstance(ws, Workspace)
    assert ws.paths == (Path("/tmp/test"),)


def test_workspace_from_config_list():
    """Test workspace_from_config with list."""
    ws = workspace_from_config(["/tmp/a", "/tmp/b"])

    assert isinstance(ws, Workspace)
    assert ws.paths == (Path("/tmp/a"), Path("/tmp/b"))


def test_workspace_from_config_workspace():
    """Test workspace_from_config with existing Workspace."""
    original = Workspace("/tmp/test")
    ws = workspace_from_config(original)

    assert ws is original


def test_workspace_from_config_invalid_type():
    """Test workspace_from_config raises on invalid type."""
    with pytest.raises(TypeError, match="Cannot convert"):
        workspace_from_config(123)  # type: ignore


# =============================================================================
# Overlay precedence tests
# =============================================================================


def test_workspace_overlay_precedence():
    """Test that overlay paths are searched in order."""
    with tempfile.TemporaryDirectory() as tmpdir1:
        with tempfile.TemporaryDirectory() as tmpdir2:
            with tempfile.TemporaryDirectory() as tmpdir3:
                # Create same file in all directories with different content
                for i, tmpdir in enumerate([tmpdir1, tmpdir2, tmpdir3], 1):
                    (Path(tmpdir) / "shared.txt").write_text(f"content-{i}")

                # Create unique files
                (Path(tmpdir1) / "only-in-first.txt").write_text("first")
                (Path(tmpdir3) / "only-in-third.txt").write_text("third")

                ws = Workspace(tmpdir1, tmpdir2, tmpdir3)

                # Shared file should come from first
                assert ws.find("shared.txt") == Path(tmpdir1) / "shared.txt"

                # Unique files should be found
                assert ws.find("only-in-first.txt") == Path(tmpdir1) / "only-in-first.txt"
                assert ws.find("only-in-third.txt") == Path(tmpdir3) / "only-in-third.txt"

                # Non-existent should return None
                assert ws.find("nonexistent.txt") is None


# =============================================================================
# Workspace.link() tests
# =============================================================================


def test_workspace_link_registers_in_links():
    """Test that link() registers in the _links dict."""
    ws = Workspace()
    ws.link(lambda: {"ok": True}, "/api/status")

    assert "/api/status" in ws.links
    assert ws.links["/api/status"]["method"] == "GET"


def test_workspace_link_normalizes_path():
    """Test that link() normalizes paths (adds leading slash, strips trailing)."""
    ws = Workspace()
    ws.link(lambda: {}, "api/status/")

    assert "/api/status" in ws.links


def test_workspace_link_custom_method():
    """Test link() with custom HTTP method."""
    ws = Workspace()
    ws.link(lambda: {}, "/api/submit", method="POST")

    assert ws.links["/api/submit"]["method"] == "POST"


def test_workspace_link_no_request_param():
    """Test link() with callable that takes no parameters."""
    ws = Workspace()

    # Lambda with no params should work
    ws.link(lambda: b"image data", "/image.jpg")

    assert "/image.jpg" in ws.links
    assert ws.links["/image.jpg"]["takes_request"] is False


def test_workspace_link_with_request_param():
    """Test link() with callable that takes request parameter."""
    ws = Workspace()

    # Lambda with request param should work
    ws.link(lambda r: {"query": r.query}, "/api/data")

    assert "/api/data" in ws.links
    assert ws.links["/api/data"]["takes_request"] is True


def test_workspace_unlink():
    """Test unlink() removes a link."""
    ws = Workspace()
    ws.link(lambda: {}, "/api/status")

    assert "/api/status" in ws.links

    result = ws.unlink("/api/status")

    assert result is True
    assert "/api/status" not in ws.links


def test_workspace_unlink_nonexistent():
    """Test unlink() returns False for nonexistent path."""
    ws = Workspace()

    result = ws.unlink("/nonexistent")

    assert result is False


def test_workspace_unlink_normalizes_path():
    """Test unlink() normalizes paths."""
    ws = Workspace()
    ws.link(lambda: {}, "/api/status")

    result = ws.unlink("api/status/")

    assert result is True
    assert "/api/status" not in ws.links


@pytest.mark.asyncio
async def test_workspace_handle_link_bytes():
    """Test handle_link() returns bytes correctly."""
    ws = Workspace()
    test_bytes = b"raw image bytes"

    ws.link(lambda: test_bytes, "/image.jpg")

    mock_request = MagicMock()
    response = await ws.handle_link("/image.jpg", mock_request)

    assert response.body == test_bytes
    assert response.content_type == "image/jpeg"


@pytest.mark.asyncio
async def test_workspace_handle_link_dict():
    """Test handle_link() returns dict as JSON."""
    ws = Workspace()

    ws.link(lambda: {"status": "ok"}, "/api/status")

    mock_request = MagicMock()
    response = await ws.handle_link("/api/status", mock_request)

    assert response.content_type == "application/json"
    assert b'"status"' in response.text.encode()


@pytest.mark.asyncio
async def test_workspace_handle_link_blob():
    """Test handle_link() returns Blob correctly."""
    ws = Workspace()
    test_data = b"custom data"

    ws.link(lambda: Blob(data=test_data, content_type="application/custom"), "/data")

    mock_request = MagicMock()
    response = await ws.handle_link("/data", mock_request)

    assert response.body == test_data
    assert response.content_type == "application/custom"


@pytest.mark.asyncio
async def test_workspace_handle_link_content_type_auto_detect():
    """Test handle_link() auto-detects content type from path extension."""
    ws = Workspace()

    ws.link(lambda: b"png data", "/image.png")

    mock_request = MagicMock()
    response = await ws.handle_link("/image.png", mock_request)

    assert response.content_type == "image/png"


@pytest.mark.asyncio
async def test_workspace_handle_link_not_found():
    """Test handle_link() returns None for unknown path."""
    ws = Workspace()

    mock_request = MagicMock()
    response = await ws.handle_link("/nonexistent", mock_request)

    assert response is None


@pytest.mark.asyncio
async def test_workspace_handle_link_optional_request():
    """Test handle_link() calls handler with or without request based on signature."""
    ws = Workspace()
    call_log = []

    # No params - should be called without request
    def no_params():
        call_log.append("no_params")
        return b"ok"

    # With params - should be called with request
    def with_params(request):
        call_log.append(f"with_params:{request.path}")
        return b"ok"

    ws.link(no_params, "/no-params")
    ws.link(with_params, "/with-params")

    mock_request = MagicMock()
    mock_request.path = "/test"

    await ws.handle_link("/no-params", mock_request)
    await ws.handle_link("/with-params", mock_request)

    assert call_log == ["no_params", "with_params:/test"]


@pytest.mark.asyncio
async def test_workspace_link_dynamic_update():
    """Test that links can be added/removed dynamically."""
    ws = Workspace()
    mock_request = MagicMock()

    # Initially no link
    response = await ws.handle_link("/dynamic", mock_request)
    assert response is None

    # Add link dynamically
    ws.link(lambda: b"hello", "/dynamic")
    response = await ws.handle_link("/dynamic", mock_request)
    assert response.body == b"hello"

    # Remove link dynamically
    ws.unlink("/dynamic")
    response = await ws.handle_link("/dynamic", mock_request)
    assert response is None


# =============================================================================
# Encoder tests
# =============================================================================


def test_jpg_encoder():
    """Test jpg() encodes numpy array to JPEG bytes."""
    import numpy as np

    # Create a simple 10x10 RGB image
    img = np.random.rand(10, 10, 3).astype(np.float32)

    result = jpg(img, quality=90)

    assert isinstance(result, bytes)
    # JPEG magic bytes
    assert result[:2] == b"\xff\xd8"


def test_png_encoder():
    """Test png() encodes numpy array to PNG bytes."""
    import numpy as np

    # Create a simple 10x10 RGBA image
    img = np.random.rand(10, 10, 4).astype(np.float32)

    result = png(img)

    assert isinstance(result, bytes)
    # PNG magic bytes
    assert result[:4] == b"\x89PNG"


def test_jpg_strips_alpha():
    """Test jpg() strips alpha channel."""
    import numpy as np

    # Create RGBA image
    img = np.random.rand(10, 10, 4).astype(np.float32)

    # Should not raise, alpha is stripped
    result = jpg(img)
    assert isinstance(result, bytes)
