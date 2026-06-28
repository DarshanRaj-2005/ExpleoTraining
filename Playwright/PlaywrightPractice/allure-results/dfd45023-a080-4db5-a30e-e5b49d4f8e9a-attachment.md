# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PracticeTest.test.ts >> Practuce Test
- Location: tests\PracticeTest.test.ts:3:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('//input[@id=\'user-message\']')
Expected: "Darshan"
Received: ""
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('//input[@id=\'user-message\']')
    13 × locator resolved to <input type="text" id="user-message" placeholder="Please enter your Message" class="border border-gray-550 w-full h-35 rounded px-10"/>
       - unexpected value ""

```

```yaml
- textbox "Please enter your Message"
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test('Practuce Test', async({page}) => {
  4  | 
  5  |     await page.goto('https://www.testmuai.com/selenium-playground/simple-form-demo/')
  6  | 
  7  |     let mes = await page.locator('#message')
  8  |     console.log("Message Before Adding: ",mes.textContent())
  9  | 
  10 |     let inputBox = await page.locator("//input[@id='user-message']").getAttribute('placeholder')
  11 |     console.log("Placeholder text:",inputBox)
  12 | 
  13 |     await page.locator("//input[@id='user-message']").fill('Darshan')
> 14 |     await expect(page.locator("//input[@id='user-message']")).toHaveText("Darshan")
     |                                                               ^ Error: expect(locator).toHaveText(expected) failed
  15 |     await page.getByRole('button',{name:'Get Checked Value'}).dblclick()
  16 | 
  17 |     // await expect(page.locator("#message")).toHaveText("Darshan")
  18 |     // let mes2 = await page.locator('mes2').textContent()
  19 |     // console.log("The New Message:",mes2)
  20 | })
```