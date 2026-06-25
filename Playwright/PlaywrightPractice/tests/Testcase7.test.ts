import { test,expect} from '@playwright/test';

test("Testcase page visibility",async({page})=>{
    await page.goto("https://automationexercise.com/")
    await expect(page).toHaveTitle("Automation Exercise");
    await page.click("//a[contains(text(),'Test Cases')]")
    await expect(page.locator('//*[@id="form"]/div/div[1]/div/h2/b')).toContainText("Test Cases")
});