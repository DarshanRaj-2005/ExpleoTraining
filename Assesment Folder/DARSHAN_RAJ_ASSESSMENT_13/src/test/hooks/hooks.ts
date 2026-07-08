import { Before,After,Status} from "@cucumber/cucumber";
import { CustomWorld } from "../world/CustomWorld";
import {chromium} from "@playwright/test"
import { LoginPage } from "../page/LoginPage";
import { RegisterPage } from "../page/RegisterPage";
import { RegisterresultPage } from "../page/RegisterresultPage";

Before(async function(this:CustomWorld) {
    this.browser = await chromium.launch({headless:false})
    this.context = await this.browser.newContext()
    this.page = await this.context.newPage()
    this.loginPage = new LoginPage(this.page)
    this.registerPage = new RegisterPage(this.page)
    this.registerresultpage = new RegisterresultPage(this.page)
})

After(async function({pickle,result}) {
    if(result?.status === Status.FAILED) {
        const img = await this.page.screenshot({path:`./screenshots/${pickle.name}.png`,type:"png"})
        await this.attach(img,"image/png")
    }
    this.page.close()
    this.context.close()
    this.browser.close()
})