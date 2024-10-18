import { expect } from 'chai';
import { Given, When, Then } from '@wdio/cucumber-framework';

// Declare the global variable for TypeScript
declare const $: (selector: string) => WebdriverIO.Element;

Given('I am on the login page', async () => {
    await browser.url('https://www.daraz.com');
});

When('I enter valid credentials', async () => {
    await $('#login-email').waitForDisplayed();
    await $('#login-email').setValue('ameersultan0310@gmail.com');
    
    await $('#login-password').waitForDisplayed();
    await $('#login-password').setValue('ameer@3716');
    
    await $('#login-button').waitForDisplayed();
    await $('#login-button').click();
});

Then('I should see the dashboard', async () => {
    const dashboardTitle = await $('#dashboard-title');
    await dashboardTitle.waitForDisplayed(); // Wait for the dashboard title to be displayed
    expect(await dashboardTitle.isDisplayed()).to.be.true;
});
