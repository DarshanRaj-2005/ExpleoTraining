import {test} from "@playwright/test";
test('confirm alert accept', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
    page.on("dialog", async alert =>{
        await alert.accept();
    })
    await page.getByRole("button", { name: "Click Me" }).nth(2).click();
});

test('Confirm alert dismiss', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
    page.on("dialog", async alert =>{
        await alert.dismiss();
    })
    await page.getByRole("button", { name: "Click Me" }).nth(2).click();
});
