import{test} from "@playwright/test";
test("Sample1",async({request})=> {
    const resp2=await request.post("https://api.demoblaze.com/addtocart",{
        data:{
            "cookie":"user=096d6225-6809-afff-e50f-912bf7501fb7",
              "flag": false,
              "id": "43dc8dac-aa52-f9f1-53e4-2c0f6d7bb0e2",
              "prod_id":3
        }
});
    
})