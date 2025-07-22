const { test, expect } = require('@playwright/test');

test('Soft Assertions', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    // Hard Assertions

    // await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');

    // await expect(page).toHaveURL('https://www.amazon.in/');

    // await expect(page.locator('#nav-main')).toBeVisible();

    // Soft Assertions


    await expect.soft(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');

    await expect.soft(page).toHaveURL('https://www.amazon.in/');

    await expect.soft(page.locator('#nav-main')).toBeVisible();

});