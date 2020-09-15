/**
 * TopicsPageGitHub for webpage https://github.com/topics
 */
class TopicsPageGitHub {

    get titleTopWord() {
        return $('h1.h0-mktg');
    }
}

module.exports = new TopicsPageGitHub();