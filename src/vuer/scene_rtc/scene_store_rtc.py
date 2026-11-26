"""
SceneStoreRTC - Python-side CRDT server using vuer_rtc as the CRDT engine.

Uses ``vuer_rtc.GraphStore`` as the **single source of truth** for all CRDT
state (graph, journal, snapshot, clocks).  This module only adds the
Vuer-specific integration layer: VuerSession subscription management and
event broadcasting.

Usage:
    from vuer import Vuer, VuerSession
    from vuer.schemas import Box, Sphere
    from vuer.scene_rtc import SceneStoreRTC

    app = Vuer()
    store = SceneStoreRTC(app)

    store.insert_node(Box(key="cube", args=[1, 1, 1], position=[0, 0.5, 0]))

    @app.spawn(start=True)
    async def main(session: VuerSession):
        async with store.subscribe(session):
            while True:
                store.set_property("cube", "position", "vector3.set", [x, y, z])
                await asyncio.sleep(0.03)
"""

from typing import Any, Callable, Dict, List, Optional, Union
from uuid import uuid4

from vuer_rtc import (
    CRDTMessage,
    GraphStore,
    JournalEntry,
    SceneGraph,
    SceneNode,
    Snapshot,
    createEmptyGraph,
    CRDTEnvelope,
)

from vuer.events import (
    RTC,
    ClientEvent,
    CRDTAckEvent,
    CRDTEvent,
)
from vuer.schemas import Element


ChangeCallback = Callable[[SceneGraph], None]


def _create_initial_snapshot() -> Snapshot:
    """Create an initial snapshot with a root 'scene' node."""
    graph = createEmptyGraph()
    graph.nodes["scene"] = SceneNode(
        key="scene", tag="Scene", name="scene", _crdt=CRDTEnvelope(),
    )
    graph.rootKey = "scene"
    return Snapshot(graph=graph, vectorClock={}, lt=0, journalIndex=0)


def _element_to_value(element: Element) -> Dict[str, Any]:
    """Convert a schema Element to a node.insert value dict.

    Element._serialize() returns ``{tag, key, ...properties}`` which is
    exactly the ``value`` field of a ``node.insert`` operation.  We just
    ensure ``name`` is present (vuer_rtc requires it).
    """
    d = element._serialize()
    d.setdefault("name", d.get("key", ""))
    return d


class RTCSubscription:
    """Context manager for CRDT session subscription.

    Usage::

        async with store.subscribe(session):
            ...
        # auto-unsubscribed on exit
    """

    def __init__(self, store: "SceneStoreRTC", session):
        self._store = store
        self._session = session

    async def __aenter__(self):
        self._store._subscribe(self._session)
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        self._store._unsubscribe(self._session)
        return None


class SceneStoreRTC:
    """
    Python-side CRDT server integrated with VuerSession.

    ``vuer_rtc.GraphStore`` is the single source of truth for all CRDT
    state.  This class only adds subscriber management and broadcasting.
    """

    def __init__(self, app, session_id: Optional[str] = None):
        self._app = app
        self._session_id = session_id or f"python-server-{uuid4().hex[:8]}"

        # Single source of truth
        self._store = GraphStore(
            client=self._session_id,
            on_send=self._on_python_commit,
            initial_snapshot=_create_initial_snapshot(),
        )

        # Subscribed VuerSessions (ws_id -> VuerSession)
        self._subscribers: Dict[Any, Any] = {}

        # Change subscribers
        self._change_callbacks: List[ChangeCallback] = []

        # Register handler for CRDT events from browser clients
        app.add_handler(RTC, self._handle_crdt_op)

    # =========================================================================
    # State access — all delegated to GraphStore
    # =========================================================================

    @property
    def graph(self) -> SceneGraph:
        return self._store.getState().graph

    @property
    def snapshot(self) -> Snapshot:
        return self._store.getState().snapshot

    @property
    def journal(self) -> List[JournalEntry]:
        return self._store.getState().journal

    @property
    def session_id(self) -> str:
        return self._session_id

    def get_node(self, key: str) -> Optional[SceneNode]:
        return self._store.getState().graph.nodes.get(key)

    # =========================================================================
    # Session Subscription
    # =========================================================================

    def subscribe(self, session) -> RTCSubscription:
        """
        Subscribe a VuerSession to receive CRDT updates.

        Returns a context manager that auto-unsubscribes on exit::

            async with store.subscribe(session):
                ...
            # auto-unsubscribed
        """
        self._subscribe(session)
        return RTCSubscription(self, session)

    def unsubscribe(self, session) -> None:
        self._unsubscribe(session)

    def _subscribe(self, session) -> None:
        ws_id = session.CURRENT_WS_ID
        self._subscribers[ws_id] = session

        state = self._store.getState()
        state_event = CRDTEvent(data={
            "mtype": "state",
            "snapshot": state.snapshot.toDict(),
            "journal": [entry.msg.toDict() for entry in state.journal],
        })
        session.send(state_event)

    def _unsubscribe(self, session) -> None:
        ws_id = session.CURRENT_WS_ID
        self._subscribers.pop(ws_id, None)

    # =========================================================================
    # Python-side Editing API
    # =========================================================================

    def edit(self, op: Dict[str, Any]) -> None:
        """Buffer an operation (plain dict with ``ot`` field) for the next commit."""
        self._store.edit(op)

    def edit_batch(self, ops: List[Dict[str, Any]]) -> None:
        """Buffer multiple operations for the next commit."""
        for op in ops:
            self._store.edit(op)

    def commit(self, description: Optional[str] = None) -> Optional[CRDTMessage]:
        """Commit buffered operations. Broadcasts to all subscribers via on_send."""
        return self._store.commit(description)

    # =========================================================================
    # Convenience Methods — Node Operations
    # =========================================================================

    def insert_node(
        self, element: Element, parent_key: str = "scene",
    ) -> CRDTMessage:
        """Insert a schema Element as a new node and commit.

        Example::

            store.insert_node(Box(key="cube", args=[1,1,1], position=[0,0.5,0]))
            store.insert_node(Sphere(key="ball"), parent_key="group-1")
        """
        self.edit({
            "key": parent_key,
            "ot": "node.insert",
            "path": "children",
            "value": _element_to_value(element),
        })
        return self.commit()

    def upsert_node(
        self, element: Element, parent_key: str = "scene",
    ) -> CRDTMessage:
        """Insert a node if it doesn't exist, or merge properties if it does."""
        self.edit({
            "key": parent_key,
            "ot": "node.upsert",
            "path": "children",
            "value": _element_to_value(element),
        })
        return self.commit()

    def inset_node(
        self, element: Element, parent_key: str = "scene",
    ) -> CRDTMessage:
        """Insert a node if it doesn't exist, or set (overwrite) if it does."""
        self.edit({
            "key": parent_key,
            "ot": "node.inset",
            "path": "children",
            "value": _element_to_value(element),
        })
        return self.commit()

    def remove_node(self, key: str, parent_key: str = "scene") -> CRDTMessage:
        """Tombstone-delete a node and commit."""
        self.edit({"key": parent_key, "ot": "node.remove", "path": "children", "value": key})
        return self.commit()

    def move_node(
        self, key: str, old_parent: str, new_parent: str
    ) -> CRDTMessage:
        """Move a node from one parent to another and commit."""
        self.edit({
            "key": old_parent,
            "ot": "node.move",
            "path": "children",
            "value": {"nodeKey": key, "newParent": new_parent},
        })
        return self.commit()

    def set_property(
        self, key: str, path: str, otype: str, value: Any
    ) -> CRDTMessage:
        """Set a property on a node and commit."""
        self.edit({"key": key, "ot": otype, "path": path, "value": value})
        return self.commit()

    # =========================================================================
    # Change Subscriptions
    # =========================================================================

    def on_change(self, callback: ChangeCallback) -> Callable[[], None]:
        self._change_callbacks.append(callback)

        def unsubscribe():
            if callback in self._change_callbacks:
                self._change_callbacks.remove(callback)

        return unsubscribe

    def _notify_change(self) -> None:
        for callback in self._change_callbacks:
            callback(self._store.getState().graph)

    # =========================================================================
    # Compaction — delegated to GraphStore
    # =========================================================================

    def compact(self) -> Snapshot:
        self._store.compact()
        return self._store.getState().snapshot

    # =========================================================================
    # Client CRDT Event Handler
    # =========================================================================

    async def _handle_crdt_op(self, event: ClientEvent, session) -> None:
        """Handle an RTC event from a browser client."""
        msg_dict = event.value.get("msg", {})
        if not msg_dict:
            return

        sender_ws_id = session.CURRENT_WS_ID
        msg = CRDTMessage.fromDict(msg_dict)

        # GraphStore.receive() handles: dedup, meta ops, clock merge, graph rebuild
        self._store.receive(msg)

        self._notify_change()

        # Ack sender
        session.send(CRDTAckEvent(msg_id=msg.id))

        # Broadcast to other subscribers
        broadcast_event = CRDTEvent(data={
            "mtype": "broadcast",
            "msg": msg.toDict(),
        })
        self._broadcast_except(sender_ws_id, broadcast_event)

    # =========================================================================
    # Python-side Commit Callback
    # =========================================================================

    def _on_python_commit(self, msg: CRDTMessage) -> None:
        """Called by GraphStore when Python code commits."""
        # Server is the authority — self-ack so entries are compactable
        self._store.ack(msg.id)

        self._notify_change()

        op_event = CRDTEvent(data={
            "mtype": "crdt",
            "msg": msg.toDict(),
        })
        self._broadcast_all(op_event)

    # =========================================================================
    # Broadcasting
    # =========================================================================

    def _broadcast_all(self, event) -> None:
        disconnected = []
        for ws_id, session in self._subscribers.items():
            try:
                session.send(event)
            except Exception:
                disconnected.append(ws_id)
        for ws_id in disconnected:
            self._subscribers.pop(ws_id, None)

    def _broadcast_except(self, exclude_ws_id, event) -> None:
        disconnected = []
        for ws_id, session in self._subscribers.items():
            if ws_id == exclude_ws_id:
                continue
            try:
                session.send(event)
            except Exception:
                disconnected.append(ws_id)
        for ws_id in disconnected:
            self._subscribers.pop(ws_id, None)
