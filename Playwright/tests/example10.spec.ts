import {test} from "@playwright/test";
test("Sample11",{
  annotation:[{
    type:"issue1",
    description:"This is sample issue modulation1",
  },
{
  type:"issue2",
    description:"This is sample issue modulation2",
}]
},async({page}) => {
  await page.goto("https://www.google.com");
})