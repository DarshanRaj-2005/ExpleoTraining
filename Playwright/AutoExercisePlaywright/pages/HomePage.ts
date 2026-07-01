import {Page,Locator} from "@playwright/test"

export class HomePage {

    readonly page : Page
    readonly login : Locator
    readonly sucmess : Locator
    readonly continueBtn : Locator

    constructor(page:Page) {
        this.page = page
        this.login = page.locator("//a[text()=' Signup / Login']")
        this.sucmess = page.locator("//*[@id='form']/div/div/div/p[1]")
        this.continueBtn = page.locator("//*[@id='form']/div/div/div/div/a")
    }

    async navigation() {
        await this.page.goto("https://automationexercise.com/")
    }
}