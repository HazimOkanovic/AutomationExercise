import { APIData } from "../../utilities/constants";
import { test, expect } from "../baseTest";
import { request } from "@playwright/test";

test("Valid login", async ({ request }) => {
    const response = await request.post("https://automationexercise.com/api/verifyLogin", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data:  APIData.validLogin 
    });

    expect(await response.status()).toBe(200);
    expect(await response.text.toString).toMatch("User exists!")
});

test("Invalid login", async ({ request }) => {
    const response = await request.post("https://automationexercise.com/api/verifyLogin", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data:  APIData.invalidLogin 
    });

    expect(await response.status).toBe(404);
    expect(await response.text).toMatch("User not found!")
})