import { expect, type Locator, type Page } from '@playwright/test';
import { LocatorFactory, type LocatorStrategy } from '../utils/LocatorFactory';

export abstract class BasePage {
  protected readonly page: Page;
  protected readonly factory: LocatorFactory;

  constructor(page: Page) {
    this.page = page;
    this.factory = new LocatorFactory(page);
  }

  async navigateTo(path: string): Promise<void> {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }

  protected async fillLocator(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }

  protected async clickLocator(locator: Locator): Promise<void> {
    await locator.click();
  }

  protected async expectLocatorVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  async clickElement(strategy: LocatorStrategy, strategyValue: string, options?: Record<string, unknown>): Promise<void> {
    await this.factory.getLocator(strategy, strategyValue, options).click();
  }

  async enterText(strategy: LocatorStrategy, strategyValue: string, fillText: string): Promise<void> {
    await this.factory.getLocator(strategy, strategyValue).fill(fillText);
  }

  async clear(strategy: LocatorStrategy, strategyValue: string): Promise<void> {
    await this.factory.getLocator(strategy, strategyValue).clear();
  }

  async getText(strategy: LocatorStrategy, strategyValue: string): Promise<string> {
    return (await this.factory.getLocator(strategy, strategyValue).textContent())?.trim() ?? '';
  }

  async isVisible(strategy: LocatorStrategy, strategyValue: string): Promise<boolean> {
    return this.factory.getLocator(strategy, strategyValue).isVisible();
  }

  async isEnabled(strategy: LocatorStrategy, strategyValue: string): Promise<boolean> {
    return this.factory.getLocator(strategy, strategyValue).isEnabled();
  }

  async selectElement(strategy: LocatorStrategy, strategyValue: string, optionValue: string): Promise<void> {
    await this.factory.getLocator(strategy, strategyValue).selectOption(optionValue);
  }

  async press(strategy: LocatorStrategy, strategyValue: string, key: string): Promise<void> {
    await this.factory.getLocator(strategy, strategyValue).press(key);
  }

  async expectVisible(strategy: LocatorStrategy, strategyValue: string): Promise<void> {
    await expect(this.factory.getLocator(strategy, strategyValue)).toBeVisible();
  }

  async expectText(strategy: LocatorStrategy, strategyValue: string, text: string): Promise<void> {
    await expect(this.factory.getLocator(strategy, strategyValue)).toContainText(text);
  }

  async expectUrl(url: string | RegExp): Promise<void> {
    await expect(this.page).toHaveURL(url);
  }

  async expectTitle(pageTitle: string): Promise<void> {
    await expect(this.page).toHaveTitle(pageTitle);
  }
}
