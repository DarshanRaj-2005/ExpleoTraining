import {test,expect} from '@playwright/test'

test('Contact Us Form',async({page}) => {
    await page.goto("http://automationexercise.com")
    await expect(page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[1]/a')).toContainText("Home")
    await page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[8]/a').click()
    await expect(page.locator('//*[@id="contact-page"]/div[2]/div[1]/div/h2')).toBeVisible()
    await page.locator('//*[@id="contact-us-form"]/div[1]/input').fill("darshan")
    await page.locator('//*[@id="contact-us-form"]/div[2]/input').fill("messi1234567890@gmail.com")
    await page.locator('//*[@id="contact-us-form"]/div[3]/input').fill("Hello")
    await page.locator('#message').fill("This is sample testing")
    page.on('dialog',async dialog =>{
        await dialog.accept()
    })
    await page.locator('//*[@id="contact-us-form"]/div[6]/input').click()
    await expect(page.locator('//*[@id="contact-page"]/div[2]/div[1]/div/div[2]')).toBeVisible()
    await page.locator('//*[@id="form-section"]/a').click()
    await expect(page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[1]/a')).toContainText("Home")
})