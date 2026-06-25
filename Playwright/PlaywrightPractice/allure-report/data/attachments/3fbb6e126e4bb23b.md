# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Testcase6.test.ts >> Contact Us Form
- Location: tests\Testcase6.test.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('//*[@id="contact-page"]/div[2]/div[1]/div/div[2]')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//*[@id="contact-page"]/div[2]/div[1]/div/div[2]')
    11 × locator resolved to <div class="status alert alert-success"></div>
       - unexpected value "hidden"

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Contact Us" [level=2]:
  - text: Contact
  - strong: Us
- text: "Note: Below contact form is for testing purpose."
- heading "Get In Touch" [level=2]
- textbox "Name"
- textbox "Email"
- textbox "Subject"
- textbox "Your Message Here"
- button "Choose File"
- button "Submit"
- heading "Feedback For Us" [level=2]
- paragraph: We really appreciate your response to our website.
- paragraph:
  - text: Kindly share your feedback with us at
  - link "feedback@automationexercise.com":
    - /url: mailto:feedback@automationexercise.com
  - text: .
- paragraph: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
- paragraph: Thank you
- insertion:
  - iframe
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test('Contact Us Form',async({page}) => {
  4  |     await page.goto("http://automationexercise.com")
  5  |     await expect(page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[1]/a')).toContainText("Home")
  6  |     await page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[8]/a').click()
  7  |     await expect(page.locator('//*[@id="contact-page"]/div[2]/div[1]/div/h2')).toBeVisible()
  8  |     await page.locator('//*[@id="contact-us-form"]/div[1]/input').fill("darshan")
  9  |     await page.locator('//*[@id="contact-us-form"]/div[2]/input').fill("messi1234567890@gmail.com")
  10 |     await page.locator('//*[@id="contact-us-form"]/div[3]/input').fill("Hello")
  11 |     await page.locator('#message').fill("This is sample testing")
  12 |     page.on('dialog',async dialog =>{
  13 |         await dialog.accept()
  14 |     })
  15 |     await page.locator('//*[@id="contact-us-form"]/div[6]/input').click()
> 16 |     await expect(page.locator('//*[@id="contact-page"]/div[2]/div[1]/div/div[2]')).toBeVisible()
     |                                                                                    ^ Error: expect(locator).toBeVisible() failed
  17 |     await page.locator('//*[@id="form-section"]/a').click()
  18 |     await expect(page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[1]/a')).toContainText("Home")
  19 | })
```