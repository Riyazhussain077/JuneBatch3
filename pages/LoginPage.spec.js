exports.LoginPage = 
class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginLink = "#login2"
        this.usernameInput = '#loginusername';
        this.passwordInput = '#loginpassword';
        this.loginButton = '//button[normalize-space()="Log in"]';
    }

    async gotoLoginButton() {
        await this.page.goto('https://demoblaze.com/');

    }
    async login(userName, password) {
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameInput).fill(userName);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }

}