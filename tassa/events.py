class ClientEvent:
    def __init__(self, etype=None, **kwargs):
        self.etype = etype
        self.__dict__.update(kwargs)

        if self @ "UPLOAD":
            import base64
            import io
            from PIL import Image
            image = Image.open(io.BytesIO(base64.b64decode(self.value)))
            self.value = image

    def __matmul__(self, etype):
        """
        Check if the event is of a certain type.
        :param etype: The type to check.
        :return: True if the event is of the given type, False otherwise.
        """
        return self.etype == etype


# class MetaEvent(type):
#     def __matmul__(cls, data, *args, **kwargs):
#         return super().__new__(cls, data, *args, **kwargs)


class Event:
    """
    An event is a message sent from the server to the client.
    """

    def __init__(self, data, etype=None, **kwargs):
        self.etype = etype
        self.data = data
        self.__dict__.update(kwargs)

    def serialize(self):
        """
        Serialize the event to a dictionary for sending over the websocket.
        :return: A dictionary representing the event.
        """
        return {**self.__dict__, "data": self.data.serialize()}


class Set(Event):
    """
    A Set event is sent to the client when the client first connects to the server.
    It replaces the client's current state with the state sent in the Set event.
    """

    def __init__(self, data, **kwargs):
        super().__init__(data, etype="SET", **kwargs)


class Update(Event):
    """
    An Update event is sent to the client when the server wants to update the client's state.
    It appends the data sent in the Update event to the client's current state.
    """

    def __init__(self, data, **kwargs):
        super().__init__(data, etype="UPDATE", **kwargs)
