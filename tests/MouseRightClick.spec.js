const {test , expect} = require ('@playwright/test');

test('Mouse Right Click' , async ({page}) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const button = await page.locator('//span[@class="context-menu-one btn btn-neutral"]');

    // Right click action

     await page.waitForTimeout(3000);
     
    await button.click({button : 'right'});

    await page.waitForTimeout(3000);

});