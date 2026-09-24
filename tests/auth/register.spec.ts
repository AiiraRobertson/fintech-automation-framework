import { newRegUser } from '../../test-data/users';
import { expect, test } from '../../fixtures/test.fixture';


test.beforeEach(async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
});

test('user can register', async ({ page, registerPage }) => {
    const username = `User${Date.now()}`;

    await page.getByRole('link', { name: 'Register' }).click();

    const firstNameInput = page.locator('input[name="customer.firstName"]');

await firstNameInput.fill('FirstName');

const lastNameInput = page.locator('input[name="customer.lastName"]');

await lastNameInput.fill('LastName');

const addressInput = page.locator('input[name="customer.address.street"]');

await addressInput.fill('Address');

const cityInput = page.locator('input[name="customer.address.city"]');

await cityInput.fill('City');

const stateInput = page.locator('input[name="customer.address.state"]');

await stateInput.fill('State');

const zipCodeInput = page.locator('input[name="customer.address.zipCode"]');

await zipCodeInput.fill('ZipCode');

const phoneInput = page.locator('input[name="customer.phoneNumber"]');

await phoneInput.fill('Phone');

const ssnInput = page.locator('input[name="customer.ssn"]');

await ssnInput.fill('SSN'); 

const usernameInput = page.locator('input[name="customer.username"]');

await usernameInput.fill(username);   

const passwordInput = page.locator('input[name="customer.password"]');

await passwordInput.fill('Password');

const confirmPasswordInput = page.locator('input[name="repeatedPassword"]');

await confirmPasswordInput.fill('Password');

await page.getByRole('button', { name: 'Register' }).click();

await expect(
    page.getByRole('heading', { name: /^Welcome\b/ })
).toBeVisible();

    /*await registerPage.register(
        newRegUser.FirstName,
        newRegUser.LastName,
        newRegUser.Address,
        newRegUser.City,
        newRegUser.State,
        newRegUser.ZipCode,
        newRegUser.Phone,
        username,
        newRegUser.Password
    );

    await expect(
        page.getByRole('heading', { name: /^Welcome\b/ })
    ).toBeVisible();*/
});