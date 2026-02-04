"""Tests for nested file resolution in Workspace.

This test module verifies that the Workspace correctly resolves
nested file paths like 'robots/meshes/body.stl'.
"""

import pytest
from pathlib import Path

from vuer.workspace import Workspace, Blob, guess_content_type, sanitize_path

# Fixtures directory relative to this test file
FIXTURES_DIR = Path(__file__).parent / "fixtures"


# =============================================================================
# Nested path resolution tests
# =============================================================================


def test_resolve_root_file():
    """Test resolving a file at the root level."""
    ws = Workspace(FIXTURES_DIR)

    path = ws.find("root.txt")
    assert path is not None
    assert path.name == "root.txt"


def test_resolve_one_level_nested():
    """Test resolving a file one directory deep."""
    ws = Workspace(FIXTURES_DIR)

    path = ws.find("config.json")
    assert path is not None
    assert path.name == "config.json"


def test_resolve_two_levels_nested():
    """Test resolving a file two directories deep."""
    ws = Workspace(FIXTURES_DIR)

    path = ws.find("robots/test.urdf")
    assert path is not None
    assert path.name == "test.urdf"


def test_resolve_three_levels_nested():
    """Test resolving a file three directories deep."""
    ws = Workspace(FIXTURES_DIR)

    path = ws.find("robots/meshes/body.stl")
    assert path is not None
    assert path.name == "body.stl"


def test_resolve_deeply_nested():
    """Test resolving a file in deeply nested directory."""
    ws = Workspace(FIXTURES_DIR)

    path = ws.find("textures/metal/diffuse.png")
    assert path is not None
    assert path.name == "diffuse.png"


def test_resolve_nested_not_found():
    """Test that non-existent nested path returns None."""
    ws = Workspace(FIXTURES_DIR)

    path = ws.find("robots/nonexistent/file.txt")
    assert path is None


def test_resolve_partial_path_not_found():
    """Test that partial paths don't match directories."""
    ws = Workspace(FIXTURES_DIR)

    # 'robots' is a directory, not a file
    path = ws.find("robots")
    assert path is None


# =============================================================================
# Async resolve tests
# =============================================================================


@pytest.mark.asyncio
async def test_async_resolve_nested():
    """Test async resolve with nested path."""
    ws = Workspace(FIXTURES_DIR)

    path = await ws.resolve("robots/meshes/body.stl")
    assert path is not None
    assert path.name == "body.stl"


@pytest.mark.asyncio
async def test_async_resolve_nested_not_found():
    """Test async resolve returns None for missing nested file."""
    ws = Workspace(FIXTURES_DIR)

    path = await ws.resolve("robots/missing/file.stl")
    assert path is None


# =============================================================================
# Overlay with nested paths
# =============================================================================


def test_overlay_nested_first_wins():
    """Test that first overlay path wins for nested files."""
    # Create a second fixtures dir structure
    overlay1 = FIXTURES_DIR
    overlay2 = FIXTURES_DIR.parent  # Parent dir (won't have the files)

    ws = Workspace(overlay1, overlay2)

    # Should find in first overlay
    path = ws.find("robots/test.urdf")
    assert path is not None
    assert str(overlay1) in str(path)


# =============================================================================
# Content-type guessing for nested paths
# =============================================================================


def test_guess_content_type_urdf():
    """Test content-type guessing for URDF files."""
    assert guess_content_type("robots/test.urdf") == "application/xml"


def test_guess_content_type_stl():
    """Test content-type guessing for STL files."""
    assert guess_content_type("robots/meshes/body.stl") == "model/stl"


def test_guess_content_type_json():
    """Test content-type guessing for JSON files."""
    assert guess_content_type("config.json") == "application/json"


def test_guess_content_type_nested_png():
    """Test content-type guessing for nested PNG files."""
    content_type = guess_content_type("textures/metal/diffuse.png")
    assert content_type == "image/png"


# =============================================================================
# Path traversal safety
# =============================================================================


def test_sanitize_path_removes_leading_slash():
    """Test that leading slashes are removed."""
    assert sanitize_path("/etc/passwd") == "etc/passwd"
    assert sanitize_path("///foo/bar") == "foo/bar"


def test_sanitize_path_removes_dotdot():
    """Test that .. components are removed."""
    assert sanitize_path("../etc/passwd") == "etc/passwd"
    assert sanitize_path("foo/../bar") == "foo/bar"
    assert sanitize_path("../../etc/passwd") == "etc/passwd"


def test_sanitize_path_removes_dot():
    """Test that . components are removed."""
    assert sanitize_path("./foo/bar") == "foo/bar"
    assert sanitize_path("foo/./bar") == "foo/bar"


def test_sanitize_path_empty():
    """Test that dangerous paths become empty."""
    assert sanitize_path("..") == ""
    assert sanitize_path("../..") == ""
    assert sanitize_path(".") == ""


def test_no_path_traversal():
    """Test that path traversal attempts don't escape workspace."""
    ws = Workspace(FIXTURES_DIR)

    # Attempt to traverse up - should return None (sanitized to empty or not found)
    path = ws.find("../test_nested_files.py")
    assert path is None


def test_absolute_path_in_filename():
    """Test that absolute paths in filename are handled safely."""
    ws = Workspace(FIXTURES_DIR)

    # Leading slash is stripped, so this looks for fixtures/etc/passwd
    path = ws.find("/etc/passwd")
    # Should not find anything (etc/passwd doesn't exist in fixtures)
    assert path is None


def test_combined_traversal_attack():
    """Test combined path traversal attacks."""
    ws = Workspace(FIXTURES_DIR)

    # Various attack patterns
    assert ws.find("/../../../etc/passwd") is None
    assert ws.find("foo/../../etc/passwd") is None
    assert ws.find("/./etc/passwd") is None
