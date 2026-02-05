"""
Registry for operation apply functions.

Each operation type has a registered apply function that handles applying
the operation to a scene node.
"""

from typing import Any, Callable, Dict, Optional
import math

from vuer.rtc.types import Operation, SceneNode, SceneGraph, OType


# Type for apply functions
ApplyFn = Callable[[SceneNode, Operation, int], None]

# Global registry mapping otype -> apply function
_registry: Dict[str, ApplyFn] = {}


def register_apply_fn(otype: str) -> Callable[[ApplyFn], ApplyFn]:
    """
    Decorator to register an apply function for an operation type.

    Usage:
        @register_apply_fn("vector3.set")
        def apply_vector3_set(node: SceneNode, op: Operation, lamport_time: int) -> None:
            ...
    """

    def decorator(fn: ApplyFn) -> ApplyFn:
        _registry[otype] = fn
        return fn

    return decorator


def get_apply_fn(otype: str) -> Optional[ApplyFn]:
    """Get the apply function for an operation type."""
    return _registry.get(otype)


class Registry:
    """
    Registry providing access to all registered apply functions.
    """

    def get(self, otype: str) -> Optional[ApplyFn]:
        """Get apply function for operation type."""
        return _registry.get(otype)

    def has(self, otype: str) -> bool:
        """Check if operation type is registered."""
        return otype in _registry

    def apply(
        self, node: SceneNode, op: Operation, lamport_time: int
    ) -> None:
        """
        Apply an operation to a node.

        Args:
            node: The scene node to modify (mutated in place)
            op: The operation to apply
            lamport_time: Lamport timestamp for LWW operations
        """
        fn = self.get(op.otype)
        if fn is None:
            raise ValueError(f"Unknown operation type: {op.otype}")
        fn(node, op, lamport_time)

    @property
    def registered_types(self) -> list:
        """List all registered operation types."""
        return list(_registry.keys())


# Singleton instance
registry = Registry()


# =============================================================================
# Number Operations
# =============================================================================


@register_apply_fn(OType.NUMBER_SET.value)
def apply_number_set(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Last-Write-Wins set for numbers."""
    if lamport_time >= node.lamport_time:
        node.set_property(op.path, op.value)
        node.lamport_time = lamport_time


@register_apply_fn(OType.NUMBER_ADD.value)
def apply_number_add(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Additive operation for numbers."""
    current = node.get_property(op.path, 0)
    node.set_property(op.path, current + op.value)


@register_apply_fn(OType.NUMBER_MULTIPLY.value)
def apply_number_multiply(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Multiplicative operation for numbers."""
    current = node.get_property(op.path, 1)
    node.set_property(op.path, current * op.value)


@register_apply_fn(OType.NUMBER_MIN.value)
def apply_number_min(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Take minimum of current and new value."""
    current = node.get_property(op.path, float("inf"))
    node.set_property(op.path, min(current, op.value))


@register_apply_fn(OType.NUMBER_MAX.value)
def apply_number_max(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Take maximum of current and new value."""
    current = node.get_property(op.path, float("-inf"))
    node.set_property(op.path, max(current, op.value))


# =============================================================================
# String Operations
# =============================================================================


@register_apply_fn(OType.STRING_SET.value)
def apply_string_set(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Last-Write-Wins set for strings."""
    if lamport_time >= node.lamport_time:
        node.set_property(op.path, op.value)
        node.lamport_time = lamport_time


@register_apply_fn(OType.STRING_CONCAT.value)
def apply_string_concat(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Concatenate strings."""
    current = node.get_property(op.path, "")
    # op.value can be a dict with 'value' and 'separator'
    if isinstance(op.value, dict):
        text = op.value.get("value", "")
        separator = op.value.get("separator", "")
        node.set_property(op.path, current + separator + text if current else text)
    else:
        node.set_property(op.path, current + str(op.value))


# =============================================================================
# Boolean Operations
# =============================================================================


@register_apply_fn(OType.BOOLEAN_SET.value)
def apply_boolean_set(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Last-Write-Wins set for booleans."""
    if lamport_time >= node.lamport_time:
        node.set_property(op.path, op.value)
        node.lamport_time = lamport_time


@register_apply_fn(OType.BOOLEAN_OR.value)
def apply_boolean_or(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Logical OR (enable wins)."""
    current = node.get_property(op.path, False)
    node.set_property(op.path, current or op.value)


@register_apply_fn(OType.BOOLEAN_AND.value)
def apply_boolean_and(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Logical AND (disable wins)."""
    current = node.get_property(op.path, True)
    node.set_property(op.path, current and op.value)


# =============================================================================
# Vector3 Operations
# =============================================================================


@register_apply_fn(OType.VECTOR3_SET.value)
def apply_vector3_set(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Last-Write-Wins set for Vector3."""
    if lamport_time >= node.lamport_time:
        node.set_property(op.path, list(op.value))
        node.lamport_time = lamport_time


@register_apply_fn(OType.VECTOR3_ADD.value)
def apply_vector3_add(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Component-wise addition for Vector3."""
    current = node.get_property(op.path, [0, 0, 0])
    result = [current[i] + op.value[i] for i in range(3)]
    node.set_property(op.path, result)


@register_apply_fn(OType.VECTOR3_MULTIPLY.value)
def apply_vector3_multiply(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Component-wise multiplication for Vector3."""
    current = node.get_property(op.path, [1, 1, 1])
    result = [current[i] * op.value[i] for i in range(3)]
    node.set_property(op.path, result)


@register_apply_fn(OType.VECTOR3_APPLY_EULER.value)
def apply_vector3_apply_euler(
    node: SceneNode, op: Operation, lamport_time: int
) -> None:
    """Rotate vector by Euler angles (XYZ order)."""
    current = node.get_property(op.path, [0, 0, 0])
    euler = op.value  # [rx, ry, rz] in radians

    # Apply rotation matrices (simplified XYZ order)
    x, y, z = current
    rx, ry, rz = euler

    # Rotate around X
    cy, cz = y, z
    y = cy * math.cos(rx) - cz * math.sin(rx)
    z = cy * math.sin(rx) + cz * math.cos(rx)

    # Rotate around Y
    cx, cz = x, z
    x = cx * math.cos(ry) + cz * math.sin(ry)
    z = -cx * math.sin(ry) + cz * math.cos(ry)

    # Rotate around Z
    cx, cy = x, y
    x = cx * math.cos(rz) - cy * math.sin(rz)
    y = cx * math.sin(rz) + cy * math.cos(rz)

    node.set_property(op.path, [x, y, z])


@register_apply_fn(OType.VECTOR3_APPLY_QUATERNION.value)
def apply_vector3_apply_quaternion(
    node: SceneNode, op: Operation, lamport_time: int
) -> None:
    """Rotate vector by quaternion [x, y, z, w]."""
    current = node.get_property(op.path, [0, 0, 0])
    qx, qy, qz, qw = op.value
    vx, vy, vz = current

    # Apply quaternion rotation: q * v * q^-1
    # Using the optimized formula
    ix = qw * vx + qy * vz - qz * vy
    iy = qw * vy + qz * vx - qx * vz
    iz = qw * vz + qx * vy - qy * vx
    iw = -qx * vx - qy * vy - qz * vz

    x = ix * qw + iw * (-qx) + iy * (-qz) - iz * (-qy)
    y = iy * qw + iw * (-qy) + iz * (-qx) - ix * (-qz)
    z = iz * qw + iw * (-qz) + ix * (-qy) - iy * (-qx)

    node.set_property(op.path, [x, y, z])


# =============================================================================
# Euler Operations
# =============================================================================


@register_apply_fn(OType.EULER_SET.value)
def apply_euler_set(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Last-Write-Wins set for Euler angles."""
    if lamport_time >= node.lamport_time:
        node.set_property(op.path, list(op.value))
        node.lamport_time = lamport_time


@register_apply_fn(OType.EULER_ADD.value)
def apply_euler_add(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Component-wise addition for Euler angles."""
    current = node.get_property(op.path, [0, 0, 0])
    result = [current[i] + op.value[i] for i in range(3)]
    node.set_property(op.path, result)


# =============================================================================
# Quaternion Operations
# =============================================================================


@register_apply_fn(OType.QUATERNION_SET.value)
def apply_quaternion_set(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Last-Write-Wins set for quaternions."""
    if lamport_time >= node.lamport_time:
        node.set_property(op.path, list(op.value))
        node.lamport_time = lamport_time


@register_apply_fn(OType.QUATERNION_MULTIPLY.value)
def apply_quaternion_multiply(
    node: SceneNode, op: Operation, lamport_time: int
) -> None:
    """Quaternion multiplication (composition)."""
    current = node.get_property(op.path, [0, 0, 0, 1])  # Identity quaternion
    ax, ay, az, aw = current
    bx, by, bz, bw = op.value

    # Hamilton product
    result = [
        aw * bx + ax * bw + ay * bz - az * by,
        aw * by - ax * bz + ay * bw + az * bx,
        aw * bz + ax * by - ay * bx + az * bw,
        aw * bw - ax * bx - ay * by - az * bz,
    ]
    node.set_property(op.path, result)


# =============================================================================
# Color Operations
# =============================================================================


@register_apply_fn(OType.COLOR_SET.value)
def apply_color_set(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Last-Write-Wins set for colors."""
    if lamport_time >= node.lamport_time:
        node.set_property(op.path, op.value)
        node.lamport_time = lamport_time


@register_apply_fn(OType.COLOR_BLEND.value)
def apply_color_blend(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Blend colors (average RGB values)."""
    current = node.get_property(op.path)
    new_color = op.value

    if current is None:
        node.set_property(op.path, new_color)
        return

    # Parse hex colors
    def parse_hex(color: str) -> tuple:
        color = color.lstrip("#")
        return tuple(int(color[i : i + 2], 16) for i in (0, 2, 4))

    def to_hex(rgb: tuple) -> str:
        return "#{:02x}{:02x}{:02x}".format(*rgb)

    c1 = parse_hex(current)
    c2 = parse_hex(new_color)
    blended = tuple((c1[i] + c2[i]) // 2 for i in range(3))
    node.set_property(op.path, to_hex(blended))


# =============================================================================
# Array Operations
# =============================================================================


@register_apply_fn(OType.ARRAY_SET.value)
def apply_array_set(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Last-Write-Wins set for arrays."""
    if lamport_time >= node.lamport_time:
        node.set_property(op.path, list(op.value))
        node.lamport_time = lamport_time


@register_apply_fn(OType.ARRAY_PUSH.value)
def apply_array_push(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Append item to array."""
    current = node.get_property(op.path, [])
    current = list(current)  # Ensure mutable
    current.append(op.value)
    node.set_property(op.path, current)


@register_apply_fn(OType.ARRAY_UNION.value)
def apply_array_union(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Union of arrays (set-like, no duplicates)."""
    current = node.get_property(op.path, [])
    current_set = set(current) if not isinstance(current, set) else current
    new_items = op.value if isinstance(op.value, (list, tuple, set)) else [op.value]
    result = list(current_set | set(new_items))
    node.set_property(op.path, result)


@register_apply_fn(OType.ARRAY_REMOVE.value)
def apply_array_remove(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Remove item from array by value."""
    current = node.get_property(op.path, [])
    current = list(current)
    try:
        current.remove(op.value)
    except ValueError:
        pass  # Item not in array
    node.set_property(op.path, current)


# =============================================================================
# Object Operations
# =============================================================================


@register_apply_fn(OType.OBJECT_SET.value)
def apply_object_set(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Last-Write-Wins set for objects."""
    if lamport_time >= node.lamport_time:
        node.set_property(op.path, dict(op.value))
        node.lamport_time = lamport_time


@register_apply_fn(OType.OBJECT_MERGE.value)
def apply_object_merge(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Deep merge objects (LWW per key at top level)."""
    current = node.get_property(op.path, {})
    if not isinstance(current, dict):
        current = {}
    current = dict(current)  # Copy
    current.update(op.value)
    node.set_property(op.path, current)


# =============================================================================
# Text CRDT Operations (Simplified - position-based)
# =============================================================================


@register_apply_fn(OType.TEXT_INIT.value)
def apply_text_init(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Initialize a text property."""
    node.set_property(op.path, op.value or "")


@register_apply_fn(OType.TEXT_INSERT.value)
def apply_text_insert(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Insert text at position."""
    current = node.get_property(op.path, "")
    if isinstance(op.value, dict):
        position = op.value.get("position", len(current))
        text = op.value.get("value", "")
    else:
        # Legacy format: op.value is the text, position from separate field
        position = getattr(op, "position", len(current))
        text = op.value

    result = current[:position] + text + current[position:]
    node.set_property(op.path, result)


@register_apply_fn(OType.TEXT_DELETE.value)
def apply_text_delete(node: SceneNode, op: Operation, lamport_time: int) -> None:
    """Delete text at position."""
    current = node.get_property(op.path, "")
    if isinstance(op.value, dict):
        position = op.value.get("position", 0)
        length = op.value.get("length", 1)
    else:
        position = getattr(op, "position", 0)
        length = op.value if isinstance(op.value, int) else 1

    result = current[:position] + current[position + length :]
    node.set_property(op.path, result)
