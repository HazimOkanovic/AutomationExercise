import { Locator, Page } from "@playwright/test";

export class HomePage{
    readonly page: Page;
    readonly loginRegisterButton: Locator;
    readonly cartButton: Locator

    constructor(page: Page){
        this.page = page;
        this.loginRegisterButton = page.locator('a', {hasText: ' Signup / Login'});
        this.cartButton = page.locator('a', {hasText: 'Cart'});
    }

    async clickLoginRegisterButton() {
        await this.loginRegisterButton.click();
    }

    async clickCartButton() {
        await this.cartButton.click();
    }
}