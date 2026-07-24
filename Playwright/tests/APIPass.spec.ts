import {test,expect} from "@playwright/test";
import ApiJson from "../tests/apidata.json";
test("PostCall",async({request}) => {
    const resp1=await request.post("https://restful-booker.herokuapp.com/booking",{
        data:ApiJson.postcalldata
    })
    const result1=await resp1.json();
    expect(result1.booking).toMatchObject(ApiJson.postcalldata);
    expect(result1.booking.additionalneeds).toEqual(ApiJson.postcalldata.additionalneeds);

})
test("Pass Request Payload",async({request})=>{
const resp2=await request.put("https://restful-booker.herokuapp.com/booking/1",{
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
    },
    data:ApiJson.postcalldata
})
const result2=await resp2.json();
expect(result2).toEqual(ApiJson.postcalldata);
})