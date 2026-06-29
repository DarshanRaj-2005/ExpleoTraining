import { test,expect } from '@playwright/test';


const testData = [{keyword : "Selenium", expected: "Selenium"}
    ,{keyword : "Playwright", expected: "Playwright"}
]

test.describe("Valid Search", ()=> {

    testData.forEach((data)=>{
        test(`Search ${data.keyword}`, async({page}) =>{
            await page.goto("https://www.google.com/")
            await page.locator("#APjFqb").fill(data.keyword)
            await page.locator("#APjFqb").press("Enter")
            let res = await page.url()
            expect(res).toContain(data.expected)
            console.log("Title:",await page.url())
        })
    })
})