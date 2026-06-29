import {test,expect} from "@playwright/test"


//Grouped vald login as a one group 
test.describe("Valid Login Test", ()=>{
//Used Only in this test to run that specific test
test("Login1 @smoke", async({page}) => {

    await page.goto("https://demoblaze.com/")
    await page.locator("#login2").click()
    await page.fill("#loginusername","DarshanRaj")
    await page.fill("#loginpassword","dharshan123")
    await page.locator("//button[text()='Log in']").click()

    await expect(page.locator("#logout2")).toBeVisible()
    await expect(page.locator("#nameofuser")).toHaveText("Welcome DarshanRaj")
})

//skipped the testusing test.skip
test.skip("Login2@regression", async({page}) => {

    await test.skip(true,"The test is skipped for learning purpose")
    await page.goto("https://demoblaze.com/")
    await page.locator("#login2").click()
    await page.fill("#loginusername","DarshanRaj")
    await page.fill("#loginpassword","dharshan123")
    await page.locator("//button[text()='Log in']")

    await expect(page.locator("#logout2")).toBeVisible()
    await expect.soft(page.locator("#nameofuser")).toHaveText("Welcome DarshanRaj")
})


//Using multiple tags
test("Login3", {
    tag:["@smoke","@regression"]
}, async({page}) => {

    await page.goto("https://demoblaze.com/")
    await page.locator("#login2").click()
    await page.fill("#loginusername","DarshanRaj")
    await page.fill("#loginpassword","dharshan123")
    await page.locator("//button[text()='Log in']").click()

    await expect.soft(page.locator("#logout2")).toBeVisible()
    await expect(page.locator("#nameofuser")).toHaveText("Welcome DarshanRaj")
})

})


//Used only in the group
test.describe("Invalid Login Test", ()=>{
//Used Only in this test to run that specific test
test("Login1 @smoke", async({page}) => {

    await page.goto("https://demoblaze.com/")
    await page.locator("#login2").click()
    await page.fill("#loginusername","DarshanRaj")
    await page.fill("#loginpassword","dharshan")

    page.on("dialog", async alert => {
        console.log("Message:",alert.message())
        await alert.accept()
    })

    await page.locator("//button[text()='Log in']").click()
})
})