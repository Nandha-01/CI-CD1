import {test} from "@playwright/test";
test("sample5",async({page}) => {
    await page.goto("https://testpages.eviltester.com/pages/forms/html-form/");
    const input1=page.locator('[name="username"]');
    await input1.fill("Nandha");
    await input1.press("Control+a");
    await input1.press("Control+c");
    await input1.press("Backspace");
    const input2=page.locator('[name="password"]');
    await input2.press("Control+v");
    await input2.press("ArrowLeft+ArrowLeft+ArrowLeft");
    await input2.fill("nandha");
    await input2.press("Control+a");
    await input1.press("Control+v");
    await page.keyboard.press("PageDown");
    const input3=page.locator('[name="comments"]');
    await input3.press("Control+v");
})