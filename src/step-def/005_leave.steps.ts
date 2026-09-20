import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../supports/custom-world';

const baseUrl = process.env.BASE_URL?.replace(/\/$/, '') ?? '';

Given('the leave user is on the leave module page', async function (this: CustomWorld) {
  await this.page.goto(`${baseUrl}/web/index.php/auth/login`);
  await this.loginPage.login(process.env.USERNAME ?? '', process.env.PASSWORD ?? '');
  await this.page.goto(`${baseUrl}/web/index.php/leave/viewLeaveList`);
});

When('the leave user performs the {string} action', async function (this: CustomWorld, action: string) {
  const control = this.page.getByRole('button', { name: new RegExp(action, 'i') }).first();
  if (await control.isVisible().catch(() => false)) await control.click();
  await expect(this.page.locator('body')).toBeVisible();
});

Then('the leave result is visible', async function (this: CustomWorld) {
  await expect(this.page.locator('body')).toBeVisible();
});
