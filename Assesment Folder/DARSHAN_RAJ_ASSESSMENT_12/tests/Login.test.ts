import {test,expect} from "../fixtures/baseFixtures"
import logindata from "../testdata/logindata.json"


test.describe("Login", ()=> {
    test.beforeEach(async({homepage})=> {
        await homepage.navigation()
    })

    test("Valid login @regression", async({homepage,loginpage}) => {
            await homepage.myacc.click()
            await homepage.login.click()
            if(logindata.valid) {
                await loginpage.login(logindata.valid.email,logindata.valid.password)
            }
            await expect(loginpage.order).toHaveText("My Orders")
    })
    test("Invalid email login @regression", async({homepage,loginpage}) => {
            await homepage.myacc.click()
            await homepage.login.click()
            if(logindata.incorrectemail) {
                await loginpage.login(logindata.incorrectemail.email,logindata.incorrectemail.password)
            }
            await expect(loginpage.errmess).toHaveText("Warning: No match for E-Mail Address and/or Password.")
    })
    test("Invalid password login @regression", async({homepage,loginpage}) => {
            await homepage.myacc.click()
            await homepage.login.click()
            if(logindata.incorrectpassword) {
                await loginpage.login(logindata.incorrectpassword.email,logindata.incorrectpassword.password)
            }
            await expect(loginpage.errmess).toHaveText("Warning: No match for E-Mail Address and/or Password.")
    })
})
