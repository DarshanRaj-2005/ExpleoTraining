import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  //await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('DarshanRaj');
  //await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('dharshan123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Welcome DarshanRaj' })).toBeVisible();
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  //await page.getByRole('textbox', { name: 'Total: 360 Name:' }).click();
  await page.getByRole('textbox', { name: 'Total: 360 Name:' }).fill('darshan');
  //await page.getByRole('textbox', { name: 'Country:' }).click();
  await page.getByRole('textbox', { name: 'Country:' }).fill('India');
  //await page.getByRole('textbox', { name: 'City:' }).click();
  await page.getByRole('textbox', { name: 'City:' }).fill('Salem');
  //await page.getByRole('textbox', { name: 'Credit card:' }).click();
  await page.getByRole('textbox', { name: 'Credit card:' }).fill('1234 1234 12');
  //await page.getByRole('textbox', { name: 'Month:' }).click();
  await page.getByRole('textbox', { name: 'Month:' }).fill('June');
  //await page.getByRole('textbox', { name: 'Year:' }).click();
  await page.getByRole('textbox', { name: 'Year:' }).fill('2026');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
  await page.getByRole('button', { name: 'OK' }).click();
});