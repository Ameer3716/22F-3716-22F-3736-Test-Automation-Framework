Feature: Shopping Cart Functionality

  Scenario: Add item to cart
    Given I am on the Daraz home page
    When I search for a "smartphone"
    And I select a smartphone from the search results
    And I add the smartphone to the shopping cart
    Then the smartphone should be visible in the shopping cart

  Scenario: Update item quantity in the cart
    Given I have a smartphone in the shopping cart
    When I update the quantity of the smartphone to 2
    Then the cart should show 2 smartphones with the updated price

  Scenario: Remove item from cart
    Given I have a smartphone in the shopping cart
    When I remove the smartphone from the cart
    Then the cart should be empty

  Scenario: Proceed to checkout
    Given I have a smartphone in the shopping cart
    When I click on the checkout button
    Then I should be redirected to the login or payment page