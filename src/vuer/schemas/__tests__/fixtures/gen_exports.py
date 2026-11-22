"""Regenerate exports_<version>.json: the public names and default serialization of vuer.schemas.

The committed exports_0.1.6.json was generated on vuer 0.1.6, before scene_components.py was split:

    uv run python src/vuer/schemas/__tests__/fixtures/gen_exports.py exports_0.1.6.json
"""

import importlib
import json
import sys

mods = [
  "vuer.schemas",
  "vuer.schemas.scene_components",
  "vuer.schemas.html_components",
  "vuer.schemas.drei_components",
  "vuer.schemas.physics_components",
  "vuer.schemas.material_components",
  "vuer.schemas.vuer_components",
]
out = {}
for m in mods:
  mod = importlib.import_module(m)
  out[m] = sorted(n for n in dir(mod) if not (n.startswith("__") and n.endswith("__")))

# Serialization snapshot: every component class constructed with no arguments.
from vuer.schemas.html_components import Element  # noqa: E402

schemas = importlib.import_module("vuer.schemas")
snap = {}
for name in out["vuer.schemas"]:
  obj = getattr(schemas, name)
  if isinstance(obj, type) and issubclass(obj, Element):
    try:
      e = obj(key=f"k-{name}")
      snap[name] = e._serialize()
    except Exception as exc:  # components with required args
      snap[name] = f"<error {type(exc).__name__}>"

json.dump({"names": out, "serialize": snap}, open(sys.argv[1], "w"), indent=1, sort_keys=True, default=repr)
print({k: len(v) for k, v in out.items()}, len(snap))
