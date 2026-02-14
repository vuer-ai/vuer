"""
SceneStoreRTC - Python-side CRDT server integrated with VuerSession.

This module provides a CRDT-based server that integrates with Vuer's existing
WebSocket infrastructure via VuerSession. Instead of a separate /rtc endpoint,
it hooks into the standard Vuer event system.

Key features:
- Multi-user shared state via CRDT operations
- Browser refresh recovers full state (snapshot + journal sent on subscribe)
- Python code can programmatically modify the scene via edit()/commit()
- Bidirectional sync: Python edits broadcast to all sessions, client CRDT_OP
  events are applied to the store and broadcast to other sessions

Event types used:
- CRDT_STATE (Server -> Client): full state sent on subscribe
- CRDT_OP (Server -> Client): CRDT message with operations
- CRDT_OP (Client -> Server): CRDT message from browser
- CRDT_ACK (Server -> Client): acknowledgment of a client message

Usage:
    from vuer import Vuer, VuerSession
    from vuer.rtc.scene_store_rtc import SceneStoreRTC
    from vuer.rtc import Operation, OType

    app = Vuer()
    store = SceneStoreRTC(app)

    # Pre-populate
    store.insert_node("cube", "Mesh", parent_key="scene")

    @app.spawn(start=True)
    async def main(session: VuerSession):
        store.subscribe(session)  # sends full state, registers for updates

        # Python edits broadcast to all subscribed sessions
        while True:
            store.set_property("cube", "position", "vector3.set", [x, y, z])
            await asyncio.sleep(0.03)
"""

import asyncio
import time
from typing import Any, Callable, Dict, List, Optional, Set
from uuid import uuid4

from vuer.events import (
    CRDT_ETYPE,
    ClientEvent,
    CRDTAckEvent,
    CRDTBroadcastEvent,
    CRDTOpEvent,
    CRDTStateEvent,
)
from vuer.rtc.operations.dispatcher import apply_message_mut, rebuild_graph
from vuer.rtc.store import GraphStore
from vuer.rtc.types import (
    CRDTMessage,
    JournalEntry,
    Operation,
    OType,
    SceneGraph,
    SceneNode,
    Snapshot,
    VectorClock,
    create_empty_graph,
    create_initial_snapshot,
    increment_clock,
    merge_clocks,
)


ChangeCallback = Callable[[SceneGraph], None]


class RTCSubscription:
    """Context manager for CRDT session subscription.

    Usage::

        async with store.subscribe(session):
            # session receives CRDT updates here
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

    Maintains an authoritative CRDT scene graph and synchronizes it with
    all subscribed VuerSession clients. Python code modifies the scene
    via edit()/commit(), and changes are broadcast to all subscribers.
    Client CRDT_OP events are applied to the store and forwarded to
    other subscribers.
    """

    def __init__(self, app, session_id: Optional[str] = None):
        """
        Create a SceneStoreRTC and register CRDT event handlers on the app.

        Args:
            app: The Vuer app instance.
            session_id: Session ID for Python-side edits (auto-generated if not provided).
        """
        self._app = app
        self._session_id = session_id or f"python-server-{uuid4().hex[:8]}"

        # Authoritative state
        self._graph: SceneGraph = create_empty_graph()
        self._journal: List[JournalEntry] = []
        self._processed_ids: Set[str] = set()
        self._snapshot: Snapshot = create_initial_snapshot()
        self._vector_clock: VectorClock = {}
        self._lamport_time: int = 0

        # Subscribed VuerSessions (ws_id -> VuerSession)
        self._subscribers: Dict[Any, Any] = {}

        # Internal GraphStore for Python-side edits
        self._store = GraphStore(
            session_id=self._session_id,
            on_send=self._on_python_commit,
        )

        # Change subscribers
        self._change_callbacks: List[ChangeCallback] = []

        # Register handler for CRDT events from browser clients.
        app.add_handler(CRDT_ETYPE, self._handle_crdt_op)

    # =========================================================================
    # Properties
    # =========================================================================

    @property
    def graph(self) -> SceneGraph:
        """Get the current authoritative scene graph."""
        return self._graph

    @property
    def snapshot(self) -> Snapshot:
        """Get the current snapshot."""
        return self._snapshot

    @property
    def journal(self) -> List[JournalEntry]:
        """Get the current journal."""
        return self._journal

    @property
    def session_id(self) -> str:
        """Get the Python-side session ID."""
        return self._session_id

    def get_node(self, key: str) -> Optional[SceneNode]:
        """Get a node from the current scene graph by key."""
        return self._graph.get_node(key)

    # =========================================================================
    # Session Subscription
    # =========================================================================

    def subscribe(self, session) -> RTCSubscription:
        """
        Subscribe a VuerSession to receive CRDT updates.

        Returns a context manager that auto-unsubscribes on exit::

            async with store.subscribe(session):
                # session receives updates
                ...
            # auto-unsubscribed

        Can also be used without context manager for manual control::

            store.subscribe(session)  # subscribes immediately
            # ... later ...
            store.unsubscribe(session)

        Args:
            session: A VuerSession instance.

        Returns:
            RTCSubscription context manager.
        """
        self._subscribe(session)
        return RTCSubscription(self, session)

    def unsubscribe(self, session) -> None:
        """
        Manually unsubscribe a VuerSession from CRDT updates.

        Args:
            session: A VuerSession instance.
        """
        self._unsubscribe(session)

    def _subscribe(self, session) -> None:
        """Internal: register session and send current state."""
        ws_id = session.CURRENT_WS_ID
        self._subscribers[ws_id] = session

        # Send current state to the new subscriber
        state_event = CRDTStateEvent(
            snapshot=self._snapshot,
            journal=[entry.msg for entry in self._journal],
        )
        session.send(state_event)

    def _unsubscribe(self, session) -> None:
        """Internal: remove session from subscribers."""
        ws_id = session.CURRENT_WS_ID
        self._subscribers.pop(ws_id, None)

    # =========================================================================
    # Python-side Editing API
    # =========================================================================

    def edit(self, op: Operation) -> None:
        """
        Buffer an operation for the next commit.

        Args:
            op: The operation to buffer.
        """
        self._store.edit(op)

    def edit_batch(self, ops: List[Operation]) -> None:
        """
        Buffer multiple operations for the next commit.

        Args:
            ops: List of operations to buffer.
        """
        self._store.edit_batch(ops)

    def commit(self, description: Optional[str] = None) -> Optional[CRDTMessage]:
        """
        Commit buffered operations as a CRDT message.

        Creates a CRDTMessage, applies it to the authoritative state,
        and broadcasts to all subscribed sessions.

        Args:
            description: Optional description for the commit.

        Returns:
            The committed CRDTMessage, or None if no edits to commit.
        """
        return self._store.commit(description)

    # =========================================================================
    # Convenience Methods
    # =========================================================================

    def insert_node(
        self, key: str, tag: str, parent_key: str = "scene", **properties
    ) -> CRDTMessage:
        """
        Insert a node and commit immediately.

        Args:
            key: Unique node key.
            tag: Node type (e.g., "Mesh", "Group").
            parent_key: Parent node key (default: "scene").
            **properties: Initial properties as a dict value.

        Returns:
            The committed CRDTMessage.
        """
        value = properties if properties else None
        self.edit(
            Operation(
                key=key,
                otype=OType.NODE_INSERT.value,
                path="",
                tag=tag,
                parent_key=parent_key,
                value=value,
            )
        )
        return self.commit()

    def remove_node(self, key: str) -> CRDTMessage:
        """
        Remove a node and commit immediately.

        Args:
            key: Key of the node to remove.

        Returns:
            The committed CRDTMessage.
        """
        self.edit(
            Operation(
                key=key,
                otype=OType.NODE_REMOVE.value,
                path="",
            )
        )
        return self.commit()

    def set_property(
        self, key: str, path: str, otype: str, value: Any
    ) -> CRDTMessage:
        """
        Set a property on a node and commit immediately.

        Args:
            key: Node key.
            path: Property path (e.g., "position").
            otype: Operation type (e.g., "vector3.set").
            value: Property value.

        Returns:
            The committed CRDTMessage.
        """
        self.edit(
            Operation(
                key=key,
                otype=otype,
                path=path,
                value=value,
            )
        )
        return self.commit()

    # =========================================================================
    # Change Subscriptions
    # =========================================================================

    def on_change(self, callback: ChangeCallback) -> Callable[[], None]:
        """
        Subscribe to graph changes from any source (Python or browser).

        Args:
            callback: Called with the current SceneGraph when it changes.

        Returns:
            Unsubscribe function.
        """
        self._change_callbacks.append(callback)

        def unsubscribe():
            if callback in self._change_callbacks:
                self._change_callbacks.remove(callback)

        return unsubscribe

    def _notify_change(self) -> None:
        """Notify all change subscribers."""
        for callback in self._change_callbacks:
            callback(self._graph)

    # =========================================================================
    # Compaction
    # =========================================================================

    def compact(self) -> Snapshot:
        """
        Compact acknowledged journal entries into the snapshot.

        Returns:
            The new snapshot.
        """
        compactable_count = 0
        for entry in self._journal:
            if entry.ack and entry.deleted_at is None:
                compactable_count += 1
            else:
                break

        if compactable_count == 0:
            return self._snapshot

        entries_to_compact = self._journal[:compactable_count]
        new_graph = rebuild_graph(
            snapshot_graph=self._snapshot.graph,
            journal_entries=entries_to_compact,
        )

        new_clock = self._snapshot.vector_clock.copy()
        new_lamport = self._snapshot.lamport_time
        for entry in entries_to_compact:
            new_clock = merge_clocks(new_clock, entry.msg.clock)
            new_lamport = max(new_lamport, entry.msg.lamport_time)

        self._snapshot = Snapshot(
            graph=new_graph,
            vector_clock=new_clock,
            lamport_time=new_lamport,
            journal_index=self._snapshot.journal_index + compactable_count,
        )

        self._journal = self._journal[compactable_count:]
        return self._snapshot

    # =========================================================================
    # Client CRDT Event Handler
    # =========================================================================

    async def _handle_crdt_op(self, event: ClientEvent, session) -> None:
        """
        Handle a CRDT_OP event from a browser client.

        The browser sends::

            {etype: "CRDT_OP", value: {mtype: "op", msg: {id: "...", ops: [...]}}}

        Applies the message to authoritative state, acks the sender,
        and broadcasts to other subscribers.
        """
        msg_dict = event.value.get("msg", {})
        if not msg_dict:
            return

        sender_ws_id = session.CURRENT_WS_ID
        msg_id = msg_dict.get("id")

        # Dedup
        if msg_id in self._processed_ids:
            return
        self._processed_ids.add(msg_id)

        # Parse
        msg = CRDTMessage.from_dict(msg_dict)

        # Handle undo/redo meta operations
        for op in msg.ops:
            if op.otype == OType.META_UNDO.value and op.target_msg_id:
                for entry in self._journal:
                    if entry.msg.id == op.target_msg_id:
                        entry.deleted_at = time.time() * 1000
                        break
            elif op.otype == OType.META_REDO.value and op.target_msg_id:
                for entry in self._journal:
                    if entry.msg.id == op.target_msg_id:
                        entry.deleted_at = None
                        break

        # Append to journal
        entry = JournalEntry(msg=msg, ack=True)
        self._journal.append(entry)

        # Apply to graph (rebuild if meta ops, otherwise direct apply)
        has_meta = any(op.otype.startswith("meta.") for op in msg.ops)
        if has_meta:
            self._graph = rebuild_graph(
                snapshot_graph=self._snapshot.graph,
                journal_entries=self._journal,
            )
        else:
            apply_message_mut(self._graph, msg)

        # Update clocks
        self._vector_clock = merge_clocks(self._vector_clock, msg.clock)
        self._lamport_time = max(self._lamport_time, msg.lamport_time)

        # Keep internal GraphStore in sync
        self._store.receive(msg)

        # Notify change subscribers
        self._notify_change()

        # Ack sender
        session.send(CRDTAckEvent(msg_id=msg_id))

        # Broadcast to other subscribers (forwarded from client → "broadcast")
        self._broadcast_except(sender_ws_id, CRDTBroadcastEvent(msg=msg))

    # =========================================================================
    # Python-side Commit Callback
    # =========================================================================

    def _on_python_commit(self, msg: CRDTMessage) -> None:
        """
        Called by the internal GraphStore when Python code commits.

        Applies the message to authoritative state and broadcasts to all
        subscribed sessions.
        """
        msg_id = msg.id

        if msg_id in self._processed_ids:
            return
        self._processed_ids.add(msg_id)

        # Append to journal
        entry = JournalEntry(msg=msg, ack=True)
        self._journal.append(entry)

        # Apply to authoritative graph
        apply_message_mut(self._graph, msg)

        # Update clocks
        self._vector_clock = merge_clocks(self._vector_clock, msg.clock)
        self._lamport_time = max(self._lamport_time, msg.lamport_time)

        # Notify change subscribers
        self._notify_change()

        # Broadcast to all subscribed sessions (Python-originated → "crdt")
        self._broadcast_all(CRDTOpEvent(msg=msg))

    # =========================================================================
    # Broadcasting
    # =========================================================================

    def _broadcast_all(self, event) -> None:
        """Send an event to all subscribed sessions."""
        disconnected = []
        for ws_id, session in self._subscribers.items():
            try:
                session.send(event)
            except Exception:
                disconnected.append(ws_id)
        for ws_id in disconnected:
            self._subscribers.pop(ws_id, None)

    def _broadcast_except(self, exclude_ws_id, event) -> None:
        """Send an event to all subscribed sessions except one."""
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
