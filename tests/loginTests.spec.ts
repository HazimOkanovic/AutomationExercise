import { expect, test } from "../tests/baseTest";

test.beforeEach(async ({ page, baseURL}) => {
    await page.goto(`${baseURL}`, { waitUntil: 'load'});    
});

test('Login test',async ({ homePage, page}) => {
    await homePage.clickLoginRegisterButton();
    
    expect(await page.url()).toMatch("https://www.automationexercise.com/login")
})