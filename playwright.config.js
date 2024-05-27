import { defineConfig, devices } from "@playwright/test";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";
const workers = parseInt(process.env.WORKERS) || undefined

export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : workers,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: baseUrl,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"] ,
        headless: process.env.PLAYWRIGHT_HEADLESS === 'true', // Set headless based on the environment variable
        slowMo: parseInt(process.env.SLOW_MO) || 0,
        timeout: parseInt(process.env.TIMEOUT) || 60,
        minTimeout: parseInt(process.env.MIN_TIMEOUT) || 5,

      },
    },

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run start',
    url: baseUrl,
    reuseExistingServer: !process.env.CI,
  },
});
