const { test, expect } = require('@playwright/test');

test('Page screenShot', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    await page.screenshot({ path: 'tests/ScreenShots/' + Date.now() + 'HomePage.png' })

});

test('FullPage screenShot', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    await page.screenshot({ path: 'tests/ScreenShots/' + Date.now() + 'Fullpage.png', fullPage: true })

});

test.only('Element screenShot', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    await page.locator('//img[@alt="PS5 Slim Fortnite digital edition"]')
    .screenshot({ path: 'tests/ScreenShots/' + Date.now() + 'Selectitem.png' })

});