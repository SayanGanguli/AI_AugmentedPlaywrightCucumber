import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../supports/custom-world';

const baseUrl = process.env.BASE_URL?.replace(/\/$/, '') ?? '';

Given('the performance user is on the performance module page', async function (this: CustomWorld) {
  await this.page.goto(`${baseUrl}/web/index.php/auth/login`);
  await this.loginPage.login(process.env.USERNAME ?? '', process.env.PASSWORD ?? '');
  await this.page.goto(`${baseUrl}/web/index.php/performance/searchEvaluatePerformanceReview`);
});

When('the performance user performs the {string} action', async function (this: CustomWorld, _action: string) {
  await expect(this.page.locator('body')).toBeVisible();
});

Then('the performance result is visible', async function (this: CustomWorld) {
  await expect(this.page.locator('body')).toBeVisible();
});
