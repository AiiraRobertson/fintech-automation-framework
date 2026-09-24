import { Page } from '@playwright/test';

export class RegisterPage {

    private page: Page;

    firstNameInput;
    lastNameInput;
    addressInput;
    cityInput;
    stateInput;
    zipCodeInput;
    phoneInput;
    ssnInput;
    usernameInput;
    passwordInput;
    confirmPasswordInput;
    registerButton;
    
    constructor(page: Page) {

        this.page = page;

        this.firstNameInput = this.page.locator('input[name="firstName"]');

        this.lastNameInput = this.page.locator('input[name="lastName"]');

        this.addressInput = this.page.locator('input[name="address"]');

        this.cityInput = this.page.locator('input[name="city"]');

        this.stateInput = this.page.locator('input[name="state"]');

        this.zipCodeInput = this.page.locator('input[name="zipCode"]');

        this.phoneInput = this.page.locator('input[name="phone"]');

        this.ssnInput = this.page.locator('input[name="ssn"]');

        this.usernameInput = this.page.locator('input[name="username"]');

        this.passwordInput = this.page.locator('input[name="password"]');

        this.confirmPasswordInput = this.page.locator('input[name="confirmPassword"]');

        this.registerButton = this.page.locator('input[value="Register"]');
    }

   async enterFirstName(firstName: string) {

    await this.firstNameInput.fill(firstName);
   }

   async enterLastName(lastName: string) {

    await this.lastNameInput.fill(lastName);
   }

   async enterAddress(address: string) {

    await this.addressInput.fill(address);
   }

   async enterCity(city: string) {

    await this.cityInput.fill(city);
   }

   async enterState(state: string) {

    await this.stateInput.fill(state);
   }

   async enterZipCode(zipCode: string) {

    await this.zipCodeInput.fill(zipCode);
   }

   async enterPhone(phone: string) {

    await this.phoneInput.fill(phone);
   }

   async enterSSN(ssn: string) {

    await this.ssnInput.fill(ssn);
   }

   async enterPassword(password: string) {

    await this.passwordInput.fill(password);
   }

   async enterConfirmPassword(confirmPassword: string) {

    await this.confirmPasswordInput.fill(confirmPassword);
    }

    async clickRegister() {

        await this.registerButton.click();
    }

    async register(firstName: string, password: string, lastName: string, address: string, city: string, state: string, zipCode: string, phone: string, ssn: string) {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterAddress(address);
        await this.enterCity(city);
        await this.enterState(state);
        await this.enterZipCode(zipCode);
        await this.enterPhone(phone);
        await this.enterSSN(ssn);
        await this.enterPassword(password);
        await this.enterConfirmPassword(password);
        await this.clickRegister();
    }
}