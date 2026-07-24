import {test} from "@playwright/test";
test("sample4",async({page}) => {
    await page.goto("https://www.saucedemo.com/inventory.html");
    await page.getByText("Sauce Labs Backpack").click();
    await page.getByText("Remove").click();
    await page.close();
})