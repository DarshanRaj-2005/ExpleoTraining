import {test,expect} from "@playwright/test"

test("Prob3 Test",async({page}) => {
    await page.goto( "https://www.bing.com/")
    let title = await page.title()
    let cuurl = await page.url()
    console.log("Title:",title)
    console.log("Current Url:",cuurl)

    await expect(title).toBe("Search - Microsoft Bing")
    await expect(cuurl).toBe("https://www.bing.com/")
    let text = await page.locator("//a[text()='Images']").textContent()
    console.log("Element InnerText:",text)


    await page.locator("#sb_form_q").fill("Playwright")
    await page.locator("#sb_form_q").click()
    console.log("Attribute:",await page.locator("#sb_form_q").getAttribute("name"));
    await page.locator("#sa_5003").click()
    await page.locator("//a[text()='Fast and reliable end-to-end testing for modern web apps | Playwright']").click()
    let pageTitle = await page.title()
    console.log("Title of Playwright Link:",pageTitle)

    await expect(pageTitle).toBe("playwright - Search")
})