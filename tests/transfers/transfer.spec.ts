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

test('user can make transfer with valid details', async ({ page, loginPage }) => {
   
    await loginPage.login(
        validUser.username,
        validUser.password
    );

    const transferLink = page.getByRole('link', { name: 'Transfer Funds' });
    
    await transferLink.click();
    
    const amountInput = page.locator('input[id="amount"]');

    await amountInput.fill('100');

    const fromAccountSelect = page.locator('select[id="fromAccountId"]');
    const toAccountSelect = page.locator('select[id="toAccountId"]');

    await fromAccountSelect.selectOption({ index: 0 });
    await toAccountSelect.selectOption({ index: 0 });
    
    await page.getByRole('button', { name: 'Transfer' }).click();

    await expect(
  page.getByRole('heading', { name: 'Transfer Complete!' })
).toBeVisible();

});