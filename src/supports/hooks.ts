import 'dotenv/config';
import { After, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import type { CustomWorld } from './custom-world';

setDefaultTimeout(30000);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  this.initializePages(this.page);
});

After(async function (this: CustomWorld) {
  await this.context?.close();
  await this.browser?.close();
});
