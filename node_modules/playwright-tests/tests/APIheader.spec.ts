import {test,expect} from "@playwright/test";
test("Sample1",async({request})=>{
    const resp1=await request.get("https://restful-booker.herokuapp.com/booking/1",{
        headers:{
            "Accept":"application/json"
        }
    });
    const h1=resp1.headers();
    console.log(h1);
    expect(h1.server).toEqual('Heroku');
    expect(h1["x-powered-by"]).toEqual('Express');
    const h2=resp1.headersArray();
    console.log(h2);
    expect(h2.length).toBe(10);
    h2.forEach((header)=> {
        console.log(header.value);
    })
})