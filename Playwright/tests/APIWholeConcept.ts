import {test,request,expect}from "@playwright/test";
test("Sample1",async({request})=> {
    const resp=await request.post("https://restful-booker.herokuapp.com/booking",{
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
    const result=await resp.json();
    const bookingid=result.bookingid;
    const resp1=await request.get(`https://restful-booker.herokuapp.com/booking/${bookingid}`);
    expect(resp1.ok()).toBeTruthy();
    expect(resp1.status()).toBe(200);
    expect(resp1.statusText()).toBe("OK");
    console.log(await resp1.json());
    console.log(bookingid);
    const resp2=await request.patch(`https://restful-booker.herokuapp.com/booking/${bookingid}`,{
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Authorization":"Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data:{
    "firstname": "Nandha",
    "lastname": "Gurusamy",
}
});
    console.log(await resp2.json());
     const resp3=await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingid}`,{
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Authorization":"Basic YWRtaW46cGFzc3dvcmQxMjM="
        }
});
    expect(resp3.status()).toBe(201);
    expect(resp3.statusText()).toBe("Created");
    const h1=resp3.headers();
    console.log(h1);
    expect(h1.server).toEqual('Heroku');
    expect(h1['x-powered-by']).toEqual('Express');
    const h2=resp3.headersArray();
    console.log(h2);
    const resp4=await request.get(`https://restful-booker.herokuapp.com/booking/${bookingid}`);
    expect(resp4.status()).toBe(404);
    expect(resp4.statusText()).toBe("Not Found");
})
