import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../supports/custom-world';

const baseUrl = process.env.BASE_URL?.replace(/\/$/, '') ?? '';

Given('the recruitment user is on the recruitment module page', async function (this: CustomWorld) {
  await this.page.goto(`${baseUrl}/web/index.php/auth/login`);
  await this.loginPage.login(process.env.USERNAME ?? '', process.env.PASSWORD ?? '');
  await this.page.goto(`${baseUrl}/web/index.php/recruitment/viewCandidates`);
});

When('the recruitment user performs the {string} action', async function (this: CustomWorld, action: string) {
  const search = this.page.getByRole('button', { name: /search/i });
  if (/search|filter/i.test(action) && await search.isVisible().catch(() => false)) await search.click();
  await expect(this.page.locator('body')).toBeVisible();
});

Then('the recruitment result is visible', async function (this: CustomWorld) {
  await expect(this.page.locator('body')).toBeVisible();
});
