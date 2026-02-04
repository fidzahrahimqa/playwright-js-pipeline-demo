import { test, expect } from './baseTest.js';
import { CartPage } from '../pages/cart.page.js';

test.describe('@regression Standard User – SauceDemo', () => {

  test('@smoke TC_SU_01 - Inventory page loads after login', async ({ page }) => {
    await expect(page).toHaveURL(/inventory/);
  });

  test('@smoke TC_SU_03 - View product list', async ({ inventoryPage }) => {
    await expect(inventoryPage.page.locator('.inventory_list')).toBeVisible();
  });

  test('TC_SU_04 - Add product to cart', async ({ inventoryPage }) => {
    await inventoryPage.addFirstItemToCart();

    await expect(
      inventoryPage.page.locator('.shopping_cart_badge')
    ).toHaveText('1');
  });

  test('TC_SU_05 - Remove product from cart', async ({ inventoryPage, page }) => {
    const cart = new CartPage(page);

    await inventoryPage.addFirstItemToCart();
    await inventoryPage.goToCart();
    await cart.removeItem();

    expect(await cart.isCartEmpty()).toBeTruthy();
  });

});
