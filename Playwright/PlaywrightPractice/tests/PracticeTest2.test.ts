import {test,expect} from '@playwright/test'

test('Practice Test2', async({page}) => {

    await page.goto('https://www.testmuai.com/selenium-playground/simple-form-demo/',{waitUntil:"networkidle"})

    await page.locator('#sum1').scrollIntoViewIfNeeded()
    await page.locator('#sum1').fill('')
    await page.locator("#sum1").fill('20')
    await expect(page.locator("#sum1")).toHaveValue('20')
    await page.locator("#sum2").fill('20')
    await expect(page.locator("#sum2")).toHaveValue('20')
    await page.locator("//form[@id='gettotal']/button").hover()
    await page.locator("//form[@id='gettotal']/button").click()
    let expected = "40"
    await expect(page.locator("//p[@id='addmessage']")).toHaveText("40")
    const text = await page.locator("#addmessage").textContent()
    expect(text).toContain("40");
})