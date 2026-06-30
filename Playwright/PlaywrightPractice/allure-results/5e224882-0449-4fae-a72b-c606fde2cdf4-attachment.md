# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemBlzLoginUsingJson.test.ts >> Invalid Login
- Location: tests\DemBlzLoginUsingJson.test.ts:6:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#login2')

```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | import LoginData from "../TestData/LoginData.json"
  3  | 
  4  | 
  5  | LoginData.forEach((data) => {
  6  |     test(`${data.testName}`, async({page}) => {
> 7  |         await page.locator("#login2").click()
     |                                       ^ Error: locator.click: Target page, context or browser has been closed
  8  |         await page.locator("#loginusername").fill(data.username)
  9  |         await page.locator("#loginpassword").fill(data.password)
  10 | 
  11 |         page.on("dialog", async dialog => {
  12 |             let text = dialog.message()
  13 |             await expect(text).toBe("Wrong password.")
  14 |             await dialog.accept()
  15 |         })
  16 |         await page.locator("//button[text()='Log in']").click()
  17 | 
  18 |         if(data.expectResult === "Success") {
  19 |             await page.locator("#nameofuser").isVisible()
  20 |             await expect(page.locator("#nameofuser")).toHaveText("Welcome DarshanRaj",{timeout:5000})
  21 |         }
  22 |     })
  23 | })
```