import { Locator, Page } from "@playwright/test";

export class SearchPage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly addToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator("#search_product");
        this.searchButton = page.locator("#submit_search");
        this.addToCartButton = page.getByText('Add to cart').nth(1);
    }

    async enterProductsInSearch(searchProducts: string) {
        await this.searchInput.type(searchProducts);
    };

    async clickSearch() {
        await this.searchButton.click();
    };

    async clickAddToCart() {
        await this.addToCartButton.click();
    }
}