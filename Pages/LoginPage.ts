import { Page } from '@playwright/test';

export class LoginPage {

    private page: Page;

    usernameInput;
    passwordInput;
    loginButton;
    
    constructor(page: Page) {

        this.page = page;

        this.usernameInput = this.page.locator('input[name="username"]');

        this.passwordInput = this.page.locator('input[name="password"]');

        this.loginButton = this.page.locator('input[value="Log In"]');
    }

   async enterUsername(username: string) {

    await this.usernameInput.fill(username);
   }

   async enterPassword(password: string) {

    await this.passwordInput.fill(password);
   }

    async clickLogin() {

        await this.loginButton.click();
    }

    async login(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}