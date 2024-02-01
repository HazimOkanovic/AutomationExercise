import { APIData, Constants } from "../../constants";
import { test, expect } from "../baseTest";

test("Search blue products", async ({ request }) => {
    const response = await request.post("https://automationexercise.com/api/searchProduct", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data:  APIData.searchBlue 
    });

    const jsonResponse = response.json();
    
    expect(await response.status).toBe(200);
    expect(await jsonResponse[1].product.name).toMatch(Constants.blueJeans); 
});

test("Search yellow products", async ({ request }) => {
    const response = await request.post("https://automationexercise.com/api/searchProduct", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data:  APIData.searchYellow 
    });

    const jsonResponse = response.json();

    expect(await response.status).toBe(200);
    expect(await jsonResponse[1].product.name).not.toContain(Constants.blueJeans);
});