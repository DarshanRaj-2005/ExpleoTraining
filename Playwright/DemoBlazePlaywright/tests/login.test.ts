import {test,expect} from "../fixtures/baseFixtures"
import loginData from "../test-data/loginData.json"

test.describe("Login Test" , ()=> {

    test.beforeEach(async({homePage}) => {
        await homePage.navigateToDemoBlaze()
    })

    test("ValidLogin",async({homePage,loginPage}) => {
        await homePage.loginLink.click()
        if(loginData.validData){
            await loginPage.login(loginData.validData.username,loginData.validData.password)
        }
        await expect(homePage.welcome).toHaveText(loginData.validData.message)
    })

    test("InvalidLogin",async({homePage,loginPage,page}) => {
        await homePage.loginLink.click()
        page.on("dialog",async dialog => {
            await expect(dialog.message).toBe("Wrong password.")
            dialog.accept()
        })
        if(loginData.invalidData){
            await loginPage.login(loginData.invalidData.username,loginData.invalidData.password)
        }
    })
})