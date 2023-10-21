from typing import Sequence


def serializer(data):
    if hasattr(data, "serialize"):
        return data.serialize()

    if isinstance(data, str):
        # return Text(data)
        return data

    # this could be dangerous.
    if isinstance(data, Sequence):
        return [serializer(d) for d in data]

    # this could be dangerous
    if isinstance(data, dict):
        return {k: serializer(v) for k, v in data.items()}

    NotImplementedError(f"Cannot serialize {data}")
