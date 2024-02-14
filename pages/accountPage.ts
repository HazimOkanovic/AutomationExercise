import { Locator, Page } from "@playwright/test";

export class AccountPage {
    readonly page: Page;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.successMessage = page.locator('p', { hasText: 'Congratulations!' });
    }
}