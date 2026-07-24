import { test, expect } from "@playwright/test";

test("Sample11", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await expect(page.locator(".hero.hero--primary.heroBanner_UJJx").textContent()).toMatchSnapshot("BasePage.txt");
})