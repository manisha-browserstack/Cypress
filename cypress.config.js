
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'r4zx1m',
  e2e: {
    baseUrl: "https://www.google.com",
    pageLoadTimeout: 120000, // 120 seconds
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
