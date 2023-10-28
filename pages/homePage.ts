import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly loginRegisterButton: Locator;
    readonly cartButton: Locator;
    readonly logOutButton: Locator;
    readonly productsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginRegisterButton = page.locator('a', { hasText: ' Signup / Login' });
        this.cartButton = page.getByRole('link', { name: ' Cart' });
        this.logOutButton = page.locator('a', { hasText: 'Logout' });
        this.productsButton = page.getByRole('link', { name: 'Products' });
    }

    async clickLoginRegisterButton() {
        await this.loginRegisterButton.click();
    }

    async clickCartButton() {
        await this.cartButton.click();
    }

    async clickProductsTab(){
        await this.productsButton.click();
    }
}