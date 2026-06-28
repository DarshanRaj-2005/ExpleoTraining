# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PracticeTest2.test.ts >> Practice Test2
- Location: tests\PracticeTest2.test.ts:3:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('//p[@id=\'addmessage\']')
Expected substring: "40"
Received string:    "Entered value is not a number"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('//p[@id=\'addmessage\']')
    13 × locator resolved to <p class="mt-20" id="addmessage">Entered value is not a number</p>
       - unexpected value "Entered value is not a number"

```

```yaml
- paragraph: Entered value is not a number
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test('Practice Test2', async({page}) => {
  4  | 
  5  |     await page.goto('https://www.testmuai.com/selenium-playground/simple-form-demo/')
  6  | 
  7  |     await page.locator('#sum1').scrollIntoViewIfNeeded()
  8  |     await page.locator("#sum1").fill('20')
  9  |     await expect(page.locator("#sum1")).toHaveValue('20')
  10 |     await page.locator("#sum2").fill('20')
  11 |     await expect(page.locator("#sum2")).toHaveValue('20')
  12 |     await page.locator("//form[@id='gettotal']/button").hover()
  13 |     await page.locator("//form[@id='gettotal']/button").click()
> 14 |     await expect(page.locator("//p[@id='addmessage']")).toContainText('40')
     |                                                         ^ Error: expect(locator).toContainText(expected) failed
  15 | })
```