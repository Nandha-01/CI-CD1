import {test} from "../fixtures/Myfixtures1.ts";
test("Login for Page",async({page,fixtures1})=> {
    await page.getByText("Sauce Labs Backpack").click();
    await page.getByText("Remove").click();
    await page.close();
})