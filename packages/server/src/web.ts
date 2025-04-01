import { readFileSync } from "fs";
import type { Server as HttpServer } from "http";
import { createServer as httpCreateServer } from "http";
import type { Server as HttpsServer } from "https";
import { createServer as httpsCreateServer } from "https";

import { listenAddress, tls } from "./config.js";

type WebServer = HttpServer | HttpsServer;

export const webServer: WebServer = tls
  ? httpsCreateServer(
      {
        cert: readFileSync(tls.certPath),
        key: readFileSync(tls.keyPath),
      },
    )
  : httpCreateServer();

export async function startWebServer(): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    const handleError = (error: Error): void => {
      reject(error);
    };

    webServer.on("error", handleError);

    webServer.listen(listenAddress, () => {
      webServer.off("error", handleError);
      resolve();
    });
  });
}

export async function stopWebServer(): Promise<void> {
  await new Promise<void>((resolve) => {
    webServer.close(() => {
      resolve();
    });
  });
}
