"""Visualizer base class and auto-discovery registry."""

from __future__ import annotations

import numpy as np


class Visualizer:
    """Base class for data-type-specific visualizers.

    Subclasses declare ``required_keys`` — the Zarr keys they need.
    At runtime, only visualizers whose keys all exist are instantiated.

    The ``get_elements`` method returns a list of Vuer scene elements for a
    given frame. The caller collects elements from all visualizers and sends
    them in a single batched ``session.upsert`` to minimize WebSocket messages.
    """

    required_keys: list[str] = []

    @classmethod
    def can_handle(cls, zarr_keys: set[str]) -> bool:
        """Return True if all required keys are present in the Zarr store."""
        return all(k in zarr_keys for k in cls.required_keys)

    def __init__(self, zarr_store, total_frames: int, T_align: np.ndarray):
        """Preload data from Zarr into memory."""

    def get_elements(self, frame_idx: int) -> list:
        """Return Vuer scene elements for the given frame.

        Returns:
            list of SceneElement instances to upsert
        """
        return []


def create_active_visualizers(visualizer_classes, zarr_store, total_frames, T_align):
    """Instantiate only the visualizers whose required keys exist in the Zarr."""
    zarr_keys = set(zarr_store.keys())
    active = []
    for cls in visualizer_classes:
        if cls.can_handle(zarr_keys):
            print(f"  [+] {cls.__name__} (keys: {cls.required_keys})")
            active.append(cls(zarr_store, total_frames, T_align))
        else:
            missing = [k for k in cls.required_keys if k not in zarr_keys]
            print(f"  [-] {cls.__name__} (missing: {missing})")
    return active
