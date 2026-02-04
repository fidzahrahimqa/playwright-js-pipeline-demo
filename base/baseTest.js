import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';
import { InventoryPage } from '../pages/inventory.page.js';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  }
});

export { expect };

test.afterEach(async ({ page }) => {
  const inventory = new InventoryPage(page);
  if (await page.locator('#react-burger-menu-btn').isVisible().catch(() => false)) {
    await inventory.logout();
  }
});
