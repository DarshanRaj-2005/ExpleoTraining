# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MouseAndKeyboardActions.test.ts >> Drag and Drop
- Location: tests\MouseAndKeyboardActions.test.ts:29:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://omayo.blogspot.com/
Call log:
  - navigating to "https://omayo.blogspot.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.beforeEach(async ({ page }) => {
> 4  |     await page.goto("https://omayo.blogspot.com/");
     |                ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://omayo.blogspot.com/
  5  | });
  6  | 
  7  | test.afterEach(async ({ page }) => {
  8  |     await page.close();
  9  | });
  10 | 
  11 | test("Hover Action", async ({ page }) => {
  12 |     await page.locator("//span[text()='Blogs']").hover();
  13 |     await page.waitForTimeout(3000);
  14 | });
  15 | 
  16 | test("Double Click", async ({ page }) => {
  17 |     await page.locator("button").dblclick();
  18 |     await page.waitForTimeout(3000);
  19 | });
  20 | 
  21 | test("Right Click", async ({ page }) => {
  22 |     await page.locator("button").click({
  23 |         button: "right"
  24 |     });
  25 |     await page.waitForTimeout(3000);
  26 | });
  27 | 
  28 | 
  29 | test("Drag and Drop", async ({ page }) => {
  30 |     const source = page.locator("#draggable");
  31 |     const target = page.locator("#droppable");
  32 |     await source.dragTo(target);
  33 |     await expect(target).toContainText("Dropped!");
  34 |     await page.waitForTimeout(3000);
  35 | });
  36 | 
  37 | 
  38 | test("Keyboard Type", async ({ page }) => {
  39 |     await page.locator("#ta1").click();
  40 |     await page.keyboard.type("Hello Playwright");
  41 |     await expect(page.locator("#ta1")).toHaveValue("Hello Playwright");
  42 |     await page.waitForTimeout(3000);
  43 | });
  44 | 
  45 | 
  46 | test("Press Enter", async ({ page }) => {
  47 |     await page.locator("#ta1").click();
  48 |     await page.keyboard.type("Playwright");
  49 |     await page.keyboard.press("Enter");
  50 |     await page.keyboard.type("Automation");
  51 |     await expect(page.locator("#ta1")).toHaveValue("Playwright Automation");
  52 |     await page.waitForTimeout(3000);
  53 | });
```