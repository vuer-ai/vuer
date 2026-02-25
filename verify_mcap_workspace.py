"""verify_mcap_workspace.py — hands-on verification of McapWorkspace.

Usage
-----
    python verify_mcap_workspace.py recording.mcap [extra_asset_dir]

All checks are non-destructive (read-only). The script works against any
MCAP file regardless of which topics or attachments it contains.

What is verified
----------------
1.  Construction + auto-upgrade (``Workspace("recording.mcap")`` → ``McapWorkspace``)
2.  Index stats    — attachment count, channel count, total messages
3.  Memory model   — confirms NO bytes in RAM (only refs)
4.  Overlay paths  — filesystem dirs not mixed with .mcap in ``ws.paths``
5.  MCAP file list — ``ws.mcap_files``
6.  Attachment resolve — ``await ws.resolve(name)`` → ``Blob``
7.  Topic link registration — each channel has a URL in ``ws.links``
8.  Topic latest message   — ``GET /topics/<topic>`` (last frame)
9.  Topic time query        — ``GET /topics/<topic>?t=<t>`` (closest frame)
10. glob("*", wd="topics/")         — list all channels
11. glob("*", wd="attachments/")    — list all attachments
12. tail() / head()  — last / first N messages across all channels
13. tail(n, path=topic) / head(n, path=topic) — per-channel
14. tree()           — ASCII tree of the workspace
15. Decoder dispatch — schema→ content-type reported for each channel
16. Custom decoder   — injected at construction time, verified applied
17. Custom link      — ``ws.link(lambda: b"ok", to="/ping")`` works
18. Unlink           — ``ws.unlink("/ping")`` removes it
"""

import argparse
import asyncio
import sys
import time
from pathlib import Path


# ── colour helpers ────────────────────────────────────────────────────────────

RESET = "\033[0m"
GREEN = "\033[32m"
RED   = "\033[31m"
CYAN  = "\033[36m"
BOLD  = "\033[1m"
DIM   = "\033[2m"


def ok(msg: str) -> None:
    print(f"  {GREEN}✓{RESET}  {msg}")


def fail(msg: str) -> None:
    print(f"  {RED}✗{RESET}  {msg}")
    sys.exit(1)


def info(msg: str) -> None:
    print(f"  {DIM}·{RESET}  {msg}")


def section(title: str) -> None:
    print(f"\n{BOLD}{CYAN}── {title} {'─' * (60 - len(title))}{RESET}")


def dim(s: str) -> str:
    return f"{DIM}{s}{RESET}"


# ── helpers ───────────────────────────────────────────────────────────────────

async def _call_link(ws, path: str, query: dict = None):
    """Simulate an HTTP request to a registered link handler.

    Returns the aiohttp web.Response (or None if no link registered).
    """
    from unittest.mock import MagicMock
    from aiohttp.web_request import BaseRequest

    req = MagicMock(spec=BaseRequest)
    req.query = query or {}
    return await ws.handle_link(path, req)


# ── verification ──────────────────────────────────────────────────────────────

async def verify(mcap_path: Path, extra_dirs: list[Path]) -> None:
    print(f"\n{BOLD}McapWorkspace verification{RESET}")
    print(f"  file   : {mcap_path}")
    if extra_dirs:
        print(f"  overlay: {[str(d) for d in extra_dirs]}")

    # ── 1. Construction ───────────────────────────────────────────────────────
    section("1. Construction")

    from vuer.workspace import Workspace, McapWorkspace

    t0 = time.perf_counter()
    all_paths = [str(mcap_path)] + [str(d) for d in extra_dirs]
    ws = Workspace(*all_paths)
    elapsed = time.perf_counter() - t0

    if not isinstance(ws, McapWorkspace):
        fail(f"Workspace(*paths) should return McapWorkspace, got {type(ws).__name__}")
    ok(f"Workspace auto-upgraded to McapWorkspace in {elapsed*1000:.1f} ms")

    # Explicit construction
    ws2 = McapWorkspace(*all_paths)
    if not isinstance(ws2, McapWorkspace):
        fail("McapWorkspace(*paths) failed")
    ok("McapWorkspace(*paths) explicit construction OK")

    # ── 2. Index stats ────────────────────────────────────────────────────────
    section("2. Index stats")

    n_attachments = len(ws.attachments)
    n_channels    = len(ws.channels)
    total_msgs    = sum(len(ch.log_times) for ch in ws.channels.values())

    info(f"Attachments : {n_attachments}")
    info(f"Channels    : {n_channels}")
    info(f"Total msgs  : {total_msgs}")

    ok("Index stats retrieved")

    # ── 3. Memory model ───────────────────────────────────────────────────────
    section("3. Memory model — no bytes in RAM")

    from vuer.workspace.mcap_workspace import _AttachmentRef, _Channel

    for ref in ws.attachments.values():
        if not isinstance(ref, _AttachmentRef):
            fail(f"Expected _AttachmentRef, got {type(ref)}")
        # _AttachmentRef has no 'data' field — only file_offset (int)
        if hasattr(ref, "data") and isinstance(getattr(ref, "data", None), (bytes, bytearray, memoryview)):
            fail(f"Attachment {ref.name!r} has bytes in RAM — lazy loading broken")

    for ch in ws.channels.values():
        if not isinstance(ch, _Channel):
            fail(f"Expected _Channel, got {type(ch)}")
        # _Channel must have NO 'messages' list with payloads
        if hasattr(ch, "messages"):
            fail(f"Channel {ch.topic!r} stores message payloads — lazy loading broken")
        # Parallel lists must be same length
        if not (len(ch.log_times) == len(ch.chunk_offsets) == len(ch.sources)):
            fail(
                f"Channel {ch.topic!r}: parallel lists have different lengths "
                f"({len(ch.log_times)}, {len(ch.chunk_offsets)}, {len(ch.sources)})"
            )

    ok("No attachment bytes or message payloads in RAM (lazy refs only)")

    # ── 4. Overlay paths ──────────────────────────────────────────────────────
    section("4. Overlay paths")

    for p in ws.paths:
        if str(p).endswith(".mcap"):
            fail(f"ws.paths includes an .mcap file: {p}")
    ok(f"ws.paths contains only filesystem dirs ({list(ws.paths)})")

    # ── 5. MCAP file list ─────────────────────────────────────────────────────
    section("5. MCAP file list")

    if mcap_path not in ws.mcap_files:
        fail(f"{mcap_path} not in ws.mcap_files: {ws.mcap_files}")
    ok(f"ws.mcap_files = {ws.mcap_files}")

    # ── 6. Attachment resolve ─────────────────────────────────────────────────
    section("6. Attachment resolve")

    if n_attachments == 0:
        info("No attachments in this MCAP file — skipping resolve check")
    else:
        from vuer.workspace.workspace import Blob

        for name in list(ws.attachments.keys())[:3]:  # check up to 3
            blob = await ws.resolve(name)
            if blob is None:
                fail(f"ws.resolve({name!r}) returned None")
            if not isinstance(blob, Blob):
                fail(f"ws.resolve({name!r}) returned {type(blob)}, expected Blob")
            if len(blob.data) == 0:
                fail(f"Attachment {name!r} resolved to empty bytes")
            ok(f"resolve({name!r}) → Blob({len(blob.data)} bytes, {blob.content_type!r})")

    # 6b. Non-existent attachment → None
    result = await ws.resolve("__nonexistent_file_xyz__.urdf")
    if result is not None and str(result) != "None":
        # might return Path from filesystem; only fail if it returns a Blob
        from vuer.workspace.workspace import Blob
        if isinstance(result, Blob):
            fail("ws.resolve('nonexistent') returned a Blob — should be None or a Path")
    ok("resolve(nonexistent) returns None (not a Blob)")

    # ── 7. Topic link registration ────────────────────────────────────────────
    section("7. Topic link registration")

    if n_channels == 0:
        info("No channels in this MCAP file — skipping topic link check")
    else:
        registered_links = set(ws.links.keys())
        missing = []
        for topic in list(ws.channels.keys())[:5]:  # spot-check up to 5
            url = "/topics/" + topic.lstrip("/")
            if url not in registered_links:
                missing.append(url)

        if missing:
            fail(f"Topics not registered as links: {missing}")
        ok(f"All spot-checked topics registered as links (total links: {len(registered_links)})")

    # ── 8. Topic latest message ───────────────────────────────────────────────
    section("8. Topic latest message (no ?t=)")

    if n_channels == 0:
        info("No channels — skipping")
    else:
        from aiohttp import web

        topic = next(iter(ws.channels))
        url   = "/topics/" + topic.lstrip("/")

        resp = await _call_link(ws, url, query={})
        if resp is None:
            fail(f"GET {url} returned None")
        if not isinstance(resp, web.Response):
            fail(f"GET {url} returned {type(resp)}, expected web.Response")
        ch = ws.channels[topic]
        ok(
            f"GET {url} → {resp.status} ({len(resp.body or b'')} bytes, "
            f"{resp.content_type!r}), schema={ch.schema_name!r}"
        )

    # ── 9. Topic time query ───────────────────────────────────────────────────
    section("9. Topic time query (?t=...)")

    if n_channels == 0:
        info("No channels — skipping")
    else:
        from aiohttp import web

        topic = next(iter(ws.channels))
        ch    = ws.channels[topic]
        url   = "/topics/" + topic.lstrip("/")

        if len(ch.log_times) < 2:
            info(f"Channel {topic!r} has only 1 message — using same timestamp for ?t= test")

        # Use the first message's timestamp
        t_ns   = ch.log_times[0]
        t_secs = t_ns / 1e9
        t_str  = f"{t_secs:.9f}"

        resp = await _call_link(ws, url, query={"t": t_str})
        if resp is None:
            fail(f"GET {url}?t={t_str} returned None")
        if not isinstance(resp, web.Response):
            fail(f"GET {url}?t={t_str} returned {type(resp)}")
        ok(f"GET {url}?t={t_str} → {resp.status} ({len(resp.body or b'')} bytes)")

        # Nanosecond integer also accepted
        t_ns_str = str(t_ns)
        resp2 = await _call_link(ws, url, query={"t": t_ns_str})
        if resp2 is None:
            fail(f"GET {url}?t={t_ns_str} (ns) returned None")
        ok(f"GET {url}?t={t_ns_str} (ns int) → {resp2.status} ({len(resp2.body or b'')} bytes)")

    # ── 10. glob ──────────────────────────────────────────────────────────────
    section("10. glob")

    all_topics = ws.glob("*", wd="topics/")
    info(f"glob('*', wd='topics/')      → {len(all_topics)} topics")
    if n_channels > 0 and len(all_topics) != n_channels:
        fail(f"Expected {n_channels} topics, got {len(all_topics)}")
    ok(f"glob topics: {all_topics[:5]}{'...' if len(all_topics) > 5 else ''}")

    all_atts = ws.glob("*", wd="attachments/")
    info(f"glob('*', wd='attachments/') → {len(all_atts)} attachments")
    ok(f"glob attachments: {all_atts[:5]}{'...' if len(all_atts) > 5 else ''}")

    # Pattern filtering
    if all_topics:
        first = all_topics[0]
        prefix = first.split("/")[0] if "/" in first else first[:3]
        matched = ws.glob(f"{prefix}*", wd="topics/")
        ok(f"glob('{prefix}*', wd='topics/') → {matched}")

    # ── 11. tail / head ───────────────────────────────────────────────────────
    section("11. tail() and head()")

    n_tail = min(3, total_msgs)
    records = ws.tail(n=n_tail)
    if len(records) != n_tail:
        fail(f"tail({n_tail}) returned {len(records)} records, expected {n_tail}")
    ok(f"tail({n_tail}) across all channels → {len(records)} records")
    for r in records:
        info(f"  log_time={r.log_time}  topic={r.topic!r}  {len(r.content)} bytes")

    n_head = min(3, total_msgs)
    records_h = ws.head(n=n_head)
    if len(records_h) != n_head:
        fail(f"head({n_head}) returned {len(records_h)} records, expected {n_head}")
    ok(f"head({n_head}) across all channels → {len(records_h)} records")

    if n_channels > 0:
        topic = next(iter(ws.channels))
        ch    = ws.channels[topic]
        n = min(2, len(ch.log_times))

        tail_topic = ws.tail(n=n, path=f"topics/{topic.lstrip('/')}")
        if len(tail_topic) != n:
            fail(f"tail(n={n}, path=topic) returned {len(tail_topic)}, expected {n}")
        ok(f"tail(n={n}, path={topic!r}) → {len(tail_topic)} records")

        head_topic = ws.head(n=n, path=f"topics/{topic.lstrip('/')}")
        if len(head_topic) != n:
            fail(f"head(n={n}, path=topic) returned {len(head_topic)}, expected {n}")
        ok(f"head(n={n}, path={topic!r}) → {len(head_topic)} records")

    # ── 12. tree ──────────────────────────────────────────────────────────────
    section("12. tree()")

    tree_root = ws.tree(level=2)
    tree_str  = str(tree_root)
    if not tree_str.strip():
        fail("tree() returned empty string")
    ok("tree() output:")
    for line in tree_str.splitlines():
        print(f"       {dim(line)}")

    # ── 13. Decoder dispatch ──────────────────────────────────────────────────
    section("13. Decoder dispatch")

    from vuer.workspace.mcap_decoders import BUILTIN_DECODERS

    for topic, ch in ws.channels.items():
        decoder_key = ch.schema_name or ch.schema_encoding
        has_decoder = (ch.schema_name in BUILTIN_DECODERS) or (ch.schema_encoding in BUILTIN_DECODERS)
        status = "built-in decoder" if has_decoder else "raw fallback (application/octet-stream)"
        info(f"  {topic!r}  schema={ch.schema_name!r}  → {status}")
    ok("Decoder dispatch checked for all channels")

    # ── 14. Custom decoder ────────────────────────────────────────────────────
    section("14. Custom decoder")

    sentinel = b"CUSTOM_DECODED"
    custom_schema = "__test_custom_schema__"

    ws_custom = McapWorkspace(
        *all_paths,
        decoders={custom_schema: lambda data: (sentinel, "application/x-custom")},
    )
    decoded, ct = ws_custom._decode(custom_schema, "raw", b"anything")
    if decoded != sentinel:
        fail(f"Custom decoder not called — got {decoded!r}")
    if ct != "application/x-custom":
        fail(f"Custom content-type wrong — got {ct!r}")
    ok(f"Custom decoder applied: {custom_schema!r} → (b'CUSTOM_DECODED', 'application/x-custom')")

    # Built-ins still reachable
    if "json" in BUILTIN_DECODERS:
        raw_json = b'{"x": 1}'
        decoded2, ct2 = ws_custom._decode("", "json", raw_json)
        if decoded2 != raw_json:
            fail(f"Built-in json decoder broken after custom override: {decoded2!r}")
        ok(f"Built-in json decoder still works alongside custom decoder")

    # ── 15. Custom link + unlink ──────────────────────────────────────────────
    section("15. link() / unlink()")

    from aiohttp import web
    from vuer.workspace.workspace import Blob

    ws.link(lambda: Blob(data=b"pong", content_type="text/plain"), to="/ping")
    if "/ping" not in ws.links:
        fail("/ping not registered after link()")
    ok("link(lambda, to='/ping') registered")

    resp_ping = await _call_link(ws, "/ping")
    if not isinstance(resp_ping, web.Response) or resp_ping.body != b"pong":
        fail(f"GET /ping returned {resp_ping!r}, expected web.Response(body=b'pong')")
    ok(f"GET /ping → {resp_ping.status} body=b'pong'")

    ws.unlink("/ping")
    if "/ping" in ws.links:
        fail("/ping still in links after unlink()")
    ok("unlink('/ping') removed the link")

    # ── Summary ───────────────────────────────────────────────────────────────
    section("Summary")
    print(f"\n  {GREEN}{BOLD}All checks passed.{RESET}")
    print(f"\n  Workspace summary:")
    print(f"    MCAP files  : {ws.mcap_files}")
    print(f"    Attachments : {n_attachments}")
    print(f"    Channels    : {n_channels}")
    print(f"    Messages    : {total_msgs}")
    print(f"    Links       : {len(ws.links)}")
    print()


# ── entry point ───────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description="Verify McapWorkspace against a real MCAP file.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    parser.add_argument("mcap_file", help="Path to the MCAP recording file")
    parser.add_argument(
        "extra_dirs",
        nargs="*",
        help="Optional filesystem overlay directories (e.g. ./assets)",
    )
    args = parser.parse_args()

    mcap_path = Path(args.mcap_file).resolve()
    if not mcap_path.exists():
        print(f"{RED}Error: MCAP file not found: {mcap_path}{RESET}")
        sys.exit(1)
    if not str(mcap_path).endswith(".mcap"):
        print(f"{RED}Error: expected a .mcap file, got: {mcap_path}{RESET}")
        sys.exit(1)

    extra_dirs = [Path(d) for d in args.extra_dirs]
    for d in extra_dirs:
        if not d.exists():
            print(f"{RED}Warning: overlay directory does not exist: {d}{RESET}")

    asyncio.run(verify(mcap_path, extra_dirs))


if __name__ == "__main__":
    main()
