const { test, expect } = require('@playwright/test')

test('Handle Dropdown', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');


    // select multiple options from dropdown..

    // await page.selectOption('#colors', ["Blue", "Red", "Yellow"]);

    // Assertions

    // 1) check number of option in dropdown   

    // const options = await page.locator('#colors option');
    // await expect(options).toHaveCount(7);

    // // 2) check number of option in dropdown

    // const options = await page.$$('#colors option');
    // console.log("Number of option:", options.length);
    // await expect(options.length).toBe(7);

    // 3) check presence of values in the dropdown

    const content = await page.locator('#colors').textContent();
    //await expect(content.includes('Blue')).toBeTruthy();

    await expect(content.includes('Purple')).toBeFalsy();
    await page.waitForTimeout(3000);
});