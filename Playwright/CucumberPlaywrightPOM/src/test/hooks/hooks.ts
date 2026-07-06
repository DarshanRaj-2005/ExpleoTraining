import { Before,After,BeforeAll,Status,AfterAll } from "@cucumber/cucumber";
import {chromium} from "@playwright/test"
import { Loginpage } from "../pages/loginpage";
import { Homepage } from "../pages/homepage";
import { logger } from "../utils/winstonLogger";
import { customWorld } from "../world/customWorld";

let browser : any

BeforeAll(async ()=> {
    logger.info("Chrome Browser Launched")
    browser = await chromium.launch({headless:false})
})

Before(async function(this:customWorld) {
    this.browser = browser
    this.context = await this.browser.newContext()
    this.page = await this.context.newPage()

    this.loginpage = new Loginpage(this.page)
    this.homepage = new Homepage(this.page)
})

After(async function({pickle,result}) {
    if(result?.status === Status.FAILED) {
        const img = await this.page.screenshot({path:`./screenshots/${pickle.name}.png`,type:"png"})
        await this.attach(img,"image/png")
    }
    await this.page.close()
    await this.context.close()
})

AfterAll(async ()=> {
    logger.info("Browser closed")
    await browser.close()
})
