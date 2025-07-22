const { test, expect } = require('@playwright/test')

test('Handle Radio Button', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // RadioButton

    await page.locator("//input[@value='radio1']").check();
    // await page.check('//input[@value="radio1"]');

    await expect(await page.locator('//input[@value="radio1"]')).toBeChecked();
    await expect(await page.locator('//input[@value="radio1"]').isChecked()).toBeTruthy();

    await expect(await page.locator('//input[@value="radio2"]').isChecked()).toBeFalsy();

    await page.waitForTimeout(3000);

});