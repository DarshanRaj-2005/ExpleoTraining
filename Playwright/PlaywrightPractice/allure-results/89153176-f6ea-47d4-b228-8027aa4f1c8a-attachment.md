# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckBoxAndFileUpload.test.ts >> Upload file
- Location: tests\CheckBoxAndFileUpload.test.ts:3:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 1
+ Received  + 3

- screenshot.png
+
+     screenshot.png
+   
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "File Uploaded!" [level=3] [ref=e8]
      - generic [ref=e9]: screenshot.png
  - generic [ref=e11]:
    - separator [ref=e12]
    - generic [ref=e13]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e14] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | 
  3  | test("Upload file", async({page}) => {
  4  |     await page.goto("https://the-internet.herokuapp.com/upload")
  5  |     await page.setInputFiles("#file-upload","TestData/screenshot.png")
  6  |     await page.locator("#file-submit").click()
  7  |     await expect(page.locator("//*[@id='content']/div/h3")).toBeVisible()
  8  |     let res = await page.locator("#uploaded-files").textContent()
  9  |     console.log("Result:",res)
> 10 |     await expect(res).toEqual("screenshot.png")
     |                       ^ Error: expect(received).toEqual(expected) // deep equality
  11 | })
```