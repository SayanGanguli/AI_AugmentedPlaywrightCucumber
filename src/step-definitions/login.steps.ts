import { Given, Then } from '@cucumber/cucumber';
import assert from 'node:assert/strict';

Given('I open the application', async function () {
  this.page = await this.browser.newPage();
  await this.page.goto(this.baseUrl, { waitUntil: 'domcontentloaded' });
});

Then('the page title should be visible', async function () {
  assert.ok(await this.page.title());
  await this.page.close();
});
