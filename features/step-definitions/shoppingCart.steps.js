const { Given, When, Then } = require('@cucumber/cucumber');
const shoppingCartPage = require('../page-objects/shoppingCartPage');

// Step: I am on the Daraz home page
Given('I am on the Daraz home page', async () => {
  await browser.url('https://www.daraz.pk/');
});

// Step: I search for a {string}
When('I search for a {string}', async (item) => {
  await shoppingCartPage.searchForItem(item);
});

// Step: I select a smartphone from the search results
When('I select a smartphone from the search results', async () => {
  await shoppingCartPage.selectFirstItem();
});

// Step: I add the smartphone to the shopping cart
When('I add the smartphone to the shopping cart', async () => {
  await shoppingCartPage.addToCart();
});

// Step: the smartphone should be visible in the shopping cart
Then('the smartphone should be visible in the shopping cart', async () => {
  const isItemInCart = await shoppingCartPage.isItemInCart();
  expect(isItemInCart).toBe(true); // Assertion to check if the item is in the cart
});

// Step: I update the quantity of the smartphone to {int}
When('I update the quantity of the smartphone to {int}', async (quantity) => {
  await shoppingCartPage.updateItemQuantity(quantity);
});

// Step: the cart should show {int} smartphones with the updated price
Then('the cart should show {int} smartphones with the updated price', async (quantity) => {
  const cartQuantity = await shoppingCartPage.getCartQuantity();
  expect(cartQuantity).toEqual(quantity); // Assert that the cart quantity matches the expected value

  // Optional: Add verification for the updated price
  const cartPrice = await shoppingCartPage.getUpdatedPrice();
  // Here, replace 'expectedPrice' with the logic that calculates the expected price
  const expectedPrice = 'expected_price_logic';
  expect(cartPrice).toEqual(expectedPrice);
});

// Step: I remove the smartphone from the cart
When('I remove the smartphone from the cart', async () => {
  await shoppingCartPage.removeItemFromCart();
});

// Step: the cart should be empty
Then('the cart should be empty', async () => {
  const isCartEmpty = await shoppingCartPage.isCartEmpty();
  expect(isCartEmpty).toBe(true); // Check that the cart is empty
});

// Step: I click on the checkout button
When('I click on the checkout button', async () => {
  await shoppingCartPage.proceedToCheckout();
});

// Step: I should be redirected to the login or payment page
Then('I should be redirected to the login or payment page', async () => {
  const isAtLoginPage = await shoppingCartPage.isAtLoginPage();
  expect(isAtLoginPage).toBe(true); // Verify redirection to the login or payment page
});