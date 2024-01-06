from cmx import doc

doc @ """
# URDF (Serving Locally)

"""
with doc, doc.skip:
    import math
    from asyncio import sleep
    from pathlib import Path

    from vuer import Vuer, VuerSession
    from vuer.schemas import DefaultScene, Urdf, Movable

    pi = 3.1415

    app = Vuer(static_root=Path(__file__).parent / "../../assets")

    @app.spawn(start=True)
    async def main(sess: VuerSession):
        sess.set @ DefaultScene(
            Movable(
                Urdf(
                    src="http://localhost:8012/static/robots/mini_cheetah/mini_cheetah.urdf",
                    jointValues={
                        "FL_hip_joint": -0.2,
                        "RL_hip_joint": -0.2,
                        "FR_hip_joint": 0.2,
                        "RR_hip_joint": 0.2,
                        "FL_thigh_joint": -0.25 * pi,
                        "RL_thigh_joint": -0.25 * pi,
                        "FR_thigh_joint": -1.3,
                        "RR_thigh_joint": -0.25 * pi,
                        "FL_calf_joint": 0.5 * pi,
                        "RL_calf_joint": 0.5 * pi,
                        "FR_calf_joint": 0.6 * pi,
                        "RR_calf_joint": 0.5 * pi,
                    },
                    key="robot",
                ),
                position=[0, 0, 0.3],
                scale=0.4,
            ),
            grid=True,
        )

        await sleep(0.1)

        i = 0
        while True:
            sess.update @ Urdf(
                src="http://localhost:8012/static/robots/mini_cheetah/mini_cheetah.urdf",
                jointValues={
                    "FL_hip_joint": -0.2,
                    "RL_hip_joint": -0.2,
                    "FR_hip_joint": 0.2,
                    "RR_hip_joint": 0.2,
                    "FL_thigh_joint": -0.25 * pi,
                    "RL_thigh_joint": -0.25 * pi,
                    "FR_thigh_joint": 0.5 * math.sin(i * 0.1) - 1.3,
                    "RR_thigh_joint": -0.25 * pi,
                    "FL_calf_joint": 0.5 * pi,
                    "RL_calf_joint": 0.5 * pi,
                    "FR_calf_joint": -0.5 * math.sin(i * 0.1) + 0.6 * pi,
                    "RR_calf_joint": 0.5 * pi,
                },
                key="robot",
            )
            await sleep(0.016)
            i += 1
