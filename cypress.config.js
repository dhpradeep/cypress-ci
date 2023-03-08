const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
        config.env = process.env
        return config
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    supportFolder: 'cypress/support/',
  },
});
