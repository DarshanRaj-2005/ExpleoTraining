import { CustomWorld } from './../world/CustomWorld';
import { Given,When,Then } from "@cucumber/cucumber";
import { expect} from "@playwright/test";

Given('the user is on Login page', async function (this:CustomWorld) {
  await this.loginPage.navigation()  
});

When('the user enters the email {string}', async function (this:CustomWorld,string) {
  await this.loginPage.fillemail(string)
});

When('the user enter the password {string}', async function (this:CustomWorld,string) {
  await this.loginPage.fillpassword(string)
});

When('the user clicks Log in button', async function (this:CustomWorld) {
  await this.loginPage.clickBtn()
});

Then('the user should be redirected to homepage {string} {string}', async function (this:CustomWorld,string, string2) {
  if(string === "valid") {
    await expect(this.loginPage.account).toHaveText(string2)
  }
  else if(string === "invalid") {
    await expect(this.loginPage.errtext).toHaveText(string2)
  }
});
