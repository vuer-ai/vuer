import json
from datetime import datetime
from pathlib import Path


def load_tracks(root: str = ".data"):
  """
  Load the most recent JSONL file from TrackStore output directory.

  Args:
      root: Directory containing JSONL files

  Returns:
      DataFrame with tracks sorted by timestamp
  """
  import pandas as pd

  root = Path(root)
  jsonl_files = sorted(root.glob("*.jsonl"))
  if not jsonl_files:
    raise FileNotFoundError(f"No JSONL files found in {root}")

  # Load only the last (most recent) file
  latest_file = jsonl_files[-1]
  rows = []
  with open(latest_file, "r") as f:
    for line in f:
      if line.strip():
        rows.append(json.loads(line))

  df = pd.DataFrame(rows)

  # Sort by timestamp if available
  if "_ts" in df.columns:
    df = df.sort_values("_ts").reset_index(drop=True)

  print(f"[load_tracks] Loaded {len(df)} rows from {latest_file}")
  return df


class TrackStore:
  """
  Row-based store for timestamped tracking data. Columns extracted on demand.
  Auto-flushes to JSONL files in background thread.

  Files are saved to: {root}/{YYYYMMDD}.{HHMMSS}.jsonl

  Example Usage:

      store = TrackStore(".data", flush_interval=2.0)

      store.append(camera=matrix, body=body_data, _ts=ts)
      store.append(camera=matrix2, _ts=ts2)

      # Extract single column
      camera_col = store["camera"]        # [matrix, matrix2, ...]
      body_col = store.body               # [body_data, None, ...]
      timestamps = store["_ts"]           # [ts, ts2, ...]

      # Extract multiple columns
      cam, body = store["camera", "body"]  # Two lists
      df_subset = store[["camera", "body"]]  # DataFrame with selected columns

      # Get full DataFrame
      df = store[...]

      # Stop background flushing
      store.stop()

  """

  def __init__(self, root: str = ".data", flush_interval: float = 2.0):
    import os
    import threading

    self._rows: list[dict] = []
    self._root = root
    self._flush_interval = flush_interval
    self._lock = threading.Lock()
    self._stop_event = threading.Event()
    self._thread = None
    self._current_file = None

    if root:
      os.makedirs(root, exist_ok=True)
      print("[TrackStore] Starting flush thread...")
      self._start_flush_thread()
      print(f"[TrackStore] Thread started: {self._thread.is_alive()}")

  def _get_filename(self) -> str:
    if self._current_file is None:
      ts = datetime.now().strftime("%Y%m%d.%H%M%S")
      self._current_file = f"{self._root}/{ts}.jsonl"
    return self._current_file

  def _start_flush_thread(self):
    import threading

    def flush_loop():
      import time

      print(f"[TrackStore] Flush thread started (interval={self._flush_interval}s)")
      while not self._stop_event.is_set():
        time.sleep(self._flush_interval)
        if self._stop_event.is_set():
          break
        if self._rows:  # Only flush if there's data
          self._flush_to_file()

    self._thread = threading.Thread(target=flush_loop, daemon=True)
    self._thread.start()

  def _flush_to_file(self):
    with self._lock:
      if not self._rows:
        return
      rows = self._rows.copy()
      self._rows.clear()

    try:
      path = self._get_filename()

      # Append JSON lines to file
      with open(path, "a") as f:
        for row in rows:
          # Convert datetime to ISO string for JSON serialization
          row_copy = row.copy()
          if "_ts" in row_copy and hasattr(row_copy["_ts"], "isoformat"):
            row_copy["_ts"] = row_copy["_ts"].isoformat()
          f.write(json.dumps(row_copy) + "\n")

      print(f"[TrackStore] Flushed {len(rows)} rows to {path}")
    except Exception as e:
      import traceback

      print(f"[TrackStore] Error flushing: {e}")
      traceback.print_exc()
      # Put rows back on failure
      with self._lock:
        self._rows = rows + self._rows

  def stop(self):
    """Stop background flushing and flush remaining data."""
    self._stop_event.set()
    if self._thread:
      self._thread.join(timeout=1.0)
    if self._root:
      self._flush_to_file()

  def append(self, _ts=None, **kwargs):
    _ts = _ts or datetime.now()
    with self._lock:
      self._rows.append({"_ts": _ts, **kwargs})

  def __getitem__(self, key):
    with self._lock:
      # Ellipsis -> all rows as DataFrame
      if key is ...:
        import pandas as pd

        return pd.DataFrame(self._rows)
      # Single key -> list
      if isinstance(key, str):
        return [row.get(key) for row in self._rows]
      # Multiple keys as tuple -> tuple of lists
      if isinstance(key, tuple):
        return tuple([row.get(k) for row in self._rows] for k in key)
      # Multiple keys as list -> DataFrame subset
      if isinstance(key, list):
        import pandas as pd

        return pd.DataFrame([{k: row.get(k) for k in key} for row in self._rows])
      raise KeyError(key)

  def __getattr__(self, key: str) -> list:
    if key.startswith("_"):
      raise AttributeError(key)
    return self[key]

  @property
  def columns(self) -> set[str]:
    with self._lock:
      cols = set()
      for row in self._rows:
        cols.update(row.keys())
      return cols

  def __len__(self):
    with self._lock:
      return len(self._rows)

  def clear(self):
    with self._lock:
      self._rows.clear()

  def to_dataframe(self):
    import pandas as pd

    with self._lock:
      return pd.DataFrame(self._rows)
