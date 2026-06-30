import {test,expect} from "../fixtures/baseFixtures"
import LoginData from "../test-data/loginData.json"


test.describe("Login Test" , ()=> {

    test.beforeEach(async({homePage}) => {
        await homePage.navigateToDemoBlaze()
    })

    test("ValidLogin",async({homePage,loginPage}) => {
        await homePage.loginLink.click()
        await loginPage.login()
        await expect(homePage.welcome).toHaveText(LoginData.validData.message)
    })

    test("InvalidLogin",async({homePage,loginPage,page}) => {
        await homePage.loginLink.click()
        page.on("dialog",async dialog => {
            expect(dialog.message).toBe("Wrong password.")
            dialog.accept()
        })
        await loginPage.invalidLogin()
    })
})