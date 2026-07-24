import {test} from "@playwright/test";
test("Sample7",async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload");
    const filepromise=page.waitForEvent("filechooser")
    await page.locator("#drag-drop-upload").click();
    const fileresolver=await filepromise;
    await fileresolver.setFiles(["Playwright\\filestoupload\\file1.docx","Playwright\\filestoupload\\file2.docx"]);
})