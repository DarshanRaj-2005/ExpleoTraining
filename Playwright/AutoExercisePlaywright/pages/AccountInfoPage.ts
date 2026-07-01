import {Page,Locator} from "@playwright/test"

export class AccountInfoPage {

    readonly page : Page
    readonly password : Locator
    readonly firstname : Locator
    readonly lastname : Locator
    readonly address : Locator
    readonly state : Locator
    readonly city : Locator
    readonly zipcode : Locator
    readonly mobno : Locator
    readonly createBtn :Locator

    constructor(page:Page) {
        this.page = page
        this.password = page.locator("#password")
        this.firstname = page.locator("#first_name")
        this.lastname = page.locator("#last_name")
        this.address = page.locator("#address1")
        this.state = page.locator("#state")
        this.city = page.locator("#city")
        this.zipcode = page.locator("#zipcode")
        this.mobno = page.locator("#mobile_number")
        this.createBtn = page.locator("//button[text()='Create Account']")
    }

    async fillInfo(password:string,firstname:string,lastname:string,address:string,state:string,city:string,zipcode:string,mobno:string) {
        await this.password.fill(password)
        await this.firstname.fill(firstname)
        await this.lastname.fill(lastname)
        await this.address.fill(address)
        await this.state.fill(state)
        await this.city.fill(city)
        await this.zipcode.fill(zipcode)
        await this.mobno.fill(mobno)
        await this.createBtn.click()
    }
}