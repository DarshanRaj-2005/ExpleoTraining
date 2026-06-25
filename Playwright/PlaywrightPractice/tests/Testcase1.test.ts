import { test, expect } from '@playwright/test';

test('Valid Register', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: 'Signup / Login'}).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Darshan');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('messi12345678@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.locator('#password').fill('messi10');
  await page.locator('#first_name').fill('Darshan');
  await page.locator('#last_name').fill('Raj');
  await page.locator('#address1').fill('10,car Street');
  await page.locator('#state').fill('Tamil nadu');
  await page.locator('#city').fill('Salem');
  await page.locator('#zipcode').fill('123456');
  await page.locator('#mobile_number').fill('1234567890');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(page.getByText('Account Created!')).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
});