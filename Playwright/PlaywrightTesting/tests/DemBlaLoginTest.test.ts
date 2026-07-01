import {test,expect} from '@playwright/test'

test ('Valid Login',async({page}) => {
    await page.goto(process.env.URL!)
    await page.click('#login2')
    await page.fill('#loginusername',process.env.UNAME!)
    await page.fill('#loginpassword',process.env.PASSWORD!)
    await page.locator("//button[text()='Log in']").click()
    await expect(page.locator("#nameofuser")).toBeVisible();
})