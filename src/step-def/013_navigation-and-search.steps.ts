import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../supports/custom-world';

const baseUrl = process.env.BASE_URL?.replace(/\/$/, '') ?? '';

Given('the navigation user is on the dashboard module page', async function (this: CustomWorld) {
  await this.page.goto(`${baseUrl}/web/index.php/auth/login`);
  await this.loginPage.login(process.env.USERNAME ?? '', process.env.PASSWORD ?? '');
  await this.page.goto(`${baseUrl}/web/index.php/dashboard/index`);
});

When('the navigation user performs the {string} action', async function (this: CustomWorld, action: string) {
  if (/profile menu/i.test(action)) await this.page.getByText(/manda user/i).click();
  await expect(this.page.locator('body')).toBeVisible();
});

Then('the navigation result is visible', async function (this: CustomWorld) {
  await expect(this.page.locator('body')).toBeVisible();
});
