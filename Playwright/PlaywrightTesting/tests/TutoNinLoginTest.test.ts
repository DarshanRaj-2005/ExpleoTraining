import {test,expect} from '@playwright/test'

test ('Valid Login',async({page}) => {
    await page.goto(process.env.URL!)
    await page.click("//*[@id='top-links']/ul/li[2]/a")
    await page.click("//a[text()='Login']")
    await page.fill('#input-email',process.env.UNAME!)
    await page.fill('#input-password',process.env.PASSWORD!)
    await page.locator("//*[@id='content']/div/div[2]/div/form/input").click()
    await expect(page.locator("//*[@id='column-right']/div/a[13]")).toBeVisible();
})