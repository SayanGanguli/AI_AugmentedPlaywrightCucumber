import { setWorldConstructor, World, type IWorldOptions } from '@cucumber/cucumber';
import type { Browser, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  loginPage!: LoginPage;
  

  constructor(options: IWorldOptions) {
    super(options);
  }

  initializePages(page: Page): void {
    this.loginPage = new LoginPage(page);
  }
}

setWorldConstructor(CustomWorld);
