const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: true,
  videoCompression: true,

  // Configuration for the Cypress Mochawesome Reporter
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "ProjetAuto / Cypress",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
    html: true,
    json: true, // Ensure JSON is enabled globally
    reportDir: "cypress/reports/mochawesome", // Output folder for reports
  },

  e2e: {
    baseUrl: "https://www.automationexercise.com/",
    setupNodeEvents(on, config) {
      // Initialize the Mochawesome reporter plugin
      require("cypress-mochawesome-reporter/plugin")(on);

      // Initialize the Cucumber preprocessor
      on("file:preprocessor", cucumber());

      return config;
    },
    // La localization des features a executer (testFiles)
    specPattern: "cypress/e2e/features/**/*.feature",
    //   env:{ tags: "@login"} Run only scenario with this tag (Pov: add "@login" in login.feature)

    //l'exectution est faite par les files js ou ts situes dans le stepDef folder
    excludeSpecPattern: "**/*.{js, ts}",
  },
});
