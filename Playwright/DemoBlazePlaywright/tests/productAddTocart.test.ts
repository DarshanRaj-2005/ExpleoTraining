import { test, expect } from '../fixtures/baseFixtures';

test.describe('Add Product To Cart', () => {
    test('Add nokia lumia to cart', async ({homePage,productPage,page}) => {
        await homePage.navigateToDemoBlaze();
        await homePage.opennokialumia();
        page.once('dialog', async dialog => {
            expect(dialog.message()).toBe('Product added');
            await dialog.accept();
        });
        await productPage.addToCart();
    });
});