import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../supports/custom-world';

const baseUrl = process.env.BASE_URL?.replace(/\/$/, '') ?? '';

Given('the authentication user is on the login page', async function (this: CustomWorld) {
  await this.loginPage.launchApplication();
});

When('the authentication user performs the {string} action', async function (this: CustomWorld, action: string) {
  if (action === 'valid credentials' || action === 'invalid credentials') {
    const valid = action.startsWith('valid');
    await this.page.getByRole('textbox', { name: 'Username' }).fill(valid ? process.env.USERNAME ?? '' : 'invalid-user');
    await this.page.getByRole('textbox', { name: 'Password' }).fill(valid ? process.env.PASSWORD ?? '' : 'invalid-password');
    await this.page.getByRole('button', { name: 'Login' }).click();
  } else if (action === 'password recovery') {
    await this.page.getByText('Forgot your password?').click();
  } else if (action === 'logout') {
    await this.page.goto(`${baseUrl}/web/index.php/dashboard/index`);
    await this.page.getByText(/manda user/i).click();
    await this.page.getByRole('menuitem', { name: 'Logout' }).click();
  } else {
    await expect(this.page.getByRole('heading', { name: 'Login' })).toBeVisible();
  }
});

Then('the authentication result is visible', async function (this: CustomWorld) {
  await expect(this.page.locator('body')).toBeVisible();
});
