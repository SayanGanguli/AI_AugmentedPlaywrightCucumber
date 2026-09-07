import { defineConfig, devices } from '@playwright/test';
import { frameworkConfig } from './config/framework.config.js';

export default defineConfig({
  testDir: './src',
  timeout: frameworkConfig.timeout,
  fullyParallel: true,
  reporter: [['html', { outputFolder: 'reports/playwright' }], ['list']],
  use: {
    baseURL: frameworkConfig.baseUrl,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }]
});
