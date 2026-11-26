"""
Unit tests for SceneStoreRTC (vuer_rtc-backed version).
"""

import asyncio
from collections import defaultdict

import pytest

from vuer_rtc import CRDTMessage, JournalEntry, Snapshot

from vuer.events import (
    RTC,
    ClientEvent,
    CRDTAckEvent,
    CRDTEvent,
)
from vuer.schemas import Box, Sphere, group
from vuer.scene_rtc.scene_store_rtc import RTCSubscription, SceneStoreRTC


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
    return ClientEvent(etype=RTC, value={"mtype": "crdt", "msg": msg_dict})


class TestSceneStoreRTCInit:

    def test_creates_with_scene_root(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        assert "scene" in store.graph.nodes
        root = store.get_node("scene")
        assert root is not None
        assert root.tag == "Scene"

    def test_registers_crdt_op_handler(self):
        app = MockApp()
        store = SceneStoreRTC(app)
        assert RTC in app.handlers

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
        assert store.snapshot.journalIndex == 0
        assert store.snapshot.lt == 0


class TestSubscription:

    def test_subscribe_sends_state(self):
        app = MockApp()
        store = SceneStoreRTC(app)
        session = MockSession()
        store.subscribe(session)

        assert len(session.sent_events) == 1
        event = session.sent_events[0]
        assert isinstance(event, CRDTEvent)
        assert event.etype == RTC
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
                store.insert_node(Box(key="cube"))

            assert session.CURRENT_WS_ID not in store._subscribers
            count_before = len(session.sent_events)
            store.insert_node(Sphere(key="sphere"))
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
        store.insert_node(Box(key="cube"))

        session = MockSession()
        store.subscribe(session)

        event = session.sent_events[0]
        assert len(event.data["journal"]) == 1

    def test_unsubscribe_stops_broadcasts(self):
        app = MockApp()
        store = SceneStoreRTC(app)
        session = MockSession()
        store.subscribe(session)
        initial_count = len(session.sent_events)

        store.unsubscribe(session)
        store.insert_node(Box(key="cube"))
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

        store.insert_node(Box(key="cube"))

        assert len(sess1.sent_events) == 2
        assert len(sess2.sent_events) == 2
        assert sess1.sent_events[1].data["mtype"] == "crdt"

    def test_late_subscriber_gets_full_state(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node(Box(key="cube1"))
        store.insert_node(Box(key="cube2"))
        store.compact()
        store.insert_node(Box(key="cube3"))

        session = MockSession()
        store.subscribe(session)

        event = session.sent_events[0]
        snapshot_dict = event.data["snapshot"]
        assert "cube1" in snapshot_dict["graph"]["nodes"]
        assert "cube2" in snapshot_dict["graph"]["nodes"]
        assert len(event.data["journal"]) == 1  # cube3


class TestPythonEditCommit:

    def test_edit_and_commit_inserts_node(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.edit({
            "key": "scene",
            "ot": "node.insert",
            "path": "children",
            "value": {"key": "cube", "tag": "Mesh", "name": "cube"},
        })
        msg = store.commit()

        assert msg is not None
        assert "cube" in store.graph.nodes
        assert store.get_node("cube").tag == "Mesh"

    def test_commit_adds_to_journal(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node(Box(key="cube"))
        assert len(store.journal) == 1

    def test_commit_updates_clocks(self):
        app = MockApp()
        store = SceneStoreRTC(app, session_id="test-server")

        store.insert_node(Box(key="cube"))

        state = store._store.getState()
        assert state.lt >= 1
        assert state.vectorClock.get("test-server", 0) >= 1

    def test_commit_no_edits_returns_none(self):
        app = MockApp()
        store = SceneStoreRTC(app)
        msg = store.commit()
        assert msg is None

    def test_edit_batch(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.edit_batch([
            {
                "key": "scene",
                "ot": "node.insert",
                "path": "children",
                "value": {"key": "cube", "tag": "Mesh", "name": "cube"},
            },
            {
                "key": "cube",
                "ot": "vector3.set",
                "path": "position",
                "value": [1, 2, 3],
            },
        ])
        msg = store.commit()

        assert msg is not None
        assert len(msg.ops) == 2
        assert store.get_node("cube").getProperty("position") == [1, 2, 3]

    def test_multiple_commits(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node(Box(key="cube"))
        store.set_property("cube", "position", "vector3.set", [5, 0, 0])

        assert len(store.journal) == 2
        assert store.get_node("cube").getProperty("position") == [5, 0, 0]

    def test_commit_broadcasts_as_crdt_mtype(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        sess = MockSession()
        store.subscribe(sess)
        initial_count = len(sess.sent_events)

        store.insert_node(Box(key="cube"))

        assert len(sess.sent_events) == initial_count + 1
        event = sess.sent_events[-1]
        assert event.data["mtype"] == "crdt"
        assert "id" in event.data["msg"]
        assert "ops" in event.data["msg"]

    def test_commit_tracked_in_journal(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node(Box(key="cube"))
        msg = store.journal[-1].msg

        journal_len_before = len(store.journal)
        store._store.receive(msg)
        assert len(store.journal) == journal_len_before


class TestConvenienceMethods:

    def test_insert_node_with_element(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        msg = store.insert_node(Box(key="cube", args=[1, 1, 1]))

        assert msg is not None
        assert "cube" in store.graph.nodes
        assert store.get_node("cube").tag == "Box"

    def test_insert_node_with_properties(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node(Sphere(key="ball", args=[0.4, 32, 32], position=[3, 1, 0]))

        node = store.get_node("ball")
        assert node.tag == "Sphere"
        assert node.getProperty("position") == [3, 1, 0]
        assert node.getProperty("args") == [0.4, 32, 32]

    def test_insert_node_custom_parent(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node(group(key="grp"))
        store.insert_node(Box(key="child"), parent_key="grp")

        assert "child" in store.graph.nodes
        grp = store.get_node("grp")
        assert "child" in grp.children

    def test_remove_node(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node(Box(key="cube"))
        assert "cube" in store.graph.nodes

        store.remove_node("cube")
        node = store.get_node("cube")
        assert node is not None
        assert node._crdt.deletedAt is not None

    def test_set_property(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node(Box(key="cube"))
        store.set_property("cube", "position", "vector3.set", [1, 2, 3])

        assert store.get_node("cube").getProperty("position") == [1, 2, 3]

    def test_move_node(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node(group(key="grp1"))
        store.insert_node(group(key="grp2"))
        store.insert_node(Box(key="cube"), parent_key="grp1")

        assert "cube" in store.get_node("grp1").children

        store.move_node("cube", old_parent="grp1", new_parent="grp2")

        assert "cube" not in store.get_node("grp1").children
        assert "cube" in store.get_node("grp2").children


class TestClientCRDTOp:

    def _make_msg_dict(self, **overrides):
        d = {
            "id": "remote:1",
            "client": "remote",
            "clock": {"remote": 1},
            "lt": 1,
            "ts": 1000.0,
            "ops": [
                {
                    "key": "scene",
                    "ot": "node.insert",
                    "path": "children",
                    "value": {"key": "cube", "tag": "Mesh", "name": "cube"},
                }
            ],
        }
        d.update(overrides)
        return d

    def test_client_op_applied_to_graph(self):
        app = MockApp()
        store = SceneStoreRTC(app)
        session = MockSession()

        run_async(store._handle_crdt_op(_make_crdt_event(self._make_msg_dict()), session))
        assert "cube" in store.graph.nodes

    def test_client_op_acked(self):
        app = MockApp()
        store = SceneStoreRTC(app)
        session = MockSession()

        run_async(store._handle_crdt_op(_make_crdt_event(self._make_msg_dict()), session))

        ack_events = [e for e in session.sent_events if isinstance(e, CRDTAckEvent)]
        assert len(ack_events) == 1
        assert ack_events[0].data["mtype"] == "ack"
        assert ack_events[0].data["msgId"] == "remote:1"

    def test_client_op_broadcast_as_broadcast_mtype(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        sender = MockSession(ws_id="ws-sender")
        other = MockSession(ws_id="ws-other")
        store.subscribe(sender)
        store.subscribe(other)

        run_async(store._handle_crdt_op(_make_crdt_event(self._make_msg_dict()), sender))

        broadcast_events = [
            e for e in other.sent_events
            if isinstance(e, CRDTEvent) and e.data.get("mtype") == "broadcast"
        ]
        assert len(broadcast_events) == 1

        sender_broadcasts = [
            e for e in sender.sent_events
            if isinstance(e, CRDTEvent) and e.data.get("mtype") == "broadcast"
        ]
        assert len(sender_broadcasts) == 0

    def test_duplicate_message_ignored(self):
        app = MockApp()
        store = SceneStoreRTC(app)
        session = MockSession()

        event = _make_crdt_event(self._make_msg_dict())
        run_async(store._handle_crdt_op(event, session))
        assert len(store.journal) == 1

        run_async(store._handle_crdt_op(event, session))
        assert len(store.journal) == 1


class TestUndoRedo:

    def test_undo_via_meta_operation(self):
        app = MockApp()
        store = SceneStoreRTC(app)
        session = MockSession()

        insert_msg = {
            "id": "remote:1", "client": "remote", "clock": {"remote": 1},
            "lt": 1, "ts": 1000.0,
            "ops": [{"key": "scene", "ot": "node.insert", "path": "children",
                     "value": {"key": "cube", "tag": "Mesh", "name": "cube"}}],
        }
        run_async(store._handle_crdt_op(_make_crdt_event(insert_msg), session))
        assert "cube" in store.graph.nodes

        undo_msg = {
            "id": "remote:2", "client": "remote", "clock": {"remote": 2},
            "lt": 2, "ts": 2000.0,
            "ops": [{"key": "_meta", "ot": "meta.undo", "path": "_meta",
                     "targetMsgId": "remote:1"}],
        }
        run_async(store._handle_crdt_op(_make_crdt_event(undo_msg), session))
        assert "cube" not in store.graph.nodes

    def test_redo_via_meta_operation(self):
        app = MockApp()
        store = SceneStoreRTC(app)
        session = MockSession()

        insert_msg = {
            "id": "remote:1", "client": "remote", "clock": {"remote": 1},
            "lt": 1, "ts": 1000.0,
            "ops": [{"key": "scene", "ot": "node.insert", "path": "children",
                     "value": {"key": "cube", "tag": "Mesh", "name": "cube"}}],
        }
        run_async(store._handle_crdt_op(_make_crdt_event(insert_msg), session))

        undo_msg = {
            "id": "remote:2", "client": "remote", "clock": {"remote": 2},
            "lt": 2, "ts": 2000.0,
            "ops": [{"key": "_meta", "ot": "meta.undo", "path": "_meta",
                     "targetMsgId": "remote:1"}],
        }
        run_async(store._handle_crdt_op(_make_crdt_event(undo_msg), session))
        assert "cube" not in store.graph.nodes

        redo_msg = {
            "id": "remote:3", "client": "remote", "clock": {"remote": 3},
            "lt": 3, "ts": 3000.0,
            "ops": [{"key": "_meta", "ot": "meta.redo", "path": "_meta",
                     "targetMsgId": "remote:1"}],
        }
        run_async(store._handle_crdt_op(_make_crdt_event(redo_msg), session))
        assert "cube" in store.graph.nodes


class TestCompaction:

    def test_compact_bakes_entries_into_snapshot(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node(Box(key="cube1"))
        store.insert_node(Box(key="cube2"))
        store.insert_node(Box(key="cube3"))
        assert len(store.journal) == 3

        snapshot = store.compact()
        assert snapshot.journalIndex == 3
        assert len(store.journal) == 0
        assert "cube1" in snapshot.graph.nodes
        assert "cube2" in snapshot.graph.nodes
        assert "cube3" in snapshot.graph.nodes

    def test_compact_preserves_graph(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node(Box(key="cube"))
        store.set_property("cube", "position", "vector3.set", [1, 2, 3])
        store.compact()

        assert "cube" in store.graph.nodes
        assert store.get_node("cube").getProperty("position") == [1, 2, 3]

    def test_compact_no_entries(self):
        app = MockApp()
        store = SceneStoreRTC(app)
        snapshot = store.compact()
        assert snapshot.journalIndex == 0

    def test_state_after_compact_includes_snapshot(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        store.insert_node(Box(key="cube"))
        store.compact()

        session = MockSession()
        store.subscribe(session)

        event = session.sent_events[0]
        assert "cube" in event.data["snapshot"]["graph"]["nodes"]
        assert len(event.data["journal"]) == 0


class TestChangeSubscriptions:

    def test_on_change_called_on_python_edit(self):
        app = MockApp()
        store = SceneStoreRTC(app)
        changes = []
        store.on_change(lambda graph: changes.append(graph))

        store.insert_node(Box(key="cube"))
        assert len(changes) >= 1

    def test_on_change_unsubscribe(self):
        app = MockApp()
        store = SceneStoreRTC(app)
        changes = []
        unsub = store.on_change(lambda graph: changes.append(graph))

        store.insert_node(Box(key="cube"))
        count_after_first = len(changes)

        unsub()
        store.insert_node(Sphere(key="sphere"))
        assert len(changes) == count_after_first

    def test_on_change_called_on_remote_crdt(self):
        app = MockApp()
        store = SceneStoreRTC(app)
        changes = []
        store.on_change(lambda graph: changes.append(graph))

        session = MockSession()
        msg_dict = {
            "id": "remote:1", "client": "remote", "clock": {"remote": 1},
            "lt": 1, "ts": 1000.0,
            "ops": [{"key": "scene", "ot": "node.insert", "path": "children",
                     "value": {"key": "cube", "tag": "Mesh", "name": "cube"}}],
        }
        run_async(store._handle_crdt_op(_make_crdt_event(msg_dict), session))
        assert len(changes) >= 1


class TestClockUpdates:

    def test_remote_message_updates_clocks(self):
        app = MockApp()
        store = SceneStoreRTC(app, session_id="server")
        session = MockSession()

        msg_dict = {
            "id": "remote:1", "client": "remote", "clock": {"remote": 5},
            "lt": 10, "ts": 1000.0,
            "ops": [{"key": "scene", "ot": "node.insert", "path": "children",
                     "value": {"key": "cube", "tag": "Mesh", "name": "cube"}}],
        }
        run_async(store._handle_crdt_op(_make_crdt_event(msg_dict), session))

        state = store._store.getState()
        assert state.vectorClock.get("remote", 0) == 5
        assert state.lt >= 10

    def test_python_commit_updates_clocks(self):
        app = MockApp()
        store = SceneStoreRTC(app, session_id="server")

        store.insert_node(Box(key="cube"))

        state = store._store.getState()
        assert state.vectorClock.get("server", 0) >= 1
        assert state.lt >= 1

    def test_mixed_source_clock_merging(self):
        app = MockApp()
        store = SceneStoreRTC(app, session_id="server")

        store.insert_node(Box(key="cube1"))

        session = MockSession()
        msg_dict = {
            "id": "remote:1", "client": "remote", "clock": {"remote": 3},
            "lt": 5, "ts": 1000.0,
            "ops": [{"key": "scene", "ot": "node.insert", "path": "children",
                     "value": {"key": "cube2", "tag": "Mesh", "name": "cube2"}}],
        }
        run_async(store._handle_crdt_op(_make_crdt_event(msg_dict), session))

        state = store._store.getState()
        assert "server" in state.vectorClock
        assert "remote" in state.vectorClock


class TestWireMessageTypes:

    def test_all_events_share_rtc_etype(self):
        app = MockApp()
        store = SceneStoreRTC(app)
        session = MockSession()
        store.subscribe(session)

        event = session.sent_events[0]
        assert event.etype == RTC

    def test_crdt_op_serializes_msg(self):
        app = MockApp()
        store = SceneStoreRTC(app)

        sess = MockSession()
        store.subscribe(sess)
        store.insert_node(Box(key="cube"))

        event = sess.sent_events[-1]
        assert event.data["msg"]["id"] is not None
        op = event.data["msg"]["ops"][0]
        assert op["key"] == "scene"
        assert op["value"]["key"] == "cube"
        assert op["path"] == "children"


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
