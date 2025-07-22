const { test, expect } = require('@playwright/test')

test('Single File', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.waitForSelector('#filesToUpload');
    await page.locator('#filesToUpload');

    await page.locator('#filesToUpload').setInputFiles('tests/uploadFiles/testfile3.pdf');

    await page.waitForTimeout(3000);

});


test.only('Multiple Files', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').setInputFiles(['tests/uploadFiles/testfile3.pdf', 'tests/uploadFiles/testfile4.pdf']);

    await page.waitForTimeout(3000);

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('testfile3.pdf');
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('testfile4.pdf');

    await page.waitForTimeout(2000);


    // Removeing files

    await page.locator('#filesToUpload').setInputFiles([]);

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');

    await page.waitForTimeout(2000);
});