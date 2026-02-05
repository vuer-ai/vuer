import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Collecting Renders from Multiple Browser Sessions

This tutorial builds on [Collecting Renders from a Virtual Camera](grab_render_virtual_camera.md)
and shows you how to scale up render collection using a job queue with multiple browser sessions.

In the previous tutorial, we used `grab_render()` to capture frames from a single browser session.
When you need to render many frames (e.g., for dataset generation), you can parallelize the work
across multiple browser sessions connecting to the same Vuer server.

This tutorial will teach you how to:
- Create a simple job queue to manage rendering tasks
- Handle multiple browser sessions concurrently
- Implement error handling with job recovery

```{admonition} Use Case
:class: tip
This pattern is useful for generating large datasets, running batch rendering jobs,
or distributing work across multiple machines.
```
"""

doc @ """
## Step 1: Set Up Imports and Scene

First, we set up the basic imports and create a scene with an on-demand virtual camera.
"""
with doc:
    from asyncio import sleep

    from vuer import Vuer
    from vuer.schemas import DefaultScene, CameraView

    app = Vuer(queries=dict(grid=False))

    # Setting stream="ondemand" gives Python control over when frames are rendered
    virtual_camera = CameraView(key="ego", stream="ondemand", monitor=False)
    scene = DefaultScene(rawChildren=[virtual_camera])

doc @ """
## Step 2: Implement the Job Queue

We define a simple job queue where each job is a dictionary of parameters. The queue
tracks job status and supports recovery of failed jobs.

Each job has three possible states:
- `None`: Available, waiting to be taken
- `"in_progress"`: Currently being processed by a browser session
- Removed from queue: Completed successfully

```{admonition} Thread Safety
:class: warning
This implementation is NOT thread or process safe. For production use,
consider using Redis, RabbitMQ, or another distributed queue.
```
"""
with doc:
    from time import time
    from uuid import uuid4

    class JobQueue(dict):
        def __init__(self, ttl=5):
            """A simple job queue with timeout-based recovery.

            Args:
                ttl (int, optional): Time-to-live in seconds. Jobs not completed
                    within this time are reset. Defaults to 5.
            """
            super().__init__()
            self._ttl = ttl

        def take(self):
            """Take an available job from the queue.

            Returns:
                tuple: (job_dict, mark_done_callback, put_back_callback)
            """
            for k in sorted(self.keys()):
                job = self[k]
                if job["status"] is not None:
                    continue
                job["grab_ts"] = time()
                job["status"] = "in_progress"
                return job, lambda: self.mark_done(k), lambda: self.mark_reset(k)

            return None, None, None  # No available jobs

        def append(self, job_params):
            """Add a new job to the queue."""
            k = str(uuid4())
            self[k] = {
                "created_ts": time(),
                "status": None,
                "grab_ts": None,
                "job_params": job_params,
            }

        def mark_done(self, key):
            """Remove a completed job from the queue."""
            del self[key]

        def mark_reset(self, key):
            """Reset a job to available status (for retry)."""
            self[key]["status"] = None

        def house_keeping(self):
            """Reset stale jobs that exceeded their TTL."""
            for job in self.values():
                if job["status"] != "in_progress":
                    continue
                if job["grab_ts"] < (time() - self._ttl):
                    job["status"] = None

doc @ """
## Step 3: Create and Populate the Job Queue

Now we create a job queue and populate it with rendering jobs. In a real application,
these jobs might contain camera poses, scene parameters, or other rendering settings.
"""
with doc:
    job_queue = JobQueue(ttl=10)

    # Populate the queue with 100 rendering jobs
    for i in range(20):
        job_queue.append({"param_1": i * 100, "param_2": f"key-{i}"})

doc @ """
## Step 4: Track Connected Sessions

We use a simple counter to track how many browser sessions are currently connected.
This helps monitor the parallelism of your rendering pipeline.
"""
with doc:
    from threading import Lock

    class SessionCounter:
        """Thread-safe counter for tracking connected sessions."""

        def __init__(self):
            self._count = 0
            self._lock = Lock()

        def increment(self):
            with self._lock:
                self._count += 1
                return self._count

        def decrement(self):
            with self._lock:
                self._count -= 1
                return self._count

        @property
        def count(self):
            with self._lock:
                return self._count

    session_counter = SessionCounter()

doc @ """
## Step 5: Process Jobs from the Queue

Each browser session that connects will take jobs from the queue and process them.
The `@app.spawn` decorator creates a handler that runs for each connected session.

Key points:
- Each session takes one job at a time from the queue
- On success, `mark_done()` removes the job from the queue
- On failure, `put_back()` resets the job so another session can retry
- The session counter tracks active connections
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():

    @app.spawn(start=True)
    async def main(proxy):
        # Track this session
        session_id = session_counter.increment()
        print(f"Session {session_id} connected. Total sessions: {session_counter.count}")

        try:
            # Set up the scene for this browser session
            proxy.set @ scene
            await sleep(0.0)

            # Process jobs until the queue is empty
            while True:
                # Take an available job from the queue
                job, mark_done, put_back = job_queue.take()

                if job is None:
                    print(f"[Session {session_id}] No more jobs available. Waiting...")
                    await sleep(1.0)
                    continue

                try:
                    params = job["job_params"]
                    print(f"[Session {session_id}] Processing job: {params}")

                    # Simulate multi-step rendering work
                    for _ in range(100):
                        # Update scene with job parameters here
                        # proxy.update @ [...]
                        await sleep(0.02)

                        # Capture a render (uncomment to use)
                        # result = await proxy.grab_render(downsample=1, key="ego")

                    print(f"[Session {session_id}] Job completed.")
                    mark_done()

                except Exception as e:
                    print(f"[Session {session_id}] Job failed: {e}. Returning to queue.")
                    put_back()

        finally:
            # Clean up when session disconnects
            remaining = session_counter.decrement()
            print(f"Session {session_id} disconnected. Remaining sessions: {remaining}")

doc @ """
## Step 6: Running the Tutorial

Paste the code into `render_queue.py` and run:

```bash
python render_queue.py
```

Open the URL printed in the terminal (usually `https://vuer.ai`) in **multiple browser tabs**.
Each tab will connect as a separate session and start processing jobs from the queue.

## How It Works

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Browser 1  │     │  Browser 2  │     │  Browser 3  │
└──────┬──────┘     └──────┬──────┘     └──────┬──────┘
       │                   │                   │
       └───────────────────┴───────────────────┘
                           │
                    ┌──────▼──────┐
                    │ Vuer Server │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │  Job Queue  │
                    │ [100 jobs]  │
                    └─────────────┘
```

Each browser session:
1. Takes an available job from the queue
2. Processes the job (updates scene, captures renders)
3. Marks the job as done or puts it back on failure
4. Repeats until the queue is empty

This pattern allows you to scale rendering by simply opening more browser tabs
or connecting from multiple machines.
"""

doc.flush()
