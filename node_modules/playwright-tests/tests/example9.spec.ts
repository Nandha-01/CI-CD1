import {test} from "@playwright/test";
test.describe("Sample",() => {
  test("1@UI",async({page}) => {
    console.log("11");
  })
  test("2",{tag:["@UI","@API"]},async({page}) => {
    console.log("12");
  })
  test("3",{tag:["@UI","@API"]},async({page}) => {
    console.log("13");
  })
})
test("Sample11",{tag:["@UI","@smoke"]},async({page}) => {
   console.log("2");
})
test("Sample12",{tag:["@UI","@API"]},async({page}) => {
   console.log("3");
})