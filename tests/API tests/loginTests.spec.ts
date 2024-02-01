import { APIData, Constants } from "../../constants";
import { test, expect } from "../baseTest";

test("Valid login", async ({ request }) => {
    const response = await request.post("https://automationexercise.com/api/verifyLogin", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data: APIData.validLogin
    });
    const jsonResponse = response.json();

    expect(await response.status()).toBe(200);
});

test("Invalid login", async ({ request }) => {
    const response = await request.post("https://automationexercise.com/api/verifyLogin", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data: APIData.invalidLogin
    });

    const jsonResponse = response.json();

    expect(await response.status()).toBe(404);
    expect(await jsonResponse).toMatch(Constants.userNotFound);
})