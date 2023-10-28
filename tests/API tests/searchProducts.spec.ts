import { APIData, Constants } from "../../utilities/constants";
import { test, expect } from "../baseTest";
import { request } from "@playwright/test";

test("Search blue products", async ({ request }) => {
    const response = await request.post("https://automationexercise.com/api/searchProduct", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data:  APIData.searchBlue 
    });

    expect(await response.status).toBe(200);
    expect(await response.text[2].product.name).toMatch(Constants.blueJeans); //This is just an example of how it is done
});

test("Search yellow products", async ({ request }) => {
    const response = await request.post("https://automationexercise.com/api/searchProduct", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data:  APIData.searchYellow 
    });

    expect(await response.status).toBe(200);
    expect(await response.text[1].product.name).not.toContain(Constants.blueJeans); //This is just an example of how it is done
})