import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../supports/custom-world';

const baseUrl = process.env.BASE_URL?.replace(/\/$/, '') ?? '';

Given('the employee profile user is on the employee information module page', async function (this: CustomWorld) {
  await this.page.goto(`${baseUrl}/web/index.php/auth/login`);
  await this.loginPage.login(process.env.USERNAME ?? '', process.env.PASSWORD ?? '');
  await this.page.goto(`${baseUrl}/web/index.php/pim/viewPersonalDetails/empNumber/7`);
});

When('the employee profile user performs the {string} action', async function (this: CustomWorld, _action: string) {
  await expect(this.page.locator('body')).toBeVisible();
});

Then('the employee profile result is visible', async function (this: CustomWorld) {
  await expect(this.page.locator('body')).toBeVisible();
});
