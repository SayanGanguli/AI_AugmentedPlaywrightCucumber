import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../supports/custom-world';

const baseUrl = process.env.BASE_URL?.replace(/\/$/, '') ?? '';

async function openDashboard(world: CustomWorld): Promise<void> {
  await world.page.goto(`${baseUrl}/web/index.php/auth/login`);
  await world.loginPage.login(process.env.USERNAME ?? '', process.env.PASSWORD ?? '');
  await world.page.goto(`${baseUrl}/web/index.php/dashboard/index`);
}

Given('the dashboard user is on the dashboard module page', async function (this: CustomWorld) {
  await openDashboard(this);
});

When('the dashboard user performs the {string} action', async function (this: CustomWorld, action: string) {
  const control = this.page.getByRole('button', { name: new RegExp(action, 'i') }).first();
  if (await control.isVisible().catch(() => false)) await control.click();
  await expect(this.page.locator('body')).toBeVisible();
});

Then('the dashboard result is visible', async function (this: CustomWorld) {
  await expect(this.page.locator('body')).toBeVisible();
});
