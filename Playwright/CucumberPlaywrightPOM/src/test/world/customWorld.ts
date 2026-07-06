import { logger } from './../utils/winstonLogger';
import {Browser, BrowserContext,Page} from "@playwright/test"
import {Loginpage} from "../pages/loginpage"
import {Homepage} from "../pages/homepage"
import { World,setWorldConstructor} from "@cucumber/cucumber"

export class customWorld extends World{
    browser !: Browser
    context !: BrowserContext
    page !: Page

    loginpage !: Loginpage
    homepage !: Homepage

    logger = logger
}

setWorldConstructor(customWorld);