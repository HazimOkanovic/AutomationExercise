import { test as baseTest } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { CartPage } from "../pages/cartPage";
import { SignupPage } from "../pages/signupPage";
import { AccountPage } from "../pages/accountPage";

type allPages = {
    homePage: HomePage;
    loginPage: LoginPage;
    cartPage: CartPage;
    signupPage: SignupPage;
    accountPage: AccountPage
}

const pages = baseTest.extend<allPages>({
    homePage:async ({ page }, use) => {
        await use(new HomePage(page));
    },

    loginPage:async ({ page }, use) => {
        await use(new LoginPage(page));
    }, 

    cartPage:async ({ page }, use) => {
        await use(new CartPage(page));
    },

    signupPage:async ({ page }, use) => {
        await use(new SignupPage(page));
    }, 

    accountPage:async ({ page }, use) => {
        await use(new AccountPage(page));
    }
})

export const test = pages;
export const expect = pages.expect;