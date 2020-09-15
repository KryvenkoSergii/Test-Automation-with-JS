/**
 * SerchPageGitHub for page https://github.com/search
 */
class SerchPageGitHub {

    get languageMenu() {
        return $('#codesearch_select_language');
    }

    get languageTypeScript() {
        return $('a[href*="/search?l=TypeScript"]');
    }

    get firstResult() {
        return $('ul.repo-list li:first-child a[href]');
    }

    clickLanguageTypeScript() {
        if(!$('a[href*="/search?l=TypeScript"]').isDisplayed()) {
            this.languageMenu.click();
        }
        this.languageTypeScript.click();
        //
        // if(!$('a[href*="/search?l=TypeScript"]').isDisplayed()) {
        //     this.languageMenu.click();
        //     browser.waitUntil(() =>{
        //         //console.log("After click clickLanguageTypeScript() URL = " + driver.getUrl().toLowerCase());
        //         //let url = driver.getUrl().toLowerCase();
        //         //return url.includes("typescript");
        //         return this.languageTypeScript.isFocused();
        //     }, 5000, 'URI: typescript is not displayed');
        //     this.languageMenu.click();
        // }
        // if($('a[href*="/search?l=TypeScript"]').isDisplayed()) {
        //     browser.waitUntil(() =>{
        //         //console.log("After click clickLanguageTypeScript() URL = " + driver.getUrl().toLowerCase());
        //         //let url = driver.getUrl().toLowerCase();
        //         //return url.includes("typescript");
        //         return this.languageTypeScript.isFocused();
        //     }, 5000, 'URI: typescript is not displayed');
        // }
    }

    clickFirstResult() {
        this.firstResult.click();
    }
}

module.exports = new SerchPageGitHub();