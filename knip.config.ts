import type { KnipConfig } from "knip@good";

const paths = {
  "@ahaines/shared/*": ["../shared/src/*.ts"],
} satisfies KnipConfig["paths"];

export default {
  exclude: ["dependencies", "devDependencies"],
  playwright: {
    config: "playwright.config.ts",
    entry: ["**/*.spec.ts"],
  },
  workspaces: {
    "packages/*": {
      paths,
    },
    "packages/app": {
      entry: ["src/entry.client.tsx"],
      paths,
    },
    "packages/shared": {},
  },
} satisfies KnipConfig;
