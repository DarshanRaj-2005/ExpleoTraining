import {test} from "@playwright/test"

test("Download PDF", async ({page}) => {
    await page.goto("https://qwikpdf.com/sample-pdf-with-text-and-images.html");
    const downloadpro = page.waitForEvent('download');
    await page.click("//button[@id = 'btn-size-100kb']");
    const download  = await downloadpro;
    await download.saveAs(`./downloads/${download.suggestedFilename()}`);
})