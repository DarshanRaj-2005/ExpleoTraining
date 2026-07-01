import { Page,Locator } from '@playwright/test';
export class SearchresultPage{

    readonly page : Page
    readonly productlist :Locator

    constructor(page:Page) {
        this.page = page
        this.productlist = page.locator(".product-thumb h4")
    }
}