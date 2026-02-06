"""
vuer.rtc - CRDT-based real-time collaborative data structures for Vuer.

This module provides a Python implementation of the vuer-rtc TypeScript package,
enabling consistent state management across Python and JavaScript clients.

Key Features:
- CRDT-based conflict resolution (Last-Write-Wins, additive operations)
- Journal with snapshots for undo/redo and fast replay
- Vector clocks for causal ordering
- Compatible with the TypeScript @vuer-ai/vuer-rtc package

Basic Usage:
    from vuer.rtc import create_graph, Operation

    # Create a store
    store = create_graph(
        session_id="my-session",
        on_send=lambda msg: websocket.send(msg.to_dict()),
    )

    # Add a node
    store.edit(Operation(
        key="cube-1",
        otype="node.insert",
        path="",
        tag="Mesh",
        parent_key="scene",
    ))
    store.commit()

    # Modify properties
    store.edit(Operation(
        key="cube-1",
        otype="vector3.add",
        path="transform.position",
        value=[1, 0, 0],
    ))
    store.commit()

    # Get current state
    graph = store.graph
    cube = graph.get_node("cube-1")
    position = cube.get_property("transform.position")

See https://rtc.vuer.ai for full documentation.
"""

# Core types
from vuer.rtc.types import (
    # Vector clock
    VectorClock,
    create_vector_clock,
    increment_clock,
    merge_clocks,
    compare_clocks,
    # Operation types
    OType,
    Operation,
    # Message
    CRDTMessage,
    generate_message_id,
    generate_uuid,
    # Scene structures
    SceneNode,
    SceneGraph,
    create_empty_graph,
    # State management
    JournalEntry,
    EditBuffer,
    Snapshot,
    ClientState,
    create_initial_snapshot,
    create_initial_state,
)

# Store
from vuer.rtc.store import (
    GraphStore,
    create_graph,
    StateChangeCallback,
    SendCallback,
)

# Operations
from vuer.rtc.operations import (
    apply_message,
    apply_messages,
    apply_operation,
    apply_message_mut,
    apply_messages_mut,
    registry,
    register_apply_fn,
)

# Scene Store
from vuer.rtc.scene_store import (
    SceneStore,
    SubscriptionContext,
)

__all__ = [
    # Types
    "VectorClock",
    "create_vector_clock",
    "increment_clock",
    "merge_clocks",
    "compare_clocks",
    "OType",
    "Operation",
    "CRDTMessage",
    "generate_message_id",
    "generate_uuid",
    "SceneNode",
    "SceneGraph",
    "create_empty_graph",
    "JournalEntry",
    "EditBuffer",
    "Snapshot",
    "ClientState",
    "create_initial_snapshot",
    "create_initial_state",
    # Store
    "GraphStore",
    "create_graph",
    "StateChangeCallback",
    "SendCallback",
    # Operations
    "apply_message",
    "apply_messages",
    "apply_operation",
    "apply_message_mut",
    "apply_messages_mut",
    "registry",
    "register_apply_fn",
    # Scene Store
    "SceneStore",
    "SubscriptionContext",
]
