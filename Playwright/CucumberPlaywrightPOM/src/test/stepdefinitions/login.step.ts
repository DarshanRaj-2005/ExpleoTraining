import {Given,Then} from "@cucumber/cucumber"
import {customWorld} from "../world/customWorld";
import logindata from "../../../testdata/logindata.json"
import { expect } from "@playwright/test";

Given('user is navigated to login page', async function (this:customWorld) {
    this.logger.info("Navigation Started")
    await this.loginpage.navigation()
});

Given('user enter {string} credentails', async function (this:customWorld,string) {
    this.logger.info("Login started")
    if(string === "valid") {
        await this.loginpage.datafill(logindata.valid.username,logindata.valid.password)
    }
});

Given('user clicks login button', async function (this:customWorld) {
    this.logger.info("Login button clicked")
    await this.loginpage.clickLogin()
});

Then('user should redirected to homepage', async function (this:customWorld) {
    this.logger.info("Valid Login Asserted")
    let value = await this.homepage.productText()
    await expect(value).toContain("Products")
});

Given('user enters {string} credentails', async function (this:customWorld,string) {
    if(string === "invalid") {
        await this.loginpage.datafill(logindata.invalid.username,logindata.invalid.password)
    }
});

Then('user should get a error message', async function () {
    this.logger.info("Invalid Login Asserted")
    let errvalue = await this.loginpage.getErrMessage()
    await expect(errvalue).toContain("Epic sadface: Username and password do not match any user in this service")
});