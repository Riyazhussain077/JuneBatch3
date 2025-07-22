const { test, expect } = require('@playwright/test')

//import {test , expect} from '@playwright/test'

test('Locators', async ({ page }) => {

    await page.goto('https://demoblaze.com/');

    // click on login button    -> property

    await page.locator('#login2').click();
    //await page.click('#login2');

    // provide userName   -> CSS

    //await page.locator('#loginusername').type('pavanol');
    await page.fill('#loginusername' , "pavanol");

    // provide password    -> CSS

    await page.fill('#loginpassword' , "test@123");

    // clicking login button

    await page.locator('//button[contains(text(),"Log")]').click();

    // verify logout link presence

    const logoutLink = await page.locator('//a[contains(@id,"logout2")]');
    await expect(logoutLink).toBeVisible();


});