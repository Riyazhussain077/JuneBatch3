const { test, expect } = require('@playwright/test')

test('Handle InputBox', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // InputBox - firstName

    await expect(await page.locator("//input[@id='name']")).toBeVisible();
    await expect(await page.locator("//input[@id='name']")).toBeEmpty();
    await expect(await page.locator("//input[@id='name']")).toBeEditable();
    await expect(await page.locator("//input[@id='name']")).toBeEnabled();


    await page.fill("//input[@id='name']", "Vedhachalam");

    await page.waitForTimeout(4000); // pausing code..


});