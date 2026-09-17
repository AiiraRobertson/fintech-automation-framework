import { test, expect } from '../../fixtures/test.fixture';
import { validUser } from '../../test-data/users';

test.beforeEach(async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
});

test('Transfer button has correct attributes', async ({ page, loginPage }) => {

    await loginPage.login(
        validUser.username,
        validUser.password
    );

    const transferLink = page.getByRole('link', { name: 'Transfer Funds' });

    await transferLink.click();

    //await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/transfer.htm/');

    const transferButton = page.getByRole('button', { name: 'Transfer' });

    await expect(transferButton).toHaveAttribute( 'type', 'submit');
    
});