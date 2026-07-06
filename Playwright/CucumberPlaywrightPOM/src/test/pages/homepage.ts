import {Page,Locator} from "@playwright/test"
import { basepage } from "./basepage"

export class Homepage extends basepage {
    readonly product : Locator

    constructor(page : Page) {
        super(page)
        this.product = this.page.locator("//*[@id='header_container']/div[2]/span")
    }

    async productText() {
        return await this.gettext(this.product)
    }
}