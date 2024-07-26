from datetime import datetime as Datetime, timedelta as Timedelta
from typing import List, Union
from uuid import uuid4

from vuer.schemas import Scene, Element
from vuer.serdes import serializer


class Event:
    """
    An event is a message sent from the server to the client.
    """

    ts: float
    """
    timestamp is a float representing the UTC datetime. Msgpack natively
    supports this. `datetime`'s Datetime class is significantly more 
    complex as it includes timezone information.
    """

    def __eq__(self, etype):
        """
        Check if the event is of a certain type.
        :param etype: The type to check.
        :return: True if the event is of the given type, False otherwise.
        """
        return self.etype == etype


class ClientEvent(Event):
    value = None

    def __repr__(self):
        return f"client<{self.etype}>({self.value})"

    def __init__(self, etype=None, ts=None, **kwargs):
        if ts is None:
            self.ts = Datetime.timestamp(Datetime.now())
        else:
            self.ts = Datetime.fromtimestamp(ts / 1000)

        self.etype = etype
        self.__dict__.update(kwargs)

        if self == "UPLOAD":
            import base64
            import io
            from PIL import Image

            image = Image.open(io.BytesIO(base64.b64decode(self.value)))
            self.value = image


class InitEvent(ClientEvent):
    def __init__(self, **kwargs):
        super().__init__(etype="Init", **kwargs)


INIT = InitEvent()


class NullEvent(ClientEvent):
    def __init__(self, **kwargs):
        super().__init__(etype="NULL", **kwargs)


NULL = NullEvent()


# class Meta(type):
#     def __matmul__(cls, data):
#         instance = cls.__new__(cls)
#         return cls.__init__(instance, data)


class ServerEvent(Event):  # , metaclass=Meta):
    def __init__(
        self, data, etype=None, ts: Union[Datetime, Timedelta] = None, **kwargs
    ):
        if ts is None:
            self.ts = Datetime.timestamp(Datetime.now())
        else:
            self.ts = Datetime.fromtimestamp(ts / 1000)
        self.data = data

        if etype is not None:
            self.etype = etype

        self.__dict__.update(etype=self.etype, **kwargs)

    def serialize(self):
        """
        Serialize the event to a dictionary for sending over the websocket.
        :return: A dictionary representing the event.
        """
        # Sequence includes text
        return {**self.__dict__, "data": serializer(self.data)}


class Noop(ServerEvent):
    etype = "NOOP"

    def __init__(self, **kwargs):
        super().__init__(data=None, **kwargs)


NOOP = Noop()


class Set(ServerEvent):
    """Set Operation (Server Event).

    SET Operator is used exclusively to set the root Scene node. Throws an error (on the client side)
    if the data is not a Scene object.
    """

    etype = "SET"
    """The Event Type."""

    def __init__(self, data: Scene):
        """
        :param data: The data to set.
        """
        super().__init__(data)


class Update(ServerEvent):
    """
    UPDATE Operator is used to update a specific node in the scene graph.

    Use "$delete" value for elements you want to remove. Or "$strict" mode to
    copy the element verbatim.

    Example:
        app.update @ { "key": "my_key", "value": "$delete" }

        app.update({ "key": "my_key", "value": "$delete" }, strict=True)

        app.update @ [ { "key": "my_key", "value": "$delete" }, ... ]

        app.update({ "key": "my_key", "value": "$delete" }, ...,  strict=True)
    """

    etype = "UPDATE"

    def __init__(self, *elements: Element, strict=False):
        # tuple is not serializable
        super().__init__({"nodes": elements}, strict=strict)

    def serialize(self):
        return {
            **self.__dict__,
            "data": {
                "nodes": [serializer(node) for node in self.data["nodes"]],
            },
        }


class Add(ServerEvent):
    """
    ADD Operator is used to insert new nodes to the scene graph. By default it
    inserts into the root node, but you can specify a parent node to insert into
    via the `to` argument.

    Note: only supports a single parent key right timestamp.

    Example:
        app.add @ Element(...)

        app.add @ [ Element(...), Element(...), ... ]

        app.add(Element, to="my_parent_key")

        app.add([Element, ...], to="my_parent_key")

    """

    etype = "ADD"

    def __init__(self, *elements: List[Element], to: str = None):
        # tuple is not serializable
        event_data = dict(
            nodes=elements,
            to=to,
        )
        super().__init__(data=event_data)

    def serialize(self):
        return {
            **self.__dict__,
            "data": {
                "nodes": [serializer(node) for node in self.data["nodes"]],
                "to": self.data["to"],
            },
        }


class Upsert(ServerEvent):
    """
    UPSERT Operator is used to update nodes to new values, when then they do not
    exist, insert new ones to the scene graph.

    Note: only supports a single parent key right timestamp.

    Example:
        app.upsert @ Element(...)

        app.upsert @ [ Element(...), Element(...), ... ]

        app.upsert(Element, to="my_parent_key")

        app.upsert([Element, ...], to="my_parent_key")

    """

    etype = "UPSERT"

    def __init__(self, *elements: List[Element], to: str = None, strict=False):
        # tuple is not serializable
        event_data = dict(
            nodes=elements,
            to=to,
            strict=strict,
        )
        super().__init__(data=event_data)

    def serialize(self):
        return {
            **self.__dict__,
            "data": {
                "nodes": [serializer(node) for node in self.data["nodes"]],
                "to": self.data["to"],
            },
        }


class Remove(ServerEvent):
    """
    An Update ServerEvent is sent to the client when the server wants to update the client's state.
    It appends the data sent in the Update ServerEvent to the client's current state.
    """

    etype = "REMOVE"

    def __init__(self, *keys: List[str], **kwargs):
        # tuple is not serializable
        super().__init__(data={"keys": keys}, **kwargs)


class Frame(ServerEvent):
    """
    A higher-level ServerEvent that wraps other ServerEvents
    """

    ServerEvent: ServerEvent
    etype = "FRAME"

    def __init__(self, data: ServerEvent, frame_rate=60.0, **kwargs):
        """Frame object returns a NOOP client event, to keep the on_socket generator
        running at a constant rate.

        :param data:
        :param frame_rate: default to 60, set this for wait time between frames
        :param kwargs:
        """
        super().__init__(data, **kwargs)
        self.frame_rate = frame_rate


class End(ServerEvent):
    """
    A higher-level ServerEvent that wraps other ServerEvents
    """

    etype = "TERMINATE"

    def __init__(self, **kwargs):
        super().__init__(None, **kwargs)


END = End()


class ServerRPC(ServerEvent):
    uuid: str
    etype = "RPC"

    # we can override this in the constructor to control the behavior on the front end.
    rtype = "RPC_RESPONSE@{uuid}"

    def __init__(self, data, uuid=None, **kwargs):
        self.uuid = uuid or str(uuid4())
        super().__init__(data, **kwargs)


class GrabRender(ServerRPC):
    """
    A higher-level ServerEvent that wraps other ServerEvents
    """

    etype = "GRAB_RENDER"

    def __init__(self, *, key: str = "DEFAULT", **kwargs):
        super().__init__(data=kwargs)
        self.key = key
        self.rtype = f"GRAB_RENDER_RESPONSE@{self.uuid}"


if __name__ == "__main__":
    # e = Frame @ {"hey": "yo"}
    # print(e)
    # print(e.data)
    #
    # e = Set @ {"data": "new"}
    # print(e.serialize())
    e = GrabRender({"message": "hey"})
    print(e.serialize())
