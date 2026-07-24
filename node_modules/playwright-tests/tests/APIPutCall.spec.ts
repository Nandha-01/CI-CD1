import { test, expect } from "@playwright/test";

test("Sample1", async ({ request }) => {

    const resp1 = await request.put("/booking/1", {   // Use your valid booking ID
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Cookie": "token=ef8e35bd414088d7"      // Replace with your latest token
        },
        data: {
            firstname: "James",
            lastname: "Brown",
            totalprice: 135,
            depositpaid: true,
            bookingdates: {
                checkin: "2018-01-01",
                checkout: "2019-01-01"
            },
            additionalneeds: "Breakfast"
        }
    });

    // Verify status
    //expect(resp1.ok()).toBeTruthy();
    expect(resp1.status()).toBe(200);
    expect(resp1.statusText()).toBe("OK");

    // Parse response
    const resp2 = await resp1.json();

    console.log(resp2);

    // Validate response body
    expect(resp2).toMatchObject({
        firstname: "James",
        lastname: "Brown",
        totalprice: 135,
        depositpaid: true,
        bookingdates: {
            checkin: "2018-01-01",
            checkout: "2019-01-01"
        },
        additionalneeds: "Breakfast"
    });

});
