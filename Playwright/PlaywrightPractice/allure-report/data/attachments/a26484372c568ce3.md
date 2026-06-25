# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Testcase3.test.ts >> Invalid Login
- Location: tests\Testcase3.test.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('//h2[normalize-space()=\'Login to your account\']')
Expected substring: "Login to your account"
Received string:    ""

```

# Test source

```ts
  1  | import { test,expect} from '@playwright/test';
  2  | 
  3  | test("Invalid Login",async({page})=>{
  4  |     await page.goto("https://automationexercise.com/")
  5  |     await page.click("//a[normalize-space()='Signup / Login']");
> 6  |     await expect(page.locator("//h2[normalize-space()='Login to your account']")).toContainText("Login to your account")
     |                                                                                   ^ Error: expect(locator).toContainText(expected) failed
  7  |     await page.fill("//input[@data-qa='login-email']","messi1234567890@gmail.com")
  8  |     await page.fill("//input[@placeholder='Password']","messi")
  9  |     await page.click("//button[normalize-space()='Login']")
  10 |     await expect(page.locator("//p[normalize-space()='Your email or password is incorrect!']")).toContainText("incorrect")
  11 | });
```