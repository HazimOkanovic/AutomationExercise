import { expect, test } from "../baseTest";
import { Constants, PagesURLs } from "../../utilities/constants";

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`, { waitUntil: 'load' });
});

test('Login test', async ({ homePage, page }) => {
    await homePage.clickLoginRegisterButton();

    expect(await page.url()).toMatch(PagesURLs.loginPage);
});

test('Unsuccessful login test', async ({ homePage, loginPage, page }) => {
    await homePage.clickLoginRegisterButton();
    await loginPage.enterLoginEmail(Constants.email);
    await loginPage.enterLoginPassword(Constants.password);
    await loginPage.clickLoginButton();

    expect(await loginPage.loginErrorMessage).toHaveText(Constants.loginError);
    expect(await page.url()).toMatch(PagesURLs.loginPage);
});

test('Successful login test', async ({ homePage, loginPage, page }) => {
    await homePage.clickLoginRegisterButton();
    await loginPage.enterLoginEmail(Constants.validEmail);
    await loginPage.enterLoginPassword(Constants.password);
    await loginPage.clickLoginButton();

    expect(await homePage.logOutButton).toHaveText(Constants.logout);
    expect(await page.url()).toMatch(PagesURLs.homePage);
})

