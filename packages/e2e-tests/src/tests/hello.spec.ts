import { expect } from "@playwright/test";

import { test } from "~/playwright/fixtures.js";

test("hello", async ({ page }) => {
  await expect(
    page.getByText("hello"),
  ).toBeVisible();
});
