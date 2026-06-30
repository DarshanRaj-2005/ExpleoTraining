import { test, expect } from "../fixtures/baseFixture";
import loginData from "../testdata/loginData.json"

test.describe("Dashboard Test", () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate()
        await loginPage.login(loginData.validUser.username,loginData.validUser.password)
    })

    test("Time at work Test @dashboard", async ({ dashboardPage }) => {
        await expect(dashboardPage.timeatwork).toBeVisible()
    })
 
    test("myAction Test @dashboard", async ({ dashboardPage }) => {
        await expect(dashboardPage.myActions).toBeVisible()
    })

    test.afterEach(async ({ dashboardPage }) => {
        await dashboardPage.logout()
    })

})