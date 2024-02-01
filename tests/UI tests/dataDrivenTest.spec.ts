import { expect, test } from "../baseTest";
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { Constants } from "../../constants";

test('Data driven test', async ({ page, homePage, searchPage, baseURL }) => {
    const records = parse(fs.readFileSync(path.join(__dirname, 'blue_products.csv')), {
        columns: true,
        skip_empty_lines: true
    });

    for (const record of records) {
        await page.goto(`${baseURL}`, { waitUntil: 'load' });
        await homePage.clickProductsTab();
        await searchPage.enterProductsInSearch(record.name);
        await searchPage.clickSearch();
        await page.getByText(record.name).first().hover();
        await searchPage.clickAddToCart();
    };
    await homePage.clickCartButton();
    let productsInCart = page.locator("//h4//a").all;
    for (let i = 0; i < productsInCart.length; i++) {
        expect(await productsInCart[i]).toContainText(Constants.blue);
        expect(await productsInCart[i]).not.toContainText(Constants.yellow);
    };
});