import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly loginLink: Locator;
    readonly contactLink: Locator;
    readonly nokialumia: Locator;
    readonly welcome : Locator

    constructor(page: Page) {
        this.page = page;
        this.loginLink = page.locator('#login2');
        this.contactLink = page.locator('//a[text()="Contact"]');
        this.nokialumia= page.locator('//a[text()="Nokia lumia 1520"]');
        this.welcome = page.locator("#nameofuser")
    }

    async navigateToDemoBlaze() {
        await this.page.goto('https://www.demoblaze.com/');
    }

    async openContactPage() {
        await this.contactLink.click();
    }

    async opennokialumia() {
        await this.nokialumia.click();
    }

    async welcomeText() {
        await this.welcome.textContent()
    }
}