```console
$ pnpm install
$ pnpm test

> @ahaines/monorepo@ test ~/knip-repro
> pnpm run clean && pnpm run build && pnpm run knip:good && pnpm run knip:latest


> @ahaines/monorepo@ clean ~/knip-repro
> rm -f tsconfig.tsbuildinfo && rm -rf packages/*/build


> @ahaines/monorepo@ build ~/knip-repro
> tsc --build


> @ahaines/monorepo@ knip:good ~/knip-repro
> node node_modules/knip@good/bin/knip.js

✂️  Excellent, Knip found no issues.

> @ahaines/monorepo@ knip:latest ~/knip-repro
> node node_modules/knip@latest/bin/knip.js

Unused files (5)
packages/shared/src/init.server.ts
packages/shared/src/api/client.server.ts
packages/shared/src/config/listen-address.server.ts
packages/shared/src/config/tls.server.ts
packages/shared/src/polyfills/polyfills.server.ts
Unresolved imports (1)
~/playwright/fixtures.js  packages/e2e-tests/src/tests/hello.spec.ts:3:9
Unused exports (1)
test  packages/e2e-tests/src/playwright/fixtures.ts:3:14
 ELIFECYCLE  Command failed with exit code 1.
 ELIFECYCLE  Test failed. See above for more details.
```
