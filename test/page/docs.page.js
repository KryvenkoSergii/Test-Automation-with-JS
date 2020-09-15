class DocsPage {

    // get webelement 'Edit' button
    get editButton(){
        return $('.edit-page-link.button');
    }

    clickEditButton(){
        this.editButton.click();
    }
}

module.exports = new DocsPage();