import { Given,When,Then } from "@cucumber/cucumber";
import {expect} from "@playwright/test"
import { CustomWorld } from "../../hooks/world";
// import { pageFixture,expect } from "../../hooks/pageFixture";

let world : CustomWorld
Given('User Navigate to the website', async function () {
    await this.page.goto("https://tutorialsninja.com/demo/")
});

Given('user click on my account link', async function () {
  await this.page.click("//*[@id='top-links']/ul/li[2]/a")
});

Given('user click on the login link', async function () {
    await this.page.click("//a[text()='Login']")
});

Given('user enter valid username as {string}', async function (string) {
    await this.page.fill("#input-email",string)
});

Given('user enter valid password as {string}', async function (string) {
    await this.page.fill("#input-password",string)
});

When('user click on the login button', async function () {
    await this.page.click("//*[@id='content']/div/div[2]/div/form/input")
});

Then('login should be success', async function () {
    await expect(this.page.locator("//*[@id='content']/h2[1]")).toBeVisible()
});

Given('user enter invalid username as {string}', async function (string) {
    await this.page.fill("#input-email",string)
});

Given('user enter invalid password as {string}', async function (string) {
    await this.page.fill("#input-password",string)
});

Then('login should not be success', async function () {
    await expect(this.page.locator("//*[@id='account-login']/div[1]")).toBeVisible()
});