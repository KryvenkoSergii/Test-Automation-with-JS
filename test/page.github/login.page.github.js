/**
 * LoginPageGitHub for webpage https://github.com/login
 */
class LoginPageGitHub {

    get userNameField() {
        return $('#login_field');
    }
    
    get userPasswordField() {
        return $('#password');
    }
    
    get signInButton() {
        return $('input[type="submit"]');
    }

    get forgotPasswordLink() {
        return $('a[href="/password_reset"]');
    }

    inputMyCredentials() {
        let userName = process.env.GITHUB_USERNAME;    
        let password = process.env.GITHUB_PASSWORD;
        this.userNameField.addValue(userName);
        this.userPasswordField.addValue(password);
        
    }

    clickSignInButton() {
        this.signInButton.click();
    }

    clickForgotPasswordLink() {
        this.forgotPasswordLink.click();
    }
}

module.exports = new LoginPageGitHub();