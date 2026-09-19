import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/loginPage';
import type { CustomWorld } from '../supports/custom-world';

Given('I am on the OrangeHRM login page', async function (this: CustomWorld) {
  await new LoginPage(this.page).launchApplication();
});

When('I login with username {string} and password {string}', async function (this: CustomWorld, username: string, password: string) {
  await new LoginPage(this.page).loginToApplication(username, password);
});

Then('I should be redirected to the dashboard', async function (this: CustomWorld) {
  await new LoginPage(this.page).expectDashboard();
});

Then('I should see an invalid credentials error message', async function (this: CustomWorld) {
  await new LoginPage(this.page).expectInvalidCredentialsError();
});
