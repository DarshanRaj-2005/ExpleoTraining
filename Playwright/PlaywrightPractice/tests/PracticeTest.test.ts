import {test,expect} from '@playwright/test'

test('Practuce Test', async({page}) => {

    await page.goto('https://www.testmuai.com/selenium-playground/simple-form-demo/')

    let mes = await page.locator('#message')
    console.log("Message Before Adding: ",mes.textContent())

    let inputBox = await page.locator("//input[@id='user-message']").getAttribute('placeholder')
    console.log("Placeholder text:",inputBox)

    await page.locator("//input[@id='user-message']").fill('Darshan')
    let value = await page.locator("//input[@id='user-message']").inputValue()
    console.log("Input Box Value:",value)
    await expect(page.locator("//input[@id='user-message']")).toHaveValue("Darshan")
    //await page.getByRole('button',{name:'Get Checked Value'}).dblclick()

    // await expect(page.locator("#message")).toHaveText("Darshan")
    // let mes2 = await page.locator('mes2').textContent()
    // console.log("The New Message:",mes2)
})