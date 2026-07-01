import {test,expect, chromium} from '@playwright/test'

test("Login Test Demo", async() => {
    const browser = await chromium.launch({
        headless:false
    })
    const context = await browser.newContext()
    const page = await context.newPage()
    
    await page.goto("https://demoblaze.com/")

    await page.click('#login2')
    await page.fill('#loginusername',"DarshanRaj")
    await page.fill('#loginpassword',"dharshan123")
    await page.locator("//button[text()='Log in']").click()
    await expect(page.locator("#nameofuser")).toBeVisible();

    await page.waitForTimeout(5000)

    const page1 = await context.newPage()
    page1.goto("https://demoblaze.com/cart.html")

    page1.waitForTimeout(5000)
})