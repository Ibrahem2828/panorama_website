import { defineConfig } from "@playwright/test";

const hasExternalServer = process.env.PLAYWRIGHT_EXTERNAL_SERVER === "1";

export default defineConfig({
  testDir: "./test/e2e",
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3100",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  webServer: hasExternalServer
    ? undefined
    : {
        command: "npm run start",
        env: {
          PORT: "3100",
          HOSTNAME: "localhost",
        },
        // The Arabic root path selects its locale with a cookie and redirects
        // to itself once. Use the explicit English route only for the server
        // readiness probe so Playwright does not follow that cookie-less loop.
        url: "http://localhost:3100/en",
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
  projects: [
    {
      name: "chrome",
      use: {
        browserName: "chromium",
        channel: "chrome",
      },
    },
  ],
});
