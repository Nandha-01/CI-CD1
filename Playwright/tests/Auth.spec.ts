import {test,expect} from "@playwright/test";
test("Sample1",async({request})=> {
    const resp1=await request.post("https://restful-booker.herokuapp.com/auth",{
        headers:{
         "Content-Type":"application/json"
        },
        data:{
    "username" : "admin",
    "password" : "password123"
}
    });
    const res=await resp1.json();
    const t=res.token;
    const resp2=await request.put("https://restful-booker.herokuapp.com/booking/2",{
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Cookie":`token=${t}`
        },
        data:{
    "firstname" : "Nandha",
    "lastname" : "Brown",
    "totalprice" : 112,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
    });
    const result=await resp2.json();
    console.log(result);
    const resp3=await request.delete("https://restful-booker.herokuapp.com/booking/2",{
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Cookie":`token=${t}`
        }
    });
    expect(resp3.status()).toBe(201);
    expect(resp3.statusText()).toBe("Created");
})