import { defineConfig, devices } from '@playwright/test';
import * as path from 'path';
import dotenv from "dotenv";

const result = dotenv.config({
  path: `./env-files/.env.${process.env.TEST_ENV}`,
});
console.log(process.env.URL);
export default defineConfig({
  testDir: "./tests",
  expect:{
    toHaveScreenshot:{
      maxDiffPixelRatio:0.1,
    }
  },
  reporter:[['allure-playwright',{resultsDir:process.env.ALLURE_RESULTS_DIR}]],
  use: {
    headless: false,
    trace: "on",
    baseURL:"https://restful-booker.herokuapp.com",
    extraHTTPHeaders:{
      Accept:"application/json",
      "Content-Type":"application/json"
    }
  },
  /* Configure projects for major browsers */
  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

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
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
