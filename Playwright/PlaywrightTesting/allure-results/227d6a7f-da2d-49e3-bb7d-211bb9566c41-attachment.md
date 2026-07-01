# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoBLoginUsingContext.test.ts >> Login Test Demo
- Location: tests\DemoBLoginUsingContext.test.ts:3:5

# Error details

```
ReferenceError: headless is not defined
```

# Test source

```ts
  1  | import {test,expect, chromium} from '@playwright/test'
  2  | 
  3  | test("Login Test Demo", async() => {
  4  |     const browser = await chromium.launch({
> 5  |         headless
     |         ^ ReferenceError: headless is not defined
  6  |     })
  7  |     const context = await browser.newContext()
  8  |     const page = await context.newPage()
  9  |     
  10 |     await page.goto("https://demoblaze.com/")
  11 | 
  12 |     await page.click('#login2')
  13 |     await page.fill('#loginusername',"DarshanRaj")
  14 |     await page.fill('#loginpassword',"dharshan123")
  15 |     await page.locator("//button[text()='Log in']").click()
  16 |     await expect(page.locator("#nameofuser")).toBeVisible();
  17 | 
  18 |     await page.waitForTimeout(5000)
  19 | 
  20 |     const page1 = await context.newPage()
  21 |     page1.goto("https://demoblaze.com/cart.html")
  22 | 
  23 |     page1.waitForTimeout(5000)
  24 | })
```