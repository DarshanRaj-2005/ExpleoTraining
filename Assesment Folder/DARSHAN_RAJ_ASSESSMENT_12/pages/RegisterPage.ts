import {Page,Locator} from "@playwright/test"

export class RegisterPage {

    readonly page : Page
    readonly firstname :Locator
    readonly lastname : Locator
    readonly email : Locator
    readonly telephone : Locator
    readonly password : Locator
    readonly cpassword : Locator
    readonly checkBox : Locator
    readonly btn : Locator
    readonly mes : Locator

    constructor(page:Page) {
        this.page = page
        this.firstname = page.locator("#input-firstname")
        this.lastname = page.locator("#input-lastname")
        this.email = page.locator("#input-email")
        this.telephone = page.locator("#input-telephone")
        this.password = page.locator("#input-password")
        this.cpassword = page.locator("#input-confirm")
        this.checkBox = page.locator("//*[@id='content']/form/div/div/input[1]")
        this.btn = page.locator("//*[@id='content']/form/div/div/input[2]")
        this.mes = page.locator("//*[@id='content']/h1")
    }

    async fill(firstname:string, lastname:string,email:string,telephone:string,password:string,cpassword:string) {
        await this.firstname.fill(firstname)
        await this.lastname.fill(lastname)
        await this.email.fill(email)
        await this.telephone.fill(telephone)
        await this.password.fill(password)
        await this.cpassword.fill(cpassword)
        await this.checkBox.check()
        await this.btn.click()
    }
}