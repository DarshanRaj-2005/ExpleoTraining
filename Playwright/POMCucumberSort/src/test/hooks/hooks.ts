import {Before, After, BeforeAll, AfterAll, Status} from "@cucumber/cucumber"
import { chromium } from "@playwright/test"
import { CustomWorld } from "../world/CustomWorld"
import { LoginPage } from "../pages/loginPage"
import { HomePage } from "../pages/homePage"

let browser : any 

Before(async function (this:CustomWorld,scenario) {
    browser=await chromium.launch({headless:false})

    this.browser=browser
    this.context=await browser.newContext()
    this.page=await this.context.newPage()

    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
})

After(async function ({pickle,result}) {

    if(result?.status==Status.FAILED){
        const img=await this.page.screenshot({path:`./reports/screenshots/${pickle.name}${Date.now()}.png`,type:"png"})
        await this.attach(img,"image/png")
    }

    await this.page.close();
    await this.context.close();
    await this.browser.close();
});
