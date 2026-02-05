# vuer.rtc - Python CRDT Data Store

A Python implementation of the `@vuer-ai/vuer-rtc` TypeScript package, providing CRDT-based real-time collaborative data structures for Vuer applications.

## Overview

`vuer.rtc` enables consistent state management across Python and JavaScript clients by implementing:

- **CRDT-based conflict resolution**: Last-Write-Wins (LWW) for absolute values, additive operations for deltas
- **Journal with snapshots**: Enables undo/redo, fast replay, and state recovery
- **Vector clocks**: Causal ordering of concurrent operations
- **TypeScript API compatibility**: Same operator format as `@vuer-ai/vuer-rtc`

## Installation

The `vuer.rtc` module is included in the vuer package:

```bash
pip install vuer
```

## Quick Start

```python
from vuer.rtc import create_graph, Operation

# Create a store with a send callback
store = create_graph(
    session_id="my-session",
    on_send=lambda msg: print(f"Send: {msg.to_dict()}"),
)

# Insert a new node
store.edit(Operation(
    key="cube-1",
    otype="node.insert",
    path="",
    tag="Mesh",
    parent_key="scene",
))

# Commit the edit
msg = store.commit()
print(f"Committed message: {msg.id}")

# Modify the node's position
store.edit(Operation(
    key="cube-1",
    otype="vector3.add",
    path="transform.position",
    value=[1, 0, 0],
))
store.commit()

# Access the current state
graph = store.graph
cube = graph.get_node("cube-1")
position = cube.get_property("transform.position")
print(f"Cube position: {position}")  # [1, 0, 0]
```

## Core Concepts

### 1. Scene Graph

The scene graph is a hierarchical structure of nodes:

```python
from vuer.rtc import create_empty_graph, SceneNode

# Create an empty graph with a root "scene" node
graph = create_empty_graph()

# Access the root node
root = graph.get_node("scene")
print(root.tag)  # "Scene"

# Add a node
cube = SceneNode(key="cube-1", tag="Mesh")
graph.set_node(cube)
root.children.append("cube-1")
```

### 2. Operations

Operations modify the scene graph. Each operation has:

- `key`: Target node key
- `otype`: Operation type (e.g., "vector3.add", "node.insert")
- `path`: Property path (e.g., "transform.position")
- `value`: Operation-specific value

```python
from vuer.rtc import Operation

# Set a value (Last-Write-Wins)
op = Operation(
    key="cube-1",
    otype="vector3.set",
    path="transform.position",
    value=[0, 1, 0],
)

# Add to a value (additive)
op = Operation(
    key="cube-1",
    otype="vector3.add",
    path="transform.position",
    value=[1, 0, 0],
)
```

### 3. Messages

Messages batch operations and include CRDT metadata:

```python
from vuer.rtc import CRDTMessage

# Messages are created by store.commit()
msg = store.commit()
print(msg.id)           # "session-id:1"
print(msg.session_id)   # "session-id"
print(msg.lamport_time) # 1
print(msg.ops)          # List of operations
```

### 4. Journal and Snapshots

The journal tracks all committed messages, enabling:

- **Undo/Redo**: Mark messages as deleted/undeleted
- **State recovery**: Replay from snapshot + journal
- **Synchronization**: Track acknowledgments

```python
# Undo the last operation
undo_msg = store.undo()

# Redo the last undone operation
redo_msg = store.redo()

# Create a snapshot for fast recovery
snapshot = store.compact()
```

## Operation Types

### Number Operations

| Type | Behavior | Example |
|------|----------|---------|
| `number.set` | Last-Write-Wins | `value=10` |
| `number.add` | Additive | `value=5` adds 5 |
| `number.multiply` | Multiplicative | `value=2` doubles |
| `number.min` | Take minimum | `value=5` caps at 5 |
| `number.max` | Take maximum | `value=5` floors at 5 |

### Vector3 Operations

| Type | Behavior |
|------|----------|
| `vector3.set` | LWW, `value=[x, y, z]` |
| `vector3.add` | Component-wise addition |
| `vector3.multiply` | Component-wise multiplication |
| `vector3.applyEuler` | Rotate by Euler angles |
| `vector3.applyQuaternion` | Rotate by quaternion |

### Boolean Operations

| Type | Behavior |
|------|----------|
| `boolean.set` | Last-Write-Wins |
| `boolean.or` | Logical OR (enable wins) |
| `boolean.and` | Logical AND (disable wins) |

### Array Operations

| Type | Behavior |
|------|----------|
| `array.set` | Replace entire array |
| `array.push` | Append item |
| `array.union` | Set union (no duplicates) |
| `array.remove` | Remove by value |

### Scene Graph Operations

| Type | Description |
|------|-------------|
| `node.insert` | Create new node as child of parent |
| `node.remove` | Soft delete (tombstone) |

### Meta Operations

| Type | Description |
|------|-------------|
| `meta.undo` | Mark message as undone |
| `meta.redo` | Restore undone message |

## State Management

### GraphStore API

```python
from vuer.rtc import create_graph

store = create_graph(
    session_id="my-session",
    on_send=lambda msg: websocket.send(msg.to_dict()),
    on_state_change=lambda state: print("State changed"),
)

# Edit operations
store.edit(op)           # Add uncommitted operation
store.edit_batch(ops)    # Add multiple operations
store.cancel_edits()     # Revert uncommitted edits
store.has_pending_edits() # Check for uncommitted edits

# Commit
msg = store.commit()     # Commit edits as message

# Receive from server/peers
store.receive(msg)       # Process remote message
store.ack(msg_id)        # Acknowledge message

# Undo/Redo
store.undo()             # Undo last operation
store.redo()             # Redo last undone operation

# Snapshots
store.compact()          # Create snapshot
store.get_snapshot()     # Get current snapshot

# State access
state = store.get_state() # Get full ClientState
graph = store.graph       # Get current SceneGraph

# Subscription
unsubscribe = store.subscribe(lambda state: ...)
```

### Serialization

All types support serialization for network transport:

```python
# Serialize
msg_dict = msg.to_dict()
json_str = json.dumps(msg_dict)

# Deserialize
msg_dict = json.loads(json_str)
msg = CRDTMessage.from_dict(msg_dict)
```

## Integration with Vuer Server

```python
from vuer import Vuer, VuerSession
from vuer.rtc import create_graph, Operation

app = Vuer()

# Create a shared store
store = create_graph(session_id="server")

@app.spawn(start=True)
async def main(session: VuerSession):
    # Initialize client with current state
    snapshot = store.get_snapshot()
    session.set @ Scene(rawChildren=[node.to_dict() for node in store.graph.nodes.values()])

    # Handle incoming operations
    async for event in session:
        if event.etype == "RTC_MESSAGE":
            msg = CRDTMessage.from_dict(event.value)
            store.receive(msg)
            # Broadcast to other clients...
```

## Conflict Resolution

The CRDT implementation ensures eventual consistency:

1. **LWW Operations** (`*.set`): Higher Lamport timestamp wins
2. **Additive Operations** (`*.add`, `*.multiply`): Order-independent merge
3. **Boolean Operations**: `or` enables (any true), `and` disables (all must be true)

```python
# Concurrent edits from two clients:
# Client A: vector3.add [1, 0, 0]
# Client B: vector3.add [0, 1, 0]
# Result: [1, 1, 0] (order-independent)

# Concurrent sets:
# Client A (lamport=5): vector3.set [1, 0, 0]
# Client B (lamport=6): vector3.set [0, 1, 0]
# Result: [0, 1, 0] (higher lamport wins)
```

## See Also

- [vuer-rtc TypeScript package](https://rtc.vuer.ai)
- [Vuer documentation](https://vuer.ai)
