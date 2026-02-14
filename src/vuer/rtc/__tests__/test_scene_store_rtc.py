"""
Unit tests for SceneStoreRTC (VuerSession-integrated version).
"""

import asyncio
import time
from collections import defaultdict, deque
from unittest.mock import MagicMock

import pytest

from vuer.events import (
    CRDT_ETYPE,
    ClientEvent,
    CRDTAckEvent,
    CRDTBroadcastEvent,
    CRDTErrorEvent,
    CRDTEvent,
    CRDTHeartbeatEvent,
    CRDTOpEvent,
    CRDTRoomResetEvent,
    CRDTStateEvent,
    CRDTSyncEvent,
)
from vuer.rtc import (
    CRDTMessage,
    JournalEntry,
    Operation,
    OType,
    Snapshot,
)
from vuer.rtc.scene_store_rtc import RTCSubscription, SceneStoreRTC


def run_async(coro):
    """Helper to run async coroutines in sync tests."""
    loop = asyncio.new_event_loop()
    try:
        return loop.run_until_complete(coro)
    finally:
        loop.close()


class MockApp:
    """Mock Vuer app that records add_handler registrations."""

    def __init__(self):
        self.handlers = defaultdict(dict)

    def add_handler(self, event_type, fn):
        self.handlers[event_type]["default"] = fn


class MockSession:
    """Mock VuerSession for testing."""

    def __init__(self, ws_id="ws-1"):
        self.CURRENT_WS_ID = ws_id
        self.sent_events = []

    def send(self, event):
        self.sent_events.append(event)


def _make_crdt_event(msg_dict):
    """Create a mock CRDT_OP ClientEvent as the browser would send it."""
    return ClientEvent(etype=CRDT_ETYPE, value={"mtype": "crdt", "msg": msg_dict})


class TestSceneStoreRTCInit:
    """Tests for SceneStoreRTC initialization."""

    def test_creates_with_empty_graph(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        assert store.graph.has_node("scene")
        root = store.get_node("scene")
        assert root is not None
        assert root.tag == "Scene"

    def test_registers_crdt_op_handler(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        assert CRDT_ETYPE in app.handlers

    def test_custom_session_id(self):
        app = MockApp()
        store = SceneStoreRTC(app, session_id="my-server")

        assert store.session_id == "my-server"

    def test_auto_generated_session_id(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        assert store.session_id.startswith("python-server-")

    def test_initial_state_empty(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        assert len(store.journal) == 0
        assert store.snapshot.journal_index == 0
        assert store.snapshot.lamport_time == 0


class TestSubscription:
    """Tests for subscribe/unsubscribe with VuerSession."""

    def test_subscribe_sends_state(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        session = MockSession()
        store.subscribe(session)

        assert len(session.sent_events) == 1
        event = session.sent_events[0]
        assert isinstance(event, CRDTStateEvent)
        assert event.etype == CRDT_ETYPE
        assert event.data["mtype"] == "state"

    def test_subscribe_returns_context_manager(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        session = MockSession()
        ctx = store.subscribe(session)

        assert isinstance(ctx, RTCSubscription)

    def test_context_manager_auto_unsubscribes(self):
        app = MockApp()
        store = SceneStoreRTC(app)
        session = MockSession()

        async def _test():
            async with store.subscribe(session):
                assert session.CURRENT_WS_ID in store._subscribers
                store.insert_node("cube", "Mesh")

            assert session.CURRENT_WS_ID not in store._subscribers

            count_before = len(session.sent_events)
            store.insert_node("sphere", "Mesh")
            assert len(session.sent_events) == count_before

        run_async(_test())

    def test_manual_unsubscribe(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        session = MockSession()
        store.subscribe(session)
        assert session.CURRENT_WS_ID in store._subscribers

        store.unsubscribe(session)
        assert session.CURRENT_WS_ID not in store._subscribers

    def test_subscribe_sends_current_journal(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node("cube", "Mesh")

        session = MockSession()
        store.subscribe(session)

        event = session.sent_events[0]
        assert len(event.data["journal"]) == 1

    def test_subscribe_journal_contains_crdt_messages(self):
        """State event journal should be List[CRDTMessage], not List[JournalEntry]."""
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node("cube", "Mesh")

        session = MockSession()
        store.subscribe(session)

        event = session.sent_events[0]
        journal_dicts = event.data["journal"]
        # Each entry should be a CRDTMessage dict (has "id", "ops"), not JournalEntry
        msg = CRDTMessage.from_dict(journal_dicts[0])
        assert msg.ops[0].otype == OType.NODE_INSERT.value

    def test_unsubscribe_stops_broadcasts(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        session = MockSession()
        store.subscribe(session)
        initial_count = len(session.sent_events)

        store.unsubscribe(session)

        store.insert_node("cube", "Mesh")
        assert len(session.sent_events) == initial_count

    def test_multiple_subscribers(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        sess1 = MockSession(ws_id="ws-1")
        sess2 = MockSession(ws_id="ws-2")
        store.subscribe(sess1)
        store.subscribe(sess2)

        assert len(sess1.sent_events) == 1
        assert len(sess2.sent_events) == 1

        # Python edit broadcasts as CRDTOpEvent (mtype="crdt")
        store.insert_node("cube", "Mesh")

        assert len(sess1.sent_events) == 2
        assert len(sess2.sent_events) == 2
        assert isinstance(sess1.sent_events[1], CRDTOpEvent)
        assert sess1.sent_events[1].data["mtype"] == "crdt"

    def test_late_subscriber_gets_full_state(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node("cube1", "Mesh")
        store.insert_node("cube2", "Mesh")
        store.compact()
        store.insert_node("cube3", "Mesh")

        session = MockSession()
        store.subscribe(session)

        event = session.sent_events[0]
        snapshot = Snapshot.from_dict(event.data["snapshot"])
        assert snapshot.graph.has_node("cube1")
        assert snapshot.graph.has_node("cube2")
        assert len(event.data["journal"]) == 1  # cube3


class TestPythonEditCommit:
    """Tests for Python-side edit/commit API."""

    def test_edit_and_commit_inserts_node(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.edit(
            Operation(
                key="cube",
                otype=OType.NODE_INSERT.value,
                path="",
                tag="Mesh",
                parent_key="scene",
            )
        )
        msg = store.commit()

        assert msg is not None
        assert store.graph.has_node("cube")
        assert store.get_node("cube").tag == "Mesh"

    def test_commit_adds_to_journal(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.edit(
            Operation(
                key="cube",
                otype=OType.NODE_INSERT.value,
                path="",
                tag="Mesh",
                parent_key="scene",
            )
        )
        msg = store.commit()

        assert len(store.journal) == 1
        assert store.journal[0].msg.id == msg.id
        assert store.journal[0].ack is True

    def test_commit_updates_clocks(self):
        app = MockApp()
        store = SceneStoreRTC(app, session_id="test-server")

        store.edit(
            Operation(
                key="cube",
                otype=OType.NODE_INSERT.value,
                path="",
                tag="Mesh",
                parent_key="scene",
            )
        )
        store.commit()

        assert store._lamport_time >= 1
        assert store._vector_clock.get("test-server", 0) >= 1

    def test_commit_no_edits_returns_none(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        msg = store.commit()
        assert msg is None

    def test_edit_batch(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.edit_batch([
            Operation(
                key="cube",
                otype=OType.NODE_INSERT.value,
                path="",
                tag="Mesh",
                parent_key="scene",
            ),
            Operation(
                key="cube",
                otype=OType.VECTOR3_SET.value,
                path="position",
                value=[1, 2, 3],
            ),
        ])
        msg = store.commit()

        assert msg is not None
        assert len(msg.ops) == 2
        assert store.get_node("cube").get_property("position") == [1, 2, 3]

    def test_multiple_commits(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.edit(
            Operation(
                key="cube",
                otype=OType.NODE_INSERT.value,
                path="",
                tag="Mesh",
                parent_key="scene",
            )
        )
        store.commit()

        store.edit(
            Operation(
                key="cube",
                otype=OType.VECTOR3_SET.value,
                path="position",
                value=[5, 0, 0],
            )
        )
        store.commit()

        assert len(store.journal) == 2
        assert store.get_node("cube").get_property("position") == [5, 0, 0]

    def test_commit_broadcasts_as_crdt_mtype(self):
        """Python commits broadcast with mtype='crdt' (server-originated)."""
        app = MockApp()
        store = SceneStoreRTC(app)

        sess = MockSession()
        store.subscribe(sess)
        initial_count = len(sess.sent_events)

        store.insert_node("cube", "Mesh")

        assert len(sess.sent_events) == initial_count + 1
        event = sess.sent_events[-1]
        assert isinstance(event, CRDTOpEvent)
        assert event.data["mtype"] == "crdt"
        # msg should be a serialized CRDTMessage dict
        assert "id" in event.data["msg"]
        assert "ops" in event.data["msg"]

    def test_processed_ids_tracked(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.edit(
            Operation(
                key="cube",
                otype=OType.NODE_INSERT.value,
                path="",
                tag="Mesh",
                parent_key="scene",
            )
        )
        msg = store.commit()

        assert msg.id in store._processed_ids


class TestConvenienceMethods:
    """Tests for insert_node, remove_node, set_property."""

    def test_insert_node(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        msg = store.insert_node("cube", "Mesh", parent_key="scene")

        assert msg is not None
        assert store.graph.has_node("cube")
        assert store.get_node("cube").tag == "Mesh"

    def test_insert_node_with_properties(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node("cube", "Mesh", scale=[2, 2, 2])

        node = store.get_node("cube")
        assert node.get_property("scale") == [2, 2, 2]

    def test_remove_node(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node("cube", "Mesh")
        assert store.graph.has_node("cube")

        store.remove_node("cube")
        node = store.get_node("cube")
        assert node is not None
        assert node.is_deleted()

    def test_set_property(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node("cube", "Mesh")
        store.set_property("cube", "position", OType.VECTOR3_SET.value, [1, 2, 3])

        assert store.get_node("cube").get_property("position") == [1, 2, 3]


class TestClientCRDTOp:
    """Tests for handling CRDT_OP events from browser clients."""

    def test_client_op_applied_to_graph(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        session = MockSession()
        msg_dict = CRDTMessage(
            id="remote:1",
            session_id="remote",
            clock={"remote": 1},
            lamport_time=1,
            timestamp=1000,
            ops=[
                Operation(
                    key="cube",
                    otype=OType.NODE_INSERT.value,
                    path="",
                    tag="Mesh",
                    parent_key="scene",
                )
            ],
        ).to_dict()

        event = _make_crdt_event(msg_dict)
        run_async(store._handle_crdt_op(event, session))

        assert store.graph.has_node("cube")

    def test_client_op_acked(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        session = MockSession()
        msg_dict = CRDTMessage(
            id="remote:1",
            session_id="remote",
            clock={"remote": 1},
            lamport_time=1,
            timestamp=1000,
            ops=[
                Operation(
                    key="cube",
                    otype=OType.NODE_INSERT.value,
                    path="",
                    tag="Mesh",
                    parent_key="scene",
                )
            ],
        ).to_dict()

        event = _make_crdt_event(msg_dict)
        run_async(store._handle_crdt_op(event, session))

        ack_events = [e for e in session.sent_events if isinstance(e, CRDTAckEvent)]
        assert len(ack_events) == 1
        assert ack_events[0].data["mtype"] == "ack"
        assert ack_events[0].data["msgId"] == "remote:1"

    def test_client_op_broadcast_as_broadcast_mtype(self):
        """Client ops forwarded to others should use mtype='broadcast'."""
        app = MockApp()
        store = SceneStoreRTC(app)

        sender = MockSession(ws_id="ws-sender")
        other = MockSession(ws_id="ws-other")
        store.subscribe(sender)
        store.subscribe(other)

        msg_dict = CRDTMessage(
            id="remote:1",
            session_id="remote",
            clock={"remote": 1},
            lamport_time=1,
            timestamp=1000,
            ops=[
                Operation(
                    key="cube",
                    otype=OType.NODE_INSERT.value,
                    path="",
                    tag="Mesh",
                    parent_key="scene",
                )
            ],
        ).to_dict()

        event = _make_crdt_event(msg_dict)
        run_async(store._handle_crdt_op(event, sender))

        # Other should get CRDTBroadcastEvent (mtype="broadcast")
        broadcast_events = [e for e in other.sent_events if isinstance(e, CRDTBroadcastEvent)]
        assert len(broadcast_events) == 1
        assert broadcast_events[0].data["mtype"] == "broadcast"

        # Sender should NOT get the broadcast (only ACK)
        sender_broadcasts = [e for e in sender.sent_events if isinstance(e, CRDTBroadcastEvent)]
        assert len(sender_broadcasts) == 0

    def test_duplicate_message_ignored(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        session = MockSession()
        msg_dict = CRDTMessage(
            id="remote:1",
            session_id="remote",
            clock={"remote": 1},
            lamport_time=1,
            timestamp=1000,
            ops=[
                Operation(
                    key="cube",
                    otype=OType.NODE_INSERT.value,
                    path="",
                    tag="Mesh",
                    parent_key="scene",
                )
            ],
        ).to_dict()

        event = _make_crdt_event(msg_dict)
        run_async(store._handle_crdt_op(event, session))
        assert len(store.journal) == 1

        # Process again — should be deduped
        run_async(store._handle_crdt_op(event, session))
        assert len(store.journal) == 1


class TestUndoRedo:
    """Tests for undo/redo via meta operations."""

    def test_undo_via_meta_operation(self):
        app = MockApp()
        store = SceneStoreRTC(app)
        session = MockSession()

        insert_msg = CRDTMessage(
            id="remote:1",
            session_id="remote",
            clock={"remote": 1},
            lamport_time=1,
            timestamp=1000,
            ops=[
                Operation(
                    key="cube",
                    otype=OType.NODE_INSERT.value,
                    path="",
                    tag="Mesh",
                    parent_key="scene",
                )
            ],
        )
        run_async(store._handle_crdt_op(_make_crdt_event(insert_msg.to_dict()), session))
        assert store.graph.has_node("cube")

        undo_msg = CRDTMessage(
            id="remote:2",
            session_id="remote",
            clock={"remote": 2},
            lamport_time=2,
            timestamp=2000,
            ops=[
                Operation(
                    key="_meta",
                    otype=OType.META_UNDO.value,
                    path="_meta",
                    target_msg_id="remote:1",
                )
            ],
        )
        run_async(store._handle_crdt_op(_make_crdt_event(undo_msg.to_dict()), session))
        assert not store.graph.has_node("cube")

    def test_redo_via_meta_operation(self):
        app = MockApp()
        store = SceneStoreRTC(app)
        session = MockSession()

        insert_msg = CRDTMessage(
            id="remote:1",
            session_id="remote",
            clock={"remote": 1},
            lamport_time=1,
            timestamp=1000,
            ops=[
                Operation(
                    key="cube",
                    otype=OType.NODE_INSERT.value,
                    path="",
                    tag="Mesh",
                    parent_key="scene",
                )
            ],
        )
        run_async(store._handle_crdt_op(_make_crdt_event(insert_msg.to_dict()), session))

        undo_msg = CRDTMessage(
            id="remote:2",
            session_id="remote",
            clock={"remote": 2},
            lamport_time=2,
            timestamp=2000,
            ops=[
                Operation(
                    key="_meta",
                    otype=OType.META_UNDO.value,
                    path="_meta",
                    target_msg_id="remote:1",
                )
            ],
        )
        run_async(store._handle_crdt_op(_make_crdt_event(undo_msg.to_dict()), session))
        assert not store.graph.has_node("cube")

        redo_msg = CRDTMessage(
            id="remote:3",
            session_id="remote",
            clock={"remote": 3},
            lamport_time=3,
            timestamp=3000,
            ops=[
                Operation(
                    key="_meta",
                    otype=OType.META_REDO.value,
                    path="_meta",
                    target_msg_id="remote:1",
                )
            ],
        )
        run_async(store._handle_crdt_op(_make_crdt_event(redo_msg.to_dict()), session))
        assert store.graph.has_node("cube")


class TestStateMessage:
    """Tests for state message construction via subscribe."""

    def test_subscribe_empty_state(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        session = MockSession()
        store.subscribe(session)

        event = session.sent_events[0]
        assert event.etype == CRDT_ETYPE
        assert event.data["mtype"] == "state"
        assert len(event.data["journal"]) == 0

    def test_subscribe_state_after_edits(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node("cube", "Mesh")
        store.insert_node("sphere", "Mesh")

        session = MockSession()
        store.subscribe(session)

        event = session.sent_events[0]
        assert len(event.data["journal"]) == 2

    def test_state_snapshot_roundtrip(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node("cube", "Mesh")

        session = MockSession()
        store.subscribe(session)

        event = session.sent_events[0]
        snapshot = Snapshot.from_dict(event.data["snapshot"])
        assert snapshot.graph.has_node("scene")

    def test_state_journal_contains_crdt_messages(self):
        """Journal entries in state event should be CRDTMessage dicts."""
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node("cube", "Mesh")

        session = MockSession()
        store.subscribe(session)

        event = session.sent_events[0]
        msgs = [CRDTMessage.from_dict(m) for m in event.data["journal"]]
        assert len(msgs) == 1
        assert msgs[0].ops[0].otype == OType.NODE_INSERT.value


class TestCompaction:
    """Tests for journal compaction."""

    def test_compact_bakes_entries_into_snapshot(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node("cube1", "Mesh")
        store.insert_node("cube2", "Mesh")
        store.insert_node("cube3", "Mesh")

        assert len(store.journal) == 3

        snapshot = store.compact()

        assert snapshot.journal_index == 3
        assert len(store.journal) == 0
        assert snapshot.graph.has_node("cube1")
        assert snapshot.graph.has_node("cube2")
        assert snapshot.graph.has_node("cube3")

    def test_compact_preserves_graph(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node("cube", "Mesh")
        store.set_property("cube", "position", OType.VECTOR3_SET.value, [1, 2, 3])
        store.compact()

        assert store.graph.has_node("cube")
        assert store.get_node("cube").get_property("position") == [1, 2, 3]

    def test_compact_no_entries(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        snapshot = store.compact()
        assert snapshot.journal_index == 0

    def test_state_after_compact_includes_snapshot(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node("cube", "Mesh")
        store.compact()

        session = MockSession()
        store.subscribe(session)

        event = session.sent_events[0]
        snapshot = Snapshot.from_dict(event.data["snapshot"])
        assert snapshot.graph.has_node("cube")
        assert len(event.data["journal"]) == 0


class TestGraphRebuild:
    """Tests for graph rebuild from snapshot + journal."""

    def test_rebuild_from_snapshot_and_journal(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node("cube1", "Mesh")
        store.compact()
        store.insert_node("cube2", "Mesh")

        assert store.graph.has_node("cube1")
        assert store.graph.has_node("cube2")

        session = MockSession()
        store.subscribe(session)

        event = session.sent_events[0]
        snapshot = Snapshot.from_dict(event.data["snapshot"])
        msgs = [CRDTMessage.from_dict(m) for m in event.data["journal"]]
        # Wrap as JournalEntry for rebuild_graph
        entries = [JournalEntry(msg=m, ack=True) for m in msgs]

        from vuer.rtc.operations.dispatcher import rebuild_graph

        rebuilt = rebuild_graph(
            snapshot_graph=snapshot.graph,
            journal_entries=entries,
        )

        assert rebuilt.has_node("cube1")
        assert rebuilt.has_node("cube2")


class TestChangeSubscriptions:
    """Tests for on_change subscriptions."""

    def test_on_change_called_on_python_edit(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        changes = []
        store.on_change(lambda graph: changes.append(graph))

        store.insert_node("cube", "Mesh")

        assert len(changes) >= 1

    def test_on_change_unsubscribe(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        changes = []
        unsub = store.on_change(lambda graph: changes.append(graph))

        store.insert_node("cube", "Mesh")
        count_after_first = len(changes)

        unsub()

        store.insert_node("sphere", "Mesh")
        assert len(changes) == count_after_first

    def test_on_change_called_on_remote_crdt(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        changes = []
        store.on_change(lambda graph: changes.append(graph))

        session = MockSession()
        event = _make_crdt_event(
            CRDTMessage(
                id="remote:1",
                session_id="remote",
                clock={"remote": 1},
                lamport_time=1,
                timestamp=1000,
                ops=[
                    Operation(
                        key="cube",
                        otype=OType.NODE_INSERT.value,
                        path="",
                        tag="Mesh",
                        parent_key="scene",
                    )
                ],
            ).to_dict(),
        )

        run_async(store._handle_crdt_op(event, session))

        assert len(changes) >= 1


class TestClockUpdates:
    """Tests for vector clock and lamport time updates."""

    def test_remote_message_updates_clocks(self):
        app = MockApp()
        store = SceneStoreRTC(app, session_id="server")

        session = MockSession()
        event = _make_crdt_event(
            CRDTMessage(
                id="remote:1",
                session_id="remote",
                clock={"remote": 5},
                lamport_time=10,
                timestamp=1000,
                ops=[
                    Operation(
                        key="cube",
                        otype=OType.NODE_INSERT.value,
                        path="",
                        tag="Mesh",
                        parent_key="scene",
                    )
                ],
            ).to_dict(),
        )

        run_async(store._handle_crdt_op(event, session))

        assert store._vector_clock.get("remote", 0) == 5
        assert store._lamport_time >= 10

    def test_python_commit_updates_clocks(self):
        app = MockApp()
        store = SceneStoreRTC(app, session_id="server")

        store.insert_node("cube", "Mesh")

        assert store._vector_clock.get("server", 0) >= 1
        assert store._lamport_time >= 1

    def test_mixed_source_clock_merging(self):
        app = MockApp()
        store = SceneStoreRTC(app, session_id="server")

        store.insert_node("cube1", "Mesh")

        session = MockSession()
        event = _make_crdt_event(
            CRDTMessage(
                id="remote:1",
                session_id="remote",
                clock={"remote": 3},
                lamport_time=5,
                timestamp=1000,
                ops=[
                    Operation(
                        key="cube2",
                        otype=OType.NODE_INSERT.value,
                        path="",
                        tag="Mesh",
                        parent_key="scene",
                    )
                ],
            ).to_dict(),
        )
        run_async(store._handle_crdt_op(event, session))

        assert "server" in store._vector_clock
        assert "remote" in store._vector_clock


class TestWireMessageTypes:
    """Tests for all WireMessage event types and the unified etype."""

    def test_all_events_share_crdt_etype(self):
        msg = CRDTMessage(
            id="t:1", session_id="t", clock={}, lamport_time=0, timestamp=0, ops=[],
        )
        snap = Snapshot.from_dict({"graph": {"nodes": {}, "root_key": "scene"},
                                   "vector_clock": {}, "lamport_time": 0, "journal_index": 0})

        events = [
            CRDTStateEvent(snapshot=snap, journal=[]),
            CRDTOpEvent(msg=msg),
            CRDTBroadcastEvent(msg=msg),
            CRDTAckEvent(msg_id="t:1"),
            CRDTErrorEvent(msg_id="t:1", error="fail"),
            CRDTSyncEvent(filter=b"\x00", count=0),
            CRDTHeartbeatEvent(session_id="s1", vector_clock={"s1": 1}),
            CRDTRoomResetEvent(),
        ]

        for event in events:
            assert event.etype == CRDT_ETYPE, f"{type(event).__name__} has wrong etype"

    def test_mtype_values(self):
        msg = CRDTMessage(
            id="t:1", session_id="t", clock={}, lamport_time=0, timestamp=0, ops=[],
        )
        snap = Snapshot.from_dict({"graph": {"nodes": {}, "root_key": "scene"},
                                   "vector_clock": {}, "lamport_time": 0, "journal_index": 0})

        assert CRDTStateEvent(snapshot=snap, journal=[]).data["mtype"] == "state"
        assert CRDTOpEvent(msg=msg).data["mtype"] == "crdt"
        assert CRDTBroadcastEvent(msg=msg).data["mtype"] == "broadcast"
        assert CRDTAckEvent(msg_id="t:1").data["mtype"] == "ack"
        assert CRDTErrorEvent(msg_id="t:1", error="x").data["mtype"] == "error"
        assert CRDTSyncEvent(filter=b"", count=0).data["mtype"] == "sync"
        assert CRDTHeartbeatEvent(session_id="s", vector_clock={}).data["mtype"] == "heartbeat"
        assert CRDTRoomResetEvent().data["mtype"] == "room-reset"

    def test_crdt_op_serializes_msg(self):
        msg = CRDTMessage(
            id="t:1", session_id="t", clock={"t": 1}, lamport_time=1, timestamp=100,
            ops=[Operation(key="a", otype=OType.NODE_INSERT.value, path="", tag="Mesh", parent_key="scene")],
        )
        event = CRDTOpEvent(msg=msg)
        assert event.data["msg"]["id"] == "t:1"
        # JS wire format: key=parent, value.key=node
        op = event.data["msg"]["ops"][0]
        assert op["key"] == "scene"
        assert op["value"]["key"] == "a"
        assert op["value"]["tag"] == "Mesh"
        assert op["path"] == "children"

    def test_broadcast_serializes_msg(self):
        msg = CRDTMessage(
            id="t:1", session_id="t", clock={}, lamport_time=0, timestamp=0, ops=[],
        )
        event = CRDTBroadcastEvent(msg=msg)
        assert event.data["msg"]["id"] == "t:1"

    def test_ack_optional_server_seq(self):
        ack1 = CRDTAckEvent(msg_id="t:1")
        assert "serverSeq" not in ack1.data

        ack2 = CRDTAckEvent(msg_id="t:1", server_seq=42)
        assert ack2.data["serverSeq"] == 42

    def test_error_event_fields(self):
        event = CRDTErrorEvent(msg_id="t:1", error="something broke")
        assert event.data["msgId"] == "t:1"
        assert event.data["error"] == "something broke"

    def test_sync_optional_vector_clock(self):
        sync1 = CRDTSyncEvent(filter=b"\x01\x02", count=5)
        assert sync1.data["filter"] == b"\x01\x02"
        assert sync1.data["count"] == 5
        assert "vectorClock" not in sync1.data

        sync2 = CRDTSyncEvent(filter=b"", count=0, vector_clock={"s": 1})
        assert sync2.data["vectorClock"] == {"s": 1}

    def test_heartbeat_fields(self):
        event = CRDTHeartbeatEvent(session_id="sess-1", vector_clock={"sess-1": 5})
        assert event.data["sessionId"] == "sess-1"
        assert event.data["vectorClock"] == {"sess-1": 5}

    def test_room_reset_minimal(self):
        event = CRDTRoomResetEvent()
        assert event.data == {"mtype": "room-reset"}

    def test_inheritance(self):
        """All CRDT events should inherit from CRDTEvent."""
        msg = CRDTMessage(
            id="t:1", session_id="t", clock={}, lamport_time=0, timestamp=0, ops=[],
        )
        assert isinstance(CRDTOpEvent(msg=msg), CRDTEvent)
        assert isinstance(CRDTAckEvent(msg_id="t:1"), CRDTEvent)
        assert isinstance(CRDTRoomResetEvent(), CRDTEvent)


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
