export class CartPage {
  constructor(page) {
    this.page = page;
    this.removeBtn = 'button:has-text("Remove")';
    this.cartItems = '.cart_item';
  }

  async removeItem() {
    await this.page.click(this.removeBtn);
  }

  async isCartEmpty() {
    return (await this.page.locator(this.cartItems).count()) === 0;
  }
}
