import type { Page } from '@playwright/test';

export async function openUrl(page: Page, url: string): Promise<void> {
  await page.goto(url);
}

export async function readPageTitle(page: Page): Promise<string> {
  return page.title();
}
