"""
Dispatcher for applying CRDT messages and operations to scene graphs.

This module provides functions that match the TypeScript API:
- applyMessage(graph, msg) -> new_graph (immutable)
- applyMessages(graph, messages) -> new_graph (immutable)
- applyOperation(graph, op, meta) -> None (mutable)
- applyMessageMut(graph, msg) -> None (mutable)
- applyMessagesMut(graph, messages) -> None (mutable)
"""

import time
from typing import List, Optional

from vuer.rtc.types import (
    CRDTMessage,
    Operation,
    SceneGraph,
    SceneNode,
    OType,
    merge_clocks,
)
from vuer.rtc.operations.registry import registry


class OperationMeta:
    """
    Metadata passed to apply functions.

    Attributes:
        lamport_time: Lamport timestamp for LWW operations
        session_id: Session that created the operation
        timestamp: Wall-clock timestamp
    """

    def __init__(
        self,
        lamport_time: int,
        session_id: str = "",
        timestamp: Optional[float] = None,
    ):
        self.lamport_time = lamport_time
        self.session_id = session_id
        self.timestamp = timestamp or (time.time() * 1000)


def apply_operation(
    graph: SceneGraph,
    op: Operation,
    meta: OperationMeta,
) -> None:
    """
    Apply a single operation to the graph (mutable, modifies in place).

    Args:
        graph: The scene graph to modify
        op: The operation to apply
        meta: Operation metadata (lamport time, session ID, etc.)

    Raises:
        ValueError: If the operation type is not supported or node not found
    """
    # Handle node operations specially
    if op.otype == OType.NODE_INSERT.value:
        _apply_node_insert(graph, op, meta)
        return

    if op.otype == OType.NODE_REMOVE.value:
        _apply_node_remove(graph, op, meta)
        return

    # Skip meta operations (undo/redo) - they're handled at journal level
    if op.otype.startswith("meta."):
        return

    # Get the node to modify
    node = graph.get_node(op.key)
    if node is None:
        raise ValueError(f"Node not found: {op.key}")

    # Apply the operation using the registry
    registry.apply(node, op, meta.lamport_time)


def _apply_node_insert(
    graph: SceneGraph, op: Operation, meta: OperationMeta
) -> None:
    """
    Insert a new node into the scene graph.

    The operation should have:
        - key: The new node's key
        - tag: The node type (e.g., "Mesh", "Group")
        - parent_key: Key of the parent node (optional, defaults to root)
        - value: Optional initial properties
    """
    # Check if node already exists
    if graph.has_node(op.key):
        # Update existing node's properties if provided
        node = graph.get_node(op.key)
        if op.value and isinstance(op.value, dict):
            for k, v in op.value.items():
                node.set_property(k, v)
        return

    # Create the new node
    node = SceneNode(
        key=op.key,
        tag=op.tag or "Group",
        lamport_time=meta.lamport_time,
        created_at=meta.timestamp,
        updated_at=meta.timestamp,
    )

    # Apply initial properties
    if op.value and isinstance(op.value, dict):
        for k, v in op.value.items():
            node.set_property(k, v)

    # Add to graph
    graph.set_node(node)

    # Add as child of parent
    parent_key = op.parent_key or graph.root_key
    parent = graph.get_node(parent_key)
    if parent is not None:
        if op.key not in parent.children:
            parent.children.append(op.key)


def _apply_node_remove(
    graph: SceneGraph, op: Operation, meta: OperationMeta
) -> None:
    """
    Remove a node from the scene graph (soft delete via tombstone).

    The operation should have:
        - key: The node's key to remove
    """
    node = graph.get_node(op.key)
    if node is None:
        return

    # Soft delete (set tombstone)
    node.deleted_at = meta.timestamp

    # Remove from parent's children list
    for other_node in graph.nodes.values():
        if op.key in other_node.children:
            other_node.children.remove(op.key)


def apply_message_mut(graph: SceneGraph, msg: CRDTMessage) -> None:
    """
    Apply a CRDT message to the graph (mutable, modifies in place).

    Args:
        graph: The scene graph to modify
        msg: The message containing operations to apply
    """
    meta = OperationMeta(
        lamport_time=msg.lamport_time,
        session_id=msg.session_id,
        timestamp=msg.timestamp,
    )

    for op in msg.ops:
        apply_operation(graph, op, meta)


def apply_messages_mut(graph: SceneGraph, messages: List[CRDTMessage]) -> None:
    """
    Apply multiple CRDT messages to the graph (mutable, modifies in place).

    Messages are applied in order. For correct behavior, ensure messages
    are sorted by lamport time.

    Args:
        graph: The scene graph to modify
        messages: List of messages to apply
    """
    for msg in messages:
        apply_message_mut(graph, msg)


def apply_message(graph: SceneGraph, msg: CRDTMessage) -> SceneGraph:
    """
    Apply a CRDT message to the graph (immutable, returns new graph).

    Args:
        graph: The source scene graph (not modified)
        msg: The message containing operations to apply

    Returns:
        A new SceneGraph with the operations applied
    """
    new_graph = graph.copy()
    apply_message_mut(new_graph, msg)
    return new_graph


def apply_messages(graph: SceneGraph, messages: List[CRDTMessage]) -> SceneGraph:
    """
    Apply multiple CRDT messages to the graph (immutable, returns new graph).

    Messages are applied in order. For correct behavior, ensure messages
    are sorted by lamport time.

    Args:
        graph: The source scene graph (not modified)
        messages: List of messages to apply

    Returns:
        A new SceneGraph with all operations applied
    """
    new_graph = graph.copy()
    apply_messages_mut(new_graph, messages)
    return new_graph


def rebuild_graph(
    snapshot_graph: SceneGraph,
    journal_entries: List["JournalEntry"],
    pending_ops: Optional[List[Operation]] = None,
    lamport_time: int = 0,
    session_id: str = "",
) -> SceneGraph:
    """
    Rebuild the graph from a snapshot and journal entries.

    This is used after undo/redo or when restoring from a checkpoint.

    Args:
        snapshot_graph: The starting graph state
        journal_entries: Journal entries to replay (filtered for non-deleted)
        pending_ops: Optional uncommitted operations to apply
        lamport_time: Current lamport time for pending ops
        session_id: Session ID for pending ops

    Returns:
        Rebuilt scene graph
    """
    # Import here to avoid circular dependency
    from vuer.rtc.types import JournalEntry

    graph = snapshot_graph.copy()

    # Apply all non-deleted journal entries
    for entry in journal_entries:
        if entry.deleted_at is not None:
            continue
        # Skip meta operations during rebuild
        non_meta_ops = [op for op in entry.msg.ops if not op.otype.startswith("meta.")]
        if non_meta_ops:
            msg = CRDTMessage(
                id=entry.msg.id,
                session_id=entry.msg.session_id,
                clock=entry.msg.clock,
                lamport_time=entry.msg.lamport_time,
                timestamp=entry.msg.timestamp,
                ops=non_meta_ops,
            )
            apply_message_mut(graph, msg)

    # Apply pending edits
    if pending_ops:
        meta = OperationMeta(lamport_time=lamport_time, session_id=session_id)
        for op in pending_ops:
            if not op.otype.startswith("meta."):
                apply_operation(graph, op, meta)

    return graph
