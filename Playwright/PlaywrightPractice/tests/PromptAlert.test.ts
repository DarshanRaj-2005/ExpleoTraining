import { test } from "@playwright/test";

test('Prompt alert', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');

    page.on("dialog", async alert => {
        console.log("Type:", alert.type());
        await alert.accept("Hello");
    });
    await page.getByRole("button", { name: "Click Me" }).nth(3).click();
});