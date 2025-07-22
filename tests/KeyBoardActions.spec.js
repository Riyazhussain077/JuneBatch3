const { test, expect } = require('@playwright/test')

test('keyboard actions', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare');

    //await page.locator('[name="text1"]').fill('Hi, This is Yuvaraj.');
    await page.fill('[name="text1"]', 'Hi, This is Yuvaraj.');

    // Ctrl + A   -> Select the text

    await page.keyboard.press('Control+A');

    // Ctrl + C   -> Copy the text

    await page.keyboard.press('Control+C');

    // Tab    

    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    // Ctrl + V  -> Paste the text

    await page.keyboard.press('Control+V');

    await page.waitForTimeout(3000);
});