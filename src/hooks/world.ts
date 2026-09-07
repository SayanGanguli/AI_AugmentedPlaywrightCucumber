import { After, Before, setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium, type Browser, type Page } from 'playwright';
import { frameworkConfig } from '../../config/framework.config.js';

export class TestWorld extends World {
  browser!: Browser;
  page!: Page;
  baseUrl = frameworkConfig.baseUrl;

  async openBrowser(): Promise<void> {
    this.browser = await chromium.launch({ headless: frameworkConfig.headless });
  }
}

setWorldConstructor(TestWorld);

Before(async function () {
  await this.openBrowser();
});

After(async function () {
  await this.browser?.close();
});
