import * as report from "multiple-cucumber-html-reporter"
report.generate({
  jsonDir: "./reports",
  reportPath: "./reports",
  reportName: "Playwright BDD Report",
  pageTitle: "Sauce Demo",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "118",
    },
    device: "Darshan - Machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test Info",
    data: [
      { label: "Project", value: "Sauce Demo Website Testing" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },
    ],
  },
});