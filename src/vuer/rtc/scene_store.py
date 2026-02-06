"""
SceneStore - A reactive scene graph store that maintains state and broadcasts.

Mirrors the VuerSession API (set, add, upsert, update, remove) but also
maintains internal state and broadcasts to all subscribed sessions.

Usage:
    from vuer import Vuer, VuerSession
    from vuer.rtc import SceneStore
    from vuer.schemas import Box, Scene

    app = Vuer()
    store = SceneStore()

    @app.spawn(start=True)
    async def main(sess: VuerSession):
        async with store.subscribe(sess):
            store.set @ Scene(Box(key="box"))
            store.upsert @ Box(key="box2", position=[1, 0, 0])

            # Query state
            print(store.scene)  # Returns hydrated Scene object
            print(store.get("box"))  # Get element by key
            print(store.history)  # Complete operation history
"""

from copy import deepcopy
from typing import TYPE_CHECKING, Any, Dict, List, Optional
from typing import Set as TypeSet

from vuer.events import Add, Remove, Set, Update, Upsert
from vuer.schemas import Scene
from vuer.server import SceneOps

if TYPE_CHECKING:
  from vuer.server import VuerSession


def _serialize(element) -> Dict[str, Any]:
  """Serialize an element to dict."""
  if hasattr(element, "_serialize"):
    return element._serialize()
  elif isinstance(element, dict):
    return element
  else:
    return dict(element)


class SceneGraph:
  """
  Scene state model that manages the scene graph as a nested dict structure.

  Provides methods for manipulating the scene: set, add, update, upsert, remove.
  Can hydrate back to a Scene object via to_scene().
  """

  def __init__(self):
    self._data: Optional[Dict[str, Any]] = None

  @property
  def data(self) -> Optional[Dict[str, Any]]:
    """Get raw scene data as dict."""
    return self._data

  def set_scene(self, scene_data: Dict[str, Any]) -> None:
    """Set the entire scene."""
    self._data = scene_data

  def get(self, key: str) -> Optional[Dict[str, Any]]:
    """Get element by key (recursive search)."""
    if not self._data:
      return None
    return self._find_by_key(self._data.get("children", []), key)

  def add(self, node: Dict[str, Any], to: Optional[str] = None) -> None:
    """Add a node to the scene."""
    if not self._data:
      return
    if to:
      parent = self.get(to)
      if parent:
        children = parent.setdefault("children", [])
        children.append(node)
    else:
      self._data.setdefault("children", []).append(node)

  def update(self, node: Dict[str, Any]) -> None:
    """Update an existing node by key."""
    if not self._data:
      return
    key = node.get("key")
    if key:
      existing = self.get(key)
      if existing:
        existing.update(node)

  def upsert(self, node: Dict[str, Any], to: Optional[str] = None) -> None:
    """Update if exists, otherwise add."""
    if not self._data:
      return
    children = self._data.get("children", [])
    self._data["children"] = self._upsert_into(children, node, to)

  def remove(self, key: str) -> None:
    """Remove a node by key."""
    if not self._data:
      return
    children = self._data.get("children", [])
    self._data["children"] = self._remove_by_key(children, key)

  def to_scene(self) -> Optional[Scene]:
    """Hydrate the scene data back to a Scene object."""
    if not self._data:
      return None
    # Extract children and scene-level props
    children_data = self._data.get("children", [])
    # Scene expects children as positional args, other props as kwargs
    # Filter out empty lists and None values
    skip_keys = {"tag", "children", "bgChildren", "rawChildren", "htmlChildren"}
    props = {
      k: v for k, v in self._data.items() if k not in skip_keys and v is not None
    }
    return Scene(*children_data, **props)

  # =========================================================================
  # Internal helpers
  # =========================================================================

  def _find_by_key(self, children: List[Dict], key: str) -> Optional[Dict]:
    """Find element by key in children list (recursive)."""
    for child in children:
      if child.get("key") == key:
        return child
      nested = child.get("children", [])
      if nested:
        found = self._find_by_key(nested, key)
        if found:
          return found
    return None

  def _remove_by_key(self, children: List[Dict], key: str) -> List[Dict]:
    """Remove element by key from children list (recursive)."""
    result = []
    for child in children:
      if child.get("key") == key:
        continue
      nested = child.get("children", [])
      if nested:
        child = {**child, "children": self._remove_by_key(nested, key)}
      result.append(child)
    return result

  def _upsert_into(
    self, children: List[Dict], element: Dict, to: Optional[str] = None
  ) -> List[Dict]:
    """Upsert element into children list."""
    key = element.get("key")

    # If targeting a parent, find it and add there
    if to:
      result = []
      for child in children:
        if child.get("key") == to:
          nested = child.get("children", [])
          child = {**child, "children": self._upsert_into(nested, element)}
        else:
          nested = child.get("children", [])
          if nested:
            child = {**child, "children": self._upsert_into(nested, element, to)}
        result.append(child)
      return result

    # Check if exists (update) or not (add)
    found = False
    result = []
    for child in children:
      if child.get("key") == key:
        result.append({**child, **element})
        found = True
      else:
        nested = child.get("children", [])
        if nested:
          child = {**child, "children": self._upsert_into(nested, element)}
        result.append(child)

    if not found:
      result.append(element)

    return result


class SubscriptionContext:
  """Context manager for session subscription."""

  def __init__(self, store: "SceneStore", session: "VuerSession"):
    self.store = store
    self.session = session

  async def __aenter__(self) -> "SubscriptionContext":
    self.store._add_subscriber(self.session)
    return self

  async def __aexit__(self, exc_type, exc_val, exc_tb) -> None:
    self.store._remove_subscriber(self.session)
    return None


class SceneStore(SceneOps):
  """
  A reactive store that maintains scene state and broadcasts to subscribers.

  Inherits from SceneOps which provides: set, add, upsert, update, remove.
  Uses SceneGraph internally for state management.

  Example:
      store = SceneStore()

      @app.spawn(start=True)
      async def main(sess: VuerSession):
          async with store.subscribe(sess):
              store.set @ Scene(Box(key="box"))
              store.upsert @ Sphere(key="sphere", position=[1, 0, 0])

              # Query state
              print(store.get("box"))
              print(store.scene)  # Returns Scene object
              print(store.history)
  """

  def __init__(self):
    self._subscribers: TypeSet["VuerSession"] = set()
    self._graph = SceneGraph()
    self._history: List[Dict[str, Any]] = []

  @property
  def history(self) -> List[Dict[str, Any]]:
    """Get complete history of all operations."""
    return self._history

  @property
  def scene(self) -> Optional[Scene]:
    """Get current scene as a hydrated Scene object."""
    return self._graph.to_scene()

  @property
  def scene_data(self) -> Optional[Dict[str, Any]]:
    """Get current scene state as raw dict."""
    return self._graph.data

  def get(self, key: str) -> Optional[Dict[str, Any]]:
    """Get element by key."""
    return self._graph.get(key)

  def subscribe(self, session: "VuerSession") -> SubscriptionContext:
    """Subscribe a session to receive broadcasts."""
    return SubscriptionContext(self, session)

  def _add_subscriber(self, session: "VuerSession") -> None:
    self._subscribers.add(session)

  def _remove_subscriber(self, session: "VuerSession") -> None:
    self._subscribers.discard(session)

  def __matmul__(self, event) -> None:
    """Central dispatch for all operations - updates state, records history, broadcasts."""
    # Record to history
    _event = deepcopy(event)
    # self._history.append(_event)

    # Update internal state via SceneGraph
    if isinstance(event, Set):
      self._graph.set_scene(_serialize(event.data))

    elif isinstance(event, Update):
      for node in event.data["nodes"]:
        self._graph.update(_serialize(node))

    elif isinstance(event, Add):
      to = event.data.get("to")
      for node in event.data["nodes"]:
        self._graph.add(_serialize(node), to=to)

    elif isinstance(event, Upsert):
      to = event.data.get("to")
      for node in event.data["nodes"]:
        self._graph.upsert(_serialize(node), to=to)

    elif isinstance(event, Remove):
      for key in event.data["keys"]:
        self._graph.remove(key)

    # Broadcast to all subscribers
    for session in self._subscribers:
      session @ event
