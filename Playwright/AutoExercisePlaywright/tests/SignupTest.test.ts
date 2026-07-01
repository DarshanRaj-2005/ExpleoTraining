import {test,expect} from "../fixtures/baseFixtures"
import {RegisterData,readRegisterData} from "../utils/csvreader"


const userdata : RegisterData[] = readRegisterData()

userdata.forEach((datas) => {
test.describe("Signup Test", ()=> {
    test.beforeEach(async({homepage})=>{
        await homepage.navigation()
    })

    test("Valid Signup",async({homepage,signuppage,accountinfopage}) => {
        const loginBtn = homepage.login
        //Dom Click to avoid AD
        await loginBtn.evaluate((element) => {(element as HTMLElement).click()})
        await signuppage.signup(datas.name,datas.email)
        await accountinfopage.fillInfo(datas.password,datas.firstname,datas.lastname,datas.address,datas.state,datas.city,datas.zipcode,datas.mobile)
        await expect(homepage.sucmess).toHaveText("Congratulations! Your new account has been successfully created!")
        const continueButton = homepage.continueBtn
        await continueButton.evaluate((element) => {(element as HTMLElement).click()})
    })
})
})