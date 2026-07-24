import {test as baseTest} from "@playwright/test";
type fixtures={
    fixtures1:undefined;
}
export const test=baseTest.extend<fixtures>({
    fixtures1:async({page},use)=>{
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:"Login"}).click();
    await use;
    },
})