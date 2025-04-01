
import { client } from "@ahaines/shared/api/client.server";

import { webServer } from "./web.js";

function handleUpgrade(): void {
  client();
}

webServer.on("upgrade", handleUpgrade);

export async function stopWebSocketServer(): Promise<void> {}
