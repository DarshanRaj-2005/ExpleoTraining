import {Page,Locator} from "@playwright/test"

export class DashboardPage{

    readonly page : Page
    readonly dashboardTitle : Locator
    readonly myActions : Locator
    readonly userDiv : Locator
    readonly logoutLink : Locator
    readonly timeatwork : Locator

    constructor(page : Page) {
        this.page = page
        this.dashboardTitle = page.locator("//h6[text()='Dashboard']")
        this.myActions = page.locator("//p[text()='My Actions']")
        this.userDiv = page.locator("//span[@class='oxd-userdropdown-tab']")
        this.logoutLink = page.locator("//a[text()='Logout']")
        this.timeatwork = page.locator("//p[text()='Time at Work']")
    }

    async getDashboardTitle() {
        return await this.dashboardTitle.textContent()
    }
    async getMyActions() {
        return await this.myActions.textContent()
    }
    async logout() {
        await this.userDiv.click()
        await this.logoutLink.click()
    }
}