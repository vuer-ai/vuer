"""
SceneStore - A reactive scene graph store that maintains state and broadcasts.

Mirrors the VuerSession API (set, add, upsert, update, remove) but also
maintains internal state and broadcasts to all subscribed sessions.

Usage:
    from vuer import Vuer, VuerSession
    from vuer.rtc import SceneStore
    from vuer.schemas import Box, Scene

    app = Vuer()
    store = SceneStore()

    @app.spawn(start=True)
    async def main(sess: VuerSession):
        async with store.subscribe(sess):
            store.set @ Scene(Box(key="box"))
            store.upsert @ Box(key="box2", position=[1, 0, 0])

            # Query state
            print(store.scene)  # Current scene
            print(store.get("box"))  # Get element by key
            print(store.history)  # Complete operation history
"""

import time
from typing import TYPE_CHECKING, Any, Dict, List, Optional, Set

from vuer.events import Set, Add, Update, Upsert, Remove
from vuer.server import At

if TYPE_CHECKING:
    from vuer.server import VuerSession


class SubscriptionContext:
    """Context manager for session subscription."""

    def __init__(self, store: "SceneStore", session: "VuerSession"):
        self.store = store
        self.session = session

    async def __aenter__(self) -> "SubscriptionContext":
        self.store._add_subscriber(self.session)
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb) -> None:
        self.store._remove_subscriber(self.session)
        return None


def _serialize(element) -> Dict[str, Any]:
    """Serialize an element to dict."""
    if hasattr(element, "_serialize"):
        return element._serialize()
    elif isinstance(element, dict):
        return element
    else:
        return dict(element)


def _find_by_key(children: List[Dict], key: str) -> Optional[Dict]:
    """Find element by key in children list (recursive)."""
    for child in children:
        if child.get("key") == key:
            return child
        nested = child.get("children", [])
        if nested:
            found = _find_by_key(nested, key)
            if found:
                return found
    return None


def _remove_by_key(children: List[Dict], key: str) -> List[Dict]:
    """Remove element by key from children list (recursive)."""
    result = []
    for child in children:
        if child.get("key") == key:
            continue
        nested = child.get("children", [])
        if nested:
            child = {**child, "children": _remove_by_key(nested, key)}
        result.append(child)
    return result


def _upsert_into(children: List[Dict], element: Dict, to: Optional[str] = None) -> List[Dict]:
    """Upsert element into children list."""
    key = element.get("key")

    # If targeting a parent, find it and add there
    if to:
        result = []
        for child in children:
            if child.get("key") == to:
                nested = child.get("children", [])
                child = {**child, "children": _upsert_into(nested, element)}
            else:
                nested = child.get("children", [])
                if nested:
                    child = {**child, "children": _upsert_into(nested, element, to)}
            result.append(child)
        return result

    # Check if exists (update) or not (add)
    found = False
    result = []
    for child in children:
        if child.get("key") == key:
            # Merge properties
            result.append({**child, **element})
            found = True
        else:
            nested = child.get("children", [])
            if nested:
                child = {**child, "children": _upsert_into(nested, element)}
            result.append(child)

    if not found:
        result.append(element)

    return result


class SceneStore:
    """
    A reactive store that maintains scene state and broadcasts to subscribers.

    Mirrors VuerSession's API: set, add, upsert, update, remove.
    Also maintains internal state and operation history.

    Example:
        store = SceneStore()

        @app.spawn(start=True)
        async def main(sess: VuerSession):
            async with store.subscribe(sess):
                store.set @ Scene(Box(key="box"))
                store.upsert @ Sphere(key="sphere", position=[1, 0, 0])

                # Query state
                print(store.get("box"))
                print(store.history)
    """

    def __init__(self):
        self._subscribers: Set["VuerSession"] = set()
        self._scene: Optional[Dict[str, Any]] = None
        self._history: List[Dict[str, Any]] = []

    @property
    def history(self) -> List[Dict[str, Any]]:
        """Get complete history of all operations."""
        return self._history

    @property
    def scene(self) -> Optional[Dict[str, Any]]:
        """Get current scene state."""
        return self._scene

    def get(self, key: str) -> Optional[Dict[str, Any]]:
        """Get element by key."""
        if not self._scene:
            return None
        children = self._scene.get("children", [])
        return _find_by_key(children, key)

    def subscribe(self, session: "VuerSession") -> SubscriptionContext:
        """Subscribe a session to receive broadcasts."""
        return SubscriptionContext(self, session)

    def _add_subscriber(self, session: "VuerSession") -> None:
        self._subscribers.add(session)

    def _remove_subscriber(self, session: "VuerSession") -> None:
        self._subscribers.discard(session)

    def __matmul__(self, event) -> None:
        """Central dispatch for all operations - updates state, records history, broadcasts."""
        # Record to history
        self._history.append({
            "etype": event.etype.lower(),
            "timestamp": time.time(),
            "event": event._serialize(),
        })

        # Update internal state based on event type
        if isinstance(event, Set):
            self._scene = _serialize(event.data)

        elif isinstance(event, Update):
            if self._scene:
                for node in event.data["nodes"]:
                    data = _serialize(node)
                    key = data.get("key")
                    if key:
                        existing = self.get(key)
                        if existing:
                            existing.update(data)

        elif isinstance(event, Add):
            if self._scene:
                to = event.data.get("to")
                for node in event.data["nodes"]:
                    data = _serialize(node)
                    if to:
                        parent = self.get(to)
                        if parent:
                            children = parent.setdefault("children", [])
                            children.append(data)
                    else:
                        self._scene.setdefault("children", []).append(data)

        elif isinstance(event, Upsert):
            if self._scene:
                to = event.data.get("to")
                for node in event.data["nodes"]:
                    data = _serialize(node)
                    children = self._scene.get("children", [])
                    self._scene["children"] = _upsert_into(children, data, to)

        elif isinstance(event, Remove):
            if self._scene:
                for key in event.data["keys"]:
                    children = self._scene.get("children", [])
                    self._scene["children"] = _remove_by_key(children, key)

        # Broadcast to all subscribers
        for session in self._subscribers:
            session @ event

    @property
    def set(self) -> At:
        """Set the scene. Usage: store.set @ Scene(...)"""
        return At(lambda element: self @ Set(element))

    @property
    def update(self) -> At:
        """Update elements. Usage: store.update @ element or store.update @ [elem1, elem2]"""

        @At
        def _update(element):
            if isinstance(element, (list, tuple)):
                self @ Update(*element)
            else:
                self @ Update(element)

        return _update

    @property
    def add(self) -> At:
        """Add elements. Usage: store.add @ elem or store.add(to="parent") @ elem"""

        @At
        def _add(element, to=None):
            if isinstance(element, (list, tuple)):
                self @ Add(*element, to=to)
            else:
                self @ Add(element, to=to)

        return _add

    @property
    def upsert(self) -> At:
        """Upsert elements. Usage: store.upsert @ elem or store.upsert(to="parent") @ elem"""

        @At
        def _upsert(element, to=None):
            if isinstance(element, (list, tuple)):
                self @ Upsert(*element, to=to)
            else:
                self @ Upsert(element, to=to)

        return _upsert

    @property
    def remove(self) -> At:
        """Remove elements by key. Usage: store.remove @ "key" or store.remove @ ["k1", "k2"]"""

        @At
        def _remove(keys):
            if isinstance(keys, (list, tuple)):
                self @ Remove(*keys)
            else:
                self @ Remove(keys)

        return _remove
