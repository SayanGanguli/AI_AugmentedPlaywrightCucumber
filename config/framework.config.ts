import 'dotenv/config';

export const frameworkConfig = {
  baseUrl: process.env.BASE_URL ?? 'https://example.com',
  timeout: Number(process.env.TEST_TIMEOUT ?? 30_000),
  browser: process.env.BROWSER ?? 'chromium',
  headless: process.env.HEADLESS !== 'false'
} as const;
