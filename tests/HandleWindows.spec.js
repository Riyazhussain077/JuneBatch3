const { test, expect, chromium } = require('@playwright/test')

test('Handle Pages/Windows', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allpages = context.pages();
    console.log("Number of pages created:", allpages.length);

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    await page2.goto('https://www.orangehrm.com/');
    await expect(page2).toHaveURL('https://www.orangehrm.com/');

});

test.only('Handle MUltiples Pages/Windows', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    const newPage = context.waitForEvent('page');
    await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click();

    const pagePromise = await newPage;
    await expect(pagePromise).toHaveTitle('Human Resources Management Software | OrangeHRM HR Software ');

    await page1.waitForTimeout(2000);
    await pagePromise.waitForTimeout(2000);

    await browser.close();


});