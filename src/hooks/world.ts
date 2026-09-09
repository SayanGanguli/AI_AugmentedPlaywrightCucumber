import { After, Before, Status, setDefaultTimeout, setWorldConstructor, World, type ITestCaseHookParameter } from '@cucumber/cucumber';
import { chromium, type Browser, type BrowserContext, type Page } from 'playwright';
import { mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { frameworkConfig } from '../../config/framework.config.js';

setDefaultTimeout(frameworkConfig.timeout);

export class TestWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  baseUrl = frameworkConfig.baseUrl;

  async openBrowser(): Promise<void> {
    this.browser = await chromium.launch({ headless: frameworkConfig.headless });
    this.context = await this.browser.newContext({ recordVideo: { dir: resolve('reports/cucumber/video') } });
    await this.context.tracing.start({ screenshots: true, snapshots: true });
  }
}

setWorldConstructor(TestWorld);

Before(async function () {
  await this.openBrowser();
});

After(async function (scenario: ITestCaseHookParameter) {
  const failed = scenario.result?.status === Status.FAILED;
  const artifactName = scenario.pickle.name.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
  await mkdir(resolve('reports/cucumber'), { recursive: true });

  if (failed && this.page) {
    await this.page.screenshot({ path: resolve('reports/cucumber', `${artifactName}.png`), fullPage: true });
  }

  if (this.context) {
    await this.context.tracing.stop(failed ? { path: resolve('reports/cucumber', `${artifactName}.zip`) } : undefined);
    const video = this.page?.video();
    await this.context.close();
    const videoPath = video ? await video.path() : undefined;
    if (!failed && videoPath) await rm(videoPath, { force: true });
  }

  await this.browser?.close();
});
