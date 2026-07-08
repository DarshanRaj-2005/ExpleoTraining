import {Browser,Page,BrowserContext} from "@playwright/test"
import { World,setWorldConstructor} from "@cucumber/cucumber"
import { LoginPage } from "../page/LoginPage"
import { RegisterPage } from "../page/RegisterPage"
import { RegisterresultPage } from "../page/RegisterresultPage"

export class CustomWorld extends World {
    browser !: Browser
    page !: Page
    context !: BrowserContext

    loginPage !: LoginPage
    registerPage !: RegisterPage
    registerresultpage !: RegisterresultPage
}

setWorldConstructor(CustomWorld)
