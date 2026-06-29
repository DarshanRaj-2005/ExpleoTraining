# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TestSkipPractice.test.ts >> Login1
- Location: tests\TestSkipPractice.test.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#login2')

```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | 
  3  | test("Login1", async({page}) => {
  4  | 
> 5  |     await page.locator("#login2").click()
     |                                   ^ Error: locator.click: Target page, context or browser has been closed
  6  |     await page.fill("#loginusername","DarshanRaj")
  7  |     await page.fill("#loginpassword","dharshan123")
  8  |     await page.locator("//button[text()='Log in']")
  9  | 
  10 |     await expect.soft(page.locator("#logout2")).toBeVisible()
  11 |     await expect(page.locator("#nameofuser")).toHaveText("Welcome DarshanRaj")
  12 | })
  13 | 
  14 | 
  15 | test.skip("Login2", async({page}) => {
  16 | 
  17 |     await test.skip(true,"The test is skipped for learning purpose")
  18 |     await page.locator("#login2").click()
  19 |     await page.fill("#loginusername","DarshanRaj")
  20 |     await page.fill("#loginpassword","dharshan123")
  21 |     await page.locator("//button[text()='Log in']")
  22 | 
  23 |     await expect(page.locator("#logout2")).toBeVisible()
  24 |     await expect.soft(page.locator("#nameofuser")).toHaveText("Welcome DarshanRaj")
  25 | })
  26 | 
  27 | test("Login3", async({page}) => {
  28 | 
  29 |     await page.locator("#login2").click()
  30 |     await page.fill("#loginusername","DarshanRaj")
  31 |     await page.fill("#loginpassword","dharshan123")
  32 |     await page.locator("//button[text()='Log in']")
  33 | 
  34 |     await expect.soft(page.locator("#logout2")).toBeVisible()
  35 |     await expect(page.locator("#nameofuser")).toHaveText("Welcome DarshanRaj")
  36 | })
```