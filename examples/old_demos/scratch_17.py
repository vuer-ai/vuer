from pathlib import Path

from cmx import doc

with doc:
    import numpy as np
    import matplotlib.pyplot as plt

    for i in range(10):
        print(i)

    xs = np.linspace(0, 5, 101)
    ys = np.sin(2 * np.pi * xs)
    plt.plot(xs)

    print(Path(__file__).stem)
    print(doc.window.logger)
    doc.savefig(f"{Path(__file__).stem}/sine.png")
