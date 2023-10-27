import { Constants, PagesURLs } from "../utilities/constants";
import { expect, test } from "./baseTest";

test.beforeEach(async ({ page, baseURL}) => {
    await page.goto(`${baseURL}`, { waitUntil: 'load'});    
});

test('Go to Login page test',async ({ homePage, page}) => {
    await homePage.clickLoginRegisterButton();
    
    expect(await page.url()).toMatch("https://www.automationexercise.com/login")
});

test('Go to Sign up page test',async ({ loginPage, page}) => {
    await page.goto(`${PagesURLs.loginPage}`, {waitUntil: 'load'});
    await loginPage.enterSignUpName("Hazim");
    await loginPage.enterSignUpEmail("private.pitanje@outlook.com");
    await loginPage.clickSignUpButton();

    expect(await page.url()).toMatch("https://www.automationexercise.com/signup")
});

test('Complete the sign up test',async ({ loginPage, signupPage, accountPage, page}) => {
    await page.goto(`${PagesURLs.loginPage}`, {waitUntil: 'load'});
    await loginPage.enterSignUpName("Hazim");
    await loginPage.enterSignUpEmail(Constants.email);
    await loginPage.clickSignUpButton();
    await signupPage.enterPassword("ThePassword");
    await signupPage.enterFirstName("Hazim");
    await signupPage.enterLastName("Okanovic");
    await signupPage.enterAddress("Rosulje 2");
    await signupPage.chooseCountry("United States");
    await signupPage.enterState("BiH");
    await signupPage.enterCity("Vogosca");
    await signupPage.enterZipCOde("71320");
    await signupPage.enterMobileNumber("872368263");
    await signupPage.clickCreateAccount();

    expect (await accountPage.successMessage).toHaveText("Congratulations! Your new account has been successfully created!")
});