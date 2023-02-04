import json

import numpy as np

label_file = "/Users/jansenwong/workspace/ei-csail/cmx-python/examples/output/2023-02-03_21-25-09/default.jsonl.result.jsonl"

result_file = label_file + ".result.jsonl"

with open(label_file) as f:
    with open(result_file, "w") as f2:
        lines = f.readlines()
        labels = [json.loads(line) for line in lines]

        for label in labels:
            label["rotation"] = (np.array(label["rotation"])+np.array([np.pi, 0, np.pi])).tolist()
            f2.write(json.dumps(label) + "\n")