# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TestSkipPractice.test.ts >> Invalid Login Test >> Login1 @smoke
- Location: tests\TestSkipPractice.test.ts:55:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://demoblaze.com/
Call log:
  - navigating to "https://demoblaze.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Press space to play" [level=1] [ref=e6]
    - generic [ref=e7]:
      - paragraph [ref=e8]: "Try:"
      - list [ref=e9]:
        - listitem [ref=e10]: Checking the network cables, modem, and router
        - listitem [ref=e11]: Reconnecting to Wi-Fi
        - listitem [ref=e12]:
          - link "Running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e14]: ERR_INTERNET_DISCONNECTED
  - application "Dino game, press space to play" [ref=e16]
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | 
  3  | 
  4  | //Grouped vald login as a one group 
  5  | test.describe("Valid Login Test", ()=>{
  6  | //Used Only in this test to run that specific test
  7  | test("Login1 @smoke", async({page}) => {
  8  | 
  9  |     await page.goto("https://demoblaze.com/")
  10 |     await page.locator("#login2").click()
  11 |     await page.fill("#loginusername","DarshanRaj")
  12 |     await page.fill("#loginpassword","dharshan123")
  13 |     await page.locator("//button[text()='Log in']").click()
  14 | 
  15 |     await expect(page.locator("#logout2")).toBeVisible()
  16 |     await expect(page.locator("#nameofuser")).toHaveText("Welcome DarshanRaj")
  17 | })
  18 | 
  19 | //skipped the testusing test.skip
  20 | test.skip("Login2@regression", async({page}) => {
  21 | 
  22 |     await test.skip(true,"The test is skipped for learning purpose")
  23 |     await page.goto("https://demoblaze.com/")
  24 |     await page.locator("#login2").click()
  25 |     await page.fill("#loginusername","DarshanRaj")
  26 |     await page.fill("#loginpassword","dharshan123")
  27 |     await page.locator("//button[text()='Log in']")
  28 | 
  29 |     await expect(page.locator("#logout2")).toBeVisible()
  30 |     await expect.soft(page.locator("#nameofuser")).toHaveText("Welcome DarshanRaj")
  31 | })
  32 | 
  33 | 
  34 | //Using multiple tags
  35 | test("Login3", {
  36 |     tag:["@smoke","@regression"]
  37 | }, async({page}) => {
  38 | 
  39 |     await page.goto("https://demoblaze.com/")
  40 |     await page.locator("#login2").click()
  41 |     await page.fill("#loginusername","DarshanRaj")
  42 |     await page.fill("#loginpassword","dharshan123")
  43 |     await page.locator("//button[text()='Log in']").click()
  44 | 
  45 |     await expect.soft(page.locator("#logout2")).toBeVisible()
  46 |     await expect(page.locator("#nameofuser")).toHaveText("Welcome DarshanRaj")
  47 | })
  48 | 
  49 | })
  50 | 
  51 | 
  52 | //Used only in the group
  53 | test.describe("Invalid Login Test", ()=>{
  54 | //Used Only in this test to run that specific test
  55 | test("Login1 @smoke", async({page}) => {
  56 | 
> 57 |     await page.goto("https://demoblaze.com/")
     |                ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://demoblaze.com/
  58 |     await page.locator("#login2").click()
  59 |     await page.fill("#loginusername","DarshanRaj")
  60 |     await page.fill("#loginpassword","dharshan")
  61 |     
  62 | 
  63 |     page.on("dialog", async alert => {
  64 |         console.log("Message:",alert.message())
  65 |         await alert.accept()
  66 |     })
  67 | 
  68 |     await page.locator("//button[text()='Log in']").click()
  69 | })
  70 | })
```