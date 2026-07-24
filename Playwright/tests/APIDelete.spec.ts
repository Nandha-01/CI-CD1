import {test,expect} from "@playwright/test";
test("Sample1",async({request})=>{
  const resp1=await request.delete("https://restful-booker.herokuapp.com/booking/4",{
    headers:
    {
        "Content-Type":"application/json",
        "Authorization":"Basic YWRtaW46cGFzc3dvcmQxMjM="
    }
  })
expect(resp1.status()).toBe(201);
expect(resp1.statusText()).toBe("Created");
const resp2=await request.get("https://restful-booker.herokuapp.com/booking/4");
expect(resp2.status()).toBe(404);
})