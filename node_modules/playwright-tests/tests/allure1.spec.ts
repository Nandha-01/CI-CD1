import {test,expect} from "@playwright/test";
test("Sample1",async({page})=> {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})
test("Sample2",async({page})=> {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google1");
})
test("Sample3",async({page})=> {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google2");
})