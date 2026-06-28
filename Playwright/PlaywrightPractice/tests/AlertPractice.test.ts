import {test} from "@playwright/test";

test('simple alert', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
    page.on("dialog", async alert =>{
        const text =alert.message();
        console.log(text);
        await alert.accept();
    })
    await page.getByRole("button", { name: "Click Me" }).first().click();

});