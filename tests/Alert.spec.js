const { test, expect } = require('@playwright/test');

test.skip('Alert with OK', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling dialog Window handler

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });

    await page.locator('//button[@id="alertBtn"]').click();
    await page.waitForTimeout(2000);

});

test.skip('Confirm Alert', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling dialog window handler

page.on('dialog' , async dialog => {

    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('Press a button!');
    await dialog.accept(); // close by using ok button
    // await dialog.dismiss(); // close by using cancel..

});

await page.locator('#confirmBtn').click();
await expect(await page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
await page.waitForTimeout(2000);

});


test('Prompt Alert', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

//  Enabling dialog window handler

page.on('dialog' , async dialog => {
    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:');
    expect(dialog.defaultValue()).toContain('Harry Potter');
    await dialog.accept('Vedhachalam');
});

await page.click('#promptBtn');
await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Vedhachalam! How are you today?');

await page.waitForTimeout(3000);


});