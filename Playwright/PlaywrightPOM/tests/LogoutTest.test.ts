import {test,expect} from "../fixtures/baseFixture"
import loginData from "../testdata/loginData.json"

test.describe('Logout', ()=> {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate()
        await loginPage.login(loginData.validUser.username,loginData.validUser.password)
    })

    test('LogoutTest @logout', async({dashboardPage,loginPage}) => {
        await dashboardPage.logout()
        await expect(loginPage.loginTitle).toBeVisible()
    })
})