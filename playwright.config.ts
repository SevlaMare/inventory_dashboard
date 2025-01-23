import { defineConfig, devices } from '@playwright/test';

// READ ENV VARIABLES
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '.env') });
const HOST = process.env.HOST;
const PORT = process.env.PORT;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  timeout: 1_500, // ms

  // before tests, can setup:auth etc
  // globalSetup: require.resolve('./e2e/auth.setup'),
  // globalTeardown: require.resolve("./e2e/auth.teardown"),

  /* CI */
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list', { printSteps: true }],
    // ['html', { outputFolder: 'test-results/html-report', open: 'never' }],
    // ['json', { outputFile: 'test-results/report.json' }],
  ],

  use: {
    trace: 'off',
    baseURL: `http://${HOST}:${PORT}/`,
  },

  // browsers to run on
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
