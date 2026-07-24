import {test} from "@playwright/test";
test("Sample6",async({page}) => {
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.locator("#filesToUpload").setInputFiles(["Playwright\\filestoupload\\file1.docx","Playwright\\filestoupload\\file2.docx"]);
    await page.locator("#filesToUpload").setInputFiles([]);
})