const randomString = require('../utils/random.string')

/**
 * MainPageGitHub for site https://github.com/
 */
class MainPageGitHub {

    get searchField() {
        return $('input[name="q"]');
    }

    get searchQureyButton() {
        return $('#jump-to-suggestion-search-global');
    }

    get userNameField() {
        return $('input[id="user[login]"]');
    }

    get userEmailField() {
        return $('input[id="user[email]"]');
    }

    get userPasswordField() {
        return $('input[id="user[password]"]');
    }

    get signUpButton() {
        return $('button[type="submit"]');
    }

    get signInButton() {
        return $('a[href="/login"]');
    }

    get dropMenuButton() {
        return $('button[class*="js-details-target"]');
    }

    get userNameBottomField() {
        return $('input[id="user[login]-footer"]');
    }

    get userEmailBottomField() {
        return $('input[id="user[email]-footer"]');
    }

    get userPasswordBottomField() {
        return $('input[id="user[password]-footer"]');
    }

    get signUpBottomButton() {
        return $('div[class*="container-xl"] button[class*="mt-n1"]');
    }

    get whyGitHubButton() {
        return $('//nav[@aria-label="Global"]//ul//li[1]//details');
    }

    get exploreButton() {
        return $('//nav[@aria-label="Global"]//ul//li[4]//details');
    }

    get exploreGitHuButton() {
        return $('//nav[@aria-label="Global"]//ul//li[4]//details//a[@href="/explore"]');
    }

    get pricingButton() {
        return $('//nav[@aria-label="Global"]//ul//li[6]//details');
    }

    get pricingPlansButton() {
        return $('//nav[@aria-label="Global"]//ul//li[6]//details//a[@href="/pricing"]');
    }

    searchSomeQuery(query) {
        if ($('button[class*="js-details-target"]').isDisplayedInViewport()) {
            this.dropMenuButton.click();
        }
        this.searchField.click();
        this.searchField.setValue(query);
        this.searchQureyButton.click();
    }

    inputRandomCredentialsInTopForm() {
        let userName = randomString.getString(15);
        let email = randomString.getString(5) + "@" + randomString.getString(4) + ".com";
        let password = randomString.getString(15);
        this.userNameField.addValue(userName);
        this.userEmailField.addValue(email);
        this.userPasswordField.addValue(password);
    }

    clickSignUpTopButton() {
        this.signUpButton.click();
    }

    inputRandomCredentialsInBottomForm() {
        let userName = randomString.getString(15);
        let email = randomString.getString(5) + "@" + randomString.getString(4) + ".com";
        let password = randomString.getString(15);
        this.userNameBottomField.scrollIntoView();
        this.userNameBottomField.addValue(userName);
        this.userEmailBottomField.addValue(email);
        this.userPasswordBottomField.addValue(password);
    }

    clickSignUpBottomButton() {
        this.signUpBottomButton.click();
    }

    clickSignInButton() {
        if ($('button[class*="js-details-target"]').isDisplayedInViewport()) {
            this.dropMenuButton.click();
        }
        this.signInButton.click();
    }

    clickExploreButton() {
        if ($('button[class*="js-details-target"]').isDisplayed()) {
            this.dropMenuButton.click();
        }
        this.exploreButton.click();
    }

    clickExploreGitHubButton() {
        if ($('button[class*="js-details-target"]').isDisplayed()) {
            this.dropMenuButton.click();
        }
        if(!$('//nav[@aria-label="Global"]//ul//li[4]//details//a[@href="/explore"]').isDisplayed()) {
            this.exploreButton.click();
        }
        this.exploreGitHuButton.click();
    }

    clickPricingButton() {
        if ($('button[class*="js-details-target"]').isDisplayedInViewport()) {
            this.dropMenuButton.click();
        }
        this.pricingButton.click();
    }

    clickPlansButton() {
        if ($('button[class*="js-details-target"]').isDisplayedInViewport()) {
            this.dropMenuButton.click();
        }
        if(!$('//nav[@aria-label="Global"]//ul//li[6]//details//a[@href="/pricing"]').isDisplayedInViewport()) {
            this.pricingButton.click();
        }
        this.pricingPlansButton.click();
    }
}

module.exports = new MainPageGitHub();