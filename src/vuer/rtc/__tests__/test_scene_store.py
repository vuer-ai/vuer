"""
Tests for the SceneStore class.
"""

import pytest

from vuer.rtc.scene_store import SceneStore
from vuer.schemas import Box, Sphere, Group, Scene


class MockSetProxy:
    """Mock for session.set that captures @ calls."""

    def __init__(self, calls):
        self._calls = calls

    def __matmul__(self, other):
        self._calls.append(("set", other))
        return None


class MockMethodProxy:
    """Mock for session methods that support @ operator."""

    def __init__(self, calls, name):
        self._calls = calls
        self._name = name
        self._to = None

    def __matmul__(self, other):
        self._calls.append((self._name, other, self._to))
        return None

    def __call__(self, to=None):
        proxy = MockMethodProxy(self._calls, self._name)
        proxy._to = to
        return proxy


class MockSession:
    """Mock VuerSession that captures all operations."""

    def __init__(self):
        self.calls = []
        self.set = MockSetProxy(self.calls)
        self.add = MockMethodProxy(self.calls, "add")
        self.upsert = MockMethodProxy(self.calls, "upsert")
        self.update = MockMethodProxy(self.calls, "update")
        self.remove = MockMethodProxy(self.calls, "remove")

    def __matmul__(self, event):
        """Handle session @ event pattern."""
        self.calls.append((event.etype.lower(), event))
        return None


class TestSceneStore:
    """Tests for SceneStore class."""

    def test_create_store(self):
        store = SceneStore()
        assert len(store._subscribers) == 0
        assert store.scene is None

    @pytest.mark.asyncio
    async def test_subscribe_context_manager(self):
        store = SceneStore()
        session = MockSession()

        async with store.subscribe(session):
            assert session in store._subscribers

        assert session not in store._subscribers

    @pytest.mark.asyncio
    async def test_set_updates_internal_state(self):
        store = SceneStore()
        session = MockSession()

        async with store.subscribe(session):
            store.set @ Scene(Box(key="box"))

        assert store.scene is not None
        assert store.scene["tag"] == "Scene"
        assert len(store.scene["children"]) == 1
        assert store.scene["children"][0]["key"] == "box"

    @pytest.mark.asyncio
    async def test_set_broadcasts_to_subscriber(self):
        store = SceneStore()
        session = MockSession()

        async with store.subscribe(session):
            store.set @ Scene(Box(key="box"))

        assert len(session.calls) == 1
        assert session.calls[0][0] == "set"

    @pytest.mark.asyncio
    async def test_upsert_updates_internal_state(self):
        store = SceneStore()
        session = MockSession()

        async with store.subscribe(session):
            store.set @ Scene(Box(key="box"))
            store.upsert @ Sphere(key="sphere", position=[1, 0, 0])

        # Should have both box and sphere
        assert len(store.scene["children"]) == 2
        sphere = store.get("sphere")
        assert sphere is not None
        assert sphere["position"] == [1, 0, 0]

    @pytest.mark.asyncio
    async def test_upsert_merges_existing(self):
        store = SceneStore()
        session = MockSession()

        async with store.subscribe(session):
            store.set @ Scene(Box(key="box", position=[0, 0, 0]))
            store.upsert @ Box(key="box", position=[1, 2, 3])

        # Should still have one child
        assert len(store.scene["children"]) == 1
        box = store.get("box")
        assert box["position"] == [1, 2, 3]

    @pytest.mark.asyncio
    async def test_remove_updates_internal_state(self):
        store = SceneStore()
        session = MockSession()

        async with store.subscribe(session):
            store.set @ Scene(
                Box(key="box1"),
                Box(key="box2"),
            )
            store.remove @ "box1"

        assert len(store.scene["children"]) == 1
        assert store.get("box1") is None
        assert store.get("box2") is not None

    @pytest.mark.asyncio
    async def test_get_returns_element(self):
        store = SceneStore()
        session = MockSession()

        async with store.subscribe(session):
            store.set @ Scene(Box(key="mybox", position=[1, 2, 3]))

        box = store.get("mybox")
        assert box is not None
        assert box["key"] == "mybox"
        assert box["position"] == [1, 2, 3]

    @pytest.mark.asyncio
    async def test_get_returns_none_for_missing(self):
        store = SceneStore()
        session = MockSession()

        async with store.subscribe(session):
            store.set @ Scene(Box(key="box"))

        assert store.get("nonexistent") is None

    @pytest.mark.asyncio
    async def test_multiple_subscribers_all_notified(self):
        store = SceneStore()
        session1 = MockSession()
        session2 = MockSession()

        async with store.subscribe(session1):
            async with store.subscribe(session2):
                store.upsert @ Box(key="box")

        assert len(session1.calls) == 1
        assert len(session2.calls) == 1


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
