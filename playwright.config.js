import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  /* Global timeout per test */
  timeout: 30 * 1000,

  expect: {
    timeout: 5000
  },

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if test.only is left in the source code */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Reporter to use */
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  /* 👇 FORCE CHROMIUM ONLY */
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    }
  ],

  use: {
    baseURL: 'https://www.saucedemo.com',

    headless: true,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',

    viewport: { width: 1280, height: 720 }
  }
});
