const { test, expect } = require('@playwright/test')

test('Auto Suggest Dropdown', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await page.locator('input#autocomplete').fill('ind');

    await page.waitForSelector('//li[contains(@class,"ui-menu-item")]/div');
    const countryOption = await page.$$('//li[contains(@class,"ui-menu-item")]/div');

    for (let option of countryOption) {

        const value = await option.textContent();
        //console.log(value);

        if (value.includes('Indonesia ')) {
            await option.click();
            break;
        }
    };
    await page.waitForTimeout(3000);

});