import {Page,Locator} from "@playwright/test"

export class LoginPage {

    readonly page : Page
    readonly email :Locator
    readonly password : Locator
    readonly logbtn : Locator
    readonly errmess : Locator
    readonly order : Locator

    constructor(page:Page) {
        this.page = page
        this.email = page.locator("#input-email")
        this.password = page.locator("#input-password")
        this.logbtn = page.locator("//*[@id='content']/div/div[2]/div/form/input")
        this.errmess = page.locator("//*[@id='account-login']/div[1]")
        this.order = page.locator("//*[@id='content']/h2[2]")
    }
    async login(email:string,password:string) {
        await this.email.fill(email)
        await this.password.fill(password)
        await this.logbtn.click()
    }
}