import { expect, test } from "../baseTest";
import { Constants } from "../../utilities/constants";

test.beforeEach(async ({ page, baseURL}) => {
    await page.goto(`${baseURL}`, { waitUntil: 'load'});    
});

test('Login test',async ({ homePage, page}) => {
    await homePage.clickLoginRegisterButton();
    
    expect(await page.url()).toMatch("https://www.automationexercise.com/login")
});

test('Unsuccessful login test',async ({ homePage, loginPage, page}) => {
    await homePage.clickLoginRegisterButton();
    await loginPage.enterLoginEmail(Constants.email);
    await loginPage.enterLoginPassword("ThePassword");
    await loginPage.clickLoginButton();
    
    expect(await loginPage.loginErrorMessage).toHaveText("Your email or password is incorrect!");
    expect(await page.url()).toMatch("https://www.automationexercise.com/login");
});

test('Successful login test',async ({ homePage, loginPage, page}) => {
    await homePage.clickLoginRegisterButton();
    await loginPage.enterLoginEmail("private.pitanje@outlook.com");
    await loginPage.enterLoginPassword("ThePassword");
    await loginPage.clickLoginButton();
    
    expect(await homePage.logOutButton).toHaveText("Logout");
    expect(await page.url()).toMatch("https://www.automationexercise.com");
})

