"""
Unit tests for the vuer.rtc module.
"""

import pytest
from vuer.rtc import (
    create_graph,
    create_empty_graph,
    Operation,
    OType,
    SceneNode,
    SceneGraph,
    CRDTMessage,
    Snapshot,
    apply_message,
    apply_operation,
    increment_clock,
    merge_clocks,
    compare_clocks,
)
from vuer.rtc.operations.dispatcher import OperationMeta


class TestVectorClock:
    """Tests for vector clock operations."""

    def test_increment_clock(self):
        clock = {"a": 1, "b": 2}
        result = increment_clock(clock, "a")
        assert result == {"a": 2, "b": 2}
        assert clock == {"a": 1, "b": 2}  # Original unchanged

    def test_increment_new_session(self):
        clock = {"a": 1}
        result = increment_clock(clock, "b")
        assert result == {"a": 1, "b": 1}

    def test_merge_clocks(self):
        clock1 = {"a": 1, "b": 3}
        clock2 = {"a": 2, "c": 1}
        result = merge_clocks(clock1, clock2)
        assert result == {"a": 2, "b": 3, "c": 1}

    def test_compare_clocks_before(self):
        clock1 = {"a": 1}
        clock2 = {"a": 2}
        assert compare_clocks(clock1, clock2) == "before"

    def test_compare_clocks_after(self):
        clock1 = {"a": 2}
        clock2 = {"a": 1}
        assert compare_clocks(clock1, clock2) == "after"

    def test_compare_clocks_concurrent(self):
        clock1 = {"a": 2, "b": 1}
        clock2 = {"a": 1, "b": 2}
        assert compare_clocks(clock1, clock2) == "concurrent"

    def test_compare_clocks_equal(self):
        clock1 = {"a": 1, "b": 2}
        clock2 = {"a": 1, "b": 2}
        assert compare_clocks(clock1, clock2) == "equal"


class TestSceneGraph:
    """Tests for scene graph operations."""

    def test_create_empty_graph(self):
        graph = create_empty_graph()
        assert graph.root_key == "scene"
        assert graph.has_node("scene")
        root = graph.get_node("scene")
        assert root.tag == "Scene"

    def test_add_node(self):
        graph = create_empty_graph()
        node = SceneNode(key="cube-1", tag="Mesh")
        graph.set_node(node)
        assert graph.has_node("cube-1")
        assert graph.get_node("cube-1").tag == "Mesh"

    def test_remove_node(self):
        graph = create_empty_graph()
        node = SceneNode(key="cube-1", tag="Mesh")
        graph.set_node(node)
        removed = graph.remove_node("cube-1")
        assert removed is not None
        assert not graph.has_node("cube-1")

    def test_node_properties(self):
        node = SceneNode(key="cube", tag="Mesh")
        node.set_property("color", "#ff0000")
        node.set_property("transform.position", [1, 2, 3])
        assert node.get_property("color") == "#ff0000"
        assert node.get_property("transform.position") == [1, 2, 3]
        assert node.get_property("missing") is None
        assert node.get_property("missing", "default") == "default"

    def test_graph_copy(self):
        graph = create_empty_graph()
        node = SceneNode(key="cube-1", tag="Mesh")
        node.set_property("color", "#ff0000")
        graph.set_node(node)

        copy = graph.copy()
        copy.get_node("cube-1").set_property("color", "#00ff00")

        assert graph.get_node("cube-1").get_property("color") == "#ff0000"
        assert copy.get_node("cube-1").get_property("color") == "#00ff00"


class TestOperations:
    """Tests for individual operation types."""

    def test_number_set(self):
        node = SceneNode(key="test", tag="Test")
        op = Operation(key="test", otype=OType.NUMBER_SET.value, path="value", value=10)
        meta = OperationMeta(lamport_time=1)

        from vuer.rtc.operations.registry import registry

        registry.apply(node, op, meta.lamport_time)
        assert node.get_property("value") == 10

    def test_number_add(self):
        node = SceneNode(key="test", tag="Test")
        node.set_property("value", 5)
        op = Operation(key="test", otype=OType.NUMBER_ADD.value, path="value", value=3)
        meta = OperationMeta(lamport_time=1)

        from vuer.rtc.operations.registry import registry

        registry.apply(node, op, meta.lamport_time)
        assert node.get_property("value") == 8

    def test_vector3_set(self):
        node = SceneNode(key="test", tag="Test")
        op = Operation(
            key="test", otype=OType.VECTOR3_SET.value, path="position", value=[1, 2, 3]
        )
        meta = OperationMeta(lamport_time=1)

        from vuer.rtc.operations.registry import registry

        registry.apply(node, op, meta.lamport_time)
        assert node.get_property("position") == [1, 2, 3]

    def test_vector3_add(self):
        node = SceneNode(key="test", tag="Test")
        node.set_property("position", [1, 2, 3])
        op = Operation(
            key="test", otype=OType.VECTOR3_ADD.value, path="position", value=[1, 1, 1]
        )
        meta = OperationMeta(lamport_time=1)

        from vuer.rtc.operations.registry import registry

        registry.apply(node, op, meta.lamport_time)
        assert node.get_property("position") == [2, 3, 4]

    def test_boolean_or(self):
        node = SceneNode(key="test", tag="Test")
        node.set_property("visible", False)
        op = Operation(
            key="test", otype=OType.BOOLEAN_OR.value, path="visible", value=True
        )
        meta = OperationMeta(lamport_time=1)

        from vuer.rtc.operations.registry import registry

        registry.apply(node, op, meta.lamport_time)
        assert node.get_property("visible") is True

    def test_array_push(self):
        node = SceneNode(key="test", tag="Test")
        node.set_property("items", [1, 2])
        op = Operation(key="test", otype=OType.ARRAY_PUSH.value, path="items", value=3)
        meta = OperationMeta(lamport_time=1)

        from vuer.rtc.operations.registry import registry

        registry.apply(node, op, meta.lamport_time)
        assert node.get_property("items") == [1, 2, 3]

    def test_color_blend(self):
        node = SceneNode(key="test", tag="Test")
        node.set_property("color", "#ff0000")  # Red
        op = Operation(
            key="test", otype=OType.COLOR_BLEND.value, path="color", value="#0000ff"
        )  # Blue
        meta = OperationMeta(lamport_time=1)

        from vuer.rtc.operations.registry import registry

        registry.apply(node, op, meta.lamport_time)
        # Blended color should be purple-ish (#7f007f)
        assert node.get_property("color") == "#7f007f"


class TestApplyMessage:
    """Tests for applying messages to graphs."""

    def test_apply_message_immutable(self):
        graph = create_empty_graph()
        msg = CRDTMessage(
            id="test:1",
            session_id="test",
            clock={"test": 1},
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

        new_graph = apply_message(graph, msg)

        assert not graph.has_node("cube")  # Original unchanged
        assert new_graph.has_node("cube")  # New graph has node

    def test_apply_node_insert(self):
        graph = create_empty_graph()
        msg = CRDTMessage(
            id="test:1",
            session_id="test",
            clock={"test": 1},
            lamport_time=1,
            timestamp=1000,
            ops=[
                Operation(
                    key="cube",
                    otype=OType.NODE_INSERT.value,
                    path="",
                    tag="Mesh",
                    parent_key="scene",
                    value={"color": "#ff0000"},
                )
            ],
        )

        new_graph = apply_message(graph, msg)
        node = new_graph.get_node("cube")

        assert node is not None
        assert node.tag == "Mesh"
        assert node.get_property("color") == "#ff0000"
        assert "cube" in new_graph.get_node("scene").children


class TestGraphStore:
    """Tests for the GraphStore high-level API."""

    def test_create_store(self):
        store = create_graph(session_id="test")
        assert store.session_id == "test"
        assert store.graph.has_node("scene")

    def test_edit_and_commit(self):
        sent_messages = []
        store = create_graph(
            session_id="test", on_send=lambda msg: sent_messages.append(msg)
        )

        store.edit(
            Operation(
                key="cube",
                otype=OType.NODE_INSERT.value,
                path="",
                tag="Mesh",
                parent_key="scene",
            )
        )

        assert store.has_pending_edits()
        assert store.graph.has_node("cube")  # Preview applied

        msg = store.commit()

        assert msg is not None
        assert not store.has_pending_edits()
        assert len(sent_messages) == 1
        assert sent_messages[0].id == msg.id

    def test_cancel_edits(self):
        store = create_graph(session_id="test")

        store.edit(
            Operation(
                key="cube",
                otype=OType.NODE_INSERT.value,
                path="",
                tag="Mesh",
                parent_key="scene",
            )
        )

        assert store.graph.has_node("cube")

        store.cancel_edits()

        assert not store.has_pending_edits()
        assert not store.graph.has_node("cube")  # Reverted

    def test_undo_redo(self):
        store = create_graph(session_id="test")

        # Add a cube
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

        # Move the cube
        store.edit(
            Operation(
                key="cube",
                otype=OType.VECTOR3_SET.value,
                path="position",
                value=[1, 0, 0],
            )
        )
        store.commit()

        assert store.graph.get_node("cube").get_property("position") == [1, 0, 0]

        # Undo the move
        undo_msg = store.undo()
        assert undo_msg is not None
        # After undo, position should be None (or default) since the set was undone
        assert store.graph.get_node("cube").get_property("position") is None

        # Redo the move
        redo_msg = store.redo()
        assert redo_msg is not None
        assert store.graph.get_node("cube").get_property("position") == [1, 0, 0]

    def test_receive_remote_message(self):
        store = create_graph(session_id="local")

        # Simulate receiving a message from a remote client
        remote_msg = CRDTMessage(
            id="remote:1",
            session_id="remote",
            clock={"remote": 1},
            lamport_time=1,
            timestamp=1000,
            ops=[
                Operation(
                    key="remote-cube",
                    otype=OType.NODE_INSERT.value,
                    path="",
                    tag="Mesh",
                    parent_key="scene",
                )
            ],
        )

        store.receive(remote_msg)

        assert store.graph.has_node("remote-cube")
        assert len(store.get_state().journal) == 1

    def test_subscribe(self):
        store = create_graph(session_id="test")
        state_changes = []

        unsubscribe = store.subscribe(lambda state: state_changes.append(state))

        store.edit(
            Operation(
                key="cube",
                otype=OType.NODE_INSERT.value,
                path="",
                tag="Mesh",
                parent_key="scene",
            )
        )

        assert len(state_changes) == 1

        unsubscribe()

        store.commit()
        # No more notifications after unsubscribe
        assert len(state_changes) == 1

    def test_compact_snapshot(self):
        store = create_graph(session_id="test")

        # Add some operations
        for i in range(3):
            store.edit(
                Operation(
                    key=f"cube-{i}",
                    otype=OType.NODE_INSERT.value,
                    path="",
                    tag="Mesh",
                    parent_key="scene",
                )
            )
            store.commit()

        # Mark all as acknowledged
        for entry in store.get_state().journal:
            store.ack(entry.msg.id)

        # Compact
        snapshot = store.compact()

        assert snapshot.journal_index == 3
        assert len(store.get_state().journal) == 0  # Journal cleared
        assert store.graph.has_node("cube-0")
        assert store.graph.has_node("cube-1")
        assert store.graph.has_node("cube-2")


class TestSerialization:
    """Tests for serialization/deserialization."""

    def test_operation_serialization(self):
        op = Operation(
            key="cube",
            otype=OType.VECTOR3_SET.value,
            path="position",
            value=[1, 2, 3],
        )

        data = op.to_dict()
        restored = Operation.from_dict(data)

        assert restored.key == op.key
        assert restored.otype == op.otype
        assert restored.path == op.path
        assert restored.value == op.value

    def test_message_serialization(self):
        msg = CRDTMessage(
            id="test:1",
            session_id="test",
            clock={"test": 1},
            lamport_time=1,
            timestamp=1000,
            ops=[
                Operation(
                    key="cube",
                    otype=OType.VECTOR3_SET.value,
                    path="position",
                    value=[1, 2, 3],
                )
            ],
        )

        data = msg.to_dict()
        restored = CRDTMessage.from_dict(data)

        assert restored.id == msg.id
        assert restored.session_id == msg.session_id
        assert restored.clock == msg.clock
        assert restored.lamport_time == msg.lamport_time
        assert len(restored.ops) == 1
        assert restored.ops[0].value == [1, 2, 3]

    def test_scene_node_serialization(self):
        node = SceneNode(key="cube", tag="Mesh", name="My Cube")
        node.set_property("color", "#ff0000")
        node.set_property("position", [1, 2, 3])

        data = node.to_dict()
        restored = SceneNode.from_dict(data)

        assert restored.key == node.key
        assert restored.tag == node.tag
        assert restored.name == node.name
        assert restored.get_property("color") == "#ff0000"
        assert restored.get_property("position") == [1, 2, 3]

    def test_scene_graph_serialization(self):
        graph = create_empty_graph()
        node = SceneNode(key="cube", tag="Mesh")
        node.set_property("color", "#ff0000")
        graph.set_node(node)
        graph.get_node("scene").children.append("cube")

        data = graph.to_dict()
        restored = SceneGraph.from_dict(data)

        assert restored.root_key == graph.root_key
        assert restored.has_node("cube")
        assert restored.get_node("cube").get_property("color") == "#ff0000"
        assert "cube" in restored.get_node("scene").children


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
