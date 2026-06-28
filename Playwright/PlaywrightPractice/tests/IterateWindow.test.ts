import { expect,test} from '@playwright/test'

test("Iterate Window",async ({page,context}) =>{
    await page.goto("https://demoqa.com/browser-windows");

    const [tab]=await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);
    await tab.waitForLoadState();

    const [window]=await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);

    await window.waitForLoadState();

    const pages = context.pages();

    console.log("number of pages:",pages.length)

    for(const p of pages) {
        console.log("------------")
        console.log("URL:",p.url());
        console.log("Title:",await p.title());
    }
});