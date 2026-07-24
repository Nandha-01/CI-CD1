import {test,expect} from "@playwright/test";
test("Practice2",async({request}) => {
    const resp1=await request.get("/booking/145");
    //console.log(await resp1.json());
    expect(resp1.status()).toBe(200);
    expect(resp1.ok()).toBeTruthy();
    const jsonformat1=await resp1.json();
    expect(await resp1.json()).toMatchObject({
    "firstname": "Jane",
    "lastname": "Doe",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
    },
    "additionalneeds": "Extra pillows please"
})
   expect(jsonformat1.firstname).toEqual("Jane");
})