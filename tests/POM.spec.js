const{test , expect} = require ('@playwright/test');
const { LoginPage } = require('../pages/LoginPage.spec');
const { HomePage } = require('../pages/HomePage.spec');
const { CartPage } = require('../pages/CartPage.spec');


test('POM' , async ({page}) => {

    // LOG IN
    const login = new LoginPage(page);
    await login.gotoLoginButton();
    await login.login('pavanol','test@123');
    await page.waitForTimeout(3000);

    // HOME PAGE

    const home = new HomePage(page);
    await home.addProductToCart('Vivo v21 5g');
    await waitForTimeout(3000);
    await home.gotoCart();

    // CART PAGE

    const cart = new CartPage(page);
    const status = await cart.checkProductInCart('Vivo v21 5g');
    await expect(status).toBe(true);

});