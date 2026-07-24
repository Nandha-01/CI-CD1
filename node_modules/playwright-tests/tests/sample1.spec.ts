import {test,request,expect} from "@playwright/test";
import Apijson from "./sample.json";
test("sample1",async({request})=> {
    // const resp1=await request.post("https://restful-booker.herokuapp.com/booking",{
    //     headers:
    //     {
    //         "Content-Type":"application/json"
    //     },
    //     data:Apijson.postdata
    // });
    // const result1=await resp1.json();
    // expect(resp1.ok()).toBeTruthy();
    // expect(resp1.status()).toBe(200);
    // expect(resp1.statusText()).toBe("OK");
    // console.log(result1.bookingid);
    const resp2=await request.delete("https://restful-booker.herokuapp.com/booking/2",{
        headers:{
            "Content-Type":"application/json",
            "Cookie":"token=806b3713ede1d4a"
        }
    });
     console.log("Status:", resp2.status());
    console.log("Status Text:", resp2.statusText());
    console.log("Body:", await resp2.text());
})