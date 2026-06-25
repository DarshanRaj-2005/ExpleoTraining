import { test,expect} from '@playwright/test';

test("Logout",async({page})=>{
    await page.goto("https://automationexercise.com/")
    await page.click("//a[normalize-space()='Signup / Login']");
    await page.fill("//input[@data-qa='login-email']","messi1234567890@gmail.com")
    await page.fill("//input[@placeholder='Password']","messi10")
    await page.click("//button[normalize-space()='Login']")
    await expect(page.locator("//*[@id='header']/div/div/div/div[2]/div/ul/li[10]/a")).toContainText("Logged in")
    await page.click("//a[normalize-space()='Logout']")
    await expect(page.locator("//h2[normalize-space()='Login to your account']")).toContainText("Login")
});