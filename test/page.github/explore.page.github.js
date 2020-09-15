/**
 * ExplorePageGitHub for webpage https://github.com/explore
 */
class ExplorePageGitHub {

    get topicsButton() {
        return $('nav[role="navigation"] a[href="/topics"]');
    }

    clickTopicsButton() {
        this.topicsButton.click();
    }
}

module.exports = new ExplorePageGitHub();