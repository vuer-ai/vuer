"""Server integration tests for Workspace file serving.

Spawns a real Vuer server in a subprocess and tests via HTTP requests.
"""

import pytest
import asyncio
import aiohttp
import time
from pathlib import Path
from multiprocessing import Process

# Fixtures directory relative to this test file
FIXTURES_DIR = Path(__file__).parent / "fixtures"
TEST_PORT = 18012  # Use non-standard port to avoid conflicts


def run_server():
    """Run Vuer server in subprocess."""
    from vuer import Vuer

    app = Vuer(
        host="localhost",
        port=TEST_PORT,
        workspace=str(FIXTURES_DIR),
    )

    @app.spawn(start=True)
    async def main(session):
        await session.forever()


@pytest.fixture(scope="module")
def server():
    """Start server in subprocess, yield, then cleanup."""
    proc = Process(target=run_server, daemon=True)
    proc.start()

    # Wait for server to start
    base_url = f"http://localhost:{TEST_PORT}"

    async def wait_for_server():
        async with aiohttp.ClientSession() as session:
            for _ in range(50):  # 5 second timeout
                try:
                    async with session.get(base_url, timeout=aiohttp.ClientTimeout(total=0.1)):
                        return True
                except (aiohttp.ClientError, asyncio.TimeoutError):
                    await asyncio.sleep(0.1)
        return False

    if not asyncio.run(wait_for_server()):
        proc.terminate()
        pytest.fail("Server failed to start")

    yield base_url

    # Cleanup
    proc.terminate()
    proc.join(timeout=2)
    if proc.is_alive():
        proc.kill()


# =============================================================================
# File serving tests
# =============================================================================


@pytest.mark.asyncio
async def test_serve_root_file(server):
    """Test serving a file at root level."""
    async with aiohttp.ClientSession() as session:
        async with session.get(f"{server}/workspace/root.txt") as resp:
            assert resp.status == 200
            text = await resp.text()
            assert "root file" in text


@pytest.mark.asyncio
async def test_serve_nested_file(server):
    """Test serving a nested file."""
    async with aiohttp.ClientSession() as session:
        async with session.get(f"{server}/workspace/robots/test.urdf") as resp:
            assert resp.status == 200
            text = await resp.text()
            assert "test_robot" in text


@pytest.mark.asyncio
async def test_serve_deeply_nested_file(server):
    """Test serving a deeply nested file."""
    async with aiohttp.ClientSession() as session:
        async with session.get(f"{server}/workspace/robots/meshes/body.stl") as resp:
            assert resp.status == 200
            text = await resp.text()
            assert "binary stl data" in text


@pytest.mark.asyncio
async def test_serve_json_content_type(server):
    """Test that JSON files get correct content-type."""
    async with aiohttp.ClientSession() as session:
        async with session.get(f"{server}/workspace/config.json") as resp:
            assert resp.status == 200
            assert "application/json" in resp.content_type


@pytest.mark.asyncio
async def test_serve_urdf_content_type(server):
    """Test that URDF files get correct content-type."""
    async with aiohttp.ClientSession() as session:
        async with session.get(f"{server}/workspace/robots/test.urdf") as resp:
            assert resp.status == 200
            assert "xml" in resp.content_type


# =============================================================================
# 404 tests
# =============================================================================


@pytest.mark.asyncio
async def test_not_found(server):
    """Test 404 for non-existent file."""
    async with aiohttp.ClientSession() as session:
        async with session.get(f"{server}/workspace/nonexistent.txt") as resp:
            assert resp.status == 404


@pytest.mark.asyncio
async def test_nested_not_found(server):
    """Test 404 for non-existent nested file."""
    async with aiohttp.ClientSession() as session:
        async with session.get(f"{server}/workspace/robots/missing/file.stl") as resp:
            assert resp.status == 404


# =============================================================================
# Security tests
# =============================================================================


@pytest.mark.asyncio
async def test_path_traversal_blocked(server):
    """Test that path traversal attacks are blocked."""
    async with aiohttp.ClientSession() as session:
        async with session.get(f"{server}/workspace/../test_nested_files.py") as resp:
            assert resp.status == 404


@pytest.mark.asyncio
async def test_absolute_path_blocked(server):
    """Test that absolute paths don't escape workspace."""
    async with aiohttp.ClientSession() as session:
        # Double slash to test absolute path handling
        async with session.get(f"{server}/workspace//etc/passwd") as resp:
            assert resp.status == 404


@pytest.mark.asyncio
async def test_dotdot_traversal_blocked(server):
    """Test that .. traversal is blocked."""
    async with aiohttp.ClientSession() as session:
        async with session.get(f"{server}/workspace/robots/../../etc/passwd") as resp:
            assert resp.status == 404


# =============================================================================
# Hot reload tests
# =============================================================================


@pytest.mark.asyncio
async def test_hot_reload_header(server):
    """Test hot reload disables caching."""
    async with aiohttp.ClientSession() as session:
        async with session.get(f"{server}/workspace/root.txt?hot") as resp:
            assert resp.status == 200
            assert resp.headers.get("Cache-Control") == "no-cache"


@pytest.mark.asyncio
async def test_hot_reload_case_insensitive(server):
    """Test hot reload parameter is case-insensitive."""
    async with aiohttp.ClientSession() as session:
        async with session.get(f"{server}/workspace/root.txt?HOT") as resp:
            assert resp.status == 200
            assert resp.headers.get("Cache-Control") == "no-cache"


@pytest.mark.asyncio
async def test_hot_reload_false(server):
    """Test hot=false doesn't disable caching."""
    async with aiohttp.ClientSession() as session:
        async with session.get(f"{server}/workspace/root.txt?hot=false") as resp:
            assert resp.status == 200
            assert resp.headers.get("Cache-Control") != "no-cache"


# =============================================================================
# Standalone runner
# =============================================================================

if __name__ == "__main__":
    pytest.main([__file__, "-v", "-s"])
