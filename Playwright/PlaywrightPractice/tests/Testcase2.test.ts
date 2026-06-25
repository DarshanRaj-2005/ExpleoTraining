import { test, expect } from '@playwright/test';

test('Valid Login', async ({ page }) => {
  await page.goto('https://automationexercise.com/')
  await page.getByRole('link', { name: 'Signup / Login'}).click()
  await page.locator('//*[@id="form"]/div/div/div[1]/div/form/input[2]').fill("messi1234567890@gmail.com")
  await page.locator('//*[@id="form"]/div/div/div[1]/div/form/input[3]').fill("messi10")
  await page.getByRole('button',{name:'Login'}).click()
  await expect(page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]')).toContainText("Logout")
})