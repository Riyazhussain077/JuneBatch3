const { test, expect } = require('@playwright/test')

let page;

test.beforeAll(async ({ browser }) => {

    page = await browser.newPage();

    await page.goto('https://demoblaze.com/');
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('Pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator('//button[normalize-space()="Log in"]').click();

});

test.afterAll(async () => {

    await page.locator('#logout2');
});

test('Home Page Test', async () => {

    const products = await page.locator('.card-title');
    await expect(products).toHaveCount(9);

});

test('Add product to Cart Test', async () => {

    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
    await page.locator('//a[normalize-space()="Add to cart"]').click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    });

});