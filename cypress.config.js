const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require('@shelex/cypress-allure-plugin/writer'); // import report plugin

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  )
  allureWriter(on, config);
  return config;
}


module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    baseUrl: "https://id.heroku.com",
    specPattern: "cypress/e2e/features/*.feature",
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
    },
  },

});
