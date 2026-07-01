import {test,expect} from "../fixtures/baseFixtures"
import {RegisterData,readData} from "../utils/csvReader"

const datas : RegisterData[] = readData()

datas.forEach((data) => {
    test.describe("Register", ()=> {
        test.beforeEach(async({homepage})=> {
            await homepage.navigation()
        })

        test("Valid register @smoke", async({homepage,registerpage}) => {
            await homepage.myacc.click()
            await homepage.register.click()
            await registerpage.fill(data.firstname,data.lastname,data.email,data.telephone,data.password,data.cpassword)
            await expect(registerpage.mes).toHaveText("Your Account Has Been Created!")
        })
    })
})