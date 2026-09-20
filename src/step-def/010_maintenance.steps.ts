import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../supports/custom-world';

const baseUrl = process.env.BASE_URL?.replace(/\/$/, '') ?? '';

Given('the administrator user is on the maintenance module page', async function (this: CustomWorld) {
  await this.page.goto(`${baseUrl}/web/index.php/auth/login`);
  await this.loginPage.login(process.env.USERNAME ?? '', process.env.PASSWORD ?? '');
  await this.page.goto(`${baseUrl}/web/index.php/maintenance/purgeEmployee`);
});

When('the administrator user performs the {string} action', async function (this: CustomWorld, action: string) {
  if (/valid administrator password/i.test(action)) {
    await this.page.getByRole('textbox').fill(process.env.PASSWORD ?? '');
    await this.page.getByRole('button', { name: 'Confirm' }).click();
  } else if (/invalid administrator password/i.test(action)) {
    await this.page.getByRole('textbox').fill('invalid-password');
    await this.page.getByRole('button', { name: 'Confirm' }).click();
  } else if (/cancellation/i.test(action)) {
    await this.page.getByRole('button', { name: 'Cancel' }).click();
  }
  await expect(this.page.locator('body')).toBeVisible();
});

Then('the maintenance result is visible', async function (this: CustomWorld) {
  await expect(this.page.locator('body')).toBeVisible();
});
