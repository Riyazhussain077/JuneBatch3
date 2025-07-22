const { test, expect } = require('@playwright/test')

test('Date Picker', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.fill('#datepicker' , '08/21/1998');


    // Date Picker

    const year = '1978'
    const month = 'September'
    const date = "22"

    await page.click('#datepicker'); // opens calender

    while (true) {
        const currentYear = await page.locator('[class="ui-datepicker-year"]').textContent();
        const currentMonth = await page.locator('//span[@class="ui-datepicker-month"]').textContent();

        if (currentYear === year && currentMonth === month) {
            break;
        }

        //await page.locator('[title="Next"]').click(); // Next
        await page.locator('[title="Prev"]').click(); // past

    }

    const dates = await page.$$('//a[@class="ui-state-default"]');

    // date selection using loop

    // for (const dt of dates) {

    //     if (await dt.textContent() == date){
    //         await dt.click();
    //         break;
    //     }
    // }

    // date selection without loop

    // await page.click('//a[@class="ui-state-default"][text()="10"]');

    await page.click(`//a[@class="ui-state-default"][text()='${date}']`);

    await page.waitForTimeout(4000);

});