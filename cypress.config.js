const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://subscribe.stctv.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
