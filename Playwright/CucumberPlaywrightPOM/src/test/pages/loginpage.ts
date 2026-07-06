import { basepage} from "./basepage";
import {Page,Locator} from "@playwright/test"

export class Loginpage extends basepage {

    readonly username : Locator
    readonly password : Locator
    readonly loginBtn : Locator
    readonly errmessage : Locator

    constructor(page : Page) {
        super(page)
        this.username = this.page.locator("#user-name")
        this.password = this.page.locator("#password")
        this.loginBtn = this.page.locator("#login-button")
        this.errmessage = this.page.locator("//*[@id='login_button_container']/div/form/div[3]/h3")
    }

    async navigation() {
        await this.page.goto("https://www.saucedemo.com/")
    }
    async datafill(username:string,password:string) {
        await this.fill(this.username,username)
        await this.fill(this.password,password)
    }

    async clickLogin() {
        await this.click(this.loginBtn)
    }

    async getErrMessage() {
        return await this.gettext(this.errmessage)
    }
}