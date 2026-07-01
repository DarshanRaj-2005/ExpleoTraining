import {test,expect,chromium} from '@playwright/test'

test("Login Test Demo", async() => {
    const browser = await chromium.launch({
        //headless:false
    })
    const context = await browser.newContext()
    const page = await context.newPage()
    
    await page.goto("https://demoblaze.com/")

    await page.click('#login2')
    await page.fill('#loginusername',"DarshanRaj")
    await page.fill('#loginpassword',"dharshan123")
    await page.locator("//button[text()='Log in']").click()
    await expect(page.locator("#nameofuser")).toBeVisible();

    console.log("Title:",await page.title())
    console.log("Url:",await page.url())
    // console.log("Content:",await page.content())

    await page.click('#cartur')
    await page.waitForTimeout(5000)
    await page.goBack()
    await page.waitForTimeout(5000)
    await page.goForward()
    await page.waitForTimeout(5000)
    await page.reload()
})