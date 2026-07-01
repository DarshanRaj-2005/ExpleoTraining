import { read } from 'node:fs';
import {Page,Locator} from "@playwright/test"

export class HomePage {

    readonly page : Page
    readonly myacc :Locator
    readonly register : Locator
    readonly login : Locator
    readonly search : Locator
    readonly searchbtn : Locator

    constructor(page:Page) {
        this.page = page
        this.myacc = page.locator("//*[@id='top-links']/ul/li[2]/a")
        this.register = page.locator("//a[text()='Register']")
        this.login = page.locator("//a[text()='Login']")
        this.search = page.locator("//*[@id='search']/input")
        this.searchbtn = page.locator("//*[@id='search']/span/button")
    }
    async navigation() {
        this.page.goto("https://tutorialsninja.com/demo/")
    }
}