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


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
