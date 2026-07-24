import { test, request } from "@playwright/test";

let reqContext1: Awaited<ReturnType<typeof request.newContext>>;

test.beforeAll(async () => {
  reqContext1 = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com",
        params:{
        //firstname and lastname and such as and extraheaderHTTP can be used instead of headers
        }
  });
});

test("Practice1", async () => {
  const resp1 = await reqContext1.get("/booking",{
    headers:{
        Accept:"application/json"
    }
  });
  console.log(await resp1.json());
});
test("Practice3", async ({request}) => {
  const resp2=await request.get("https://restful-booker.herokuapp.com/booking");
  console.log(await resp2.json());
  //or else baseURL:"https://restful-booker.herokuapp.com" in config file
});