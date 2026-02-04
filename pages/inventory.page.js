export class InventoryPage {
  constructor(page) {
    this.page = page;

    this.inventoryList = '.inventory_list';
    this.firstAddToCartBtn = '.inventory_item button';
    this.cartIcon = '.shopping_cart_link';
    this.cartBadge = '.shopping_cart_badge';

    // Logout selectors
    this.menuButton = '#react-burger-menu-btn';
    this.logoutLink = '#logout_sidebar_link';
  }

  async isLoaded() {
    await this.page.waitForSelector(this.inventoryList);
  }

  async addFirstItemToCart() {
    await this.page.locator(this.firstAddToCartBtn).first().click();
  }

  async getCartCount() {
    return await this.page.textContent(this.cartBadge);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }

  async logout() {
    await this.page.click(this.menuButton);
    await this.page.click(this.logoutLink);

    // Confirm logout succeeded
    await this.page.waitForSelector('#login-button');
  }
}
