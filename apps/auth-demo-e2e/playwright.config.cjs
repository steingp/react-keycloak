const { defineConfig } = require('@playwright/test');
const { nxE2EPreset } = require('@nx/playwright/preset');

module.exports = defineConfig(
  nxE2EPreset(__filename, { testDir: './src' })
);
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
// export default defineConfig({
//   ...nxE2EPreset(__filename, { testDir: './src' }),
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     baseURL,
//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//   },
//   /* Run your local dev server before starting the tests */
//   webServer: {
//     command: 'pnpm exec nx run @auth-ws/auth-demo:preview',
//     url: 'http://localhost:4300',
//     reuseExistingServer: true,
//     cwd: workspaceRoot,
//   },
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },

//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },

//     {
//       name: 'webkit',
//       use: { ...devices['Desktop Safari'] },
//     },

//     // Uncomment for mobile browsers support
//     /* {
//       name: 'Mobile Chrome',
//       use: { ...devices['Pixel 5'] },
//     },
//     {
//       name: 'Mobile Safari',
//       use: { ...devices['iPhone 12'] },
//     }, */

//     // Uncomment for branded browsers
//     /* {
//       name: 'Microsoft Edge',
//       use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     },
//     {
//       name: 'Google Chrome',
//       use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     } */
//   ],
// });
