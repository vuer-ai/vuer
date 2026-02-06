"""
SceneStore - A reactive scene graph store for managing 3D scene state.

This module provides a SceneStore class that maintains scene graph state
and synchronizes it with connected VuerSession clients.

Usage:
    from vuer import Vuer, VuerSession
    from vuer.rtc.scene_store import SceneStore
    from vuer.schemas import Box, Sphere

    app = Vuer()
    scene_store = SceneStore()

    @app.spawn(start=True)
    async def main(sess: VuerSession):
        async with scene_store.subscribe(sess):
            # Set initial scene
            await scene_store.set_scene(
                children=[Box(key="box-1", position=[0, 0, 0])]
            )

            while True:
                # Update scene reactively
                await scene_store.upsert(
                    Sphere(key="sphere-1", position=[1, 0, 0])
                )
                await asyncio.sleep(1)
"""

import asyncio
import copy
from contextlib import asynccontextmanager
from dataclasses import dataclass, field
from typing import (
    Any,
    Callable,
    Dict,
    List,
    Optional,
    Set,
    TYPE_CHECKING,
    Union,
)

if TYPE_CHECKING:
    from vuer.server import VuerSession
    from vuer.schemas import Element


# =============================================================================
# Node Types
# =============================================================================


@dataclass
class SceneNode:
    """
    A node in the scene graph.

    Attributes:
        key: Unique identifier for the node
        tag: Node type (e.g., "Box", "Sphere", "Group")
        children: Child nodes
        properties: Additional node properties
    """

    key: str
    tag: str = "Group"
    children: List["SceneNode"] = field(default_factory=list)
    properties: Dict[str, Any] = field(default_factory=dict)

    def to_dict(self) -> Dict[str, Any]:
        """Convert node to dictionary for serialization."""
        result = {
            "key": self.key,
            "tag": self.tag,
            **self.properties,
        }
        if self.children:
            result["children"] = [child.to_dict() for child in self.children]
        return result

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "SceneNode":
        """Create node from dictionary."""
        children_data = data.pop("children", [])
        key = data.pop("key", "")
        tag = data.pop("tag", "Group")
        children = [cls.from_dict(c) for c in children_data]
        return cls(key=key, tag=tag, children=children, properties=data)

    @classmethod
    def from_element(cls, element: "Element") -> "SceneNode":
        """Create node from a vuer Element schema."""
        data = element.serialize() if hasattr(element, "serialize") else dict(element)
        return cls.from_dict(data)


@dataclass
class SceneState:
    """
    The full scene state.

    Attributes:
        children: Main scene children
        bgChildren: Background children (e.g., lights, controls)
        htmlChildren: HTML overlay children
        rawChildren: Raw/unprocessed children
        position: Scene position
        rotation: Scene rotation
        scale: Scene scale
        up: Up vector
    """

    children: List[SceneNode] = field(default_factory=list)
    bgChildren: List[SceneNode] = field(default_factory=list)
    htmlChildren: List[SceneNode] = field(default_factory=list)
    rawChildren: List[SceneNode] = field(default_factory=list)
    position: List[float] = field(default_factory=lambda: [0, 0, 0])
    rotation: List[float] = field(default_factory=lambda: [0, 0, 0])
    scale: List[float] = field(default_factory=lambda: [1, 1, 1])
    up: List[float] = field(default_factory=lambda: [0, 1, 0])

    def to_dict(self) -> Dict[str, Any]:
        """Convert scene state to dictionary."""
        return {
            "tag": "Scene",
            "children": [c.to_dict() for c in self.children],
            "bgChildren": [c.to_dict() for c in self.bgChildren],
            "htmlChildren": [c.to_dict() for c in self.htmlChildren],
            "rawChildren": [c.to_dict() for c in self.rawChildren],
            "position": self.position,
            "rotation": self.rotation,
            "scale": self.scale,
            "up": self.up,
        }

    def copy(self) -> "SceneState":
        """Create a deep copy of the scene state."""
        return SceneState(
            children=[_copy_node(c) for c in self.children],
            bgChildren=[_copy_node(c) for c in self.bgChildren],
            htmlChildren=[_copy_node(c) for c in self.htmlChildren],
            rawChildren=[_copy_node(c) for c in self.rawChildren],
            position=self.position.copy(),
            rotation=self.rotation.copy(),
            scale=self.scale.copy(),
            up=self.up.copy(),
        )


def _copy_node(node: SceneNode) -> SceneNode:
    """Deep copy a scene node."""
    return SceneNode(
        key=node.key,
        tag=node.tag,
        children=[_copy_node(c) for c in node.children],
        properties=copy.deepcopy(node.properties),
    )


# =============================================================================
# Tree Operations
# =============================================================================


def find_by_key(
    node: Union[SceneNode, SceneState], key: str
) -> Optional[SceneNode]:
    """
    Find a node by key in the tree.

    Args:
        node: Root node or scene state to search
        key: Key to find

    Returns:
        The found node, or None if not found
    """
    if isinstance(node, SceneState):
        # Search all child arrays
        for child_list in [
            node.children,
            node.bgChildren,
            node.htmlChildren,
            node.rawChildren,
        ]:
            for child in child_list:
                result = find_by_key(child, key)
                if result is not None:
                    return result
        return None

    if node.key == key:
        return node

    for child in node.children:
        result = find_by_key(child, key)
        if result is not None:
            return result

    return None


def add_node(
    state: SceneState,
    node: SceneNode,
    to: Optional[str] = None,
) -> SceneState:
    """
    Add a node to the scene.

    Args:
        state: Current scene state
        node: Node to add
        to: Parent key to add to (None for root children)

    Returns:
        Updated scene state
    """
    new_state = state.copy()

    if to is None:
        new_state.children.append(_copy_node(node))
    else:
        parent = find_by_key(new_state, to)
        if parent is None:
            raise ValueError(f"Parent node not found: {to}")
        parent.children.append(_copy_node(node))

    return new_state


def remove_by_key(state: SceneState, key: str) -> SceneState:
    """
    Remove a node by key from the scene.

    Args:
        state: Current scene state
        key: Key of node to remove

    Returns:
        Updated scene state
    """
    new_state = state.copy()

    def remove_from_list(nodes: List[SceneNode]) -> List[SceneNode]:
        result = []
        for node in nodes:
            if node.key == key:
                continue
            node.children = remove_from_list(node.children)
            result.append(node)
        return result

    new_state.children = remove_from_list(new_state.children)
    new_state.bgChildren = remove_from_list(new_state.bgChildren)
    new_state.htmlChildren = remove_from_list(new_state.htmlChildren)
    new_state.rawChildren = remove_from_list(new_state.rawChildren)

    return new_state


def update_node(
    state: SceneState, key: str, props: Dict[str, Any]
) -> SceneState:
    """
    Update a node's properties by key.

    Args:
        state: Current scene state
        key: Key of node to update
        props: Properties to update

    Returns:
        Updated scene state
    """
    new_state = state.copy()
    node = find_by_key(new_state, key)

    if node is None:
        return new_state

    # Update properties
    for k, v in props.items():
        if k == "children":
            # Handle children update specially
            if isinstance(v, list):
                node.children = [
                    SceneNode.from_dict(c) if isinstance(c, dict) else c
                    for c in v
                ]
        elif k == "tag":
            node.tag = v
        else:
            node.properties[k] = v

    return new_state


def upsert_node(
    state: SceneState,
    node: SceneNode,
    to: Optional[str] = None,
) -> SceneState:
    """
    Update a node if it exists, otherwise add it.

    Args:
        state: Current scene state
        node: Node to upsert
        to: Parent key for insertion (if adding)

    Returns:
        Updated scene state
    """
    existing = find_by_key(state, node.key)

    if existing is not None:
        # Update existing node
        props = {"tag": node.tag, **node.properties}
        if node.children:
            props["children"] = [c.to_dict() for c in node.children]
        return update_node(state, node.key, props)
    else:
        # Add new node
        return add_node(state, node, to)


# =============================================================================
# Subscription Context
# =============================================================================


class SubscriptionContext:
    """
    Context manager for session subscription.

    Automatically unsubscribes when exiting to prevent memory leaks
    and errors from sending to disconnected sessions.
    """

    def __init__(self, store: "SceneStore", session: "VuerSession"):
        self.store = store
        self.session = session

    async def __aenter__(self) -> "SubscriptionContext":
        self.store._add_subscriber(self.session)
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb) -> None:
        self.store._remove_subscriber(self.session)
        return None


# =============================================================================
# Proxy Classes for @ Operator Support
# =============================================================================


class _UpsertProxy:
    """Proxy for scene_store.upsert @ element syntax."""

    def __init__(self, store: "SceneStore"):
        self._store = store

    def __matmul__(self, other):
        """Handle @ operator."""
        return self._store._upsert_sync(other)


class _AddProxy:
    """Proxy for scene_store.add @ element syntax."""

    def __init__(self, store: "SceneStore", to: Optional[str] = None):
        self._store = store
        self._to = to

    def __matmul__(self, other):
        """Handle @ operator."""
        return self._store._add_sync(other, self._to)

    def __call__(self, to: Optional[str] = None) -> "_AddProxy":
        """Allow scene_store.add(to="parent") @ element syntax."""
        return _AddProxy(self._store, to)


class _RemoveProxy:
    """Proxy for scene_store.remove @ key syntax."""

    def __init__(self, store: "SceneStore"):
        self._store = store

    def __matmul__(self, other):
        """Handle @ operator."""
        return self._store._remove_sync(other)


class _UpdateProxy:
    """Proxy for scene_store.update @ element syntax."""

    def __init__(self, store: "SceneStore"):
        self._store = store

    def __matmul__(self, other):
        """Handle @ operator."""
        return self._store._update_sync(other)


# =============================================================================
# SceneStore
# =============================================================================


class SceneStore:
    """
    A reactive scene graph store for managing 3D scene state.

    The SceneStore maintains scene state and synchronizes changes
    with all subscribed VuerSession clients.

    Important:
        After scene operations, you must yield control with ``await asyncio.sleep(0)``
        to allow messages to be sent to clients. Without this, the event loop won't
        have a chance to flush the websocket send queue.

    Example:
        scene_store = SceneStore()

        @app.spawn(start=True)
        async def main(sess: VuerSession):
            async with scene_store.subscribe(sess):
                await scene_store.set_scene(children=[Box(key="box")])
                await asyncio.sleep(0)  # Required to flush messages

                while True:
                    await scene_store.upsert(Sphere(key="sphere"))
                    await asyncio.sleep(1)
    """

    def __init__(self):
        """Initialize an empty scene store."""
        self._state = SceneState()
        self._subscribers: Set["VuerSession"] = set()
        self._lock = asyncio.Lock()

    # =========================================================================
    # Properties
    # =========================================================================

    @property
    def snapshot(self) -> SceneState:
        """
        Get a copy of the current scene state.

        Returns:
            A deep copy of the current scene state
        """
        return self._state.copy()

    @property
    def upsert(self) -> _UpsertProxy:
        """
        Proxy for upsert operations with @ operator support.

        Usage:
            await scene_store.upsert @ Box(key="box")
            await scene_store.upsert @ [Box(key="b1"), Sphere(key="s1")]
        """
        return _UpsertProxy(self)

    @property
    def add(self) -> _AddProxy:
        """
        Proxy for add operations with @ operator support.

        Usage:
            await scene_store.add @ Box(key="box")
            await scene_store.add(to="parent") @ Box(key="child")
        """
        return _AddProxy(self)

    @property
    def remove(self) -> _RemoveProxy:
        """
        Proxy for remove operations with @ operator support.

        Usage:
            await scene_store.remove @ "box-key"
            await scene_store.remove @ ["key1", "key2"]
        """
        return _RemoveProxy(self)

    @property
    def update(self) -> _UpdateProxy:
        """
        Proxy for update operations with @ operator support.

        Usage:
            await scene_store.update @ {"key": "box", "position": [1, 0, 0]}
        """
        return _UpdateProxy(self)

    # =========================================================================
    # Subscription Management
    # =========================================================================

    def subscribe(self, session: "VuerSession") -> SubscriptionContext:
        """
        Subscribe a session to receive scene updates.

        Use as an async context manager to auto-unsubscribe:

            async with scene_store.subscribe(sess):
                # session receives updates here
                ...
            # session automatically unsubscribed

        Args:
            session: The VuerSession to subscribe

        Returns:
            SubscriptionContext for use with async with
        """
        return SubscriptionContext(self, session)

    def _add_subscriber(self, session: "VuerSession") -> None:
        """Add a session to subscribers."""
        self._subscribers.add(session)

    def _remove_subscriber(self, session: "VuerSession") -> None:
        """Remove a session from subscribers."""
        self._subscribers.discard(session)

    # =========================================================================
    # Async Operations
    # =========================================================================

    async def set_scene(
        self,
        children: Optional[List["Element"]] = None,
        bgChildren: Optional[List["Element"]] = None,
        htmlChildren: Optional[List["Element"]] = None,
        rawChildren: Optional[List["Element"]] = None,
        position: Optional[List[float]] = None,
        rotation: Optional[List[float]] = None,
        scale: Optional[List[float]] = None,
        up: Optional[List[float]] = None,
    ) -> None:
        """
        Set the entire scene state.

        Args:
            children: Main scene children
            bgChildren: Background children
            htmlChildren: HTML overlay children
            rawChildren: Raw children
            position: Scene position
            rotation: Scene rotation
            scale: Scene scale
            up: Up vector
        """
        async with self._lock:
            self._state = SceneState(
                children=[
                    self._to_node(c) for c in (children or [])
                ],
                bgChildren=[
                    self._to_node(c) for c in (bgChildren or [])
                ],
                htmlChildren=[
                    self._to_node(c) for c in (htmlChildren or [])
                ],
                rawChildren=[
                    self._to_node(c) for c in (rawChildren or [])
                ],
                position=position or [0, 0, 0],
                rotation=rotation or [0, 0, 0],
                scale=scale or [1, 1, 1],
                up=up or [0, 1, 0],
            )

        await self._notify_subscribers("SET")
        await asyncio.sleep(0)

    async def upsert_async(
        self,
        *nodes: "Element",
        to: Optional[str] = None,
    ) -> None:
        """
        Upsert one or more nodes (update if exists, add if not).

        Args:
            *nodes: Nodes to upsert
            to: Parent key for insertion (if adding new nodes)
        """
        async with self._lock:
            for node in nodes:
                scene_node = self._to_node(node)
                self._state = upsert_node(self._state, scene_node, to)

        await self._notify_subscribers("UPSERT", nodes, to)
        await asyncio.sleep(0)

    async def add_async(
        self,
        *nodes: "Element",
        to: Optional[str] = None,
    ) -> None:
        """
        Add one or more nodes to the scene.

        Args:
            *nodes: Nodes to add
            to: Parent key to add to (None for root)
        """
        async with self._lock:
            for node in nodes:
                scene_node = self._to_node(node)
                self._state = add_node(self._state, scene_node, to)

        await self._notify_subscribers("ADD", nodes, to)
        await asyncio.sleep(0)

    async def update_async(
        self,
        *updates: Union[Dict[str, Any], "Element"],
    ) -> None:
        """
        Update one or more existing nodes.

        Args:
            *updates: Dicts with 'key' and properties to update, or Elements
        """
        async with self._lock:
            for update in updates:
                if hasattr(update, "serialize"):
                    data = update.serialize()
                elif isinstance(update, dict):
                    data = update
                else:
                    data = dict(update)

                key = data.pop("key", None)
                if key is None:
                    continue
                self._state = update_node(self._state, key, data)

        await self._notify_subscribers("UPDATE", updates)
        await asyncio.sleep(0)

    async def remove_async(
        self,
        *keys: str,
    ) -> None:
        """
        Remove nodes by key.

        Args:
            *keys: Keys of nodes to remove
        """
        async with self._lock:
            for key in keys:
                self._state = remove_by_key(self._state, key)

        await self._notify_subscribers("REMOVE", keys)
        await asyncio.sleep(0)

    # =========================================================================
    # Sync Operations (for @ operator)
    # =========================================================================

    def _upsert_sync(
        self, nodes: Union["Element", List["Element"]]
    ) -> "asyncio.Task":
        """Sync wrapper for upsert that returns a task."""
        if not isinstance(nodes, (list, tuple)):
            nodes = [nodes]
        return asyncio.create_task(self.upsert_async(*nodes))

    def _add_sync(
        self,
        nodes: Union["Element", List["Element"]],
        to: Optional[str] = None,
    ) -> "asyncio.Task":
        """Sync wrapper for add that returns a task."""
        if not isinstance(nodes, (list, tuple)):
            nodes = [nodes]
        return asyncio.create_task(self.add_async(*nodes, to=to))

    def _update_sync(
        self, updates: Union[Dict, List[Dict], "Element", List["Element"]]
    ) -> "asyncio.Task":
        """Sync wrapper for update that returns a task."""
        if not isinstance(updates, (list, tuple)):
            updates = [updates]
        return asyncio.create_task(self.update_async(*updates))

    def _remove_sync(
        self, keys: Union[str, List[str]]
    ) -> "asyncio.Task":
        """Sync wrapper for remove that returns a task."""
        if isinstance(keys, str):
            keys = [keys]
        return asyncio.create_task(self.remove_async(*keys))

    # =========================================================================
    # Helpers
    # =========================================================================

    def _to_node(self, element: Union["Element", Dict, SceneNode]) -> SceneNode:
        """Convert an element to a SceneNode."""
        if isinstance(element, SceneNode):
            return element
        if hasattr(element, "_serialize"):
            data = element._serialize()
        elif isinstance(element, dict):
            data = element
        else:
            data = dict(element)
        return SceneNode.from_dict(data)

    async def _notify_subscribers(
        self,
        event_type: str,
        data: Any = None,
        to: Optional[str] = None,
    ) -> None:
        """
        Notify all subscribers of a state change.

        Args:
            event_type: Type of event (SET, ADD, UPDATE, UPSERT, REMOVE)
            data: Event data
            to: Parent key for ADD/UPSERT operations
        """
        from vuer.events import Set, Add, Update, Upsert, Remove
        from vuer.schemas import Scene

        dead_sessions = []

        for session in self._subscribers:
            try:
                if event_type == "SET":
                    # Send full scene
                    scene_dict = self._state.to_dict()
                    # Send scene dict directly via Set event
                    # Add Scene tag for client to recognize it
                    scene_dict["tag"] = "Scene"
                    session @ Set(scene_dict)
                elif event_type == "ADD":
                    elements = [
                        self._node_to_element(self._to_node(n)) for n in data
                    ]
                    session.add(*elements, to=to)
                elif event_type == "UPDATE":
                    updates = []
                    for u in data:
                        if hasattr(u, "serialize"):
                            updates.append(u)
                        else:
                            updates.append(u)
                    session.update(*updates)
                elif event_type == "UPSERT":
                    elements = [
                        self._node_to_element(self._to_node(n)) for n in data
                    ]
                    session.upsert(*elements, to=to)
                elif event_type == "REMOVE":
                    session.remove(*data)
                # Yield control to allow message to be sent
                await asyncio.sleep(0)
            except Exception as e:
                # Session likely disconnected
                dead_sessions.append(session)

        # Clean up dead sessions
        for session in dead_sessions:
            self._subscribers.discard(session)

    def _node_to_element(self, node: SceneNode) -> Dict[str, Any]:
        """Convert a SceneNode back to an element dict."""
        return node.to_dict()

    # =========================================================================
    # Query Operations
    # =========================================================================

    def get_node(self, key: str) -> Optional[SceneNode]:
        """
        Find a node by key.

        Args:
            key: Key of node to find

        Returns:
            The node if found, None otherwise
        """
        return find_by_key(self._state, key)

    def has_node(self, key: str) -> bool:
        """
        Check if a node exists.

        Args:
            key: Key to check

        Returns:
            True if node exists
        """
        return find_by_key(self._state, key) is not None
