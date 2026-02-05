"""
Core types for the vuer.rtc CRDT-based data store.

This module provides Python equivalents to the TypeScript @vuer-ai/vuer-rtc types,
enabling a consistent API across Python and JavaScript clients.

Key structures:
- VectorClock: Causal ordering via vector clocks
- Operation: Individual CRDT operations (node.insert, vector3.set, etc.)
- CRDTMessage: Message envelope containing batched operations
- SceneNode: Individual node in the scene graph
- SceneGraph: The computed state (map of nodes)
- JournalEntry: Committed message with ack/deleted status
- EditBuffer: Uncommitted operations awaiting commit
- Snapshot: Checkpoint for fast replay
- ClientState: Full client state container
"""

from dataclasses import dataclass, field
from enum import Enum
from typing import Any, Dict, List, Literal, Optional, Tuple, TypedDict, Union
from uuid import uuid4
import time


# =============================================================================
# Vector Clock
# =============================================================================

VectorClock = Dict[str, int]
"""Vector clock maps session IDs to logical timestamps for causal ordering."""


def create_vector_clock() -> VectorClock:
    """Create an empty vector clock."""
    return {}


def increment_clock(clock: VectorClock, session_id: str) -> VectorClock:
    """Return a new clock with the session's counter incremented."""
    new_clock = clock.copy()
    new_clock[session_id] = new_clock.get(session_id, 0) + 1
    return new_clock


def merge_clocks(clock1: VectorClock, clock2: VectorClock) -> VectorClock:
    """Merge two vector clocks, taking the max of each session's counter."""
    result = clock1.copy()
    for session_id, count in clock2.items():
        result[session_id] = max(result.get(session_id, 0), count)
    return result


def compare_clocks(
    clock1: VectorClock, clock2: VectorClock
) -> Literal["before", "after", "concurrent", "equal"]:
    """
    Compare two vector clocks for causal ordering.
    Returns:
      - "before" if clock1 happened before clock2
      - "after" if clock1 happened after clock2
      - "concurrent" if neither happened before the other
      - "equal" if they are identical
    """
    all_keys = set(clock1.keys()) | set(clock2.keys())
    less = False
    greater = False

    for key in all_keys:
        v1 = clock1.get(key, 0)
        v2 = clock2.get(key, 0)
        if v1 < v2:
            less = True
        elif v1 > v2:
            greater = True

    if less and greater:
        return "concurrent"
    elif less:
        return "before"
    elif greater:
        return "after"
    else:
        return "equal"


# =============================================================================
# Operation Types
# =============================================================================


class OType(str, Enum):
    """All supported operation types (dtype.operation format)."""

    # Number operations
    NUMBER_SET = "number.set"
    NUMBER_ADD = "number.add"
    NUMBER_MULTIPLY = "number.multiply"
    NUMBER_MIN = "number.min"
    NUMBER_MAX = "number.max"

    # String operations
    STRING_SET = "string.set"
    STRING_CONCAT = "string.concat"

    # Text CRDT operations
    TEXT_INIT = "text.init"
    TEXT_INSERT = "text.insert"
    TEXT_DELETE = "text.delete"

    # Boolean operations
    BOOLEAN_SET = "boolean.set"
    BOOLEAN_OR = "boolean.or"
    BOOLEAN_AND = "boolean.and"

    # Vector3 operations (3D vectors)
    VECTOR3_SET = "vector3.set"
    VECTOR3_ADD = "vector3.add"
    VECTOR3_MULTIPLY = "vector3.multiply"
    VECTOR3_APPLY_EULER = "vector3.applyEuler"
    VECTOR3_APPLY_QUATERNION = "vector3.applyQuaternion"

    # Euler operations (rotations in radians)
    EULER_SET = "euler.set"
    EULER_ADD = "euler.add"

    # Quaternion operations
    QUATERNION_SET = "quaternion.set"
    QUATERNION_MULTIPLY = "quaternion.multiply"

    # Color operations (hex strings)
    COLOR_SET = "color.set"
    COLOR_BLEND = "color.blend"

    # Array operations
    ARRAY_SET = "array.set"
    ARRAY_PUSH = "array.push"
    ARRAY_UNION = "array.union"
    ARRAY_REMOVE = "array.remove"

    # Object operations
    OBJECT_SET = "object.set"
    OBJECT_MERGE = "object.merge"

    # Scene graph operations
    NODE_INSERT = "node.insert"
    NODE_REMOVE = "node.remove"

    # Meta operations (undo/redo)
    META_UNDO = "meta.undo"
    META_REDO = "meta.redo"


# Type aliases for common value types
Vector3Value = Tuple[float, float, float]
EulerValue = Tuple[float, float, float]
QuaternionValue = Tuple[float, float, float, float]


@dataclass
class Operation:
    """
    Base operation structure for all CRDT operations.

    Attributes:
        key: Node key (e.g., 'cube-1', 'scene')
        otype: Operation type in dtype.operation format (e.g., 'vector3.add')
        path: Property path using dot notation (e.g., 'transform.position')
        value: Operation-specific value (type depends on otype)
    """

    key: str
    otype: str
    path: str
    value: Any = None

    # For node.insert operations
    tag: Optional[str] = None
    parent_key: Optional[str] = None

    # For meta operations
    target_msg_id: Optional[str] = None

    def to_dict(self) -> Dict[str, Any]:
        """Serialize operation to dictionary."""
        result = {
            "key": self.key,
            "otype": self.otype,
            "path": self.path,
        }
        if self.value is not None:
            result["value"] = self.value
        if self.tag is not None:
            result["tag"] = self.tag
        if self.parent_key is not None:
            result["parentKey"] = self.parent_key
        if self.target_msg_id is not None:
            result["targetMsgId"] = self.target_msg_id
        return result

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Operation":
        """Deserialize operation from dictionary."""
        return cls(
            key=data["key"],
            otype=data["otype"],
            path=data["path"],
            value=data.get("value"),
            tag=data.get("tag"),
            parent_key=data.get("parentKey"),
            target_msg_id=data.get("targetMsgId"),
        )


# =============================================================================
# CRDT Message
# =============================================================================


@dataclass
class CRDTMessage:
    """
    Message envelope for batched CRDT operations.

    Attributes:
        id: Unique message identifier (format: sessionId:sequence)
        session_id: Session that created this message
        clock: Vector clock for causal ordering
        lamport_time: Lamport timestamp for total ordering
        timestamp: Wall-clock time in milliseconds since epoch
        ops: Array of operations in this batch
    """

    id: str
    session_id: str
    clock: VectorClock
    lamport_time: int
    timestamp: float
    ops: List[Operation]

    def to_dict(self) -> Dict[str, Any]:
        """Serialize message to dictionary."""
        return {
            "id": self.id,
            "sessionId": self.session_id,
            "clock": self.clock,
            "lamportTime": self.lamport_time,
            "timestamp": self.timestamp,
            "ops": [op.to_dict() for op in self.ops],
        }

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "CRDTMessage":
        """Deserialize message from dictionary."""
        return cls(
            id=data["id"],
            session_id=data["sessionId"],
            clock=data["clock"],
            lamport_time=data["lamportTime"],
            timestamp=data["timestamp"],
            ops=[Operation.from_dict(op) for op in data["ops"]],
        )


def generate_message_id(session_id: str, sequence: int) -> str:
    """Generate a message ID in the format sessionId:sequence."""
    return f"{session_id}:{sequence}"


def generate_uuid() -> str:
    """Generate a UUID string."""
    return str(uuid4())


# =============================================================================
# Scene Node
# =============================================================================


@dataclass
class SceneNode:
    """
    Individual node in the scene graph.

    Attributes:
        key: Unique key (human-friendly identifier)
        tag: Node type (Scene, Mesh, Group, etc.)
        name: Display name
        children: List of child node keys
        clock: Vector clock when created
        lamport_time: Lamport timestamp
        created_at: Creation timestamp (ms since epoch)
        updated_at: Last update timestamp (ms since epoch)
        deleted_at: Soft delete marker (tombstone), None if not deleted
        properties: Dynamic properties stored by path
    """

    key: str
    tag: str
    name: str = ""
    children: List[str] = field(default_factory=list)
    clock: VectorClock = field(default_factory=dict)
    lamport_time: int = 0
    created_at: float = field(default_factory=lambda: time.time() * 1000)
    updated_at: float = field(default_factory=lambda: time.time() * 1000)
    deleted_at: Optional[float] = None
    properties: Dict[str, Any] = field(default_factory=dict)

    def get_property(self, path: str, default: Any = None) -> Any:
        """Get a property value by dot-notation path."""
        return self.properties.get(path, default)

    def set_property(self, path: str, value: Any) -> None:
        """Set a property value by dot-notation path."""
        self.properties[path] = value
        self.updated_at = time.time() * 1000

    def is_deleted(self) -> bool:
        """Check if this node has been soft-deleted."""
        return self.deleted_at is not None

    def to_dict(self) -> Dict[str, Any]:
        """Serialize node to dictionary."""
        result = {
            "key": self.key,
            "tag": self.tag,
            "name": self.name,
            "children": self.children.copy(),
            "clock": self.clock.copy(),
            "lamportTime": self.lamport_time,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
            **self.properties,
        }
        if self.deleted_at is not None:
            result["deletedAt"] = self.deleted_at
        return result

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "SceneNode":
        """Deserialize node from dictionary."""
        # Extract known fields
        known_fields = {
            "key",
            "tag",
            "name",
            "children",
            "clock",
            "lamportTime",
            "createdAt",
            "updatedAt",
            "deletedAt",
        }
        properties = {k: v for k, v in data.items() if k not in known_fields}

        return cls(
            key=data["key"],
            tag=data["tag"],
            name=data.get("name", ""),
            children=data.get("children", []).copy(),
            clock=data.get("clock", {}).copy(),
            lamport_time=data.get("lamportTime", 0),
            created_at=data.get("createdAt", time.time() * 1000),
            updated_at=data.get("updatedAt", time.time() * 1000),
            deleted_at=data.get("deletedAt"),
            properties=properties,
        )

    def copy(self) -> "SceneNode":
        """Create a deep copy of this node."""
        return SceneNode(
            key=self.key,
            tag=self.tag,
            name=self.name,
            children=self.children.copy(),
            clock=self.clock.copy(),
            lamport_time=self.lamport_time,
            created_at=self.created_at,
            updated_at=self.updated_at,
            deleted_at=self.deleted_at,
            properties={k: v for k, v in self.properties.items()},
        )


# =============================================================================
# Scene Graph
# =============================================================================


@dataclass
class SceneGraph:
    """
    The computed state of the scene as a flattened map of nodes.

    Attributes:
        nodes: Dictionary mapping node keys to SceneNode instances
        root_key: Key of the root node (typically "scene")
    """

    nodes: Dict[str, SceneNode] = field(default_factory=dict)
    root_key: str = "scene"

    def get_node(self, key: str) -> Optional[SceneNode]:
        """Get a node by key."""
        return self.nodes.get(key)

    def set_node(self, node: SceneNode) -> None:
        """Add or update a node in the graph."""
        self.nodes[node.key] = node

    def remove_node(self, key: str) -> Optional[SceneNode]:
        """Remove a node from the graph. Returns the removed node or None."""
        return self.nodes.pop(key, None)

    def has_node(self, key: str) -> bool:
        """Check if a node exists."""
        return key in self.nodes

    def get_children(self, key: str) -> List[SceneNode]:
        """Get all child nodes of a given node."""
        node = self.get_node(key)
        if node is None:
            return []
        return [self.nodes[k] for k in node.children if k in self.nodes]

    def to_dict(self) -> Dict[str, Any]:
        """Serialize graph to dictionary."""
        return {
            "nodes": {k: v.to_dict() for k, v in self.nodes.items()},
            "rootKey": self.root_key,
        }

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "SceneGraph":
        """Deserialize graph from dictionary."""
        return cls(
            nodes={k: SceneNode.from_dict(v) for k, v in data.get("nodes", {}).items()},
            root_key=data.get("rootKey", "scene"),
        )

    def copy(self) -> "SceneGraph":
        """Create a deep copy of this graph."""
        return SceneGraph(
            nodes={k: v.copy() for k, v in self.nodes.items()},
            root_key=self.root_key,
        )


def create_empty_graph(root_key: str = "scene") -> SceneGraph:
    """
    Create an empty scene graph with a root node.

    Args:
        root_key: Key for the root node (default: "scene")

    Returns:
        A new SceneGraph with an empty root Scene node
    """
    graph = SceneGraph(root_key=root_key)
    root = SceneNode(
        key=root_key,
        tag="Scene",
        name="Root",
    )
    graph.set_node(root)
    return graph


# =============================================================================
# Journal Entry
# =============================================================================


@dataclass
class JournalEntry:
    """
    A committed message with acknowledgment and deletion status.

    Attributes:
        msg: The CRDT message
        ack: Whether the server has acknowledged this message
        deleted_at: Timestamp when this entry was undone (None if not undone)
    """

    msg: CRDTMessage
    ack: bool = False
    deleted_at: Optional[float] = None

    def is_deleted(self) -> bool:
        """Check if this entry has been undone."""
        return self.deleted_at is not None

    def to_dict(self) -> Dict[str, Any]:
        """Serialize entry to dictionary."""
        result = {
            "msg": self.msg.to_dict(),
            "ack": self.ack,
        }
        if self.deleted_at is not None:
            result["deletedAt"] = self.deleted_at
        return result

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "JournalEntry":
        """Deserialize entry from dictionary."""
        return cls(
            msg=CRDTMessage.from_dict(data["msg"]),
            ack=data.get("ack", False),
            deleted_at=data.get("deletedAt"),
        )


# =============================================================================
# Edit Buffer
# =============================================================================


@dataclass
class EditBuffer:
    """
    Buffer for uncommitted operations awaiting commit.

    Attributes:
        ops: List of pending operations
        start_graph: Graph state when edits started (for cancel/revert)
    """

    ops: List[Operation] = field(default_factory=list)
    start_graph: Optional[SceneGraph] = None

    def is_empty(self) -> bool:
        """Check if there are no pending edits."""
        return len(self.ops) == 0

    def add(self, op: Operation) -> None:
        """Add an operation to the buffer."""
        self.ops.append(op)

    def clear(self) -> List[Operation]:
        """Clear the buffer and return the operations."""
        ops = self.ops
        self.ops = []
        self.start_graph = None
        return ops

    def to_dict(self) -> Dict[str, Any]:
        """Serialize buffer to dictionary."""
        result = {
            "ops": [op.to_dict() for op in self.ops],
        }
        if self.start_graph is not None:
            result["startGraph"] = self.start_graph.to_dict()
        return result

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "EditBuffer":
        """Deserialize buffer from dictionary."""
        start_graph = None
        if "startGraph" in data:
            start_graph = SceneGraph.from_dict(data["startGraph"])
        return cls(
            ops=[Operation.from_dict(op) for op in data.get("ops", [])],
            start_graph=start_graph,
        )


# =============================================================================
# Snapshot
# =============================================================================


@dataclass
class Snapshot:
    """
    Checkpoint for fast replay.

    Attributes:
        graph: Scene graph state at this checkpoint
        vector_clock: Vector clock value at checkpoint
        lamport_time: Max lamport time baked into snapshot
        journal_index: Number of journal entries baked into snapshot
    """

    graph: SceneGraph
    vector_clock: VectorClock
    lamport_time: int
    journal_index: int

    def to_dict(self) -> Dict[str, Any]:
        """Serialize snapshot to dictionary."""
        return {
            "graph": self.graph.to_dict(),
            "vectorClock": self.vector_clock.copy(),
            "lamportTime": self.lamport_time,
            "journalIndex": self.journal_index,
        }

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Snapshot":
        """Deserialize snapshot from dictionary."""
        return cls(
            graph=SceneGraph.from_dict(data["graph"]),
            vector_clock=data.get("vectorClock", {}).copy(),
            lamport_time=data.get("lamportTime", 0),
            journal_index=data.get("journalIndex", 0),
        )


def create_initial_snapshot(graph: Optional[SceneGraph] = None) -> Snapshot:
    """Create an initial snapshot with an empty or provided graph."""
    return Snapshot(
        graph=graph if graph is not None else create_empty_graph(),
        vector_clock={},
        lamport_time=0,
        journal_index=0,
    )


# =============================================================================
# Client State
# =============================================================================


@dataclass
class ClientState:
    """
    Full client state container for the CRDT data store.

    Attributes:
        session_id: Unique identifier for this client session
        graph: Current computed state
        journal: List of committed messages with ack status
        edits: Uncommitted operations awaiting commit
        snapshot: Checkpoint for fast replay
        lamport_time: Current Lamport timestamp
        vector_clock: Current vector clock
    """

    session_id: str
    graph: SceneGraph
    journal: List[JournalEntry]
    edits: EditBuffer
    snapshot: Snapshot
    lamport_time: int
    vector_clock: VectorClock

    def to_dict(self) -> Dict[str, Any]:
        """Serialize state to dictionary."""
        return {
            "sessionId": self.session_id,
            "graph": self.graph.to_dict(),
            "journal": [e.to_dict() for e in self.journal],
            "edits": self.edits.to_dict(),
            "snapshot": self.snapshot.to_dict(),
            "lamportTime": self.lamport_time,
            "vectorClock": self.vector_clock.copy(),
        }

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "ClientState":
        """Deserialize state from dictionary."""
        return cls(
            session_id=data["sessionId"],
            graph=SceneGraph.from_dict(data["graph"]),
            journal=[JournalEntry.from_dict(e) for e in data.get("journal", [])],
            edits=EditBuffer.from_dict(data.get("edits", {"ops": []})),
            snapshot=Snapshot.from_dict(data["snapshot"]),
            lamport_time=data.get("lamportTime", 0),
            vector_clock=data.get("vectorClock", {}).copy(),
        )


def create_initial_state(
    session_id: str, snapshot: Optional[Snapshot] = None
) -> ClientState:
    """
    Create an initial client state.

    Args:
        session_id: Unique identifier for this session
        snapshot: Optional snapshot to restore from

    Returns:
        A new ClientState initialized with the given session ID
    """
    if snapshot is None:
        snapshot = create_initial_snapshot()

    return ClientState(
        session_id=session_id,
        graph=snapshot.graph.copy(),
        journal=[],
        edits=EditBuffer(),
        snapshot=snapshot,
        lamport_time=snapshot.lamport_time,
        vector_clock=snapshot.vector_clock.copy(),
    )
