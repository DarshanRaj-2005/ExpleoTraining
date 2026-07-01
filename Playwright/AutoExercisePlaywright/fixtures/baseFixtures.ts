import {test as base, expect} from "@playwright/test"
import { HomePage } from "../pages/HomePage"
import { SignupPage } from "../pages/SignupPage"
import { AccountInfoPage } from "../pages/AccountInfoPage"

type Fixtures = {
    homepage : HomePage
    signuppage : SignupPage
    accountinfopage : AccountInfoPage
}

export const test = base.extend<Fixtures>({
    homepage:async({page},use) => {
        await use(new HomePage(page))
    },
    signuppage:async({page},use) => {
        await use(new SignupPage(page))
    },
    accountinfopage:async({page},use) => {
        await use(new AccountInfoPage(page))
    }
})

export {expect}

