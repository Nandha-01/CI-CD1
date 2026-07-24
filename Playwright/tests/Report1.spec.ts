import {test,expect} from "@playwright/test";
test("Sample1",async({page})=> {
    await page.goto("https://www.google.com/?zx=1784652858853");
    await expect(page).toHaveTitle("Google1");
})
test("Sample2",async({page})=> {
    await page.goto("https://www.google.com/?zx=1784652858853");
    await expect(page).toHaveTitle("Google1");
})
test("Sample3",async({page})=> {
    await page.goto("https://www.google.com/?zx=1784652858853");
    await expect(page).toHaveTitle("Google3");
})