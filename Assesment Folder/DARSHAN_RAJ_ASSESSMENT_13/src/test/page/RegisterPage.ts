import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage {

    readonly checkBox : Locator
    readonly firstname : Locator
    readonly lastname : Locator
    readonly email : Locator
    readonly password : Locator
    readonly cpassword : Locator
    readonly registerBtn : Locator

    constructor(page:Page) {
        super(page)
        this.checkBox = page.locator("#gender-male")
        this.firstname = page.locator("#FirstName")
        this.lastname = page.locator("#LastName")
        this.email = page.locator("#Email")
        this.password = page.locator("#Password")
        this.cpassword = page.locator("#ConfirmPassword")
        this.registerBtn = page.locator("#register-button")
    }

    async navigation() {
        await this.page.goto("https://demowebshop.tricentis.com/register")
    }

    async fillPersonalDetails(fn:string,ln:string,email:string,password:string,cpassword:string) {
        await this.check(this.checkBox)
        await this.fill(this.firstname,fn)
        await this.fill(this.lastname,ln)
        await this.fill(this.email,email)
        await this.fill(this.password,password)
        await this.fill(this.cpassword,cpassword)
    }

    async clickregister() {
        await this.click(this.registerBtn)
    }
    
}