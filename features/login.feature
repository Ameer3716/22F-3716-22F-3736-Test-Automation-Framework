Feature: Login functionality for Daraz

  Scenario: User logs in with valid credentials
    Given I am on the Daraz login page
    When I enter valid username "ameersultan0310@gmail.com"
    And I enter valid password "ameer@3716"
    And I click on the login button
    Then I should be logged into my account

Scenario: User logs in with invalid credentials
    Given I am on the Daraz login page
    When I enter invalid username "invalid@example.com"
    And I enter invalid password "wrongpassword"
    And I click on the login button
    Then I should see an error message  

 