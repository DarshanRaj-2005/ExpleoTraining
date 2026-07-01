# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoBlazeUsingInspector.test.ts >> test
- Location: tests\DemoBlazeUsingInspector.test.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Welcome DarshanRaj' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Welcome DarshanRaj' })
    - waiting for" https://demoblaze.com/" navigation to finish...
    - navigated to "https://demoblaze.com/"

```

```yaml
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
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://demoblaze.com/');
  5  |   await page.getByRole('link', { name: 'Log in' }).click();
  6  |   //await page.locator('#loginusername').click();
  7  |   await page.locator('#loginusername').fill('DarshanRaj');
  8  |   //await page.locator('#loginpassword').click();
  9  |   await page.locator('#loginpassword').fill('dharshan123');
  10 |   await page.getByRole('button', { name: 'Log in' }).click();
> 11 |   await expect(page.getByRole('link', { name: 'Welcome DarshanRaj' })).toBeVisible();
     |                                                                        ^ Error: expect(locator).toBeVisible() failed
  12 |   await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  13 |   page.once('dialog', dialog => {
  14 |     console.log(`Dialog message: ${dialog.message()}`);
  15 |     dialog.dismiss().catch(() => {});
  16 |   });
  17 |   await page.getByRole('link', { name: 'Add to cart' }).click();
  18 |   await page.getByRole('link', { name: 'Cart', exact: true }).click();
  19 |   await page.getByRole('button', { name: 'Place Order' }).click();
  20 |   //await page.getByRole('textbox', { name: 'Total: 360 Name:' }).click();
  21 |   await page.getByRole('textbox', { name: 'Total: 360 Name:' }).fill('darshan');
  22 |   //await page.getByRole('textbox', { name: 'Country:' }).click();
  23 |   await page.getByRole('textbox', { name: 'Country:' }).fill('India');
  24 |   //await page.getByRole('textbox', { name: 'City:' }).click();
  25 |   await page.getByRole('textbox', { name: 'City:' }).fill('Salem');
  26 |   //await page.getByRole('textbox', { name: 'Credit card:' }).click();
  27 |   await page.getByRole('textbox', { name: 'Credit card:' }).fill('1234 1234 12');
  28 |   //await page.getByRole('textbox', { name: 'Month:' }).click();
  29 |   await page.getByRole('textbox', { name: 'Month:' }).fill('June');
  30 |   //await page.getByRole('textbox', { name: 'Year:' }).click();
  31 |   await page.getByRole('textbox', { name: 'Year:' }).fill('2026');
  32 |   await page.getByRole('button', { name: 'Purchase' }).click();
  33 |   await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
  34 |   await page.getByRole('button', { name: 'OK' }).click();
  35 | });
```