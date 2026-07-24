import {test} from "@playwright/test";
test("Sample8",async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload");
})
