import { APIData, Constants } from "../../constants";
import { test, expect } from "../baseTest";

test("Create account", async ({ request }) => {
    const response = await request.post("https://automationexercise.com/api/createAccount", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data: APIData.createAccount
    });

    const jsonResponse = response.json();

    expect(await response.status).toBe(201);
    expect(await jsonResponse).toMatch(Constants.userCreated)
})