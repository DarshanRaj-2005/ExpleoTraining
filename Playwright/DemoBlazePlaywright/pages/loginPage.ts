import {Page,Locator} from "@playwright/test"
import LoginData from "../test-data/loginData.json"

export class LoginPage {
    readonly page : Page
    readonly username : Locator
    readonly password : Locator
    readonly loginBtn : Locator

    constructor(page:Page) {
        this.page = page
        this.username = page.locator("#loginusername")
        this.password = page.locator("#loginpassword")
        this.loginBtn = page.locator("//button[text()='Log in']")
    }

    async login(username: string, password: string) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }
}