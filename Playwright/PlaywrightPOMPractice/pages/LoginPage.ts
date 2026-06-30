import {Page,Locator} from "@playwright/test"
import LoginData from "../testdata/LoginData.json"

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

    async login() {
        await this.username.fill(LoginData.validData.username)
        await this.password.fill(LoginData.validData.password)
        await this.loginBtn.click()
    }

    async invalidLogin() {
        await this.username.fill(LoginData.invalidData.username)
        await this.password.fill(LoginData.invalidData.password)
        await this.loginBtn.click()
    }
}