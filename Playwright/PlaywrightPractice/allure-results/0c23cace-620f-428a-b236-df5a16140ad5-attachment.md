# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ConfirmAlert.test.ts >> confirm alert dismiss
- Location: tests\ConfirmAlert.test.ts:13:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Click Me' }).nth(2)

```

# Test source

```ts
  1  | import {test} from "@playwright/test";
  2  | 
  3  | test('confirm alert accept', async ({ page }) => {
  4  |     await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
  5  |     page.on("dialog", async alert =>{
  6  |         const text =alert.message();
  7  |         console.log(text);
  8  |         await alert.accept();
  9  |     })
  10 |     await page.getByRole("button", { name: "Click Me" }).nth(2).click();
  11 | });
  12 | 
  13 | test('confirm alert dismiss', async({page})=> {
  14 |     page.on("dialog", async alert =>{
  15 |         const text =alert.message();
  16 |         console.log(text);
  17 |         await alert.dismiss();
  18 |     })
> 19 |     await page.getByRole("button", { name: "Click Me" }).nth(2).click();
     |                                                                 ^ Error: locator.click: Test timeout of 30000ms exceeded.
  20 | })
```