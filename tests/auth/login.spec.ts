import { test, expect } from '../../fixtures/test.fixture';
import { validUser, invalidUser } from '../../test-data/users';

test.beforeEach(async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
});

test('user can login', async ({ page, loginPage }) => {

    await loginPage.enterUsername(validUser.username);

    await expect(
        page.locator('input[name="username"]')
    ).toHaveValue(validUser.username);

    await loginPage.enterPassword(validUser.password);

    await loginPage.clickLogin();

    await expect(
        page.getByRole('heading', { name: 'Account Services' })).toBeVisible();
});

test('user cannot login with invalid credentials', async ({ page, loginPage }) => {

    await loginPage.login(
        invalidUser.username,
        invalidUser.password
    );

    await expect(
        page.getByText('The username and password could not be verified.')
    ).toBeVisible();

    await expect(
        page.getByRole('heading', { name: 'Account Services' })
    ).not.toBeVisible();
});

test('user cannot login with empty credentials', async ({ page, loginPage }) => {

    await loginPage.clickLogin();

    await expect(
        page.getByText('Please enter a username and password.')
    ).toBeVisible();
});

test('user cannot login with empty password', async ({ page, loginPage }) => {

    await loginPage.enterUsername(validUser.username);

    await loginPage.clickLogin();

    await expect(
        page.getByText('Please enter a username and password.')
    ).toBeVisible();
});

test('user cannot login with empty username', async ({ page, loginPage }) => {

    await loginPage.enterPassword(validUser.password);

    await loginPage.clickLogin();

    await expect(
        page.getByText('Please enter a username and password.')
    ).toBeVisible();
});

//this should fail because login btn is constantly enabled even when username and password are empty. This is a bug in the application
test('Login button is Disabled when username and password are empty', async ({ page, loginPage }) => {
    
    await expect(loginPage.loginButton).toBeDisabled();
    
    await loginPage.clickLogin();

    await expect(
        page.getByText('Please enter a username and password.')
    ).toBeVisible();
});

//this should fail because login btn is constantly enabled even when username is empty. This is a bug in the application
test('Login button is Disabled when username is empty', async ({ page, loginPage }) => {
    
    await loginPage.enterPassword(validUser.password);

    await expect(loginPage.loginButton).toBeDisabled();
});

test('Login button is Enabled when username and password is filled', async ({ page, loginPage }) => {

    await loginPage.enterUsername(validUser.username);

    await loginPage.enterPassword(validUser.password);

    await expect(loginPage.loginButton).toBeEnabled();
});

test('User can see account details', async ({ page, loginPage }) => {

    await loginPage.login(
        validUser.username,
        validUser.password
    );

    const firstAccount23667 = page.getByRole('link', { name: '23667' });

    await firstAccount23667.click();

    await expect(
        page.getByRole('heading', { name: 'Account Details' })
    ).toBeVisible();

});

test('User can see transaction table', async ({ page, loginPage }) => {

    await loginPage.login(
        validUser.username,
        validUser.password
    );

    const firstAccount23667 = page.getByRole('link', { name: '23667' });

    await firstAccount23667.click();

    await expect(
        page.getByRole('heading', { name: 'Account Details' })
    ).toBeVisible();

    const transactionTable = page.getByRole('columnheader', { name: 'Transaction' });

    await expect(transactionTable).toBeVisible();

});

test('Transfer button has correct attributes', async ({ page, loginPage }) => {

    await loginPage.login(
        validUser.username,
        validUser.password
    );

    await page.getByRole('link', { name: 'Transfer Funds' }).click();

    const transferButton = page.getByRole('button', {
        name: 'Transfer'
    });

    await expect(transferButton).toBeVisible();

    await expect(
        transferButton
    ).toHaveAttribute('type', 'submit');

    await expect(
        transferButton
    ).toHaveAttribute('value', 'Transfer');
});
