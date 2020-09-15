/**
 * LogginUserMainPageGitHub for logged user
 */
class LogginUserMainPageGitHub {

    get userName() {
        return $('div[class*="border-bottom"] summary[role="button"] span');
    }
}

module.exports = new LogginUserMainPageGitHub();