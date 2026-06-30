import {test,expect} from "../fixtures/baseFixtures"
import LoginData from "../testdata/LoginData.json"


test.describe("Login Test" , ()=> {

    test.beforeEach(async({homePage}) => {
        await homePage.navigate()
    })

    test("ValidLogin",async({homePage,loginPage}) => {
        await homePage.login.click()
        await loginPage.login()
        console.log("Success Message:",homePage.welcomeText())
        await expect(homePage.welcome).toHaveText(LoginData.validData.message)
    })
})