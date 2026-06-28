import {test,expect} from "@playwright/test"

test('Select Dropdown', async({page}) => {

    await page.goto("https://letcode.in/frame")
    let tot = await page.frames()
    console.log("Total frames:",tot.length)

    let myFrame = page.frame("firstFr")

    await myFrame?.fill("input[name = 'fname']","Darshan")
    await myFrame?.fill("input[name ='lname']","raj")

    let frame = page.frameLocator("#firstFr")

    await expect(frame.locator("//*[@id='root']/div/div/div[1]/p")).toContainText("Darshan")

    let innerframe = page.frameLocator("iframe[src='/innerframe']")
    await innerframe.locator("//*[@id='root']/div/div/div/input").fill("darshan@gmail.com")
    await expect(innerframe.locator("//*[@id='root']/div/div/div/input")).toHaveValue("darshan@gmail.com")
})