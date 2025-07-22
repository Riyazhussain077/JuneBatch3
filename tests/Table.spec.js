const { test, expect } = require('@playwright/test')

test('Handling table', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

    // 1) Total number of rows and columns

    const columns = await table.locator("thead tr th");
    console.log("Numbers of Columns:", await columns.count());
    expect(await columns.count()).toBe(4);

    const rows = await table.locator("tbody tr");
    console.log("Numbers of rows:", await rows.count());
    expect(await rows.count()).toBe(5);

    // 2) select check box for product 3

    const matchedRows = rows.filter({
        has: page.locator('td'),
        hasText: 'Tablet'
    });
    const checkBox = matchedRows.locator('input').first();
    await checkBox.check();

    // 3) select multiple products by re-usable functions

    await selectProduct(rows, page, 'Smartphone');
    await selectProduct(rows, page, 'Laptop');
    await selectProduct(rows, page, 'Smartwatch');
    await selectProduct(rows, page, 'Wireless Earbuds');


    // 4) Print all product details using loop

    // for (let i = 0; i < await rows.count(); i++) {
    //     const row = rows.nth(i);
    //     const tds = row.locator('td');

    //     for (let j = 0; j < await tds.count() - 1; j++) {
    //         console.log(await tds.nth(j).textContent());

    //     };

    // };

    // 5) read data from all the pages in the table

    const pages = await page.locator('.pagination li a');
    console.log("Number of pages in the table:", await pages.count());

    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click()
        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const tds = row.locator('td');

            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent());

            };

        };

    };

    await page.waitForTimeout(3000);
});

async function selectProduct(rows, page, name) {
    const matchedRows = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRows.locator('input').check();
};