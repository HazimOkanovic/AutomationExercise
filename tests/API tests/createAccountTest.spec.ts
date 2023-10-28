import { APIData } from "../../utilities/constants";
import { test, expect } from "../baseTest";
import { request } from "@playwright/test";

test("Create account", async ({ request }) => {
    const response = await request.post("https://automationexercise.com/api/createAccount", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data:  APIData.createAccount 
    });

    expect(await response.status).toBe(201);
    expect(await response.text).toMatch("User created!")
})