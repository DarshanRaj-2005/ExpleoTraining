# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MouseAndKeyboardActions.test.ts >> Drag and Drop
- Location: tests\MouseAndKeyboardActions.test.ts:35:5

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
  18 |     await page.goto("https://demoqa.com/buttons");
  19 |     await page.locator("#doubleClickBtn").dblclick();
  20 |     await expect(page.locator("#doubleClickMessage"))
  21 |         .toHaveText("You have done a double click");
  22 |     await page.waitForTimeout(3000);
  23 | });
  24 | 
  25 | test("Right Click", async ({ page }) => {
  26 |     await page.goto("https://demoqa.com/buttons");
  27 |     await page.locator("#rightClickBtn").click({
  28 |         button: "right"
  29 |     });
  30 |     await expect(page.locator("#rightClickMessage"))
  31 |         .toHaveText("You have done a right click");
  32 |     await page.waitForTimeout(3000);
  33 | });
  34 | 
  35 | test("Drag and Drop", async ({ page }) => {
  36 |     await page.goto("https://demoqa.com/droppable");
  37 |     const source = page.locator("#draggable");
  38 |     const target = page.locator("#droppable");
> 39 |     await source.dragTo(target);
     |                  ^ Error: locator.dragTo: Error: strict mode violation: locator('#droppable') resolved to 2 elements:
  40 |     await expect(target).toContainText("Dropped!");
  41 |     await page.waitForTimeout(3000);
  42 | });
  43 | 
  44 | test("Keyboard Type", async ({ page }) => {
  45 |     await page.goto("https://demoqa.com/text-box");
  46 |     await page.locator("#userName").click();
  47 |     await page.keyboard.type("Darshan");
  48 |     await expect(page.locator("#userName"))
  49 |         .toHaveValue("Darshan");
  50 |     await page.waitForTimeout(3000);
  51 | });
  52 | 
  53 | test("Press Enter", async ({ page }) => {
  54 |     await page.goto("https://demoqa.com/text-box");
  55 |     await page.locator("#userName").click();
  56 |     await page.keyboard.type("Darshan");
  57 |     await page.keyboard.press("Enter");
  58 |     await expect(page.locator("#userName"))
  59 |         .toHaveValue("Darshan");
  60 |     await page.waitForTimeout(3000);
  61 | });
```