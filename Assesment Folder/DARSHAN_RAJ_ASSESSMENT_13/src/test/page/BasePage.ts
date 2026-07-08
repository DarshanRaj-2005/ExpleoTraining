import { Locator, Page } from "@playwright/test";

export class BasePage {

    readonly page : Page
    constructor(page:Page) {
        this.page = page
    }

    async click(locator:Locator) {
        await locator.click()
    }

    async fill(Locator:Locator,value:string) {
        await Locator.fill(value)
    }

    async gettext(locator:Locator) {
        return await locator.textContent()
    }

    async check(locator:Locator) {
        await locator.check()
    }
}