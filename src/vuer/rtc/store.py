"""
GraphStore - High-level API for managing CRDT-based scene graph state.

This module provides the main interface for working with the data store,
matching the TypeScript createGraph() API.

Usage:
    from vuer.rtc import create_graph

    store = create_graph(
        session_id="my-session",
        on_send=lambda msg: websocket.send(msg.to_dict()),
    )

    # Edit operations (buffered)
    store.edit(Operation(key="cube", otype="vector3.add", path="position", value=[1, 0, 0]))

    # Commit edits as a message
    msg = store.commit()

    # Receive remote messages
    store.receive(incoming_message)

    # Undo/redo
    store.undo()
    store.redo()

    # Get current state
    state = store.get_state()
    graph = state.graph
"""

import time
from typing import Callable, List, Optional, TypeVar

from vuer.rtc.types import (
    ClientState,
    CRDTMessage,
    EditBuffer,
    JournalEntry,
    Operation,
    SceneGraph,
    Snapshot,
    VectorClock,
    OType,
    create_empty_graph,
    create_initial_snapshot,
    create_initial_state,
    generate_message_id,
    increment_clock,
    merge_clocks,
)
from vuer.rtc.operations.dispatcher import (
    apply_message_mut,
    apply_operation,
    OperationMeta,
    rebuild_graph,
)


# Type for state change callbacks
StateChangeCallback = Callable[[ClientState], None]
SendCallback = Callable[[CRDTMessage], None]


class GraphStore:
    """
    Main store for managing CRDT-based scene graph state.

    This class provides the high-level API for working with the data store:
    - edit(): Add uncommitted operations
    - commit(): Commit edits as a message
    - receive(): Process received messages from server
    - ack(): Mark message as acknowledged
    - undo()/redo(): Undo/redo operations
    - compact(): Create snapshot from acknowledged entries
    - get_state(): Get current state
    - subscribe(): Subscribe to state changes
    """

    def __init__(
        self,
        session_id: str,
        on_send: Optional[SendCallback] = None,
        on_state_change: Optional[StateChangeCallback] = None,
        initial_snapshot: Optional[Snapshot] = None,
    ):
        """
        Create a new GraphStore.

        Args:
            session_id: Unique identifier for this session
            on_send: Callback invoked when a message should be sent to server
            on_state_change: Callback invoked when state changes
            initial_snapshot: Optional snapshot to restore from
        """
        self._session_id = session_id
        self._on_send = on_send
        self._subscribers: List[StateChangeCallback] = []
        if on_state_change:
            self._subscribers.append(on_state_change)

        # Initialize state
        self._state = create_initial_state(session_id, initial_snapshot)
        self._message_sequence = 0

    def get_state(self) -> ClientState:
        """Get the current client state."""
        return self._state

    @property
    def graph(self) -> SceneGraph:
        """Get the current scene graph."""
        return self._state.graph

    @property
    def session_id(self) -> str:
        """Get the session ID."""
        return self._session_id

    def subscribe(self, callback: StateChangeCallback) -> Callable[[], None]:
        """
        Subscribe to state changes.

        Args:
            callback: Function called with new state on each change

        Returns:
            Unsubscribe function
        """
        self._subscribers.append(callback)

        def unsubscribe():
            if callback in self._subscribers:
                self._subscribers.remove(callback)

        return unsubscribe

    def _notify_subscribers(self) -> None:
        """Notify all subscribers of state change."""
        for callback in self._subscribers:
            callback(self._state)

    # =========================================================================
    # Edit Operations
    # =========================================================================

    def edit(self, op: Operation) -> None:
        """
        Add an uncommitted operation to the edit buffer.

        Operations are buffered and not immediately applied. Call commit()
        to apply them and create a message.

        Args:
            op: The operation to add
        """
        # Save starting graph state if this is the first edit
        if self._state.edits.is_empty():
            self._state.edits.start_graph = self._state.graph.copy()

        # Add operation to buffer
        self._state.edits.add(op)

        # Apply operation to current graph (preview)
        meta = OperationMeta(
            lamport_time=self._state.lamport_time + 1,
            session_id=self._session_id,
        )
        apply_operation(self._state.graph, op, meta)

        self._notify_subscribers()

    def edit_batch(self, ops: List[Operation]) -> None:
        """
        Add multiple uncommitted operations to the edit buffer.

        Args:
            ops: List of operations to add
        """
        for op in ops:
            self.edit(op)

    def cancel_edits(self) -> None:
        """
        Cancel all uncommitted edits and revert to the starting state.
        """
        if self._state.edits.start_graph is not None:
            self._state.graph = self._state.edits.start_graph
        self._state.edits = EditBuffer()
        self._notify_subscribers()

    def has_pending_edits(self) -> bool:
        """Check if there are uncommitted edits."""
        return not self._state.edits.is_empty()

    # =========================================================================
    # Commit Operations
    # =========================================================================

    def commit(self, description: Optional[str] = None) -> Optional[CRDTMessage]:
        """
        Commit current edits as a CRDT message.

        Args:
            description: Optional description for the commit

        Returns:
            The committed message, or None if no edits to commit
        """
        if self._state.edits.is_empty():
            return None

        # Increment sequence and timestamps
        self._message_sequence += 1
        self._state.lamport_time += 1
        self._state.vector_clock = increment_clock(
            self._state.vector_clock, self._session_id
        )

        # Create message
        msg = CRDTMessage(
            id=generate_message_id(self._session_id, self._message_sequence),
            session_id=self._session_id,
            clock=self._state.vector_clock.copy(),
            lamport_time=self._state.lamport_time,
            timestamp=time.time() * 1000,
            ops=self._state.edits.ops.copy(),
        )

        # Add to journal
        entry = JournalEntry(msg=msg, ack=False)
        self._state.journal.append(entry)

        # Clear edit buffer
        self._state.edits = EditBuffer()

        # Notify subscribers
        self._notify_subscribers()

        # Send to server
        if self._on_send:
            self._on_send(msg)

        return msg

    # =========================================================================
    # Receive Operations
    # =========================================================================

    def receive(self, msg: CRDTMessage) -> None:
        """
        Process a message received from the server or another client.

        Args:
            msg: The received message
        """
        # Skip if this is our own message (already applied)
        if msg.session_id == self._session_id:
            return

        # Update vector clock
        self._state.vector_clock = merge_clocks(
            self._state.vector_clock, msg.clock
        )
        self._state.lamport_time = max(self._state.lamport_time, msg.lamport_time)

        # Handle meta operations (undo/redo from remote)
        for op in msg.ops:
            if op.otype == OType.META_UNDO.value:
                self._apply_remote_undo(op.target_msg_id)
            elif op.otype == OType.META_REDO.value:
                self._apply_remote_redo(op.target_msg_id)

        # Add to journal
        entry = JournalEntry(msg=msg, ack=True)  # Remote messages are pre-acked
        self._state.journal.append(entry)

        # Apply non-meta operations to graph
        non_meta_ops = [op for op in msg.ops if not op.otype.startswith("meta.")]
        if non_meta_ops:
            filtered_msg = CRDTMessage(
                id=msg.id,
                session_id=msg.session_id,
                clock=msg.clock,
                lamport_time=msg.lamport_time,
                timestamp=msg.timestamp,
                ops=non_meta_ops,
            )
            apply_message_mut(self._state.graph, filtered_msg)

        self._notify_subscribers()

    def _apply_remote_undo(self, target_msg_id: str) -> None:
        """Apply an undo operation from a remote client."""
        for entry in self._state.journal:
            if entry.msg.id == target_msg_id:
                entry.deleted_at = time.time() * 1000
                break
        self._rebuild_graph()

    def _apply_remote_redo(self, target_msg_id: str) -> None:
        """Apply a redo operation from a remote client."""
        for entry in self._state.journal:
            if entry.msg.id == target_msg_id:
                entry.deleted_at = None
                break
        self._rebuild_graph()

    # =========================================================================
    # Acknowledgment
    # =========================================================================

    def ack(self, msg_id: str) -> None:
        """
        Mark a message as acknowledged by the server.

        Args:
            msg_id: ID of the message to acknowledge
        """
        for entry in self._state.journal:
            if entry.msg.id == msg_id:
                entry.ack = True
                break
        self._notify_subscribers()

    def get_unacked_messages(self) -> List[CRDTMessage]:
        """Get all unacknowledged messages (for resending on reconnect)."""
        return [
            entry.msg
            for entry in self._state.journal
            if not entry.ack and entry.deleted_at is None
        ]

    def has_pending_messages(self) -> bool:
        """Check if there are unacknowledged messages."""
        return len(self.get_unacked_messages()) > 0

    def get_pending_count(self) -> int:
        """Get count of unacknowledged messages."""
        return len(self.get_unacked_messages())

    # =========================================================================
    # Undo/Redo
    # =========================================================================

    def undo(self) -> Optional[CRDTMessage]:
        """
        Undo the last operation from this session.

        Returns:
            The undo message to send, or None if nothing to undo
        """
        # Commit any pending edits first
        if not self._state.edits.is_empty():
            self.commit()

        # Find the last non-deleted message from this session
        target_entry = None
        for entry in reversed(self._state.journal):
            if (
                entry.msg.session_id == self._session_id
                and entry.deleted_at is None
                and not any(op.otype.startswith("meta.") for op in entry.msg.ops)
            ):
                target_entry = entry
                break

        if target_entry is None:
            return None

        # Mark as deleted
        target_entry.deleted_at = time.time() * 1000
        target_entry.ack = False  # Reset ack to signal server needs sync

        # Create undo message
        self._message_sequence += 1
        self._state.lamport_time += 1
        self._state.vector_clock = increment_clock(
            self._state.vector_clock, self._session_id
        )

        undo_op = Operation(
            key="_meta",
            otype=OType.META_UNDO.value,
            path="_meta",
            target_msg_id=target_entry.msg.id,
        )

        msg = CRDTMessage(
            id=generate_message_id(self._session_id, self._message_sequence),
            session_id=self._session_id,
            clock=self._state.vector_clock.copy(),
            lamport_time=self._state.lamport_time,
            timestamp=time.time() * 1000,
            ops=[undo_op],
        )

        # Add to journal
        entry = JournalEntry(msg=msg, ack=False)
        self._state.journal.append(entry)

        # Rebuild graph without the deleted entry
        self._rebuild_graph()

        # Send to server
        if self._on_send:
            self._on_send(msg)

        return msg

    def redo(self) -> Optional[CRDTMessage]:
        """
        Redo the last undone operation from this session.

        Returns:
            The redo message to send, or None if nothing to redo
        """
        # Find the last deleted message from this session
        target_entry = None
        for entry in reversed(self._state.journal):
            if (
                entry.msg.session_id == self._session_id
                and entry.deleted_at is not None
                and not any(op.otype.startswith("meta.") for op in entry.msg.ops)
            ):
                target_entry = entry
                break

        if target_entry is None:
            return None

        # Clear deletion
        target_entry.deleted_at = None
        target_entry.ack = False

        # Create redo message
        self._message_sequence += 1
        self._state.lamport_time += 1
        self._state.vector_clock = increment_clock(
            self._state.vector_clock, self._session_id
        )

        redo_op = Operation(
            key="_meta",
            otype=OType.META_REDO.value,
            path="_meta",
            target_msg_id=target_entry.msg.id,
        )

        msg = CRDTMessage(
            id=generate_message_id(self._session_id, self._message_sequence),
            session_id=self._session_id,
            clock=self._state.vector_clock.copy(),
            lamport_time=self._state.lamport_time,
            timestamp=time.time() * 1000,
            ops=[redo_op],
        )

        # Add to journal
        entry = JournalEntry(msg=msg, ack=False)
        self._state.journal.append(entry)

        # Rebuild graph with the restored entry
        self._rebuild_graph()

        # Send to server
        if self._on_send:
            self._on_send(msg)

        return msg

    def _rebuild_graph(self) -> None:
        """Rebuild the graph from snapshot and journal."""
        # Get non-compacted entries (after snapshot.journal_index)
        entries_to_replay = self._state.journal[self._state.snapshot.journal_index :]

        self._state.graph = rebuild_graph(
            snapshot_graph=self._state.snapshot.graph,
            journal_entries=entries_to_replay,
            pending_ops=self._state.edits.ops if not self._state.edits.is_empty() else None,
            lamport_time=self._state.lamport_time,
            session_id=self._session_id,
        )
        self._notify_subscribers()

    # =========================================================================
    # Snapshot/Compaction
    # =========================================================================

    def compact(self) -> Snapshot:
        """
        Create a snapshot from all acknowledged entries.

        This compacts the journal by baking acknowledged entries into
        the snapshot, reducing memory usage and speeding up replay.

        Returns:
            The new snapshot
        """
        # Find entries that can be compacted (acked and not deleted)
        compactable_count = 0
        for entry in self._state.journal:
            if entry.ack and entry.deleted_at is None:
                compactable_count += 1
            else:
                break  # Stop at first non-compactable entry

        if compactable_count == 0:
            return self._state.snapshot

        # Build new snapshot graph
        entries_to_compact = self._state.journal[:compactable_count]
        new_graph = rebuild_graph(
            snapshot_graph=self._state.snapshot.graph,
            journal_entries=entries_to_compact,
        )

        # Calculate new vector clock and lamport time
        new_clock = self._state.snapshot.vector_clock.copy()
        new_lamport = self._state.snapshot.lamport_time
        for entry in entries_to_compact:
            new_clock = merge_clocks(new_clock, entry.msg.clock)
            new_lamport = max(new_lamport, entry.msg.lamport_time)

        # Create new snapshot
        self._state.snapshot = Snapshot(
            graph=new_graph,
            vector_clock=new_clock,
            lamport_time=new_lamport,
            journal_index=self._state.snapshot.journal_index + compactable_count,
        )

        # Remove compacted entries from journal
        self._state.journal = self._state.journal[compactable_count:]

        self._notify_subscribers()
        return self._state.snapshot

    def get_snapshot(self) -> Snapshot:
        """Get the current snapshot."""
        return self._state.snapshot

    # =========================================================================
    # Initialization from Server
    # =========================================================================

    def init_from_server(
        self, snapshot: Snapshot, journal: List[CRDTMessage]
    ) -> None:
        """
        Initialize state from server-provided snapshot and journal.

        Args:
            snapshot: The server's snapshot
            journal: Journal entries to replay (as messages)
        """
        self._state.snapshot = Snapshot(
            graph=snapshot.graph.copy(),
            vector_clock=snapshot.vector_clock.copy(),
            lamport_time=snapshot.lamport_time,
            journal_index=snapshot.journal_index,
        )

        # Convert messages to journal entries
        self._state.journal = [
            JournalEntry(msg=msg, ack=True) for msg in journal
        ]

        # Update clocks
        self._state.vector_clock = snapshot.vector_clock.copy()
        self._state.lamport_time = snapshot.lamport_time

        for entry in self._state.journal:
            self._state.vector_clock = merge_clocks(
                self._state.vector_clock, entry.msg.clock
            )
            self._state.lamport_time = max(
                self._state.lamport_time, entry.msg.lamport_time
            )

        # Rebuild graph
        self._rebuild_graph()


def create_graph(
    session_id: Optional[str] = None,
    on_send: Optional[SendCallback] = None,
    on_state_change: Optional[StateChangeCallback] = None,
    initial_snapshot: Optional[Snapshot] = None,
) -> GraphStore:
    """
    Factory function to create a GraphStore.

    This matches the TypeScript createGraph() API.

    Args:
        session_id: Unique session identifier (auto-generated if not provided)
        on_send: Callback when message should be sent to server
        on_state_change: Callback when state changes
        initial_snapshot: Optional snapshot to restore from

    Returns:
        A new GraphStore instance
    """
    from uuid import uuid4

    if session_id is None:
        session_id = str(uuid4())

    return GraphStore(
        session_id=session_id,
        on_send=on_send,
        on_state_change=on_state_change,
        initial_snapshot=initial_snapshot,
    )
