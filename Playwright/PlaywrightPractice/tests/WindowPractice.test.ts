import { expect,test} from '@playwright/test'

test("Window test",async ({page,context}) =>{
    await page.goto("https://demoqa.com/browser-windows");
    const [newWindow]=await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);
    await newWindow.waitForLoadState("domcontentloaded");
    const text = await newWindow.locator('#sampleHeading').textContent();
    console.log("New window text:", text);
    await expect(newWindow.locator('#sampleHeading')).toHaveText("This is a sample page");
    await newWindow.close();
    await expect(page).toHaveURL(/browser-windows/);
});