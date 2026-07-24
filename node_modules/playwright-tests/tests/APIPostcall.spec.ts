import {test,expect} from "@playwright/test";
test("PostCall",async({request,page}) => {
    const resp1=await request.post("/booking",{
        data:
        {
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates":
         {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
        }
    })
    const json1=await resp1.json();
    console.log(json1);
    expect(resp1.status()).toBe(200);
    expect(resp1.ok()).toBeTruthy();
    expect(resp1.statusText()).toBe("OK");
    expect(json1.booking).toMatchObject({
    firstname: 'Jim',
    lastname: 'Brown',
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Breakfast'
  });
  expect(json1.booking.additionalneeds).toEqual("Breakfast");
   
})