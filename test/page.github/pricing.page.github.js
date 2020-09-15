/**
 * PricingPageGitHub for webpage https://github.com/pricing
 */
class PricingPageGitHub {

    get joinForFree () {
        return $('a[data-ga-click*="Join for free"]');
    }

    clickJoinForFree() {
        this.joinForFree.click();
    }
}

module.exports = new PricingPageGitHub();