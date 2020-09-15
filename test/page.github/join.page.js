const randomString = require('../utils/random.string')

/**
 * JoinPageGitHub for webpage https://github.com/join
 */
class JoinPageGitHub {

    get veryYourAccountText() {
        return $('h2');
    }

    get userNameField() {
        return $('#user_login');
    }

    get userEmailField() {
        return $('#user_email');
    }

    get userPasswordField() {
        return $('#user_password');
    }

    get emailPreferencesCheckBox() {
        return $('#all_emails');
    }

    get createAccountButton() {
        return $('#signup_button');
    }

    inputRandomCredentialsInForm() {
        let userName = randomString.getString(15);
        let email = randomString.getString(5) + "@" + randomString.getString(4) + ".com";
        let password = randomString.getString(15);
        this.userNameField.addValue(userName);
        this.userEmailField.addValue(email);
        this.userPasswordField.addValue(password);
        this.emailPreferencesCheckBox.click();
    }

    clickCreateAccountButton() {
        if($('#signup_button').isClickable()) {
            this.createAccountButton.click();
        } else {
            console.log("CreateAccount Button is not clickable")
        }
    }
}

module.exports = new JoinPageGitHub();