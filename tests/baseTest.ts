import { test as baseTest } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { SignupPage } from "../pages/signupPage";
import { AccountPage } from "../pages/accountPage";
import { SearchPage } from "../pages/searchPage";

type allPages = {
    homePage: HomePage;
    loginPage: LoginPage;
    signupPage: SignupPage;
    accountPage: AccountPage;
    searchPage: SearchPage;
}

const pages = baseTest.extend<allPages>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    signupPage: async ({ page }, use) => {
        await use(new SignupPage(page));
    },

    accountPage: async ({ page }, use) => {
        await use(new AccountPage(page));
    },

    searchPage: async ({ page }, use) => {
        await use(new SearchPage(page));
    }
})

export const test = pages;
export const expect = pages.expect;