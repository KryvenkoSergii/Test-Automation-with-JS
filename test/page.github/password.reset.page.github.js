const randomString = require('../utils/random.string')

/**
 * PasswordResetPageGitHub for webpage https://github.com/password_reset
 */
class PasswordResetPageGitHub {

    get enterEmailField() {
        return $('#email_field');
    }

    get sendPasswordButton() {
        return $('input[type="submit"]');
    }

    get errorMessage() {
        return $('div[class*="flash-error"] div');
    }

    get rightMessage() {
        return $('div[class*="auth-form-body"] p');
    }

    inputUserEmail() {
        let email = process.env.USER_EMAIL;
        this.enterEmailField.addValue(email);
        this.sendPasswordButton.click();
    }

    inputSomeRightEmail() {
        /* 10 min email:
        * AndewWilson
        * fpmtoiqoeqmwiturab@etochq.com
        * qwerty123456!qwe123asd
        */
        let email = "fpmtoiqoeqmwiturab@etochq.com";
        this.enterEmailField.addValue(email);
        this.sendPasswordButton.click();
    }

    inputRandomEmail() {
        let email = randomString.getString(5) + "@" + randomString.getString(4) + ".com";
        this.enterEmailField.addValue(email);
        this.sendPasswordButton.click();
    }

    clickSendPasswordButton() {
        this.sendPasswordButton.click();
    }
}

module.exports = new PasswordResetPageGitHub();