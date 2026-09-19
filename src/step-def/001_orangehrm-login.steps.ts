import { Given, When, Then } from '@cucumber/cucumber';
import type { CustomWorld } from '../supports/custom-world';

Given('I am on the OrangeHRM login page', async function (this: CustomWorld) {
  await this.loginPage.launchApplication();
});

When('user login with valid credentials', async function (this: CustomWorld) {
  await this.loginPage.login(
    process.env.USERNAME!,
    process.env.PASSWORD!,
  );
});

When('I login with username {string} and password {string}', async function (this: CustomWorld, username: string, password: string) {
  await this.loginPage.login(username, password);
});

Then('I should be redirected to the dashboard', async function (this: CustomWorld) {
  await this.loginPage.expectDashboard();
});

Then('I should see an invalid credentials error message', async function (this: CustomWorld) {
  await this.loginPage.expectInvalidCredentialsError();
});
