
# Collecting Render from Multiple Browser Sessions

This is a simple example for building a job queue to collect render from multiple browser sessions.

```python
import os
from ml_logger import ML_Logger
from pandas import DataFrame

logger = ML_Logger(root=os.getcwd(), prefix="assets")
doc.print(logger)

matrices = logger.load_pkl("metrics.pkl")
matrices = DataFrame(matrices)["matrix"].values.tolist()
```

```
ML_Logger(root="/Users/ge/mit/vuer/docs/tutorials/camera",
          prefix="assets")
```
```python
from asyncio import sleep

from vuer import Vuer
from vuer.schemas import DefaultScene, CameraView

app = Vuer(queries=dict(grid=False))
```

Setting the virtual camera to `ondemand` mode gives control to the python side, to initiate the rendering events.

```python
virtual_camera = CameraView(key="ego", stream="ondemand", monitor=False)
scene = DefaultScene(rawChildren=[virtual_camera])
```

## Job Queue

We define a simple job queue where each job is a dictionary of parameters. The keys are 
immutable. We will use a done flag to mark the job status.

```python
from time import time
from uuid import uuid4

class JobQueue(dict):
    def __init__(self, ttl=5):
        """A simple job queue.

        Args:
            data (dict): a dictionary of jobs.
            ttl (int, optional): time to live. Defaults to 5.
        """
        super().__init__()
        self._ttl = ttl

    def take(self):
        """Grab a job that has not been grabbed from the queue."""

        for k in sorted(self.keys()):
            job = self[k]
            if job["status"] is None:
                continue
            job["grab_ts"] = time()
            job["status"] = "in_progress"
            break

        return job, lambda: self.mark_done(k), lambda: self.mark_reset(k)

    def append(self, job_params):
        """Append a job to the queue."""

        k = str(uuid4())
        self[k] = {
            "created_ts": time(),
            "status": None,
            "grab_ts": None,
            "job_params": job_params,
        }

    def mark_done(self, key):
        """Mark a job as done."""
        del self[key]

    def mark_reset(self, key):
        self[key]["status"] = None

    def house_keeping(self):
        """Reset jobs that have become stale."""
        for job in self.values():
            if job["status"]:
                continue
            if job["grab_ts"] < (time() - self._ttl):
                job["status"] = None
```
## Create a job queue.

**Note**: NOT thread and process safe.

```python
job_queue = JobQueue()
```
populate the queue with fake jobs.
```python
for i in range(100):
    job_queue.append({"param_1": i * 100, "param_2": f"key-{i}"})
```
```python
from tqdm import trange

@app.spawn(start=True)
async def show_heatmap(proxy):
    proxy.set @ scene
    await sleep(0.0)

    # here is the job handling logic: might want to switch to a context manager.
    key, mark_done, put_back = job_queue.take()
    try:
        print(f"I took job-{key}.")
        print(""" Put your work over here. """)
        for step in trange(100, desc=f"iterate through job steps"):
            # update scene with params:
            await sleep(0.02)
            # uncomment the following line to grab the rendering result.
            # result = await proxy.grab_render(downsample=1, key="ego")

        print("Job is completed.")
        # now the job has been finished, we mark it as done by removing it from the queue.
        mark_done()
    except:
        print("Oops, something went wrong. Putting the job back to the queue.")
        put_back()
```
