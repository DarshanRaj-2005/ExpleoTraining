import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterresultPage extends BasePage {
    readonly resmessage : Locator
    readonly continuebtn : Locator

    constructor(page:Page) {
        super(page)
        this.resmessage = page.locator(".result")
        this.continuebtn = page.locator(".button-1 register-continue-button")
    }

    async resultText() {
        return await this.gettext(this.resmessage)
    }

    async clickContinue() {
        await this.click(this.continuebtn)
    }
}