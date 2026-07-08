import { Given,When,Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/CustomWorld";
import { expect} from "@playwright/test";
import { readData } from "../utils/csvreader";

const [data] : any = readData("registerData.csv");

Given('the user is on Register page', async function (this:CustomWorld) {
  await this.registerPage.navigation()
});

When('the user enters the valid personal details and password', async function (this:CustomWorld) {
  await this.registerPage.fillPersonalDetails(data.firstname,data.lastname,data.email,data.password,data.cpassword)
});

When('the user clicks register button', async function (this:CustomWorld) {
  await this.registerPage.clickregister()
});

Then('the user should get a success message', async function (this:CustomWorld) {
  let text = await this.registerresultpage.resultText()
  await expect(text?.trim()).toBe("Your registration completed")
});