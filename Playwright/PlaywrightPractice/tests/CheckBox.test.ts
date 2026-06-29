import {test} from '@playwright/test';

test('Action Test',async({page})=>{
    await page.goto("https://omayo.blogspot.com/");

    await page.locator('#radio2').check();
    await page.locator('#checkbox1').check();
    await page.locator('#checkbox2').check();
    await page.locator('#checkbox2').uncheck();
    await page.selectOption('#multiselect1',[ { value: 'volvox' },{ value: 'swiftx' },{ value: 'audix' }]);
    await page.selectOption('#drop1', { value: 'def' });

});