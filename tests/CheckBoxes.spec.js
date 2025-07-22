const { test, expect } = require('@playwright/test')


test('Handle CheckBoxes', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // single checkbox

    await page.locator('//input[@id="checkBoxOption1" and @type="checkbox"]').check();
    //await page.check('//input[@id="checkBoxOption1" and @type="checkbox"]');


    expect(await page.locator('//input[@id="checkBoxOption1" and @type="checkbox"]')).toBeChecked();
    expect(await page.locator('//input[@id="checkBoxOption1" and @type="checkbox"]').isChecked()).toBeTruthy();
    expect(await page.locator('//input[@id="checkBoxOption2" and @type="checkbox"]').isChecked()).toBeFalsy();


    // Multiple Checkboxes

    const checkBoxLocators = [
        '//input[@id="checkBoxOption1" and @type="checkbox"]',
        '//input[@id="checkBoxOption2" and @type="checkbox"]',
        '//input[@id="checkBoxOption3" and @type="checkbox"]'
    ];

    for (const locator of checkBoxLocators) {
        await page.locator(locator).check();
    };

    for (const locator of checkBoxLocators) {         // Unselect multiple checkboxes which are already selected.. 
        if (await page.locator(locator).isChecked()) {
            await page.locator(locator).uncheck();
        }
    };

    await page.waitForTimeout(2000);


});