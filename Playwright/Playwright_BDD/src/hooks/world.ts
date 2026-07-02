import {setWorldConstructor} from "@cucumber/cucumber"
import {Browser, Page, BrowserContext} from "@playwright/test"

export class CustomWorld {
    broswer!: Browser
    context!:BrowserContext
    page!:Page
}
setWorldConstructor(CustomWorld)
