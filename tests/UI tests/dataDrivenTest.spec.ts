import { expect, test } from "../baseTest";
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

test('second test', async ({ page }) => {
    const records = parse(fs.readFileSync(path.join(__dirname, 'blue_products.csv')), {
        columns: true,
        skip_empty_lines: true
    });

    for (const record of records) {
        await page.goto("https://www.automationexercise.com/");
        await page.locator('a', { hasText: 'Products' }).click();
        await page.locator("#search_product").type(record.name);
        await page.locator("#submit_search").click();
        await page.getByText(record.name).first().hover();
        await page.getByText('Add to cart').nth(1).click();
    }
    await page.getByRole('link', { name: ' Cart' }).click();
    let productsInCart = page.locator("//h4//a").all;
    for (let i = 0; i < productsInCart.length; i++) {
        expect(await productsInCart[i]).toContainText("Blue");
        expect(await productsInCart[i]).not.toContainText("Yellow");
    }
})