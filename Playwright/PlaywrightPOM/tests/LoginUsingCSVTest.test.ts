import { readLoginData,LoginUser } from './../utils/csvReader';
import {test,expect} from "../fixtures/baseFixture"


const users : LoginUser[] = readLoginData()

const validUsers = users.find(user => user.type === "valid")
const invalidUsers = users.find(user => user.type === "invalid")

if (!validUsers || !invalidUsers) {
    throw new Error("Valid or Invalid user not found in CSV");
}

test.describe('Login Tests', ()=>{ 
    test.beforeEach(async({loginPage}) =>{ 
        await loginPage.navigate()
    })

    test('Invalid Login @login',async({loginPage}) => {
        await loginPage.login(invalidUsers.username,invalidUsers.password)
        await expect(loginPage.errorMessage).toBeVisible()
    })
    test('Valid Login @login', async({dashboardPage,loginPage}) => {
        await loginPage.login(validUsers.username,validUsers.password)
        await expect(dashboardPage.dashboardTitle).toBeVisible()
    })
})