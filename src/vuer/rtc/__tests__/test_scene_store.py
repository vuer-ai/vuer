"""
Tests for the SceneStore class.
"""

import asyncio
import pytest
from unittest.mock import MagicMock, AsyncMock

from vuer.rtc.scene_store import (
    SceneStore,
    SceneNode,
    SceneState,
    find_by_key,
    add_node,
    remove_by_key,
    update_node,
    upsert_node,
)
from vuer.schemas import Box, Sphere, Group


# =============================================================================
# SceneNode Tests
# =============================================================================


class TestSceneNode:
    """Tests for SceneNode class."""

    def test_create_node(self):
        node = SceneNode(key="test", tag="Box")
        assert node.key == "test"
        assert node.tag == "Box"
        assert node.children == []
        assert node.properties == {}

    def test_node_with_properties(self):
        node = SceneNode(
            key="box-1",
            tag="Box",
            properties={"position": [1, 2, 3], "color": "red"},
        )
        assert node.properties["position"] == [1, 2, 3]
        assert node.properties["color"] == "red"

    def test_node_with_children(self):
        child = SceneNode(key="child", tag="Sphere")
        parent = SceneNode(key="parent", tag="Group", children=[child])
        assert len(parent.children) == 1
        assert parent.children[0].key == "child"

    def test_to_dict(self):
        node = SceneNode(
            key="box",
            tag="Box",
            properties={"position": [0, 0, 0]},
        )
        data = node.to_dict()
        assert data["key"] == "box"
        assert data["tag"] == "Box"
        assert data["position"] == [0, 0, 0]

    def test_from_dict(self):
        data = {
            "key": "sphere",
            "tag": "Sphere",
            "radius": 1.0,
            "children": [
                {"key": "inner", "tag": "Box"}
            ],
        }
        node = SceneNode.from_dict(data)
        assert node.key == "sphere"
        assert node.tag == "Sphere"
        assert node.properties["radius"] == 1.0
        assert len(node.children) == 1
        assert node.children[0].key == "inner"

    def test_roundtrip(self):
        original = SceneNode(
            key="test",
            tag="Mesh",
            children=[SceneNode(key="child", tag="Box")],
            properties={"visible": True, "scale": [1, 1, 1]},
        )
        data = original.to_dict()
        restored = SceneNode.from_dict(data)
        assert restored.key == original.key
        assert restored.tag == original.tag
        assert restored.properties == original.properties
        assert len(restored.children) == len(original.children)


# =============================================================================
# SceneState Tests
# =============================================================================


class TestSceneState:
    """Tests for SceneState class."""

    def test_default_state(self):
        state = SceneState()
        assert state.children == []
        assert state.bgChildren == []
        assert state.position == [0, 0, 0]
        assert state.up == [0, 1, 0]

    def test_to_dict(self):
        state = SceneState(
            children=[SceneNode(key="box", tag="Box")],
            position=[1, 0, 0],
        )
        data = state.to_dict()
        assert data["tag"] == "Scene"
        assert len(data["children"]) == 1
        assert data["position"] == [1, 0, 0]

    def test_copy(self):
        original = SceneState(
            children=[SceneNode(key="box", tag="Box")],
            position=[1, 2, 3],
        )
        copy = original.copy()

        # Modify original
        original.children.append(SceneNode(key="new", tag="Sphere"))
        original.position[0] = 999

        # Copy should be unchanged
        assert len(copy.children) == 1
        assert copy.position[0] == 1


# =============================================================================
# Tree Operation Tests
# =============================================================================


class TestTreeOperations:
    """Tests for tree manipulation functions."""

    def test_find_by_key_in_children(self):
        state = SceneState(
            children=[
                SceneNode(key="a", tag="Box"),
                SceneNode(key="b", tag="Sphere"),
            ]
        )
        result = find_by_key(state, "b")
        assert result is not None
        assert result.key == "b"
        assert result.tag == "Sphere"

    def test_find_by_key_nested(self):
        state = SceneState(
            children=[
                SceneNode(
                    key="parent",
                    tag="Group",
                    children=[
                        SceneNode(key="child", tag="Box"),
                    ],
                ),
            ]
        )
        result = find_by_key(state, "child")
        assert result is not None
        assert result.key == "child"

    def test_find_by_key_not_found(self):
        state = SceneState(children=[SceneNode(key="a", tag="Box")])
        result = find_by_key(state, "nonexistent")
        assert result is None

    def test_find_by_key_in_bg_children(self):
        state = SceneState(
            bgChildren=[SceneNode(key="light", tag="AmbientLight")]
        )
        result = find_by_key(state, "light")
        assert result is not None
        assert result.tag == "AmbientLight"

    def test_add_node_to_root(self):
        state = SceneState()
        node = SceneNode(key="box", tag="Box")
        new_state = add_node(state, node)

        assert len(new_state.children) == 1
        assert new_state.children[0].key == "box"
        # Original unchanged
        assert len(state.children) == 0

    def test_add_node_to_parent(self):
        state = SceneState(
            children=[SceneNode(key="parent", tag="Group")]
        )
        child = SceneNode(key="child", tag="Box")
        new_state = add_node(state, child, to="parent")

        parent = find_by_key(new_state, "parent")
        assert len(parent.children) == 1
        assert parent.children[0].key == "child"

    def test_add_node_parent_not_found(self):
        state = SceneState()
        node = SceneNode(key="box", tag="Box")
        with pytest.raises(ValueError, match="Parent node not found"):
            add_node(state, node, to="nonexistent")

    def test_remove_by_key(self):
        state = SceneState(
            children=[
                SceneNode(key="a", tag="Box"),
                SceneNode(key="b", tag="Sphere"),
            ]
        )
        new_state = remove_by_key(state, "a")

        assert len(new_state.children) == 1
        assert new_state.children[0].key == "b"
        # Original unchanged
        assert len(state.children) == 2

    def test_remove_nested_node(self):
        state = SceneState(
            children=[
                SceneNode(
                    key="parent",
                    tag="Group",
                    children=[
                        SceneNode(key="child", tag="Box"),
                    ],
                ),
            ]
        )
        new_state = remove_by_key(state, "child")

        parent = find_by_key(new_state, "parent")
        assert len(parent.children) == 0

    def test_update_node(self):
        state = SceneState(
            children=[
                SceneNode(
                    key="box",
                    tag="Box",
                    properties={"color": "red"},
                )
            ]
        )
        new_state = update_node(state, "box", {"color": "blue", "visible": True})

        node = find_by_key(new_state, "box")
        assert node.properties["color"] == "blue"
        assert node.properties["visible"] is True

    def test_update_nonexistent_node(self):
        state = SceneState()
        new_state = update_node(state, "nonexistent", {"color": "red"})
        # Should return unchanged state
        assert new_state.children == []

    def test_upsert_existing_node(self):
        state = SceneState(
            children=[
                SceneNode(key="box", tag="Box", properties={"color": "red"})
            ]
        )
        updated = SceneNode(key="box", tag="Box", properties={"color": "blue"})
        new_state = upsert_node(state, updated)

        node = find_by_key(new_state, "box")
        assert node.properties["color"] == "blue"

    def test_upsert_new_node(self):
        state = SceneState()
        node = SceneNode(key="new", tag="Sphere")
        new_state = upsert_node(state, node)

        assert len(new_state.children) == 1
        assert new_state.children[0].key == "new"


# =============================================================================
# SceneStore Tests
# =============================================================================


class TestSceneStore:
    """Tests for SceneStore class."""

    def test_create_store(self):
        store = SceneStore()
        assert store.snapshot.children == []

    def test_snapshot_returns_copy(self):
        store = SceneStore()
        snapshot1 = store.snapshot
        snapshot2 = store.snapshot
        assert snapshot1 is not snapshot2

    @pytest.mark.asyncio
    async def test_set_scene(self):
        store = SceneStore()
        await store.set_scene(
            children=[{"key": "box", "tag": "Box"}],
            position=[1, 0, 0],
        )

        snapshot = store.snapshot
        assert len(snapshot.children) == 1
        assert snapshot.children[0].key == "box"
        assert snapshot.position == [1, 0, 0]

    @pytest.mark.asyncio
    async def test_add_async(self):
        store = SceneStore()
        await store.add_async({"key": "box", "tag": "Box"})

        assert len(store.snapshot.children) == 1
        assert store.snapshot.children[0].key == "box"

    @pytest.mark.asyncio
    async def test_add_to_parent(self):
        store = SceneStore()
        await store.add_async({"key": "parent", "tag": "Group"})
        await store.add_async({"key": "child", "tag": "Box"}, to="parent")

        parent = store.get_node("parent")
        assert len(parent.children) == 1
        assert parent.children[0].key == "child"

    @pytest.mark.asyncio
    async def test_update_async(self):
        store = SceneStore()
        await store.add_async({"key": "box", "tag": "Box", "color": "red"})
        await store.update_async({"key": "box", "color": "blue"})

        node = store.get_node("box")
        assert node.properties["color"] == "blue"

    @pytest.mark.asyncio
    async def test_upsert_async_new(self):
        store = SceneStore()
        await store.upsert_async({"key": "sphere", "tag": "Sphere"})

        assert store.has_node("sphere")

    @pytest.mark.asyncio
    async def test_upsert_async_existing(self):
        store = SceneStore()
        await store.add_async({"key": "box", "tag": "Box", "color": "red"})
        await store.upsert_async({"key": "box", "tag": "Box", "color": "green"})

        node = store.get_node("box")
        assert node.properties["color"] == "green"

    @pytest.mark.asyncio
    async def test_remove_async(self):
        store = SceneStore()
        await store.add_async({"key": "box", "tag": "Box"})
        await store.add_async({"key": "sphere", "tag": "Sphere"})
        await store.remove_async("box")

        assert not store.has_node("box")
        assert store.has_node("sphere")

    def test_get_node(self):
        store = SceneStore()
        store._state = SceneState(
            children=[SceneNode(key="test", tag="Box")]
        )

        node = store.get_node("test")
        assert node is not None
        assert node.key == "test"

    def test_get_node_not_found(self):
        store = SceneStore()
        node = store.get_node("nonexistent")
        assert node is None

    def test_has_node(self):
        store = SceneStore()
        store._state = SceneState(
            children=[SceneNode(key="test", tag="Box")]
        )

        assert store.has_node("test")
        assert not store.has_node("other")


# =============================================================================
# Subscription Tests
# =============================================================================


class TestSubscription:
    """Tests for subscription functionality."""

    @pytest.mark.asyncio
    async def test_subscribe_context_manager(self):
        store = SceneStore()
        mock_session = MagicMock()
        mock_session.set = MagicMock()
        mock_session.add = MagicMock()

        async with store.subscribe(mock_session):
            assert mock_session in store._subscribers

        # After exit, should be unsubscribed
        assert mock_session not in store._subscribers

    @pytest.mark.asyncio
    async def test_multiple_subscribers(self):
        store = SceneStore()
        session1 = MagicMock()
        session2 = MagicMock()

        async with store.subscribe(session1):
            async with store.subscribe(session2):
                assert len(store._subscribers) == 2
            assert len(store._subscribers) == 1
        assert len(store._subscribers) == 0

    @pytest.mark.asyncio
    async def test_subscriber_cleanup_on_error(self):
        store = SceneStore()
        mock_session = MagicMock()

        with pytest.raises(ValueError):
            async with store.subscribe(mock_session):
                assert mock_session in store._subscribers
                raise ValueError("Test error")

        # Should still be cleaned up
        assert mock_session not in store._subscribers


# =============================================================================
# @ Operator Tests
# =============================================================================


class TestAtOperator:
    """Tests for @ operator support."""

    def test_upsert_proxy_exists(self):
        store = SceneStore()
        proxy = store.upsert
        assert proxy is not None

    def test_add_proxy_exists(self):
        store = SceneStore()
        proxy = store.add
        assert proxy is not None

    def test_remove_proxy_exists(self):
        store = SceneStore()
        proxy = store.remove
        assert proxy is not None

    def test_update_proxy_exists(self):
        store = SceneStore()
        proxy = store.update
        assert proxy is not None

    @pytest.mark.asyncio
    async def test_upsert_at_operator(self):
        store = SceneStore()
        task = store.upsert @ {"key": "box", "tag": "Box"}
        await task

        assert store.has_node("box")

    @pytest.mark.asyncio
    async def test_add_at_operator(self):
        store = SceneStore()
        task = store.add @ {"key": "sphere", "tag": "Sphere"}
        await task

        assert store.has_node("sphere")

    @pytest.mark.asyncio
    async def test_remove_at_operator(self):
        store = SceneStore()
        await store.add_async({"key": "box", "tag": "Box"})
        task = store.remove @ "box"
        await task

        assert not store.has_node("box")

    @pytest.mark.asyncio
    async def test_add_with_parent_at_operator(self):
        store = SceneStore()
        await store.add_async({"key": "parent", "tag": "Group"})
        task = store.add(to="parent") @ {"key": "child", "tag": "Box"}
        await task

        parent = store.get_node("parent")
        assert len(parent.children) == 1


# =============================================================================
# Deep Nesting Tests
# =============================================================================


class TestDeepNesting:
    """Tests for deep nesting scenarios."""

    def test_upsert_to_deep_parent(self):
        """Test that upsert with to='deep-parent' correctly inserts into a nested parent's children."""
        # Create state with: root -> parent -> grandparent
        state = SceneState(
            children=[
                SceneNode(
                    key="parent",
                    tag="Group",
                    children=[
                        SceneNode(key="grandparent", tag="Group"),
                    ],
                ),
            ]
        )

        # Upsert a child to grandparent
        child = SceneNode(key="child", tag="Box", properties={"color": "red"})
        new_state = upsert_node(state, child, to="grandparent")

        # Verify it's in grandparent.children
        grandparent = find_by_key(new_state, "grandparent")
        assert grandparent is not None
        assert len(grandparent.children) == 1
        assert grandparent.children[0].key == "child"
        assert grandparent.children[0].properties["color"] == "red"

    def test_upsert_updates_grandchild(self):
        """Test that upsert can update a node that is a grandchild (nested 2+ levels deep)."""
        # Create state with existing grandchild
        state = SceneState(
            children=[
                SceneNode(
                    key="parent",
                    tag="Group",
                    children=[
                        SceneNode(
                            key="child",
                            tag="Group",
                            children=[
                                SceneNode(
                                    key="grandchild",
                                    tag="Box",
                                    properties={"color": "red", "size": 1},
                                ),
                            ],
                        ),
                    ],
                ),
            ]
        )

        # Upsert with same key, different properties
        updated = SceneNode(
            key="grandchild", tag="Box", properties={"color": "blue", "visible": True}
        )
        new_state = upsert_node(state, updated)

        # Verify grandchild was updated
        grandchild = find_by_key(new_state, "grandchild")
        assert grandchild is not None
        assert grandchild.properties["color"] == "blue"
        assert grandchild.properties["visible"] is True
        # Properties are merged, not replaced
        assert grandchild.properties["size"] == 1

    def test_upsert_root_finds_deep_node(self):
        """Test that upserting to root (no 'to' param) still finds and updates a deeply nested node."""
        # Create state with deeply nested node (4 levels deep)
        state = SceneState(
            children=[
                SceneNode(
                    key="level1",
                    tag="Group",
                    children=[
                        SceneNode(
                            key="level2",
                            tag="Group",
                            children=[
                                SceneNode(
                                    key="level3",
                                    tag="Group",
                                    children=[
                                        SceneNode(
                                            key="deep-node",
                                            tag="Sphere",
                                            properties={"radius": 1.0},
                                        ),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ]
        )

        # Upsert without 'to' param - should find and update the deep node
        updated = SceneNode(
            key="deep-node", tag="Sphere", properties={"radius": 2.0, "color": "green"}
        )
        new_state = upsert_node(state, updated)

        # Verify the deep node was found and updated
        deep_node = find_by_key(new_state, "deep-node")
        assert deep_node is not None
        assert deep_node.properties["radius"] == 2.0
        assert deep_node.properties["color"] == "green"

        # Verify the tree structure is preserved
        level1 = find_by_key(new_state, "level1")
        assert level1 is not None
        assert len(level1.children) == 1
        assert level1.children[0].key == "level2"


# =============================================================================
# Schema Component Integration Tests
# =============================================================================


class TestWithSchemaComponents:
    """Tests using actual schema components (Box, Sphere, Group) instead of dicts."""

    @pytest.mark.asyncio
    async def test_set_scene_with_box(self):
        """Test set_scene with a Box component."""
        store = SceneStore()
        await store.set_scene(
            children=[Box(key="box1", position=[0, 0, 0], args=[1, 1, 1])]
        )

        assert store.has_node("box1")
        node = store.get_node("box1")
        assert node.tag == "Box"
        assert node.properties["position"] == [0, 0, 0]

    @pytest.mark.asyncio
    async def test_add_with_sphere(self):
        """Test add with a Sphere component."""
        store = SceneStore()
        await store.add_async(Sphere(key="sphere1", position=[1, 0, 0], args=[0.5, 32, 32]))

        assert store.has_node("sphere1")
        node = store.get_node("sphere1")
        assert node.tag == "Sphere"

    @pytest.mark.asyncio
    async def test_add_to_group(self):
        """Test adding a child to a Group component."""
        store = SceneStore()
        await store.add_async(Group(key="group1", position=[0, 2, 0]))
        await store.add_async(
            Sphere(key="child", args=[0.3, 16, 16]),
            to="group1"
        )

        group = store.get_node("group1")
        assert len(group.children) == 1
        assert group.children[0].key == "child"

    @pytest.mark.asyncio
    async def test_upsert_with_box(self):
        """Test upsert inserts new Box and updates existing."""
        store = SceneStore()

        # Insert new
        await store.upsert_async(Box(key="box", args=[1, 1, 1], material={"color": "red"}))
        assert store.has_node("box")
        assert store.get_node("box").properties["material"]["color"] == "red"

        # Update existing
        await store.upsert_async(Box(key="box", args=[2, 2, 2], material={"color": "blue"}))
        node = store.get_node("box")
        assert node.properties["material"]["color"] == "blue"
        assert node.properties["args"] == [2, 2, 2]

    @pytest.mark.asyncio
    async def test_remove_schema_component(self):
        """Test removing a component added via schema."""
        store = SceneStore()
        await store.add_async(Box(key="box1"))
        await store.add_async(Sphere(key="sphere1"))

        await store.remove_async("box1")

        assert not store.has_node("box1")
        assert store.has_node("sphere1")


# =============================================================================
# End-to-End Subscriber Notification Tests
# =============================================================================


class MockSetProxy:
    """Mock for session.set that captures @ operator calls."""

    def __init__(self, calls: list):
        self._calls = calls

    def __matmul__(self, other):
        self._calls.append(("set", other))
        return None


class MockSession:
    """Mock VuerSession that captures all operations."""

    def __init__(self):
        self.calls = []
        self.set = MockSetProxy(self.calls)

    def add(self, *elements, to=None):
        self.calls.append(("add", elements, to))

    def upsert(self, *elements, to=None):
        self.calls.append(("upsert", elements, to))

    def update(self, *updates):
        self.calls.append(("update", updates))

    def remove(self, *keys):
        self.calls.append(("remove", keys))


class TestE2ESubscriberNotification:
    """End-to-end tests verifying operations notify subscribers correctly."""

    @pytest.mark.asyncio
    async def test_set_scene_notifies_subscriber(self):
        """Verify set_scene sends Scene to subscriber via session.set @."""
        store = SceneStore()
        mock_session = MockSession()

        async with store.subscribe(mock_session):
            await store.set_scene(
                children=[Box(key="box", position=[1, 2, 3])]
            )

        # Should have one set call
        assert len(mock_session.calls) == 1
        call_type, scene = mock_session.calls[0]
        assert call_type == "set"
        # Scene should have the box as a child
        assert scene.tag == "Scene"

    @pytest.mark.asyncio
    async def test_add_notifies_subscriber(self):
        """Verify add sends elements to subscriber."""
        store = SceneStore()
        mock_session = MockSession()

        async with store.subscribe(mock_session):
            await store.add_async(Box(key="box1"), Sphere(key="sphere1"))

        assert len(mock_session.calls) == 1
        call_type, elements, to = mock_session.calls[0]
        assert call_type == "add"
        assert len(elements) == 2
        assert to is None

    @pytest.mark.asyncio
    async def test_add_with_parent_notifies_subscriber(self):
        """Verify add with to= sends correct parent."""
        store = SceneStore()
        mock_session = MockSession()

        async with store.subscribe(mock_session):
            await store.add_async(Group(key="parent"))
            await store.add_async(Box(key="child"), to="parent")

        # Should have two add calls
        assert len(mock_session.calls) == 2
        # Second call should have to="parent"
        call_type, elements, to = mock_session.calls[1]
        assert call_type == "add"
        assert to == "parent"

    @pytest.mark.asyncio
    async def test_upsert_notifies_subscriber(self):
        """Verify upsert sends elements to subscriber."""
        store = SceneStore()
        mock_session = MockSession()

        async with store.subscribe(mock_session):
            await store.upsert_async(Box(key="box"))

        assert len(mock_session.calls) == 1
        call_type, elements, to = mock_session.calls[0]
        assert call_type == "upsert"
        assert len(elements) == 1

    @pytest.mark.asyncio
    async def test_update_notifies_subscriber(self):
        """Verify update sends updates to subscriber."""
        store = SceneStore()
        mock_session = MockSession()

        # Add a node first (without subscriber)
        await store.add_async(Box(key="box", material={"color": "red"}))

        async with store.subscribe(mock_session):
            await store.update_async({"key": "box", "material": {"color": "blue"}})

        assert len(mock_session.calls) == 1
        call_type, updates = mock_session.calls[0]
        assert call_type == "update"
        assert len(updates) == 1

    @pytest.mark.asyncio
    async def test_remove_notifies_subscriber(self):
        """Verify remove sends keys to subscriber."""
        store = SceneStore()
        mock_session = MockSession()

        # Add nodes first (without subscriber)
        await store.add_async(Box(key="box1"), Box(key="box2"))

        async with store.subscribe(mock_session):
            await store.remove_async("box1", "box2")

        assert len(mock_session.calls) == 1
        call_type, keys = mock_session.calls[0]
        assert call_type == "remove"
        assert keys == ("box1", "box2")

    @pytest.mark.asyncio
    async def test_multiple_subscribers_all_notified(self):
        """Verify all subscribers receive notifications."""
        store = SceneStore()
        session1 = MockSession()
        session2 = MockSession()

        async with store.subscribe(session1):
            async with store.subscribe(session2):
                await store.add_async(Box(key="box"))

        # Both should have received the add
        assert len(session1.calls) == 1
        assert len(session2.calls) == 1
        assert session1.calls[0][0] == "add"
        assert session2.calls[0][0] == "add"


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
