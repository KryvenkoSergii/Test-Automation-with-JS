const assert = require('assert');
const mainPage = require('../page/main.page.js');
const randomString = require('../utils/random.string')
const mainPageGitHub = require('../page.github/main.page.github')
const joinPageGitHub = require('../page.github/join.page')
const loginPageGitHub = require('../page.github/login.page.github')
const loggingUserPageGitHub = require('../page.github/logging.user.main.page.github')
const forgetPasswordPageGitHub = require('../page.github/password.reset.page.github');
const pricingPageGitHub = require('../page.github/pricing.page.github');
const explorePageGitHub = require('../page.github/explore.page.github');
const topicsPageGitHub = require('../page.github/topics.page.github');
const explorePageGithub = require('../page.github/explore.page.github');
const searchPageGithub = require('../page.github/search.page.github');
//const { clear } = require('console');

describe('Homework: Automation with Javascript', () => {

    xit('homework N1.1: go to webdriver.io, click API', () => {
        browser.url('https://webdriver.io');
        const apiLink = $('.slidingNav [href="/docs/api.html"]');
        apiLink.click();
        let title = browser.getTitle();
        console.log("homework N1.1 Title: " + title);
        expect(browser).toHaveTitle('API Docs · WebdriverIO');
    })

    xit('homework N1.2: API page - get attribute href, get top title', () => {
        browser.url('https://webdriver.io');
        const apiLink = $('.slidingNav [href="/docs/api.html"]');
        apiLink.click();
        let title = browser.getTitle();
        let assert = require('assert');
        const jsonWireLink = $('a[href*="JsonWireProtocol"]');
        const topTitle = $('#__docusaurus');
        console.log("homework N1.2: API jsonWireLink 1. text: " + jsonWireLink.getText());
        console.log("homework N1.2: API jsonWireLink 2. attribute href: " + jsonWireLink.getAttribute('href'));
        console.log("homework N1.2: API URL: " + driver.getUrl());
        console.log("homework N1.2: API top title: " + topTitle.getText());
        expect(browser).toHaveTitle('API Docs · WebdriverIO');
        expect(browser).toHaveUrl('https://webdriver.io/docs/api.html');
        assert.equal(topTitle.getText(), "API Docs", "Error: title not found");
    })

    xit('homework N1.3: in field Search input test "test is DONE!" and pause 5sec', () => {
        browser.url('https://webdriver.io');
        const searchField = $('#search_input_react');
        searchField.setValue('test is DONE!');
        console.log("Input text in Serch field: " + searchField.getAttribute('value'));
        browser.pause(5000);
    })

    /* Homework2:
    * 1. go to page https://webdriver.io/docs/api.html
    * 2. open link 'JSONWire protocol' in new tab (getAttribute and newWindow)
    * 3. switch to open tab
    * 4. check element 'strong a[href="/SeleniumHQ/selenium/wiki"]' isDisplayed. Out to console
    * 5. Switch back to page https://webdriver.io/docs/api.html
    * 6. Using 'waitUntil' wait for a text '.postHeaderTitle' = 'API Docs' (getText()='API Docs')
    * 7. Take screenshot '.postHeaderTitle'
    * 8. Out to console isDisplayed 'href="https://twitter.com/webdriverio"'
    * 9. Out to console isDisplayedInViewPort 'href="https://twitter.com/webdriverio"'
    * 10. Scroll to element 'href="https://twitter.com/webdriverio"'
    * 11. Out to console isDisplayed 'href="https://twitter.com/webdriverio"'
    * 12. Out to console isDisplayedInViewPort 'href="https://twitter.com/webdriverio"'
    * 13. Out to console isFocused 'href="/blog/"'
    * 14. Click to element 'href="/blog/"'
    * 15. Out to console isFocused 'href="/blog/"'
    */
    xit('Homework2', () => {
        browser.url('https://webdriver.io/docs/api.html');

        let jSONWireprotocolLink = $('[href*="/JsonWireProtocol"]');
        let attr = jSONWireprotocolLink.getAttribute('href');
        browser.newWindow(attr);

        browser.switchWindow(attr);

        const strongIsDisplayed = $('strong a[href="/SeleniumHQ/selenium/wiki"]').isDisplayed();
        console.log("strongIsDisplayed: " + strongIsDisplayed);

        browser.switchWindow('https://webdriver.io/docs/api.html');

        const postHeaderTitleElem = $('.postHeaderTitle');
        browser.waitUntil(() => postHeaderTitleElem.getText() === 'API Docs',{
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }, 5000, 'postHeaderTitle is not displayed');

        // postHeaderTitleElem.saveScreenshot('../Homework2_Screenshot.png');

        let twitterLink = $('[href="https://twitter.com/webdriverio"]');
        let twitterLinkIsDisplayedInViewPort = twitterLink.isDisplayedInViewport();
        console.log("twitterLink IsDisplayed before scroll: " + twitterLink.isDisplayed());
        console.log("twitterLink isDisplayedInViewPort before scroll: " + twitterLinkIsDisplayedInViewPort);
        twitterLink.scrollIntoView();
        twitterLinkIsDisplayedInViewPort = $('[href="https://twitter.com/webdriverio"]').isDisplayedInViewport();
        console.log("twitterLink IsDisplayed after scroll: " + twitterLink.isDisplayed());
        console.log("twitterLink isDisplayedInViewPort after scroll: " + twitterLinkIsDisplayedInViewPort);

        const blogLink = $('[href="/blog/"]');
        console.log("blogLink isFocused before click: " + blogLink.isFocused());
        blogLink.click();
        console.log("blogLink isFocused after click: " + blogLink.isFocused());

    })

    /* Homework3: page object - click on 'Docs' button
    */
    xit('Homework3', () => {
        browser.url('https://webdriver.io');
        mainPage.clickDocsButton();
        browser.pause(5000);
    })

    /* Homework4: GitHub (page object) realize registration
    * 1.1 registration with random username, email, password, SignUp
    * 1.2 test check url current page with ('github.com/join')
    * 1.3 check text 'Verify your account' is displayed
    */
    xit('Homework4.1: GitHub (page object) realize registration (top form)', () => {
        browser.url('https://github.com');
        mainPageGitHub.inputRandomCredentialsInTopForm();
        mainPageGitHub.clickSignUpTopButton();
        expect(browser).toHaveUrl('https://github.com/join');
        let title = browser.getTitle();
        let isDisplayedText = joinPageGitHub.veryYourAccountText.isDisplayed();
        let text = joinPageGitHub.veryYourAccountText.getText();
        assert.equal(text, "Verify your account", "Error: text not found");
        console.log("Title = " + title);
        console.log("Text = '" + text + "' is Displayed: " + isDisplayedText);
    })

    /* Homework4: GitHub (page object) realize registration
    * 2.1 registration with random username, email, password, SignUp (bottom control)
    * 2.2 test check url current page with ('github.com/join')
    * 2.3 check text 'Verify your account' is displayed
    */
    xit('Homework4.2: GitHub (page object) realize registration (bottom form)', () => {
        browser.url('https://github.com');
        mainPageGitHub.inputRandomCredentialsInBottomForm();
        mainPageGitHub.clickSignUpBottomButton();
        expect(browser).toHaveUrl('https://github.com/join');
        let title = browser.getTitle();
        let isDisplayedText = joinPageGitHub.veryYourAccountText.isDisplayed();
        let text = joinPageGitHub.veryYourAccountText.getText();
        assert.strictEqual(text, "Verify your account", "Error: text not found");
        console.log("Title = " + title);
        console.log("Text = '" + text + "' is Displayed: " + isDisplayedText);
    })

    /* Homework4: GitHub (page object)
    * 3.1 login with test credentials
    * 3.2 check some data (name, nickname, email ...)
    */
    xit('Homework4.3: login with test credentials and check some data (name, nickname, email...)', () => {
        browser.url('https://github.com');
        mainPageGitHub.clickSignInButton();
        loginPageGitHub.inputMyCredentials();
        loginPageGitHub.clickSignInButton();        
        let userName = loggingUserPageGitHub.userName.getText();        
        console.log("userName = " + userName);        
        //assert.equal(userName, process.env.GITHUB_USERNAME, "Error: wrong username");
        assert.strictEqual(userName, process.env.GITHUB_USERNAME, "Error: wrong username");
    })

    /* Homework4: GitHub (page object)
    * 4.1 click 'forgot password'
    * 4.2 negative test: check 'forgot' if we didn't enter email and wrong email
    * 4.3 positive test: check 'forgot' if we entered right email
    */
    xit('Homework4.4: click (forgot password)', () => {
        // negative test 1 (empty email)
        browser.url('https://github.com');
        mainPageGitHub.clickSignInButton();
        loginPageGitHub.clickForgotPasswordLink();
        forgetPasswordPageGitHub.clickSendPasswordButton();
        let errorText = forgetPasswordPageGitHub.errorMessage.getText();
        //console.log("Error1: " + errorText.includes("That address is not a verified primary email"));
        assert.strictEqual(errorText.includes("That address is not a verified primary email"), true, "Error: wrong message")
        //
        // negative test 2 (wrong email)
        browser.url('https://github.com');
        mainPageGitHub.clickSignInButton();
        loginPageGitHub.clickForgotPasswordLink();
        forgetPasswordPageGitHub.inputRandomEmail();
        errorText = forgetPasswordPageGitHub.errorMessage.getText();
        //console.log("Error2: " + errorText.includes("That address is not a verified primary email"));
        assert.strictEqual(errorText.includes("That address is not a verified primary email"), true, "Error: you entered an existing email")
        //
        // positive test 3 (right email)
        browser.url('https://github.com');
        mainPageGitHub.clickSignInButton();
        loginPageGitHub.clickForgotPasswordLink();
        forgetPasswordPageGitHub.inputSomeRightEmail();
        let message = forgetPasswordPageGitHub.rightMessage.getText();
        //console.log("Message: " + message.includes("Check your email for a link to reset your password."));
        assert.strictEqual(message.includes("Check your email for a link to reset your password."), true, "Error: you entered a wrong email")
    })

    /* Homework4: GitHub (page object) (working only on opened UI)
    * 5.1 mouse hover to top elements on the main page
    * 5.2 check if this elements is displayed
    */
    xit('Homework4.5', () => {
        browser.url('https://github.com');
        browser.maximizeWindow();
        browser.pause(1000);
        mainPageGitHub.whyGitHubButton.moveTo();
        assert.strictEqual(true, mainPageGitHub.whyGitHubButton.isDisplayed(), "Error: whyGitHubButton isn't displayed")
        //browser.pause(1000);
        mainPageGitHub.exploreButton.moveTo();
        assert.strictEqual(true, mainPageGitHub.exploreButton.isDisplayed(), "Error: exploreButton isn't displayed")
        //browser.pause(1000);
        mainPageGitHub.pricingButton.moveTo();
        assert.strictEqual(true, mainPageGitHub.pricingButton.isDisplayed(), "Error: pricingButton isn't displayed")
        //browser.pause(2000);
    })

    /* Homework4: GitHub (page object) (!!!warning!!! working with displayed UI)
    * 6.2 click Pricing->Plans->click 'Join for free'
    * 6.3 create random account
    */
    xit('Homework4.6', () => {
        browser.url('https://github.com');
        mainPageGitHub.clickPlansButton();
        //browser.pause(2000);
        pricingPageGitHub.clickJoinForFree();
        //browser.pause(2000);
        //
        let text = joinPageGitHub.veryYourAccountText.getText();
        assert.strictEqual(text, "Verify your account", "Error: text not found");
        //browser.pause(2000);
        //
        joinPageGitHub.inputRandomCredentialsInForm();
        //browser.pause(2000);
        joinPageGitHub.clickCreateAccountButton();
    })

    /* Homework4: GitHub (page object)
    * 7.1 click Explore->Explore GitHub->Topics
    * 7.2 check title 'Topics'
    */
    xit('Homework4.7', () => {
        browser.url('https://github.com');
        mainPageGitHub.clickExploreGitHubButton();
        explorePageGithub.clickTopicsButton();
        let title = browser.getTitle();
        console.log("Title = " + title);
        assert.strictEqual(title.includes("Topics on GitHub"), true, "Error: title does not match with an expected result");
        let topTitle = topicsPageGitHub.titleTopWord.getText();
        console.log("topTitle = " + topTitle);
        assert.strictEqual(topTitle, "Topics", "Error: text not found");
    })

    /* Homework4: GitHub (page object)
    * 8.1 in search enter 'webdriverio' and click enter
    * 8.2 click in Languages 'TypeScript'
    * 8.3 click on the first finding result
    * 8.4 check url 'webdriverio'
    */
    xit('Homework4.8', () => {
        browser.url('https://github.com');
        let query = "webdriverio";
        mainPageGitHub.searchSomeQuery(query);
        //browser.pause(1000);
        searchPageGithub.clickLanguageTypeScript();        
        //
        browser.pause(1000); // necessary delay !!!
        console.log("URL = " + driver.getUrl());
        searchPageGithub.clickFirstResult();
        //browser.pause(2000);
        browser.waitUntil(() =>{
            console.log("After click clickFirstResult() URL = " + driver.getUrl().toLowerCase());
            return driver.getUrl().toLowerCase().includes("typescript");
        }, 5000, 'typescript is not displayed');
        let urlName = driver.getUrl();
        console.log("URL = " + urlName);
        assert.strictEqual(urlName.includes(query), true, "Error: URI does not contain a query word: " + query);
        assert.strictEqual(urlName.includes("typescript"), true, "Error: URI does not contain a query word: typescript");
    })

    /* Homework4: GitHub (page object)
    * 9.1 main page - get start with GitHub enterprise
    * 9.2 click 'start free'
    * 9.3 choose 'Enterprise Cloud'
    * 9.4 enter random credentials
    * 9.5 come back using action button in browser
    * 9.6 choose 'Enterprise Server'
    * 9.7 enter random credentials, radiobutton, text field questions, accept
    */
    xit('Homework4.9', () => {
        
    })

    /* Homework4: GitHub (page object)
    * 10.1 main page - click 'Careers' on the buttom control
    * 10.2 click 'Open positions'
    * 10.3 print to console all labels existing types of position
    */
    xit('Homework4.10', () => {
        
    })

    xit('', () => {
        
    })

    xit('', () => {
        
    })
})