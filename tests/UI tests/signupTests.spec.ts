import { Constants, PagesURLs } from "../../utilities/constants";
import { expect, test } from "../baseTest";

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`, { waitUntil: 'load' });
});

test('Go to Login page test', async ({ homePage, page }) => {
    await homePage.clickLoginRegisterButton();

    expect(await page.url()).toMatch(PagesURLs.loginPage)
});

test('Go to Sign up page test', async ({ loginPage, page }) => {
    await page.goto(`${PagesURLs.loginPage}`, { waitUntil: 'load' });
    await loginPage.enterSignUpName(Constants.signupName);
    await loginPage.enterSignUpEmail(Constants.email);
    await loginPage.clickSignUpButton();

    expect(await page.url()).toMatch(PagesURLs.signupPage)
});

test('Complete the sign up test', async ({ loginPage, signupPage, accountPage, page }) => {
    await page.goto(`${PagesURLs.loginPage}`, { waitUntil: 'load' });
    await loginPage.enterSignUpName(Constants.signupName);
    await loginPage.enterSignUpEmail(Constants.email);
    await loginPage.clickSignUpButton();
    await signupPage.enterPassword(Constants.password);
    await signupPage.enterFirstName(Constants.signupName);
    await signupPage.enterLastName(Constants.lastname);
    await signupPage.enterAddress(Constants.address);
    await signupPage.chooseCountry(Constants.country);
    await signupPage.enterState(Constants.state);
    await signupPage.enterCity(Constants.city);
    await signupPage.enterZipCOde(Constants.zipCode);
    await signupPage.enterMobileNumber(Constants.mobileNumber);
    await signupPage.clickCreateAccount();

    expect(await accountPage.successMessage).toHaveText(Constants.signupSuccess)
});