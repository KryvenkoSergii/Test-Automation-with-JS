const mainPage = require('../page/main.page.js');
const docsPage = require('../page/docs.page.js');
const assert = require('assert');

describe('webdriver.io page', () => {
    // getTitle
    xit('should have the right title', () => {
        browser.url('https://webdriver.io') // open browser and load page with url
        let title = browser.getTitle();
        console.log("Title: " + title);
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js'); // check page title 'assert'
        browser.pause(1000);
    })

    // addValue
    xit('should demonstrate the addValue command', ()=>{
        browser.url('https://webdriver.io')
        let input = $('#search_input_react') // define webelement using selector
        input.addValue('test') // input text in field
        browser.pause(1000); // pause 1 sec
        input.addValue(123)
        browser.pause(2000);

        value = input.getValue() // get text from webelement
        expect(value === 'test123') // assert
    })

    // setValue
    xit('should demonstrate setValue command', function(){
        browser.url('https://webdriver.io')
        let elem = $('#search_input_react');
        elem.setValue('test123'); // send text in field
        browser.pause(2000);
    })

    // pause, click
    xit('should demonstrate the click command', ()=>{
        browser.url('https://webdriver.io');
        let blogButton = $('[href="/blog/"]');
        browser.pause(2000);
        blogButton.click(); // click on button 'Blog'
        browser.pause(2000);
        let guideButton = $('.nav-site.nav-site-internal [href*="/docs/gettingstarted.html"]');
        guideButton.click(); // click on button 'Get Started'
        browser.pause(2000);
    })

    // getAttribute
    xit('should demonstrate the getAttribute command', () => {
        browser.url('https://webdriver.io');
        const input = $('#search_input_react');
        let attr = input.getAttribute('title');
        console.log("Title attribute is: " + attr); // output "Search"
        browser.pause(2000);

        input.setValue('asdzxc');
        attr = input.getAttribute('value');
        console.log("Value attribute is: " + attr); // output "asdzxc"
        browser.pause(2000);
    })

    // getLocation
    xit('should demonstrate the geoLocation function', () => {
        browser.url('https://webdriver.io');
        const logo = $('#search_input_react');
        const location = logo.getLocation(); // output webelement's location
        console.log(location);

        const xLocation = logo.getLocation('x'); // output webelement's x position location
        console.log("xLocation: " + xLocation);
    })

    // getText
    xit('should demonstrate the getText function', () => {
        browser.url('https://webdriver.io');
        const blogButton = $('[href="/blog/"]');
        console.log("Text for element: " + blogButton.getText()); // output webelement's text
    })

    // isClickable
    xit('should detect if an element is clickable', () => {
        browser.url('https://webdriver.io');
        const blogButton = $('[href="/blog/"]');
        let clickable = blogButton.isClickable();
        console.log("Is clickable? " + clickable); // true/false
    })

    // isDisplayed
    xit('should detect if an element is displayed', () => {
        browser.url('https://webdriver.io');
        const blogButton = $('[href="/blog/"]');
        isDisplayed = blogButton.isDisplayed();
        console.log("Is displayed? " + isDisplayed); // true/false
    })

    // isDisplayedInViewport without scrolling
    xit('should detect if an element is visible', () => {
        browser.url('https://webdriver.io');
        let isBlogDisplayedInViewport = $('[href="/blog/"]').isDisplayedInViewport();
        console.log("isBlogDisplayedInViewport: " + isBlogDisplayedInViewport); // true/false

        let isGitHubDisplayedInViewport = $('#footer [href="https://github.com/webdriverio/webdriverio"]').isDisplayedInViewport();
        console.log("isGitHubDisplayedInViewport: " + isGitHubDisplayedInViewport); // true/false
    })

    // isEnabled
    xit('should detect if an element is enabled', () => {
        browser.url('https://webdriver.io');
        const blogButton = $('[href="/blog/"]');
        let isEnabled = blogButton.isEnabled();
        console.log("isEnabled: " + isEnabled); // true
    })

    // isFocused
    xit('should detect the focus of an element', () => {
        browser.url('https://webdriver.io');
        const input = $('#search_input_react');
        console.log("search.isFocused() before click: " + input.isFocused()); // false

        browser.pause(2000);
        input.click();
        console.log("search.isFocused() after click: " + input.isFocused()); // true
        browser.pause(2000);
    })
    
    // scrolling to element
    xit('should move to element', () => {
        browser.url('https://webdriver.io');
        let gitHubLink = $('#footer [href="https://github.com/webdriverio/webdriverio"]');
        browser.pause(4000);
        gitHubLink.scrollIntoView();
        browser.pause(3000);
    })
    
    // take screenshot
    xit('should save a screenshot of the element view', function () {
        browser.url('https://webdriver.io');
        const elem = $('#footer [href="https://github.com/webdriverio/webdriverio"]');
        elem.saveScreenshot('../elemScreenshot.png');
    })
    
    // switch Window
    xit('should switch to another window', () => {
        browser.url('https://google.com');

        // create to new window
        browser.newWindow('https://webdriver.io');
        browser.pause(3000);

        // switch back via url match
        browser.switchWindow('google.com');
        browser.pause(3000);
        // switch back via title match
        browser.switchWindow('Next-gen browser and mobile automation test framework for Node.js');
        browser.pause(3000);
    })
    
    // .waitUntil(condition, { timeout, timeoutMsg, interval })
    xit('should wait until', () => {
        browser.url('https://webdriver.io');
        browser.waitUntil(() =>{
            return $('[href="/blog/"]').isDisplayed();
        }, 5000, 'blog is not displayed');
    })

    // .getHTML(includeSelectorTag) - (default: true)
    xit('should get html for certain element', () => {
        browser.url('https://webdriver.io/docs/api.html');
        let outerHTML = $('.siteNavGroupActive').getHTML(); // return element in DOM
        console.log("outerHTML: " + outerHTML);

        let innerHTML = $('.siteNavGroupActive').getHTML(false); // return inner element in DOM
        console.log("innerHTML: " + innerHTML);
    })

    // skip test ("x" or it.skip)
    it.skip('should switch to another window', () => {
        browser.url('https://google.com');

        // create to new window
        browser.newWindow('https://webdriver.io');
        browser.pause(3000);

        // switch back via url match
        browser.switchWindow('google.com');
        browser.pause(3000);
        // switch back via title match
        browser.switchWindow('Next-gen browser and mobile automation test framework for Node.js');
        browser.pause(3000);
    })

    // run only this test (it.only)
    //it.only('should wait until text has changed', () => {
    //    browser.url('https://webdriver.io');
    //})

    // export outer class "mainPage" and his method and use it
    it('should demonstrate the addValue command', () => {
        browser.url('https://webdriver.io');    
        browser.maximizeWindow();
        //mainPage.searchField.addValue('test');
        //browser.pause(2000);
        mainPage.setValueInSearchField("123test345");
        browser.pause(2000);
    })

    // export outer classed "mainPage" and "docsPage" and his method and use them
    it('should demonstrate the clicks on different pages', () => {
        //browser.url('https://webdriver.io');
        mainPage.clickDocsButton();
        browser.pause(2000);
        docsPage.clickEditButton();
        browser.pause(2000);
    })

    xit('', () => {
        
    })
})