const { test, expect } = require('@playwright/test');

test('frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const allFrames = await page.frames();
    console.log("Numbers of frames:", allFrames.length);

    // approach 1 : using name or url..

    // // const frameName = await page.frame('name');// If name is present , we can use this..
    // const frame1 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1.html" });
    // await frame1.fill("[name='mytext1']", "Hi,Dinesh");


    // // approach 2 :  using frame Locator..

    const inputBox = await page.frameLocator('frame[src="frame_1.html"]').locator("[name='mytext1']");
    inputBox.fill('Hello , Yuvaraj');
    
    await page.waitForTimeout(3000);




});



