# somehwere in your code:


pos_0, rot_0 = [...], [...]

grippers = dict(gripper_0=[pos_0, rot_0])

event = yeild Set(Scene(
    Movable(Gripper(position=pos_0, rotation=rot_0, key="gripper_0"))
    , key="worldbody"))

while ...:
    event = ...
    if event == "MOVE":
        obj_key = event.key
        if event.key == f"gripper_{grippers.__len__() / 2}":
            grippers[f"gripper_{grippers.__len__()}"] = [pos_0, rot_0]
        else:
            # Will do some processing here
            grippers[obj_key] = [event.position, event.rotation]
        event = yield Update(Scene(
            *[

                Movable(
                    Gripper(position=pos, rotation=rot, key=f"gripper_{i}"),
                )
                for key, (pos, rot) in gripper.items()]
        ), key='worldbody')
