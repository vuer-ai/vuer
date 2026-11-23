#!/usr/bin/env bash
# Local checks that PR CI does not run.
#
#   scripts/test-local.sh          # pytest on 3.10, docs build, server smoke test
#
# Then open the printed URL in a browser and check that the bundled
# client_build renders a scene (run a demo, for example docs/examples).
set -euo pipefail
cd "$(dirname "$0")/.."

uv run --python 3.10 --extra dev pytest src specs -q
uvx ruff check src/vuer --select E9,F63,F7,F82

# Docs build (Sphinx).
uv run --extra dev sphinx-build -M html docs docs/_build -q

# Server smoke test: the bundled client_build is served at / on a free port.
port=$(python3 -c 'import socket; s = socket.socket(); s.bind(("127.0.0.1", 0)); print(s.getsockname()[1])')
uv run --extra dev python - "$port" <<'PY' &
import sys
from vuer import Vuer

app = Vuer(host="127.0.0.1", port=int(sys.argv[1]))

@app.spawn(start=True)
async def main(session):
  await session.forever()
PY
server=$!
trap 'kill $server 2>/dev/null || true' EXIT
for _ in $(seq 50); do
  if curl -fsS "http://127.0.0.1:$port/" -o /dev/null 2>/dev/null; then
    echo "server smoke test passed: http://127.0.0.1:$port/"
    exit 0
  fi
  sleep 0.2
done
echo "server did not serve client_build on port $port" >&2
exit 1
