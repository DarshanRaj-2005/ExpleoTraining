import {test,expect} from "@playwright/test"
import LoginData from "../TestData/LoginData.json"

test.beforeEach(async({page}) => {
    await page.goto("https://demoblaze.com/")
})

test.afterEach(async({page}) => {
    await page.close()
})

// interface LoginData{
//     testName : string,
//     username : string,
//     password : string,
//     expectResult : string,
//     expectMessage : string
// }

LoginData.forEach((data) => {
    test(`${data.testName} @Login`, async({page}) => {
        await page.locator("#login2").click({timeout:5000})
        await page.locator("#loginusername").fill(data.username)
        await page.locator("#loginpassword").fill(data.password)

        page.on("dialog", async dialog => {
            let text = dialog.message()
            await expect(text).toBe(data.expectMessage)
            await dialog.accept()
        })
        await page.locator("//button[text()='Log in']").click({timeout:5000})

        if(data.expectResult === "Success") {
            await page.locator("#nameofuser").isVisible()
            await expect(page.locator("#nameofuser")).toHaveText(data.expectMessage,{timeout:5000})
        }
    })
})