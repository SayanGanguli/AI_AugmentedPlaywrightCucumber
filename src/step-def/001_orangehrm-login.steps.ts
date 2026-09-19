import { Given, When, Then } from '@cucumber/cucumber';
import type { CustomWorld } from '../supports/custom-world';

Given('I am on the OrangeHRM login page', async function (this: CustomWorld) {
  await this.page.goto(`${process.env.BASE_URL ?? 'https://opensource-demo.orangehrmlive.com'}/web/index.php/auth/login`);
  await this.page.waitForLoadState('domcontentloaded');
  await this.page.getByRole('textbox', { name: /username/i }).waitFor({ state: 'visible' });
  await this.page.getByLabel(/password/i).waitFor({ state: 'visible' });
});

When('I enter username {string} and password {string}', async function (this: CustomWorld, username: string, password: string) {
  await this.page.getByRole('textbox', { name: /username/i }).fill(username);
  await this.page.getByLabel(/password/i).fill(password);
});

When('I click the login button', async function (this: CustomWorld) {
  await this.page.getByRole('button', { name: /login/i }).click();
});

Then('I should be redirected to the dashboard', async function (this: CustomWorld) {
  await this.page.getByText(/dashboard/i).waitFor({ state: 'visible', timeout: 30000 });
});

Then('I should see an invalid credentials error message', async function (this: CustomWorld) {
  await this.page.getByText(/invalid credentials|required/i).first().waitFor({ state: 'visible', timeout: 30000 });
});
