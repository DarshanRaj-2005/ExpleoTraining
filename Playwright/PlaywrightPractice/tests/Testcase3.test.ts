import { test,expect} from '@playwright/test';

test("Invalid Login",async({page})=>{
    await page.goto("https://automationexercise.com/")
    await page.click("//a[normalize-space()='Signup / Login']");
    await expect(page.locator("//h2[normalize-space()='Login to your account']")).toContainText("Login to your account")
    await page.fill("//input[@data-qa='login-email']","messi1234567890@gmail.com")
    await page.fill("//input[@placeholder='Password']","messi")
    await page.click("//button[normalize-space()='Login']")
    await expect(page.locator("//p[normalize-space()='Your email or password is incorrect!']")).toContainText("incorrect")
});