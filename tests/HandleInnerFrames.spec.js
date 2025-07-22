const {test , expect} = require ('@playwright/test')

test('Frames' , async ({page}) => {

await page.goto('https://ui.vision/demo/webtest/frames/');

const frames3 = await page.frame({url :"https://ui.vision/demo/webtest/frames/frame_3.html"});
frames3.locator('input[name="mytext3"]').fill('Hello World!');

await page.waitForTimeout(2000);

// Nested Frames

const childframes = await frames3.childFrames();
await childframes[0].locator('//div[@id="i6"]/div[3]/div').check();

await page.waitForTimeout(2000);

});