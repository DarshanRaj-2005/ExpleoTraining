import {test,expect} from '@playwright/test'

test('Login test',async({page}) => {
    await page.goto(process.env.URL!)
    await page.fill('#username',process.env.UNAME!)
    await page.fill('#password',process.env.PASSWORD!)
    await page.click('.radius')
    await expect(page.locator(".flash.success")).toBeVisible();
})
