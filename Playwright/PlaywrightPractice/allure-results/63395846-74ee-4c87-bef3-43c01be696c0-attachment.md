# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Testcase8.test.ts >> Testcase 8 - Navigating to products page, Displaying 1st product 
- Location: tests\Testcase8.test.ts:3:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Automation Exercise"
Received: ""
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × unexpected value ""

```

# Test source

```ts
  1  | import { test,expect} from '@playwright/test';
  2  | 
  3  | test("Testcase 8 - Navigating to products page, Displaying 1st product ",async({page})=>{
  4  |     await page.goto("https://automationexercise.com/")
> 5  |     await expect(page).toHaveTitle("Automation Exercise");
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  6  |     await page.click("//a[@href='/products']")
  7  |     await expect(page).toHaveURL("https://automationexercise.com/products");
  8  |     await page.click("//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]")
  9  |     await expect(page.locator("//h2[normalize-space()='Blue Top']")).toHaveText("Blue Top")
  10 |     await expect(page.locator("//p[normalize-space()='Category: Women > Tops']")).toHaveText("Category: Women > Tops")
  11 |     await expect(page.locator("//b[normalize-space()='Condition:']")).toHaveText("Condition:")
  12 |     await expect(page.locator("//b[normalize-space()='Brand:']")).toHaveText("Brand:")
  13 | });
```