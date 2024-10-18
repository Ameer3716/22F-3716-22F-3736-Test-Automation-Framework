const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/login.page');

// Cucumber step definition for login
Given('I am on the Daraz login page', async () => {
    await browser.url('https://member.daraz.pk/user/login');
});

When('I login with valid credentials', async () => {
    await LoginPage.login('ameersultan0310@gmail.com', 'ameeer@3716'); // Replace with your actual credentials
});
When('I click on the login button', async () => {
    await LoginPage.loginButton.click();
});

Then('I should be logged into my account', async () => {
    // Add validation step for successful login
    await expect(browser).toHaveUrlContaining('account/dashboard');
});

When(/^I enter invalid username "([^"]*)"$/, async (username) => {
    await LoginPage.username.setValue(username);
});

When(/^I enter invalid password "([^"]*)"$/, async (password) => {
    await LoginPage.password.setValue(password);
});

Then('I should see an error message', async () => {
    // Add validation step for error message
    await expect($('.error-message-class')).toBeDisplayed();  // Modify with actual error message selector
});
