import {test,expect} from "@playwright/test"

test.beforeEach(async({page}) => {
    await page.goto("https://the-internet.herokuapp.com")
})

test.afterEach(async({page}) => {
    await page.close()
})

test("Upload file", async({page}) => {
    await page.locator("//*[@id='content']/ul/li[18]/a").click()
    await page.setInputFiles("#file-upload","TestData/screenshot.png")
    await page.locator("#file-submit").click()
    await expect(page.locator("//*[@id='content']/div/h3")).toBeVisible()
    let res = await page.locator("#uploaded-files").textContent()
    console.log("Result:",res)
    await expect(res).toContain("screenshot.png")
})

test("CheckBox", async({page}) => {
    await page.locator("//*[@id='content']/ul/li[6]/a").click()
    await page.locator("//*[@id='checkboxes']/input[1]").check()
    await expect(page.locator("//*[@id='checkboxes']/input[1]")).toBeChecked()
})
