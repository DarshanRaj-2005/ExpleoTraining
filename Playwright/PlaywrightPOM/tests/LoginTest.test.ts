import {test,expect} from "../fixtures/baseFixture"
import loginData from "../testdata/loginData.json"

test.describe('Login Tests', ()=>{ 
    test.beforeEach(async({loginPage}) =>{ 
        await loginPage.navigate()
    })

    test('invalid login @login',async({loginPage}) => {
        await loginPage.login(loginData.invalidUser.username,loginData.invalidUser.password)
        let mes = await loginPage.getErrorMessage()
        await expect(loginPage.errorMessage).toBeVisible()
        await expect(mes).toBe(loginData.invalidUser.errMessage)
    })

    test('valid login @login', async({dashboardPage,loginPage}) => {
        await loginPage.login(loginData.validUser.username,loginData.validUser.password)
        await expect(dashboardPage.dashboardTitle).toBeVisible()
    })
})