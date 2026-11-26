"""
vuer.scene_rtc - CRDT-based real-time collaborative scene management using vuer_rtc.

This module delegates all CRDT logic to the ``vuer_rtc`` library (``vuer-rtc`` on PyPI)
and only adds the Vuer-specific integration layer.

Usage:
    from vuer.scene_rtc import SceneStoreRTC

    app = Vuer()
    store = SceneStoreRTC(app)
    store.insert_node("cube", "Mesh", parent_key="scene")
"""

from vuer.scene_rtc.scene_store_rtc import RTCSubscription, SceneStoreRTC

# Re-export key types from vuer_rtc for convenience
from vuer_rtc import (
    CRDTMessage,
    GraphStore,
    JournalEntry,
    SceneGraph,
    SceneNode,
    Snapshot,
    applyMessage,
    applyMessageMut,
    createEmptyGraph,
    rebuildGraph,
)

__all__ = [
    "SceneStoreRTC",
    "RTCSubscription",
    "CRDTMessage",
    "GraphStore",
    "JournalEntry",
    "SceneGraph",
    "SceneNode",
    "Snapshot",
    "applyMessage",
    "applyMessageMut",
    "createEmptyGraph",
    "rebuildGraph",
]
