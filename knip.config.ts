import type { KnipConfig } from "knip";

export default {
  workspaces: {
    "packages/app": {
      entry: ["src/entry.client.tsx"]
    }
  },
} satisfies KnipConfig;
