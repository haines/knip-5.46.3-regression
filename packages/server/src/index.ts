import "./init.js";

import { startWebServer, stopWebServer } from "./web.js";
import { stopWebSocketServer } from "./websocket.js";

const stopSignals = ["SIGINT", "SIGTERM"] as const;

async function start(): Promise<void> {
  await startWebServer();
}

async function stop(): Promise<void> {
  await Promise.all([
    stopWebServer(),
    stopWebSocketServer(),
  ]);
}

function exit(): void {
  for (const signal of stopSignals) {
    process.off(signal, exit);
  }

  stop()
    .then(() => {
      process.exit(0);
    })
    .catch(() => {
      process.exit(1);
    });
}

for (const signal of stopSignals) {
  process.once(signal, exit);
}

start().catch(() => {
  process.exit(1);
});
