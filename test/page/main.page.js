/**
 * MainPage for site https://webdriver.io/
 */
class MainPage {

    // get webelement 'search'
    get searchField() {
        return $('#search_input_react');
    }

    // get webelement top 'Docs' button
    get docsButton() {
        return $('.slidingNav [href="/docs/gettingstarted.html"]');
    }

    // get webelement top 'API' button
    get apiButton() {
        return $('.slidingNav [href="/docs/api.html"]');
    }

    // get webelement top 'Blog' button
    get blogButton() {
        return $('[href="/blog/"]');
    }

    // input some value to webelement
    setValueInSearchField (value) {
        this.searchField.addValue(value);
        
    }

    // click on top 'Docs' button
    clickDocsButton() {
        this.docsButton.click();
    }

    // click on top 'API' button
    clickApiButton() {
        this.apiButton.click();
    }

    // click on top 'Blog' button
    clickBlogButton() {
        this.blogButton.click();
    }
}

module.exports = new MainPage();