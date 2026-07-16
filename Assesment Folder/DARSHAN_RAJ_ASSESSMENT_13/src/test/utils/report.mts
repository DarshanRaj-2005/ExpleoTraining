import * as report from "multiple-cucumber-html-reporter"
report.generate({
  jsonDir: "./reports",
  reportPath: "./reports/html",
  reportName: "Playwright BDD Report",
  pageTitle: "Tutorials Ninja Login and Register Test",
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
      { label: "Project", value: "Login And Register Test" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },
    ],
  },
});