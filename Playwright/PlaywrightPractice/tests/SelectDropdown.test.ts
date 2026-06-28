import {test,expect} from "@playwright/test"

test('Select Dropdown', async({page}) => {
    await page.goto('https://www.testmuai.com/selenium-playground/select-dropdown-demo/')
    await page.selectOption('#select-demo',{
        value: "Sunday",
        //index: 5
    })
    await page.waitForTimeout(5000)
    await page.selectOption('#multi-select', [
        {index : 5},
        {value : "New Jersey"}
    ])
})