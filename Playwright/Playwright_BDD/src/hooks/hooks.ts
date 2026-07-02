import { Before,After, Status } from "@cucumber/cucumber";
import {chromium} from "@playwright/test"


Before(async function() {
    this.broswer = await chromium.launch()
    this.context = await this.broswer.newContext()
    this.page = await this.context.newPage()
})

After(async function({pickle,result}) {
    console.log(result?.status)

    if(result?.status === Status.FAILED) {
        const img = await this.page.screenshot({path:`./screenshots/${pickle.name}.png`,type:"png"})
        await this.attach(img,"image/png")
    }
    await this.broswer.close()
    await this.page.close()
    await this.context.close()
})

// let browser : Browser
// Before(async function () {
//     browser = await chromium.launch()
//     let context = await browser.newContext()
//     let page = await context.newPage()
//     pageFixture.page = page
// })

// After(async function() {
//     await pageFixture.page.close()
//     await browser.close()
// })