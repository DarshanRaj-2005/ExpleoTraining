import {Page,Locator} from "@playwright/test"

export class HomePage{
    readonly page : Page
    readonly login : Locator
    readonly welcome : Locator

    constructor(page:Page) {
        this.page = page
        this.login = page.locator("#login2")
        this.welcome = page.locator("#nameofuser")
    }

    async navigate() {
        await this.page.goto("https://demoblaze.com/")
    }

    async welcomeText() {
        await this.welcome.textContent()
    }
}