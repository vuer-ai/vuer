"""
Operations module for applying CRDT operations to scene graphs.

This module provides the dispatcher and apply functions for all supported
operation types.
"""

from vuer.rtc.operations.dispatcher import (
    apply_message,
    apply_messages,
    apply_operation,
    apply_message_mut,
    apply_messages_mut,
)

from vuer.rtc.operations.registry import registry, register_apply_fn

__all__ = [
    "apply_message",
    "apply_messages",
    "apply_operation",
    "apply_message_mut",
    "apply_messages_mut",
    "registry",
    "register_apply_fn",
]
