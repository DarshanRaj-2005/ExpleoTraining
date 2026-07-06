import { Given,When,Then, DataTable } from "@cucumber/cucumber";
import {expect} from "@playwright/test"

Given('User Navigate to the application', async function () {
    await this.page.goto("https://tutorialsninja.com/demo/")
});

Given('user click on the my account link', async function () {
  await this.page.click("//*[@id='top-links']/ul/li[2]/a")
});

Given('user click on the Register link', async function () {
  await this.page.click("//a[text()='Register']")
});

Given('user enters the valid register details', async function (table: DataTable) {
  const data = table.hashes()[0]!
  await this.page.fill("#input-firstname",data.firstname)
  await this.page.fill("#input-lastname",data.lastname)
  await this.page.fill("#input-email",data.email)
  await this.page.fill("#input-telephone",data.telephone)
  await this.page.fill("#input-password",data.password)
  await this.page.fill("#input-confirm",data.confirmpassword)
});

// Given('user enter valid firstname as {string}', async function (string) {
//   await this.page.fill("#input-firstname",string)
// });

// Given('user enter valid lastname as {string}', async function (string) {
//   await this.page.fill("#input-lastname",string)
// });

// Given('user enter valid email as {string}', async function (string) {
//   await this.page.fill("#input-email",string)
// });

// Given('user enter valid telephone as {string}', async function (string) {
//   await this.page.fill("#input-telephone",string)
// });

// Given('user enter password as {string}', async function (string) {
//   await this.page.fill("#input-password",string)
// });

// Given('user enter confirm password as {string}', async function (string) {
//   await this.page.fill("#input-confirm",string)
// });

Given('user check privacy and policy', async function () {
  await this.page.check("//*[@id='content']/form/div/div/input[1]")
});

When('user click on the continue button', async function () {
  await this.page.click("//*[@id='content']/form/div/div/input[2]")
});

Then('register should be success', async function () {
  await expect(this.page.locator("//h1[text()='Your Account Has Been Created!']")).toHaveText("Your Account Has Been Created!")
});
