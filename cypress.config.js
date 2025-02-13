const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ya1hkj',
  e2e: {
    defaultCommandTimeOut: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
