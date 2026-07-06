import {Locator, Page} from "@playwright/test"

export class basepage {
    readonly page : Page

    constructor(page : Page) {
        this.page = page
    }
    async click(locator : Locator) {
        await locator.click()
    }
    async jsclick(locator : Locator) {
        await locator.evaluate((element)=> {(element as HTMLElement).click()})
    }
    async fill(locator : Locator,value:string) {
        await locator.fill(value)
    }
    async gettext(locator : Locator) {
        return await locator.textContent()
    }
    async isvisible(locator : Locator) {
        return await locator.isVisible()
    }
    async check(locator : Locator) {
        return await locator.check()
    }
    async getallcontent(locator:Locator) {
        return await locator.allTextContents()
    }
}