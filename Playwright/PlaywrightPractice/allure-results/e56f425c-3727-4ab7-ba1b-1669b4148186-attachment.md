# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TestSkipPractice.test.ts >> Valid Login Test >> Login1 @smoke
- Location: tests\TestSkipPractice.test.ts:7:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('#logout2')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#logout2')
    13 × locator resolved to <a href="#" id="logout2" class="nav-link" onclick="logOut()">Log out</a>
       - unexpected value "hidden"

```

```yaml
- dialog "Log in":
  - document:
    - heading "Log in" [level=5]
    - button "Close"
    - text: "Username:"
    - textbox: DarshanRaj
    - text: "Password:"
    - textbox: dharshan123
    - button "Close"
    - button "Log in"
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "First slide"
  - img "Second slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
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
> 15 |     await expect(page.locator("#logout2")).toBeVisible()
     |                                            ^ Error: expect(locator).toBeVisible() failed
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
  57 |     await page.goto("https://demoblaze.com/")
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