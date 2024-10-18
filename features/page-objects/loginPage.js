class LoginPage {
    // Selectors for login page elements
    get username() { return $('input[placeholder="Please enter your Phone Number or Email"]'); }
    get password() { return $('input[placeholder="Please enter your password"]'); }
    get loginButton() { return $('button.next-btn-primary'); }

    // Login function
    async login(user, pass) {
        await this.username.setValue(user);   // Enter the email/phone number
        await this.password.setValue(pass);   // Enter the password
        await this.loginButton.click();       // Click the login button
    }
}

module.exports = new LoginPage();
