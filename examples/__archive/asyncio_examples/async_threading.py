import threading
import asyncio


class App:
    async def main(self):
        while True:
            print("server")
            await asyncio.sleep(1)

    def run(self):
        loop = asyncio.get_event_loop()
        loop.run_until_complete(self.main())

    def thread_loop(self):
        loop = asyncio.new_event_loop()
        loop.run_until_complete(self.main())

    def run_threaded(self):
        thread = threading.Thread(target=self.thread_loop)
        thread.start()


if __name__ == "__main__":
    import time

    app = App()
    app.run_threaded()

    while True:
        print("vuer")
        time.sleep(1.0)
