import {Page,Locator} from "@playwright/test"

export class SignupPage {

    readonly page : Page
    readonly name : Locator
    readonly email : Locator
    readonly signupBtn : Locator

    constructor(page:Page) {
        this.page = page
        this.name = page.locator("//input[@name='name']")
        this.email = page.locator("//input[@name='name']/following-sibling::input[1]")
        this.signupBtn = page.locator("//button[text()='Signup']")
    }

    async signup(name : string, email: string) {
        await this.name.fill(name)
        await this.email.fill(email)
        await this.signupBtn.click()
    }
}