import { SearchresultPage } from './../pages/SearchresultPage';
import { LoginPage } from './../pages/LoginPage';
import {test as base,expect} from "@playwright/test"
import { HomePage } from "../pages/HomePage"
import { RegisterPage } from "../pages/RegisterPage"


type Fixtures = {
    homepage : HomePage,
    registerpage : RegisterPage
    loginpage : LoginPage
    searchresultpage : SearchresultPage
}

export const test = base.extend<Fixtures>({
    homepage:async({page},use) => {
        await use(new HomePage(page))
    },
    registerpage:async({page},use) => {
        await use(new RegisterPage(page))
    },
    loginpage:async({page},use) => {
        await use(new LoginPage(page))
    },
    searchresultpage:async({page},use) => {
        await use(new SearchresultPage(page))
    }
})

export {expect}
