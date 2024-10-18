class ShoppingCartPage {
    // Search for an item
    async searchForItem(item) {
      const searchBox = await $('#q'); // Update selector based on actual website
      await searchBox.setValue(item);
      const searchButton = await $('button[type="submit"]'); // Update selector based on actual website
      await searchButton.click();
    }
  
    // Select the first item from search results
    async selectFirstItem() {
      const firstItem = await $('div[data-qa-locator="product-item"] a.product-card'); // Update selector based on actual website
      await firstItem.click();
    }
  
    // Add the item to the cart
    async addToCart() {
      const addToCartButton = await $('span.pdp-mod-sbutton.default.daraz:has(span.pdp-mod-sbutton-inner:contains("Add to Cart"))'); // Update selector
      await addToCartButton.click();
    }
  
    // Check if the item is in the cart
    async isItemInCart() {
      const cartItem = await $('span.item-title-text]'); // Update selector
      return cartItem.isDisplayed();
    }
  
    // Update the item quantity in the cart
    async updateItemQuantity(quantity) {
      const quantityInput = await $('input.i-stepper-input'); // Update selector
      await quantityInput.setValue(quantity);
    }
  
    // Get the cart quantity
    async getCartQuantity() {
      const quantity = await $('input.i-stepper-input').getValue(); // Update selector
      return parseInt(quantity, 10);
    }
  
    // Remove the item from the cart
    async removeItemFromCart() {
      const removeButton = await $('.i-swipecell-action'); // Update selector
      await removeButton.click();
    }
  
    // Check if the cart is empty
    async isCartEmpty() {
      const emptyMessage = await $('p.empty-title'); // Update selector
      return emptyMessage.isDisplayed();
    }
  
    // Proceed to checkout
    async proceedToCheckout() {
      const checkoutButton = await $('.orderTotal-col3 .orderTotal-button'); // Update selector
      await checkoutButton.click();
    }
  
    // Check if at login or payment page
    async isAtLoginPage() {
      const loginPageElement = await $('.login-title h3'); // Update selector
      return loginPageElement.isDisplayed();
    }
  }
  
  module.exports = new ShoppingCartPage();