import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    readonly email : Locator
    readonly password : Locator
    readonly loginBtn : Locator
    readonly account : Locator
    readonly errtext : Locator

    constructor(page:Page) {
        super(page)
        this.email = page.locator("#Email")
        this.password = page.locator("#Password")
        this.loginBtn = page.locator('.login-button')
        this.account = page.locator("//div[@class='header-links']/ul/li[1]/a")
        this.errtext = page.locator("//div[@class='validation-summary-errors']/span")
    }

    async navigation() {
        await this.page.goto("https://demowebshop.tricentis.com/login")
    }

    async fillemail(email:string) {
        await this.fill(this.email,email)
    }
    async fillpassword(password:string) {
        await this.fill(this.password,password)
    }
    async clickBtn() {
        await this.click(this.loginBtn)
    }
}

