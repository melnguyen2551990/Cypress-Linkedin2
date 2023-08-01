const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://id.heroku.com",
    specPattern: "cypress/e2e/tests/*.spec.js"
  },

});
