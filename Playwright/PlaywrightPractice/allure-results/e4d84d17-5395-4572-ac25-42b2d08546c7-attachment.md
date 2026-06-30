# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MouseAndKeyboardActions.test.ts >> Drag and Drop
- Location: tests\MouseAndKeyboardActions.test.ts:33:5

# Error details

```
Error: locator.dragTo: Error: strict mode violation: locator('#droppable') resolved to 2 elements:
    1) <div id="droppable" class="drop-box">…</div> aka getByRole('tabpanel', { name: 'Simple' }).locator('#droppable')
    2) <div id="droppable" class="drop-box">…</div> aka getByLabel('Revert Draggable').locator('#droppable')

Call log:
  - waiting for locator('#draggable')
    - locator resolved to <div id="draggable" class="drag-box mt-4">Drag Me</div>
  - attempting move and down action
    - waiting for element to be visible and stable
    - element is visible and stable
    - scrolling into view if needed
    - done scrolling
    - performing move and down action
    - move and down action done
    - waiting for scheduled navigations to finish
    - navigations have finished
  - waiting for locator('#droppable')

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.beforeEach(async ({ page }) => {
  4  |     await page.goto("https://demoqa.com/");
  5  | });
  6  | 
  7  | test.afterEach(async ({ page }) => {
  8  |     await page.close();
  9  | });
  10 | 
  11 | // test("Hover Action", async ({ page }) => {
  12 | //     await page.goto("https://omayo.blogspot.com/");
  13 | //     await page.locator("//span[text()='Blogs']").hover();
  14 | //     await page.waitForTimeout(3000);
  15 | // });
  16 | 
  17 | test("Double Click", async ({ page }) => {
  18 |     test.setTimeout(60000);
  19 |     await page.goto("https://demoqa.com/buttons");
  20 |     await page.locator("#doubleClickBtn").dblclick();
  21 |     await expect(page.locator("#doubleClickMessage")).toHaveText("You have done a double click");
  22 |     await page.waitForTimeout(3000);
  23 | });
  24 | 
  25 | test("Right Click", async ({ page }) => {
  26 |     page.setDefaultTimeout(5000);
  27 |     await page.goto("https://demoqa.com/buttons");
  28 |     await page.locator("#rightClickBtn").click({button: "right"});
  29 |     await expect(page.locator("#rightClickMessage")).toHaveText("You have done a right click");
  30 |     await page.waitForTimeout(3000);
  31 | });
  32 | 
  33 | test("Drag and Drop", async ({ page }) => {
  34 |     await page.goto("https://demoqa.com/droppable");
  35 |     const source = page.locator("#draggable");
  36 |     const target = page.locator("#droppable");
> 37 |     await source.dragTo(target);
     |                  ^ Error: locator.dragTo: Error: strict mode violation: locator('#droppable') resolved to 2 elements:
  38 |     await expect(target).toContainText("Dropped!");
  39 |     await page.waitForTimeout(3000);
  40 | });
  41 | 
  42 | test("Keyboard Type", async ({ page }) => {
  43 |     await page.goto("https://demoqa.com/text-box");
  44 |     await page.locator("#userName").click();
  45 |     await page.keyboard.type("Darshan");
  46 |     await expect(page.locator("#userName")).toHaveValue("Darshan");
  47 |     await page.waitForTimeout(3000);
  48 | });
  49 | 
  50 | test("Press Enter", async ({ page }) => {
  51 |     await page.goto("https://demoqa.com/text-box");
  52 |     await page.locator("#userName").click();
  53 |     await page.keyboard.type("Darshan");
  54 |     await page.keyboard.press("Enter");
  55 |     await expect(page.locator("#userName")).toHaveValue("Darshan",{timeout: 7000});
  56 |     await page.waitForTimeout(3000);
  57 | });
```